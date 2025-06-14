"use client";
import Image from "next/image";
import { useState } from "react";
import SubHeading from "../../../../components/SubHeading";
import arrow from "../../../../../public/images/Group 2349.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Package() {
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState("6 Week - 14 Week");


  const durationOptions = [
    "6 Week - 14 Week",
    "2 Month - 6 Month",
    "6 Month - 12 Month",
    "1 Year - 2 Year",
  ];



  const pathRef = useRef(null);

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
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%", // adjust as needed
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="px-6">
         <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Big protection, {" "}
          <span className=" text-[#4B3A8F]">
            {" "}
            <i className="relative z-[2] font-light whitespace-nowrap">
              smaller bill
              <div className="absolute z-[-1] left-[-5px] top-[-2px]">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[120px] h-auto overflow-visible "
                >
                  <path
                    ref={pathRef}
                    d="M121.568 3.34321C128.595 1.22728 135.508 2.63465 142.352 3.46C151.996 4.62557 161.445 6.4882 170.525 9.34237C177.399 11.5028 184.148 13.8816 189.774 17.7579C195.206 21.5027 193.811 26.387 188.935 29.429C181.83 33.8654 173.241 35.8097 164.524 37.338C159.824 38.1632 155.118 38.9742 150.381 39.648C145.656 40.3171 140.899 40.8395 136.143 41.3383C134.983 41.4628 133.766 41.2515 133.107 41.2218C131.651 41.4711 130.636 41.6422 129.627 41.8227C128.093 42.0913 126.363 42.0768 124.973 42.0984C122.917 42.133 120.837 43.3609 118.57 42.265C117.715 41.8529 116.05 42.5294 114.744 42.6215C111.408 42.8618 108.065 43.069 104.722 43.2619C101.137 43.4656 97.547 43.7262 93.9556 43.7926C91.7971 43.8325 89.6364 43.4558 87.4714 43.4246C85.8447 43.4002 84.2138 43.7308 82.5872 43.7205C79.9325 43.7062 77.2829 43.4883 74.6282 43.4645C72.935 43.4498 71.1118 43.9946 69.5681 43.6666C65.5182 42.8122 61.4454 43.3263 57.3991 43.1442C52.4577 42.9242 47.5097 42.6096 42.5972 42.1291C31.5923 41.056 20.5274 40.0684 10.3426 36.2874C8.37353 35.5545 6.46338 34.5372 4.9151 33.3428C-0.0394794 29.5103 0.991291 24.3533 6.96864 21.5233C15.0028 17.7211 23.8076 15.5579 32.8821 14.0939C44.5243 12.2139 56.2529 10.6553 67.9197 8.86037C78.8434 7.17826 89.8623 6.33843 100.97 6.3362C106.098 6.33735 111.222 6.77413 116.351 7.04516C116.902 7.07538 117.429 7.31405 117.968 7.45796C117.987 7.5999 118.025 7.88379 118.025 7.88379"
                    fill="none"
                    stroke="#F8845D"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </i>
          </span>
        </h2>

        <p className="text-[16px] text-black text-xs mb-4 mt-2">
          Stay ahead of your baby&#39;s vaccine schedule with our pre-purchase
          packages and big savings.
        </p>
      </div>

      <div className="mx-auto px-6 py-4 ">
        {/* Title Section */}

        {/* Duration Section */}
        <div className="relative bg-[#DDD0FF73] rounded-t-[25px] rounded-b-[10px]">
          <button
            onClick={() => setIsDurationOpen(!isDurationOpen)}
            className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full flex justify-center items-center gap-x-2"
          >
            <span className="text-[16px] leading-[20px] font-bold">
              Duration
            </span>
            <svg
              className={`absolute right-[20px] bg-white rounded-[50px] w-4 h-4 transform transition-transform duration-200 ${
                isDurationOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="#5943A5"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDurationOpen && (
            <div className="absolute top-[125px] left-0 right-0 bg-white rounded-lg lg:rounded-xl shadow-lg border border-gray-200 z-10 mt-1">
              {durationOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedDuration(option);
                    setIsDurationOpen(false);
                  }}
                  className="w-full text-left px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base text-gray-800 hover:bg-gray-50 first:rounded-t-lg first:lg:rounded-t-xl last:rounded-b-lg last:lg:rounded-b-xl"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <div className="text-center py-7  px-4 text-[#2E2E2E] text-[16px]">
            {selectedDuration}
          </div>
        </div>

        {/* Value Package */}
        <div className="relative bg-[#DDD0FF73] rounded-t-[25px] rounded-b-[10px] pb-8">
          <div className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full">
            Value Package
          </div>
          <div className="text-center py-3  rounded-lg lg:rounded-xl">
            <div className="flex justify-center items-baseline space-x-2">
              <span
                className="text-[16px] text-[#5943A5]"
                style={{ color: "#5943A5" }}
              >
                <i>₹15,819</i>
              </span>
              <span className="text-[16px] text-black line-through">
                ₹17,577
              </span>
            </div>
          </div>
          <div className="text-white text-center bg-[#8B7DB8] text-[16px] py-4  px-3 rounded-2xl text-xs  mx-8 ">
            <i>Easy Six, Pneumoshield 14%, and Rotavac</i>
          </div>
        </div>

        {/* Premium Package */}
        <div className="relative bg-[#DDD0FF73] rounded-t-[25px] rounded-b-[10px] pb-8">
          <div className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full">
            Premium Package
          </div>
          <div className="text-center py-3  rounded-lg lg:rounded-xl">
            <div className="flex justify-center items-baseline space-x-2">
              <span className="text-[16px] text-[#5943A5]">
                <i>₹28,780</i>
              </span>
              <span className="text-[16px] text-black line-through">
                ₹29,754
              </span>
            </div>
          </div>
          <div className="text-white text-center bg-[#8B7DB8] py-4  px-3 text-[16px] rounded-2xl mx-8 ">
            <i>Hexaxim, Prevenar, and Rotosill</i>
          </div>
        </div>

        {/* Bullet Points */}
        <div className="py-4 px-4">
          <ul className="list-disc text-[16px]">
            <li>No repeated payments or billing</li>
            <li>Just show up — everything&#39;s already taken care of</li>
          </ul>
        </div>

        {/* Footer Text */}
        <p className="text-[16px] pb-4">
          Because when it comes to your baby&#39;s health, planning ahead should
          come with perks.
        </p>
        <div className="flex justify-center pt-6">
          <button
            type="button"
            className="flex items-center justify-center gap-3 px-8 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
          >
            <span className="uppercase tracking-[2px] text-sm">
              Get your vaccine package
            </span>
            <Image src={arrow} alt="Arrow" width={20} height={10} />
          </button>
        </div>
      </div>
    </>
  );
}
