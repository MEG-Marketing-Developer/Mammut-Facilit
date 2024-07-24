import Image from "next/image";
import React from "react";
interface IProps {
  imageUrl: any;
  imageAlt: string;
  boxTitle: string;
  boxDescription: string;
  backgroundColor: "#fff" | "#123553";
  textColor: "#fff" | "#123553";
  descriptionColor: "#fff" | "#123553";
  dataAos: string;
}
function AboutBox({
  imageUrl,
  imageAlt,
  boxTitle,
  boxDescription,
  backgroundColor,
  textColor,
  descriptionColor,
  dataAos,
}: IProps) {
  const backgroundBoxColor = `bg-[${backgroundColor}]`;
  const textBoxColor = `text-[${textColor}]`;
  const descriptionBoxColor = `text-[${descriptionColor}]`;
  console.log("decriotion", backgroundBoxColor);
  return (
    <div
      data-aos={dataAos}
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className={`${backgroundBoxColor} flex-1 border pt-24 pb-16 px-10 flex flex-col items-center relative space-y-10`}
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        className="w-32 sm:w-40 h-auto absolute -top-24"
      />
      <h2 className={`${textBoxColor}  font-bold text-3xl text-left w-full`}>
        {boxTitle}
      </h2>
      <p className={`${descriptionBoxColor} text-sm text-justify w-full `}>
        {boxDescription}
      </p>
    </div>
  );
}

export default AboutBox;
