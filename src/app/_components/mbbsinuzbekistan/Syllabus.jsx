import Image from "next/image";
import React from "react";
import rightsign from "../../../../public/Images/vector.png";

const Syllabus = () => {
  return (
    <>
      <div className="relative overflow-x-auto  sm:rounded-lg w-[90%] mx-auto mt-4 ">
        <h2 className="text-xl font-semibold text-[#16A8AF]">
          MBBS Syllabus in Uzbekistan{" "}
        </h2>
        <p className=" text-sm">
          To get admission to the MBBS course in Russia, students need to follow
          the simple steps:
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black mt-5">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border  ">
              <td className="px-4 py-2 border border-black">First Year </td>
              <td className="px-4 py-2 border border-black">Second Year</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                First-aid in the pre-hospital phase
              </td>
              <td className="px-4 py-2 border border-black">Anatomy </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Medical physics and mathematics{" "}
              </td>
              <td className="px-4 py-2 border border-black">Latin language</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Medical Chemistry{" "}
              </td>
              <td className="px-4 py-2 border border-black">
                Medical Biology{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Basic Bioorganic Chemistry
              </td>
              <td className="px-4 py-2 border border-black">
                Medical informatics
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Medical Economics
              </td>
              <td className="px-4 py-2 border border-black">Jurisprudence </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                History of Russia
              </td>
              <td className="px-4 py-2 border border-black">
                Mineral Metabolism
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Latin Language</td>
              <td className="px-4 py-2 border border-black">
                History of Medicine{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Anatomy</td>
              <td className="px-4 py-2 border border-black">
                Psychology and Pedagogy
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Medical Biology</td>
              <td className="px-4 py-2 border border-black">
                Histology, Embryology, Cytology{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Russian Language
              </td>
              <td className="px-4 py-2 border border-black">
                Russian Language
              </td>
            </tr>
          </tbody>
        </table>
        {/* Total Duration of MBBS in Uzbekistan */}
        <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
          <div className="flex flex-col justify-center items-start gap-2">
            <h2 className="text-xl font-bold text-[#0da9b0]">
              Total Duration of MBBS in Uzbekistan
            </h2>
            <p className="text-sm font-bold">
              The total duration for the MBBS course in Russia is mentioned
              below:
            </p>
          </div>
          <div className="text-sm sm:text-[18px] flex flex-col gap-2 ">
            <div className="text-sm sm:text-[18px] flex flex-col gap-2">
              <div className="  flex  gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className="text-[18px]  h-[18px] w-[18px] mt-1"
                />

                <p className="flex gap-2 ">
                  The total duration of the MBBS programme is 6 years, which
                  includes 1 year of internship and 5 years of academic study.{" "}
                </p>
              </div>
              <div className="  flex gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className="text-[18px]  h-[18px] w-[18px] mt-1"
                />

                <p className="flex gap-2 ">
                  In contrast to the first 3 years of the institution, which
                  focus on the theoretical aspects of medicine, the following 3
                  years are devoted to practical training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
