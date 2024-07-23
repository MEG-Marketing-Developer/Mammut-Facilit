"use client";
import React from "react";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import acDuct from "../../../../public/images/services-images/171462.webp";
import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";

function acDuctCleaning() {
  return (
    <>
      <Breadcrambs pageTitle="Ac Duct Cleaning" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={acDuct} alt="acDuct" />        
        <ServicesDescription title="AC Duct Cleaning" fontSize="4xl" description="Mammut Facility Management offers professional AC duct cleaning services to ensure optimal indoor air quality and efficient airflow in your residential or commercial space. Our experienced technicians use advanced equipment and techniques to thoroughly clean your ductwork, removing dust, debris, and contaminants that can affect your health and comfort." />        
        <ServicesDescription title="Improved Air Quality" fontSize="2xl" description="Over time, dust, allergens, and other pollutants can accumulate in your AC ducts, leading to poor indoor air quality. Our comprehensive duct cleaning services help eliminate these contaminants, ensuring that the air circulating throughout your property is clean and healthy. This is especially beneficial for individuals with allergies or respiratory conditions." />
        <ServicesDescription title="Enhanced System Efficiency" fontSize="2xl" description="Dirty and clogged ducts can impede airflow, causing your AC system to work harder and consume more energy. By cleaning your ducts, we enhance the efficiency of your cooling system, reducing energy costs and extending the lifespan of your equipment. Clean ducts also contribute to more consistent and comfortable indoor temperatures." />
        <ServicesDescription title="Thorough Inspection and Cleaning" fontSize="2xl" description="Our duct cleaning process begins with a detailed inspection of your ductwork to identify areas of concern. We use state-of-the-art tools to dislodge and remove accumulated dirt, dust, and debris from the ducts. Our technicians ensure that every nook and cranny is cleaned, leaving your ducts spotless and your AC system operating at peak performance." />
        <ServicesDescription title="Mold and Mildew Prevention" fontSize="2xl" description="Moisture in your ductwork can lead to the growth of mold and mildew, which can pose serious health risks. Mammut Facility Management’s duct cleaning services include the removal of mold and mildew, as well as measures to prevent their recurrence. This helps maintain a healthy indoor environment and protects your property from potential damage." />
        <ServicesDescription title="Odor Removal" fontSize="2xl" description="Unpleasant odors can linger in your AC ducts due to accumulated contaminants and mold. Our duct cleaning services effectively eliminate these odors, leaving your space smelling fresh and clean. We use eco-friendly products that are safe for your family, pets, and the environment." />
        <ServicesDescription title="Regular Maintenance" fontSize="2xl" description="To keep your ducts clean and your AC system running efficiently, we recommend regular duct cleaning as part of your maintenance routine. Mammut Facility Management offers scheduled duct cleaning services to ensure your ducts remain free from buildup and your indoor air quality stays high. Our team can create a maintenance plan tailored to your specific needs and schedule." />
      </ServicesTemplate>
    </>
  );
}

export default acDuctCleaning;
