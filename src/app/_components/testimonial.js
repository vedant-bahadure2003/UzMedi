import Image from 'next/image'
import React from 'react'
import Face from "../../../public/Images/profile.jpg"
import { FaStar } from "react-icons/fa";


const Testimonials = () => {
    return (
        <>
            <div className='w-[80%] mx-auto mt-[50px]'>
                <h1 className='text-4xl font-bold text-center'>Our Happy <span className='text-[#0da9b0] underline'> Students</span></h1>
                <p className='text-center mt-2'>We are affiliated with these medical universities</p>
                <div className='flex flex-wrap gap-6 lg:gap-2 items-center justify-between mt-10'>
                    <div className='bg-[#0da9b0] w-[350px] h-[250px] p-8 relative rounded-tr-full rounded-br-full rounded-bl-full'>
                        <p className='font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi iste. Itaque,...</p>
                        <div className='flex flex-wrap gap-1 my-8'>
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />

                        </div>
                        <p className='font-semibold text-sm lg:text-xl ml-7  '>- John Doe</p>
                        <p className='text-gray-600 font-semibold text-sm  ml-11'>MBBS</p>
                        <Image
                            src={Face}
                            alt="face"
                            className='w-[150px] h-[120px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full'
                        />
                    </div>
                    <div className='bg-[#0da9b0] w-[350px] h-[250px] p-8 relative rounded-tr-full rounded-br-full rounded-bl-full'>
                        <p className='font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi iste. Itaque,...</p>
                        <div className='flex flex-wrap gap-1 my-8'>
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />



                        </div>
                        <p className='font-semibold text-sm lg:text-xl ml-7  '>- John Doe</p>
                        <p className='text-gray-600 font-semibold text-sm ml-11'>MBBS</p>
                        <Image
                            src={Face}
                            alt="face"
                            className='w-[150px] h-[120px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full'
                        />
                    </div>
                    <div className='bg-[#0da9b0] w-[350px] h-[250px] p-8 relative rounded-tr-full rounded-br-full rounded-bl-full'>
                        <p className='font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nisi iste. Itaque,...</p>
                        <div className='flex flex-wrap gap-1 my-8'>
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                            <FaStar className='text-xl text-[#ffffff]' />
                        </div>
                        <p className='font-semibold text-sm lg:text-xl ml-7  '>- John Doe</p>
                        <p className='text-gray-600 font-semibold text-sm  ml-11'>MBBS</p>
                        <Image
                            src={Face}
                            alt="face"
                            className='w-[150px] h-[120px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full'
                        />
                    </div>

                </div>

                <h1 className='text-7xl lg:text-8xl  font-bold text-[#0da9b0] my-[60px] text-center'>Dream. Study. Achieve</h1>

            </div>
        </>
    )
}

export default Testimonials