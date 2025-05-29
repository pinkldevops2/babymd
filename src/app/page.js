'use client'; // Ensure client-side rendering for useState and keen-slider
import Image from "next/image";
import React, { useState } from "react"; // React import included as per previous fix
import { useKeenSlider } from "keen-slider/react"; // Import keen-slider hook
import "keen-slider/keen-slider.min.css"; // Import keen-slider styles
import CountUp from "react-countup"; // Import react-countup
import { useInView } from "react-intersection-observer"; // Import react-intersection-observer
import i1 from "../app/assets/i1.png";
import i1a from "../app/assets/i1.a.png";
import Vector from "../app/assets/Vector.png";
import Vector1 from "../app/assets/Vector1.png";
import Vector2 from "../app/assets/Vector2.png";
import Vector2a from "../app/assets/Vector2a.png";
import Vector3 from "../app/assets/Vector3.png";
import Vector3a from "../app/assets/Vector3a.png";
import Vector4 from "../app/assets/Vector4.png";
import Vector4a from "../app/assets/Vector4a.png";
import sleep_bee from "../app/assets/sleep_bee.png";
import beehive_full from "../app/assets/beehive_full.png";
import '../styles/stacking-cards.css';


import Nearbyclinic from "../app/assets/Nearbyclinic.png";
import workshop from "../app/assets/workshop.png";
import casestudy from "../app/assets/casestudy.png";
import casestudy2 from "../app/assets/casestudy2.png";
import spring from "../app/assets/spring.png";
import PromiseIcon1 from "../app/assets/PromiseIcon1.png";
import PromiseIcon2 from "../app/assets/PromiseIcon2.png";
import PromiseIcon3 from "../app/assets/PromiseIcon3.png";
import SuperSpecialist from "../app/assets/SuperSpecialist.png";
import DevelopmentalTherapies from "../app/assets/DevelopmentalTherapies.png";
import GeneralConsultations from "../app/assets/GeneralConsultations.png";
import Vaccinations from "../app/assets/Vaccinations.png";
import IconBackground from "../app/assets/supporticonbackground.png";
import premiumLayer from "../app/assets/Premiumlayer.png";
import PremiumlayerImg from "../app/assets/PremiumlayerImg.png";
import bee from "../app/assets/bee.png";
import longspring from "../app/assets/longspring.png";
import readyvectorImg from "../app/assets/readyvectorImg.png";
import readyvector from "../app/assets/readyvector.png";
import Nearbyclinic2 from "../app/assets/c340ff5accd3a76b9824168ee4a673930fbf9234.jpg";
import Nearbyclinic3 from "../app/assets/bd6e88dec0f434f565572c1a818fb23885fb5b33.jpg";
import workshop2 from "../app/assets/workshop2.png";
import workshop3 from "../app/assets/workshop3.png";
import curvedBottom from "../app/assets/curved-bottom.png";
import curvedTop from "../app/assets/curved-top.png";
import cloudtext from "../app/assets/cloud.png";
import cloud from "../app/assets/cloud2.png";
import bluebtnarrow from "../app/assets/btnBluearrow.png";
import whitebtnarrow from "../app/assets/btnwhitearrow.png";
import yellowtextcircle from "../app/assets/textcircle-yellow.png";
import contactpagebee from "../app/assets/contactpagebee.png";
import beehive2 from "../app/assets/beehive2.png";
import beehive3 from "../app/assets/beehive3.png";
import beehive4 from "../app/assets/beehive4.png";
import beehive9 from "../app/assets/beehive9.png";
import goldPackageImg from "../app/assets/gold_package.svg";
import platinumPackageImg from "../app/assets/platinum_package.svg";

import SuperDocButton from '../../components/SuperDocButton';
import SubHeading from '../../components/SubHeading';
import ClinicCarousel from '../../components/ClinicCarousel';
import WorkshopCarousel from '../../components/WorkshopCarousel';
import CaseStudyCarousel from '../../components/CaseStudyCarousel';
import CloudTestimonials from "../../components/CloudTestimonials";
import FaqSection from "../../components/FaqSection";
import ReadySection from "../../components/ReadySection";
import MembershipPlans from "../../components/MembershipPlans";
import MilestoneAssessmentSection from "../../components/MilestoneAssessmentSection";
import HeroSection from "../../components/HeroSection";
import StatsSection from "../../components/StatsSection";
import SymptomCarousel from "../../components/SymptomCarousel"
import StackingCards from '../../components/StackingCards';

