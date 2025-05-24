'use client'; // Ensure client-side rendering for useState and keen-slider

import Image from "next/image";
import React, { useState } from "react"; // React import included as per previous fix
import { useKeenSlider } from "keen-slider/react"; // Import keen-slider hook
import "keen-slider/keen-slider.min.css"; // Import keen-slider styles
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
      tags: ["PARENT&#39;S KNOWLEDGE", "CHILD FEEDING CARE", "FEEDING CARE"],
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
      tags: ["NUTRITION", "HEALTHY EATING", "PARENT&#39;S KNOWLEDGE"],
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
              You deserve care that&#39;s as thoughtful as your
              <br />
              parenting. From cozy clinics to expert
              <br />
              pediatricians and holistic support, we&#39;re here
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
            WHERE IS MY SUPERDOC&#39;S?
            <span className="text-white text-base col">âµ</span>
          </button>
        </div>

        <div className="max-w-xl text-center mx-auto mt-8 px-4">
          <h2 className="text-2xl font-bold text-gray-900">
            But you donâ€™t have to <br />
            <span className="text-purple-700">figure it out</span>{" "}
            <em className="italic text-purple-700">alone</em>
          </h2>

          <p>
            Behind our every mark is a parent who found clarity and a child who
            felt better, safer, and happier. From midnight fevers to milestone
            check-ups, these stats reflect a story of care that goes beyond
            treatment â€” itâ€™s about peace of mind and trust.
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
          <div className="relative w-80 h-[300px] md:mb-12">
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
          </div>
          <div>
           <h1 className="text-[#5943A5] text-[52px] font-bold absolute left-45 top-310 z-5 ">5000+</h1>
          <h1 className="text-[#5943A5]  absolute left-50 top-325 z-5 ">Happy <br />Families <br /> and <br />Counting </h1>
          </div>
          <div className="relative w-80 h-[300px] md:mb-12">
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
                <h1 className="text-[#E3B200] relative  text-[64px] font-bold pt-9 ps-42  right-5  ">4.9+</h1>
                <h2 className="text-[#E3B200] relative  text-[22px] pt-0 pl-46  right-5 ">
                        Google Rating
                      </h2>
            </div>
          </div>

          <div className="relative w-80 h-[300px] md:mb-12">
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
              <h1 className="text-[#269BD9] text-[55px] relative font-bold px-33 py-9">2500+</h1>
              <h1 className="text-[#269BD9] text-[13px] relative  px-35  ">Glowing Reviews </h1>
            </div>
          </div>

          <div className="relative w-80 h-[300px] md:mb-12">
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
            <h1 className="text-[#ED750F] text-[52px] relative font-bold px-33 py-7 ">30+</h1>
            <h1 className="text-[#ED750F] text-[15px] relative px-37 left-1 bottom-7 whitespace-nowrap">Years of Peaditric <br/> Wisdom </h1>
          </div>
        </div>

        {/* Every Child is a Miracle Section */}
        <div className="bg-[#ebf9be64] rounded-3xl p-8 md:p-12 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            Every child is a miracle â€” <br /> a unique story{" "}
            <span className="text-[#4B3A8F]">
              weâ€™re here <br />
              to care for
            </span>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed font-medium mb-4">
            Each moment of your childâ€™s growth is worth celebrating, from first
            steps to first words. But parenting isnâ€™t always magical, with
            midnight fevers, stubborn coughs, and moments of doubt.
          </p>
          <p className="text-lg md:text-xl leading-relaxed font-medium mb-4">
            Thatâ€™s where we come in: your trusted partner in ensuring nothing
            stands in the way of your childâ€™s health and well-being. We go beyond
            treating symptoms, offering holistic care that nurtures their
            physical, emotional, mental, and social development. From
            personalized growth assessments to making every clinic visit a
            positive experience, weâ€™re here with expert care, joy, and
            compassion.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8 md:mb-12">
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
            Weâ€™re here for the{" "}
            <span className="text-[#4B3A8F]">
              giggles, sniffles, and everything in{" "}
              <span className="italic font-light"> between!</span>
            </span>
          </h2>
          <p className="">
            Some days youâ€™re celebrating first steps. <br /> Other days, youâ€™re
            worried about a fever at 2 AM. We are here for it all. Whether itâ€™s a
            quick check-up, a vaccine visit, or something that needs a deeper
            look, we offer the kind of care that listens, explains, and walks the
            path with you.
          </p>
          <h3 className="md:text-2xl mb-13">
            Hereâ€™s how we support you and your child â€” every step of the way:
          </h3>
          <div className="relative z-10 -mt-12 max-w-md mx-auto">
            <div className="rounded-t-2xl bg-white overflow-hidden">
              {/* General Consultations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-center gap-4 p-4 bg-[#E6D6FA] cursor-pointer">
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
                    <svg
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
                    </svg>
                  </div>
                </summary>
                <div className="p-4 bg-[#E6D6FA] text-sm text-gray-700 leading-relaxed">
                  Comprehensive health check-ups and consultations for your
                  child&#39;s everyday needs.
                </div>
              </details>

              {/* Vaccinations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-center gap-4 p-4 bg-[#D6FAD6] cursor-pointer">
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
                    <svg
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
                    </svg>
                  </div>
                </summary>
                <div className="p-4 bg-[#D6FAD6] text-sm text-gray-700 leading-relaxed">
                  Timely vaccinations to protect your child from preventable
                  diseases.
                </div>
              </details>

              {/* Super Specialist Consultations */}
              <details className="group border-b border-gray-200">
                <summary className="flex items-center gap-4 p-4 bg-[#FAF1D6] cursor-pointer">
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
                    <svg
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
                    </svg>
                  </div>
                </summary>
                <div className="p-4 bg-[#FAF1D6] text-sm text-gray-700 leading-relaxed">
                  Expert consultations with top specialists for complex medical
                  conditions.
                </div>
              </details>

              {/* Developmental Assessments and Therapies */}
              <details className="group" open>
                <summary className="flex items-center gap-4 p-4 bg-[#D6F4FA] cursor-pointer">
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
                    <svg
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
                    </svg>
                  </div>
                </summary>
                <div className="p-4 bg-[#D6F4FA] text-sm text-gray-700 leading-relaxed">
                  Our developmental pediatricians and certified therapists go
                  beyond symptoms to create personalized plans that address your
                  little one&#39;s unique needs â€” from speech delays to behavioral
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
            attention. Whether itâ€™s just a feeling, your tiny totâ€™s in a fever, a
            delay, or just a feeling, weâ€™re here with expert eyes, kind hearts,
            and real answers.
          </p>
          {/* Symptom Buttons Carousels (One for Each Row) */}
          <div className="space-y-4 mt-4">
            {/* Row 1 Carousel */}
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden bg-white p-1">
              <div ref={symptomSliderRef1} className="keen-slider">
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
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden bg-white p-1">
              <div ref={symptomSliderRef2} className="keen-slider">
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
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden bg-white p-1">
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

        {/* Curious About Growth Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8 md:mb-12 shadow-md">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Curious about your{" "}
              <span className="text-[#4B3A8F]">child&#39;s growth?</span>
              <br />
              <span className="text-[#4B3A8F]">Let&#39;s take a look </span>
              <span className="text-[#4B3A8F] italic">together</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              You&#39;re the expert when it comes to your child â€” but sometimes, it
              helps to have an extra pair of professional eyes. Our free, online{" "}
              <span className="font-semibold">milestone assessment tool</span>{" "}
              lets you easily track their development, from physical growth to
              behavioral needs. In just a few simple steps, you&#39;ll get the
              clarity you need to understand where they stand and feel confident
              in their progress.
            </p>
          </div>
        </div>
        <div className="relative w-90 h-[280px] md:mb-12">
          <Image
            width={300}
            height={300}
            sizes="100vw"
            src={Rectangle}
            alt="Layer 1"
            className="absolute bottom-1 left-14 -full"
          />
          <Image
            width={250}
            height={200}
            src={RectangleImg}
            alt="Layer 2"
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
          />
        </div>

        <div className="flex justify-center mt-8">
          <button className="text-lg font-medium underline hover:text-[#3A2A7F] transition-colors duration-300">
            Take our milestone assessment test
          </button>
        </div>

        {/* All Around the Corner Section */}
        <div className="bg-[#FFF5F5] rounded-3xl p-9 md:p-12 mb-8 md:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              All of this, <span className="text-[#4B3A8F]">just</span>
              <br />
              <span className="text-[#4B3A8F]">around</span>{" "}
              <span className="text-[#4B3A8F] italic">the corner</span>
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Late-night worries or last-minute scrambles shouldn&#39;t mean a long
              drive or endless queues. We&#39;re all about making care easy and
              accessible, so you can feel confident even on your toughest days.
              That&#39;s why our clinics are right in your neighborhood â€” cozy,
              colourful, and designed with your little one in mind.
            </p>
            <p className="text-lg mb-8">
              Call us, book online, or just walk in, we&#39;ll be ready.
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your nearby location"
                className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:border-[#4B3A8F]"
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
        <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-white p-4">
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
            className="absolute left-4 top-100 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
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
            className="absolute right-4 top-100 transform -translate-y-1/2 bg-[#F4DF76]  rounded-full shadow-md"
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

        <div className="flex justify-center items-center">
          <button className="flex items-center bg-[#F9825F] hover:bg-[#f86f47] text-white font-bold py-3 px-10 rounded-full text-sm tracking-wide transition-transform duration-300 transform hover:scale-105">
            VISIT YOUR NEAREST BABYMD
            <span className="text-white text-base ml-2">âµ</span>
          </button>
        </div>

        {/* Testimonial Section */}
        <div className="bg-[#DFF1FF] rounded-t-3xl p-6 md:p-8 text-[#4B3A8F] relative">
          {/* Heading */}
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Don&#39;t just <span className="text-purple-600">take</span>
            <br />
            <span className="text-purple-600 italic font-medium">
              our word
            </span>{" "}
            for it
          </h2>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-6">
            {/* You could add SVG or img elements for the bee and bubbles */}
          </div>

          {/* Testimonial Box */}
          <div className="bg-white rounded-lg p-4 md:p-5 mt-4 shadow-sm relative">
            <p className="text-sm leading-relaxed text-gray-800">
              &quot;We had a wonderful consultation with Dr Shivanga Bora at BabyMD
              HSR Layout, for my son&#39;s wheezing issue. She was incredibly
              patient, listened to all our concerns, and provided a clear
              effective treatment plan. Her friendly approach and expertise made
              us feel reassured and confident in the care my son received. Highly
              recommend her for pediatric care!&quot;
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
          </div>

          {/* See Video Link */}
          <div className="flex items-center justify-start mt-3 mb-6">
            <button className="text-xs font-semibold text-[#4B3A8F] flex items-center gap-1">
              SEE VIDEO <span className="ml-1 text-xs">â–¶</span>
            </button>
          </div>

          {/* CTA Button */}
          <div className="mt-0">
            <button className="bg-[#4B3A8F] text-white font-semibold py-2 px-5 rounded-full text-xs flex items-center gap-2">
              SEE MORE REVIEWS <span className="ml-1 text-xs">â–¶</span>
            </button>
          </div>
        </div>

        {/* Parenting Workshop Section */}
        <div className="bg-[#F8F6FB] bg-opacity-80 rounded-t-3xl p-6 space-y-4">
          {/* Heading */}
          <div className="text-[#6A58AD]">
            <h2 className="text-xl font-bold">
              How about some <br />
              <span className="italic font-medium text-[#6A58AD]">
                parenting tips
              </span>
              , <span className="text-black font-normal">
                so you can skip <br />
                the panic scroll?
              </span>
            </h2>
            <p className="text-sm text-black mt-2 leading-tight">
              Ever wished parenting came with a guidebook? From picky eating to
              tantrums, we know you&#39;ve got questions. Join our expert-led
              webinars to get practical tips and expert answers to feel confident
              and supported in your parenting journey.
            </p>
          </div>

          {/* Workshop Carousel with Keen-Slider Free Mode */}
          <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-white p-4">
            <div ref={workshopSliderRef} className="keen-slider">
              {workshops.map((workshop, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                    <div className="text-center mb-4 px-8 pt-4">
                      <h3 className="text-xl font-bold text-gray-800 mb-1 font-baloo2">
                        {workshop.title}
                      </h3>
                    </div>
                    <div className="relative h-[192px] w-full">
                      <Image
                        width={350}
                        height={192}
                        src={workshop.image}
                        alt={workshop.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-0 right-2 bg-[#3810c8] text-white text-xs p-1 rounded-md font-bold text-center w-8">
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
            <button className="bg-[#F47B54] text-white font-bold text-sm py-2 px-5 rounded-full flex items-center gap-1">
              SAVE YOUR SPOT
              <span className="text-xs ml-1">â–¶</span>
            </button>
          </div>
        </div>

        {/* Parenting Unplugged Section */}
        <div className="bg-[#FDF8DB] p-6 rounded-t-3xl space-y-8">
          {/* Heading */}
          <div className="text-[#231F20]">
            <h2 className="text-xl font-semibold">
              Parenting
              <span className="italic font-light text-[#4B3A8F]">
                {" "}
                unplugged!
              </span>
            </h2>
            <p className="text-sm mt-2 text-[#231F20]">
              Juggling work, family, and endless advice on parenting? Weâ€™ve got
              you covered. Delve into our expert insights, practical tips, and
              the latest updates â€” curated exclusively for you.
            </p>
          </div>

          {/* Case Study Carousel with Keen-Slider Free Mode */}
          <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-[#FDF8DB] p-4">
            <div ref={caseStudySliderRef} className="keen-slider">
              {caseStudies.map((caseStudy, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="bg-[#FDF8DB] rounded-xl p-2 w-full max-w-xs mx-auto">
                    <div className="relative h-[190px]">
                      <Image
                        width={350}
                        height={190}
                        sizes="100vw"
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="absolute bottom-1 left-1 h-full object-cover"
                      />
                    </div>
                    <div className="mt-3">
                      <p className="text-[10px] font-bold text-[#EB5A44] uppercase font-baloo2">
                        {caseStudy.category}
                      </p>
                      <p className="font-semibold text-sm text-[#231F20] font-baloo2">
                        {caseStudy.title}
                      </p>
                    </div>
                    <button
                      onClick={nextCaseStudySlide}
                      className="mt-2 bg-[#F4DF76] rounded-full shadow-md p-2"
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
            <button className="bg-[#4B3A8F] text-white text-sm font-semibold py-3 px-6 rounded-full flex items-center gap-2 hover:scale-105 transition">
              STAY IN THE KNOW
              <span className="text-base">âµ</span>
            </button>
          </div>
        </div>

        <div className="relative bg-[#FF9A6C] text-white mt-3 px-4 py-6 rounded-2xl space-y-14 max-w-sm mx-10 overflow-hidden">
          {/* Heading */}
          <div
            style={{
              fontFamily: "Baloo 2, sans-serif",
              fontSize: "28px",
              lineHeight: "30px",
            }}
        >
            <h2 className="text-lg font-bold leading-snug">
              Because <span className="text-white">Parenting</span>
              <br />
              Shouldnâ€™t Cost A <span className="italic font-normal">
                <br />
                Fortune
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
              Midnight fevers, last-minute travel checkups, vaccine days â€” we
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
              className="bg-white text-[#231F20] p-4 rounded-xl space-y-2 shadow w-full"
              style={{
                width: "138px",
                height: "306px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "15px",
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
              className="bg-white text-[#231F20] p-4 rounded-xl space-y-2 border-2 border-[#6C40B5] shadow w-full"
              style={{
                width: "138px",
                height: "306px",
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "15px",
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
              <span className="text-base">âµ</span>
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
              className="absolute transform -translate-y-80 mt-10 "
            />
          </div>
        </div>

        <div className="relative bg-[#6C40B5] text-white rounded-2xl mt-2 p-6 max-w-xs mx-auto space-y-2">
          {/* Heading */}
          <h2 className="font-baloo2 text-2xl font-normal leading-8">
            Whenever you need us, weâ€™re here â€” with care{" "}
            <span className="italic font-light text-white px-1 rounded">
              thatâ€™s ready
            </span>
          </h2>

          {/* Description */}
          <p className="text-base leading-6 font-lato">
            Babies donâ€™t come with instructions, but we do. Whether itâ€™s a routine
            check-up, a fever that wonâ€™t quit, or just a little peace of mind â€” just
            pick a time, choose a clinic, and weâ€™ll handle the rest.
          </p>

          {/* Overlapping Images */}
          <div className="relative bottom-[-31px] h-62">
            <Image
              src={readyvector}
              alt="Background shape"
              className="absolute top-0 right-2.5 w-58 h-auto"
            />
            <Image
              src={readyvectorImg}
              alt="Family"
              width={460}
              height={250}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-65 max-w-[460px] h-auto"
            />
          </div>
          <div className="flex right-9 absolute bottom-[20px] z-20 ">
            <button className="bg-[#F9EEB6] text-[#231F20] text-sm font-semibold py-3 px-4 rounded-full w-full flex justify-center items-center gap-2 hover:scale-105 transition">
              BOOK YOUR APPOINTMENT <span className="text-base">âµ</span>
            </button>
          </div>
        </div>

        {/* New Section: Some of the Questions Parents Really Ask Us */}
        <div
          className="bg-[#E1F5FF] rounded-3xl p-8 md:p-12 mb-8 md:mb-12 shadow-md"
          style={{
            width: "360px",
            height: "auto",
          }}
        >
          <h2
            className="text-[#03000b] mb-4 leading-tight"
            style={{
              fontFamily: "Baloo 2, sans-serif",
              fontWeight: 700,
              fontSize: "28px",
              lineHeight: "30px",
              letterSpacing: "0%",
              italic: "normal",
            }}
          >
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
            className="text-[#4B3A8F] text-lg md:text-xl leading-relaxed font-medium mb-4"
            style={{
              fontFamily: "inherit",
              fontSize: "16px",
              lineHeight: "22px",
              verticalAlign: "middle",
            }}
          >
            Got questions about midnight fevers, first foods, routine vaccines,
            tricky rashes, or curious growth spurts? Weâ€™re here to guide you
            through every question â€” no judgment, just answers you can rely on.
          </p>
          <div className="space-y-4">
            {/* Question 1 */}
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What is treatment therapy for kids?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  How are therapies different from assessment sessions?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  Are these therapies invasive?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  When does my child need occupational therapy?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What are the advantages of speech therapy for kids?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What kind of issues can be managed by family therapy?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What is treatment therapy for kids?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
              <summary className="flex justify-between items-center p-4 bg-[#E1F5FF] rounded-xl shadow-sm cursor-pointer">
                <span
                  className="text-[#4B3A8F] text-lg font-medium"
                  style={{ fontSize: "14px", lineHeight: "18px" }}
                >
                  What kind of techniques are used for CBT treatment?
                </span>
                <svg
                  className="w-5 h-5 text-[#4B3A8F] transform transition-transform group-open:rotate-180"
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
  );
}