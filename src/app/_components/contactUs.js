import Image from "next/image";
import formBgImg from '../../../public/Images/formBgImg.png'

const ContactUs = () => {
    return (
        <div className="w-full relative h-[440] mt-[50px]">
            <div className=" absolute top-0  w-full h-[450px] block sm:hidden ">
                <Image src={formBgImg} alt='formImg' className='h-full w-full object-cover ' />
            </div>
            <div className="w-full h-[440px] md:h-[350px]  absolute  top-0 ">
                <div className="p-4 mx-auto rounded-lg sm:border sm:w-[70%] h-[450px] md:h-[350px] sm:border-gray-300 sm:shadow-lg " >
                    <div className="">
                        <h1 className="text-2xl lg:text-3xl font-semibold text-center mb-6 text-gray-700">
                            Get Personalized Guidance for Your MBBS Journey
                        </h1>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
                        />
                        <input
                            type="text"
                            placeholder="Your Mobile No."
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
                        />
                        <input
                            type="text"
                            placeholder="Current City"
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
                        />
                    </form>
                    <div className="flex justify-center mt-6 w-full ">
                        <button className="px-8 py-3 bg-[#16A8AF] text-white font-medium rounded-md w-full lg:w-[200px]">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;
