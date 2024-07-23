import Breadcrambs from '@/app/components/Breadcrambs'
import ServicesDescription from '@/app/components/ServicesDescription'
import ServicesTemplate from '@/app/components/Ui/ServicesTemplate'
import Image from 'next/image'
import React from 'react'
import marble from "../../../../public/images/services-images/1031167.webp";

function page() {
  return (
    <>   
    <Breadcrambs pageTitle="Marble Polishing" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={marble} alt="marble" />        
        <ServicesDescription title="Marble Polishing" fontSize="4xl" description="Mammut Facility Management offers professional marble polishing services to restore the natural beauty and shine of your marble surfaces. Our experienced technicians use advanced techniques and high-quality products to remove scratches, stains, and dullness, leaving your marble floors, countertops, and other surfaces looking pristine and elegant." />        
        <ServicesDescription title="Restoration and Polishing" fontSize="2xl" description="Marble surfaces can become dull and scratched over time due to foot traffic, spills, and general wear and tear. Our marble polishing services include a thorough restoration process that removes surface imperfections and restores the natural luster of your marble. We use specialized polishing equipment and products to achieve a high-gloss finish that enhances the beauty of your space." />
        <ServicesDescription title="Stain and Scratch Removal" fontSize="2xl" description="Stains and scratches can detract from the appearance of your marble surfaces. Mammut Facility Management’s experts are skilled in removing various types of stains and surface scratches without damaging the marble. We carefully treat each affected area to restore the uniform appearance of your marble surfaces." />
        <ServicesDescription title="Sealing and Protection" fontSize="2xl" description="To maintain the beauty and durability of your marble surfaces, we offer sealing services that provide a protective barrier against stains and damage. Sealing helps to prevent spills from penetrating the marble and makes it easier to clean and maintain. Our high-quality sealants are designed to enhance the longevity and appearance of your marble." />
        <ServicesDescription title="Customized Care" fontSize="2xl" description="Different types of marble require specific care and maintenance. Our technicians assess the type and condition of your marble surfaces to determine the most appropriate polishing and restoration methods. We tailor our services to meet the unique needs of your marble, ensuring optimal results." />
        <ServicesDescription title="Residential and Commercial Services" fontSize="2xl" description="Mammut Facility Management provides marble polishing services for both residential and commercial properties. Whether you need to restore the marble floors in your home or maintain the marble surfaces in your office or retail space, our team is equipped to handle projects of all sizes. We work efficiently to minimize disruption to your daily activities while delivering exceptional results." />
        <ServicesDescription title="Routine Maintenance" fontSize="2xl" description="Regular maintenance is essential to keep your marble surfaces looking their best. We offer routine marble polishing services to maintain the shine and cleanliness of your marble over time. Our maintenance plans can be customized to fit your schedule and needs, ensuring your marble surfaces always look stunning." />
        <ServicesDescription title='Eco-Friendly Solutions' fontSize='2xl' description='We prioritize the use of eco-friendly products and techniques in our marble polishing services. Our cleaning and polishing solutions are safe for your family, pets, and the environment.' />
      </ServicesTemplate>
    </>
  )
}

export default page