'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import SuperDocButton from './SuperDocButton';
import bluebtnarrow from "@/app/assets/btnBluearrow.png";
import cloudtext from "@/app/assets/cloud.png";
import next_bees_sleeping from "@/app/assets/next_bees_sleeping.png";
import beehive2 from "@/app/assets/beehive2.png";
import beehive_cloud from "@/app/assets/beehive_cloud.png";
import keerthana from "@/app/assets/keerthana.png";
import ContactSubC from './anime/ContactSubC';

const testimonials = [
  {
    id: 1,
    text: `"I went for my baby’s vaccination and the experience was smooth and delightful. They even offered a discount — something I haven’t seen at any other pediatric clinic in HSR! Definitely the best option for pediatric consultations."`,
    name: "Naval Baheti",
    image: keerthana,
  },
  {
    id: 2,
    text: `“Dr. Anjana is one of the best pediatricians in Electronic City. I took my 3-year-old son to her for a severe cough and cold. She patiently listened to all our concerns, examined him carefully, and prescribed safe, effective medication. Within two to three days, he was back to normal. We’re very happy and grateful to BabyMD.”`,
    name: "Eswaramoorthy Sakthivel",
    image: keerthana,
  },
  {
    id: 3,
    text: `"We visited BabyMD in Varthur, Bengaluru, for our child’s vaccinations, and Dr Anamika Krishnan was amazing! The way she handled our baby — with such care and professionalism — was truly impressive. I can confidently say Dr Anamika Krishnan is one of the best paediatricians in Bengaluru. We highly recommend BabyMD for all your child’s healthcare needs."`,
    name: "Ajay Antony",
    location: "BabyMD Varthur",
    image: keerthana,
  }
];

const CloudTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { 
      perView: 1.2,
      spacing: 16 
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 1.2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
      "(min-width: 1280px)": {
        slides: {
          perView: 2.2,
          spacing: 16,
        },
      },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 4000000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div className="bg-[#E1F5FF] text-[#4B3A8F] relative z-2">
      <Image
        src={next_bees_sleeping}
        alt="Bee Animation"
        width={152}
        height={152}
        className="absolute right-[40px] top-[-120px] swing"
      />
      <Image
        src={beehive2}
        alt="Beehive Animation"
        width={36}
        height={36}
        className="absolute right-[50px] top-[80px]"
      />  
      <Image
        src={beehive_cloud}
        alt="Cloud Animation"
        width={56}
        height={59}
        className="absolute right-[70px] top-[410px]"
      />        
      {/* Heading */}
      <h2 className="text-[28px] leading-[32px] font-bold mb-2 px-6 md:px-6 fade-in">
        Heartfelt stories from  <span className="text-[#5943A5]">parents </span>
        <span className="text-[#5943A5] italic font-medium relative circling_around2 adjusters">
          <i className="relative z-5">like you </i>
          <ContactSubC />
        </span>{" "}
        for it
      </h2>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-6">
        {/* Optional SVG/Images for decoration */}
      </div>

      <div className="testimonial-cloud-slider">
        {/* Testimonial Box */}
        <div className="relative w-full mx-auto">
          <div ref={sliderRef} className="keen-slider cloudtestimonial mt-10">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="keen-slider__slide mt-4 relative px-6 w-80 z-2 cloud-img_slider"
              >
                <p className="fade-in text-sm relative leading-relaxed text-gray-800 cloud-testimonial-pera max-h-[140px] overflow-y-auto">
                  {item.text}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden fade-in">
                    <Image src={item.image} width={36} height={36} alt={item.name}/>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EB5A44] text-sm fade-in">{item.name}</p>
                    <p className="italic text-[#4B3A8F] text-xs fade-in">{item.location}</p>
                  </div>
                </div>

                <div className="flex items-center justify-start mt-5 mb-6">
                  <button className="hidden text-xs font-semibold text-[#4B3A8F] flex items-center underline underline-offset-[3px]">
                    SEE VIDEO
                    <span className="ml-1 text-xs">
                      <Image
                        src={bluebtnarrow}
                        alt="Blue Arrow"
                        className="w-full min-w-[15px]"
                      />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation and Pagination */}
          <div className="flex justify-between items-center mt-6 px-3">
            <button
              onClick={() => slider.current?.prev()}
              className="p-2 rounded-full bg-[#5943A5] hover:bg-[#4B2EB6] transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => slider.current?.moveToIdx(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? "bg-[#4B3A8F]" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => slider.current?.next()}
              className="p-2 rounded-full bg-[#5943A5] hover:bg-[#4B2EB6] transition"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-[0px] px-6 invisible">
          <SuperDocButton href="#" label="SEE MORE REVIEWS" className="w-60 text-center" variant="purple"/>
        </div>
      </div>
    </div>
  );
};

export default CloudTestimonials;