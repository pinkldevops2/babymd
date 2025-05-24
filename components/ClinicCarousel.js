'use client';
import React, { useRef, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

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

  return (
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
        <button className="flex items-center bg-[#F9825F] hover:bg-[#f86f47] text-white font-bold py-5 px-10 rounded-full text-sm tracking-wide transition-transform duration-300 transform hover:scale-105">
          VISIT YOUR NEAREST BABYMD
          <span className="text-white text-base ml-2">
            <svg width="25" height="18" viewBox="0 0 79 63" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M56.1238 31.7983L14.6527 58.7715L14.6527 4.82511L56.1238 31.7983Z" fill="white" />
              <path d="M78.7151 31.7983L37.244 58.7715L37.244 4.82511L78.7151 31.7983Z" fill="white" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ClinicCarousel;