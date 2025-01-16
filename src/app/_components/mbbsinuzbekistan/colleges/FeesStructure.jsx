import React from "react";

const FeesStructure = () => {
  return (
    <>
      <div className=" py-6  xl:w-[60%] mx-24 ">
        <div className="relative overflow-x-auto   sm:rounded-lg w-[90%]  mx-auto   ">
          <h2 className="text-xl font-semibold text-[#16A8AF]">
            Andijan State Medical Institute Fees 2024{" "}
          </h2>

          <p className="text-justify w-[85%] font-medium py-3   text-sm ">
            At the Andijan State Medical Institute, the total fees in Indian
            Rupees for a 6-year MBBS program are approximately ₹20 - 22 lacs.
            This amount includes tuition fees, hostel fees, living expenses,
            food and meal charges, and other miscellaneous costs.
          </p>
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
