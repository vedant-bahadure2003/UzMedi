import Image from "next/image";
import React from "react";
import universityImage from "../../../public/Images/university.png";
import Link from "next/link";

const Card = () => {
  return (
    <>
      <div className=" border-1 shadow-xl rounded-lg">
        <div>
          <Image
            src={universityImage}
            alt="UnversityImage"
            className="rounded-tr-lg rounded-tl-lg"
          />
        </div>
        <div className="p-3 ">
          <h1 className="text-[#005D61]  text-xl font-semibold">
            Andijan State Medical Institute
          </h1>
          <p className="">Fees Structure :5,22,000 RS</p>
          <p className="">Duration : 7 year</p>
          <div className="flex justify-between mt-4">
            <button className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white">
              Apply Now
            </button>
            <Link href="/mbbs-in-uzbekistan/colleges/overview">
              <button className="border border-[#0da9b0] px-4 py-1.5 font-semibold text-[#0da9b0] rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
