import React from "react";

const Highlight = () => {
  return (
    <>
      <div className="relative overflow-x-auto  sm:rounded-lg w-[90%] mx-auto py-5 ">
        <h2 className="text-xl font-semibold text-[#16A8AF]">
          MBBS in Uzbekistan - Quick Highlights{" "}
        </h2>
        <p className=" text-sm">
          We are affiliated with these medical universities﻿﻿
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border  ">
              <td className="px-4 py-2 border border-black ">
                Intake for MBBS  in Russia{" "}
              </td>
              <td className="px-4 py-2 border border-black">September</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                MBBS  course duration
              </td>
              <td className="px-4 py-2 border border-black">
                6 years (including 1 year Internship){" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Eligibility of MBBS  in Russia{" "}
              </td>
              <td className="px-4 py-2 border border-black">
                At least 50% aggregate score in PCB subjects in 10+2NEET
                qualified{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Medium of teaching{" "}
              </td>
              <td className="px-4 py-2 border border-black">English </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">IELTS & TOEFL</td>
              <td className="px-4 py-2 border border-black">Not required </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                MBBS  fees in Russia
              </td>
              <td className="px-4 py-2 border border-black">
                INR 15 Lakhs- INR 50 Lakhs{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                University recognitions
              </td>
              <td className="px-4 py-2 border border-black">
                NMC (erstwhile MCI), WDOMS, ECFMG, FAIMER, Ministry of Science
                and Higher Education of the Russian Federation, and Ministry of
                Health of the Russian Federation{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Cost of living in Russia
              </td>
              <td className="px-4 py-2 border border-black">
                INR 12,000/ month (USD 150 per month){" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Highlight;
