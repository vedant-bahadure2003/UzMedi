import Image from "next/image";
import vector from "../../../public/Images/vector.png"
import whyStudy from "../../../public/Images/whyStudy.png"

const WhyStudy = () => {
    return (
        <section className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap">
            <div className="relative w-[100%] lg:w-[80%] max-w-[750px] mx-auto overflow-hidden">
                <Image
                    src={whyStudy}
                    alt="Doctor"
                    className="z-10 w-full h-[400px] sm:h-[600px] object-contain "
                />
            </div>
            <div className=" w-full lg:mt-20 flex flex-col gap-5 ">
                <h2 className="text-3xl font-bold text-gray-800 w-[70%] mx-auto">
                    Why Study MBBS in <span className="text-[#0da9b0]underline">Uzbekistan?</span>
                </h2>
                <div className='text-lg sm:text-xl flex flex-col gap-2 w-[70%] mx-auto'>
                    <div className='text-lg sm:text-xl flex flex-col gap-2'>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Get a high-quality medical degree at significantly lower costs compared to other countries. </h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Study medicine entirely in English, making it easier for international students</h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Your Uzbek medical degree will be respected and accepted worldwide.
                            </h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Uzbek medical universities have a strong academic reputation & provide excellent medical training.
                            </h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Experience a welcoming and secure environment for your studies in Uzbekistan.
                            </h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Gain valuable practical experience through clinical rotations in modern hospitals.

                            </h1>
                        </div>


                    </div>

                </div>
                <div className="w-[70%] mx-auto">
                    <button className=" mt-6 bg-[#0da9b0] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#479b9f] w-[200px] mx-auto">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    );
}
export default WhyStudy;