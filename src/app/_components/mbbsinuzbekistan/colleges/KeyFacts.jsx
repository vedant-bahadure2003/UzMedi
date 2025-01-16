import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineApartment } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import Planningform from "../Planningform";

const KeyFacts = () => {
  const facts = [
    {
      icon: <FaChalkboardTeacher size={40} />,
      number: 15,
      text: "No. of Faculties",
    },
    {
      icon: <FaUserGraduate size={40} />,
      number: 2455,
      text: "No. of Students",
    },
    {
      icon: <AiOutlineApartment size={40} />,
      number: 15,
      text: "No. of Department",
    },
    {
      icon: <BsFillPeopleFill size={40} />,
      number: "17:1",
      text: "Students Faculty ratio",
    },
  ];

  return (
    <div className="flex flex-col justify-start">
      {/* Left Section: Key Facts */}
      <div className="w-[60%] ml-24 flex flex-col p-5">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#0da9b0]">
          Key Facts About Andijan State University
        </h2>

        {/* Key Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-300 rounded-lg p-3 shadow-lg"
            >
              <div className="text-[#0da9b0] mb-4">{fact.icon}</div>
              <h3 className="text-3xl font-bold text-[#0da9b0]">
                {fact.number}
              </h3>
              <p className="text-base text-gray-700 mt-2 text-center">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Planning Form */}
      <div className="w-[75%] px-4 lg:px-8 xl:px-12">
        <Planningform />
      </div>
    </div>
  );
};

export default KeyFacts;
