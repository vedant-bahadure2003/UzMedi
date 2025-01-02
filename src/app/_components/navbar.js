'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [display, setDisplay] = useState(false);
    return (
        <>
            {/* Navbar */}
            <div className="w-full bg-[#00000039] backdrop-blur-md z-50 fixed top-0 left-0">
                <div className="  w-[95%] mx-auto flex flex-wrap justify-between items-center py-4 md:py-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Uzbekistan Medi</h1>
                    <div className="lg:hidden">
                        <IoMdMenu
                            className="text-white text-2xl cursor-pointer"
                            onClick={() => setDisplay(!display)}
                        />
                    </div>
                    {display ? (
                        <div className="lg:hidden w-[70%] sm:mt-4 bg-[#ffffff]  absolute top-0 left-0  h-[100vh] z-40 font-semibold">
                            <div className='flex flex-col justify-start gap-3 ml-3 mt-5'>
                                <Link href="#">
                                    <h1 className=" text-3xl md:text-lg text-black ">Uzbekistan Medi</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className=" text-xl md:text-lg text-black hover:text-[#45f6ff] cursor-pointer">Home</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">About</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">MBBS in Uzbekistan</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">Universities</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">Blogs</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">Gallery</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#14e1eb] cursor-pointer">Contact Us</h1>
                                </Link>
                            </div>
                        </div>
                    ) : null}
                    <div className="hidden lg:flex flex-wrap gap-4 md:gap-6 mt-2 lg:mt-0">
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">Home</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">About</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">MBBS in Uzbekistan</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">Universities</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">Blogs</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">Gallery</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#14e1eb] cursor-pointer">Contact Us</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
