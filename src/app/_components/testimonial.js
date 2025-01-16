import Image from "next/image";
import React from "react";
import Face from "../../../public/Images/face.jpg";
import stars from "../../../public/Images/groupstar.png";

const Testimonials = () => {
  return (
    <section
      className="w-[80%] mx-auto mt-[50px]"
      aria-labelledby="testimonials-title"
    >
      <header className="text-center">
        <h1 id="testimonials-title" className="text-4xl font-bold">
          Our Happy <span className="text-teal-500 underline">Students</span>
        </h1>
        <p className="text-teal-700 mt-2">Hear from our proud achievers.</p>
      </header>

      <div
        className="overflow-x-auto mt-10 scrollbar-hide"
        role="region"
        aria-label="Student Testimonials"
      >
        <div className="flex gap-6 items-center w-max">
          {[...Array(5)].map((_, index) => (
            <article
              key={index}
              className="bg-[#E9F7F8] w-[280px] h-[250px] md:w-[365px] md:h-[324px] relative rounded-tr-full rounded-br-full rounded-bl-full flex flex-col items-start justify-center p-5"
              aria-label={`Testimonial ${index + 1}`}
            >
              <blockquote className="text-gray-600 text-[14px] md:text-[18px] w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                nisi iste. Itaque,...
              </blockquote>
              <div className="flex gap-1 my-8" aria-label="Star Rating">
                <Image
                  src={stars}
                  alt="5-star rating"
                  width={100}
                  height={20}
                />
              </div>
              <footer className="ml-14">
                <p className="font-semibold text-xl">John Doe</p>
                <p className="text-gray-600 font-semibold">MBBS</p>
              </footer>
              <Image
                src={Face}
                alt="John Doe smiling"
                className="md:w-[164.98px] md:h-[146.9px] w-[100px] h-[90px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full"
              />
            </article>
          ))}
        </div>
      </div>

      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-teal-500 my-[60px] text-center">
        Dream . Study . Achieve
      </h2>
    </section>
  );
};

export default Testimonials;
