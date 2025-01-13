import React from "react";
import HostelImg from "../../../../public/Images/hostelImg.png";
import Image from "next/image";
const HostelFacility = () => {
  return (
    <>
      <div className="w-[90%] mx-auto py-4">
        {/* Title Section */}
        <h2 className="font-semibold text-[20px] md:text-[24px] text-[#16A8AF] max-w-[90%] md:max-w-[500px] py-3 mx-auto">
          Are There Any Hostel Facilities Provided By Uzbekistan Medical
          Universities?
        </h2>
        <p className="text-sm md:text-base font-semibold max-w-[90%] md:max-w-[600px] text-justify mx-auto">
          It’s a good idea to research an institution’s accreditation with
          recognised bodies like the World Directory of Medical Schools (WDOMS),
          the Educational Commission for Foreign Medical Graduates (ECFMG), etc.
          before making a decision. It’s a profession. Therefore, you must make
          a wise decision.
        </p>

        {/* Hostel Image Section */}
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 mt-6">
          {/* Image Card 1 */}
          <div className="relative w-[90%] max-w-[244.69px] h-[215.66px] rounded-xl mx-auto">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#1CB5BD] to-transparent rounded-xl">
              <p className="font-semibold text-sm">Hostel For Students</p>
              <p className="text-sm">Affordable for college students</p>
            </div>
          </div>
          {/* Image Card 2 */}
          <div className="relative w-[90%] max-w-[244.69px] h-[215.66px] rounded-xl mx-auto">
            <Image
              src={HostelImg}
              alt="HostelImg"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 w-full p-3 text-white bg-gradient-to-t from-[#1CB5BD] to-transparent rounded-xl">
              <p className="font-semibold text-sm">Hostel For Students</p>
              <p className="text-sm">Affordable for college students</p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex justify-center mt-6">
          <button className="bg-[#16A8AF] px-6 py-2 md:px-8 md:py-3 rounded-lg text-white text-sm md:text-lg">
            Visit Gallery
          </button>
        </div>
      </div>
    </>
  );
};

export default HostelFacility;
