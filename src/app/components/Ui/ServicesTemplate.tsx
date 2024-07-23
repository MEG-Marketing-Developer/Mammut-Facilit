"use client";
import React from "react";
import ServicesAside from "../ServicesAside";
import SubscribeBox from "../SubscribeBox";

interface IProps {
  children: React.ReactNode;
}
function ServicesTemplate({ children }: IProps) {
  return (
    <>
      <div className="flex flex-col lg:flex-row py-12">
        <main className="flex-2">
          <div className="px-[5%] lg:pl-12 lg:pr-32 space-y-3">{children}</div>
        </main>
        <aside className="flex-1">
          <ServicesAside />
        </aside>
      </div>
      <div className="w-full lg:w-[70%] py-10 mx-auto">
        <SubscribeBox />
      </div>
    </>
  );
}

export default ServicesTemplate;
