import Image from "next/image";
import React from "react";
import Face from "../../../public/Images/face.jpg";
import stars from "../../../public/Images/groupstar.png";

const Testimonials = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-[50px]">
                <h1 className="text-4xl font-bold text-center">
                    Our Happy <span className="text-teal-500 underline">Students</span>
                </h1>
                <p className="text-center mt-2">
                    We are affiliated with these medical universities
                </p>

                <div className="overflow-x-auto mt-10 scrollbar-hide">
                    <div className="flex gap-6 items-center w-max">
                        {[...Array(5)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-[#E9F7F8] w-[280px] h-[250px] md:w-[365px] md:h-[324px] relative rounded-tr-full rounded-br-full rounded-bl-full flex flex-col items-start justify-center p-5"
                            >
                                <p className=" text-gray-600 text-[14px] md:text-[18px] w-[80%]">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Minus, nisi iste. Itaque,...
                                </p>
                                <div className="flex flex-wrap gap-1 my-8">
                                    <Image src={stars} alt="stars" />
                                </div>
                                <p className="font-semibold text-xl ml-14">John Doe</p>
                                <p className="text-gray-600 font-semibold ml-14">MBBS</p>
                                <Image
                                    src={Face}
                                    alt="face"
                                    className="md:w-[164.98px] md:h-[146.9px] w-[100px] h-[90px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-teal-500 my-[60px] text-center">
                    Dream . Study . Achieve
                </h1>
            </div>
        </>
    );
};

export default Testimonials;