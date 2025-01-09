import React from "react";

const CourseOffered = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="font-semibold text-[20px] text-[#16A8AF]">
          Courses offered by Uzbekistan Medical Universities{" "}
        </h2>
        <p className="text-sm font-semibold mt-2 my-3">
          The total duration for the MBBS course in Russia is mentioned below:
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black ">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border  ">
              <td className="px-4 py-2 border border-black font-medium text-[#005D61] text-center">
                Course name{" "}
              </td>
              <td className="px-4 py-2 border border-black text-[#005D61] text-center">
                Duration
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                General Medicine
              </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">Pharmaceutical </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">Pediatrics </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Dentistry</td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Nursing</td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">PG</td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">MDS </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">M.Ch </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Surgery </td>
              <td className="px-4 py-2 border border-black">4 Years </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseOffered;
