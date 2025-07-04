'use client';

import { useState, FC } from 'react';
import Image from 'next/image';
import GPCIcon from '../../public/images/serviceassets/gpc.png';
import BeeIcon from '../../public/images/serviceassets/BeeIcon.png'
import Vaccinations from '../../public/images/serviceassets/vaccination.png';
import Dat from '../../public/images/serviceassets/dat.png';
import Ssc from '../../public/images/serviceassets/ssc.png';
import immunisationIcon from '../../public/images/Icon5.png';
//import assessmentIcon from '../../public/images/Icon6.png';
import SubHeading from './SubHeading';
import SuperDocButton from './SuperDocButton2';
import SuperDocBtnSM from './SuperDocBtnSM';

// Type for each roadmap section
interface RoadmapSection {
  title: string;
  color: string;
  heading: string;
  href: string,
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
      title: 'General Pediatric Consultation',
      color: 'bg-[#5943A5]',
      heading: 'For all the everyday bumps',
      href: 'https://babymd.in/',
      icon: GPCIcon,
      content: [
        "Whether it’s your baby’s first fever, a cranky tummy, or simply a growth check, our paediatricians offer gentle, thorough care without the long hospital waits. Come in any day of the week — we’re ready with expert advice and a warm smile.",
      ],
    },
    {
      title: 'Vaccinations',
      color: 'bg-[#7CB2BC]',
      heading: 'A little prick, a lot of love',
      href: 'https://babymd.in/',
      icon: Vaccinations,
      content: [
        `We know vaccination days can bring a few jitters, for both you and your little one.
That’s why we keep things calm, caring, and child-first. Our doctors take time to help your baby feel safe, offer gentle reassurance throughout, and make sure you’re informed every step of the way. With minimal wait times, needle-free options, and thoughtful aftercare, we turn it into a fun yet comfortable experience.`,
      ],
    },
    {
      title: 'Developmental Assessments and Therapies',
      color: 'bg-[#7CB367]',
      heading: 'Helping their little hearts and minds soar',
      href: 'https://babymd.in/',
      icon: Dat,
      content: [
       `Whether it’s tiny speech delays, sensory challenges, or big emotions that feel too big, we work with you, playfully and patiently, to unlock your child’s brightest potential. Our RCI-certified experts offer developmental screenings, early intervention plans, and personalised therapies (speech, occupational, and behavioural).`,
      ],
    },
    {
      title: 'Super Specialist Consultations',
      color: 'bg-[#E1556E]',
      heading: 'Helping their little hearts and minds soar',
      href: 'https://babymd.in/',
      icon: Ssc,
      content: [
       `Parenting comes with all kinds of curveballs — from allergies and asthma to skin flare-ups, weight worries, and behavioural quirks. We’ve brought together 15+ paediatric specialties all under one roof. Whether it’s a Pulmonologist, Endocrinologist, Dermatologist, or Child Psychologist, our super specialist team offers deeper insights and personalised care, so your child gets exactly what they need, when they need it.`,
      ],
    },
  ];

  return (
    <div className="bg-white pl-6 pt-6 pr-6 pb-6">
      <div className="mx-auto">
        <div className="relative">
          <div className='flex items-baseline'>
             <SubHeading
              mainText={'Comprehensive care, crafted for'}
              highlightText={<></>}
              subText={<>little humans</>}
            />
            <div className='relative'>
                <Image
                  src={BeeIcon}
                  alt={'BeeIcon'}
                  width={80}
                  height={80}
                  className={`object-contain drop-shadow-sm transition-all duration-200 min-w-[80px]`}
                />
                <div className='absolute left-[40px] top-[60px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="89" height="38" viewBox="0 0 89 38" fill="none">
                    <path d="M54.1607 15.1979L53.2426 14.8016L53.2426 14.8016L54.1607 15.1979ZM47.0212 10.8818L46.0397 10.6901L47.0212 10.8818ZM87.8964 0.72168L88.8853 0.870253C88.7824 1.55509 88.6373 2.22309 88.453 2.8739L87.4908 2.60136L86.5287 2.32882C86.6902 1.75871 86.8173 1.1735 86.9075 0.573106L87.8964 0.72168ZM85.9963 6.13502L86.8641 6.632C86.1949 7.80052 85.3932 8.89217 84.4862 9.90662L83.7407 9.24011L82.9952 8.57359C83.8175 7.65391 84.5348 6.67483 85.1286 5.63805L85.9963 6.13502ZM80.9393 11.8683L81.5619 12.6509C80.534 13.4686 79.4329 14.2193 78.2797 14.903L77.7697 14.0428L77.2598 13.1826C78.3414 12.5414 79.3663 11.8418 80.3168 11.0857L80.9393 11.8683ZM74.3527 15.8061L74.761 16.719C73.5608 17.2557 72.328 17.7305 71.0804 18.143L70.7665 17.1935L70.4526 16.2441C71.639 15.8518 72.8087 15.4012 73.9445 14.8932L74.3527 15.8061ZM67.0625 18.2241L67.2844 19.1992C65.9828 19.4953 64.6824 19.725 63.4027 19.8871L63.2771 18.895L63.1514 17.903C64.3654 17.7492 65.6015 17.531 66.8407 17.249L67.0625 18.2241ZM59.4406 19.1734L59.4561 20.1733C58.0694 20.1948 56.7309 20.127 55.4708 19.9664L55.5972 18.9744L55.7237 17.9824C56.8792 18.1297 58.122 18.1938 59.425 18.1735L59.4406 19.1734ZM51.8647 18.1142L51.5258 19.0551C50.0993 18.5413 48.844 17.833 47.8772 16.8989L48.5721 16.1797L49.267 15.4606C49.9786 16.1482 50.9656 16.7276 52.2035 17.1734L51.8647 18.1142ZM46.9121 12.8083L45.9168 12.9051C45.8483 12.2002 45.8892 11.4607 46.0397 10.6901L47.0212 10.8818L48.0026 11.0736C47.8853 11.6742 47.8595 12.2187 47.9074 12.7116L46.9121 12.8083ZM47.0212 10.8818L46.0397 10.6901C46.1733 10.0063 46.3199 9.37171 46.478 8.78444L47.4436 9.04442L48.4092 9.3044C48.2644 9.84232 48.1281 10.4311 48.0026 11.0736L47.0212 10.8818ZM48.8149 5.57982L47.9565 5.06685C48.97 3.3708 50.3371 2.41055 51.8807 2.63249L51.7384 3.62231L51.596 4.61213C51.2017 4.55543 50.4916 4.72343 49.6733 6.09278L48.8149 5.57982ZM54.3466 6.10055L55.2559 5.68439C55.7739 6.81625 56.1034 8.18923 56.1739 9.67659L55.1751 9.72397L54.1762 9.77135C54.1164 8.51165 53.8383 7.39272 53.4373 6.5167L54.3466 6.10055ZM54.7733 13.4311L55.7398 13.6877C55.5716 14.3211 55.353 14.9591 55.0789 15.5942L54.1607 15.1979L53.2426 14.8016C53.477 14.2587 53.6635 13.7143 53.8068 13.1745L54.7733 13.4311ZM54.1607 15.1979L55.0789 15.5942C54.7884 16.2672 54.4944 16.9222 54.1972 17.5595L53.2909 17.1367L52.3846 16.714C52.6735 16.0947 52.9596 15.4574 53.2426 14.8016L54.1607 15.1979ZM51.4214 20.8325L52.2978 21.3141C51.5866 22.6083 50.8593 23.8136 50.1175 24.9333L49.2839 24.3811L48.4502 23.8289C49.1595 22.758 49.8585 21.6002 50.5451 20.3509L51.4214 20.8325ZM46.8289 27.7101L47.6 28.3468C46.6482 29.4996 45.6767 30.529 44.6885 31.4411L44.0103 30.7063L43.332 29.9715C44.2492 29.1249 45.1591 28.1618 46.0578 27.0734L46.8289 27.7101ZM40.7227 33.2615L41.2613 34.1041C39.9832 34.9211 38.6867 35.5637 37.3793 36.0443L37.0343 35.1057L36.6893 34.1671C37.8557 33.7384 39.0228 33.1613 40.1841 32.4189L40.7227 33.2615ZM33.0078 36.055L33.1164 37.0491C31.6483 37.2095 30.1867 37.1849 28.7436 36.9984L28.8718 36.0067L29 35.0149C30.2942 35.1822 31.5966 35.2033 32.8991 35.0609L33.0078 36.055ZM24.8477 35.0456L24.5198 35.9903C23.1774 35.5244 21.8628 34.9305 20.5852 34.2294L21.0663 33.3527L21.5474 32.476C22.7358 33.1282 23.9481 33.6749 25.1755 34.1008L24.8477 35.0456ZM17.5789 31.1052L16.9828 31.9081C15.8547 31.0707 14.7646 30.1545 13.7195 29.1755L14.4032 28.4457L15.0869 27.7159C16.0801 28.6464 17.112 29.5132 18.1749 30.3022L17.5789 31.1052ZM11.5246 25.4596L10.7714 26.1174C9.84167 25.0528 8.96055 23.9415 8.13488 22.798L8.94563 22.2126L9.75637 21.6272C10.5469 22.722 11.3897 23.7848 12.2778 24.8018L11.5246 25.4596ZM6.67151 18.7418L5.81097 19.2511C5.08048 18.017 4.41564 16.7624 3.82436 15.5026L4.72959 15.0777L5.63483 14.6528C6.19828 15.8532 6.83313 17.0516 7.53206 18.2324L6.67151 18.7418ZM3.17084 11.2428L2.22484 11.567C1.74636 10.1706 1.36811 8.78441 1.10263 7.43024L2.08395 7.23786L3.06527 7.04548C3.31152 8.30155 3.66484 9.59956 4.11685 10.9186L3.17084 11.2428ZM1.65262 3.11971L0.652627 3.12232C0.650673 2.37179 0.693744 1.63842 0.785465 0.927526L1.77724 1.05549L2.76902 1.18345C2.68943 1.80035 2.65087 2.4461 2.65262 3.11711L1.65262 3.11971Z" fill="#FF9A6C"/>
                  </svg>
                </div>
            </div>
            
          </div>
         
          <p className="pt-3 fade-in">
            At BabyMD, we believe healthcare for your tiny star should feel less like a task and more like a trusted hand guiding you — steady, joyful, and full of heart. That’s why we care for your child holistically, looking beyond symptoms to address the root cause and nurture their overall well-being.
          </p>
          <p className="pb-8 pt-3 fade-in">
            Because babies don’t wait for weekdays, we’re open on Sundays too, so expert care is always within reach when you need it most. Here’s how we walk this journey with you:
          </p>

          {roadmapData.map((section, index) => (
            <div key={index} className="relative mb-6">
             {/*  {index < roadmapData.length - 1 && (
                <div className="absolute left-6 top-8 w-0.5 h-full bg-purple-300"></div>
              )} */}

             {/*  <button
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
              </button> */}

              <div className="ml-0">
                <button
                  onClick={() => toggleSection(index)}
                  className={`w-full ${section.color} text-center text-white rounded-full pl-8 pr-12 min-h-[70px] relative py-3 flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:scale-105`}
                >
                  <span className="font-medium text-center">{section.title}</span>
                  <svg
                    className={`absolute right-7 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-transform duration-200 ${
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
                      href={section.href}
                      target="_self"
                      label="LEARN MORE"
                      variant="pink"
                      className="w-[140px] center mx-auto mt-3"
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