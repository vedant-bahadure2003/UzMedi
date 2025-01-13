import React from "react";
import rightsign from "../../../../public/Images/vector.png";
import Image from "next/image";

const Eligibility = () => {
  return (
    <>
      {/* Eligiblity Criteria for MBBS in Uzbekistan */}
      <div className="  lg:mt-20 flex flex-col gap-5 mt-[10px] bg-[#FFF9EA] py-3 shadow-md shadow-gray-400 xl:w-[90%] mx-auto">
        <div className="flex flex-col justify-center items-start w-[90%] mx-auto gap-2">
          <h2 className="text-xl font-bold text-[#0da9b0]">
            Eligiblity Criteria for MBBS in Uzbekistan
          </h2>
          <p className="text-sm font-bold">
            The eligibility criteria for MBBS in Russia for Indian students show
            the relaxation in comparison with MBBS in India:
          </p>
        </div>
        <div className="text-lg sm:text-[18px] flex flex-col gap-1 w-[90%] mx-auto">
          <div className="text-sm sm:text-[18px] flex flex-col gap-2">
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className=" h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Direct Admissions Students will get direct admission to the
                medical university of Uzbekistan{" "}
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                100% Safety Uzbekistan is the safest European country.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Low tuition fee Medical universities in Uzbekistan Offered
                low-cost education to Foreign students.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Worldwide acceptance MBBS degree in Uzbekistan is accepted
                worldwide.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Living & Accommodation Cost of living in Uzbekistan is low,
                around 62 USD.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eligibility;
