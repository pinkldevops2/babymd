'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import SuperDocButton from '../../../../components/SuperDocButton';
import SubHeading from '../../../../components/SubHeading';
import beehive_22a from "@/app/assets/beehive_22a.png";

const CaseStudyCarousel = ({ caseStudies }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
  });

  return (
    <div className="bg-white pt-6 pb-6 flex flex-col md:flex-row">
          {/* Heading */}
          <div className="text-[#231F20] p-6 md:w-1/2">
            <div className='relative'>
              <div className='pr-[40px]'>
                <SubHeading
                    mainText={<>Helpful reads for </>}
                    subText={<><i>confident parenting</i></>}
                  />
              </div>
            
            <Image
                src={beehive_22a}
                width={35}
                height={36}
                className='absolute top-[-15px] right-0'
                />
            </div>
            <p className="mt-2 text-[#231F20]">
              When it comes to raising happy, healthy kids, knowledge is powerful (and a little reassurance goes a long way). Read our blog to stay informed, confident, and ready for whatever parenthood throws your way.
            </p>
          </div>
    <div className="relative rounded-2xl overflow-hidden bg-white pl-6 md:w-1/2">
      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-[20px] bottom-[100px] z-10 bg-[#F4DF76] rounded-full p-2 shadow-md"
      >
        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-[20px] bottom-[100px] z-10 bg-[#F4DF76] rounded-full p-2 shadow-md"
      >
        <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slider Content */}
      <div ref={sliderRef} className="keen-slider p-0">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="keen-slider__slide pb-12">
            <div className="bg-white rounded-2xl w-full">
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
                <p className="font-semibold text-[20px] leading-[25px] text-[#231F20] font-lato">
                  {caseStudy.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div><div className="flex justify-center pr-6">
            <SuperDocButton href="/superdoc" label="STAY INFORMED" className="my-5" variant="purple"/>
          </div>
    </div>
    {/* CTA Button */}
          
        </div>
  );
};

export default CaseStudyCarousel;