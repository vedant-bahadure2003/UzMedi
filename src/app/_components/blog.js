'use client';
import { useState } from "react";
import { blogData } from "../dataFile/blogData/blogData";

const Blog = () => {
    const [blogDetails, setBlogDetails] = useState(blogData);

    return (
        <>
            <div className="w-[90%] lg:w-[80%] mx-auto mt-[100px]">
                <h1 className="text-4xl font-bold text-center">
                    Our Latest <span className="text-[#0da9b0] underline">Blog</span>
                </h1>
                <p className="text-center mt-2">
                    Empowering Future Doctors with Valuable Information!
                </p>
                <div className="flex overflow-x-auto gap-10 mt-10 scrollbar-hide">
                    {blogDetails.map((blog) => (
                        <div key={blog.id} className="w-[290px] lg:w-[300px]   flex-shrink-0">
                            <div className="w-[290px] lg:w-[300px] border border-gray-200 shadow-xl rounded-lg overflow-hidden">
                                <div>
                                    <img
                                        src={blog.blogImage}
                                        alt="Loading"
                                        className="w-full h-[200px] object-cover"
                                    />
                                </div>
                                <div className="p-3 flex flex-col gap-2">
                                    <p className="font-semibold text-gray-500">{blog.date}</p>
                                    <h1 className="text-xl font-semibold">{blog.blogHeading}</h1>
                                    <p className="text-gray-700 text-justify">{blog.blogContent}</p>
                                    <button className="bg-[#0da9b0] px-4 py-1.5 font-semibold rounded-md text-white">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;
