import Image from "next/image";
import Breadcrambs from "../components/Breadcrambs";
import aboutUs from "../../../public/images/about-us.png";
import AboutBox from "../components/AboutBox";
import mission from "../../../public/images/mission.png";
import vision from "../../../public/images/vision.png";
import goal from "../../../public/images/goal.png";
import international from "../../../public/images/seattle-international-services.png";
import seattle from "../../../public/images/seattle-fm-logo.png";
import overseas from "../../../public/images/overseas.png";
import prival from "../../../public/images/prival-logo.png";

const aboutPage = () => {
  return (
    <>
      <Breadcrambs pageTitle="About Us" />
      <div className="w-full flex flex-col sm:flex-row justify-around px-8 sm:px-16 py-20 sm:py-24 sm:space-x-11">
        <div className="h-auto w-full flex-1">
          <Image src={aboutUs} alt="about us" className="w-[700px] h-auto" />
        </div>
        <div className="flex flex-1 flex-col items-center gap-5">
          <div className="flex justify-start items-center space-x-5 w-full">
            <hr className="h-0.5 my-8 bg-[#0f94fa] border-0 w-20 sm:w-28" />
            <h3 className="font-bold text-[#54595f]">About Us</h3>
          </div>
          <h2 className="text-black text-2xl sm:text-4xl font-bold mb-6">
            We Offer A Wide Range Of Facility Management Services
          </h2>
          <p className="text-sm sm:text-xl text-justify">
            We are a team who are motivated to passionately work towards
            achieving your business goals. Our activity revolves around building
            an environment of openness, integrity and trust which are our
            cardinal principles and pillars of our service ethics. Our
            professionalism will definitely touch lives and foster an efficient
            and cheerful business climate.
          </p>
          <br />
          <p className="text-sm sm:text-xl text-justify">
            We are a team who are motivated to passionately work towards
            achieving your business goals. Our activity revolves around building
            an environment of openness, integrity and trust which are our
            cardinal principles and pillars of our service ethics. Our
            professionalism will definitely touch lives and foster an efficient
            and cheerful business climate.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row sm:w-[80%] mx-auto justify-around p-5 space-x-5 space-y-40 sm:space-y-0">
        <AboutBox
          imageUrl={mission}
          imageAlt="mission"
          boxTitle="Our Mission"
          boxDescription=" Our mission is to support the success of our clients by providing superior cleaning, maintenance, and moving services. We strive to enable businesses and home to concentrate on their primary operations by offering solutions that enhance their work environments and operational efficiency."
          backgroundColor="#fff"
          textColor="#123553"
          descriptionColor="#123553"
          dataAos="fade-left"
        />
        <AboutBox
          imageUrl={vision}
          imageAlt="vision"
          boxTitle="Our Vision"
          boxDescription="Our vision is to be the leading facility management company renowned for reliability, innovation, and exceptional service quality. We aim to set the standard in our industry by continuously improving our services and exceeding our clients’ expectations."
          backgroundColor="#123553"
          textColor="#fff"
          descriptionColor="#fff"
          dataAos="fade-up"
        />
        <AboutBox
          imageUrl={goal}
          imageAlt="goal"
          boxTitle="Our Goal"
          boxDescription="Our goal at Mammut Facility Management Company is to provide exceptional facility management services that enhance business productivity and success. We strive to deliver tailored, reliable, and high-quality solutions, ensuring clean, safe, and efficient environments for our clients."
          backgroundColor="#fff"
          textColor="#123553"
          descriptionColor="#123553"
          dataAos="fade-right"
          />
      </div>

      <div className="flex justify-center items-center px-5 space-x-5 my-10 w-full">
            <hr className="h-0.5 my-8 bg-[#113553] border-0 w-20 sm:w-32" />
            <h3 className="font-extrabold text-[11px] sm:text-4xl text-[#113553]">Our Group of Companies</h3>
            <hr className="h-0.5 my-8 bg-[#113553] border-0 w-20 sm:w-32" />
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-10 sm:space-y-0 sm:space-x-10 pb-10">
            <Image src={international} alt="international" className="w-[80%] sm:w-[20%]" />
            <Image src={seattle} alt="seattle" className="w-[80%] sm:w-[20%]" />
            <Image src={overseas} alt="overseas" className="w-[80%] sm:w-[20%]" />
            <Image src={prival} alt="prival" className="w-[80%] sm:w-[20%]  " />
          </div>
    </>
  );
};

export default aboutPage;
