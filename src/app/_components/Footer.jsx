import Link from "next/link";
import React from "react";
import locationIcon from "../../../public/Images/LocationIcon.png";
import callIcon from "../../../public/Images/callicon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto lg:h-[450px] bg-gradient-to-t from-[#005D61] to-[#038f96] flex items-center justify-center pb-3 flex-col gap-4 sm:mt-[40px]">
        <div className="flex flex-col lg:flex-row gap-10 w-[90%] lg:w-[80%] h-auto lg:h-[300px] text-white mt-[20px] ">
          {/* About Section */}
          <div className="flex flex-col gap-4 lg:w-[40%]">
            <h1 className="text-[24px] lg:text-[30px] underline underline-offset-4">
              About
            </h1>
            <p className="text-[14px]">
              Uzbekistan Medi is your trusted guide to pursuing MBBS in
              Uzbekistan. We connect aspiring doctors with top universities,
              offering affordable education and globally recognized degrees.
              Start your medical journey with us today!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col gap-4 lg:w-[40%] lg:items-center">
            <h1 className="text-[24px] lg:text-[30px] underline underline-offset-4">
              Quick Links
            </h1>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About us</Link>
              <Link href={"#"}>MBBS in Uzbekistan</Link>
              <Link href={"#"}>University</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Galary</Link>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] lg:text-[30px] underline underline-offset-4">
              Contact Us
            </h1>
            <div className="flex gap-2">
              <Image
                className="w-[20px] h-[20px] mt-[3px]"
                src={locationIcon}
                alt="LocationIcon"
              />
              <p className="text-[14px]">
                Uzbekistan Medi is your trusted guide to pursuing MBBS in
                Uzbekistan. We connect aspiring doctors with top universities.
              </p>
            </div>
            <div className="flex gap-2">
              <Image
                className="w-[20px] h-[17px] mt-[3px]"
                src={callIcon}
                alt="CallIcon"
              />
              <p>3479582834795</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-2 w-[90%] lg:w-[80%] ">
          <hr />
          <div className="flex text-[14px] text-white items-center justify-center">
            <p>Uzbekistan Medi © 2025 All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
