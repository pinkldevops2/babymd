'use client'

import { useState } from 'react'
import Image from 'next/image'

// Import images from assets
import clinicIcon from '../public/images/Icon1.png' // Replace with actual icons
import diagnosticsIcon from '../public/images/Icon2.png' // Replace with actual icons
import specialitiesIcon from '../public/images/Icon3.png'
import therapyIcon from '../public/images/Icon4.png'
import immunisationIcon from '../public/images/Icon5.png'
import assessmentIcon from '../public/images/Icon6.png'
import SubHeading from './SubHeading';
import SuperDocButton from './SuperDocButton2';

const Roadmap = ({onClick}) => {
  const [openSection, setOpenSection] = useState(0) // First section open by default

  const toggleSection = (index) => {
    setOpenSection(prev => prev === index ? -1 : index) // Close if same section, otherwise open new one
  }

  const roadmapData = [
    {
      title: "Clinic Consultations",
      color: "bg-[#5943A5]",
      icon: clinicIcon,
      content: [
        "General Paediatric Consultations",
        "Lactation and Nutrition", 
        "Allergy and Asthma",
        "All Types of Infections/Viral Diseases"
      ]
    },
    {
      title: "Diagnostics",
      color: "bg-[#7CB2BC]",
      icon: diagnosticsIcon,
      content: [
        "Allergy Test",
        "Asthma Test",
        "PFT",
        "All Blood Tests"
      ]
    },
    {
      title: "Paediatric Superspecialities",
      color: "bg-[#7CB367]",
      icon: specialitiesIcon,
      content: [
        "Developmental and Behavioral Paediatrics",
        "Child Psychology and Therapies",
        "Paediatric Pulmonology",
        "Paediatric Endocrinology and Obesity Management",
        "Paediatric Dermatology",
        "Paediatric Cardiology",
        "Paediatric Gastroenterology",
        "Paediatric Orthopaedics",
        "Paediatric Urology"
      ]
    },
    {
      title: "RCI-Certified Therapy Packages",
      color: "bg-[#E1556E]",
      icon: therapyIcon,
      content: [
        "Speech",
        "Occupational",
        "Behavioural"
      ]
    },
    {
      title: "Immunisation",
      color: "bg-[#F96E40]",
      icon: immunisationIcon,
      content: [
        "HPV and Flu/Influenza Vaccines",
        "All mandatory vaccines as per IAP 2025"
      ]
    },
    {
      title: "Developmental Assessments",
      color: "bg-[#E3B200]",
      icon: assessmentIcon,
      content: [
        "Growth Milestones",
        "Behavioural Assessments",
        "Neurodivergent Conditions (including Autism, ADHD, and more) assessments"
      ]
    }
  ]

  return (
    <div className="bg-white pl-6 pt-6 pr-6 pb-6">
      <div className="mx-auto">
        <div className="relative">

        <SubHeading
            mainText={""}
            highlightText={<>Sniffles to milestones —</>}
            subText={<><i>we&#39;re on it!</i></>}
          />
        <p className='pb-6 pt-3 fade-in'>Our BabyMD clinics offer comprehensive paediatric care with a team of doctors, therapists, and specialists. From check-ups and vaccinations to speech therapy and allergy management, everything your child needs is available in one convenient location.</p>
          {roadmapData.map((section, index) => (
            <div key={index} className="relative mb-6">
              {/* Vertical Timeline Line - only show if not the last item */}
              {index < roadmapData.length - 1 && (
                <div className="absolute left-8 top-8 w-0.5 h-full bg-purple-300"></div>
              )}
              
              {/* Clickable Timeline Icon */}
              <button
                onClick={() => toggleSection(index)}
                className={`absolute left-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-10 cursor-pointer ${
                  openSection === index 
                    ? section.color 
                    : 'bg-white border-2 border-gray-200'
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
              
              {/* Content Card */}
              <div className="ml-20">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full ${section.color} text-white rounded-full px-6 py-3 flex items-center justify-between transition-all duration-200 hover:shadow-lg hover:scale-105`}
                >
                  <span className="font-medium text-left">{section.title}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${openSection === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Content */}
                {openSection === index && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-4 animate-in slide-in-from-top-2 duration-200">
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
				
              </div>
            </div>
          ))}
          <div className='pt-3 pb-3'>
          <SuperDocButton
            onClick={onClick }
            label="Get your appointment today"
            className="fade-in text-center uppercase w-[350px] mx-auto"
            variant="purple"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap;