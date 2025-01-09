import React from "react";

const Planningform = () => {
  return (
    <>
      {/* Form */}
      <div className="w-full h-fit ">
        <div className="w-full h-fit md:h-[350px]">
          <div className="p-4 mx-auto rounded-lg sm:border sm:w-[70%] h-fit  sm:border-gray-300 sm:shadow-lg bg-[#FFF7EE]">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl lg:text-3xl font-semibold text-center  text-[#16A8AF]">
                Planning To Study MBBS?
              </h2>
              <p className="text-sm lg:text-[18px] font-semibold text-center text-gray-700">
                Fill the form and get Detailed Counseling
              </p>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4  mt-[20px] w-[95%]">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
              />
              <input
                type="email"
                placeholder="Your Email "
                className="w-full p-2 border  border-gray-600 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
              />
              <input
                type="text"
                placeholder="Your Mobile No."
                className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
              />
              <input
                type="text"
                placeholder="Current City"
                className="w-full p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
              />
            </form>
            <div className="flex justify-center mt-6 w-[95%] ">
              <button className="p-2 bg-[#16A8AF] text-white font-medium rounded-md w-full lg:w-[200px]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Planningform;
