import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="bg-gradient-to-t from-[#4dc5cb] to-[#aee4e7] h-auto md:h-[400px] flex items-center justify-center flex-col p-4 mt-[40px]">
                <div className="w-full md:w-[90%] flex flex-col md:flex-row gap-8 md:gap-5 items-center justify-center md:justify-evenly">
                    {/* About Section */}
                    <div className="w-full md:w-[500px] flex flex-col gap-6 text-center md:text-left">
                        <h1 className="text-2xl font-semibold">About Uzbekistan Medi</h1>
                        <p className="text-lg md:text-xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
                        </p>
                        <div className="text-4xl md:text-5xl flex justify-center md:justify-start gap-6 md:gap-14">
                            <FaTwitter />
                            <FaInstagram />
                            <FaFacebook />
                            <FaGithub />
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Company */}
                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-semibold text-xl w-full text-center md:text-left">Company</div>
                            <div className="flex flex-col items-center md:items-start text-[16px] md:text-[18px] gap-4 w-full">
                                <h1>About</h1>
                                <h1>Feature</h1>
                                <h1>Work</h1>
                                <h1>Career</h1>
                            </div>
                        </div>

                        {/* Help */}
                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-semibold text-xl w-full text-center md:text-left">Help</div>
                            <div className="flex flex-col items-center md:items-start text-[16px] md:text-[18px] gap-4 w-full">
                                <h1>Customer Support</h1>
                                <h1>Delivery Details</h1>
                                <h1>Terms & Condition</h1>
                                <h1>Privacy Policy</h1>
                            </div>
                        </div>

                        {/* Resource */}
                        <div className="w-full md:w-[200px] flex flex-col items-center md:items-start gap-5">
                            <div className="font-semibold text-xl w-full text-center md:text-left">Resource</div>
                            <div className="flex flex-col items-center md:items-start text-[16px] md:text-[18px] gap-4 w-full">
                                <h1>Free eBooks</h1>
                                <h1>Development Tutorial</h1>
                                <h1>Howto-Blog</h1>
                                <h1>Youtube Playlist</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full md:w-[85%] border-t-2 border-black mt-8" />
            </div>
        </>
    );
};

export default Footer;
