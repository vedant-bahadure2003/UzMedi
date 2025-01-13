'use client'
import React, { useState } from 'react'
import collegeImg from '../../../public/Images/collegeImg.png'
import collegeBgImg from '../../../public/Images/collegeBgImg.png'
import { blogData } from '../dataFile/blogData/blogData';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const page = () => {
    const [blogDetails, setBlogDetails] = useState(blogData);
    const router = useRouter();

    const handleOnClick = (id) => {
        console.log(id);
        router.push(`/blog/${id}`)
    }

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
                    <p>Home /<span className='text-[#16A8AF]'> Blogs</span></p>
                </div>
                {/* Heading */}
                <div className='text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5  flex flex-col gap-1'>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
                        Blogs
                    </h1>
                </div>
            </div>
            {/* Blogs */}
            <div className="w-[90%] lg:w-[80%] mx-auto ">
                <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
                    {blogDetails.map((blog) => (
                        <div key={blog.id} className="w-[320px] lg:w-[300px]   flex-shrink-0" onClick={() => handleOnClick(blog.id)}>
                            <div className="w-[320px] lg:w-[300px] border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                                <div className='relative'>
                                    <div className="h-[230px] w-full  absolute top-0 bg-gradient-to-t from-[#1CB5BD] to-[#0D535700]  "></div>
                                    <div className='w-full text-center '>
                                        <h2 className='absolute bottom-6 w-full  text-white text-[20px] font-semibold '>{blog.blogHeading}</h2>
                                    </div>
                                    <img
                                        src={blog.blogImage}
                                        alt="Loading"
                                        className="w-full h-[230px] object-cover"
                                    />
                                </div>
                                <div className="p-3 flex flex-col gap-2">

                                    <p className="text-gray-700 text-justify">{blog.blogContent}</p>
                                    <div className='flex justify-between w-[100%] mx-auto'>
                                        <p className="font-semibold text-gray-500">{blog.date}</p>
                                        <p className="text-md font-semibold">Read more</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default page
