"use client";
import Image from "next/image";
import Banner from "./Banner/Banner";
import Paragraph from "./paragraph/page";
import CareProvide from "./careprovide/CareProvide";
import LedCare from "./ExoertLedCare/page";
import ExpertSlider from "./ExpertSlider/page";
import ThirdParagraph from "./ThirdParagraph/page";
import FourthParagraph from "./FourthParagraph/page";
import CloudTestimonials from '../../../components/CloudTestimonialsDev';
import FifthParagraph from "./FifthParagraph/page";
import SmileSection from "./SmileSection/page";
import Membership from './schedule/page';
import StepsCare from './StepsCare/page';
import CareSlider from './CareSlider/StepsCare';
import DoctorsTeam from "./doctorsTeam/page";
import FaqSection from "../../../components/FaqSection";
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";


export default function DevelopmentalAssessmentsandTherapies() {
   const faqData = [
    {
      question: "Are these therapies invasive?",
      answer: "No, these therapies are non-invasive and absolutely safe for your child.",
      open: true,
    },
    {
      question: "When does my child need occupational therapy?",
      answer: "When they face challenges in daily routines, motor skills, or sensory processing.",
    },
    {
      question: "What are the advantages of speech therapy for kids?",
      answer: "Improved communication, articulation, comprehension, and confidence.",
    },
    {
      question: "What kind of issues can be managed by family therapy?",
      answer: "Behavioral concerns, parenting challenges, siblings rivalry, and emotional conflicts.",
    },
    {
      question: "What kind of techniques are used for CBT treatment?",
      answer: "Techniques like cognitive restructuring, exposure therapy, and behavior activation.",
    },
  ];
  return (
     
      <div className="container mx-auto bg-white">
          <Banner />
          <Paragraph />
           <CareProvide/>  
          {/* <LedCare/> */}
          <CareSlider/>
         {/*  <StepsCare/> */}
          <ThirdParagraph/>
          <Membership/>
          <FourthParagraph/>
          <ExpertSlider />
          <FifthParagraph/>
         <DoctorsTeam />
         <div className="relative w-full bg-[#FFFFFF]">
                       <Image
                         src={curvedTop}
                         alt="Layer 1"
                         className=" mx-auto w-full"
                       />
                     </div>
           <CloudTestimonials/>
           <div className="relative w-full bg-[#FFFFFF] z-0">
                       <Image
                         src={curvedBottom}
                         alt="Layer 1"
                         className=" mx-auto w-full relative  top[-30px]"
                       />
                     </div>
          <SmileSection/>
         <FaqSection 
            faqs={faqData} 
            />
      </div>

  );
}