import Image from "next/image";
import doctor from "../../../public/Images/doctor.png";
import rightsign from "../../../public/Images/vector.png";
import bgImage from "../../../public/Images/backgroundImage.png";
import mobileheroimg from "../../../public/Images/mobileheroimg.png";
import mobilehero1 from "../../../public/Images/mobilehero1.png";
import mobilehero2 from "../../../public/Images/mobilehero2.png";
import mobilehero3 from "../../../public/Images/mobilehero3.png";
import mobilehero4 from "../../../public/Images/mobilehero4.png";
import Head from "next/head";

const HomeHerosection = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Study MBBS in Uzbekistan with affordable fees, no donation required, and a globally recognized degree. Join top universities and gain practical experience."
        />
        <meta
          name="keywords"
          content="MBBS in Uzbekistan, Study MBBS, affordable MBBS, no donation MBBS, medical degrees, global medical education"
        />
        <meta name="author" content="Uzbekistan Medi" />
      </Head>

      <div className="h-[109vh]  relative md:block hidden shadow-b shadow-xl">
        <div className="relative">
          <Image
            src={bgImage}
            alt="Background image of a university campus"
            loading="lazy"
            className="h-[90vh] w-full object-cover"
          />
          <div className="h-[90vh] w-full absolute top-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <Image
            src={doctor}
            alt="Doctor with stethoscope"
            className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] xl:w-[600px] lg:h-[500px] lg:w-[500px] xl:h-[600px] object-cover absolute bottom-0 xl:bottom-[-22%] right-0"
            priority
          />
        </div>
        <div className="absolute top-[120px] w-full h-[100vh] xl:mt-0 z-10 ">
          <div className="w-[80%] mx-auto h-full flex flex-col items-stretch gap-2 md:gap-7">
            <div className="w-[90%] mx-auto h-auto flex items-center justify-center flex-col text-center">
              <h1
                id="headfont"
                className="text-4xl md:text-6xl lg:text-[64px] mt-3 font-semibold text-white w-full"
              >
                Study <span className="text-[#13e0eb]">MBBS</span> Course in{" "}
                <span className="text-[#13e0eb]">Uzbekistan</span>
              </h1>
              <button className="mt-8 md:mt-[30px] bg-[#16A8AF] w-[150px] h-[50px] rounded-md text-white text-sm md:text-lg font-semibold">
                Apply Now
              </button>
            </div>
            <div className="w-[90%] md:w-[70%] text-white mt-[50px] ">
              <div className="text-xs  md:text-sm lg:text-lg flex flex-col gap-2 md:gap-3 w-full md:w-[70%] mt-3">
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px]">
                    <Image
                      src={rightsign}
                      alt="Checkmark sign"
                      loading="lazy"
                    />
                  </span>
                  Affordable education with fees starting at just ₹4 Lakhs*
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px]">
                    <Image
                      src={rightsign}
                      alt="Checkmark sign"
                      loading="lazy"
                    />
                  </span>
                  No Donation for Indian students
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px]">
                    <Image
                      src={rightsign}
                      alt="Checkmark sign"
                      loading="lazy"
                    />
                  </span>
                  Gain practical experience in India & internationally
                </h1>
                <h1 className="flex gap-2">
                  <span className="mt-[2px] md:mt-[5px]">
                    <Image
                      src={rightsign}
                      alt="Checkmark sign"
                      loading="lazy"
                    />
                  </span>
                  Degree is recognized globally
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-fit xl:h-[20vh] bg-[#fffbef]">
          <div className="w-[80%] mx-auto h-full sm:flex sm:flex-wrap sm:justify-start gap-2 sm:gap-2 sm:items-center sm:mt-0">
            <div className="lg:border-r-2 border-black px-3 flex flex-col items-center justify-center gap-1">
              <h1 className="text-2xl sm:text-2xl lg:text-[35px] text-black font-bold">
                12+
              </h1>
              <p className="text-sm sm:text-base text-center break-words">
                Years of Experience
              </p>
            </div>
            <div className="lg:border-r-2 border-black px-3 md:px-3 flex flex-col items-center justify-center gap-1 mt-4 sm:mt-0">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-bold">
                1000+
              </h1>
              <p className="text-sm sm:text-base text-center break-words">
                Satisfied students <br /> counselled
              </p>
            </div>
            <div className="lg:border-r-2 border-black px-3 md:px-3 flex flex-col items-center justify-center gap-1 mt-4 sm:mt-0">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-bold">
                10+
              </h1>
              <p className="text-sm sm:text-base text-center break-words">
                Universities <br /> affiliated with us!
              </p>
            </div>
            <div className="px-3 md:px-3 flex flex-col items-center justify-center gap-1 mt-4 sm:mt-0">
              <h1 className="text-2xl sm:text-2xl lg:text-4xl text-black font-bold">
                100+
              </h1>
              <p className="text-sm sm:text-base text-center break-words">
                Vice Assistance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="relative w-full md:hidden h-[68vh] overflow-hidden">
        <Image
          src={mobileheroimg}
          alt="Mobile hero image for MBBS in Uzbekistan"
          className="absolute top-0 left-0 w-full h-full"
          loading="lazy"
        />

        <div className="absolute top-3 left-0 z-20 w-full h-full flex flex-col items-start justify-center gap-4">
          <h1 className="w-[90%] mx-auto text-[36px] font-bold text-white mt-10">
            Study <span className="text-[#13e0eb]">MBBS</span>Course in{" "}
            <span className="text-[#13e0eb]">Uzbekistan</span>
          </h1>
          <button className="inline-block w-[147px] h-[47px] text-xl py-1 px-3 ml-4 bg-teal-500 text-white rounded-md">
            Apply Now
          </button>
          <div className="bg-gradient-to-r from-white to-transparent w-full space-y-2 p-2">
            <li className="flex gap-2 w-[90%] mx-auto items-start">
              <Image
                src={mobilehero1}
                alt="Affordable education with ₹4 Lakhs"
                className="object-contain mt-[5px]"
                loading="lazy"
              />
              Affordable education with fees starting at just ₹4 Lakhs*
            </li>
            <li className="flex gap-2 w-[90%] mx-auto">
              <Image
                src={mobilehero2}
                alt="No donation or capitation fees"
                className="object-contain mt-[5px]"
                loading="lazy"
              />
              No Donation & Capitation fees
            </li>
            <li className="flex gap-2 w-[90%] mx-auto items-start">
              <Image
                src={mobilehero3}
                alt="Practical experience in India & internationally"
                className="object-contain mt-[5px]"
                loading="lazy"
              />
              Gain practical experience in India & internationally
            </li>
            <li className="flex gap-2 w-[90%] mx-auto items-start">
              <Image
                src={mobilehero4}
                alt="Globally recognized degree"
                className="object-contain mt-[5px]"
                loading="lazy"
              />
              Degree is recognized globally
            </li>
          </div>
        </div>
      </div>

      {/* Mobile Stats Section */}
      <div className="bg-[#FFFBEF] h-[110px] overflow-x-scroll overflow-y-hidden scrollbar-hide md:hidden">
        <div className="flex gap-6 items-center justify-start w-[90%] mx-auto">
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">12+</p>
            <p className="text-sm text-center leading-tight whitespace-normal">
              Years of <br /> expertise
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">1500+</p>
            <p className="text-sm text-center leading-tight w-[120px]">
              Satisfied students <br /> counselled
            </p>
          </div>
          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px]">10+</p>
            <p className="text-sm text-center leading-tight w-[120px]">
              Universities <br /> affiliated with us!
            </p>
          </div>

          <div className="p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-[32px] text-center">100+</p>
            <p className="text-sm text-center leading-tight whitespace-normal">
              Vice Assistance
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHerosection;
