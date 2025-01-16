"use client";
import { useState } from "react";
import { blogData } from "../dataFile/blogData/blogData";
import Head from "next/head";
import Image from "next/image";

const Blog = () => {
  const [blogDetails, setBlogDetails] = useState(blogData);

  return (
    <>
      <Head>
        <title>Latest Blog | Empowering Future Doctors</title>
        <meta
          name="description"
          content="Explore the latest insights, tips, and stories to empower future doctors with valuable information."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="medical blog, doctor tips, future doctors, healthcare insights"
        />
      </Head>

      <div className="w-[85%] lg:w-[80%] mx-auto mt-[20px]">
        <h1 className="text-4xl font-bold text-center">
          Our Latest <span className="text-[#0da9b0] underline">Blog</span>
        </h1>
        <p className="text-center mt-2">
          Empowering Future Doctors with Valuable Information!
        </p>

        <div
          className="flex overflow-x-auto gap-10 mt-10 scrollbar-hide"
          role="list"
        >
          {blogDetails.map((blog) => (
            <article
              key={blog.id}
              className="w-[290px] lg:w-[300px] flex-shrink-0 "
              role="listitem"
            >
              <div className="w-[290px] lg:w-[300px] border border-gray-200 shadow-xl rounded-lg overflow-hidden h-full  ">
                <figure>
                  <Image
                    src={blog.blogImage}
                    alt={`Image for blog titled "${blog.blogHeading}"`}
                    className="w-full h-[200px] object-cover "
                    loading="lazy"
                    width={500}
                    height={200}
                  />
                </figure>
                <div className="p-3 flex flex-col gap-2 h-[250px] justify-evenly">
                  <time
                    className="font-semibold text-gray-500"
                    dateTime={blog.date}
                  >
                    {blog.date}
                  </time>
                  <h2 className="text-xl font-semibold">{blog.blogHeading}</h2>
                  <p className="text-gray-700 text-justify">
                    {blog.blogContent}
                  </p>
                  <button
                    aria-label={`Read more about ${blog.blogHeading}`}
                    className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
