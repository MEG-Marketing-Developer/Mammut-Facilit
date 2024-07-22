import { v4 as uuid } from "uuid";
import { IService, IFaq } from "../interfaces";
export const serviceList: IService[] = [

    {
        id: uuid(),
        title: "Deep Cleaning",
        titleImage: "../images/services-icons/cleaning-bucket.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:"../images/services-images/2150520644.webp",
        linkUrl: 'https://mammutfm.ch/our-services/deep-cleaning/'
    },
    {
        id: uuid(),
        title: "AC Maintenance",
        titleImage: "../images/services-icons/streamline_hotel-air-conditioner.svg",
        description:
            "Skilled experts maintain your AC system efficiently.",
        imageURL: "../images/services-images/470.webp",
        linkUrl: 'https://mammutfm.ch/our-services/ac-maintenance/'
    },
    {
        id: uuid(),
        title: "Painting Service",
        titleImage: "../images/services-icons/bi_paint-bucket.svg",
        description:
            "Transform your space with skilled painting.",
        imageURL: "../images/services-images/138.webp",
        linkUrl: 'https://mammutfm.ch/our-services/painting-service/'
    },
    {
        id: uuid(),
        title: "Pest Control",
        titleImage: "../images/services-icons/material-symbols_pest-control.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:
            "../images/services-images/2148848550.webp",
        linkUrl: 'https://mammutfm.ch/our-services/pest-control/'
    },
    {
        id: uuid(),
        title: "Maintenance Work",
        titleImage: "../images/services-icons/carbon_tools.svg",
        description:
            "Skilled experts ensure smooth maintenance operations.",
        imageURL:
            "../images/services-images/58251.webp",
        linkUrl: 'https://mammutfm.ch/our-services/maintenance-work/'
    },
    {
        id: uuid(),
        title: "AC Duct Cleaning",
        titleImage: "../images/services-icons/icon-park-solid_air-conditioning.svg",
        description:
            "Improve air quality with thorough duct cleaning.",
        imageURL:
            "../images/services-images/171462.webp",
        linkUrl: 'https://mammutfm.ch/our-services/deep-cleaning/'
    },
    {
        id: uuid(),
        title: "Upholstery Cleaning",
        titleImage: "../images/services-icons/solar_sofa-linear.svg",
        description:
            "Revive your furniture with professional upholstery.",
        imageURL:
            "../images/services-images/8150122.webp",
        linkUrl: 'https://mammutfm.ch/our-services/upholstery-cleaning/'
    },
    {
        id: uuid(),
        title: "Marble Polishing",
        titleImage: "../images/services-icons/game-icons_floor-polisher.svg",
        description:
            "Restore the shine with expert marble polishing.",
        imageURL:
            "../images/services-images/1031167.webp",
        linkUrl: 'https://mammutfm.ch/our-services/marble-polishing/'
    },
    {
        id: uuid(),
        title: "Pool Cleaning",
        titleImage: "../images/services-icons/ph_swimming-pool.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:
            "../images/services-images/10901142.webp",
        linkUrl: 'https://mammutfm.ch/our-services/pool-cleaning/'
    },

]
export const accordionItems: IFaq[] = [

    {
    id: uuid(),
      title: "What is Mammut Facility Management?",
      content:
        "Mammut Facility Management is a dedicated cleaning and hospitality company committed to delivering exceptional, personalized, and cost-effective services. We specialize in providing comprehensive facility management solutions to meet the unique needs of our clients.",
    },
    {
        id: uuid(),
      title: "What services does Mammut Facility Management provide?",
      content: `We offer a wide range of services to cater to the diverse needs of our clients. Our services include but are not limited to:
  
  Commercial cleaning: We provide comprehensive cleaning solutions for offices, retail spaces, educational institutions, healthcare facilities, and more.
  Hospitality services: We offer professional housekeeping, janitorial services, and facility maintenance for hotels, resorts, and other hospitality establishments.
  Facility management: We provide end-to-end facility management solutions, including maintenance, repairs, space planning, and vendor management.
  Specialized cleaning: We have expertise in specialized cleaning services such as carpet cleaning, window cleaning, deep cleaning, and post-construction cleaning.`,
    },
    {
        id: uuid(),
      title:
        "How does Mammut Facility Management ensure the quality of its services?",
      content:
        "We prioritize quality in everything we do. Our experienced professionals undergo rigorous training to ensure they are equipped with the necessary skills and knowledge to deliver exceptional service. We also conduct regular inspections and implement quality control measures to maintain high standards. Additionally, we value client feedback and actively seek it to continuously improve our services.",
    },
    {
        id: uuid(),
      title: "How can I request services from Mammut Facility Management?",
      content:
        "Absolutely! We understand that each industry and business has unique requirements. We take pride in our ability to provide customized solutions that address the specific needs of our clients. Whether you are in the corporate sector, healthcare industry, hospitality sector, or any other industry, we can tailor our services to meet your specific needs.",
    },
    {
        id: uuid(),
      title: "Does Mammut offer customized solutions for specific industries or businesses?",
      content:
        "To request our services, you can reach out to us through our website, email, or phone. Our dedicated team will promptly assist you, assess your needs, and provide a tailored solution to meet your requirements.",
    },
    {
        id: uuid(),
      title: "What geographic areas does Mammut Facility Management serve?",
      content:
        "We provide our services in [mention the geographic areas you serve]. However, we are continuously expanding our reach, so if you have a specific location in mind, please reach out to us, and we will do our best to accommodate your needs.",
    },
  ];
  
