'use client'; // Ensure client-side rendering for useState and keen-slider
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react"; // React import included as per previous fix
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

import SubHeading2 from '../components/SubHeading2';
import SubHeading3 from '../components/SubHeading3';
import ClinicCarousel from '../components/ClinicCarousel';
import CloudTestimonials from "../components/CloudTestimonials";
import FaqSection from "../components/FaqSection";
import ReadySection from "../components/ReadySection";
import MembershipPlans from "../components/MembershipPlans";
import MilestoneAssessmentSection from "../components/MilestoneAssessmentSection";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import SymptomCarousel from "../components/SymptomCarousel";
import StackingCards from "../components/StackingCards";
import HandIconSVG from "../components/anime/HandIconSVG";
import CheckIconSVG from "../components/anime/CheckIconSVG";
import CapIconSVG from "../components/anime/CapIconSVG";
import Modal from '../components/FormPopUp';
import Modal2 from '../components/FormPopUp';
import BabyMDCampaignForm from '../components/BabyMDCampaignForm';
 

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Util = {
  osHasReducedMotion: () => {
    if (!window.matchMedia) return false;
    const matchMediaObj = window.matchMedia('(prefers-reduced-motion: reduce)');
    return matchMediaObj && matchMediaObj.matches;
  }
};

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  // Clinic data
  const clinics =  [
    {
      image: "/clinic/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg",
      title: "BabyMD – Hosa Road",
      location: "https://maps.app.goo.gl/yiQnHGHKYxLK7kF56",
      hours: [
        {
          days: "Monday to Saturday",
          time: "9:00 AM to 8:00 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/351beb004171eecf5fa8fcabcad24c88067fc6d4.jpg",
      title: "BabyMD – Whitefield",
      location: "https://maps.app.goo.gl/mCpiktpusP9V3Crt7",
      hours: [
        {
          days: "Monday to Saturday",
          time: "9:00 AM to 8:00 PM",
        },
        { days: "Sunday", time: " 9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/bd6e88dec0f434f565572c1a818fb23885fb5b33.jpg",
      title: "BabyMD – Electronic City",
      location: "https://maps.app.goo.gl/YsmHaMG3rq29G5CA6",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/39e64f6c9f643abdd21ece3b69668b9b60b15dfe.jpg",
      title: "BabyMD – HSR Layout",
      location: "https://maps.app.goo.gl/4n2TAFAhGebGy8nJ8",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/c340ff5accd3a76b9824168ee4a673930fbf9234.jpg",
      title: "BabyMD – Varthur",
      location: "https://maps.app.goo.gl/9DzJ1XLWuh3zbZ8cA",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/ballandur.png",
      title: "BabyMD – Bellandur",
      location: "https://maps.app.goo.gl/wrFkjX7sgjEuDzfD7",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    }
  ];

  // Workshop data
  const workshops = [
    {
      title: "Pediatric Care Online Workshop",
      image: workshop,
      date: "28 NOV 2025",
      tags: ["PARENT'S KNOWLEDGE", "CHILD FEEDING CARE", "FEEDING CARE"],
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
      tags: ["NUTRITION", "HEALTHY EATING", "PARENT'S KNOWLEDGE"],
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
    ['Fever', 'Cough', 'Rashes', 'Ear Pain','Fever', 'Cough', 'Rashes', 'Ear Pain','Fever', 'Cough', 'Rashes', 'Ear Pain'],
    ['Irritability', 'Not Eating', 'Sleep Issues','Irritability', 'Not Eating', 'Sleep Issues','Irritability', 'Not Eating', 'Sleep Issues'],
    ['Delayed', 'Vaccination', 'Milestones', 'Doubts','Delayed', 'Vaccination', 'Milestones', 'Doubts','Delayed', 'Vaccination', 'Milestones', 'Doubts']
  ];

  const faqData = [
    {
      question: "How often should I take my baby to the paediatrician?",
      answer: "In the first year, your baby should visit the doctor multiple times — for vaccinations, growth monitoring, and developmental checks. After that, every 3-6 months is typical, unless there are concerns.",
      open: true,
    },
    {
      question: "My baby isn’t talking yet. Is that normal?",
      answer: "Every child develops differently, but if your baby isn’t babbling by 12 months or saying a few words by 18 months, a paediatric consult is a good next step.",
    },
    {
      question: "What should I do if my baby has a fever?",
      answer: "For infants under 3 months, any fever over 100.4°F (38°C) needs immediate medical attention. For older babies, observe if there’s poor feeding, drowsiness, or unusual crying, and consult your doctor.",
    },
    {
      question: "How do I know if my child’s growth is on track?",
      answer: "We track your child’s height, weight, and head circumference on standard growth charts at each visit. Any deviation is flagged early so we can take action if needed.",
    },
    {
      question: "What if my baby is a fussy eater or not gaining weight?",
      answer: "Feeding concerns are common in toddlers. Our paediatrician and nutritionist will evaluate its normal behaviour, sensory issues, or other medical issues, and help build a plan.",
    },
    {
      question: "How frequent colds or coughs in toddlers normal?",
      answer: "Young children can have 8-12 viral infections a year. It helps build immunity. But if they are frequent, long-lasting, or interfering with daily life, a check-up is advised.",
    },
    {
      question: "When should I start developmental screening?",
      answer: "Development checks begin as early as 6 months, and we recommend regular screenings at 9, 12, 18, and 24 months. Earlier support means better long-term outcomes.",
    },
    {
      question: "Can I delay or space out my child’s vaccines?",
      answer: "We follow the Indian Academy of Paediatrics (IAP) schedule for best protection. Delaying may leave your child vulnerable. Talk to us if you’re unsure — we’re here to guide, not pressure.",
    },
    {
      question: "What’s the best time to visit the clinic with a baby?",
      answer: "Mornings are usually quieter and better for well-baby visits. We also keep separate slots or spaces for sick and well visits to reduce infection risk.",
    },
    {
      question: "Who do I reach out to for general questions — like sleep, rashes, or teething?",
      answer: "Start with a paediatric consultation! No question is too small. We’re here to address all your baby-related worries, not just illnesses.",
    },
  ];


// Keen-slider setup for case study carousel with free mode
const [caseStudySliderRef, caseStudyInstanceRef] = useKeenSlider<HTMLDivElement>({
  loop: true,
  mode: "free-snap", // changed from "centre" to a valid KeenSlider mode. If "centre" is custom, you can revert and suppress TS error.
  slides: {
    perView: 1,
    spacing: 15,
  },
});

// State for tracking current slide for workshop and case study carousels
const [currentWorkshopSlide, setCurrentWorkshopSlide] = useState<number>(0);
const [currentCaseStudySlide, setCurrentCaseStudySlide] = useState<number>(0);

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
const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });
const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.5 });
const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.5 });
const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.5 });

