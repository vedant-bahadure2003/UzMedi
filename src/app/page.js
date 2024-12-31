import Image from "next/image";
import Navbar from "./_components/navbar";
import { PiArrowCircleUpRight } from "react-icons/pi";
import WhyStudy from "./_components/whyStudy";
import CurveImg from "./_components/curveImg";
import Testimonials from "./_components/testimonial";
import Partner from "./_components/patner";
import Blog from "./_components/blog";
import Galary from "./_components/galary";
import HorizontalBox from "./_components/horizontalBox";
import Footer from "./_components/footer";
import doctor from "../../public/Images/doctor.png"
import Univercity from "./_components/university";
import Services from "./_components/servicies";

export default function Home() {
  return (
    <>
      <div className=' h-[120vh] relative'>
        {/* Navbar */}
        <div className='absolute w-full'>
          <Navbar />
        </div>

        {/* Heading */}
        <div className="absolute top-[120px] w-full mt-[20px] xl:mt-0 z-10">
          <div className="w-full absolute left-0 flex flex-col">
            <div className="w-[90%] mx-auto h-auto flex items-center justify-center flex-col text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl mt-3 font-semibold text-white w-full">
                Study <span className="text-[#13e0eb]">MBBS</span> At{' '}
                <span className="text-[#13e0eb]">Uzbekistan's</span>{' '}
                <br className="hidden md:block" /> Leading Universities
              </h1>
              <button className="mt-8 md:mt-[50px] bg-[#13e0eb] w-[120px] h-[50px] p-2 rounded-md text-white text-sm md:text-lg font-semibold">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div>
          <img
            className="h-[100vh] w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1733288413391-a88bbe8be696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fFV6YmVraXN0YW4lMjBob3NwaXRhbCUyMGltYWdlfGVufDB8fDB8fHww"
            alt="load"
          />
          <div className="h-[100vh] w-full  absolute top-0 bg-black opacity-50"></div>
        </div>
        {/* Stats Section */}
        <div className='absolute w-full h-[20vh] bg-[#fffbef] '>
          <div className="ml-8 w-[85%] lg:w-[70%] h-full sm:flex sm:flex-wrap sm:justify-start gap-2 sm:gap-2 sm:items-center mt-[170px] sm:mt-0 ">
            <div className="lg:border-r-2 border-black px-3 md:px-3 flex flex-col items-center justify-center gap-1">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-extrabold">12+</h1>
              <p className="text-sm sm:text-base font-semibold text-center">Years of Experience</p>
            </div>
            <div className="lg:border-r-2 border-black px-3 md:px-3 flex flex-col items-center justify-center gap-1  mt-4 sm:mt-0 ">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-extrabold">1000+</h1>
              <p className="text-sm sm:text-base font-semibold text-center">Satisfied students counselled</p>
            </div>
            <div className="lg:border-r-2 border-black px-3 md:px-3 flex flex-col items-center justify-center gap-1  mt-4 sm:mt-0 ">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-extrabold">10+</h1>
              <p className="text-sm sm:text-base font-semibold text-center">Universities affiliated with us!</p>
            </div>
            <div className="px-3 md:px-3 flex flex-col items-center justify-center gap-1 mt-4 sm:mt-0 ">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-extrabold">100+</h1>
              <p className="text-sm sm:text-base font-semibold text-center">Vice Assistance</p>
            </div>
          </div>
        </div>

        {/* Doctor Image */}
        <div className='absolute bottom-0 right-5 md:right-10 lg:right-20'>
          <Image src={doctor} alt='load' className='w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] object-cover' priority />
        </div>

        {/* Content */}
        <div className='absolute bottom-[300px] md:bottom-[200px] lg:bottom-[230px] left-5 md:left-[100px] lg:left-[200px] w-[90%] md:w-[70%] text-white'>
          <div className="font-semibold text-sm md:text-base lg:text-xl">
            <h1>Study in NMC & WHO recognized medical colleges</h1>
          </div>
          <div className="text-xs md:text-sm lg:text-lg flex flex-col gap-2 md:gap-3 w-full md:w-[70%] lg:w-[45%] mt-3">
            <h1 className="flex gap-2">
              <span className="mt-[2px] md:mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
                <PiArrowCircleUpRight />
              </span>
              Low-cost medical education starting from INR 5 Lacs*
            </h1>
            <h1 className="flex gap-2">
              <span className="mt-[2px] md:mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
                <PiArrowCircleUpRight />
              </span>
              No Donation & Capitation fees
            </h1>
            <h1 className="flex gap-2">
              <span className="mt-[2px] md:mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
                <PiArrowCircleUpRight />
              </span>
              Practice in India & across the world
            </h1>
            <h1 className="flex gap-2">
              <span className="mt-[2px] md:mt-[5px] text-[#1cb5bc] text-lg md:text-2xl">
                <PiArrowCircleUpRight />
              </span>
              Worldwide accepted the degree
            </h1>
          </div>
        </div>
      </div>

      <WhyStudy />
      <Univercity />
      <CurveImg />
      <Services />
      <Testimonials />
      <Partner />
      <Blog />
      <Galary />
      <HorizontalBox />
      <Footer />
    </>
  );
}
