import React from "react";
import { FaSchool } from "react-icons/fa";

const Services = () => {
  return (
    <section
      className="bg-teal-50 mt-[40px] lg:mt-[100px]"
      aria-labelledby="services-title"
    >
      <header className="text-center py-[60px]">
        <h1 id="services-title" className="text-4xl font-bold">
          Our Valuable{" "}
          <span className="text-[#0da9b0] underline">Services</span>
        </h1>
        <p className="text-teal-700 mt-2">
          Providing comprehensive assistance throughout your journey.
        </p>
      </header>

      <div
        className="flex gap-5 flex-wrap w-[80%] mx-auto items-center justify-center"
        aria-label="List of services"
      >
        {[
          {
            title: "Admission Assistance",
            description: "Secure your place at top universities.",
          },
          {
            title: "Visa Processing",
            description: "We streamline your visa application process.",
          },
          {
            title: "Accommodation",
            description:
              "We provide safe & comfortable dormitory stays for Indian students.",
          },
          {
            title: "Airport Pickup",
            description: "We will greet you at the airport upon arrival.",
          },
          {
            title: "Documentation",
            description:
              "We handle all your document legalization and verification.",
          },
          {
            title: "Free Counseling",
            description:
              "Benefit from free counseling throughout your journey.",
          },
        ].map((service, index) => (
          <article
            key={index}
            className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl border border-[#e0e0e0]"
          >
            <FaSchool
              className="text-[#0da9b0] font-bold text-6xl"
              aria-hidden="true"
            />
            <h2 className="text-2xl font-semibold text-teal-700 text-center">
              {service.title}
            </h2>
            <p className="text-center">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="w-full flex items-center justify-center">
        <button className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white mt-[30px] mb-[60px]">
          Read More
        </button>
      </div>
    </section>
  );
};

export default Services;
