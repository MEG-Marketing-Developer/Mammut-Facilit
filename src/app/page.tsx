"use client";
import Image from "next/image";
import ServicesCard from "./components/ServicesCard";
import Button from "./components/Ui/Button";
import { serviceList } from "./data";
import { accordionItems } from "./data";
import welcomeImg from "../../public/images/Group 150.webp";
import shieldImg from "../../public/images/shield 1.svg";
import dateAvailability from "../../public/images/Group-184.svg";
import topRated from "../../public/images/Group-181.svg";
import topQuality from "../../public/images/Group-183.svg";
import assetImage from "../../public/images/Asset-11.png";
import Accordion from "./components/Accordion";

const handleClick = () => {
  window.location.href = "https://mammutfm.client-booking.com/";
};

/**
 * @constant
 * @type {Array<JSX.Element>}
 * @param {Array<Object>} serviceList - An array of service objects.
 * @param {Object} serviceList[].service - The individual service object.
 * @param {number|string} serviceList[].service.id - The unique identifier for the service.
 * @param {Object} service - The individual service object passed to the `ServicesCard` component.
 * @returns {Array<JSX.Element>} An array of `ServicesCard` components with unique keys.
 */

const servicesList = serviceList.map((service) => (
  <ServicesCard key={service.id} service={service} />
));

const faqList = accordionItems.slice(0, 4).map((faq) => (
<Accordion key={faq.id} items={[faq]} />
));

export default function Home() {
  return (
    <>
      {/* Hero Section   */}
      <div className="hero-container bg-[url('../../public/images/Group186.webp')] bg-cover	p-28 flex justify-end flex-col items-center pt-80 pb-16 bg-center	">
        <p className="text-5xl text-center font-extrabold text-white ">
          EXPERIENCE QUALITY FACILITY <br /> MANAGEMENT TODAY
        </p>
        <Button
          className="bg-white text-center mt-10 py-4 px-10 text-2xl font-bold white-button-animation"
          onClick={handleClick}
        >
          Book now
        </Button>
      </div>
      {/* Services Section  */}
      <div className="services-section bg-[url('../../public/images/Our-service-bg-1.png')]">
        <h2 className="text-center p-7 text-4xl font-black text-[#113553]">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-4 md:px-20 px-10 pb-20">
          {servicesList}
        </div>
      </div>

      {/*  Welcome Section */}
      <div className="welcome-section flex flex-col sm:flex-row w-full justify-center space-x-5 py-4 md:px-20 px-7">
        <div className="flex-1 p-0 sm:p-16 pl-0">
          <Image src={welcomeImg} alt="welcomeImg" />
        </div>
        <div className="flex flex-col justify-between flex-1 py-8 sm:py-16 pl-0 pr-0 sm:pr-8">
          <div className="flex justify-start items-center space-x-5">
            <hr className="h-0.5 my-8 bg-[#0f94fa] border-0 w-20 sm:w-28" />
            <h3 className="font-extrabold text-[#54595f]">Welcome to Mammut</h3>
          </div>
          <p className="text-[#727272] text-xl sm:text-2xl font-Inter">
            At Mammut Facility Management Company, we are dedicated to providing
            world-class solutions that empower businesses to focus on and
            enhance their core activities. We take pride in establishing
            valuable partnerships and are committed to delivering exceptional
            service and support.
          </p>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-2">
              <Button
                className=" text-center mt-10 py-2 px-7 text-lg font-bold welcome-button-animation text-white w-full"
                onClick={handleClick}
              >
                Get Brochure
              </Button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      {/* Assurance Section */}
      <div className="assurance-section flex flex-col sm:flex-row w-full py-10 md:px-20 px-7 justify-between space-x-5 items-center">
        <div className="w-1/2  mx-auto sm:w-1/4 p-4">
          <Image src={shieldImg} alt="shieldImg" width={127} />
        </div>
        <div className="space-y-3">
          <h3 className="font-bold text-white text-lg text-center sm:text-left sm:text-2xl font-Inter">
            The Mammut Assurance – Unmatched Home Care Excellence
          </h3>
          <p className="text-white text-center sm:text-left text-base sm:text-xl font-Inter">
            We provide top-tier Facility Management with expertly trained
            professionals, ensuring your home's security and your peace of mind.
            Excellence is our commitment.
          </p>
        </div>
      </div>
      {/* Why Choose Mammut  */}

      <div className="why-choose-section">
        <h2 className="text-center p-7 text-2xl sm:text-4xl font-black text-[#031225]">
          Why Choose Mammut?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-4 md:px-20 px-10 pb-20">
          <Image
            src={dateAvailability}
            alt="date availability"
            className="w-1/2 sm:w-5/6 place-self-center"
          />
          <Image
            src={topRated}
            alt="top Rated"
            className="w-1/2 sm:w-5/6 place-self-center"
          />
          <Image
            src={topQuality}
            alt="top Quality"
            className="w-1/2 sm:w-5/6 place-self-center"
          />
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
      {/* FAQ  */}
      <h2 className="text-center p-7 text-4xl font-black text-[#113553]">
      Frequently Asked Questions
        </h2>
      <div className="p-8">{faqList}</div>
    </>
  );
}
