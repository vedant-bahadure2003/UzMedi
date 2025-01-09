import React from "react";

const FeesStructure = () => {
  return (
    <>
      <div className=" py-6 shadow-md shadow-gray-400">
        <div className="relative overflow-x-auto   sm:rounded-lg w-[90%]  mx-auto   ">
          <h2 className="text-xl font-semibold text-[#16A8AF]">
            MBBS in Uzbekistan Fee Structure 2025{" "}
          </h2>
          <p className=" text-sm">
            We are affiliated with these medical universities﻿﻿
          </p>
          <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
            <thead className="text-sm  bg-[#FFF7EE]">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 border border-black text-[#005D61]"
                >
                  Name of the universities{" "}
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 border border-black text-[#005D61]"
                >
                  Tuition Fees / Year{" "}
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 border border-black text-[#005D61]"
                >
                  Hostel Fees / Year
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="  ">
                <td className="px-4 py-2 border border-black">
                  Andijan State Medical Institute
                </td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
              </tr>
              <tr className=" ">
                <td className="px-4 py-2 border border-black">
                  Bukhara State Medical Institute
                </td>
                <td className="px-4 py-2 border border-black">3500 USD </td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 border border-black">
                  Samarkand State Medical Institute{" "}
                </td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
              </tr>
              <tr className="odd:bg-[#FFF7EE] even:bg-white ">
                <td className="px-4 py-2 border border-black">
                  Tashkent Medical Academy{" "}
                </td>
                <td className="px-4 py-2 border border-black">3500 USD </td>
                <td className="px-4 py-2 border border-black">3500 USD</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full mx-auto">
            <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
              <span className="text-black">Read More :</span> Top Medical
              Universities in Uzbekistan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeesStructure;
