import Link from "next/link";
import Image from "next/image";
import React from "react";
import UniversityImage from "../../../../public/Images/universityimage.png";

const UniversityCard = ({ number }) => {
  return (
    <>
      <div
        className=" rounded-lg overflow-hidden mt-5 p-5 flex flex-col gap-2"
        style={{
          boxShadow:
            "0px 4px 5px rgba(156, 163, 175, 0.6), 0px -0px 5px rgba(156, 163, 175, 0.6)",
        }}
      >
        <h3 className="text-base font-semibold">
          {number}. Andijan State Medical Institute
        </h3>
        <Image
          src={UniversityImage}
          alt="andijan"
          className="w-full h-[158px] md:h-[280px] lg:h-[350px] object-cover rounded-lg"
        />
        <ul className="list-disc text-sm p-3">
          <li>
            Bashkir State Medical University is known for schools of surgeons
          </li>
          <li>
            morphologists, oncologists and cardiologists. Bashkir State Medical
            University{" "}
          </li>
          <li>
            is the most preferred option for medical aspirants who wish to
            pursue MBBS from abroad as its world rank is 4177 .
          </li>
        </ul>
        <table className="w-full text-sm text-left rtl:text-right border border-black">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border  ">
              <td className="px-4 py-2 border border-black font-medium">
                Location{" "}
              </td>
              <td className="px-4 py-2 border border-black">Ufa, Russia</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">Eligibility</td>
              <td className="px-4 py-2 border border-black">
                50% in PCB, NEET
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">Medium </td>
              <td className="px-4 py-2 border border-black">
                English / Russian
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">MBBS Fee </td>
              <td className="px-4 py-2 border border-black">
                21000 $ / Rs. 14,47,000 (Approx.){" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Ranking</td>
              <td className="px-4 py-2 border border-black">
                Country Rank - 1, World Rank - 129
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Deadline For Admission
              </td>
              <td className="px-4 py-2 border border-black">
                1st October, 2025
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between gap-2 mt-2">
          <Link href="/mbbs-in-uzbekistan/colleges/overview">
            <button className="border border-black w-[132px] h-[40px] rounded-lg text-sm">
              Read More
            </button>
          </Link>
          <button className=" bg-[#16A8AF] w-[132px] h-[40px]  rounded-lg text-white text-sm md:text-lg ">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default UniversityCard;
