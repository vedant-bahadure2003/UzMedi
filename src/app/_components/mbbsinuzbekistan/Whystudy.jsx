import React from "react";
import Image from "next/image";
import rightsign from "../../../../public/Images/vector.png";
const Whystudy = () => {
  return (
    <>
      {/* why study in uzbekistan */}
      <div className=" w-full lg:mt-20 flex flex-col gap-5 py-6 ">
        <h2 className="text-xl font-bold w-[90%] mx-auto text-[#0da9b0]">
          Why Study MBBS in Uzbekistan?
        </h2>
        <div className="text-lg sm:text-[18px] flex flex-col gap-2 w-[90%] mx-auto">
          <div className="text-sm sm:text-[18px] flex flex-col gap-2">
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Russia is home to some of the government medical universities in
                the world.{" "}
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px]mt-1"
              />
              <p className="flex gap-2 text-justify">
                The duration of the MBBS in Russia is 6 years which includes one
                year of internship.
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                English is used as a medium of instruction for MBBS in Russia
                for Indian students. .
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                The faculties at the top medical universities for MBBS in Russia
                includes the reputed and renowned professors, doctors, alumni,
                and scientists from all over the world.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                With a strong bilateral friendship with India for more than 5
                decades, Russia continues to be the preferred destination for
                higher education abroad.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                World-class and innovative infrastructure facilities are
                available at the universities for medical students
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Russian medical universities offer hi-tech and state-of-the-art
                learning experiences to their students.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto">
          <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
            <span className="text-black">Read More :</span> Why Choose
            Uzbekistan for MBBS Studies ?
          </button>
        </div>
      </div>
    </>
  );
};

export default Whystudy;
