import Image from 'next/image'
import React from 'react'


const Card = () => {
    return (
        <>
            <div className='w-[270px] border-1 shadow-xl rounded-lg overflow-hidden'>
                <div>
                    <img src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80=" alt="" />
                </div>
                <div className='p-3'>
                    <h1 className='text-teal-700 font-semibold text-lg'>Andijan State Medical
                        Institute</h1>
                    <p className='font-semibold '>Fees Structure :5,22,000 RS</p>
                    <p className='font-semibold'>Duration : 7 year</p>
                    <div className='flex justify-between mt-2'>
                        <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white'>Apply Now</button>
                        <button className='border border-teal-500 px-4 py-1.5 font-semibold text-teal-500 rounded-md'>Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card