import React from 'react'
import { FaSchool } from "react-icons/fa";

const Services = () => {
    return (
        <>
            <div className='bg-teal-50 mt-[100px]  '>
                <h1 className='text-4xl font-bold text-center py-[60px]'>Our Valuable <span className='text-teal-500 underline'>Services</span></h1>
                <div className='border border-black flex gap-5 flex-wrap w-[80%] mx-auto items-center justify-center'>
                    <div className='border border-black  bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl'>
                        <FaSchool className='text-teal-500 font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Admissoion</h1>
                        <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                </div>
                <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white mt-[30px] mb-[60px]'>Read More</button>
            </div>

        </>
    )
}

export default Services