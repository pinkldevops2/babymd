'use client';
import React, { useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import SuperDocButton from './SuperDocButton';
import SubHeading from './SubHeading';
import beehive4 from '@/app/assets/beehive4.png';

const ClinicCarousel = ({ clinics }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      '(min-width: 1024px)': {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
  });

  return (<div>
    <div className="bg-[#FFF5F5] p-6 md:p-12 md:mb-12">
          <div className="max-w-2xl">
            <div className="relative">
            <SubHeading
            mainText={<>All of this,</>}
            highlightText={<>just<br/>around</>}
            subText={<><i>the corner</i></>}
          />
          <Image
            src={beehive4}
            width={33}
            height={30}
            className="absolute right-[30px] top-[10px]"
          />
          </div>
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
                className="w-full px-4 py-2 pl-10 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-[#4B3A8F]"
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
    <div className="bg-[#FFF5F5] p-6 md:p-12 pt-0 md:mb-12">
      <div className="relative max-w-md mx-auto md:max-w-6xl rounded-2xl bg-white p-4">
        <div ref={sliderRef} className="keen-slider">
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
              <div className="mb-4 px-4">
                <h4 className="text-[20px] font-[700] text-gray-800 mb-1 font-lato">
                  {clinic.name}
                </h4>
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

        {/* Navigation Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-[-15px] p-2 top-3/4 z-10 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-[-15px] p-2 top-3/4 z-10 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots OUTSIDE the card */}
      <div className="flex justify-center mt-6 gap-2">
        {Array.from({ length: instanceRef.current?.track.details.slides.length || 0 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              currentSlide === idx ? 'bg-[#FC9127]' : 'bg-[#FFD6C6]'
            }`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center items-center mt-6">
        <SuperDocButton href="/superdoc" label="VISIT YOUR NEAREST BABYMD" className="w-80 text-center" variant="pink"/>
      </div>
    </div>
    </div>
  );
};

export default ClinicCarousel;