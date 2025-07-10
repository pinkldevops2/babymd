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
import CareSlider from './CareSlider/StepsCare';
import DoctorsTeam from "./doctorsTeam/page";
import FaqSection from "../../../components/FaqSection";
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";


export default function DevelopmentalAssessmentsandTherapies() {
   const faqData = [
    {
      question: "What are early signs of developmental delays?",
      answer: "Some signs include no babbling by 12 months, not walking by 18 months, limited eye contact, not responding to names, or delayed social interaction. These may relate to speech issues, motor skills development, or early signs of Autism.",
      open: true,
    },
    {
      question: "What’s the difference between a developmental delay and a disorder?",
      answer: "A delay means a child is behind on certain milestones but may catch up. A disorder (like ASD, ADHD, or a specific learning difficulty) involves persistent, diagnosable patterns requiring targeted support.",
    },
    {
      question: "Can a child outgrow speech or behavourial delays? ",
      answer: "Some children catch up, but early intervention is key. Delays left unaddressed can lead to learning and social challenges later.",
    },
    {
      question: "How soon will therapy show results?",
      answer: "It varies as some children improve within a few weeks, others need months of consistent therapy. Progress depends on age, diagnosis, and family involvement.",
    },
    {
      question: "When should I consider a developmental assessment?",
      answer: "If your child isn’t reaching milestones (like sitting, speaking, or playing), or you’re concerned about their attention, motor development, speech start, or learning skills, start with an assessment.",
    },
     {
      question: "Who will assess my child?",
      answer: "Our developmental paediatricians lead the assessment, often supported by therapists for further evaluation.",
    },
     {
      question: "What happens after the assessment?",
      answer: "You will receive a personalised therapy plan, including the type of therapy, weekly frequency, and a timeline for progress reviews. We may even recommend an individual education plan if needed.",
    },
     {
      question: "What types of therapies do you offer?",
      answer: "We offer Speech Therapy, Occupational Therapy, Applied Behavior Analysis, Behavioral Therapy, Sensory Integration, and support for special needs education — tailored to every child’s profile.",
    },
     {
      question: "Will I get regular updates on progress?",
      answer: "Yes, we share clear progress reports and conduct regular parent connects to review outcomes and make adjustments.",
    },
     {
      question: "Will my child get a diagnosis after the first visit?",
      answer: "Not always. Some children may need multiple sessions or further evaluations (like Autism or ADHD assessments) before a diagnosis is made.",
    },
     {
      question: "How do you decide what type of therapy my child needs?",
      answer: "Our developmental paediatrician screens your child, collaborates with specialists in motor development, speech education, and behavioral therapy, and recommends the most suitable approach.",
    },
     {
      question: "How do I know if therapy is working?",
      answer: "We share structured progress reports, conduct monthly plan reviews, and keep you informed through regular feedback meetings",
    },
     {
      question: "Can you help if my child already has a diagnosis from another centre?",
      answer: "Absolutely. We will review previous assessments, conduct our own evaluation if needed, and create a coordinated care plan based on your little one’s current needs.",
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