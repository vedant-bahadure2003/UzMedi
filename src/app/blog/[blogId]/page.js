'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import collegeImg from '../../../../public/Images/collegeImg.png'
import collegeBgImg from '../../../../public/Images/collegeBgImg.png'
import Profile from "../../../../public/Images/profile.png";
import rightsign from "../../../../public/Images/vector.png";


import Image from 'next/image';
import Blog from '@/app/_components/blog';

const page = () => {
    const params = useParams();
    const { blogId } = params;
    const [blogs, setBlogs] = useState();
    const blogDetails = async () => {
        const response = await axios(`http://localhost:3000/api/blog/${blogId}`)
        setBlogs(response.data.blog)
    }
    useEffect(() => {
        blogDetails();
    }, [blogId])

    return (
        <>
            {/* BgImage */}
            <div className='relative  w-full h-[300px] sm:h-[400px]'>
                {/* Bg Image */}
                <div className='absolute h-[400px] w-full'>
                    <Image src={collegeImg} alt='collegeBgImg' className='w-full object-cover block sm:hidden h-[300px]' />
                    <Image src={collegeBgImg} alt='collegeBgImg' className='w-full h-full object-cover hidden sm:block sm:h-[380px]' />
                    <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
                </div>
                <div className='absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold'>
                    <p>Home / Blogs / <span className='text-[#16A8AF]'>Blog</span></p>
                </div>
                {/* Heading */}
                <div className='text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5  flex flex-col gap-1'>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
                        {blogs?.blogHeading}
                    </h1>
                </div>
            </div>
            {/* Profile */}
            {/* Content */}
            <div className="flex items-center h-[70px] justify-center mt-[10px]">
                <div className=" w-[85%] flex flex-col gap-4 bg-white ">
                    <div className="flex gap-3 w-full h-[50px] items-center justify-start">
                        <div className="w-[50px] h-[50px]">
                            <Image
                                src={Profile}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="font-semibold">
                            <h2>XYZ Employee</h2>
                        </div>
                        {/* <div>
              <Image src={greentick} alt="" className="w-[23px] h-[23px] " />
            </div> */}
                    </div>
                </div>
            </div>

            {/* Single Blog Page */}
            <div className='w-full flex flex-col '>
                <div className='w-[85%] mx-auto h-[250px] flex justify-center items-center'>
                    <img src={blogs?.blogImage} alt='Blog Image' className='w-full h-[200px] rounded-md' />
                </div>
                <div>
                    <p className='text-justify w-[85%] mx-auto'>
                        {blogs?.blogContent}
                    </p>
                </div>
            </div>

            {/* why Study */}
            {/* why study in uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 py-6 ">
                <h2 className="text-xl font-bold w-[85%] mx-auto text-[#0da9b0]">
                    Why Study MBBS in Uzbekistan?
                </h2>
                <p className='w-[85%] mx-auto text-justify font-semibold'>
                    Studying MBBS in Russia stands as the best option for Indian students seeking for the best and most cost-effective medical education in Russia. Top Medical universities in Russia are equipped with all the facilities to educate and train International medical aspirants to become excellent doctors.
                </p>
                <div className="text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto">
                    <div className="text-sm sm:text-[18px] flex flex-col gap-2">
                        <div className="flex gap-2">
                            <Image
                                src={rightsign}
                                alt="vector"
                                className="h-[18px] w-[18px] mt-1"
                            />
                            <p className="gap-2 text-justify">
                                <span className='font-semibold'>Quality Education : </span>Recognized medical programs with modern facilities.
                            </p>

                        </div>
                        <div className="flex gap-2">
                            <Image
                                src={rightsign}
                                alt="vector"
                                className="h-[18px] w-[18px] mt-1"
                            />
                            <p className="gap-2 text-justify">
                                <span className='font-semibold'>Affordability : </span>Budget- friendly tuition fees and living costs
                            </p>

                        </div>
                        <div className="flex gap-2">
                            <Image
                                src={rightsign}
                                alt="vector"
                                className="h-[18px] w-[18px] mt-1"
                            />
                            <p className="gap-2 text-justify">
                                <span className='font-semibold'>English-Medium Program: </span> Easy access for international students.
                            </p>

                        </div>
                        <div className="flex gap-2">
                            <Image
                                src={rightsign}
                                alt="vector"
                                className="h-[18px] w-[18px] mt-1"
                            />
                            <p className="gap-2 text-justify">
                                <span className='font-semibold'>Academic Diversity: </span>Cultural and  Exposure too a global environment.
                            </p>

                        </div>
                        <div className="flex gap-2">
                            <Image
                                src={rightsign}
                                alt="vector"
                                className="h-[18px] w-[18px] mt-1"
                            />
                            <p className="gap-2 text-justify">
                                <span className='font-semibold'>Global Recognition: </span> Internationally accepted degrees and accreditations.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="w-[85%] mx-auto">
                    <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
                        <span className="text-black">Read More :</span> Why Choose
                        Uzbekistan for MBBS Studies ?
                    </button>
                </div>
            </div>
            <Blog />
        </>
    )
}

export default page
