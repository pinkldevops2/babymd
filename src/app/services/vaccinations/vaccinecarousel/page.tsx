'use client';

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import Image, { StaticImageData } from 'next/image';
import 'keen-slider/keen-slider.min.css';
import vaccinecarouseal from '../../../../../public/images/serviceassets/vaccinecarouseal.png';

// Define the vaccine item type
interface Vaccine {
  name: string;
  image: any;
  age: string;
}

interface VaccineCarouselProps {
  vaccines?: Vaccine[];
}

// Sample vaccine data
const sampleVaccines: Vaccine[] = [
  {
    name: "MMR",
    image: vaccinecarouseal,
    age: "12-15 months",
  },
  {
    name: "DTaP",
    image: vaccinecarouseal,
    age: "2, 4, 6 months",
  },
  {
    name: "Hepatitis B",
    image: vaccinecarouseal,
    age: "Birth, 1-2 months",
  },
  {
    name: "Varicella",
    image: vaccinecarouseal,
    age: "12-15 months",
  },
];

const VaccineCarousel: React.FC<VaccineCarouselProps> = ({ vaccines = sampleVaccines }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1.2,
      spacing: 16,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="bg-opacity-80 space-y-4">
      {/* Carousel */}
      <div className="relative w-full mx-auto pl-7">
        <div ref={sliderRef} className="keen-slider">
          {vaccines.map((vaccine, index) => (
            <div key={index} className="keen-slider__slide min-w-[290px] md:min-w-[350px] pr-4">
              <div className="overflow-hidden">
                <div className="relative h-[240px] w-full imageoverlay">
                  <Image
                    width={260}
                    height={240}
                    src={vaccine.image}
                    alt={vaccine.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg">
                      Administered only by<br />doctors
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots / Pagination */}
        <div className="flex justify-center items-center pt-2 mt-4 gap-2">
          {vaccines.map((_, index) => (
            <button
              key={index}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-[#FC9127]' : 'bg-[#FFD6C6]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccineCarousel;