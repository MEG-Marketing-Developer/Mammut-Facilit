import { v4 as uuid } from "uuid";
import { IService } from "../interfaces";
export const serviceList: IService[] = [

    {
        id: uuid(),
        title: "Deep Cleaning",
        titleImage: "./images/services-icons/cleaning-bucket.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:"../images/services-images/2150520644.webp",
        linkUrl: 'https://mammutfm.ch/our-services/deep-cleaning/'
    },
    {
        id: uuid(),
        title: "AC Maintenance",
        titleImage: "./images/services-icons/streamline_hotel-air-conditioner.svg",
        description:
            "Skilled experts maintain your AC system efficiently.",
        imageURL: "../images/services-images/470.webp",
        linkUrl: 'https://mammutfm.ch/our-services/ac-maintenance/'
    },
    {
        id: uuid(),
        title: "Painting Service",
        titleImage: "./images/services-icons/bi_paint-bucket.svg",
        description:
            "Transform your space with skilled painting.",
        imageURL: "../images/services-images/138.webp",
        linkUrl: 'https://mammutfm.ch/our-services/painting-service/'
    },
    {
        id: uuid(),
        title: "Pest Control",
        titleImage: "./images/services-icons/material-symbols_pest-control.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:
            "../images/services-images/2148848550.webp",
        linkUrl: 'https://mammutfm.ch/our-services/pest-control/'
    },
    {
        id: uuid(),
        title: "Maintenance Work",
        titleImage: "./images/services-icons/carbon_tools.svg",
        description:
            "Skilled experts ensure smooth maintenance operations.",
        imageURL:
            "../images/services-images/58251.webp",
        linkUrl: 'https://mammutfm.ch/our-services/maintenance-work/'
    },
    {
        id: uuid(),
        title: "AC Duct Cleaning",
        titleImage: "./images/services-icons/icon-park-solid_air-conditioning.svg",
        description:
            "Improve air quality with thorough duct cleaning.",
        imageURL:
            "../images/services-images/171462.webp",
        linkUrl: 'https://mammutfm.ch/our-services/deep-cleaning/'
    },
    {
        id: uuid(),
        title: "Upholstery Cleaning",
        titleImage: "./images/services-icons/solar_sofa-linear.svg",
        description:
            "Revive your furniture with professional upholstery.",
        imageURL:
            "../images/services-images/8150122.webp",
        linkUrl: 'https://mammutfm.ch/our-services/upholstery-cleaning/'
    },
    {
        id: uuid(),
        title: "Marble Polishing",
        titleImage: "./images/services-icons/game-icons_floor-polisher.svg",
        description:
            "Restore the shine with expert marble polishing.",
        imageURL:
            "../images/services-images/1031167.webp",
        linkUrl: 'https://mammutfm.ch/our-services/marble-polishing/'
    },
    {
        id: uuid(),
        title: "Pool Cleaning",
        titleImage: "./images/services-icons/ph_swimming-pool.svg",
        description:
            "Intensive, comprehensive clean by experienced professionals.",
        imageURL:
            "../images/services-images/10901142.webp",
        linkUrl: 'https://mammutfm.ch/our-services/pool-cleaning/'
    },

]
