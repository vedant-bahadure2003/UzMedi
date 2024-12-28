import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/Images/logo.png"

const Partner = () => {
    return (
        <>
            <div className='w-[80%] mx-auto mt-[100px]'>
                <h1 className='text-4xl font-bold text-center'>Our Partner <span className='text-teal-500 underline'> Universities</span></h1>
                <p className='text-center mt-2'>We are affiliated with these medical universities</p>
                <div className='flex flex-wrap items-center justify-between'>
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='w-[250px] h-fit'
                    />
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='w-[250px] h-fit'
                    />
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='w-[250px] h-fit'
                    />
                    <Image
                        src={Logo}
                        alt="Logo"
                        className='w-[250px] h-fit'
                    />

                </div>
            </div>
        </>
    )
}

export default Partner