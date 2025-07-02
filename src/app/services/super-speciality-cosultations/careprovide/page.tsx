"use client";
import Image from "next/image";
import { useState } from "react";
import arrow from "../../../../../public/images/Group 2349.png";
import RoutineCheckupIcon from "public/icons/gpc4.png";
import LactationIcon from "public/icons/gpc9.png";
import SickVisitIcon from "public/icons/vaccination4.png";
import HandIcon from "public/icons/gpc10.png";
import NewbornIcon from "public/icons/gpc8.png";
import GeneralConsults from "../Generalconsult/page";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

const accordionData: AccordionItem[] = [
  {
    title: 'Infancy and Early Feeding (0-1 Years)',
    content: (
      <div className="mx-auto py-4 px-0 pt-0 bg-white accodion-detail">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mb-5">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col items-center text-center bg-[#FFD6C6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={SickVisitIcon} width={55} height={55} alt="Sick Visits" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Paediatrician
            </h3>
           
          </div>

          {/* 2 - Routine Check-ups */}
          <div className="flex flex-col items-center text-center bg-[#F9EEB6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={RoutineCheckupIcon} width={55} height={55} alt="Routine Check-Ups" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Lactation Specialist
            </h3>
          </div>

          {/* 3 - Newborn Care */}
          <div className="flex flex-col items-center text-center bg-[#DBFFCC] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={NewbornIcon} width={55} height={55} alt="Newborn and Infant Care" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Nutritionist/Dietician
            </h3>
           
          </div>

          {/* 4 - Lactation */}
          <div className="flex flex-col items-center text-center bg-[#CDE6F3] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={LactationIcon} width={55} height={55} alt="Lactation Consults" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Ophthalmologist
            </h3>
           
          </div>

          {/* 5 - Hand Holding */}
          <div className="flex flex-col items-center text-center bg-[#DDD0FF] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={HandIcon} width={55} height={55} alt="Hand Holding" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Dentist
            </h3>
            
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Toddler and Preschool Years (1-5 Years)',
    content: (
      <div className="mx-auto py-4 px-0 pt-0 bg-white accodion-detail">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mb-5">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col items-center text-center bg-[#FFD6C6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={SickVisitIcon} width={55} height={55} alt="Sick Visits" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Paediatrician
            </h3>
           
          </div>

          {/* 2 - Routine Check-ups */}
          <div className="flex flex-col items-center text-center bg-[#F9EEB6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={RoutineCheckupIcon} width={55} height={55} alt="Routine Check-Ups" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Lactation Specialist
            </h3>
          </div>

          {/* 3 - Newborn Care */}
          <div className="flex flex-col items-center text-center bg-[#DBFFCC] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={NewbornIcon} width={55} height={55} alt="Newborn and Infant Care" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Nutritionist/Dietician
            </h3>
           
          </div>

          {/* 4 - Lactation */}
          <div className="flex flex-col items-center text-center bg-[#CDE6F3] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={LactationIcon} width={55} height={55} alt="Lactation Consults" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Ophthalmologist
            </h3>
           
          </div>

          {/* 5 - Hand Holding */}
          <div className="flex flex-col items-center text-center bg-[#DDD0FF] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={HandIcon} width={55} height={55} alt="Hand Holding" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Dentist
            </h3>
            
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'School-Age to Teens (6+ Years)',
    content: (
      <div className="mx-auto py-4 px-0 pt-0 bg-white accodion-detail">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mb-5">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col items-center text-center bg-[#FFD6C6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={SickVisitIcon} width={55} height={55} alt="Sick Visits" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Paediatrician
            </h3>
           
          </div>

          {/* 2 - Routine Check-ups */}
          <div className="flex flex-col items-center text-center bg-[#F9EEB6] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={RoutineCheckupIcon} width={55} height={55} alt="Routine Check-Ups" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Lactation Specialist
            </h3>
          </div>

          {/* 3 - Newborn Care */}
          <div className="flex flex-col items-center text-center bg-[#DBFFCC] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={NewbornIcon} width={55} height={55} alt="Newborn and Infant Care" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Nutritionist/Dietician
            </h3>
           
          </div>

          {/* 4 - Lactation */}
          <div className="flex flex-col items-center text-center bg-[#CDE6F3] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={LactationIcon} width={55} height={55} alt="Lactation Consults" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Ophthalmologist
            </h3>
           
          </div>

          {/* 5 - Hand Holding */}
          <div className="flex flex-col items-center text-center bg-[#DDD0FF] p-5 rounded-[15px]">
            <div className="mb-1 h-15 flex items-center justify-center">
              <Image src={HandIcon} width={55} height={55} alt="Hand Holding" />
            </div>
            <h3 className="text-[16px] leading-[20px] font-bold mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
              Pediatric Dentist
            </h3>
            
          </div>
        </div>
      </div>
    ),
  },
];

const bgColors = ['bg-[#D7CCE2]', 'bg-[#FFD6C6]', 'bg-[#F9EEB6]'];

export default function CareProvide() {


  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };


  return (
    <>
    <div className="px-6">
      <div className="max-w-lg mx-auto py-4 space-y-2">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        const bgColor = bgColors[index % bgColors.length]; // Safe for longer lists too

        return (
          <div key={index} className=" overflow-hidden">
            <button
              className={`w-full px-4 py-3 flex justify-between rounded-[20px] items-center text-left font-normal hover:opacity-90 ${bgColor}`}
              onClick={() => toggle(index)}
            >
              <span>{item.title}</span>
              <span
    className={`transform transition-transform duration-300 ${
      isOpen ? 'rotate-180' : ''
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="7"
      viewBox="0 0 14 7"
      fill="none"
    >
      <path
        d="M1.71978 0.939941L6.06645 5.28661C6.57978 5.79994 7.41978 5.79994 7.93312 5.28661L12.2798 0.939941"
        stroke="black"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden px-0 text-gray-700 ${
                isOpen ? 'max-h py-0' : 'max-h-0 py-0'
              }`}
            >
              <div>{item.content}
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
      
    </>
  );
}
