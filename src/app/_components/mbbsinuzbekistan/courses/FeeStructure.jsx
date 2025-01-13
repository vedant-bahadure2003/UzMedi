import React from "react";

const FeeStructure = () => {
  return (
    <>
      <div className=" py-6">
        <div className="relative overflow-x-auto w-[90%]  mx-auto ">
          <h2 className="text-xl font-semibold text-[#16A8AF]">
            Andijan State Medical Institute- MBBS Fee Structure 2024
          </h2>

          <table className="w-full text-sm text-left rtl:text-right mt-5 ">
            <thead className="text-sm  bg-[#FFF7EE] ">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-2 border border-gray-400 text-black"
                >
                  First Year{" "}
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 border border-gray-400  text-black"
                >
                  Tuition Fees
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  1st Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
              <tr className="bg-[#FFF7EE]">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  2nd Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  3rd Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
              <tr className="bg-[#FFF7EE]">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  4th Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  5th Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
              <tr className="bg-[#FFF7EE]">
                <td className="px-4 py-2 border border-gray-400 font-semibold">
                  6th Year
                </td>
                <td className="px-4 py-2 border border-gray-400">3500 USD</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full mx-auto bg-[#FFF7EE] mt-[20px] p-2 text-justify">
            <p>
              <strong>Note :</strong> The tuition fees for MBBS in Andijan State
              Medical Institute mentioned above may change. Contact Select Your
              University to get the current fees for tuition, hostel, mess, &
              currency conversion.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeStructure;
