'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import beehive4 from '@/app/assets/beehive4.png';
import smilevectorange from '../../../../../public/images/serviceassets/smilevectorange.png';
import sscSmilerImg from '../../../../../public/images/serviceassets/smile2.png';
import arrow from "../../../../../public/images/Group 2349.png";
import SuperDocButton2 from "../../../../components/SuperDocButton2";
import Modal from "../../../../components/FormPopUp";
import BabyMDCampaignForm from "../../../../components/BabyMDCampaignForm";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SmileSection() {
   const [isModalOpen, setIsModalOpen] = useState(false);
 const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if(!path) return;
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
  return (
    <div className="pb-6 bg-white ">
      <div className="container mx-auto">
        <div className="flex flex-col relative justify-center items-center md:flex-row bg-[#DBFFCC] rounded-[20px] mx-4 md:mx-0 overflow-hidden pt-8">
          <div className="w-full md:w-2/3 px-2 py-2 md:p-4 md:pl-12">
            <div className="relative px-8 md:px-0">
  
               <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
                   Let’s take the next step, {" "}
                  <span className=" text-[#4B3A8F]">
                    {" "}
                    <i className="relative z-[2] font-light whitespace-nowrap">
                      together
                      <div className="absolute z-[-1] left-[-5px] top-[0px]">
                        <svg
                          viewBox="0 0 137 47"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[100px] h-auto overflow-visible "
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
              <p className="text-[#2E2E2E] text-base md:text-lg leading-relaxed mt-4">
                Done with the milestone check? Great first step. Now let’s go deeper. Whether the results raised a concern or simply gave you more questions, our team is here to help. Meet with our developmental experts to understand your child’s growth, explore personalised support, and create a plan that feels right for your family. From cognitive skills to language development, we’re here to support every step of your child’s journey.

                </p> {/* <br />
                <p className='text-[#2E2E2E] text-base md:text-lg leading-relaxed '>
                  We believe personalised care shouldn’t come with chaos. That’s why our top pediatric experts are all under one welcoming roof — no department-hopping, no crowded waiting rooms. Just warm, thoughtful consultations that put your child first.

                </p> */}

               
            </div>
          </div>

          <div className="w-full md:w-1/3 relative md:px-0 pt-4">
            <Image
              className="mx-auto"
              src={smilevectorange}
              alt="Vector 3"
            />
            <Image
              className="mx-auto absolute bottom-0 w-[300px] left-9"
              src={sscSmilerImg}
              alt="Decorative"
            />
          </div>
        </div>
      </div>
       <div className="flex justify-center pt-6">
                         {/*    <button
                              type="button"
                              className="flex items-center mx-2 gap-3 px-10 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                            >
                              <span className="uppercase tracking-wide text-sm">Book a consultation</span>
                         <Image
                         src={arrow}
                          alt="Arrow"
                         width={20}
                         height={10} 
                         
                         />
                            </button> */}

                             <SuperDocButton2
            onClick={() => setIsModalOpen(true)}
            label="Book a consultation"
            className="w-80 text-center fade-in uppercase justify-center"
            variant="purple"
          />

          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            mainText={<> Book Appointment with </>}
            highlightText={<span> Developmental</span>}
            subText={<i> Pediatrician</i>}
          >
            <BabyMDCampaignForm formID="developmental-pediatrician-therapy-appointment" />
          </Modal>
                          </div>
    </div>
  );
}

export default SmileSection;