// State to control the open status of each dropdown
const [isGeneralConsultationsOpen, setIsGeneralConsultationsOpen] = useState<boolean>(false);
const [isVaccinationsOpen, setIsVaccinationsOpen] = useState<boolean>(false);
const [isSuperSpecialistOpen, setIsSuperSpecialistOpen] = useState<boolean>(false);
const [isDevelopmentalTherapiesOpen, setIsDevelopmentalTherapiesOpen] = useState<boolean>(false);

// Refs for each dropdown to access their DOM elements
const generalConsultationsRef = useRef<HTMLElement | null>(null);
const vaccinationsRef = useRef<HTMLElement | null>(null);
const superSpecialistRef = useRef<HTMLElement | null>(null);
const developmentalTherapiesRef = useRef<HTMLElement | null>(null);

// State to track scroll direction
const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);
const lastScrollY = useRef<number>(0);

// Function to check if an element crosses the adjusted center of the viewport
const isElementCrossingCenter = (elementRef: React.RefObject<HTMLElement | null>): boolean => {
  if (!elementRef.current) return false;

  const rect = elementRef.current.getBoundingClientRect();
  const viewportHeight = window.innerHeight;
  const centerY = viewportHeight * 0.7;

  return rect.top <= centerY && rect.bottom >= centerY;
};