export default function Home() {
  
  // Clinic data
  const clinics = [
    {
      name: "BabyMD, HSR Clinic",
      address: "99, 11<sup>th</sup> Main Rd, Sector 5, Sector 6, HSR Layout, Bengaluru, Karnataka 560068",
      hours: "Mon-Sat: 8AM - 1:30PM | 4PM - 8:30PM<br />Sundays: 9AM - 12PM",
      image: Nearbyclinic,
    },
    {
      name: "BabyMD, Koramangala Clinic",
      address: "123, 5<sup>th</sup> Cross, Koramangala, Bengaluru, Karnataka 560034",
      hours: "Mon-Fri: 9AM - 2PM | 3PM - 7PM<br />Sundays: 10AM - 1PM",
      image: Nearbyclinic2,
    },
    {
      name: "BabyMD, Whitefield Clinic",
      address: "45, Whitefield Main Rd, Bengaluru, Karnataka 560066",
      hours: "Mon-Sat: 7AM - 12PM | 5PM - 9PM<br />Sundays: 8AM - 11AM",
      image: Nearbyclinic3,
    },
  ];

  // Workshop data
  const workshops = [
    {
      title: "Pediatric Care Online Workshop",
      image: workshop,
      date: "28 NOV 2025",
      tags: ["PARENT&apos;S KNOWLEDGE", "CHILD FEEDING CARE", "FEEDING CARE"],
    },
    {
      title: "Behavioral Milestones Workshop",
      image: workshop2,
      date: "15 DEC 2025",
      tags: ["BEHAVIORAL GROWTH", "PARENTING TIPS", "CHILD DEVELOPMENT"],
    },
    {
      title: "Nutrition for Toddlers Workshop",
      image: workshop,
      date: "10 JAN 2026",
      tags: ["NUTRITION", "HEALTHY EATING", "PARENT&apos;S KNOWLEDGE"],
    },
    {
      title: "Behavioral Milestones Workshop",
      image: workshop2,
      date: "15 DEC 2025",
      tags: ["BEHAVIORAL GROWTH", "PARENTING TIPS", "CHILD DEVELOPMENT"],
    },
  ];

  // Case study data
  const caseStudies = [
    {
      title: "Pediatric Care Online Workshop",
      image: casestudy,
      category: "Case Study",
    },
    {
      title: "Behavioral Milestones Insights",
      image: casestudy2,
      category: "Case Study",
    },
    {
      title: "Nutrition for Toddlers Guide",
      image: casestudy,
      category: "Case Study",
    },
  ];

  const symptoms = [
    ['Fever', 'Cough', 'Rashes', 'Ear Pain'],
    ['Irritability', 'Not Eating', 'Sleep Issues'],
    ['Delayed', 'Vaccination', 'Milestones', 'Doubts']
  ];

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
    answer: "Behavioral concerns, parenting challenges, sibling rivalry, and emotional conflicts.",
  },
  {
    question: "What kind of techniques are used for CBT treatment?",
    answer: "Techniques like cognitive restructuring, exposure therapy, and behavior activation.",
  },
];

  // Keen-slider setup for case study carousel with free mode
  const [caseStudySliderRef, caseStudyInstanceRef] = useKeenSlider({
    loop: true,
    mode: "centre",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  // Keen-slider setup for each row of symptom buttons
  

  // State for tracking current slide for workshop and case study carousels
  const [currentWorkshopSlide, setCurrentWorkshopSlide] = useState(0);
  const [currentCaseStudySlide, setCurrentCaseStudySlide] = useState(0);

  // Navigation functions for workshop carousel
  const prevWorkshopSlide = () => {
    setCurrentWorkshopSlide((prev) =>
      prev === 0 ? workshops.length - 1 : prev - 1
    );
  };

  const nextWorkshopSlide = () => {
    setCurrentWorkshopSlide((prev) =>
      prev === workshops.length - 1 ? 0 : prev + 1
    );
  };

  // Navigation functions for case study carousel
  const prevCaseStudySlide = () => {
    setCurrentCaseStudySlide((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
    caseStudyInstanceRef.current?.prev();
  };

  const nextCaseStudySlide = () => {
    setCurrentCaseStudySlide((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
    caseStudyInstanceRef.current?.next();
  };

  // Intersection observer hooks for each counter
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="min-h-screen bg-white">     
    <div className="border border-customOrange mx-6"></div> 
      {/* Main Content Container */}
      <div>
        {/* Purple Splash Frame */}
        
        
        <HeroSection
        i1={i1}
        i1a={i1a}
        beehive_full={beehive_full}
        beehive9={beehive9}
        spring={spring}
      />

        <StatsSection
      beehive2={beehive2}
      bee={bee}
      sleep_bee={sleep_bee}
      Vector={Vector}
      Vector1={Vector1}
      Vector2={Vector2}
      Vector2a={Vector2a}
      Vector3={Vector3}
      Vector3a={Vector3a}
      Vector4={Vector4}
      Vector4a={Vector4a}
    />

        {/* Every Child is a Miracle Section */}
      <div className="bg-linear-to-t from-[#F0EBFF] to-[#FDF8DB]">
        <div className=" rounded-3xl px-6 pb-0 pt-8 md:p-12 md:pb-0">
          <div className="relative"><SubHeading
            mainText={<>Every child is a miracle - <br /> a unique story</>}
            highlightText={<>we&apos;re here<br />to care for.</>}
            /* subText={<><i>care for</i></>} */
          />
          <Image
                      src={beehive4}
                      alt="Bee"
                      width={33}
                      height={30}
                      className="absolute right-[0px] top-[60px]"
                    /></div>
          
          <p className="leading-relaxed mb-4 mt-3">
            {/* Each moment of your child&apos;s growth is worth celebrating, from first
            steps to first words. But parenting isn&apos;t always magical, with
            midnight fevers, stubborn coughs, and moments of doubt. */}

            Each moment of your child&apos;s growth is worth celebrating, from first steps to first words. But parenting isn&apos;t always magical, with midnight fevers, stubborn coughs, and moments of doubt.
          </p>
          <p className="leading-relaxed mb-4">
           {/*  That&apos;s where we come in: your trusted partner in ensuring nothing
            stands in the way of your child&apos;s health and well-being. We go beyond
            treating symptoms, offering holistic care that nurtures their
            physical, emotional, mental, and social development. From
            personalized growth assessments to making every clinic visit a
            positive experience, we&apos;re here with expert care, joy, and
            compassion. */}

            That&apos;s where we come in; your trusted partner in ensuring nothing stands in the way of your child&apos;s health and well-being. We go beyond treating symptoms, offering holistic care that nurtures their physical, emotional, mental, and social development. From personalized growth assessments to making every clinic visit a positive experience, we&apos;re here with expert care, joy, and compassion.

          </p>
        </div>

        <div className="rounded-3xl p-6 md:p-12 mb-2 md:mb-12">
          {/* Replaced Placeholder with New Content */}
          <div className="w-full bg-[#F4DF76] rounded-xl mb-4">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Promise to You and Your Child
              </h3>

              <div className="space-y-6">
                {/* Expert care section */}
                <div className="flex items-start gap-4">
                  <Image
                    src={PromiseIcon1}
                    alt="Empathy Icon"
                    width={45}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold font-lato text-gray-900">
                      Expert care, built on empathy:
                    </h4>
                    <p className="text-gray-700">
                      Our experts take time to listen, support, and reassure,
                      because every decision matters.
                    </p>
                  </div>
                </div>

                {/* Attention to detail section */}
                <div className="flex items-start gap-4">
                  <Image
                    src={PromiseIcon2}
                    alt="Checklist Icon"
                    width={45}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold font-lato text-gray-900">
                      Attention to every detail:
                    </h4>
                    <p className="text-gray-700">
                      No rushed check-ups, we track milestones, coordinate with
                      specialists, and address every concern thoughtfully.
                    </p>
                  </div>
                </div>

                {/* Joy section */}
                <div className="flex items-start gap-4">
                  <Image
                    src={PromiseIcon3}
                    alt="Play Icon"
                    width={45}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold font-lato text-gray-900">
                      Joy, every step of the way:
                    </h4>
                    <p className="text-gray-700">
                      From playful spaces to a team that knows your family by
                      name, we make healthcare warm, welcoming, and child-first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 pr-[70px] relative">
            <SubHeading
            mainText={<>We&apos;re here for the</>}
            highlightText={<>giggles, sniffles, and everything in</>}
            subText={<><i>between!</i></>}
          />
          <Image
                      src={contactpagebee}
                      alt="Bee"
                      width={130}
                      height={130}
                      className="absolute right-[-30px] top-[-20px] swing"
                    />
                 <Image
                      src={beehive3}
                      alt="Bee"
                      width={33}
                      height={30}
                      className="absolute right-[0px] top-[90px]"
                    />   
          </div>        
          <p className="text-[16px] mt-3">
            Some days you&apos;re celebrating first steps. <br /> Other days, you&apos;re
            worried about a fever at 2 AM. We are here for it all. Whether it&apos;s a
            quick check-up, a vaccine visit, or something that needs a deeper
            look, we offer the kind of care that listens, explains, and walks the
            path with you.
          </p>
          <h3 className="md:text-2xl mb-16 md:mt-4">
            Here&apos;s how we support you and your child - every step of the way:
          </h3>
          <div className="relative z-10 -mt-12 max-w-md mx-auto">
            <div className="rounded-t-2xl bg-white overflow-hidden">
              {/* General Consultations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-start gap-4 p-4 bg-[#DDD0FF] cursor-pointer flex-col">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={IconBackground}
                      alt="Icon background"
                      layout="fill"
                      objectFit="contain"
                    />
                    <Image
                      src={GeneralConsultations}
                      alt="General Consultations"
                      width={200}
                      height={24}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <p className="text-black text-lg font-bold">
                      General Consultations
                    </p>
                    {/* <svg
                      className="w-5 h-5 text-black transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                </summary>
                <div className="p-4 bg-[#DDD0FF] text-gray-700 leading-relaxed">
                  Comprehensive health check-ups and consultations for your
                  child&apos;s everyday needs.
                </div>
              </details>

              {/* Vaccinations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-start flex-col gap-4 p-4 bg-[#A3E48A] cursor-pointer">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={IconBackground}
                      alt="Icon background"
                      layout="fill"
                      objectFit="contain"
                    />
                    <Image
                      src={Vaccinations}
                      alt="Vaccinations"
                      width={24}
                      height={24}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <p className="text-black text-lg font-bold">Vaccinations</p>
                    {/* <svg
                      className="w-5 h-5 text-black transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                </summary>
                <div className="p-4 bg-[#A3E48A] text-gray-700 leading-relaxed">
                  Timely vaccinations to protect your child from preventable
                  diseases.
                </div>
              </details>

              {/* Super Specialist Consultations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-start flex-col gap-4 p-4 bg-[#FBE38F] cursor-pointer">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={IconBackground}
                      alt="Icon background"
                      layout="fill"
                      objectFit="contain"
                    />
                    <Image
                      src={SuperSpecialist}
                      alt="Super Specialist"
                      width={24}
                      height={24}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <p className="text-black text-lg font-bold">
                      Super Specialist Consultations
                    </p>
                   {/*  <svg
                      className="w-5 h-5 text-black transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                </summary>
                <div className="p-4 bg-[#FBE38F] text-sm text-gray-700 leading-relaxed">
                  Expert consultations with top specialists for complex medical
                  conditions.
                </div>
              </details>

              {/* Developmental Assessments and Therapies */}
              <details className="group" open>
                <summary className="flex items-start flex-col gap-4 p-4 bg-[#D6F4FA] cursor-pointer">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={IconBackground}
                      alt="Icon background"
                      layout="fill"
                      objectFit="contain"
                    />
                    <Image
                      src={DevelopmentalTherapies}
                      alt="Developmental Therapies"
                      width={24}
                      height={24}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    />
                  </div>
                  <div className="flex-1 flex justify-between items-center">
                    <p className="text-black text-lg font-bold">
                      Developmental Assessments and Therapies
                    </p>
                   {/*  <svg
                      className="w-5 h-5 text-black transform transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg> */}
                  </div>
                </summary>
                <div className="p-4 bg-[#D6F4FA] text-gray-700 leading-relaxed">
                  Our developmental pediatricians and certified therapists go
                  beyond symptoms to create personalized plans that address your
                  little one&apos;s unique needs from speech delays to behavioral
                  challenges.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* New Section: More Than Symptoms */}
        <SymptomCarousel symptomRows={symptoms} />
      </div>

        <MilestoneAssessmentSection /> 
        <ClinicCarousel clinics={clinics} />
        {/* Testimonial Section */}
        <div className="relative w-full bg-[#FFF5F5]">
          <Image
            /* sizes="100vw" */
            src={curvedTop}
            alt="Layer 1"
            className=" mx-auto w-full"
          />
        </div>

        <CloudTestimonials/>

        <div className="relative w-full bg-[#FFFFFF] z-0">
          <Image
            /* sizes="100vw" */
            src={curvedBottom}
            alt="Layer 1"
            className=" mx-auto w-full relative  top[-30px]"
          />
        </div>        

<WorkshopCarousel 
        workshops={workshops} 
        />

<CaseStudyCarousel 
        caseStudies={caseStudies} 
        />
<MembershipPlans 
        goldPackageImg={goldPackageImg}
        platinumPackageImg={platinumPackageImg}
        premiumLayerBg={premiumLayer}
        premiumLayerImg={PremiumlayerImg}
        />       
<ReadySection 
        readyvector={readyvector} 
        readyvectorImg={readyvectorImg}  
        bluebtnarrow={bluebtnarrow} 
        />
<FaqSection 
        faqs={faqData} 
        />
</div></div>
  );
}