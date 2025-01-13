import Image from "next/image";
import React from "react";
import universityimg from "../../../../public/Images/hat.png";
const Accreditation = () => {
  return (
    <div className="bg-[#FFF9EA] p-6 md:p-12 rounded-md shadow-md shadow-gray-400  w-[90%] mx-auto">
      <h2 className="text-[#00a1ab] text-xl md:text-3xl font-semibold mb-4 ">
        Accreditation & Recognitions Of Medical Universities In Uzbekistan
      </h2>
      <p className="text-sm">
        Degrees from Russian MBBS universities are offered, and they are
        accepted all around the world. These prestigious organizations that
        endorse these universities are:
      </p>

      <div className="flex justify-center items-center mb-6">
        <div className="relative ">
          <Image src={universityimg} alt="img" className="w-44  h-32" />
        </div>
      </div>

      <ul className="space-y-2 text-gray-800  text-sm">
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          National Medical Commission (NMC)
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          WHO (World Health Organisation)
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          Ministry of Education, Russia
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          World Federation for Medical Education (WFME)
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          Educational Commission for Foreign Medical Graduates (ECFMG)
        </li>
        <li className="flex items-start gap-2">
          <span className="text-yellow-500">⭐</span>
          The Foundation for Advancement of International Medical Education and
          Research (FAIMER)
        </li>
      </ul>
    </div>
  );
};

export default Accreditation;
