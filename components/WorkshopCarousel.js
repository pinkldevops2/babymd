'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';

const WorkshopCarousel = ({ workshops }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop:true,
    slides: {
      perView: 1.3,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative w-full mx-auto pl-6">
      <div ref={sliderRef} className="keen-slider">
        {workshops.map((workshop, index) => (
          <div key={index} className="keen-slider__slide min-w-[280px] md:min-w-[350px] pr-4">
            <div className="overflow-hidden">
              <div className="mb-4 pt-4">
                <h3 className="text-xl font-bold text-[#5943A5] mb-1 font-baloo2">
                  {workshop.title}
                </h3>
              </div>
              <div className="relative h-[192px] w-full">
                <Image
                  width={350}
                  height={192}
                  src={workshop.image}
                  alt={workshop.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute top-2 right-2 bg-[#5943A5] text-white text-xs p-1 rounded-md font-bold text-center w-[70px]">
                  <span className="text-base">{workshop.date.split(" ")[0]}</span>
                  <br />
                  <span className="text-[9px]">{workshop.date.split(" ").slice(1).join(" ")}</span>
                </div>
                <div className="absolute bottom-2 left-0 right-0 flex flex-wrap gap-1 px-2">
                  {workshop.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="border border-white bg-opacity-20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots / Pagination */}
      <div className="flex justify-center items-center mt-4 gap-2">
        {workshops.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-[#FC9127]' : 'bg-[#FFD6C6]'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default WorkshopCarousel;