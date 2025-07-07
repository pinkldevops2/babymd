"use client";
import Image from "next/image";
import scheduleIcon1 from "../../../../../public/icons/gpc5.png";
import scheduleIcon2 from "../../../../../public/icons/gpc2.png";
import scheduleIcon3 from "../../../../../public/icons/gpc4.png";
import scheduleIcon4 from "../../../../../public/icons/gpc3.png";
import SubHeading from "../../../../components/SubHeading";
import arrow from "../../../../../public/images/Group 2349.png";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function autoplayPlugin(slider: any) {
  let timeout: any;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}

export default function StepsCare() {
  const sliderInstanceRef = useRef<any>(null);

  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: {
        perView: 1.4,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 768px)": {
          slides: { perView: 2.4, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 2.5, spacing: 24 },
        },
      },
      created(slider) {
        sliderInstanceRef.current = slider;
      },
    },
    [autoplayPlugin]
  );

  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.fromTo(
      path,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 3,
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);

  const slides = [
    {
      step: "Step 1",
      title: "First visit and initial screening",
      bg: "#FFD6C6",
      icon: scheduleIcon1,
      content: `Your journey begins with a warm, play-based screening rooted in early child development principles.

Our developmental pediatrician observes your child, listens to your concerns, and starts guiding you forward. 

If needed, our expert therapists join in for initial developmental assessments — covering motor skills, language development, and early signs of ADHD or Autism.`,
    },
    {
      step: "Step 2",
      title: "Personalised plan and assessments",
      bg: "#F9EEB6",
      icon: scheduleIcon2,
      content: `Based on the screening, we create a personalised therapy plan tailored to your child’s age and developmental stage — whether they’re 2 years, 
3 years, or 5 years old. 

The plan includes the right mix of therapies, session durations, and weekly frequency. If a diagnosis is required (like Autism, ADHD, or special learning difficulties), we recommend detailed assessments.`,
    },
    {
      step: "Step 3",
      title: "Package and Onboarding",
      bg: "#CDE6F3",
      icon: scheduleIcon3,
      content: `We walk you through a therapy package that fits your child’s needs. 

This may include ABA Therapy, Speech and Language Therapy, Sensory Integration Therapy, or group sessions focused on social skills and cognitive development. 
Everything is kept simple, flexible, and 
easy to begin.`,
    },
    {
      step: "Step 4",
      title: "Ongoing Support and Progress Tracking",
      bg: "#DBFFCC",
      icon: scheduleIcon4,
      content: `Once therapy starts, we stay connected with you.  

Expect regular updates, reviews, and adjustments based on your child’s unique progress — whether it’s improving muscle tone, reading skills, language to learning transitions, or managing sensory issues.   

We support your child’s growth at their pace with you, every step of the way.`,
    },
  ];

  return (
    <div className="bg-white px-6 pt-6">
      <div className="px-6 py-4">
        <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Care journey at{" "}
          <span className=" text-[#4B3A8F]">
            {" "}
            <i className="relative z-[2] font-light whitespace-nowrap">
              BabyMD
              <div className="absolute z-[-1] left-[-5px] top-[-2px]">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[100px] h-auto overflow-visible "
                >
                  <path
                    ref={pathRef}
                    d="M121.568 3.34321C128.595 1.22728 135.508 2.63465 142.352 3.46C151.996 4.62557 161.445 6.4882 170.525 9.34237C177.399 11.5028 184.148 13.8816 189.774 17.7579C195.206 21.5027 193.811 26.387 188.935 29.429C181.83 33.8654 173.241 35.8097 164.524 37.338C159.824 38.1632 155.118 38.9742 150.381 39.648C145.656 40.3171 140.899 40.8395 136.143 41.3383C134.983 41.4628 133.766 41.2515 133.107 41.2218C131.651 41.4711 130.636 41.6422 129.627 41.8227C128.093 42.0913 126.363 42.0768 124.973 42.0984C122.917 42.133 120.837 43.3609 118.57 42.265C117.715 41.8529 116.05 42.5294 114.744 42.6215C111.408 42.8618 108.065 43.069 104.722 43.2619C101.137 43.4656 97.547 43.7262 93.9556 43.7926C91.7971 43.8325 89.6364 43.4558 87.4714 43.4246C85.8447 43.4002 84.2138 43.7308 82.5872 43.7205C79.9325 43.7062 77.2829 43.4883 74.6282 43.4645C72.935 43.4498 71.1118 43.9946 69.5681 43.6666C65.5182 42.8122 61.4454 43.3263 57.3991 43.1442C52.4577 42.9242 47.5097 42.6096 42.5972 42.1291C31.5923 41.056 20.5274 40.0684 10.3426 36.2874C8.37353 35.5545 6.46338 34.5372 4.9151 33.3428C-0.0394794 29.5103 0.991291 24.3533 6.96864 21.5233C15.0028 17.7211 23.8076 15.5579 32.8821 14.0939C44.5243 12.2139 56.2529 10.6553 67.9197 8.86037C78.8434 7.17826 89.8623 6.33843 100.97 6.3362C106.098 6.33735 111.222 6.77413 116.351 7.04516C116.902 7.07538 117.429 7.31405 117.968 7.45796C117.987 7.5999 118.025 7.88379 118.025 7.88379"
                    fill="none"
                    stroke="#FFD25D"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </i>
          </span>
        </h2>
      </div>

      <div ref={sliderRef} className="keen-slider careslider pb-5">
        {slides.map((item, index) => (
          <div key={index} className="keen-slider__slide flex flex-col gap-4">
            {/* Clickable Icon */}
            <div
              onClick={() => sliderInstanceRef.current?.moveToIdx(index)}
              className="w-[45px] h-[50px] bg-[#C8E7EC] rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition"
            >
              <Image
                src={item.icon}
                alt={`icon${index + 1}`}
                className="w-[25px] h-[25px] object-contain"
              />
            </div>

            {/* Slide Content */}
            <div
              className="py-10 px-6 shadow-md rounded-lg h-full"
              style={{ backgroundColor: item.bg }}
            >
              <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F] mb-4">
                <i className="font-normal block mb-2">{item.step}</i>
                {item.title}
              </h2>
              <p className="whitespace-pre-line">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
