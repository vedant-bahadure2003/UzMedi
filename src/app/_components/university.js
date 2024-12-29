import React from 'react'
import Card from './card'


const Univercity = () => {
    return (
        <>
            <div className='w-[80%] mx-auto mt-[100px]'>
                <h1 className='text-4xl font-bold text-center'>Explore <span className='text-[#0da9b0] underline'>Medical Universities</span> in Uzbekistan</h1>
                <p className='text-center mt-2'>We are affiliated with these medical universities</p>
                <div className='flex flex-wrap items-center justify-center lg:justify-between gap-5 lg:gap-3 mt-10'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Univercity;