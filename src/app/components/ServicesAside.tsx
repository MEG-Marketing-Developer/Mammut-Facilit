interface IProps {}
import React from "react";
import Link from "next/link";
import { serviceList } from "../data";
import Image from "next/image";
import ServicesForm from "./ServicesForm/Form";

import pdf from "../../../public/images/pdf.png";
import doc from "../../../public/images/doc.png";
import zip from "../../../public/images/zip.png";
import Button from "./Ui/Button";

const ServicesAside = ({}: IProps) => {
  const servicesList = serviceList.map((service) => (
    <Link
      key={service.id}
      className=" flex items-center space-x-3 w-full text-center hover:text-gray-800 text-gray-900 font-medium py-3 "
      href={service.linkUrl}
    >
      <Image
        className="w-4 h-4"
        width={20}
        height={20}
        src={service.titleImage}
        alt={service.title}
      />
      <h3 className="text-[#113553] hover:text-[#0f94fa] text-base font-bold">
        {service.title}
      </h3>
    </Link>
  ));
  return (
    <div className="bg-[#d6e2e3] pt-[5%] flex flex-col ">
      <div className="grid grid-cols-1  gap-5 py-4 md:px-20 px-6 sm:px-10 pb-20">
        <div className="bg-white flex flex-col border-t-8 border-[#4B8FAA] shadow-custom-shadow ml-0 lg:-ml-[33%] px-8">
          <h3 className="text-3xl text-[#113553] font-bold text-left py-8 pl-5">
            Service List
          </h3>
          <hr className="w-[30%] text-left ml-0 h-4 border-t-[3px] border-[#BACFD4]" />
          <div className="space-y-6 py-10">{servicesList}</div>
        </div>

        <div className="bg-white flex flex-col border-t-8 border-[#4B8FAA] shadow-custom-shadow ml-0 lg:-ml-[33%] px-8">
          <h3 className="text-3xl text-[#113553] font-bold text-left py-8 pl-5">
            Have a Questions?
          </h3>
          <hr className="w-[30%] text-left ml-0 h-4 border-t-[3px] border-[#BACFD4]" />
          <div className="space-y-6 py-10">
            <ServicesForm />
          </div>
        </div>

        <div className="bg-white flex flex-col border-t-8 border-[#4B8FAA] shadow-custom-shadow ml-0 lg:-ml-[33%] px-8">
          <h3 className="text-3xl text-[#113553] font-bold text-left py-8 pl-5">
            Download Now
          </h3>
          <hr className="w-[30%] text-left ml-0 h-4 border-t-[3px] border-[#BACFD4]" />
          <div className="space-y-6 py-10">
            <Link
              href="/download-app"
              className="flex items-center justify-start space-x-2 px-10 py-3 text-[#113553] font-bold text-base hover:text-[#0a7bff]"
            >
              <Image className="w-auto h-auto" width={20} height={20} src={pdf} alt="pdf" />
              <h3>Download Document.pdf</h3>
            </Link>
            <Link
              href="/download-app"
              className="flex items-center justify-start space-x-2 px-10 py-3 text-[#113553] font-bold text-base hover:text-[#0a7bff]"
            >
              <Image className="w-auto h-auto" width={20} height={20} src={doc} alt="doc" />
              <h3>Download Document.doc</h3>
            </Link>
            <Link
              href="/download-app"
              className="flex items-center justify-start space-x-2 px-10 py-3 text-[#113553] font-bold text-base hover:text-[#0a7bff]"
            >
              <Image className="w-auto h-auto" width={20} height={20} src={zip} alt="zip" />
              <h3>Download Document.zip</h3>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-[21%] shadow-custom-shadow ml-0 lg:-ml-[33%]  bg-[url('../../public/images/Group186.webp')] bg-cover	  justify-end  items-center  bg-center">          
          <div className="space-y-6 py-10 flex flex-col items-center">
          <h3 className="text-white font-bold text-3xl text-center">We Are Always<br/>Ready to Serve <br/>you</h3>
          <p className="text-white text-center ">Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor</p>
          <Button
        className=" bg-white text-center mt-10 py-3 px-6 text-base font-bold rounded-lg  white-button-animation"
      >
        Send Now
      </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ServicesAside;
