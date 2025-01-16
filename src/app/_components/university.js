"use client";

import React, { useRef } from "react";
import Card from "./card";
import { IoIosArrowForward } from "react-icons/io";

const Univercity = () => {
  const scrollContainerRef = useRef(null);

  const scrollUniversities = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-[71px] relative">
      <h1 className="text-2xl md:text-4xl font-bold text-center">
        Explore{" "}
        <span className="text-[#0da9b0] underline">Medical Universities</span>{" "}
        in Uzbekistan
      </h1>
      <p className="text-center mt-2 text-base">
        We are affiliated with these medical universities
      </p>
      <div className="w-full h-full mt-4 md:mt-10">
        <div
          className="w-full py-7 flex gap-5 overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
        >
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
          <div className="w-[270px] flex-shrink-0">
            <Card />
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <button
        className="absolute right-0 top-[60%] transform -translate-y-1/2 bg-teal-500 p-3 rounded-full text-white shadow-lg"
        onClick={scrollUniversities}
      >
        <IoIosArrowForward className="text-xl" />
      </button>
    </div>
  );
};

export default Univercity;
