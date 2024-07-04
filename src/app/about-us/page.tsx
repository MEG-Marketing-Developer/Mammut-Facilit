import Image from "next/image";
import Breadcrambs from "../components/Breadcrambs";
import aboutUs from "../../../public/images/about-us.png";

const aboutPage = () => {
  return (
    <>
      <Breadcrambs pageTitle="About Us" />
      <div className="w-full flex flex-col sm:flex-row justify-around px-8 sm:px-16 py-12 sm:py-24 sm:space-x-11">
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
      <div className="flex w-full justify-around p-5 space-x-5">
            {/* <div className="border-2 p-10 border-[#ccc]"></div> */}
        </div>
    </>
  );
};

export default aboutPage;
