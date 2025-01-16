import Image from "next/image";
import vector from "../../../public/Images/vector.png";
import whyStudy from "../../../public/Images/whyStudy.png";

const WhyStudy = () => {
  return (
    <section
      className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap py-10"
      aria-labelledby="why-study-title"
    >
      <div className="relative w-[100%] lg:w-[80%] max-w-[750px] mx-auto overflow-hidden">
        <Image
          src={whyStudy}
          alt="Doctor explaining why to study in Uzbekistan"
          className="z-10 w-full h-[400px] sm:h-[600px] object-contain"
          priority
        />
      </div>

      <div className="w-full lg:mt-20 flex flex-col gap-5">
        <h2
          id="why-study-title"
          className="text-3xl font-bold text-gray-800 w-[70%] mx-auto"
        >
          Why Study MBBS in{" "}
          <span className="text-[#0da9b0] underline">Uzbekistan?</span>
        </h2>

        <ul className="text-lg sm:text-xl flex flex-col gap-4 w-[70%] mx-auto">
          {[
            "Get a high-quality medical degree at significantly lower costs compared to other countries.",
            "Study medicine entirely in English, making it easier for international students.",
            "Your Uzbek medical degree will be respected and accepted worldwide.",
            "Uzbek medical universities have a strong academic reputation & provide excellent medical training.",
            "Experience a welcoming and secure environment for your studies in Uzbekistan.",
            "Gain valuable practical experience through clinical rotations in modern hospitals.",
          ].map((text, index) => (
            <li key={index} className="flex gap-3 items-start">
              <Image
                src={vector}
                alt="Checkmark icon for important feature"
                className="h-[25px] w-[25px] mt-1"
              />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        <div className="w-[70%] mx-auto">
          <button className="mt-6 bg-[#0da9b0] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#479b9f] w-[200px] mx-auto">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
