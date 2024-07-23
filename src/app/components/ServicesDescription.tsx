import React from "react";
interface IProps {
  title: string;
  fontSize: "4xl" | "2xl";
  description: string;
}
function ServicesDescription({ title, fontSize, description }: IProps) {
  const fontSizeClass = `text-${fontSize}`;

  return (
    <div className="py-7 space-y-5"> 
        <h3 className={`${fontSizeClass} text-[#113553] font-black`}>{title}</h3>
    <p className="text-[#4b8faa] font-normal text-lg">{description}</p>
    </div>

  );
}

export default ServicesDescription;
