import Link from "next/link";
import React from "react";
// import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import locationIcon from "../../../public/Images/LocationIcon.png";
import callIcon from "../../../public/Images/callicon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[750px] border border-black bg-gradient-to-t from-[#005D61]  to-[#038f96] sm:bg-pink-200 md:bg-yellow-100 lg:bg-green-200 flex items-center justify-center pb-3 ">
        <div className="flex flex-col gap-10 w-[90%] h-[620px]  text-white ">
          <div className="flex flex-col gap-4">
            <h1 className="text-[24px] underline underline-offset-4">About</h1>
            <p className="text-[14px]">
              Uzbekistan Medi is your trusted guide to pursuing MBBS in
              Uzbekistan. We connect aspiring doctors with top universities,
              offering affordable education and globally recognized degrees.
              Start your medical journey with us today!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-[24px] underline underline-offset-4">
              Quick Links
            </h1>
            <div className="flex flex-col gap-3 text-[14px]">
              <Link href={"#"}>Home</Link>
              <Link href={"#"}>About us </Link>
              <Link href={"#"}>MBBS in Uzbekistan</Link>
              <Link href={"#"}>University</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Galary</Link>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[24px] underline underline-offset-4">
              Contact Us
            </h1>
            <div className="flex gap-2 ">
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
            <div className="flex gap-2 ">
              <Image
                className="w-[20px] h-[17px] mt-[3px]"
                src={callIcon}
                alt="CallIcon"
              />
              <p>3479582834795</p>
            </div>
            <div className="flex flex-col gap-2">
              <hr />
              <div className="flex text-[14px] items-center justify-center ">
                <p>Uzbekistan Medi © 2025 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
