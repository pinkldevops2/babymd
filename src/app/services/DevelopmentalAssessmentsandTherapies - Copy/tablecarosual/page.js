'use client';
import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css";
import expert1 from "../../../../../public/images/serviceassets/expert1.png";
import expert2 from "../../../../../public/images/serviceassets/expert2.png";
import expert3 from "../../../../../public/images/serviceassets/expert3.png";
import expert4 from "../../../../../public/images/serviceassets/expert4.png";
import expert5 from "../../../../../public/images/serviceassets/expert5.png";
import expert6 from "../../../../../public/images/serviceassets/expert6.png";
import expert7 from "../../../../../public/images/serviceassets/expert7.png";


export default function ExpertSlider() {
 
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
 const timerRef = useRef(null)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
     perView: 1,
      spacing: 16,
     breakpoints: {
      "(min-width: 530px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 24,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  // Auto scroll every 5s
  useEffect(() => {
    if (instanceRef.current) {
      timerRef.current = setInterval(() => {
        instanceRef.current?.next()
      }, 5000)
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [instanceRef])

  const slides = [
    {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert1,
    },
     {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert2,
    },
     {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert3,
    },
    {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert4,
    },
    {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert5,
    },
    {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert6,
    },
    {
      title: 'Speech and Language Therapy',
      desc: `For children who speak late, struggle to express themselves, or have unclear speech, we work on improving language development, vocabulary, clarity, comprehension, and communication confidence.`,
      image: expert7,
    },
  ]


  return (
    <div className="px-6 py-4 bg-white">
     <div className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((item, index) => (
          <div className="keen-slider__slide" key={index}>
            <div className="bg-white rounded-[20px] border-2 border-[#5943A5] overflow-hidden">
              <div className="bg-[#F0CB46] rounded-t-2xl flex items-center justify-center relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-center w-full max-h-[150px]"
                />
              </div>
              <div className="py-2 px-3 mt-4">
                <h3 className="text-[18px] font-black leading-[20px] text-[#2E2E2E]">
                  <p>{item.title}</p>
                </h3>
                <p className="text-[16px] leading-[20px] font-normal text-[#2E2E2E] mb-3 mt-3">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      {loaded && instanceRef.current && (
        <div className="dots flex justify-center mt-4">
          {Array.from(
            { length: instanceRef.current.track.details.slides.length },
            (_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`mx-1 w-2 h-2 rounded-full ${
                  currentSlide === idx ? 'bg-[#5943A5]' : 'bg-gray-300'
                }`}
              />
            )
          )}
        </div>
      )}
    </div>
    </div>
  );
}