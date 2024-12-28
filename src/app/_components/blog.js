
const Blog = () => {
    return (
        <>
            <div className="w-[80%] mx-auto mt-[100px]">
                <h1 className="text-4xl font-bold text-center">
                    Our Latest <span className="text-teal-500 underline"> Blog</span>
                </h1>
                <p className="text-center mt-2">
                    Empowering Future Doctors with Valuable Information!
                </p>
                <div className="flex flex-wrap items-center justify-center mt-10 gap-5">
                    <div className="w-[300px] border-1 shadow-xl rounded-lg overflow-hidden">
                        <div>
                            <img src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80=" alt="loding" />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <p className="font-semibold">Dec 25 2025</p>
                            <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

                            <p className="font-semibold text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nam sequi sint i...</p>
                            <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white'>Read More</button>

                        </div>
                    </div>
                    <div className="w-[300px] border-1 shadow-xl rounded-lg overflow-hidden">
                        <div>
                            <img src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80=" alt="loding" />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <p className="font-semibold">Dec 25 2025</p>
                            <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

                            <p className="font-semibold text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nam sequi sint i...</p>
                            <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white'>Read More</button>

                        </div>
                    </div>
                    <div className="w-[300px] border-1 shadow-xl rounded-lg overflow-hidden">
                        <div>
                            <img src="https://media.istockphoto.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=is&k=20&c=15TsJBPquZtgf8ciMtV6wlEAccnI5RJoNcqzFY9qe80=" alt="loding" />
                        </div>
                        <div className="p-3 flex flex-col gap-2">
                            <p className="font-semibold">Dec 25 2025</p>
                            <h1 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

                            <p className="font-semibold text-gray-500 text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam nam sequi sint i...</p>
                            <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white'>Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;