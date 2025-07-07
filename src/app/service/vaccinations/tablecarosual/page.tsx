'use client';
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Import the new icons
import tablecarosualIcon1 from "../../../../../public/images/serviceassets/tablecarosualIcon1.png";
import tablecarosualIcon2 from "../../../../../public/images/serviceassets/tablecarosualIcon2.png";
import tablecarosualIcon3 from "../../../../../public/images/serviceassets/tablecarosualIcon3.png";

interface TableCardProps {
  heading?: string;
  body?: string;
  iconSrc?: any;
  iconWidth?: number;
  iconHeight?: number;
  headingClassName?: string;
  bodyClassName?: string;
}

const TableCard: React.FC<TableCardProps> = ({
  heading,
  body,
  iconSrc,
  iconWidth = 40,
  iconHeight = 48,
  headingClassName = "text-xl font-bold mb-2",
  bodyClassName = "text-lg font-semibold leading-relaxed",
}) => {
  // Container size (not used directly but could be used for styling logic)
  const containerWidth = iconWidth + 24;
  const containerHeight = iconHeight + 32;

  return (
    <div className="relative bg-[#D8FBCA] h-full text-gray-800 rounded-2xl p-10 shadow-md overflow-hidden keen-slider__slide">
      <div className="flex justify-between items-center h-full">
        {/* Text Section */}
        <div className="flex-1 pr-8">
          {heading && <h3 className={headingClassName}>{heading}</h3>}
          {body && <p className={bodyClassName}>{body}</p>}
        </div>

        {/* Icon Section */}
        {iconSrc && (
          <div className="flex-shrink-0">
            <Image
              src={iconSrc}
              alt="Facility icon"
              width={iconWidth}
              height={iconHeight}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

// Main carousel component
export default function Tablecarosual() {
  // State to track the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Keen-slider setup
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    instanceRef.current?.moveToIdx(index);
  };

  return (
    <div className="relative px-4">
      {/* Carousel container */}
      <div ref={sliderRef} className="keen-slider">
        {/* Card 1 */}
        <div className="20">
          <TableCard 
            heading="Timely and Trackable"
            body="From IAP-recommended to HPV and flu vaccines — all scheduled, explained, and gently given."
            iconSrc={tablecarosualIcon1}
            iconWidth={60}
            iconHeight={68}
            headingClassName="text-2xl font-bold mb-1" // Larger heading
            bodyClassName="text-lg leading-relaxed" // Smaller body
          />
        </div>

        {/* Card 2 */}
        <div>
          <TableCard 
            heading="Therapy Plans"
            body="Solving those tricky health puzzles with tailored care."
            iconSrc={tablecarosualIcon2}
            iconWidth={68}
            iconHeight={56}
            headingClassName="text-xl font-bold mb-2" // Medium heading
            bodyClassName="text-lg leading-relaxed" // Default body
          />
        </div>

        {/* Card 3 */}
        <div>
          <TableCard 
            heading="Health Check-Ups"
            body="In-clinic milestone evaluations with developmental pediatricians"
            iconSrc={tablecarosualIcon3}
            iconWidth={32}
            iconHeight={40}
            headingClassName="text-lg font-bold mb-2" // Smaller heading
            bodyClassName="text-lg leading-relaxed" // Smaller body
          />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
        <div className="p-2">
      <p>*Please consult our care managers to confirm if the needle-free option fits your child’s vaccination needs.</p>
        </div>
    </div>
  );
}