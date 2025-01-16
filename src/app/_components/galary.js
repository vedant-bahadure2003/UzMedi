"use client";
import React, { useState } from "react";
import { galaryData } from "../dataFile/galaryData/galaryData";
import Head from "next/head";
import Image from "next/image";

const Galary = () => {
  const [galary, setImage] = useState(galaryData);

  return (
    <>
      <Head>
        <title>Photo Gallery | Celebrating Achievements</title>
        <meta
          name="description"
          content="Explore our recent photo gallery capturing moments of achievements and celebrations."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="photo gallery, achievements, celebrations, image showcase"
        />
      </Head>

      <div className="w-[85%] lg:w-[75%] mx-auto mt-[100px]">
        <h1 className="text-4xl font-bold text-center">
          Recent Photo <span className="text-[#0da9b0] underline">Gallery</span>
        </h1>
        <p className="text-center mt-2">
          Celebrating Achievements, One Click at a Time!
        </p>

        <div className="mt-10 overflow-x-auto scrollbar-hide" role="list">
          <div className="flex gap-10 w-max">
            {galary.map((image, index) => (
              <figure key={index} className="flex-shrink-0" role="listitem">
                <Image
                  src={image.galaryImage}
                  alt="Gallery image"
                  className="w-[300px] h-[270px] lg:w-[350px] rounded-lg object-cover"
                  loading="lazy"
                  width={200}
                  height={300}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Galary;
