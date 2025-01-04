import React from 'react'
import logo from '../../../public/Images/universityimg1.png'
import Image from 'next/image'
const page = () => {
    return (
        <>
            <div className='flex space-x-16 overflow-hidden '>
                <div className='flex space-x-16 animate-loop-scroll'>
                    <Image src={logo} alt='logo' loading='lazy' />
                    <Image src={logo} alt='logo' loading='lazy' />

                </div>
                <div className='flex space-x-16 animate-loop-scroll' aria-hidden="true" >
                    <Image src={logo} alt='logo' loading='lazy' />
                    <Image src={logo} alt='logo' loading='lazy' />
                </div>
            </div>
        </>
    )
}

export default page
