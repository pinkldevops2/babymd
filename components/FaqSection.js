import React, { useState } from "react";
import Image from "next/image";
import beehive4 from "@/app/assets/beehive4.png";

const FaqSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (<div>
    <div className="bg-[#E1F5FF] px-6 py-10 md:p-12 mb-0 md:mb-12 w-full">
      <div className="mb-4 relative">
        <h2 className="text-[28px] leading-[30px] font-semibold">
          Some of the questions <br />
          <span className="text-[#4B3A8F] font-bold">parents really ask<br/>us</span>
          <span className="spansidecour text-[#4B3A8F]">(a lot!)</span>
        </h2>
        <Image
                              src={beehive4}
                              alt="Bee"
                              width={33}
                              height={30}
                              className="absolute right-[0px] top-[0px]"
                            />
      </div>

      <p className="text-[#2E2E2E] text-lg md:text-xl leading-relaxed font-medium mb-4 mt-4">
        Got questions about midnight fevers, first foods, routine vaccines,
        tricky rashes, or curious growth spurts? We&apos;re here to guide you through
        every question—no judgment, just answers you can rely on.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="overflow-hidden border border-[#91CFDA80] rounded-[15px]"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={`flex justify-between items-center w-full text-left p-4 ${
                  isOpen ? "bg-[#F9EEB6]" : "bg-[#E1F5FF]"
                } cursor-pointer border-b-[1px] border-[#91CFDA80]`}
              >
                <span
                  className={`text-[#2E2E2E] text-sm ${
                    isOpen ? "font-bold" : "font-medium"
                  }`}
                >
                  {faq.question}
                </span>
                <svg
                  className={`min-w-[20px] h-[20px] p-[2px] rounded-full text-[#2E2E2E] transition-transform ${
                    isOpen ? "rotate-180 bg-[#E2B40E]" : "bg-[#91CFDA]"
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
                <div className="p-4 bg-[#F9EEB6] border-t-[1px] border-[#91CFDA80]">
                  <p className="text-[#2E2E2E] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div></div>
  );
};

export default FaqSection;