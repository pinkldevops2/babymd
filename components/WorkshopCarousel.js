'use client';
import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import 'keen-slider/keen-slider.min.css';
import SuperDocButton from './SuperDocButton';
import beehive_22b from "@/app/assets/beehive_22b.png";

const WorkshopCarousel = ({ workshops }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop:true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (<div className="bg-opacity-80  space-y-4">
          {/* Heading */}
          <div className="text-[#6A58AD] px-6 pt-3">
            <div className='relative'>
            <h2 className="text-[28px] leading-[32px] font-bold">
              How about some <br />
              <span className="italic font-medium text-[#6A58AD]">
                <i>parenting tips</i>
              </span>
              , <span className="text-black">
                so you can skip
                the panic scroll?
              </span>
            </h2>
            <Image
                        /* sizes="100vw" */
                        src={beehive_22b}
                        width={37}
                        height={41}
                        className="absolute right-[90px] top-[-15px]"
                      />            
            </div>
            <p className="text-[16px] text-black mt-2 leading-[24px]">
              Ever wished parenting came with a guidebook? From picky eating to
              tantrums, we know you&apos;ve got questions. Join our expert-led
              webinars to get practical tips and expert answers to feel confident
              and supported in your parenting journey.
            </p>
          </div>
    <div className="relative w-full mx-auto pl-6">
      <div ref={sliderRef} className="keen-slider">
        {workshops.map((workshop, index) => (
          <div key={index} className="keen-slider__slide min-w-[280px] md:min-w-[350px] pr-4">
            <div className="overflow-hidden">
              <div className="mb-4 pt-4">
                <h3 className="text-[20px] leading-[25px] font-bold text-[#5943A5] mb-1 font-lato">
                  {workshop.title}
                </h3>
              </div>
              <div className="relative h-[192px] w-full">
                <Image
                  width={300}
                  height={260}
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
      <div className="flex justify-center items-center pt-2 mt-4 gap-2">
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
    </div><div className="flex justify-center pt-1">
                <SuperDocButton href="/superdoc" label="SAVE YOUR SPOT" className="mb-10 mt-0" variant="pink"/>
              </div>
            </div>
  );
};
export default WorkshopCarousel;