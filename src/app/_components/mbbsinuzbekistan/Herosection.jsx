import React from "react";
import bgUzImg from "../../../../public/Images/mbbsUzImg.png";
import uzBg from "../../../../public/Images/uzBg.png";
import Image from "next/image";
import Profile from "../../../../public/Images/profile.png";
// import greentick from "../../../../public/Images/greentick.png";
const Herosection = () => {
  return (
    <>
      <div className="relative  w-full h-[300px]">
        <div className="absolute h-[400px] w-full">
          <Image
            src={bgUzImg}
            alt="MBBS In UzBekistan"
            className="w-full object-cover block sm:hidden h-[280px]"
          />
          <Image
            src={uzBg}
            alt="MBBS In UzBekistan"
            className="w-full h-full object-cover hidden sm:block sm:h-[350px]"
          />
          <div className="h-[280px] sm:h-[350px] w-full  absolute top-0 bg-black opacity-40"></div>
        </div>
        {/* Navbar */}

        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home / <span className="text-[#16A8AF]">MBBS In Uzbekistan</span>
          </p>
        </div>
        {/* Heading */}
        <div className="absolute top-32 sm:top-44 w-[50%] left-5">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-3 text-white w-full">
            MBBS In <span className="text-[#18a1a7]">Uzbekistan</span>
          </h1>
        </div>
      </div>
      {/* Content */}
      <div className="flex items-center   justify-center sm:mt-[100px] shadow-md shadow-gray-400">
        <div className="h-fit w-[90%] flex flex-col gap-4 bg-white rounded-md">
          <div className="flex gap-3 w-full h-[50px] items-center justify-start">
            <div className="w-[50px] h-[50px]">
              <Image
                src={Profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-semibold">
              <h2>XYZ Employee</h2>
            </div>
            {/* <div>
              <Image src={greentick} alt="" className="w-[23px] h-[23px] " />
            </div> */}
          </div>
          <div className="text-justify text-sm py-5">
            <p>
              Studying MBBS in Uzbekistan has been one of the most preferred
              options for Indian students for decades now. Standing at the
              prominent 8th position in the world in terms of the quality of
              medical education, Russia has been home to thousands of Indian
              MBBS students who are working as renowned and well-established
              doctors today. <br />
              As India and Uzbekistan share a cordial and friendly relationship,
              the government of the Russian Federation offers subsidized medical
              education to Indian students. The affordability of MBBS in Russia
              encourages many Indian medical aspirants to pursue their dreams in
              this largest country in the world which is home to more than 25
              top medical universities around the globe.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
