import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";

const Document = () => {
  return (
    <>
      {/* Documents Required for MBBS in Uzbekistan */}
      <div className=" xl:w-[90%] mx-auto lg:mt-20 flex flex-col gap-3 mt-[40px]  p-1">
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-xl font-bold text-[#0da9b0]">
            Documents Required for MBBS in Uzbekistan
          </h2>
          <p className="text-sm font-bold">
            To get admission to the MBBS course in Russia, students need to
            follow the simple steps:
          </p>
        </div>
        <div className="text-sm sm:text-[18px] flex flex-col gap-2 ">
          <div className="text-sm sm:text-[18px] flex flex-col gap-0">
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                10th & 12th Certificate + Mark sheet
              </p>
            </div>
            <div className="  flex gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Passport with minimum 18 months validity.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Original copy of Birth Certificate in English
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Invitation letter prescribed by Medical University of Russia
              </p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Invitation letter prescribed by Medical University of Russia
              </p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Authorized documents from the Ministry of External Affairs, New
                Delhi.
              </p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Legalization of all documents from the Russian Embassy.
              </p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Visa fees</p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Tuition Fee Receipt</p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">HIV test documents</p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Medical certificate</p>
            </div>
            <div className="  flex  gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Medical insurance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
