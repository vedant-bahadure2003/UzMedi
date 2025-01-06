import React from 'react'
import Image from 'next/image'
import bgUzImg from '../../../public/Images/mbbsUzImg.png'
import profile from '../../../public/Images/profile.png'
import Navbar from '../_components/navbar'
import vector from '../../../public/Images/vector.png'
import uzBg from '../../../public/Images/uzBg.png'

const MBBS_Uzbekistan = () => {
    return (
        <>
            {/* BgImage */}
            <div className='relative  w-full h-[300px]'>
                {/* Bg Image */}
                <div className='absolute h-[400px] w-full'>
                    <Image src={bgUzImg} alt='MBBS In UzBekistan' className='w-full object-cover block sm:hidden h-[280px]' />
                    <Image src={uzBg} alt='MBBS In UzBekistan' className='w-full h-full object-cover hidden sm:block sm:h-[350px]' />
                    <div className="h-[280px] sm:h-[350px] w-full  absolute top-0 bg-black opacity-40"></div>
                </div>
                {/* Navbar */}
                <div className='absolute top-0'>
                    <Navbar />
                </div>
                <div className='absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold'>
                    <h1>Home / <span className='text-[#16A8AF]'>MBBS In Uzbekistan</span></h1>
                </div>
                {/* Heading */}
                <div className='absolute top-32 sm:top-44 w-[50%] left-5'>
                    <h1 className="text-4xl sm:text-5xl font-semibold mt-3 text-white w-full">
                        MBBS In <span className="text-[#18a1a7]">Uzbekistan</span>
                    </h1>
                </div>
            </div>
            {/* Content */}
            <div className='flex items-center justify-center sm:mt-[100px] '>
                <div className='h-[400px] w-[95%] flex flex-col gap-4  '>
                    <div className='flex gap-3 w-full h-[50px] items-center justify-start '>
                        <div className='w-[50px] h-[50px]'>
                            <Image src={profile} alt='profile' className='w-full h-full object-cover' />
                        </div>
                        <div className='font-semibold text-md'>
                            <h1>XYZ Employee</h1>
                        </div>
                    </div>
                    <div className='text-justify'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia maxime, ea quibusdam dolorem exercitationem nobis rerum possimus suscipit at repellendus aspernatur accusamus itaque magni veniam consectetur est voluptates necessitatibus labore laboriosam a, eveniet vero architecto. Dolorem quisquam reprehenderit suscipit impedit. Officiis possimus, laborum voluptatibus consequatur id pariatur rem architecto porro nesciunt doloribus facilis labore quas veritatis debitis culpa alias harum dignissimos! </p>
                    </div>
                </div>
            </div>
            {/* Form */}
            <div className="w-full h-[440px] sm:-mt-[100px]">
                <div className="w-full h-[440px] md:h-[350px]">
                    <div className="p-4 mx-auto rounded-lg sm:border sm:w-[70%] h-[450px] md:h-[350px] sm:border-gray-300 sm:shadow-lg bg-[#FFF7EE]" >
                        <div className="flex flex-col gap-3">
                            <h1 className="text-2xl lg:text-3xl font-semibold text-center  text-[#16A8AF]">
                                Planning To Study MBBS?
                            </h1>
                            <h1 className="text-sm lg:text-[18px] font-semibold text-center text-gray-700">
                                Fill the form and get Detailed Counseling
                            </h1>
                        </div>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
                            />
                            <input
                                type="text"
                                placeholder="Your Mobile No."
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none "
                            />
                            <input
                                type="text"
                                placeholder="Current City"
                                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#16A8AF] outline-none"
                            />
                        </form>
                        <div className="flex justify-center mt-6 w-full ">
                            <button className="px-8 py-3 bg-[#16A8AF] text-white font-medium rounded-md w-full lg:w-[200px]">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* IFrame */}
            <div className="h-[250px] sm:h-[400px] md:h-[550px] flex items-center justify-center w-full mt-[20px] sm:mt-0">
                <div className=" h-full w-[85%] ">
                    {/* <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/wF6v4VlWvLM?si=tgAvq8qPU0jrPYlN"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe> */}
                    <iframe className="w-full h-[200px] sm:h-[350px] md:h-[500px] md:w-[80%] mx-auto mt-[20px] sm:mt-[40px] object-cover rounded-xl shadow-xl"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>

                </div>
            </div>
            {/* why study in uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 ">
                <h2 className="text-2xl font-bold w-[85%] mx-auto text-[#0da9b0]">
                    Why Study MBBS in Uzbekistan?
                </h2>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Direct Admissions Students will get direct admission to the medical university of Uzbekistan </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>100% Safety Uzbekistan is the safest European country.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Low tuition fee Medical universities in Uzbekistan Offered low-cost education to Foreign students.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Worldwide acceptance MBBS degree in Uzbekistan is accepted worldwide.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Living & Accommodation Cost of living in Uzbekistan is low, around 62 USD.</h1>
                        </div>


                    </div>

                </div>
                <div className="w-[85%] mx-auto">
                    <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-3 rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
                        <span className='text-black'>Read More :</span> Why Choose Uzbekistan for MBBS Studies ?
                    </button>
                </div>
            </div>
            {/* Eligiblity Criteria for MBBS in Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px] bg-[#FFF9EA] py-2">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Eligiblity Criteria for MBBS in Uzbekistan
                    </h2>
                    <p>The eligibility criteria for MBBS in Russia for Indian students show the relaxation in comparison with MBBS in India:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Direct Admissions Students will get direct admission to the medical university of Uzbekistan </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>100% Safety Uzbekistan is the safest European country.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Low tuition fee Medical universities in Uzbekistan Offered low-cost education to Foreign students.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Worldwide acceptance MBBS degree in Uzbekistan is accepted worldwide.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Living & Accommodation Cost of living in Uzbekistan is low, around 62 USD.</h1>
                        </div>


                    </div>
                </div>
            </div>
            {/* Admission Process for MBBS in Uzbekistan    */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Admission Process for MBBS in Uzbekistan                    </h2>
                    <p>To get admission to the MBBS course in Russia, students need to follow the simple steps:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='flex text-[18px] gap-1 '>
                            <h1 className='w-[100px] '>Step 1:</h1>
                            <h1 className='flex gap-2 text-justify w-[130%]  '>Fill out the application form on the university's online portal or mail it to their admission committee.</h1>
                        </div>
                        <div className='flex text-[18px] gap-1 '>
                            <h1 className='w-[100px] '>Step 2:</h1>
                            <h1 className='flex gap-2 text-justify w-[130%]  '>Fill out the application form on the university's online portal or mail it to their admission committee.</h1>
                        </div>
                        <div className='flex text-[18px] gap-1 '>
                            <h1 className='w-[100px] '>Step 3:</h1>
                            <h1 className='flex gap-2 text-justify w-[130%]  '>Fill out the application form on the university's online portal or mail it to their admission committee.</h1>
                        </div>
                        <div className='flex text-[18px] gap-1 '>
                            <h1 className='w-[100px] '>Step 4:</h1>
                            <h1 className='flex gap-2 text-justify w-[130%]  '>Fill out the application form on the university's online portal or mail it to their admission committee.</h1>
                        </div>
                        <div className='flex text-[18px] gap-1 '>
                            <h1 className='w-[100px] '>Step 5:</h1>
                            <h1 className='flex gap-2 text-justify w-[130%]  '>Fill out the application form on the university's online portal or mail it to their admission committee.</h1>
                        </div>


                    </div>
                </div>
            </div>
            {/* Documents Required for MBBS in Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Eligiblity Criteria for MBBS in Uzbekistan
                    </h2>
                    <p>To get admission to the MBBS course in Russia, students need to follow the simple steps:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>To get admission to the MBBS course in Russia, students need to follow the simple steps: </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>10th & 12th Certificate + Mark sheet</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Passport with minimum 18 months validity.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Original copy of Birth Certificate in English</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Invitation letter prescribed by Medical University of Russia</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Invitation letter prescribed by Medical University of Russia</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Authorized documents from the Ministry of External Affairs, New Delhi.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2 '>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Legalization of all documents from the Russian Embassy.</h1>
                        </div>


                    </div>
                </div>
            </div>
            {/* Total Duration of MBBS in Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Total Duration of MBBS in Uzbekistan
                    </h2>
                    <p>The total duration for the MBBS course in Russia is mentioned below:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The total duration of the MBBS programme is 6 years, which includes 1 year of internship and 5 years of academic study. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>In contrast to the first 3 years of the institution, which focus on the theoretical aspects of medicine, the following 3 years are devoted to practical training.</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* MBBS Fees in Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        MBBS Fees in Uzbekistan
                    </h2>
                    <p>To get admission to the MBBS course in Russia, students need to follow the simple steps:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <h1 className='flex gap-2 text-justify'>Eligible students need to check the postgraduate options after acquiring the MBBS degree in Uzbekistan. After receiving an MBBS degree from Uzbekistan University, Indian college students can review the eligibility standards for pursuing postgraduate research in India in addition to abroad. </h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Scope after Completing MBBS from Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Career Scope after Completing MBBS from Uzbekistan

                    </h2>
                    <p>Study MBBS in Uzbekistan and open various career avenues. This makes them special, have look at the possibilities:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Eligible students need to check the postgraduate options after acquiring the MBBS degree in Uzbekistan. After receiving an MBBS degree from Uzbekistan University, Indian college students can review the eligibility standards for pursuing postgraduate research in India in addition to abroad. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Uzbekistan offers the best precedence to medical studies improvement. Students of the medical University are offered diverse possibilities to work with the main scientists of the world.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Students can work and make contributions to the improvement of the medical field which opens new professional paths for college students interested in studies and improvement in the medical field.</h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Impact Of NMC Gazette On MBBS In Uzbekistan*/}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Impact Of NMC Gazette On MBBS In Uzbekistan

                    </h2>
                    <p>Study MBBS in Uzbekistan and open various career avenues. This makes them special, have look at the possibilities:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Rule 1: Eligible Students need to check the  postgraduate options after acquiring the MBBS  degree in Uzbekistan. After receiving an MBBS degree from Uzbekistan University, Indian college students can review the eligibility standards for pursuing postgraduate  research in India in addition to aboard. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Rule 2: Uzbekistan offers the best precedence to medical studies improvement. Students of the medical University are offered diverse possibilities to work with the main scientists of the world.</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* Medium Of Teaching In Uzbekistan*/}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Medium Of Teaching In Uzbekistan
                    </h2>

                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <h1 className='flex gap-2 text-justify'>Eligible students need to check the postgraduate options after acquiring the MBBS degree in Uzbekistan. After receiving an MBBS degree from Uzbekistan University,
                                Indian college students can review the eligibility standards for pursuing postgraduate research in India in addition to abroad. </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Is NEET Required For MBBS In Uzbekistan?*/}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Is NEET Required For MBBS In Uzbekistan?
                    </h2>

                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <h1 className='flex gap-2 text-justify'>Eligible students need to check the postgraduate options after acquiring the MBBS degree in Uzbekistan. After receiving an MBBS degree from Uzbekistan University,
                                Indian college students can review the eligibility standards for pursuing postgraduate research in India in addition to abroad. </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* How Safe Is Uzbekistan For Indian Students? */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px] bg-[#FFF9EA] py-2 ">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        How Safe Is Uzbekistan For Indian Students?
                    </h2>
                    <p>It is really safe for Indian students to live and
                        study MBBS in Uzbekistan, have a look at the
                        below given points: </p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>Uzbekistan is a completely non violent country & people are very friendly. They had been pioneers in advanced training in the Central Soviet region. Uzbek has top Universities for MBBS. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The country is a splendid choice to go in for the MBBS Course because the first-class Education in that country in truly top class.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>They are secure because the entire country is under CCTV surveillance. The people over there are truly welcoming to the Indians and have outstanding respect for our country.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>There are numerous faculties in Uzbekistan like Tashkent Medical Academy Which offer
                                fine medical research to the students.</h1>
                        </div>



                    </div>
                </div>
            </div>
            {/* Scholarships In Uzbekistan For Indian Students */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Scholarships In Uzbekistan For Indian Students
                    </h2>
                    <p>It is really safe for Indian students to live and study MBBS in Uzbekistan, have a look at the below given points: </p>
                    <p>In India, the students are provided with the facilities of education loans to help them to study aboard. The loan process and amount of loan is dependent on many factors.</p>
                </div>
            </div>
            {/*Education Loan Assistance For Studying MBBS In Uzbekistan. */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px] bg-[#FFF9EA] py-2 ">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Education Loan Assistance For Studying MBBS In Uzbekistan.
                    </h2>
                    <p>                    Students can get education loan for studying MBBS abroad:
                    </p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>In India, the students are provided with the facilities of education loans to help them to study abroad. The loan process and amount of loan is dependent on many factors. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The NEET score of the student, university fee, university’s invitation letter, these are some of the main documents that are required.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The education loan also depends on the student’s parent’s income, wealth, and property.</h1>
                        </div>




                    </div>
                </div>
            </div>
            {/* Different PG Options After MBBS From Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Different PG Options After MBBS From Uzbekistan

                    </h2>
                    <p>Students can get education loan for studying MBBS abroad:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>In India, the students are provided with the facilities of education loans to help them to study abroad. The loan process and amount of loan is dependent on many factors. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The NEET score of the student, university fee, university’s invitation letter, these are some of the main documents that are required.</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* Education System In Uzbekistan */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        Education System In Uzbekistan
                    </h2>
                    <p>Students can get education loan for studying MBBS abroad:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>In India, the students are provided with the facilities of education loans to help them to study abroad. The loan process and amount of loan is dependent on many factors. </h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2 text-justify'>The NEET score of the student, university fee, university’s invitation letter, these are some of the main documents that are required.</h1>
                        </div>

                    </div>
                </div>
            </div>
            {/* How To Choose The Best Medical University In Uzbekistan? */}
            <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
                <div className='flex flex-col justify-center items-start w-[85%] mx-auto gap-2'>

                    <h2 className="text-2xl font-bold text-[#0da9b0]">
                        How To Choose The Best Medical University In Uzbekistan?
                    </h2>
                    <p>Students can get education loan for studying MBBS abroad:</p>
                </div>
                <div className='text-lg sm:text-[18px] flex flex-col gap-2 w-[85%] mx-auto'>
                    <div className='text-lg sm:text-[18px] flex flex-col gap-2'>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />
                            <h1><strong>Accreditation:</strong> It’s a good idea to research an institution’s accreditation with recognized organizations for Foreign Medical Graduates (ECFMG), etc., before making a decision. It’s a profession. Therefore, you must make a wise decision.</h1>

                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className=' text-justify'><strong>Rankings:</strong>  Researching a university’s national and international rankings is just as crucial as understanding its reputation aboard.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className=' text-justify'><strong>MBBS Fee:</strong>  Numerous Indian students decide to study medicine in Russia since it is more economical. The price of an MBBS in Russia, however, varies based on the university you pick.</h1>
                        </div>
                        <div className='  flex text-[18px] gap-2'>
                            <Image src={vector} alt='vector' className='text-[18px]  h-[25px] w-[25px] mt-1' />

                            <h1 className=' text-justify'><strong>Facilities:</strong>  This is yet another crucial factor to take into account when evaluating Russian MBBS universities. Facilities offered by an institution tells a lot about their quality, which can affect your choices.</h1>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MBBS_Uzbekistan
