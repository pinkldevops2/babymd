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
import SubHeading3 from "../../../../components/SubHeading3";
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
  
              
                <SubHeading3
            mainText={<>Let’s take the next step,</>}
            highlightText={<></>}
            subText={
              <>
                <i> together</i>
              </>
            }
          />

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