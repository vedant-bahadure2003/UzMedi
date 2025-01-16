import Image from "next/image";
import React from "react";
import universityimg1 from "../../../public/Images/universityimg1.png";
import universityimg2 from "../../../public/Images/universityimg2.png";
import universityimg3 from "../../../public/Images/universityimg3.png";
import universityimg4 from "../../../public/Images/universityimg4.png";

const Partner = () => {
  return (
    <section aria-labelledby="partner-universities" className="w-[80%] mx-auto mt-[50px]">
      <header className="text-center">
        <h1 id="partner-universities" className="text-[40px] font-semibold">
          Our Partner <span className="text-[#16A8AF] underline">Universities</span>
        </h1>
        <p className="text-center mt-2 text-[16px]">
          We are affiliated with these medical universities
        </p>
      </header>

      <div className="flex flex-wrap items-center lg:justify-evenly justify-center mt-12" aria-label="University logos">
        <figure className="w-[120px] h-[120px] mx-4">
          <Image
            src={universityimg1}
            alt="University 1 logo"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </figure>
        <figure className="w-[120px] h-[120px] mx-4">
          <Image
            src={universityimg2}
            alt="University 2 logo"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </figure>
        <figure className="w-[120px] h-[120px] mx-4">
          <Image
            src={universityimg3}
            alt="University 3 logo"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </figure>
        <figure className="w-[120px] h-[120px] mx-4">
          <Image
            src={universityimg4}
            alt="University 4 logo"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

export default Partner;
