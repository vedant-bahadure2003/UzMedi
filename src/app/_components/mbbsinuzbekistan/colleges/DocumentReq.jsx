import React from "react";
import Image from "next/image";
import vector from "../../../../../public/Images/vector.png";

const DocumentReq = () => {
  return (
    <>
      {" "}
      {/* Why study in Andijan State Medical Institute */}
      <div className=" w-full lg:mt-20 flex flex-col  py-6 ">
        <h2 className="text-xl font-bold  w-[85%] mx-auto text-[#0da9b0]">
          Documents Required at Andijan State Medical Institute{" "}
        </h2>
        <br />
        <p className="text-justify w-[85%] font-semibold  mx-auto text-sm ">
          Following documents are required at the time of admission to Andijan
          State Medical Institute:
        </p>
        <div className="text-lg sm:text-[18px] py-3 flex flex-col gap-2 w-[85%] mx-auto">
          <div className="text-sm sm:text-[18px] flex flex-col gap-2">
            <div className="  flex  gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Birth Certificate</p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px]mt-1"
              />
              <p className="flex gap-2 text-justify">
                Passport copy (validity minimum 2 years)
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                10th and 12th standard passing cetificates
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Scorecard of NEET-UG examination qualified
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                12 passport size photographs
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Character certificate</p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Migration certificate</p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Transfer certificate</p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Poor of fee payment</p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Financial proof ( Sufficient balance in the bank)
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
            <span className="text-black">Read More :</span>
            Why Study MBBS at Andijan State Medical Institute?
          </button>
        </div>
      </div>
    </>
  );
};

export default DocumentReq;
