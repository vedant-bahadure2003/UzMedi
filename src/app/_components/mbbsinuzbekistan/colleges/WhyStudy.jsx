import React from "react";
import Image from "next/image";
import vector from "../../../../../public/Images/vector.png";

const WhyStudy = () => {
  return (
    <div className="w-full lg:mt-20 ml-24 flex justify-start">
      <div className="w-[60%] flex flex-col py-6 bg-white">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-[#0da9b0] pl-4 sm:pl-8">
          Why Study MBBS At Andijan State Medical Institute?
        </h2>

        {/* Description */}
        <p className="text-justify font-semibold text-sm md:text-base pl-4 sm:pl-8 pr-4 sm:pr-8 mt-4">
          Here are some key benefits of pursuing an MBBS degree at Andijan State
          Medical Institute:
        </p>

        {/* Content Section */}
        <div className="text-sm md:text-base py-3 flex flex-col gap-4 mt-6 pl-4 sm:pl-8 pr-4 sm:pr-8">
          {[
            "The institute emphasises practical training and theoretical knowledge, enabling students to grasp concepts effectively.",
            "It offers quality MBBS education at an affordable cost.",
            "All programs are conducted in English, making them suitable for international students.",
            "The institute has strong connections with local and international colleges, enhancing learning opportunities.",
            "It is recognised by leading organisations, including FAIMER, WHO, NMC and the Ministry of Higher and Secondary Specialized Education of Uzbekistan.",
            "There is a modern library, scientific laboratory, and well-equipped classrooms.",
            "The institute offers diverse specialisation options so that students can tailor their medical education to their needs.",
            "High-class and experienced professors guarantee a higher academic experience.",
          ].map((text, index) => (
            <div key={index} className="flex items-start gap-2">
              <Image
                src={vector}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />
              <p className="text-justify">{text}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="w-full mt-6 pl-4 sm:pl-8 pr-4 sm:pr-8">
          <button className="mt-3 bg-[#0da9b0] text-white py-2 px-4 text-sm font-medium rounded-md shadow-lg hover:bg-[#479b9f] w-full sm:w-auto">
            <span className="text-black">Read More :</span> Why Study MBBS at
            Andijan State Medical Institute?
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyStudy;
