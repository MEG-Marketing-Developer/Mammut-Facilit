"use client";

import Image from "next/image";
import Breadcrambs from "../components/Breadcrambs"
import ServicesCard from "../components/ServicesCard";
import { serviceList } from "../data";
import Button from "../components/Ui/Button";
import assetImage from "../../../public/images/Asset-11.png";




const handleClick = () => {
    window.location.href = "https://mammutfm.client-booking.com/";
  };

const servicesList = serviceList.map((service) => (
    <ServicesCard key={service.id} service={service} />
  ));
  
const servicesPage = () =>{
    return (
        <> 
    <Breadcrambs pageTitle="Our Services" />
    <div className="services-section bg-[#fbfbfb] w-full py-12">
        <h2 className="text-center p-7 text-4xl font-black text-[#113553]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4 md:px-20 px-10 pb-20">
          {servicesList}
        </div>
      </div>

      {/* Get Offer  */}
      <div className="get-offer bg-[url('../../public/images/Group-175.png')] bg-cover bg-center bg-no-repeat relative flex flex-col sm:flex-row w-full sm:w-[1190px] h-auto sm:h-[497px] sm:justify-end mx-auto my-[5%] z-1">
        <Image
          src={assetImage}
          alt="asset image"
          className="sm:absolute sm:top-[-12%] sm:left-[5%] object-cover p-10 sm:p-0 -mt-20 sm:mt-0"
        />
        <div className="flex flex-col justify-between items-center sm:items-start w-full sm:w-3/5 p-14 space-y-6">
          <h3 className="text-white text-lg sm:text-6xl text-center sm:text-left font-bold">
            Get Limited Time Offer Upto 10% Off on Your First Booking
          </h3>
          <p className="text-white text-base sm:text-xl text-center sm:text-left">
            Experience the pristine difference with our top-tier cleaning
            services
          </p>
          <Button
            className="bg-white text-center py-2 px-7 text-lg font-bold white-button-animation"
            onClick={handleClick}
          >
            Book now
          </Button>
        </div>
      </div>
        </>
    )
}

export default servicesPage