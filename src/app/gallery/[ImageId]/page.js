'use client'
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import collegeImg from '../../../../public/Images/collegeImg.png';
import collegeBgImg from '../../../../public/Images/collegeBgImg.png';
import Profile from "../../../../public/Images/profile.png";
import rightsign from "../../../../public/Images/vector.png";
import Image from 'next/image';

const page = () => {
    const params = useParams();
    const { ImageId } = params;
    const [image, setImages] = useState();

    const galleryDetails = async () => {
        const response = await axios(`http://localhost:3000/api/gallery/${ImageId}`);
        setImages(response.data.image);
        console.log(response.data.image);
    };

    useEffect(() => {
        galleryDetails();
    }, [ImageId]);

    return (
        <>

            {/* BgImage */}
            <div className="relative w-full h-[300px] sm:h-[400px]">
                {/* Bg Image */}
                <div className="absolute h-[400px] w-full">
                    <Image src={collegeImg} alt="collegeBgImg" className="w-full object-cover block sm:hidden h-[300px]" />
                    <Image src={collegeBgImg} alt="collegeBgImg" className="w-full h-full object-cover hidden sm:block sm:h-[380px]" />
                    <div className="h-[300px] sm:h-[380px] w-full absolute top-0 bg-black opacity-60"></div>
                </div>
                <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
                    <p>Home / Gallery / <span className="text-[#16A8AF]">Photo</span></p>
                </div>
                {/* Heading */}
                <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5 flex flex-col gap-1">
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3 w-full">
                        Photo
                    </h1>
                </div>
            </div>

            {/* Profile */}
            <div className=' xl:w-[70%]'>
                <div className='w-[80%] mx-auto'>
                    <div className="flex items-center h-[70px] justify-center mt-[10px]">
                        <div className="w-[85%] flex flex-col gap-4 bg-white">
                            <div className="flex gap-3 w-full h-[50px] items-center justify-start">
                                <div className="w-[50px] h-[50px]">
                                    <Image
                                        src={Profile}
                                        alt="profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="font-semibold">
                                    <h2>XYZ Employee</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Image Page */}
                    <div className="w-full flex flex-col mt-[20px]">
                        <div className="w-[85%] mx-auto flex justify-center items-center">
                            <img
                                src={image?.galaryImage}
                                alt="Gallery Image"
                                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[60vh] rounded-md object-cover"
                            />
                        </div>
                    </div>


                    {/* Why Study in Uzbekistan */}
                    <div className="w-full lg:mt-20 flex flex-col gap-5 py-6">
                        <h2 className="text-xl font-bold w-[85%] mx-auto text-[#0da9b0]">
                            Why Study MBBS in Uzbekistan?
                        </h2>
                        <p className="w-[85%] mx-auto text-justify font-semibold">
                            Studying MBBS in Russia stands as the best option for Indian students seeking for the best and most cost-effective medical education in Russia. Top Medical universities in Russia are equipped with all the facilities to educate and train International medical aspirants to become excellent doctors.
                        </p>
                        <div className="text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto">
                            <div className="text-sm sm:text-[18px] flex flex-col gap-2">
                                <div className="flex gap-2">
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className="font-semibold">Quality Education: </span>Recognized medical programs with modern facilities.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className="font-semibold">Affordability: </span>Budget-friendly tuition fees and living costs.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className="font-semibold">English-Medium Program: </span> Easy access for international students.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className="font-semibold">Academic Diversity: </span>Cultural and exposure to a global environment.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Image
                                        src={rightsign}
                                        alt="vector"
                                        className="h-[18px] w-[18px] mt-1"
                                    />
                                    <p className="gap-2 text-justify">
                                        <span className="font-semibold">Global Recognition: </span>Internationally accepted degrees and accreditations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[85%] mx-auto">
                            <button className="mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
                                <span className="text-black">Read More:</span> Why Choose
                                Uzbekistan for MBBS Studies?
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
