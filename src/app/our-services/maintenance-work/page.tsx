import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import React from "react";
import maintain from "../../../../public/images/services-images/58251.webp";

function page() {
  return (
    <>
      <Breadcrambs pageTitle="Mainteance Work" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={maintain} alt="maintain" />
        <ServicesDescription
          title="Mainteance Work"
          fontSize="4xl"
          description="Mammut Facility Management provides a comprehensive range of maintenance services to keep your property in top condition. Our experienced team is dedicated to delivering high-quality workmanship and reliable solutions for both residential and commercial properties. We ensure that all aspects of your building are functioning efficiently and safely."
        />
        <ServicesDescription
          title="Preventive Maintenance"
          fontSize="2xl"
          description="Preventive maintenance is key to avoiding costly repairs and ensuring the longevity of your property. We offer scheduled maintenance services to regularly inspect and service your systems, including HVAC, plumbing, electrical, and more. Our proactive approach helps identify potential issues before they become major problems, saving you time and money."
        />
        <ServicesDescription
          title="Plumbing Maintenance"
          fontSize="2xl"
          description="From leaky faucets to major plumbing issues, our skilled plumbers can handle it all. Mammut Facility Management provides comprehensive plumbing maintenance services, including inspections, repairs, and replacements. We ensure your plumbing system operates smoothly and efficiently, preventing water damage and costly repairs."
        />
        <ServicesDescription
          title="Electrical Maintenance"
          fontSize="2xl"
          description="Keep your electrical systems in optimal condition with our professional electrical maintenance services. Our certified electricians conduct thorough inspections, identify potential hazards, and perform necessary repairs and upgrades. We prioritize safety and efficiency, ensuring your electrical systems meet all regulatory standards."
        />
        <ServicesDescription
          title="HVAC Maintenance"
          fontSize="2xl"
          description="Regular HVAC maintenance is essential for optimal performance and energy efficiency. Our technicians provide thorough inspections, cleaning, and servicing of your heating and cooling systems. We help you maintain a comfortable indoor environment while reducing energy costs and extending the lifespan of your HVAC equipment."
        />
        <ServicesDescription
          title="Building Repairs"
          fontSize="2xl"
          description="Mammut Facility Management offers reliable building repair services to address any structural issues or wear and tear. Our team is equipped to handle repairs for walls, floors, ceilings, and other structural components. We ensure that your property remains safe, functional, and aesthetically pleasing."
        />
        <ServicesDescription
          title="Emergency Maintenance"
          fontSize="2xl"
          description="Unexpected maintenance issues can arise at any time. Our emergency maintenance services are available 24/7 to address urgent problems promptly. Whether it’s a burst pipe, electrical outage, or any other critical issue, our team is ready to provide swift and effective solutions to minimize disruption and protect your property."
        />
      </ServicesTemplate>
    </>
  );
}

export default page;
