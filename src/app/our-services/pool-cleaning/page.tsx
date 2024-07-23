import Breadcrambs from '@/app/components/Breadcrambs'
import ServicesDescription from '@/app/components/ServicesDescription'
import ServicesTemplate from '@/app/components/Ui/ServicesTemplate'
import Image from 'next/image'
import React from 'react'
import pool from "../../../../public/images/services-images/10901142.webp"

function page() {
  return (
    <>   
   <Breadcrambs pageTitle="Pool Cleaning" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={pool} alt="Pool Cleaning" />        
        <ServicesDescription title="Pool Cleaning" fontSize="4xl" description="Mammut Facility Management offers professional pool cleaning services to ensure your pool is clean, safe, and ready for use. Our trained technicians use advanced equipment and environmentally-friendly products to maintain optimal water quality and cleanliness in residential and commercial pools." />        
        <ServicesDescription title="Comprehensive Cleaning" fontSize="2xl" description="Our pool cleaning services include thorough cleaning of the pool walls, floors, and tiles to remove dirt, algae, and debris. We also clean and empty the skimmer and pump baskets, ensuring proper filtration and circulation of water." />
        <ServicesDescription title="Water Testing and Balancing" fontSize="2xl" description="Maintaining the right balance of chemicals is crucial for the health and safety of your pool. We conduct regular water testing to measure pH levels, chlorine levels, and other parameters. Based on the results, we adjust the chemicals to ensure clean, balanced water that is safe for swimming." />
        <ServicesDescription title="Skimming and Vacuuming" fontSize="2xl" description="To keep your pool free from leaves, insects, and other debris, we regularly skim the surface and vacuum the pool floor. This helps maintain a clean and inviting swimming environment." />
        <ServicesDescription title="Filter Cleaning and Maintenance" fontSize="2xl" description="Proper filtration is essential for keeping your pool water clear and healthy. We clean and maintain your pool’s filtration system, including backwashing the filter and ensuring it operates efficiently." />
        <ServicesDescription title="Tile and Grout Cleaning" fontSize="2xl" description="We clean and scrub the pool tiles and grout lines to remove buildup and prevent discoloration. This enhances the appearance of your pool and prevents algae growth." />
        <ServicesDescription title="Equipment Inspection" fontSize="2xl" description="Our technicians inspect your pool equipment, including pumps, heaters, and lights, to ensure they are functioning properly. Any issues or potential problems are identified and addressed promptly to prevent costly repairs." />
        <ServicesDescription title='Seasonal Opening and Closing' fontSize='2xl' description='We offer seasonal pool opening and closing services to prepare your pool for the summer season and safely winterize it for the colder months. This includes removing and storing pool covers, checking equipment, and adjusting water levels.' />
        <ServicesDescription title='Emergency Services' fontSize='2xl' description='If you encounter unexpected pool issues, our emergency pool cleaning services are available to address urgent problems promptly. We are committed to providing quick and effective solutions to keep your pool in top condition.' />
      </ServicesTemplate>
    </>
  )
}

export default page