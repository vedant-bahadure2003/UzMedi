import React from "react";
import Image from "next/image";
import Star from "../../../../../public/Images/Star.png";

const HighLightTable = () => {
  return (
    <div className="border border-[#159EA6] rounded-lg shadow-lg w-full max-w-screen-md mx-16 sm:ml-10 md:ml-24 mt-10 mb-10 ">
      {/* Header Section */}
      <div className="bg-[#159EA6] text-white rounded-t-lg p-4">
        <div className="flex items-center gap-2">
          <Image
            src={Star}
            alt="Star Icon"
            className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px]"
          />
          <h1 className="text-lg sm:text-2xl font-bold">
            MBBS In Uzbekistan - Quick Highlights
          </h1>
        </div>
        <p className="text-sm sm:text-base mt-2">
          Studying MBBS in Russia stands as the best option for Indian students
          seeking.
        </p>
      </div>

      {/* Table Section */}
      <table className="w-full border-collapse border border-[#159EA6] text-left">
        <tbody>
          {[
            // Data rows
            { key: "Intake for MBBS Course", value: "September" },
            { key: "Processing Time for MBBS Admission", value: "25-30 days" },
            { key: "Location", value: "Andijan, Uzbekistan" },
            { key: "Basic Eligibility", value: "50% in PCB for General" },
            { key: "NEET Exam", value: "Yes, it is compulsory" },
            { key: "Annual Tuition Fees (Approx.)", value: "3500 USD" },
            { key: "Course Duration", value: "6 years (including Internship)" },
            { key: "Medium of Education", value: "English" },
            { key: "University Ranking", value: "Country - 1 | World - 7896" },
            { key: "University Recognition", value: "Approved by NMC, WHO" },
          ].map((row, index) => (
            <tr
              key={index}
              className={`${index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"}`}
            >
              <td className="px-4 py-3 border border-[#159EA6] font-medium text-sm sm:text-base">
                {row.key}
              </td>
              <td className="px-4 py-3 border border-[#159EA6] text-sm sm:text-base">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer Section */}
      <div className="bg-[#0F7479] h-10 rounded-b-lg"></div>
    </div>
  );
};

export default HighLightTable;
