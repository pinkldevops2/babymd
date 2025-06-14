'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import beehive4 from '@/app/assets/beehive4.png';

const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  // Default FAQ data if faqs prop is not provided
const defaultFaqData = [
  {
    question: 'What vaccinations do you provide?',
    answer: 'We offer all recommended childhood and travel-related vaccines.',
  },
  {
    question: 'Are vaccines administered by doctors?',
    answer: 'Yes, all vaccines are given by qualified doctors or trained medical staff.',
  },
  {
    question: 'Do you offer needle-free options?',
    answer: 'Yes, needle-free vaccines are available for certain age groups and vaccines.',
  },
  {
    question: 'Can I get a vaccination schedule for my child?',
    answer: 'Yes, we can provide a customized vaccination schedule based on age and health needs.',
  },
  {
    question: 'Do you offer vaccination packages?',
    answer: 'Yes, we have convenient vaccination packages for different age groups.',
  },
  {
    question: 'Are combination vaccines safe?',
    answer: 'Yes, combination vaccines are safe and reduce the number of injections needed.',
  },
  {
    question: 'Can my child be vaccinated during a mild illness?',
    answer: 'Yes, mild illnesses like a cold or low-grade fever usually don’t prevent vaccination.',
  },
  {
    question: 'What are common side effects of vaccines?',
    answer: 'Mild fever, swelling, or redness at the injection site are common and temporary.',
  },
  {
    question: 'How do I prepare my child for a vaccine visit?',
    answer: 'Keep your child calm, explain the process simply, and bring their health records.',
  },
];


  // Use the faqs prop if provided, otherwise use defaultFaqData
  const faqData = faqs || defaultFaqData;

  return (
    <div className="bg-[#E1F5FF] px-6 py-10 md:p-12 w-full">
      {/* Heading Section */}
      <div className="mb-4 relative">
        <h2 className="text-[28px] leading-[30px] font-semibold text-[#2E2E2E]">
          Some of the questions <br />
          <span className="text-[#4B3A8F] font-bold">
            parents really ask<br />us
          </span>
          <span className="text-[#4B3A8F] text-lg"> (a lot!)</span>
        </h2>
        <Image
          src={beehive4}
          alt="Bee"
          width={33}
          height={30}
          className="absolute right-0 top-0"
        />
      </div>

      {/* Description */}
      

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-[#91CFDA80] rounded-[15px] overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full text-left p-4 transition-colors ${
                  isOpen ? 'bg-[#F9EEB6]' : 'bg-[#E1F5FF]'
                } border-b border-[#91CFDA80]`}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className={`text-[#2E2E2E] text-sm md:text-base ${
                    isOpen ? 'font-bold' : 'font-medium'
                  }`}
                >
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 p-1 rounded-full text-[#2E2E2E] transition-transform ${
                    isOpen ? 'rotate-180 bg-[#E2B40E]' : 'bg-[#91CFDA]'
                  }`}
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
              </button>
              {isOpen && (
                <div
                  id={`faq-answer-${index}`}
                  className="p-4 bg-[#F9EEB6] border-t border-[#91CFDA80]"
                >
                  <p className="text-[#2E2E2E] text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;