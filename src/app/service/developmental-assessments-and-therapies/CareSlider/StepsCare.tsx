"use client";
import Image from "next/image";
import scheduleIcon1 from "../../../../../public/icons/gpc5.png";
import scheduleIcon2 from "../../../../../public/icons/gpc2.png";
import scheduleIcon3 from "../../../../../public/icons/gpc4.png";
import scheduleIcon4 from "../../../../../public/icons/gpc3.png";
import SubHeading from "../../../../components/SubHeading";
import arrow from "../../../../../public/images/Group 2349.png";
import SubHeading3 from "../../../../components/SubHeading3";
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
      content: `Based on the screening, we create a personalised therapy plan tailored to your child’s age and developmental stage — whether they’re 2 years, 3 years, or 5 years old. 

The plan includes the right mix of therapies, session durations, and weekly frequency. If a diagnosis is required (like Autism, ADHD, or special learning difficulties), we recommend detailed assessments.`,
    },
    {
      step: "Step 3",
      title: "Package and onboarding",
      bg: "#CDE6F3",
      icon: scheduleIcon3,
      content: `We walk you through a therapy package that fits your child’s needs. 

This may include ABA Therapy, Speech and Language Therapy, Sensory Integration Therapy, or group sessions focused on social skills and cognitive development. 
Everything is kept simple, flexible, and 
easy to begin.`,
    },
    {
      step: "Step 4",
      title: "Ongoing support and progress tracking",
      bg: "#DBFFCC",
      icon: scheduleIcon4,
      content: `Once therapy starts, we stay connected with you.  

Expect regular updates, reviews, and adjustments based on your child’s unique progress — whether it’s improving muscle tone, reading skills, language to learning transitions, or managing sensory issues.   

We support your child’s growth at their pace with you, every step of the way.`,
    },
  ];

  return (
    <div className="bg-white px-6 pt-6">
      <div className="px-0 py-4">
        <SubHeading3
          mainText={<>Care journey at</>}
          highlightText={<></>}
          subText={
            <>
              <i> BabyMD</i>
            </>
          }
        />
      </div>

        <div className="relative">
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
                <p className="font-normal block mb-2 text-[16px]">{item.step}</p>
                {item.title}
              </h2>
              <p className="whitespace-pre-line">{item.content}</p>
            </div>
          </div>
        ))}
      </div>


         <div className="flex justify-between items-center mb-4 absolute top-[50%] w-full">
        <button
          onClick={() => sliderInstanceRef.current?.prev()}
          className="p-2 rounded-full bg-[#f4df76] hover:bg-[#f4df76] transition relative left-[-15px]"
        >
           <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
        </button>

        <button
          onClick={() => sliderInstanceRef.current?.next()}
          className="p-2 rounded-full bg-[#f4df76] hover:bg-[#f4df76] transition relative right-[-15px]"
        >
          <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
        </button>
        
      </div>
     </div>

     
    </div>
  );
}