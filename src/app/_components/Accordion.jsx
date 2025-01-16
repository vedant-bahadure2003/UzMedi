"use client";
import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Minus from "../../../public/Images/minus.png"; // Corrected path
import Plus from "../../../public/Images/plus.png";
import Image from "next/image";

export default function Accordion({ question, answer, isOpen, onToggle }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span>{question}</span>
        {isOpen ? (
          <Image src={Minus} alt="Minus" className="w-5 h-5" />
        ) : (
          <Image src={Plus} alt="Plus" className="w-5 h-5" />
        )}
      </p>
      {isOpen && <p className="text-sm sm:text-base text-gray-400">{answer}</p>}
    </div>
  );
}
