import React from "react";
import Card from "./card";

const Univercity = () => {
  return (
    <section
      className="w-[80%] mx-auto mt-[100px]"
      aria-labelledby="universities-title"
    >
      <header className="text-center">
        <h1 id="universities-title" className="text-4xl font-bold">
          Explore{" "}
          <span className="text-[#0da9b0] underline">Medical Universities</span>{" "}
          in Uzbekistan
        </h1>
        <p className="text-teal-700 mt-2">
          We are affiliated with these prestigious institutions.
        </p>
      </header>

      <div
        className="flex flex-wrap w-full items-center justify-center gap-5 lg:justify-between lg:gap-3 mt-10"
        role="list"
      >
        {[...Array(4)].map((_, index) => (
          <Card key={index} />
        ))}
      </div>
    </section>
  );
};

export default Univercity;
