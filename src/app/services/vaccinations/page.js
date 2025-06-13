"use client";

import Banner from "../vaccinations/banner/page";
import Paragraph from "./paragraph/page";
import Tablecarosual from './tablecarosual/page';
import SecondParagraph from './secondparagraph/page';
import Membership from './schedule/page';

import ThirdParagraph from './thirdparagraph/page';
import VaccineCarousel from './vaccinecarousel/page';
import CloudTestimonials from './CloudTestimonials//CloudTestimonials';
import Questions from './questions/page';
import Rectangle from './rectangle/page';
import GeneralConsults from './generalconsult/page';
import Facilities from './facilities/page';
//import FaqSection from './FAQSection/page';
import Package from './package/page';
import FaqSection from "../../../../components/FaqSection";



export default function Vaccinations() {
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
           {/* <Tablecarosual/> */}
           <SecondParagraph/>
           <Membership/>
           <CloudTestimonials/>
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