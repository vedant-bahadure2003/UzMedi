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

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Background Image Section */}
      <div className="h-[120vh] w-full object-cover relative">
        <div>
          {/* Background Image */}
          <img
            className="h-[80vh] md:h-[100vh] w-full object-cover"
            src="https://plus.unsplash.com/premium_photo-1733288413391-a88bbe8be696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fFV6YmVraXN0YW4lMjBob3NwaXRhbCUyMGltYWdlfGVufDB8fDB8fHww"
            alt="g"
          />
          {/* Overlay */}
          <div className="h-[80vh] md:h-[100vh] w-full bg-black opacity-65 absolute top-0"></div>
          {/* Stats Section */}
          <div className="h-[20vh] w-full bg-[#fffbef]">
            <div className="w-[90%] mx-auto h-full flex flex-wrap justify-start gap-4 items-center">
              <div className="border-r-2 border-black px-3 md:px-5 flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold">12+</h1>
                <p className="text-sm sm:text-base font-semibold text-center">Years of Experience</p>
              </div>
              <div className="border-r-2 border-black px-3 md:px-5 flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold">1000+</h1>
                <p className="text-sm sm:text-base font-semibold text-center">Satisfied students counselled</p>
              </div>
              <div className="border-r-2 border-black px-3 md:px-5 flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold">10+</h1>
                <p className="text-sm sm:text-base font-semibold text-center">Universities affiliated with us!</p>
              </div>
              <div className="px-3 md:px-5 flex flex-col items-center justify-center gap-2">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-extrabold">100+</h1>
                <p className="text-sm sm:text-base font-semibold text-center">Vice Assistance</p>
              </div>
            </div>
          </div>
        </div>
        {/* Doctor Image */}
        <div>
          <Image
            src={doctor}
            alt="Doctor"
            className="absolute bottom-72 right-4 md:right-10 w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] xl:bottom-0 lg:bottom-0 lg:right-0"
          />
        </div>
      </div>

      {/* Floating Content */}
      <div className="absolute bottom-60 sm:bottom-20 left-4 md:left-32 text-white text-sm md:text-xl w-[90%] md:w-[80%] flex flex-col gap-3">
        <div className="font-semibold text-base md:text-xl">
          <h1>Study in NMC & WHO recognized medical colleges</h1>
        </div>
        <div className="text-sm md:text-lg flex flex-col gap-2 w-full md:w-[45%]">
          <h1 className="flex gap-2">
            <span className="mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
              <PiArrowCircleUpRight />
            </span>
            Low-cost medical education starting from INR 5 Lacs*
          </h1>
          <h1 className="flex gap-2">
            <span className="mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
              <PiArrowCircleUpRight />
            </span>
            No Donation & Capitation fees
          </h1>
          <h1 className="flex gap-2">
            <span className="mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
              <PiArrowCircleUpRight />
            </span>
            Practice in India & across the world
          </h1>
          <h1 className="flex gap-2">
            <span className="mt-[5px] text-[#0da9b0] text-lg md:text-2xl">
              <PiArrowCircleUpRight />
            </span>
            Worldwide accepted the degree
          </h1>
        </div>
      </div>

      <WhyStudy />
      <Univercity />
      <CurveImg />
      <Testimonials />
      <Partner />
      <Blog />
      <Galary />
      <HorizontalBox />
      <Footer />
    </>
  );
}
