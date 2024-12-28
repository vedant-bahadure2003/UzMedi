import React from 'react'
import { PiArrowCircleUpRight } from "react-icons/pi";

const CurveImg = () => {
    return (
        <>
            <div className='w-full h-auto flex items-center justify-center mt-[60px]'>
                <div className='w-[90%] mx-auto h-auto flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[50%] h-auto'>
                        <div className='w-[90%] lg:w-[75%] h-full mx-auto flex flex-col gap-8 justify-center py-8'>
                            <div>
                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-semibold'>
                                    Why <span className='text-[#0da9b0]'>Uzbekistan Medi?</span>
                                </h1>
                            </div>
                            <div className='text-lg sm:text-xl flex flex-col gap-2'>
                                <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0] text-2xl' ><PiArrowCircleUpRight /></span>A one-stop solution for students specialized in MBBS overseas
                                    education counseling, and admission </h1>
                                <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0]  text-2xl' ><PiArrowCircleUpRight /></span>Complete support for the necessary documentation.</h1>
                                <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0] text-2xl' ><PiArrowCircleUpRight /></span>Guaranteed Admission in top MBBS universities in Uzbekistan
                                    having low fees for Indian students</h1>
                                <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0]  text-2xl' ><PiArrowCircleUpRight /></span>Free counseling to students and assistance such that it will help
                                    their career grow.</h1>
                            </div>
                            <button className='bg-[#0da9b0] w-[140px] sm:w-[160px] h-[40px] rounded-md text-white text-lg sm:text-xl font-semibold'>
                                Read
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[50%] h-auto flex items-center justify-center relative py-8'>
                        <img id='curveImg' className='z-10 object-cover w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px]' src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img id='curveBgImg' className='absolute bg-[#0da9b0] object-cover w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px]' src="g" alt="" />
                        <img id='curveDashImg' className='absolute border-2 border-dashed border-[#0da9b0] object-cover w-[250px] sm:w-[350px] lg:w-[450px] h-[250px] sm:h-[350px] lg:h-[450px]' src="g" alt="k" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurveImg
