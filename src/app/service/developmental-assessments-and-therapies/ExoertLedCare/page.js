"use client";
import React, { useState } from "react";


const options = [
  { 
    value: 'Expert-led care',
    label: 'Expert-led care',
    message: (
  <>
    <ul>
      <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
      <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      <li className="list-disc text-[16px] leading-[20px] mb-3">One team, one plan — doctors, therapists, and counsellors work together on individual education plans (IEPs) and age-appropriate goals for 2-year-olds, 3-year-olds, 4-year-olds, and beyond</li>
    </ul>
    
  </>
)
  },
  { value: 'Always accessible',
    label: 'Always accessible',
    message: 
    (
    <>
      <ul>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      </ul>
      
    </>
  )
  },
  { value: 'Safe, transparent spaces',
    label: 'Safe, transparent spaces',
    message: 
    (
    <>
      <ul>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      </ul>
      
    </>
  )
  },
 
  { value: 'Clarity at every step',
    label: 'Clarity at every step',
    message: 
    (
    <>
      <ul>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      </ul>
      
    </>
  )
  },
   { value: 'Parents are our partners',
    label: 'Parents are our partners',
    message: 
    (
    <>
      <ul>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      </ul>
      
    </>
  )
  },
  { value: 'Therapy that kids look forward to',
    label: 'Therapy that kids look forward to',
    message: 
    (
    <>
      <ul>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Developmental paediatrician guiding the care plan and addressing root causes like ADHD, Autism, or specific learning difficulty </li>
        <li className="list-disc text-[16px] leading-[20px] mb-3">Experienced, qualified therapists trained to work with children across needs — including motor skills, speech issues, and language development </li>
      </ul>
      
    </>
  )
  },
];


export default function LedCare() {

  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };


  return (
    <div className="px-6 py-4 bg-white ">
      <div className="w-full relative border-2 border-[#5943A5] rounded-[20px]">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center border border-[#D9D9D9] rounded-[20px] px-4 py-5 bg-[#D9D9D9] text-left focus:outline-none"
        >
          <span className="text-[34px] leading-[34px] text-[#5943A5] font-bold font-baloo2 ">{selected ? selected.label : '-- Select --'}</span>
          <svg
            className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <ul className="absolute z-20 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleSelect(option)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected && (
        <div className="px-6 py-4">
          {selected.message}
        </div>
      )}
    </div>
    </div>
  );
}
