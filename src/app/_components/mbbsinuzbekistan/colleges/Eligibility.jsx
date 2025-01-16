import React from "react";
import Image from "next/image";
import vector from "../../../../../public/Images/vector.png";

const Elegibility = () => {
  return (
    <>
      {/*  Eligibility Criteria */}
      <div className=" w-full lg:mt-20 flex flex-col bg-[#FFF9EA]  py-6 ">
        <h2 className="text-xl font-bold  w-[85%] mx-auto text-[#0da9b0]">
          Eligibility Criteria to Study MBBS at Andijan State Medical Institute
        </h2>
        <br />
        <p className="text-justify w-[85%] font-medium py-3  mx-auto text-sm ">
          The applicant must have a minimum of 70% in Physics, Chemistry, and
          Biology from any recognised board.
        </p>

        <div className="text-lg sm:text-[18px] py-3 flex flex-col gap-2 w-[85%] mx-auto">
          <div className="text-sm sm:text-[18px]  flex flex-col gap-2">
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Age - The student applying must be not less than 17 years old by
                December 31 of the admission year.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Indian students must pass the NEET exam to seek admission to
                foreign medical colleges.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                The validity of the NEET score is three years from the date of
                declaration of the result.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                After the score is announced, the NEET score is valid for three
                years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elegibility;
