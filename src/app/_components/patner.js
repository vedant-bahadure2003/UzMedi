import Image from "next/image";
import React from "react";
import universityimg1 from "../../../public/Images/universityimg1.png";
import universityimg2 from "../../../public/Images/universityimg2.png";
import universityimg3 from "../../../public/Images/universityimg3.png";
import universityimg4 from "../../../public/Images/universityimg4.png";
const Partner = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-[50px]">
                <h1 className="text-[40px] font-semibold text-center">
                    Our Partner{" "}
                    <span className="text-[#16A8AF] underline"> Universities</span>
                </h1>
                <p className="text-center mt-2 text-[16px]">
                    We are affiliated with these medical universities
                </p>
                <div className="flex flex-wrap items-center lg:justify-evenly justify-center mt-12">
                    <Image
                        src={universityimg1}
                        alt="Logo"
                        className="w-[120px] h-[120px] object-contain"
                    />
                    <Image
                        src={universityimg2}
                        alt="Logo"
                        className="w-[120px] h-[120px] object-contain"
                    />
                    <Image
                        src={universityimg3}
                        alt="Logo"
                        className="w-[120px] h-[120px] object-contain"
                    />
                    <Image
                        src={universityimg4}
                        alt="Logo"
                        className="w-[120px] h-[120px] object-contain"
                    />
                </div>
            </div>
        </>
    );
};

export default Partner;