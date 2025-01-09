import React from "react";
import UniversityCard from "./UniversityCard";

const UniversitySection = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <div>
          <h2 className="font-semibold text-[20px] text-[#16A8AF]">
            Top Medical Univeristies in Uzbekistan
          </h2>
          <p className="text-sm font-semibold">
            When it comes to studying MBBS in Russia, you have an option to
            apply to some of the A+ rated medical universities.
          </p>
          {[...Array(4)].map((card, index) => (
            <UniversityCard key={index} number={index + 1} />
          ))}

          {/* MBBS Fees in Uzbekistan */}
          <div className="  lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
            <div className="flex flex-col justify-center items-start  gap-2">
              <h2 className="text-xl font-semibold text-[#0da9b0]">
                MBBS Fees in Uzbekistan
              </h2>
              <p className="text-sm font-bold">
                To get admission to the MBBS course in Russia, students need to
                follow the simple steps:
              </p>
            </div>
            <div className="text-sm sm:text-[18px] flex flex-col gap-2">
              <div className="text-sm sm:text-[18px] flex flex-col gap-2">
                <div className="  flex  gap-2">
                  <p className="flex gap-2 text-justify">
                    Eligible students need to check the postgraduate options
                    after acquiring the MBBS degree in Uzbekistan. After
                    receiving an MBBS degree from Uzbekistan University, Indian
                    college students can review the eligibility standards for
                    pursuing postgraduate research in India in addition to
                    abroad.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversitySection;
