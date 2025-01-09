import Image from "next/image";
import React from "react";
import rightsign from "../../../../../public/Images/vector.png";

const FacultiesOffered = () => {
  return (
    <>
      {/* Faculties Offered*/}
      <div className=" w-[95%] mx-auto mt-[20px] lg:mt-20 flex flex-col gap-5 py-6 ">
        <h2 className="text-xl font-bold w-[90%] mx-auto text-[#0da9b0]">
          Faculties Offered At Andijan State Medical Institute
        </h2>

        <div className="text-lg sm:text-[18px] flex flex-col gap-2 w-[95%] mx-auto ">
          <div className="text-sm sm:text-[18px] flex flex-col gap-2 shadow-md shadow-gray-400  border border-gray-300 p-4 rounded-md">
            <div className="font-semibold">
              <p>1. Faculty of Medicine</p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Foreign Languages</p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">General Surgery</p>
            </div>

            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Military Training and Civil Protection
              </p>
            </div>
            <div className="  flex  gap-2">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Surgery and Urology</p>
            </div>

            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Anesthesiology Resuscitation and Emergency Pediatrics
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Pharmacology and Clinical Pharmacology
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Pharmacology and Clinical Pharmacology
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Children's Traumatology, Orthopedics and Neurosurgery
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Children's Traumatology, Orthopedics and Neurosurgery
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">Ophthalmology</p>
            </div>
            <div className="w-[90%] mx-auto">
              <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
                <span className="text-black">Read More :</span> Why Choose
                Uzbekistan for MBBS Studies ?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultiesOffered;
