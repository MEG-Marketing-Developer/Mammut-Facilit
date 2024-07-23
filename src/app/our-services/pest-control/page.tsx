import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import React from "react";
import Pest from "../../../../public/images/services-images/2148848550.webp";

function page() {
  return (
    <>
      <Breadcrambs pageTitle="Pest Control" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={Pest} alt="Pest" />
        <ServicesDescription
          title="Pest Control"
          fontSize="4xl"
          description="Mammut Facility Management offers comprehensive pest control services to keep your residential or commercial space free from pests. Our team of trained professionals utilizes the latest techniques and environmentally-friendly solutions to eliminate pests and prevent future infestations. We tailor our services to meet your specific needs, ensuring a safe and pest-free environment"
        />
        <ServicesDescription
          title="Inspection and Prevention"
          fontSize="2xl"
          description="Our pest control process begins with a thorough inspection of your property to identify the type and extent of pest problems. Based on our findings, we develop a customized treatment plan that targets the specific pests invading your space. We also provide preventive measures to reduce the risk of future infestations, helping you maintain a clean and healthy environment."
        />
        <ServicesDescription
          title="Residential Pest Control"
          fontSize="2xl"
          description="Protect your home and family from unwanted pests with our residential pest control services. Whether you’re dealing with ants, termites, rodents, or any other pests, Mammut Facility Management has the expertise to address the issue promptly and effectively. Our treatments are safe for children and pets, ensuring peace of mind while we restore comfort to your home."
        />
        <ServicesDescription
          title="Commercial Pest Control"
          fontSize="2xl"
          description="Pests can disrupt business operations and tarnish your reputation. Our commercial pest control services are designed to handle pest issues in offices, retail stores, restaurants, and other commercial facilities. We work discreetly and efficiently to minimize disruptions to your business, providing long-lasting solutions that keep your premises pest-free."
        />
        <ServicesDescription
          title="Specialized Treatments"
          fontSize="2xl"
          description="Different pests require different approaches. Mammut Facility Management offers specialized treatments for a variety of pests, including bed bugs, termites, cockroaches, and more. Our technicians are trained in the latest pest control methods and use advanced equipment to ensure effective eradication and prevention."
        />
        <ServicesDescription
          title="Emergency Pest Control"
          fontSize="2xl"
          description="Pest emergencies can arise unexpectedly and require immediate attention. Our emergency pest control services are available 24/7 to address urgent pest problems. Whether it’s a sudden infestation or an isolated incident, our team is ready to provide swift and effective solutions to protect your property and well-being."
        />
      </ServicesTemplate>
    </>
  );
}

export default page;
