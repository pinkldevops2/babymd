"use client";

import Banner from "../vaccinations/banner/page";
import Paragraph from "./paragraph/page";
import Tablecarosual from './tablecarosual/page';
import SecondParagraph from './secondparagraph/page';
import Schedules from './schedules/page';
import Image from "next/image";
import ThirdParagraph from './thirdparagraph/page';
import VaccineCarousel from './vaccinecarousel/page';
import CloudTestimonials from '../../../components/CloudTestimonials';
import Questions from './questions/page';
import Rectangle from './rectangle/page';
import GeneralConsults from './generalconsult/page';
import Facilities from './facilities/page';
import Package from './package/page';
import FaqSection from "../../../components/FaqSection";
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";



export default function Vaccinations() {
      const faqData = [
    {
      question: "What vaccinations do you provide?",
      answer: "We follow the IAP-recommended schedule and provide all essential and optional vaccines from birth onwards.",
      open: true,
    },
    {
      question: "Are vaccines administered by doctors?",
      answer: "Yes, every vaccine is administered by a qualified paediatrician.",
    },
    {
      question: "Do you offer needle-free options?",
      answer: "Yes, needle-free vaccines are available for certain age groups and vaccines.",
    },
    {
      question: "Can I get a vaccination schedule for my child?",
      answer: "Absolutely! We provide a personalized vaccine chart and send reminders before each due date.",
    },
    {
      question: "Do you offer vaccination packages?",
      answer: "Yes, we offer pre-paid vaccination bundles with a 10% discount for select age groups. Ask our care manager for details.",
    },
    {
      question: "Are combination vaccines safe?",
      answer: "Yes. Combination vaccines are safe, effective, and reduce the number of injections. They’re widely recommended by the IAP and WHO.",
    },
    {
      question: "Can my child be vaccinated during a mild illness?",
      answer: "Yes, children with mild colds, cough, or low-grade fever can safely receive vaccines unless advised otherwise by the paediatrician.",
    },
    {
      question: "What are common side effects of vaccines?",
      answer: "Most side effects are mild — fever, swelling at the injection site, and fussiness — and resolve in 1–2 days. Severe reactions are extremely rare.",
    },
    {
      question: "How do I prepare my child for a vaccine visit?",
      answer: "Dress them in loose, comfortable clothing, explain it in simple terms, and bring a comfort item (toy, pacifier) if needed. Feeding is fine before the visit.",
    }
  ];
  return (
     
      <div className="container mx-auto bg-white">
           <Banner />
           <Paragraph />
           <GeneralConsults />
           {/* <Tablecarosual/> */}
           <SecondParagraph/>
           <Schedules />
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
           {/* <ThirdParagraph/> */}
           {/* <VaccineCarousel/> */}
           <Facilities/>
           <Package/>
           <Questions/>
           <Rectangle/>
          {/*  <FaqSection/> */}
           <FaqSection 
            faqs={faqData} 
            />
   

      </div>

  );
}