// Scroll handler to manage dropdown states based on scroll direction and center crossing
useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection("up");
    }

    lastScrollY.current = currentScrollY;

    const dropdowns = [
      { ref: generalConsultationsRef, setter: setIsGeneralConsultationsOpen },
      { ref: vaccinationsRef, setter: setIsVaccinationsOpen },
      { ref: superSpecialistRef, setter: setIsSuperSpecialistOpen },
      { ref: developmentalTherapiesRef, setter: setIsDevelopmentalTherapiesOpen },
    ];

    dropdowns.forEach(({ ref, setter }) => {
      const isCrossing = isElementCrossingCenter(ref);
      if (scrollDirection === "down" && isCrossing) {
        setter(true);
      } else if (scrollDirection === "up" && isCrossing) {
        setter(false);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [scrollDirection]);

// GSAP scroll animation
useEffect(() => {
  gsap.utils.toArray<HTMLElement>(".fade-in").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}, []);

  return (
    <div className="container">
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
      <div className="bg-linear-to-t from-[#F0EBFF] to-[#FDF8DB] relative z-5">
        <div className=" rounded-3xl px-6 pb-0 pt-8 md:p-6 md:pb-0 ">
          <div className="relative fade-in"><SubHeading2
            mainText={<>Every child is a miracle &mdash; <br /> a unique story</>}
            highlightText={<>we&#39;re here<br />to </>}
            subText={<><i>care for</i></>}
          />
          <Image
                      src={beehive4}
                      alt="Bee"
                      width={33}
                      height={30}
                      className="absolute right-[0px] top-[60px]"
                    /></div>
          
          <p className="leading-relaxed mb-4 mt-3 fade-in">
            Each moment of your child&#39;s growth is worth celebrating, from first steps to first words. But parenting isn&#39;t always magical, with midnight fevers, stubborn coughs, and moments of doubt.
          </p>
          <p className="leading-relaxed mb-4 fade-in">
            That&#39;s where we come in; your trusted partner in ensuring nothing stands in the way of your child&#39;s health and well-being. We go beyond treating symptoms, offering <b>holistic care</b> that nurtures their physical, emotional, mental, and social development. From personalised growth assessments to making every clinic visit a positive experience, we&#39;re here with expert care, joy, and compassion.
          </p>
        </div>

        <div className="rounded-3xl p-6 md:p-6 mb-2 md:mb-0">
          {/* Replaced Placeholder with New Content */}
          <div className="w-full bg-[#F4DF76] rounded-xl mb-4">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 fade-in">
                Our Promise to You and Your Child
              </h3>

              <div className="space-y-6 md:flex md:flex-row md:flex-wrap md:justify-between gap-4">
                {/* Expert care section */}
                <div className="flex items-start gap-4 fade-in md:w-[32%] w-full">
                  <div className="w-[55px] pt-2">
                    <HandIconSVG className={''} />
                  </div>
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
                <div className="flex items-start gap-4 fade-in md:w-[32%]  w-full">
                  <div className="w-[55px] pt-2">
                    <CheckIconSVG className={''} />
                  </div>
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
                <div className="flex items-start gap-4 fade-in md:w-[32%]  w-full">
                  <div className="w-[55px] pt-2">
                    <CapIconSVG  className={''}/>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold font-lato text-gray-900 fade-in">
                      Joy, every step of the way:
                    </h4>
                    <p className="text-gray-700 fade-in">
                      From playful spaces to a team that knows your family by
                      name, we make healthcare warm, welcoming, and child-first.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4 pr-[70px] relative fade-in">
            <SubHeading3
            mainText={<>We&#39;re here for the</>}
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
          <p className="text-[16px] mt-3 fade-in w-[80%]">
            Some days you&#39;re celebrating first steps. Other days, you&#39;re
            worried about a fever at 2 AM. We are here for it all. Whether it&#39;s a
            quick check-up, a vaccine visit, or something that needs a deeper
            look, we offer the kind of care that listens, explains, and walks the
            path with you.
          </p>
          <h3 className="md:text-2xl mb-16 md:mt-4 fade-in">
            Here&#39;s how we support you and your child - every step of the way:
          </h3>
          <div className="relative z-10 -mt-12 mx-auto">
                      <div className="container">
                  <StackingCards />
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
<MembershipPlans 
        goldPackageImg={goldPackageImg}
        platinumPackageImg={platinumPackageImg}
        premiumLayerBg={premiumLayer}
        premiumLayerImg={PremiumlayerImg}
        onClick={() => setIsModalOpen(true)}
        />       
<ReadySection 
        readyvector={readyvector} 
        readyvectorImg={readyvectorImg}  
        bluebtnarrow={bluebtnarrow} 
        onClick={() => setIsModalOpen2(true)}
        />
<FaqSection 
        faqs={faqData} 
        />
</div></div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <BabyMDCampaignForm formID="hp_book_appointment_1" />
      </Modal>
      <Modal2 isOpen={isModalOpen2} onClose={() => setIsModalOpen2(false)}>
            <BabyMDCampaignForm formID="hp_book_appointment_2" />
      </Modal2>
</div>
  );
}