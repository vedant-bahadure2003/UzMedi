import React from "react";
import HostelImg from "../../../../public/Images/hostelImg.png";
import Image from "next/image";
const HostelFacility = () => {
  return (
    <>
      <div className="w-[90%] mx-auto py-2">
        <h2 className="font-semibold text-[20px] text-[#16A8AF] w-[250px] py-3">
          Are There Any Hostel Facilities Provided By Uzbekistan Medical
          Universities?
        </h2>
        <p className="text-sm font-semibold w-[350px]  text-justify  ">
          It’s a good idea to research an institution’s accreditation with
          recognised bodies like the World Directory of Medical Schools (
          WDOMS), the Educational Commission for Foreign Medical Graduates
          (ECFMG), etc. before making a decision. It’s a profession. Therefore,
          you must make a wise decision.
        </p>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="relative w-[244.69px] h-[215.66px] rounded-xl ">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#1CB5BD] to-transparent rounded-xl ">
              <p className="font-semibold text-sm">Hostel For Student </p>
              <p className="text-sm">Affordable for college students </p>
            </div>
          </div>
          <div className="relative w-[244.69px] h-[215.66px] rounded-xl ">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#1CB5BD] to-transparent rounded-xl ">
              <p className="font-semibold text-sm">Hostel For Student </p>
              <p className="text-sm">Affordable for college students </p>
            </div>
          </div>
          <button className=" bg-[#16A8AF] w-[132px] h-[40px]  rounded-lg text-white text-sm md:text-lg ">
            Visit Gallary
          </button>
        </div>
      </div>
    </>
  );
};

export default HostelFacility;
