import React from "react";
import Button from "./Ui/Button";

function SubscribeBox() {
  return (
    <div className="bg-[#0a2742] px-10 rounded-xl flex flex-col sm:flex-row items-center justify-between text-white py-20">
      <div className="flex flex-col items-start">
        <span className="text-white py-1 px-3 rounded mb-2 text-sm">
          Get More Update
        </span>
        <h2 className="text-3xl font-bold">Subscribe Our Newsletters</h2>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-4 md:mt-0 space-y-4 sm:space-y-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 sm:px-[40px] py-[19px] border-none outline-none w-full md:w-80 text-black text-base rounded-full sm:rounded-r-none"
        />
        <Button className="px-[50px] py-[19px] text-white  w-full sm:rounded-l-none rounded-full dark-button-animation">
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default SubscribeBox;
