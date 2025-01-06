'use client'
import React, { useState } from 'react'
import { galaryData } from '../dataFile/galaryData/galaryData';

const Galary = () => {

    const [galary, setImage] = useState(galaryData);

    return (
        <>
            <div className='w-[85%] lg:w-[75%] mx-auto mt-[100px]'>
                <h1 className="text-4xl font-bold text-center">
                    Recent Photo <span className="text-[#0da9b0] underline"> Gallery</span>
                </h1>
                <p className="text-center mt-2">
                    Celebrating Achievements, One Click at a Time!
                </p>
                <div className="mt-10 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-10 w-max">
                        {
                            galary.map((image, index) => (
                                <div key={index}>
                                    <img src={image.galaryImage} alt="img" className='w-[300px] h-[270px] lg:w-[350px] rounded-lg object-cover' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galary
