import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import React from "react";
import acMainten from "../../../../public/images/services-images/470.webp";

function page() {
  return (
    <>
      <Breadcrambs pageTitle="AC Maintenance" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={acMainten} alt="acMainten" />
        <ServicesDescription
          title="AC Maintenance"
          fontSize="4xl"
          description="At Mammut Facility Management, we understand the importance of maintaining a comfortable and healthy indoor environment, which is why we offer comprehensive AC maintenance services. Our skilled technicians specialize in keeping your air conditioning systems running efficiently, ensuring optimal performance and longevity. From routine inspections and cleaning to repairs and upgrades, we handle every aspect of AC maintenance with precision and expertise. With Mammut, you can trust that your AC units are in capable hands, providing you with reliable cooling and peace of mind throughout the year."
        />
        <ServicesDescription
          title="Repair and Maintenance"
          fontSize="2xl"
          description="Is your AC system acting up or not performing optimally? Our skilled technicians are here to help. We provide reliable AC repair services, diagnosing and fixing issues to restore your cooling system’s functionality. Additionally, our routine AC maintenance services help prevent problems, improve efficiency, and extend the lifespan of your equipment."
        />
        <ServicesDescription
          title="Duct Cleaning"
          fontSize="2xl"
          description="Clean and well-maintained ductwork is essential for optimal airflow and indoor air quality. Our duct cleaning services remove dirt, debris, and contaminants, ensuring that your AC system circulates clean and fresh air throughout your space."
        />
        <ServicesDescription
          title="System Upgrades"
          fontSize="2xl"
          description="If you’re looking to upgrade your current AC system to a more energy-efficient and advanced model, Mammut Facility Management has you covered. Our team can guide you through the selection process, recommending systems that align with your specific requirements and budget."
        />
        <ServicesDescription
          title="Emergency Services"
          fontSize="2xl"
          description="AC emergencies can happen when you least expect them. That’s why we offer 24/7 emergency services to address any urgent cooling system issues. Our team is just a phone call away, ready to provide swift and effective solutions."
        />
      </ServicesTemplate>
    </>
  );
}

export default page;
