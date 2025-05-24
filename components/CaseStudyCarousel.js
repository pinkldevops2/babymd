'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

const CaseStudyCarousel = ({ caseStudies }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.3,
      spacing: 16,
    },
  });

  return (
    <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-[#FDF8DB] pl-6">
      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-[20px] bottom-3 z-10 bg-[#F4DF76] rounded-full p-2 shadow-md"
      >
        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-[20px] bottom-3 z-10 bg-[#F4DF76] rounded-full p-2 shadow-md"
      >
        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Content */}
      <div ref={sliderRef} className="keen-slider p-0">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="keen-slider__slide pb-12">
            <div className="bg-[#FDF8DB] rounded-2xl w-full">
              <div className="relative h-[200px] w-full rounded-2xl">
                <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover max-h-[200px]"
                sizes="100vw"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCarousel;