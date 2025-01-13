import React from 'react'

const page = () => {
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
        </>
    )
}

export default page
