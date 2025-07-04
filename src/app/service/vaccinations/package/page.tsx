"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import arrow from "../../../../../public/images/Group 2349.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SuperDocButton2 from "../../../../components/SuperDocButton2";
import Modal from "../../../../components/FormPopUp";
import BabyMDCampaignForm from "../../../../components/BabyMDCampaignForm";

gsap.registerPlugin(ScrollTrigger);

// Define allowed durations
type DurationKey =
  | "6 Week - 14 Week"
  | "6 Month - 1 Year"
  | "1 - 2 Years"
  | "10 - 12 Years";

// Package type
interface Package {
  name: string;
  price: number;
  originalPrice: number;
  features: string[];
}

export default function Package() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] =
    useState<DurationKey>("6 Week - 14 Week");
  const pathRef = useRef<SVGPathElement | null>(null);

  const durationOptions: DurationKey[] = [
    "6 Week - 14 Week",
    "6 Month - 1 Year",
    "1 - 2 Years",
    "10 - 12 Years",
  ];

  const packagesByDuration: Record<DurationKey, Package[]> = {
    "6 Week - 14 Week": [
      {
        name: "Value Package",
        price: 15819,
        originalPrice: 17577,
        features: ["Easy Six", "Pneumoshield 14", "Rotavac"],
      },
      {
        name: "Premium Package",
        price: 28780,
        originalPrice: 29754,
        features: ["Hexaxim", "Prevenar", "Rotosiil"],
      },
    ],
    "6 Month - 1 Year": [
      {
        name: "Value Package",
        price: 22403,
        originalPrice: 24893,
        features: [
          "Typbar",
          "Fluquadri",
          "Tresivac",
          "Menactra",
          "Biovac A and Jeev",
        ],
      },
      {
        name: "Premium Package",
        price: 23598,
        originalPrice: 26051,
        features: [
          "Typbar",
          "Influvac Tetra",
          "Tresivac",
          "Menactra",
          "Havrix 720 and Jenvac",
        ],
      },
    ],
    "1 - 2 Years": [
      {
        name: "Value Package",
        price: 14650,
        originalPrice: 16279,
        features: ["Varilrixl", "Pentaxim", "Jeev and Biovac A"],
      },
      {
        name: "Premium Package",
        price: 15689,
        originalPrice: 17095,
        features: ["Nexipox", "Havrix 720", "Pentaxim and Jenvac"],
      },
    ],
    "10 - 12 Years": [
      {
        name: "Value Package",
        price: 10995,
        originalPrice: 12216,
        features: ["HPV Gardasil 4"],
      },
      {
        name: "Premium Package",
        price: 23456,
        originalPrice: 26061,
        features: ["HPV Gardasil 9"],
      },
    ],
  };

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
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="px-6">
        <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Big protection,{" "}
          <span className="text-[#4B3A8F]">
            <i className="relative z-[2] font-light whitespace-nowrap">
              smaller bill
              <div className="absolute z-[-1] left-[-5px] top-[-2px]">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[120px] h-auto overflow-visible"
                >
                  <path
                    ref={pathRef}
                    d="M121.568 3.34321C128.595..."
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

      <div className="mx-auto px-6 py-4">
        {/* Duration Dropdown */}
        <div className="relative bg-[#FF9A6C] rounded-[25px] mb-4">
          <button
            onClick={() => setIsDurationOpen(!isDurationOpen)}
            className="w-full text-white text-center text-[16px] bg-[#D06433] py-4 px-4 rounded-full flex justify-center items-center gap-x-2"
          >
            <span className="text-[16px] leading-[20px] font-bold">
              Duration
            </span>
            <svg
              className={`absolute right-[20px] bg-white rounded-[50px] w-4 h-4 transform transition-transform duration-200 ${
                isDurationOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="#D06433"
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
            <div className="absolute top-[47px] left-0 right-0 bg-[#D9D9D9] rounded-[20px] lg:rounded-xl shadow-lg border border-gray-200 z-10 mt-1">
              {durationOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedDuration(option);
                    setIsDurationOpen(false);
                  }}
                  className="w-full px-4 lg:px-6 py-3 text-sm lg:text-base text-gray-800 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-center border-b border-[#5943A5] last:border-0"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          <div className="text-center py-7 px-4 text-white text-[16px]">
            {selectedDuration}
          </div>
        </div>

        {/* Dynamic Packages */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {packagesByDuration[selectedDuration]?.map((pkg, index) => (
            <div
              key={index}
              className="relative bg-[#DDD0FF73] rounded-t-[25px] rounded-b-[10px] pb-0"
            >
              <div
                className={`w-full text-white text-center text-[16px] py-4 px-4 rounded-full ${
                  pkg.name === "Value Package" ? "bg-[#67AFBC]" : "bg-[#76A861]"
                }`}
              >
                {pkg.name}
              </div>
              <div className="text-center py-3 rounded-lg lg:rounded-xl">
                <div className="flex justify-center items-baseline space-x-2">
                  <span className="text-[16px] text-[#5943A5]">
                    <i>₹{pkg.price.toLocaleString()}</i>
                  </span>
                  <span className="text-[16px] text-black line-through">
                    ₹{pkg.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
              <div
                className={`text-white py-4 px-2 text-[12px] min-h-[80px] flex items-center rounded-2xl mx-2 ${
                  pkg.name === "Value Package" ? "bg-[#67AFBC]" : "bg-[#76A861]"
                }`}
              >
                <i>{pkg.features.join(", ")}</i>
              </div>
            </div>
          ))}
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

        {/* CTA */}
        <div className="flex justify-center pt-6">
          {/* <button
            type="button"
            className="flex items-center justify-center gap-3 px-8 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
          >
            <span className="uppercase tracking-[2px] text-sm">
              Get your vaccine package
            </span>
            <Image src={arrow} alt="Arrow" width={20} height={10} />
          </button> */}

          <SuperDocButton2
            onClick={() => setIsModalOpen(true)}
            label="Get your vaccine package"
            className="w-80 text-center fade-in uppercase"
            variant="pink"
          />

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            mainText={<>Contact for Your </>}
            highlightText={<span> Child&#39;s </span>}
            subText={<i>Immunisation</i>}
          >
            <BabyMDCampaignForm formID="services-vaccination-package" />
          </Modal>
        </div>
      </div>
    </>
  );
}
