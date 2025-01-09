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

                            <h1 className='flex gap-2'>Direct Admissions Students will get direct admission to the medical university of Uzbekistan </h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>100% Safety Uzbekistan is the safest European country.</h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Low tuition fee Medical universities in Uzbekistan Offered low-cost education to Foreign students.</h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Worldwide acceptance MBBS degree in Uzbekistan is accepted worldwide.</h1>
                        </div>
                        <div className='  flex text-xl gap-2'>
                            <Image src={vector} alt='vector' className='text-xl  h-[25px] w-[25px] mt-1' />

                            <h1 className='flex gap-2'>Living & Accommodation Cost of living in Uzbekistan is low, around 62 USD.</h1>
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