import React from "react";
import Image from "next/image";
import { BiRupee } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import collegeImg from "../../../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../../../public/Images/collegeBgImg.png";

const HeroSection = () => {
  return (
    <>
      {/* HeroSection */}
      <div className="relative  w-full h-[300px] ">
        {/* Bg Image */}
        <div className="absolute h-[400px] w-full">
          <Image
            src={collegeImg}
            alt="collegeImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={collegeBgImg}
            alt="collegeBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
        </div>
        {/* Navbar */}

        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home / MBBS In Uzbekistan /
            <span className="text-[#16A8AF]"> Courses</span>
          </p>
        </div>
        {/* Heading */}
        <div className="text-white absolute top-32 sm:top-44 w-[85%] sm:w-[50%] left-5  flex flex-col gap-1">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
            Andijan State Medical Institute
          </h1>
          <div className=" w-[80%] h-[30px] bg-gradient-to-r from-[#16A8AF] to-[#09464900] flex items-center justify-start">
            <h2 className=" text-[14px] ml-4">#1 In Uzbekistan</h2>
          </div>
          <div className="text-white  w-[85%] ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center justify-start">
                <BiRupee className="text-3xl text-[#16A8AF]" />
                <p className="text-[14px]">3,80,000/ year</p>
              </div>
              <div className="flex gap-2  items-center justify-start">
                <MdLocationOn className="text-3xl  text-[#16A8AF]" />
                <p className="text-[14px]">Andijan </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
