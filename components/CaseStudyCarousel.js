'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import SuperDocButton from './SuperDocButton';
import SubHeading from './SubHeading';
import beehive_22a from "@/app/assets/beehive_22a.png";

const CaseStudyCarousel = ({ caseStudies }) => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 1.3,
          spacing: 16,
        },
      },
    },
  });

  return (
    <div className="bg-[#FDF8DB] pt-6 pb-6 px-6 md:px-4 flex flex-col md:flex-row rounded-2xl">
          {/* Heading */}
          <div className="text-[#231F20] pt-6 pb-6 md:w-1/2">
            <div className='relative'>
            <SubHeading
            mainText={<>Parenting</>}
            subText={<><i>unplugged!</i></>}
          />
            <Image
                src={beehive_22a}
                width={35}
                height={36}
                className='absolute top-[-15px] right-0'
                />
            </div>
            <p className="mt-2 text-[#231F20] fade-in">
              Juggling work, family, and endless advice on parenting? We&apos;ve got
              you covered. Delve into our expert insights, practical tips, and
              the latest updates curated exclusively for you.
            </p>
          </div>
    <div className="relative rounded-2xl overflow-hidden bg-[#FDF8DB] md:pl-6 md:w-1/2">
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
            <div className="bg-[#FDF8DB] rounded-2xl w-full">
              <div className="relative h-[200px] w-full rounded-2xl">
                <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                className="object-cover max-h-[200px] fade-in"
                sizes="100vw"
                />
              </div>
              <div className="mt-3">
                <p className="text-[10px] font-bold text-[#EB5A44] uppercase font-baloo2 fade-in">
                  {caseStudy.category}
                </p>
                <p className="font-semibold text-[20px] leading-[25px] text-[#231F20] font-lato fade-in">
                  {caseStudy.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div><div className="flex justify-center pr-6">
            <SuperDocButton href="/superdoc" label="STAY INFORMED" className="my-5 fade-in" variant="purple"/>
          </div>
    </div>
    {/* CTA Button */}
          
        </div>
  );
};

export default CaseStudyCarousel;