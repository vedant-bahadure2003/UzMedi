import Image from "next/image";
import DoctorImg from "../../../public/Images/lady.png";
import { PiArrowCircleUpRight } from "react-icons/pi";

const WhyStudy = () => {
    return (
        <section className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap mt-[100px]">
            <div className="relative w-[90%] max-w-[750px] mx-auto overflow-hidden">
                <div className="absolute bg-teal-500 w-full h-full top-12 left-0 z-0 rounded-tr-full rounded-br-full"></div>
                <Image
                    src={DoctorImg}
                    alt="Doctor"
                    className="relative z-10 w-full h-[300px] sm:h-[400px] object-contain bottom-0"
                />
            </div>



            <div className="  w-full  mt-8  flex flex-col gap-5 ">
                <h2 className="text-3xl font-bold text-gray-800 w-[70%] mx-auto">
                    Why Study MBBS in <span className="text-teal-500 underline">Uzbekistan?</span>
                </h2>
                <div className='text-lg sm:text-xl flex flex-col gap-2 w-[70%] mx-auto'>
                    <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0] text-2xl' ><PiArrowCircleUpRight /></span>A one-stop solution for students specialized in MBBS overseas
                        education counseling, and admission </h1>
                    <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0]  text-2xl' ><PiArrowCircleUpRight /></span>Complete support for the necessary documentation.</h1>
                    <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0] text-2xl' ><PiArrowCircleUpRight /></span>Guaranteed Admission in top MBBS universities in Uzbekistan
                        having low fees for Indian students</h1>
                    <h1 className='flex gap-2'><span className='mt-[5px] text-[#0da9b0]  text-2xl' ><PiArrowCircleUpRight /></span>Free counseling to students and assistance such that it will help
                        their career grow.</h1>
                </div>
                <div className="w-[70%] mx-auto">
                    <button className=" mt-6 bg-teal-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-teal-600 w-[200px] mx-auto">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    );
}
export default WhyStudy;