import React from "react";

const Admission = () => {
  return (
    <>
      {/* Admission Process */}
      <div className=" w-full lg:mt-20 flex flex-col  py-6 ">
        <h2 className="text-xl font-bold  w-[85%] mx-auto text-[#0da9b0]">
          Andijan State Medical Institute Admission Process 2024{" "}
        </h2>
        <br />
        <p className="text-justify w-[85%] font-medium py-3  mx-auto text-sm ">
          Admission to Andijan State Medical Institute (ASMI) 2025 will begin in
          June and July for the September intake cycle. To seek admission to the
          MBBS program, students can apply directly through the institute's
          official website. For Indian nationals, a good NEET score is required
          to process admission procedures further.
        </p>

        <div className="w-[85%] mx-auto">
          <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
            <span className="text-black">Read More :</span>
            Asmi Admission Process
          </button>
        </div>
      </div>
    </>
  );
};

export default Admission;
