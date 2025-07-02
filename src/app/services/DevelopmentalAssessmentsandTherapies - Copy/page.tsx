"use client";
import Banner from "./banner/page";
import Paragraph from "./paragraph/page";
import LedCare from "./ExoertLedCare/page";
import ExpertSlider from "./tablecarosual/page";
import ThirdParagraph from "./ThirdParagraph/page";
import FourthParagraph from "./FourthParagraph/page";
import CloudTestimonials from "./CloudTestimonials/CloudTestimonials";
import FifthParagraph from "./FifthParagraph/page";
import SmileSection from "./SmileSection/page";
import Membership from './Schedule/page';
import StepsCare from './StepsCare/page';
import DoctorsTeam from "./doctorsTeam/page";
import FaqSection from "../../../components/FaqSection";


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
          <LedCare/>
          <StepsCare/>
          <ThirdParagraph/>
          <Membership/>
          <FourthParagraph/>
          <ExpertSlider />
          <FifthParagraph/>
         <DoctorsTeam />
          <CloudTestimonials/>
          <SmileSection/>
        <FaqSection 
            faqs={faqData} 
            />
      </div>

  );
}