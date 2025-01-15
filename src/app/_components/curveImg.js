import Image from "next/image";
import React from "react";
import { PiArrowCircleUpRight } from "react-icons/pi";
import group from "../../../public/Images/group.png";
import vector from "../../../public/Images/vector.png";
import Head from "next/head";

const CurveImg = () => {
  return (
    <>
      <Head>
        <title>
          Why Choose Uzbekistan Medi? | Medical Education in Uzbekistan
        </title>
        <meta
          name="description"
          content="Discover why Uzbekistan Medi is the best choice for Indian students seeking medical education in Uzbekistan. Learn about our support, partnerships, and ethical practices."
        />
        <meta
          name="keywords"
          content="Uzbekistan Medi, medical education, Uzbekistan, Indian students, university assistance, visa support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="w-full h-auto flex items-center justify-center mt-[40px]">
        <div className="w-[90%] mx-auto h-auto flex flex-col-reverse lg:flex-row">
          <div className="w-full lg:w-[50%] h-auto">
            <div className="w-[90%] lg:w-[75%] h-full mx-auto flex flex-col gap-8 justify-center py-8">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold">
                  Why <span className="text-[#0da9b0]">Uzbekistan Medi?</span>
                </h2>
              </div>
              <div className="text-lg sm:text-xl flex flex-col gap-2">
                <div className="flex text-xl gap-2">
                  <Image
                    src={vector}
                    alt="Bullet point icon"
                    className="text-xl h-[25px] w-[25px] mt-1"
                  />
                  <p className="flex gap-2">
                    We primarily assist Indian students with pursuing medical
                    education in Uzbekistan.
                  </p>
                </div>
                <div className="flex text-xl gap-2">
                  <Image
                    src={vector}
                    alt="Bullet point icon"
                    className="text-xl h-[25px] w-[25px] mt-1"
                  />
                  <p className="flex gap-2">
                    We provide end-to-end support, from choosing the right
                    university to visa assistance.
                  </p>
                </div>
                <div className="flex text-xl gap-2">
                  <Image
                    src={vector}
                    alt="Bullet point icon"
                    className="text-xl h-[25px] w-[25px] mt-1"
                  />
                  <p className="flex gap-2">
                    With years of experience, we have built strong relationships
                    with top medical universities in Uzbekistan.
                  </p>
                </div>
                <div className="flex text-xl gap-2">
                  <Image
                    src={vector}
                    alt="Bullet point icon"
                    className="text-xl h-[25px] w-[25px] mt-1"
                  />
                  <p className="flex gap-2">
                    Uzbekistan Medi maintains transparent & ethical practices
                    throughout the entire application process.
                  </p>
                </div>
              </div>
              <button
                className="bg-[#0da9b0] w-[140px] sm:w-[160px] h-[40px] rounded-md text-white text-lg sm:text-xl font-semibold"
                aria-label="Read more about Uzbekistan Medi"
              >
                Read
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[50%] h-auto flex items-center justify-center relative py-8">
            <Image
              src={group}
              alt="Group of students or educational imagery"
              className="z-10 object-cover w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[550px] lg:h-[550px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CurveImg;
