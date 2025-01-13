import React from 'react'
import Herosection from '../_components/mbbsinuzbekistan/Herosection'
import Highlight from '../_components/mbbsinuzbekistan/Highlight'
import Planningform from '../_components/mbbsinuzbekistan/Planningform'
import YtFrame from '../_components/mbbsinuzbekistan/YtFrame'
import Whystudy from '../_components/mbbsinuzbekistan/Whystudy'
import FeesStructure from '../_components/mbbsinuzbekistan/FeesStructure'
import Eligibility from '../_components/mbbsinuzbekistan/Eligibility'
import AdmissionProcess from '../_components/mbbsinuzbekistan/AdmissionProcess'
import Document from '../_components/mbbsinuzbekistan/Document'
import Syllabus from '../_components/mbbsinuzbekistan/Syllabus'
import Intake from '../_components/mbbsinuzbekistan/Intake'
import Accreditation from '../_components/mbbsinuzbekistan/Accreditation'
import UzbekistanVsIndiaMbbs from '../_components/mbbsinuzbekistan/UzbekistanVsIndiaMbbs'
import CourseOffered from '../_components/mbbsinuzbekistan/CourseOffered'
import CareerScope from '../_components/mbbsinuzbekistan/CareerScope'
import PassingPercentage from '../_components/mbbsinuzbekistan/PassingPercentage'
import HostelFacility from '../_components/mbbsinuzbekistan/HostelFacility'
import UniversitySection from '../_components/mbbsinuzbekistan/UniversitySection'


const MBBS_Uzbekistan = () => {
    return (
        <>
            <Herosection />
            <div className=' xl:w-[70%]'>
                <div className='xl:w-[80%] mx-auto'>

                    <Highlight />
                    <Planningform />
                    <YtFrame />
                    <Whystudy />
                    <FeesStructure />
                    <Eligibility />
                    <AdmissionProcess />
                    <Document />
                    <Syllabus />
                    <UniversitySection />
                    <Intake />
                    <Accreditation />
                    <UzbekistanVsIndiaMbbs />
                    <CourseOffered />
                    <CareerScope />
                    <PassingPercentage />
                    <HostelFacility />
                </div>

            </div>
        </>

    )
}

export default MBBS_Uzbekistan
