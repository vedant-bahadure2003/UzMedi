'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
    const [display, setDisplay] = useState(false);
    return (
        <>
            {/* Navbar */}
            <div className="w-full  bg-[#00000080] backdrop-blur-md fixed top-0 left-0 z-50 ">
                <div className="w-[90%]  md:w-[80%] mx-auto flex flex-wrap justify-between items-center py-4 md:py-6">
                    <h1 className="text-[16px] md:text-3xl font-bold text-white">Uzbekistan <br className='md:hidden' /> Medi</h1>
                    <div className="xl:hidden flex items-center gap-3">

                        <button className='inline-block text-base py-1 px-3  bg-teal-500 text-white rounded-md'>Apply Now</button>

                        <IoMdMenu
                            className="text-white text-2xl cursor-pointer inline-block"
                            onClick={() => setDisplay(!display)}
                        />
                    </div>
                    {display ? (
                        <div className="xl:hidden w-[70%] sm:mt-4 bg-[#ffffff]  absolute top-0 left-0  h-[100vh] z-40 font-semibold">
                            <div className='flex flex-col justify-start gap-3 ml-3 mt-5'>
                                <Link href="#">
                                    <h1 className=" text-xl md:text-lg text-black ">Uzbekistan Medi</h1>
                                </Link>
                                <Link href="/">
                                    <h1 className=" text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">Home</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">About</h1>
                                </Link>
                                <Link href="/mbbs_in_uzbekistan">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">MBBS in Uzbekistan</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">Universities</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">Blogs</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">Gallery</h1>
                                </Link>
                                <Link href="#">
                                    <h1 className="text-xl md:text-lg text-black hover:text-[#16A8AF] cursor-pointer">Contact Us</h1>
                                </Link>
                            </div>
                        </div>
                    ) : null}

                    <div className="hidden xl:flex flex-wrap gap-4 md:gap-6 mt-2 lg:mt-0">
                        <Link href="/">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">Home</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">About</h1>
                        </Link>
                        <Link href="/mbbs_in_uzbekistan">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">MBBS in Uzbekistan</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">Universities</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">Blogs</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">Gallery</h1>
                        </Link>
                        <Link href="#">
                            <h1 className="text-base md:text-lg text-white hover:text-[#16A8AF] cursor-pointer">Contact Us</h1>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;