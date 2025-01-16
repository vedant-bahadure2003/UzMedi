"use client";
import React, { useState } from "react";
import Accordion from "./Accordion.jsx";
import { faqs } from "../mbbs-in-uzbekistan/data.js";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-[50px] md:mt-[71px]">
      <h1 className="text-2xl md:text-[40px] font-semibold text-center">
        <span className="text-[#1CB5BD] ">F</span>requently{" "}
        <span className="text-[#1CB5BD] ">A</span>sked{" "}
        <span className="text-[#1CB5BD] ">Q</span>uestions
      </h1>
      <p className="text-center mt-2 ">
        We are affiliated with these medical universities
      </p>
      <div className="flex flex-col gap-2 md:gap-4 divide-y mt-5 md:mt-10 w-[90%] md:w-[80%] mx-auto shadow-2xl md:shadow-none p-3 md:p-0 border border-gray-200">
        {faqs.map((d, i) => (
          <Accordion
            key={i}
            answer={d.answer}
            question={d.question}
            isOpen={openIndex === i}
            onToggle={() => toggleAccordion(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
