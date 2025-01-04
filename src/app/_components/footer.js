import Link from 'next/link';
import React from 'react';
// import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import locationIcon from "../../../public/Images/LocationIcon.png"
import callIcon from "../../../public/Images/callicon.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            {/* <div className="bg-gradient-to-t from-[#4dc5cb] to-[#aee4e7]  h-auto flex items-center justify-center flex-col xl:h-[449px] py-14 xl:py-0 sm:mt-[20px]" >
                <div className="w-full md:w-[90%] flex flex-col flex-wrap  md:flex-row gap-8 md:gap-5 items-center justify-center md:justify-evenly">

                    <div className="w-full md:w-[500px] flex flex-col gap-6 text-center xlS:text-left">
                        <h1 className="text-2xl font-bold xl:text-left text-center">About Uzbekistan Medi</h1>
                        <p className="text-[16px] xl:text-left text-center lg:w-[80%]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                        </p>
                        <div className="text-4xl  flex justify-center xl:justify-start gap-6 xl:gap-14">
                            <FaTwitter className='text-[#005D61] w-[30.88px] h-[24.84px]' />
                            <FaInstagram className='text-[#005D61] w-[30.88px] h-[24.84px]' />
                            <FaFacebook className='text-[#005D61] w-[30.88px] h-[24.84px]' />
                            <FaGithub className='text-[#005D61] w-[30.88px] h-[24.84px]' />
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row gap-8">

                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-bold  w-full text-center xl:text-left text-[16px]">Company</div>
                            <div className="flex flex-col items-center xl:items-start text-[14px]  gap-3 w-full">
                                <h1>About</h1>
                                <h1>Feature</h1>
                                <h1>Work</h1>
                                <h1>Career</h1>
                            </div>
                        </div>


                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-bold text-[16px] w-full text-center xl:text-left">Help</div>
                            <div className="flex flex-col items-center xl:items-start text-[14px]  gap-3 w-full">
                                <h1>Customer Support</h1>
                                <h1>Delivery Details</h1>
                                <h1>Terms & Condition</h1>
                                <h1>Privacy Policy</h1>
                            </div>
                        </div>


                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-bold text-[16px] w-full text-center xl:text-left">Resource</div>
                            <div className="flex flex-col items-center xl:items-start text-[14px] gap-3 w-full">
                                <h1>Free eBooks</h1>
                                <h1>Development Tutorial</h1>
                                <h1>Howto-Blog</h1>
                                <h1>Youtube Playlist</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full md:w-[85%] border-t-2 border-black mt-8" />
            </div> */}
            <div className='w-full h-[700px] bg-gradient-to-t from-[#005D61]  to-[#038f96] sm:bg-pink-200 md:bg-yellow-100 lg:bg-green-200
            items-center justify-center flex'>
                <div className='flex flex-col gap-10 w-[90%] h-[620px]  text-white '>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[24px] underline underline-offset-4'>About</h1>
                        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam, velit dignissimos unde dicta architecto dolore quisquam eveniet nostrum ab.</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-[24px] underline underline-offset-4'>Quick Links</h1>
                        <div className='flex flex-col gap-3 text-[14px]'>
                            <Link href={'#'}>Home</Link>
                            <Link href={'#'}>About us </Link>
                            <Link href={'#'}>MBBS in Uzbekistan</Link>
                            <Link href={'#'}>University</Link>
                            <Link href={'#'}>Blog</Link>
                            <Link href={'#'}>Galary</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[24px] underline underline-offset-4'>Contact Us</h1>
                        <div className='flex gap-1 '>

                            <Image className='w-[20px] h-[20px] mt-[3px]' src={locationIcon} alt='LocationIcon' />
                            <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aliquam</p>
                        </div>
                        <div className='flex gap-1 '>

                            <Image className='w-[20px] h-[20px] mt-[3px]' src={callIcon} alt='CallIcon' />
                            <p>3479582834795</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <hr />
                        <div className='flex flex-col items-center justify-center text-[14px]'>
                            <h1>Uzbekistan Medi © 2025 All rights reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;