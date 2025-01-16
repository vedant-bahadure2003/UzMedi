import React from "react";
import HeroSection from "@/app/_components/mbbsinuzbekistan/colleges/HeroSection";
import Xyz from "@/app/_components/mbbsinuzbekistan/colleges/Xyz";
import YouTube from "@/app/_components/mbbsinuzbekistan/colleges/YouTube";
import HighLightTable from "@/app/_components/mbbsinuzbekistan/colleges/HighLightTable";
import WhyStudy from "@/app/_components/mbbsinuzbekistan/colleges/WhyStudy";
import KeyFacts from "@/app/_components/mbbsinuzbekistan/colleges/KeyFacts";
import FeesStructure from "@/app/_components/mbbsinuzbekistan/colleges/FeesStructure";
import Elegibility from "@/app/_components/mbbsinuzbekistan/colleges/Eligibility";
import Admission from "@/app/_components/mbbsinuzbekistan/colleges/Admission";
import DocumentReq from "@/app/_components/mbbsinuzbekistan/colleges/DocumentReq";

export default function page() {
  return (
    <>
      <HeroSection />
      <Xyz />
      <HighLightTable />
      <YouTube />
      <WhyStudy />
      <KeyFacts />
      <FeesStructure />
      <Elegibility />
      <Admission />
      <DocumentReq />
    </>
  );
}
