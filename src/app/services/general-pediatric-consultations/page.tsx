"use client";
import Image from "next/image";
import Banner from "../general-pediatric-consultations/banner/page";
import Paragraph from "../general-pediatric-consultations/paragraph/page";
import GeneralConsults from "../general-pediatric-consultations/generalconsult/page";
import SecondParagraph from "./SecondParagraph/page";
import DoctorsTeam from "../general-pediatric-consultations/doctorsTeam/page";
import ThirdParagraph from "./ThirdParagraph/page";
import Facilities from "../general-pediatric-consultations/facilities/page";
import FaqSection from "../../../components/FaqSection";
import SmileSection from "../general-pediatric-consultations/SmileSection/page";
import CloudTestimonials from '../../../components/CloudTestimonials';
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";

export default function GeneralPediatricConsultations() {
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
      <GeneralConsults />
      <SecondParagraph />      
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
      <ThirdParagraph />  
      <Facilities />
      <SmileSection />      
     {/*  <FaqSection /> */}
      <FaqSection 
          faqs={faqData} 
        />
      </div>

  );
}