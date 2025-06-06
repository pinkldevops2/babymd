'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import SuperDocButton from './SuperDocButton';
import SubHeading from './SubHeading';
import beehive4 from '@/app/assets/beehive4.png';

const ClinicCarousel = ({ clinics }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,
    slides: {
      perView: 1,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      setTotalSlides(slider.track.details.slides.length);
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 24,
        },
      },
    },
  });

  return (

    <div className='flex flex-col md:flex-row'>
      {/* HEADER SECTION */}
      <div className="bg-[#FFF5F5] p-6 md:py-12 md:px-6  md:w-1/2">
        <div className="max-w-2xl">
          <div className="relative">
            <SubHeading
              mainText={<>All of this,<br /></>}
              highlightText={<>just around</>}
              subText={<><i>the corner</i></>}
            />
            <Image
              src={beehive4}
              width={33}
              height={30}
              className="absolute right-[30px] top-[10px]"
              alt="beehive"
            />
          </div>
          <p className="leading-relaxed mt-4 fade-in">
            Late-night worries or last-minute scrambles shouldn&#39;t mean a long drive or endless queues. We&#39;re all about making care easy and accessible, so you can feel confident even on your toughest days. That&#39;s why our clinics are right in your neighborhood — cosy, colourful, and designed with your little one in mind. 

          </p>
          <p className="mb-2 fade-in">
            Call us, book online, or just walk in—we&apos;ll be ready.
          </p>
          <div className="relative hidden">
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

      {/* SLIDER SECTION */}
      <div className="bg-[#FFF5F5] p-6 md:py-12 md:px-6 pt-0  md:w-1/2">
        <div className="relative max-w-md mx-auto md:max-w-6xl rounded-2xl bg-white p-4">
          <div ref={sliderRef} className="keen-slider">
            {clinics.map((clinic, index) => (
  <div key={index} className="keen-slider__slide fade-in">
    <div className="relative w-full mb-6 rounded-xl overflow-hidden">
      <img
                    className="mx-auto rounded-[20px] min-h-[205px] object-cover"
                    src={clinic.image}
                    alt={clinic.title}
                  />
    </div>
    <div className="mb-4 px-4">
      <h4 className="text-[20px] font-[700] text-gray-800 mb-1 font-lato">
        {clinic.title}
      </h4>
      <div className='flex gap-2 pb-3'>
        <img src="/images/map-pin.svg" alt="Map pin" />
                      <h5 className="text-[14px] text-[#F8845D] underline uppercase underline-offset-[5px] tracking-[2px]">
                        <a href={clinic.location} target="_blank">locate clinic</a>
                      </h5>
      </div>
      {clinic.hours.map((hour, idx) => (
        <p key={idx} className="text-sm text-gray-600 font-baloo2">
          {hour.days}: {hour.time}
        </p>
      ))}
    </div>
  </div>
))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-[-20px] md:left-[-15px] p-2 top-3/4 z-10 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-[-20px] md:right-[-15px] p-2 top-3/4 z-10 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
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
          <SuperDocButton
            href="/clinic"
            label="VISIT YOUR NEAREST BABYMD"
            className="w-80 text-center fade-in"
            variant="pink"
          />
        </div>
      </div>
    </div>
  );
};

export default ClinicCarousel;