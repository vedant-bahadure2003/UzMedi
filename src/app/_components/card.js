import Image from "next/image";
import React from "react";
import universityImage from "../../../public/Images/university.png";

const Card = () => {
  return (
    <>
      <div className="w-[270px] border-1 shadow-xl rounded-lg overflow-hidden">
        <figure>
          <Image
            src={universityImage}
            alt="Andijan State Medical Institute"
            className="object-cover w-full h-[200px]"
            loading="lazy"
          />
        </figure>
        <div className="p-3">
          <h2 className="text-[#0da9b0] font-semibold text-lg">
            Andijan State Medical Institute
          </h2>
          <p className="font-semibold">Fees Structure: 5,22,000 RS</p>
          <p className="font-semibold">Duration: 7 years</p>
          <div className="flex justify-between mt-2">
            <button
              className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white"
              aria-label="Apply to Andijan State Medical Institute"
            >
              Apply Now
            </button>
            <button
              className="border border-[#0da9b0] px-4 py-1.5 font-semibold text-[#0da9b0] rounded-md"
              aria-label="Read more about Andijan State Medical Institute"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
