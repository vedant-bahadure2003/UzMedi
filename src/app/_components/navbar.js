import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <div className="w-full bg-[#00000080] backdrop-blur-md z-10 absolute top-0 left-0">
                <div className="w-[95%] mx-auto flex flex-wrap justify-between md:justify-evenly items-center py-4 md:py-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Uzbekistan Medi</h1>
                    <div className="flex flex-wrap gap-4 md:gap-6">
                        <Link href={'/home'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">Home</h1>
                        </Link>
                        <Link href={'/about'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">About</h1>
                        </Link>
                        <Link href={'/doctors'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">MBBS in Uzbekistan</h1>
                        </Link>
                        <Link href={'/appointments'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">Universities</h1>
                        </Link>
                        <Link href={'/contact'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">Blogs</h1>
                        </Link>
                        <Link href={'/contact'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">Gallery</h1>
                        </Link>
                        <Link href={'/contact'}>
                            <h1 className="text-base md:text-lg text-white hover:text-gray-300 cursor-pointer">Contact Us</h1>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Heading */}
            <div className="w-full absolute top-[120px] md:top-[150px] left-0 z-10 flex flex-col">
                <div className="w-[90%] mx-auto h-auto flex items-center justify-center flex-col text-center">
                    <h1 className="text-3xl md:text-7xl font-semibold text-white w-full md:w-[70%]">
                        Study <span className="text-[#13e0eb]">MBBS</span> At{' '}
                        <span className="text-[#13e0eb]">Uzbekistan's</span> Leading Universities
                    </h1>
                    <button className="mt-8 md:mt-[50px] bg-[#13e0eb] w-[140px] md:w-[180px] h-[50px] md:h-[70px] p-2 rounded-md text-white text-lg md:text-2xl font-semibold">
                        Apply Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
