import Image from "next/image";
import Navbar from "./_components/navbar";
import { PiArrowCircleUpRight } from "react-icons/pi";
import WhyStudy from "./_components/whyStudy";
import CurveImg from "./_components/curveImg";
import Testimonials from "./_components/testimonial";
import Partner from "./_components/patner";
import Blog from "./_components/blog";
import Galary from "./_components/galary";
import doctor from "../../public/Images/doctor.png";
import Univercity from "./_components/university";
import Services from "./_components/servicies";
import ContactUs from "./_components/contactUs";
import HomeHerosection from "./_components/HomeHerosection";
import Faq from "./_components/Faq";
export default function Home() {
  return (
    <>
      <HomeHerosection />
      <WhyStudy />
      <Univercity />
      <CurveImg />
      <Services />
      <Partner />
      <Testimonials />
      <Blog />
      <Galary />
      <Faq />
    </>
  );
}
