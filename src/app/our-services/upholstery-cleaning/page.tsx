import Breadcrambs from '@/app/components/Breadcrambs'
import ServicesDescription from '@/app/components/ServicesDescription'
import ServicesTemplate from '@/app/components/Ui/ServicesTemplate'
import Image from 'next/image'
import React from 'react'
import upholstery from "../../../../public/images/services-images/8150122.webp"

function page() {
  return (
    <>   
    <Breadcrambs pageTitle="Upholstery Cleaning" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={upholstery} alt="upholstery" />        
        <ServicesDescription title="Upholstery Cleaning" fontSize="4xl" description="Mammut Facility Management provides expert upholstery cleaning services to refresh and revitalize your furniture. Our skilled technicians use advanced cleaning techniques and eco-friendly products to remove dirt, stains, and allergens from your upholstery, ensuring your furniture looks great and remains hygienic." />        
        <ServicesDescription title="Deep Cleaning" fontSize="2xl" description="Over time, dirt, dust, and allergens can become embedded in your upholstery, affecting its appearance and your indoor air quality. Our deep cleaning services penetrate the fabric to remove embedded particles, restoring the beauty and cleanliness of your furniture. We handle all types of upholstery, including sofas, chairs, and cushions." />
        <ServicesDescription title="Stain Removal" fontSize="2xl" description="Accidents happen, and stains can be tough to remove without damaging the fabric. Mammut Facility Management’s upholstery cleaning experts are trained to tackle a variety of stains, including those from food, drinks, pets, and more. We use specialized cleaning solutions that lift stains without harming your upholstery, leaving it looking like new." />
        <ServicesDescription title="Allergen Reduction" fontSize="2xl" description="Upholstered furniture can harbor allergens such as dust mites, pet dander, and pollen, which can affect your indoor air quality and trigger allergies. Our thorough cleaning process removes these allergens, creating a healthier living environment for you and your family. Regular upholstery cleaning can significantly improve indoor air quality and reduce allergy symptoms." />
        <ServicesDescription title="Fabric Protection" fontSize="2xl" description="To keep your upholstery looking its best for longer, we offer fabric protection treatments. These treatments create a protective barrier on the fabric, repelling spills and preventing stains from setting in. Fabric protection helps maintain the appearance and durability of your furniture, making it easier to clean and extending its lifespan." />
        <ServicesDescription title="Odor Elimination" fontSize="2xl" description="Unpleasant odors can become trapped in your upholstery, making your space feel less inviting. Our upholstery cleaning services effectively eliminate odors caused by pets, smoke, food, and more. We use deodorizing agents that neutralize odors at the source, leaving your furniture smelling fresh and clean." />
        <ServicesDescription title="Tailored Cleaning Solutions" fontSize="2xl" description="We understand that different fabrics require different cleaning methods. Mammut Facility Management provides tailored cleaning solutions based on the specific needs of your upholstery. Our technicians assess the fabric type, condition, and any specific concerns to ensure the best cleaning results." />
      </ServicesTemplate>
    </>
  )
}

export default page