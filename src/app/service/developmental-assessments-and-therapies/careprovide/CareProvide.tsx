"use client";
import Image from "next/image";
import { useState } from "react";
import arrow from "../../../../../public/images/Group 2349.png";
import SickVisitIcon from "public/icons/vaccination4.png";
import SickVisitIcon2 from "public/icons/vaccination6.png";
import SickVisitIcon3 from "public/icons/gpc5.png";
import SickVisitIcon4 from "public/icons/gpc11.png";
import SickVisitIcon5 from "public/icons/vaccination5.png";
import SickVisitIcon6 from "public/icons/gpc2.png";

import devserviceimg from "../../../../../public/images/serviceassets/devservice1.png";
import devserviceimg2 from "../../../../../public/images/serviceassets/devservice2.png";
import devserviceimg6 from "../../../../../public/images/serviceassets/devservice6.png";
import devserviceimg3 from "../../../../../public/images/serviceassets/devservice3.png";
import devserviceimg4 from "../../../../../public/images/serviceassets/devservice4.png";
import devserviceimg5 from "../../../../../public/images/serviceassets/devservice5.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

const accordionData: AccordionItem[] = [
  {
    title: "Expert-led care",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#DDD0FF] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Expert-led care
              </h3>
            </div>
            <div>
              <p>
                Developmental paediatrician guiding the care plan and addressing
                root causes like ADHD, Autism, or specific learning difficulty
                <br />
                <br />
              </p>
              <p>
                Experienced, qualified therapists trained to work with children
                across needs — including motor skills, speech issues, and
                language development
                <br />
                <br />
              </p>
              <p>
                One team, one plan — doctors, therapists, and counsellors work
                together on individual education plans (IEPs) and
                age-appropriate goals for 2-year-olds, 3-year-olds, 4-year-olds,
                and beyond
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Always accessible",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#FF9A6C] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg2}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon2}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Always accessible
              </h3>
            </div>
            <div>
              <p>
                Open Monday to Saturday with flexible slots to suit your
                schedule — ideal for working parents and children with special
                needs
                <br />
                <br />
              </p>
              <p>
                Easy to book, reschedule, and coordinate with our care manager
                team
                <br />
                <br />
              </p>
              <p>
                Multiple specialties and therapy types — like Sensory
                Integration, Speech-Language Therapy, and special education —
                under one roof
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Safe, transparent spaces",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#F9EEB6] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg3}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon3}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Safe, transparent spaces
              </h3>
            </div>
            <div>
              <p>
                CCTV-monitored therapy rooms so you always feel secure
                <br />
                <br />
              </p>

              <p>
                Clean, child-friendly environments designed to feel playful and
                calm — especially important for kids with sensory modulation or
                primitive reflexes challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Clarity at every step",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#DBFFCC] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg4}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon4}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Clarity at every step
              </h3>
            </div>
            <div>
              <p>
                Personalised therapy plans based on in-depth developmental
                assessments
                <br />
                <br />
              </p>
              <p>
                Clear, easy-to-read progress reports shared regularly — tracking
                skills like reading, cognitive development, and muscle tone
                <br />
                <br />
              </p>
              <p>
                Structured reviews to track what’s working and what needs to
                shift
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Parents are our partners",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#CDE6F3] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg5}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon5}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Parents are our partners
              </h3>
            </div>
            <div>
              <p>
                Regular connects with parents and caregivers
                <br />
                <br />
              </p>
              <p>
                Guidance on what to do at home — from encouraging speech to
                supporting motor development
                <br />
                <br />
              </p>
              <p>
                Non-judgmental, emotionally supportive conversations, always
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Therapy that kids look forward to",
    content: (
      <div className="mx-auto py-2 px-0 pt-0 bg-white">
        <div className="grid grid-cols-1 mt-2 mb-0">
          {/* 1 - Sick Visits */}
          <div className="flex flex-col bg-[#FFD6C6] p-5 rounded-[15px]">
            <div className="mb-1 flex items-center justify-center w-full">
              <Image
                src={devserviceimg6}
                alt="Sick Visits"
                className="w-full max-h-45 object-cover object-top rounded-[15px]"
              />
            </div>
            <div className="flex justify-start items-center gap-4 py-4">
              <Image
                src={SickVisitIcon6}
                alt="Sick Visits"
                className="w-[50px]"
              />
              <h3 className="text-[28px] leading-[30px] font-bold  text-[#5943A5]">
                Therapy that kids look forward to
              </h3>
            </div>
            <div>
              <p>
                Play-based, engaging sessions that feel fun and rewarding,
                helping kids with language to learning transitions
                <br />
                <br />
              </p>

              <p>
                
                <ul className="pl-4">
                  <li className="list-disc mb-2">
                    Celebrating small wins, not just big milestones — whether
                    it’s speech start, better spelling, or growing confidence
                  </li>
                  <li className="list-disc mb-2">
                    A child-first environment that builds confidence, not
                    anxiety
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bgColors = [
  "bg-[#D7CCE2]",
  "bg-[#FF9A6C]",
  "bg-[#F9EEB6]",
  "bg-[#DBFFCC]",
  "bg-[#CDE6F3]",
  "bg-[#FFD6C6]",
];

export default function CareProvide() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="px-6">
        <div className="max-w-lg mx-auto py-4 space-y-2">
          {accordionData.map((item, index) => {
            const isOpen = openIndex === index;
            const bgColor = bgColors[index % bgColors.length]; // Safe for longer lists too

            return (
              <div key={index} className=" overflow-hidden">
                <button
                  className={`w-full px-4 py-3 flex justify-between rounded-[20px] items-center text-left font-normal hover:opacity-90 ${bgColor}`}
                  onClick={() => toggle(index)}
                >
                  <span className="w-full text-center">{item.title}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="7"
                      viewBox="0 0 14 7"
                      fill="none"
                    >
                      <path
                        d="M1.71978 0.939941L6.06645 5.28661C6.57978 5.79994 7.41978 5.79994 7.93312 5.28661L12.2798 0.939941"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden px-0 text-gray-700 ${
                    isOpen ? "max-h-[1000px] py-0" : "max-h-0 py-0"
                  }`}
                >
                  <div>{item.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
