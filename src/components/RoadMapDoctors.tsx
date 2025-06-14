'use client';

import { useState, FC } from 'react';
import Image from 'next/image';
import GPCIcon from '../../public/images/serviceassets/gpc.png';
import Vaccinations from '../../public/images/serviceassets/vaccination.png';
import Dat from '../../public/images/serviceassets/dat.png';
import Ssc from '../../public/images/serviceassets/ssc.png';
import immunisationIcon from '../../public/images/Icon5.png';
import assessmentIcon from '../../public/images/Icon6.png';
import SubHeading from './SubHeading';
import SuperDocButton from './SuperDocButton2';
import SuperDocBtnSM from './SuperDocBtnSM';

// Type for each roadmap section
interface RoadmapSection {
  title: string;
  color: string;
  heading: string;
  icon: any;
  content: string[];
}

// Props for RoadMapDoctors
interface RoadMapDoctorsProps {
  onClick?: () => void;
}

const RoadMapDoctors: FC<RoadMapDoctorsProps> = ({ onClick }) => {
  const [openSection, setOpenSection] = useState<number>(0);

  const toggleSection = (index: number) => {
    setOpenSection((prev) => (prev === index ? -1 : index));
  };

  const roadmapData: RoadmapSection[] = [
    {
      title: 'General Pediatric Consultations',
      color: 'bg-[#5943A5]',
      heading: 'For all the everyday bumps',
      icon: GPCIcon,
      content: [
        "Whether it’s your baby’s first fever, a cranky tummy, or simply a growth check, our pediatricians offer gentle, thorough care without the long hospital waits. Come in any day of the week — we’re ready with expert advice and a warm smile.",
      ],
    },
    {
      title: 'Vaccinations',
      color: 'bg-[#7CB2BC]',
      heading: 'For all the everyday bumps',
      icon: Vaccinations,
      content: [
        "Whether it’s your baby’s first fever, a cranky tummy, or simply a growth check, our pediatricians offer gentle, thorough care without the long hospital waits. Come in any day of the week — we’re ready with expert advice and a warm smile.",
      ],
    },
    {
      title: 'Developmental Assessments and Therapies',
      color: 'bg-[#7CB367]',
      heading: 'For all the everyday bumps',
      icon: Dat,
      content: [
        "Whether it’s your baby’s first fever, a cranky tummy, or simply a growth check, our pediatricians offer gentle, thorough care without the long hospital waits. Come in any day of the week — we’re ready with expert advice and a warm smile.",
      ],
    },
    {
      title: 'Super Specialist Consultations',
      color: 'bg-[#E1556E]',
      heading: 'For all the everyday bumps',
      icon: Ssc,
      content: [
        "Whether it’s your baby’s first fever, a cranky tummy, or simply a growth check, our pediatricians offer gentle, thorough care without the long hospital waits. Come in any day of the week — we’re ready with expert advice and a warm smile.",
      ],
    },
  ];

  return (
    <div className="bg-white pl-6 pt-6 pr-6 pb-6">
      <div className="mx-auto">
        <div className="relative">
          <SubHeading
            mainText={'Comprehensive care, crafted for'}
            highlightText={<></>}
            subText={<>little humans</>}
          />
          <p className="pt-3 fade-in">
            At BabyMD, we believe healthcare for your tiny star should feel less like a task and more like a trusted hand guiding you — steady, joyful, and full of heart. That’s why we care for your child holistically, looking beyond symptoms to address the root cause and nurture their overall well-being.
          </p>
          <p className="pb-8 pt-3 fade-in">
            Because babies don’t wait for weekdays, we’re open on Sundays too, so expert care is always within reach when you need it most. Here’s how we walk this journey with you:
          </p>

          {roadmapData.map((section, index) => (
            <div key={index} className="relative mb-6">
              {index < roadmapData.length - 1 && (
                <div className="absolute left-6 top-8 w-0.5 h-full bg-purple-300"></div>
              )}

              <button
                onClick={() => toggleSection(index)}
                className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 cursor-pointer ${
                  openSection === index ? section.color : 'bg-white border-2 border-gray-200'
                }`}
              >
                <Image
                  src={section.icon}
                  alt={section.title}
                  width={24}
                  height={24}
                  className={`object-contain drop-shadow-sm transition-all duration-200 ${
                    openSection === index ? 'scale-110' : ''
                  }`}
                />
              </button>

              <div className="ml-16">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full ${section.color} text-white rounded-full px-6 py-3 flex items-center justify-between transition-all duration-200 hover:shadow-lg hover:scale-105`}
                >
                  <span className="font-medium text-left">{section.title}</span>
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openSection === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openSection === index && (
                  <div className="roadmap mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in slide-in-from-top-2 duration-200">
                    <h5>{section.heading}</h5>
                    {section.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="space-y-2">
                        <span className="text-gray-700 text-sm">{item}</span>
                      </p>
                    ))}
                    <SuperDocBtnSM
                      href=""
                      target="_self"
                      label="LEARN MORE"
                      variant="pink"
                      className="w-[100px] center mr-0 ml-auto mt-3"
                      textColor="#FFFFFF"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="pt-6 pb-6">
            <SuperDocButton
              onClick={onClick}
              label="Schedule your appointment"
              className="fade-in text-center uppercase w-[350px] mx-auto"
              variant="pink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMapDoctors;