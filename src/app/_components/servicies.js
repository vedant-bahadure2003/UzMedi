import React from 'react'
import { FaSchool } from "react-icons/fa";

const Services = () => {
    return (
        <>
            <div className='bg-teal-50 mt-[40px] lg:mt-[100px] '>
                <h1 className='text-4xl font-bold text-center py-[60px]'>Our Valuable <span className='text-[#0da9b0] underline'>Services</span></h1>
                <div className='flex gap-5 flex-wrap w-[80%] mx-auto items-center justify-center'>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'> Admission Assistance</h1>
                        <p className='text-center'>Secure your place at top universities.
                        </p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'> Visa Processing</h1>
                        <p className='text-center'> We streamline your visa application process</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Accommodation</h1>
                        <p className='text-center'>We provide safe & comfortable dormitory stays for Indian students.
                        </p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Airport Pickup</h1>
                        <p className='text-center'>We'll greet you at the airport upon arrival</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'>Documentation</h1>
                        <p className='text-center'> We handle all your document legalization and verification</p>
                    </div>
                    <div className='bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]'>
                        <FaSchool className='text-[#0da9b0] font-bold text-6xl' />
                        <h1 className='text-2xl font-semibold text-teal-700'> Free Counseling</h1>
                        <p className='text-center'>Benefit from free counseling throughout your journey.
                        </p>
                    </div>

                </div>
                <div className='w-full flex items-center justify-center'>

                    <button className='bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white mt-[30px] mb-[60px]'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default Services;