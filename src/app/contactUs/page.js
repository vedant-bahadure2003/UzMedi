import React from "react";
import ContactImg from "../../../public/Images/ContactImg.png";
import ContactBgImg from "../../../public/Images/ContactBgImg.png";
import pana from "../../../public/Images/pana.png";
import Image from "next/image";
import { MdCall } from "react-icons/md";

const page = () => {
  return (
    <>
      {/* BgImage */}
      <div className="relative w-full h-[300px] sm:h-[380px]">
        {/* Background Image */}
        <div className="absolute h-[400px] w-full">
          <Image
            src={ContactImg}
            alt="ContactImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={ContactBgImg}
            alt="ContactBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full absolute top-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home /<span className="text-[#16A8AF]"> Contact Us</span>
          </p>
        </div>
        {/* Heading */}
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 flex flex-col gap-1">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-3 w-full">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-[40px]">
        <div className="xl:hidden">
          <h1>Start Your Medical Journey with Confidence</h1>
        </div>
        <div className="w-[85%] lg:w-[58%] mx-auto xl:h-[550px] h-[1100px] shadow-xl border-gray-100 rounded-md border-t-2 flex xl:flex-row flex-col-reverse items-center justify-center gap-8 xl:gap-6">
          {/* Contact Form */}
          <div className="xl:w-[400px] bg-gradient-to-t from-[#034752] to-[#3FC5DB] h-[500px] flex flex-col items-center justify-evenly rounded-md w-[90%]">
            <div className="xl:w-[80%] text-[24px] text-center text-white">
              <h1>Enquire Now - For MBBS Admission in Uzbekistan</h1>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="w-[80%] h-[45px] rounded-md px-4 outline-none"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-[80%] h-[45px] rounded-md px-4 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-[80%] h-[45px] rounded-md px-4 outline-none"
            />
            <select
              defaultValue=""
              className="w-[80%] h-[45px] rounded-md px-4 outline-none bg-white"
            >
              <option value="" disabled>
                Select Your Country
              </option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
            <select
              defaultValue=""
              className="w-[80%] h-[45px] rounded-md px-4 outline-none bg-white"
            >
              <option value="" disabled>
                Select Your City
              </option>
              <option value="Mumbai">Mumbai</option>
              <option value="New York">New York</option>
              <option value="Toronto">Toronto</option>
            </select>
            <button className="w-[80%] h-[45px] rounded-md bg-[#16a8af] text-white font-semibold">
              Submit
            </button>
          </div>
          {/* Contact Information */}
          <div className="xl:w-[400px] w-[90%] h-[500px]">
            <div className="w-full h-[180px] flex flex-col gap-4">
              <Image
                src={pana}
                alt="pana"
                className="w-full h-full object-cover"
              />
              <div className="text-center w-[90%] mx-auto">
                <h2 className="text-[20px] font-semibold">
                  Start Your Medical Journey with Confidence
                </h2>
                <p className="text-[12px]">
                  Contact us to learn everything you need about MBBS in
                  Uzbekistan. We are here to support you at every step.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-[#126775] flex items-center justify-center text-2xl">
                    <MdCall />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h1 className="font-semibold">Helpline Number</h1>
                    <h1 className="text-[12px]">+1 012 3456 789</h1>
                  </div>
                </div>
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-[#126775] flex items-center justify-center text-2xl">
                    <MdCall />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h1 className="font-semibold">Head Office</h1>
                    <h1 className="text-[12px]">
                      132 Dartmouth Street, Boston, Massachusetts 02156, United
                      States
                    </h1>
                  </div>
                </div>
                <div className="flex w-[90%] gap-2 mx-auto">
                  <div className="w-[50px] text-white rounded-md h-[50px] bg-[#126775] flex items-center justify-center text-2xl">
                    <MdCall />
                  </div>
                  <div className="w-[80%] mx-auto">
                    <h1 className="font-semibold">Mail</h1>
                    <h1 className="text-[12px]">demo@gmail.com</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
