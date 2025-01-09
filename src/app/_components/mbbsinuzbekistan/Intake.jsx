import React from "react";

const Intake = () => {
  return (
    <>
      <div className="w-[90%] mx-auto overflow-x-auto py-6">
        <h2 className="font-semibold text-[20px] text-[#16A8AF]">
          MBBS in Uzbekistan - Intake Date & Deadlines 2025
        </h2>
        <p className="text-sm font-semibold">
          The total duration for the MBBS course in Russia is mentioned below:
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black ">
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
      </div>
    </>
  );
};

export default Intake;
