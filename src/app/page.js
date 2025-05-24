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
import Rectangle from "../app/assets/Rectangle.png";
import RectangleImg from "../app/assets/RectangleImg.png";
import Nearbyclinic from "../app/assets/Nearbyclinic.png";
import workshop from "../app/assets/workshop.png";
import casestudy from "../app/assets/casestudy.png";
import spring from "../app/assets/spring.png";
import PromiseIcon1 from "../app/assets/PromiseIcon1.png";
import PromiseIcon2 from "../app/assets/PromiseIcon2.png";
import PromiseIcon3 from "../app/assets/PromiseIcon3.png";
import SuperSpecialist from "../app/assets/SuperSpecialist.png";
import DevelopmentalTherapies from "../app/assets/DevelopmentalTherapies.png";
import GeneralConsultations from "../app/assets/GeneralConsultations.png";
import Vaccinations from "../app/assets/Vaccinations.png";
import IconBackground from "../app/assets/supporticonbackground.png";
import Premiumlayer from "../app/assets/Premiumlayer.png";
import PremiumlayerImg from "../app/assets/PremiumlayerImg.png";
import bee from "../app/assets/bee.png";
import longspring from "../app/assets/longspring.png";
import readyvectorImg from "../app/assets/readyvectorImg.png";
import readyvector from "../app/assets/readyvector.png";
import Nearbyclinic2 from "../app/assets/Nearbyclinic2.png";
import Nearbyclinic3 from "../app/assets/Nearbyclinic3.png";
import workshop2 from "../app/assets/workshop2.png";
import workshop3 from "../app/assets/workshop3.png";
import curvedBottom from "../app/assets/curved-bottom.png";
import curvedTop from "../app/assets/curved-top.png";
import cloudtext from "../app/assets/cloud.png";
import cloud from "../app/assets/cloud2.png";
import bluebtnarrow from "../app/assets/btnBluearrow.png";
import whitebtnarrow from "../app/assets/btnwhitearrow.png";

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
      image: workshop3,
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
      image: workshop2,
      category: "Case Study",
    },
    {
      title: "Nutrition for Toddlers Guide",
      image: workshop3,
      category: "Case Study",
    },
  ];

  // Symptom buttons data (3 rows, each with 3 buttons)
  const symptomRows = [
    ["Lorem ipsum 1", "Lorem ipsum 2", "Lorem ipsum 3"],
    ["Lorem ipsum 4", "Lorem ipsum 5", "Lorem ipsum 6"],
    ["Lorem ipsum 7", "Lorem ipsum 8", "Lorem ipsum 9"],
  ];

  // Keen-slider setup for clinic carousel with free mode
  const [clinicSliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  // Keen-slider setup for workshop carousel with free mode
  const [workshopSliderRef] = useKeenSlider({
    loop: true,
    mode: "centre",
    slides: {
      perView: 1.2,
      spacing: 9,
    },
  });

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
  const [symptomSliderRef1] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  const [symptomSliderRef2] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  const [symptomSliderRef3] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

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
      {/* Main Content Container */}
      <div>
        {/* Purple Splash Frame */}
        <div className="rounded-3xl p-8 md:p-12 mb-8 md:mb-12 ">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Raising a baby <br /> takes a village,
          </h1>

          <h2 className=" text-[#5943A5] font-bold text-[42px] leading-[38px]">
            welcome to <br />
          </h2>
          <h3
            className=" text-[#5943A5] font-italic text-[42px] leading-[38px] mb-[20px] font-baloo2"
          >
            yours
          </h3>
          {/* White Text Frame */}
          <div className="md:mt-7 mb-8">
            <p>
              You deserve care that&apos;s as thoughtful as your
              <br />
              parenting. From cozy clinics to expert
              <br />
              pediatricians and holistic support, we&apos;re here
              <br />
              for every milestone, worry, and wonder.
            </p>
          </div>
        </div>
        {/* Image Container with Relative Positioning */}
        <div className="relative w-full h-[400px] md:mb-12">
          <Image
            width={800}
            height={200}
            sizes="100vw"
            src={i1}
            alt="Layer 1"
            className="absolute top-6 left-0 h-full "
          />
          <Image
            width={400}
            height={200}
            src={i1a}
            alt="Layer 2"
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          />
          <Image
            width={80}
            height={200}
            src={spring}
            alt="Layer 3"
            className="absolute bottom-12 left-11 transform -translate-x-1/2"
          />
          <button className="absolute flex top-85 translate-x-9 items-center gap-2 bg-[#F9825F] hover:bg-[#f86f47] text-white font-bold py-3 px-10 rounded-full text-sm tracking-wide transition-transform duration-300 transform hover:scale-105">
            WHERE IS MY SUPERDOC&apos;S?
            <span className="text-white text-base col"></span>
          </button>
        </div>

        <div className="w-full mt-8 px-6 pt-4">
          <h2 className="text-[28px] leading-[32px] font-bold text-gray-900">
            But you don&apos;t have to <br />
            <span className="text-[#5943A5]">figure it out</span>{" "}
            <i className="italic text-[#5943A5] font-thin">alone</i>
          </h2>

          <p className="pt-3">
            Behind our every mark is a parent who found clarity and a child who
            felt better, safer, and happier. From midnight fevers to milestone
            check-ups, these stats reflect a story of care that goes beyond
            treatment - it&apos;s about peace of mind and trust.
          </p>
        </div>

        <div className="w-full mt-8 mb-4 flex flex-col items-center space-y-4">
          <div className="mb-8">
            <Image
              width={80}
              height={50}
              sizes="80vw"
              src={bee}
              alt="Layer 1"
              className="absolute left-70 top-270 mt-10 mb-10 "
            />
          </div>
          
          {/* Circular Container 1 */}
          <div className="relative w-80 h-[300px] md:mb-12" ref={ref1}>
            <Image
              width={800}
              height={200}
              sizes="100vw"
              src={Vector}
              alt="Layer 1"
              className="absolute top-0 left-0 h-full "
            />
            <Image
              width={400}
              height={200}
              src={Vector1}
              alt="Layer 2"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
             <div>
           <h2 className="w-fit text-[#5943A5] text-[64px] font-bold absolute left-[70px] top-[40px] z-5 ">
             {inView1 ? <CountUp start={0} end={5000} duration={2} suffix="+" /> : "5000+"}
           </h2>
           <p className="w-fit text-[#5943A5] absolute left-[170px] top-[120px] top-340 z-5 leading-[20px]">Happy <br />Families <br />and <br />Counting </p>
          </div>
          </div>
         
          <div className="relative w-80 h-[300px] md:mb-12" ref={ref2}>
            <Image
              width={800}
              height={200}
              sizes="100vw"
              src={Vector2}
              alt="Layer 1"
              className="absolute top-0 left-0 h-full "
            />
            <Image
              width={400}
              height={200}
              src={Vector2a}
              alt="Layer 2"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <div className="">
                <h2 className="w-fit text-[#E3B200] relative font-bold text-[64px] left-[140px] top-[0px]  ">
                  {inView2 ? <CountUp start={0} end={4.9} decimals={1} duration={2} suffix="+" /> : "4.9+"}
                </h2>
                <p className="w-fit text-[#E3B200] relative text-[20px] left-[150px] top-[-25px]"> Google Rating</p>
            </div>
          </div>

          <div className="relative w-80 h-[300px] md:mb-12" ref={ref3}>
            <Image
              width={800}
              height={200}
              sizes="100vw"
              src={Vector3}
              alt="Layer 1"
              className="absolute top-0 left-0 h-full "
            />
            <Image
              width={400}
              height={200}
              src={Vector3a}
              alt="Layer 2"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <div>
              <h2 className="w-fit text-[#269BD9] text-[64px] relative font-bold left-[130px] top-[25px]">
                {inView3 ? <CountUp start={0} end={2500} duration={2} suffix="+" /> : "2500+"}
              </h2>
              <p className="w-fit text-[#269BD9] text-[20px] relative left-[190px] top-[0px]">Glowing <br /> Reviews </p>
            </div>
          </div>

          <div className="relative w-80 h-[300px] md:mb-12" ref={ref4}>
            <Image
              width={800}
              height={200}
              sizes="100vw"
              src={Vector4}
              alt="Layer 1"
              className="absolute top-0 left-0 h-full "
            />
            <Image
              width={400}
              height={200}
              src={Vector4a}
              alt="Layer 2"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
            <h2 className="w-fit text-[#ED750F] text-[64px] relative font-bold left-[130px] top-[25px]">
              {inView4 ? <CountUp start={0} end={30} duration={2} suffix="+" /> : "30+"}
            </h2>
            <p className="w-fit text-[#ED750F] text-[20px] relative whitespace-nowrap left-[130px] top-[0px]">Years of Peaditric <br/> Wisdom </p>
          </div>
        </div>

        {/* Every Child is a Miracle Section */}
      <div className="bg-linear-to-t from-[#F0EBFF] to-[#FDF8DB]">
        <div className=" rounded-3xl p-8 pb-0 md:p-12 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            Every child is a miracle - <br /> a unique story{" "}
            <span className="text-[#4B3A8F]">we&apos;re here to  <br /><i>care for</i></span>
          </h2>
          <p className="leading-relaxed mb-4 mt-3">
            Each moment of your child&apos;s growth is worth celebrating, from first
            steps to first words. But parenting isn&apos;t always magical, with
            midnight fevers, stubborn coughs, and moments of doubt.
          </p>
          <p className="leading-relaxed mb-4">
            That&apos;s where we come in: your trusted partner in ensuring nothing
            stands in the way of your child&apos;s health and well-being. We go beyond
            treating symptoms, offering holistic care that nurtures their
            physical, emotional, mental, and social development. From
            personalized growth assessments to making every clinic visit a
            positive experience, we&apos;re here with expert care, joy, and
            compassion.
          </p>
        </div>

        <div className="rounded-3xl p-8 md:p-12 mb-8 md:mb-12">
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
                    width={38}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
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
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
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
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
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

          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            We&apos;re here for the{" "}
            <span className="text-[#4B3A8F]">
              giggles, sniffles, and everything in{" "}
              <span className="italic font-light"> <i>between!</i></span>
            </span>
          </h2>
          <p className="text-[16px] mt-3">
            Some days you&apos;re celebrating first steps. <br /> Other days, you&apos;re
            worried about a fever at 2 AM. We are here for it all. Whether it&apos;s a
            quick check-up, a vaccine visit, or something that needs a deeper
            look, we offer the kind of care that listens, explains, and walks the
            path with you.
          </p>
          <h3 className="md:text-2xl mb-16">
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
                  little one&apos;s unique needs â€” from speech delays to behavioral
                  challenges.
                </div>
              </details>
            </div>
          </div>
        </div>

        {/* New Section: More Than Symptoms */}
        <div className="p-8 pt-0 md:p-12 mt-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            More than symptoms, <br />
            we see the <span className="text-[#4B3A8F]">bigger </span> <br />
            <span className="text-[#4B3A8F] italic font-light">picture</span>
          </h2>
          <p>
            Because every child is a miracle, and every concern deserves real
            attention. Whether it&apos;s just a feeling, your tiny tot&apos;s in a fever, a
            delay, or just a feeling, we&apos;re here with expert eyes, kind hearts,
            and real answers.
          </p>
          {/* Symptom Buttons Carousels (One for Each Row) */}
          <div className="space-y-4 mt-4">
            {/* Row 1 Carousel */}
            <div className="mx-auto rounded-2xl overflow-hidden p-1">
              <div ref={symptomSliderRef1} className="keen-slider ">
                {symptomRows[0].map((buttonText, index) => (
                  <div key={index} className="keen-slider__slide">
                    <button className="bg-[#FBE38F] text-[#4B3A8F] rounded-full px-4 py-2 w-full hover:bg-[#F6E8C3] transition-all duration-300">
                      {buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 Carousel */}
            <div className=" mx-auto rounded-2xl overflow-hidden p-1">
              <div ref={symptomSliderRef2} className="keen-slider ">
                {symptomRows[1].map((buttonText, index) => (
                  <div key={index} className="keen-slider__slide">
                    <button className="bg-[#FBE38F] text-[#4B3A8F] rounded-full px-4 py-2 w-full hover:bg-[#F6E8C3] transition-all duration-300">
                      {buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 Carousel */}
            <div className=" mx-auto rounded-2xl overflow-hidden p-1">
              <div ref={symptomSliderRef3} className="keen-slider">
                {symptomRows[2].map((buttonText, index) => (
                  <div key={index} className="keen-slider__slide">
                    <button className="bg-[#FBE38F] text-[#4B3A8F] rounded-full px-4 py-2 w-full hover:bg-[#F6E8C3] transition-all duration-300">
                      {buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Curious About Growth Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[28px] md:text-3xl  mb-8 leading-[32px]">
              <span className="font-bold">Curious about your{" "}</span>
              <span className="text-[#4B3A8F] font-bold">child&apos;s growth?</span>
              <br />
              <span className="text-[#4B3A8F] font-bold">Let&apos;s take a look </span>
              <span className="text-[#4B3A8F] italic"><i>together</i></span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-1 mt-4">
              You&apos;re the expert when it comes to your child but sometimes, it
              helps to have an extra pair of professional eyes. Our free, online{" "}
              <span className="font-semibold">milestone assessment tool</span>{" "}
              lets you easily track their development, from physical growth to
              behavioral needs. In just a few simple steps, you&apos;ll get the
              clarity you need to understand where they stand and feel confident
              in their progress.
            </p>
          </div>
        </div>
        <div className="relative w-full  h-[280px] md:mb-12 ">
          <Image
            width={300}
            height={300}
            /* sizes="100vw" */
            src={Rectangle}
            alt="Layer 1"
            className=" mx-auto max-w-[250px]"
          />
          <Image
            width={250}
            height={200}
            src={RectangleImg}
            alt="Layer 2"
            className="absolute absolute-center   mx-auto"
          />
        </div>

        <div className="flex justify-center mt-2 mb-8">
          <button className="text-lg font-medium underline hover:text-[#3A2A7F] transition-colors duration-300">
            Take our milestone assessment test
          </button>
        </div>

        {/* All Around the Corner Section */}
        <div className="bg-[#FFF5F5] p-9 md:p-12 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[28px]leading-[32px] md:text-3xl font-bold ">
              All of this, <span className="text-[#4B3A8F]">just</span>
              <br />
              <span className="text-[#4B3A8F]">around</span>{" "}
              <span className="text-[#4B3A8F] italic"><i>the corner</i></span>
            </h2>
            <p className="text-lg leading-relaxed mt-4">
              Late-night worries or last-minute scrambles shouldn&apos;t mean a long
              drive or endless queues. We&apos;re all about making care easy and
              accessible, so you can feel confident even on your toughest days.
              That&apos;s why our clinics are right in your neighborhood cozy,
              colourful, and designed with your little one in mind.
            </p>
            <p className="text-lg mb-8">
              Call us, book online, or just walk in, we&apos;ll be ready.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your nearby location"
                className="w-full px-4 py-3 pl-10 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-[#4B3A8F]"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Clinic Carousel Section with Keen-Slider Free Mode */}
        <div className="bg-[#FFF5F5] p-9 md:p-12 pt-0 md:mb-12">
          <div className="relative max-w-md mx-auto rounded-2xl  bg-white p-4">
            <div ref={clinicSliderRef} className="keen-slider">
              {clinics.map((clinic, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="relative w-full h-[300px] mb-6 rounded-xl overflow-hidden">
                    <Image
                      width={350}
                      height={300}
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mb-4 px-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 font-baloo2">
                      {clinic.name}
                    </h3>
                    <p
                      className="text-sm text-gray-600 mb-2 font-baloo2"
                      dangerouslySetInnerHTML={{ __html: clinic.address }}
                    />
                    <p
                      className="text-sm text-gray-600 font-baloo2"
                      dangerouslySetInnerHTML={{ __html: clinic.hours }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows for Clinic Carousel */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-[-10px] top-100 z-4 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-[-10px] top-100 z-4 transform -translate-y-1/2 bg-[#F4DF76]  rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button className="flex items-center bg-[#F9825F] hover:bg-[#f86f47] text-white font-bold py-3 px-10 rounded-full text-sm tracking-wide transition-transform duration-300 transform hover:scale-105">
              VISIT YOUR NEAREST BABYMD
              <span className="text-white text-base ml-2">Ã¢ÂÂµ</span>
            </button>
          </div>
        </div>

        

        {/* Testimonial Section */}
        <div className="relative w-full bg-[#FFF5F5]">
          <Image
            /* sizes="100vw" */
            src={curvedTop}
            alt="Layer 1"
            className=" mx-auto w-full"
          />
        </div>

        <div className="bg-[#E1F5FF]  md:p-8 text-[#4B3A8F] relative z-2">
          {/* Heading */}
          <h2 className="text-[28px] leading-[32px] md:text-2xl font-bold mb-2 px-6 ">
            Don&apos;t just <span className="text-[#5943A5]">take</span>
            <br />
            <span className="text-[#5943A5] italic font-medium">
              <i>our word </i>
            </span>{" "}
            for it
          </h2>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-6">
            {/* You could add SVG or img elements for the bee and bubbles */}
          </div>
          
          <div className="testimonial-cloud">
       

          {/* Testimonial Box */}
          <div className=" mt-4 relative px-6 w-80 top-[88px] z-2">
             {/*  <div className="absolute w-full bg-[#E1F5FF] z-0">
              <Image
                src={cloudtext}
                alt="Layer 1"
                className="w-full"
              />
            </div> */}
            <p className="text-sm relative leading-relaxed text-gray-800  ">
              "We had a wonderful consultation with Dr Shivanga Bora at BabyMD
              HSR Layout, for my son&apos;s wheezing issue. She was incredibly
              patient, listened to all our concerns, and provided a clear
              effective treatment plan. Her friendly approach and expertise made
              us feel reassured and confident in the care my son received. Highly
              recommend her for pediatric care!"
            </p>

            {/* Author */}
            <div className="mt-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 Overflow-hidden">
                {/* Profile image would go here */}
              </div>
              <div className="text-xs">
                <p className="font-semibold text-[#EB5A44]">Keerthana A</p>
                <p className="text-[#4B3A8F] text-xs">BabyMD HSR Layout</p>
              </div>
            </div>
            {/* See Video Link */}
            <div className="flex items-center justify-start mt-5 mb-6">
              <button className="text-xs font-semibold text-[#4B3A8F] flex items-center underline underline-offset-[3px]">
                SEE VIDEO <span className="ml-1 text-xs">
                <Image
                src={bluebtnarrow}
                alt="Layer 1"
                className="w-full min-w-[15px]"
              />
                </span>
              </button>
            </div>

          </div>

          

          {/* CTA Button */}
          <div className="mt-[160px] px-6">
            <button className="bg-[#4B3A8F] text-white font-semibold py-3 px-6 rounded-full text-xs flex items-center gap-2">
              SEE MORE REVIEWS <span className="ml-1 text-xs">
              <Image
                src={whitebtnarrow}
                alt="Layer 1"
                className="w-full min-w-[15px]"
              />
              </span>
            </button>
          </div>
        </div>
        </div>
        <div className="relative w-full bg-[#FFF5F5] z-0">
          <Image
            /* sizes="100vw" */
            src={curvedBottom}
            alt="Layer 1"
            className=" mx-auto w-full relative  top[-30px]"
          />
        </div>

        {/* Parenting Workshop Section */}
        <div className="bg-[#F8F6FB] bg-opacity-80  space-y-4">
          {/* Heading */}
          <div className="text-[#6A58AD] p-6">
            <h2 className="text-[28px] leading-[32px] font-bold">
              How about some <br />
              <span className="italic font-medium text-[#6A58AD]">
                <i>parenting tips</i>
              </span>
              , <span className="text-black">
                so you can skip
                the panic scroll?
              </span>
            </h2>
            <p className="text-[16px] text-black mt-2 leading-[24px]">
              Ever wished parenting came with a guidebook? From picky eating to
              tantrums, we know you&apos;ve got questions. Join our expert-led
              webinars to get practical tips and expert answers to feel confident
              and supported in your parenting journey.
            </p>
          </div>

          {/* Workshop Carousel with Keen-Slider Free Mode */}
          <div className="relative w-full mx-auto pl-6">
            <div ref={workshopSliderRef} className="keen-slider">
              {workshops.map((workshop, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className=" overflow-hidden">
                    <div className=" mb-4  pt-4">
                      <h3 className="text-xl font-bold text-[#5943A5] mb-1 font-baloo2">
                        {workshop.title}
                      </h3>
                    </div>
                    <div className="relative h-[192px] w-full">
                      <Image
                        width={350}
                        height={192}
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                      <div className="absolute top-2 right-2 bg-[#5943A5] text-white text-xs p-1 rounded-md font-bold text-center w-[70px]">
                        <span className="text-base">{workshop.date.split(" ")[0]}</span>
                        <br />
                        <span className="text-[9px]">{workshop.date.split(" ").slice(1).join(" ")}</span>
                      </div>
                      <div className="absolute bottom-2 left-0 right-0 flex flex-wrap gap-1 px-2">
                        {workshop.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="border border-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Arrows and Indicators for Workshop Carousel */}
            <div className="flex justify-between items-center mt-4">
              <div className="flex space-x-2 pl-32">
                {workshops.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentWorkshopSlide === index ? "bg-[#4B3A8F]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-1">
            <button className="bg-[#F47B54] text-white font-bold text-sm py-3 px-6 rounded-full flex items-center gap-1 my-8">
              SAVE YOUR SPOT
              <span className="text-xs ml-1">
              <Image
                src={whitebtnarrow}
                alt="Layer 1"
                className="w-full min-w-[15px]"
              />
              </span>
            </button>
          </div>
        </div>

        {/* Parenting Unplugged Section */}
        <div className="bg-[#FDF8DB] pt-6">
          {/* Heading */}
          <div className="text-[#231F20] p-6">
            <h2 className="text-[28px] leading-[32px] font-bold">
              Parenting
              <span className="italic font-light text-[#4B3A8F]">
                {" "}
               <i>unplugged!</i> 
              </span>
            </h2>
            <p className="text-sm mt-2 text-[#231F20]">
              Juggling work, family, and endless advice on parenting? We&apos;ve got
              you covered. Delve into our expert insights, practical tips, and
              the latest updates curated exclusively for you.
            </p>
          </div>

          {/* Case Study Carousel with Keen-Slider Free Mode */}
          <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-[#FDF8DB] px-6">
            <div ref={caseStudySliderRef} className="keen-slider p-[0]">
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="bg-[#FDF8DB] rounded-2xl w-full">
                    <div className="relative h-[250px] w-full">
                      <Image
                       /*  width={350}
                        height={190}
                        sizes="100vw" */
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="absolute bottom-1 w-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-[10px] font-bold text-[#EB5A44] uppercase font-baloo2">
                        {caseStudy.category}
                      </p>
                      <p className="font-semibold text-[20px] leading-[26px] text-[#231F20] font-baloo2">
                        {caseStudy.title}
                      </p>
                    </div>
                    <button
                      onClick={nextCaseStudySlide}
                      className="mt-2 bg-[#F4DF76] rounded-full p-2"
                    >
                      <svg
                        className="w-3 h-3 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Indicators for Case Study Carousel */}
            <div className="flex justify-center items-center mt-4">
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      currentCaseStudySlide === index ? "bg-[#4B3A8F]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="bg-[#4B3A8F] text-white text-sm font-semibold py-4 px-7 my-5 rounded-full flex items-center gap-2 hover:scale-105 transition">
              STAY IN THE KNOW
              <span className="text-base">
              <Image
                src={whitebtnarrow}
                alt="Layer 1"
                className="w-full min-w-[15px]"
              />
              </span>
            </button>
          </div>
        </div>
        
        <div className="px-6">
          <div className="relative bg-[#FF9A6C] text-white mt-8 mb-4 px-4 py-6 rounded-2xl space-y-14 w-full mx-auto overflow-hidden">
            {/* Heading */}
            <div>
              <h2 className="text-lg font-bold leading-snug text-[28px] leading-[30px]">
                Because <span className="text-white"> Parenting </span>
                Shouldn&apos;t Cost A <span className="italic font-normal">
                  <i>Fortune</i>
                </span>
              </h2>
              <p
                className="text-sm mt-2"
                style={{
                  fontFamily: "Baloo 2, sans-serif",
                  fontSize: "16px",
                  lineHeight: "22px",
                }}
              >
                Midnight fevers, last-minute travel checkups, vaccine days we
                know parenting comes with curveballs. Our membership plans are here
                to make expert care simpler, smoother, and more affordable all year
                round.
              </p>
              <p className="text-sm mt-2">
                Choose from our plans and save up to â‚¹10,000 annually.
              </p>
            </div>

            {/* Membership Cards */}
            <div className="flex flex-row gap-3 ">
              {/* Gold Plan */}
              <div
                className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2  w-full w-1/2"
                style={{
                  boxShadow: "-5px 5px 0 #F4DF76;"
                }}
              >
                <div className="text-yellow-500 text-2xl">ðŸ…</div>
                <h3 className="font-semibold text-sm">Gold Membership</h3>
                <p className="text-xs">Save more on everyday care</p>
                <p className="text-[#009A67] font-bold text-lg mt-1">
                  â‚¹699<span className="text-xs">/year</span>
                </p>
                <ul className="text-xs list-disc list-inside text-[#4D4D4D] space-y-1 mt-2">
                  <li>10% off consults</li>
                  <li>5% off other services</li>
                  <li>â‚¹700 gift card</li>
                </ul>
              </div>

              {/* Platinum Plan */}
              <div
                className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2 `    w-full w-1/2"
                style={{
                  boxShadow: "5px 5px 0 #5943A5;"
                }}
              >
                <div className="text-[#6C40B5] text-2xl">ðŸ’Ž</div>
                <h3 className="font-semibold text-sm">Platinum Membership</h3>
                <p className="text-xs">Our best value for growing families</p>
                <p className="text-[#009A67] font-bold text-lg mt-1">
                  â‚¹999<span className="text-xs">/year</span>
                </p>
                <ul className="text-xs list-disc list-inside text-[#4D4D4D] space-y-1 mt-2">
                  <li>15% off consults</li>
                  <li>10% off all services</li>
                  <li>â‚¹1000 gift card</li>
                </ul>
              </div>
            </div>

            {/* Note */}
            <p
              className="text-xs "
              style={{
                fontWeight: "400",
                fontSize: "16px",
                lineHeight: "22px",
                fontFamily: "Lato, sans-serif"
              }}
            >
              With both plans, you get priority booking at all BabyMD clinics and
              online consults. Plus, a dedicated Care Manager to handle
              appointments, reminders, and check-ins â€” so you can focus on what
              matters most.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center relative bottom-[-40px] z-15">
              <button className="bg-[#4B3A8F] text-white text-sm font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:scale-105 transition">
                PICK A PLAN, START SAVING
                <span className="text-base">
                  <Image
                  src={whitebtnarrow}
                  alt="Layer 1"
                  className="w-full min-w-[15px]"
                />
                </span>
              </button>
            </div>

            {/* Overlapping Images */}
            <div className="mt-10">
              <Image
                src={Premiumlayer}
                alt="Background shape"
                className=" top-205  right-1.5 absolute"
              />
              <Image
                src={PremiumlayerImg}
                alt="Doctor and Child"
                width={320}
                height={200}
                className="absolute right-0 transform -translate-y-80 mt-10 "
              />
            </div>
          </div>
        </div>
        
        <div className=" px-6 pt-1">
          <div className="relative bg-[#5943A5] text-white rounded-2xl mt-4 p-6 w-full mx-auto space-y-2">
            {/* Heading */}
            <h2 className="font-baloo2 text-[28px] leading-[30px] font-bold leading-8">
              Whenever you need us, we&apos;re here with care{" "}
              <span className="italic font-light text-white px-1 rounded">
                <i>that&apos;s ready</i>
              </span>
            </h2>

            {/* Description */}
            <p className="text-base leading-6 font-lato pt-3">
              Babies don&apos;t come with instructions, but we do. Whether it&apos;s a routine
              check-up, a fever that won&apos;t quit, or just a little peace of mind â€” just
              pick a time, choose a clinic, and we&apos;ll handle the rest.
            </p>

            {/* Overlapping Images */}
            <div className="relative bottom-[-31px] h-62">
              <Image
                src={readyvector}
                alt="Background shape"
                className="absolute absolute-center w-58 h-auto"
              />
              <Image
                src={readyvectorImg}
                alt="Family"
                width={460}
                height={250}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-65 max-w-[460px] h-auto"
              />
            </div>
            <div className="flex absolute transform -translate-x-1/2 left-50 bottom-[20px] z-20 ">
              <button className="bg-[#F9EEB6] text-[#231F20] text-sm font-semibold py-3 px-4 rounded-full w-full flex justify-center items-center gap-2 hover:scale-105 transition whitespace-nowrap">
                BOOK YOUR APPOINTMENT <span className="text-base">
                <Image
                  src={bluebtnarrow}
                  alt="Layer 1"
                  className="w-full min-w-[15px]"
                />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* New Section: Some of the Questions Parents Really Ask Us */}
        
        <div className="p-6">
        <div
          className="bg-[#E1F5FF] rounded-3xl p-8 md:p-12 mb-8 md:mb-12 w-full"
          
        >
          <h2
            className="text-[#03000b] mb-4 text-[28px] font-bold leading-[30px]" >
            Some of the questions{" "}
            <span
              className="text-[#4B3A8F]"
              style={{
                fontFamily: "Baloo 2, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "30px",
                letterSpacing: "0%",
              }}
            >
              parents really ask <br />
              us{" "}
              <span
                style={{
                  fontFamily: "Courgette, sans-serif",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "30px",
                  letterSpacing: "0%",
                }}
              >
                (a lot!)
              </span>
            </span>
          </h2>
          <p
            className="text-[#4B3A8F] text-lg md:text-xl leading-relaxed font-medium mb-4 mt-4"
            style={{
              fontFamily: "inherit",
              fontSize: "16px",
              lineHeight: "22px",
              verticalAlign: "middle",
            }}
          >
            Got questions about midnight fevers, first foods, routine vaccines,
            tricky rashes, or curious growth spurts? We&apos;re here to guide you
            through every question no judgment, just answers you can rely on.
          </p>
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="group">
              <summary className="flex  justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2 cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What is treatment therapy for kids?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 2 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  How are therapies different from assessment sessions?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 3 (Expanded by default) */}
            <details className="group" open>
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  Are these therapies invasive?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 4 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  When does my child need occupational therapy?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 5 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What are the advantages of speech therapy for kids?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 6 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What kind of issues can be managed by family therapy?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 7 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2  cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What is treatment therapy for kids?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>

            {/* Question 8 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl border border-[#91CFDA80] gap-2 cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What kind of techniques are used for CBT treatment?
                </span>
                <svg
                  className="min-w-[20px] h-[20px] p-[2px] bg-[#91CFDA] rounded-full text-[#4B3A8F] transform transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="mt-0.5 p-4 bg-[#FAF1D6] rounded-xl">
                <p
                  className="text-[#4B3A8F] text-sm leading-relaxed"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  No, these therapies are non-invasive and absolutely safe for
                  your child.
                </p>
              </div>
            </details>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}