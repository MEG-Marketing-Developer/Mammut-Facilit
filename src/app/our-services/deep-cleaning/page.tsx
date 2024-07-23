import Breadcrambs from "@/app/components/Breadcrambs";
import ServicesDescription from "@/app/components/ServicesDescription";
import ServicesTemplate from "@/app/components/Ui/ServicesTemplate";
import Image from "next/image";
import React from "react";
import deep from "../../../../public/images/services-images/2150520644.webp";

function deepCleaning() {
  return (
    <>
      <Breadcrambs pageTitle="Deep Cleaning" />
      <ServicesTemplate>
        <Image className="w-full h-auto" src={deep} alt="deep" />
        <ServicesDescription
          title="Deep Cleaning"
          fontSize="4xl"
          description="At Mammut Facility Management, we redefine cleanliness with our comprehensive deep cleaning services. Our expert team meticulously tackles every nook and cranny, ensuring a spotless environment that exceeds expectations. From sanitizing high-touch surfaces to removing stubborn stains, we employ advanced techniques and eco-friendly products to restore your space to its pristine condition. With Mammut, you can trust in our dedication to detail and commitment to delivering unparalleled results, leaving your facility impeccably clean and refreshed."
        />
        <ServicesDescription
          title="Why choose Deep Cleaning"
          fontSize="2xl"
          description="With Mammut Facility Management, our standard cleaning service goes beyond the surface, ensuring a thorough cleanse of the areas you frequently interact with, utilizing industry-standard equipment such as mops and brooms. However, our deep cleaning service takes this to the next level. Our dedicated team meticulously attends to every detail, from the interiors of cabinets and ovens to the cleaning of AC vents and ceiling fans. We leave no corner untouched, extending our care to balcony and lawn furniture, ensuring a comprehensive and refreshing transformation of your space."
        />
        <ServicesDescription
          title="The perfect move-in/out clean!"
          fontSize="2xl"
          description="Experience the seamless transition with Mammut Facility Management’s move-in/out deep cleaning service! Many of our clients choose this option for their relocation needs, as our comprehensive cleaning ensures that your previous residence is primed for handover to the landlord or new occupants. Meanwhile, our team ensures your new abode is immaculate, eliminating any traces of previous occupancy. With Mammut, enjoy a stress-free move with no mess left behind!"
        />
        <ServicesDescription
          title="Curious about pricing?"
          fontSize="2xl"
          description="Our rates are tailored to your home’s size, starting at AED 320 for a studio apartment deep cleaning. Upon request, our team can utilize specialized steam cleaning machines to tackle bathroom grout, ensuring a sparkling finish. For villa deep cleaning, prices begin at AED 420 for a 1-bedroom unit."
        />
        <ServicesDescription
          title="Ideal for every family"
          fontSize="2xl"
          description="Regardless of your family size, deep cleaning with Mammut ensures a thoroughly sanitized environment, free from dirt, dust, and mold. Our process prioritizes safety and comfort, making it perfect for households with children. Concerned about chemical exposure? Our deep cleaning services offer a solution, and you can even request steam cleaning for baby cribs and toys, ensuring a hygienic space for your little ones."
        />
      </ServicesTemplate>
    </>
  );
}

export default deepCleaning;
