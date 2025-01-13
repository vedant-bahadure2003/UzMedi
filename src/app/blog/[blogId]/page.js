'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import collegeImg from '../../../../public/Images/collegeImg.png';
import collegeBgImg from '../../../../public/Images/collegeBgImg.png';
import Profile from "../../../../public/Images/profile.png";
import rightsign from "../../../../public/Images/vector.png";
import Image from 'next/image';
import Blog from '@/app/_components/blog';

const page = () => {
    const params = useParams();
    const { blogId } = params;
    const [blogs, setBlogs] = useState();

    const blogDetails = async () => {
        const response = await axios(`http://localhost:3000/api/blog/${blogId}`);
        setBlogs(response.data.blog);
    };

    useEffect(() => {
        blogDetails();
    }, [blogId]);

    return (
        <>

            {/* Background Image */}
            <div className='relative w-full h-[300px] sm:h-[400px]'>
                {/* Background Images */}
                <div className='absolute w-full h-full'>
                    <Image src={collegeImg} alt='collegeBgImg' className='w-full object-cover block sm:hidden h-[300px]' />
                    <Image src={collegeBgImg} alt='collegeBgImg' className='w-full h-full object-cover hidden sm:block sm:h-[380px]' />
                    <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
                </div>
                {/* Breadcrumb */}
                <div className='absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold'>
                    <p>Home / Blogs / <span className='text-[#16A8AF]'>Blog</span></p>
                </div>
                {/* Blog Heading */}
                <div className='absolute top-32 sm:top-44 text-white left-5 w-[90%] sm:w-[50%] flex flex-col gap-1'>
                    <h1 className="text-4xl sm:text-5xl font-semibold">
                        {blogs?.blogHeading}
                    </h1>
                </div>
            </div>

            <div className=' xl:w-[70%]'>
                <div className='w-[90%] mx-auto'>
                    {/* Profile Section */}
                    <div className="flex items-center justify-start ml-[45px] mt-4 ">
                        <div className="w-[90%] sm:w-[85%] bg-white p-4 rounded-md ">
                            <div className="flex gap-3 items-center">
                                <div className="w-[50px] h-[50px]">
                                    <Image
                                        src={Profile}
                                        alt="profile"
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div className="font-semibold">
                                    <h2>XYZ Employee</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className='w-full flex flex-col mt-4 '>
                        {/* Blog Image */}
                        <div className='w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] mx-auto  ml-[60px]'>
                            <img
                                src={blogs?.blogImage}
                                alt='Blog Image'
                                className='w-full h-auto lg:h-[60vh] rounded-md object-cover'
                            />
                        </div>

                        {/* Blog Text */}
                        <div className='mt-4 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] ml-[60px]'>
                            <p className='text-justify'>{blogs?.blogContent}</p>
                        </div>
                    </div>



                    {/* Why Study MBBS Section */}
                    <div className="w-full py-6">
                        <h2 className="text-xl font-bold w-[90%] sm:w-[85%] mx-auto text-[#0da9b0]">
                            Why Study MBBS in Uzbekistan?
                        </h2>
                        <p className='w-[90%] sm:w-[85%] mx-auto text-justify font-semibold'>
                            Studying MBBS in Russia stands as the best option for Indian students seeking the best and most cost-effective medical education in Russia. Top Medical universities in Russia are equipped with all the facilities to educate and train international medical aspirants to become excellent doctors.
                        </p>
                        <div className="text-lg sm:text-[18px] flex flex-col gap-2 w-[90%] sm:w-[85%] mx-auto">
                            {[
                                { title: 'Quality Education', desc: 'Recognized medical programs with modern facilities.' },
                                { title: 'Affordability', desc: 'Budget-friendly tuition fees and living costs.' },
                                { title: 'English-Medium Program', desc: 'Easy access for international students.' },
                                { title: 'Academic Diversity', desc: 'Cultural and exposure to a global environment.' },
                                { title: 'Global Recognition', desc: 'Internationally accepted degrees and accreditations.' }
                            ].map((item, index) => (
                                <div className="flex gap-2" key={index}>
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className='font-semibold'>{item.title} : </span>{item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="w-[90%] sm:w-[85%] mx-auto">
                            <button className="mt-3 bg-[#0da9b0] text-white py-2 px-4 text-sm rounded-md shadow-lg hover:bg-[#479b9f]">
                                <span className="text-black">Read More :</span> Why Choose Uzbekistan for MBBS Studies?
                            </button>
                        </div>
                    </div>

                    {/* Blog Component */}
                    <Blog />
                </div>
            </div>
        </>
    );
};

export default page;
