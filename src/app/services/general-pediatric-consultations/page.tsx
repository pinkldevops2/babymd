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
      question: "What do general paediatric consultations cover?",
      answer: "Everything from fevers and coughs to growth concerns, rashes, digestion, feeding, and routine check-ups.",
      open: true,
    },
    {
      question: "How long is a typical consultation?",
      answer: "Consultations usually last 15–20 minutes, giving you and your child enough time to be heard.",
    },
    {
      question: "Will I get a prescription and follow-up advice?",
      answer: "Yes, all consultations include digital prescriptions, treatment plans, and follow-up instructions.",
    },
    {
      question: "Can I consult the same doctor each time?",
      answer: "Yes, you can request to see the same paediatrician based on availability.",
    },
    {
      question: "Do you offer video consultations?",
      answer: "Yes, video consultations are available for non-emergency concerns.",
    },
    {
      question: "What is a well-baby or well-child visit?",
      answer: "These are routine check-ups to monitor growth, development, and overall health — even when your child isn’t sick. They help with early detection of issues.",
    },
    {
      question: "When should I worry about my child’s growth?",
      answer: "If your child’s weight, height, or head circumference is falling below normal growth charts, a paediatrician should evaluate the cause.",
    },
    {
      question: "Can paediatricians treat skin issues, allergies, or digestion problems?",
      answer: "Yes, general paediatricians treat a wide range of concerns — and refer to specialists when needed.",
    },
    {
      question: "What should I bring to a paediatric consultation?",
      answer: "Bring your child’s immunisation record, list of medications, previous prescriptions (if any), and any notes on symptoms or concerns.",
    }
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