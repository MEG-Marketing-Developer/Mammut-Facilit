import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import React from "react";
import paint from "../../../../public/images/services-images/138.webp";

function page() {
  return (
    <>
      <Breadcrambs pageTitle="Painting Service" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={paint} alt="paint" />
        <ServicesDescription
          title="Painting Service"
          fontSize="4xl"
          description="Mammut Facility Management is your go-to provider for professional painting services in Dubai. With our team of skilled painters and a commitment to excellence, we bring new life and vibrancy to your residential or commercial space."
        />
        <ServicesDescription
          title="Interior Painting"
          fontSize="2xl"
          description="Our expert painters have the knowledge and expertise to handle all your interior painting needs. Whether you’re looking to refresh a single room or give your entire property a makeover, Mammut Facility Management will ensure a flawless and beautiful finish. We pay attention to every detail, from surface preparation to color selection, to deliver exceptional results that exceed your expectations."
        />
        <ServicesDescription
          title="Exterior Painting"
          fontSize="2xl"
          description="Enhance the curb appeal and protection of your property with our professional exterior painting services. We use high-quality paints and weather-resistant coatings to withstand Dubai’s harsh climate. Our team will meticulously prepare the surfaces and apply the paint with precision, ensuring a durable and long-lasting finish."
        />
        <ServicesDescription
          title="System Upgrades"
          fontSize="2xl"
          description="If you’re looking to upgrade your current AC system to a more energy-efficient and advanced model, Mammut Facility Management has you covered. Our team can guide you through the selection process, recommending systems that align with your specific requirements and budget."
        />
        <ServicesDescription
          title="Residential Painting"
          fontSize="2xl"
          description="Your home deserves a painting service that understands your vision. Mammut Facility Management works closely with you to bring your ideas to life and create a living space that reflects your style and personality. Our residential painting services cover everything from bedrooms and living areas to kitchens, bathrooms, and more."
        />
        <ServicesDescription
          title="Commercial Painting"
          fontSize="2xl"
          description="Make a lasting impression on your clients and create an inspiring work environment with our commercial painting services. Whether it’s an office space, retail store, or any commercial facility, we have the expertise to handle projects of all sizes. We work efficiently and minimize disruption to your business operations."
        />
        <ServicesDescription
          title="Color Consultation"
          fontSize="2xl"
          description="Choosing the right colors can be a daunting task. Our color consultation services help you make informed decisions that complement your space and achieve the desired ambiance. We’ll provide guidance on color schemes, finishes, and trends to ensure a cohesive and visually appealing result."
        />
      </ServicesTemplate>
    </>
  );
}

export default page;
