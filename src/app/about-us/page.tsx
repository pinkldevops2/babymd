"use client";
import React, { useState,useEffect, useRef } from "react";
import Image from "next/image";
import RoadMap from '../../components/RoadMap';
import Modal from '../../components/FormPopUp';
import BabyMDCampaignForm from '../../components/BabyMDCampaignForm';
import baby_about from "public/images/baby_about.png";
import SubHeading2 from "@/components/SubHeading2";
import Empathy from "public/icons/Empathy.svg"; // Replace with actual SVGs
import Doctor from "public/icons/Doctor.svg";
import Expert from "public/icons/Expert.svg";
import Holistic from "public/icons/Holistic.svg";
import dr_deeksha from "public/images/dr_deeksha.png";
import DoctorPageBanner from "@/components/DoctorPageBanner";
import BeeAbout from "public/images/BeeAbout.png";
import BeePath from "public/images/BeePath.svg";
import contactpagebee from "../assets/contactpagebee.png";
 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
export default function AboutUs() {  

const cardData = [
  {
    icon: <Image src={Empathy} alt=""/>,
    title: "Empathy in Every Interaction",
    description: "We believe the best care starts by listening. We meet every parent and child with patience, understanding, and zero judgment.",
    bgColor: "bg-[#DDD0FF]",
  },
  {
    icon: <Image src={Expert} alt=""/>,
    title: "Expert Care, Delivered with Heart",
    description: "Our team comes from top medical institutes, but what sets them apart is their genuine care for children and the families who trust us.",
    bgColor: "bg-[#F9EEB6]",
  },
  {
    icon: <Image src={Holistic} alt=""/>,
    title: "Holistic, Child-First Approach",
    description: "We look beyond just symptoms, supporting each child’s physical, emotional, and developmental growth, while empowering parents along the way",
    bgColor: "bg-[#CDE6F3]",
  },
  {
    icon: <Image src={Doctor} alt=""/>,
    title: "Joy in the Little Moments",
    description: "Healthcare shouldn’t feel clinical. We make every visit a little more playful, positive, and something your child doesn’t dread.",
    bgColor: "bg-[#FFD6C6]",
  },
];

 useEffect(() => {
  const elements = gsap.utils.toArray<HTMLElement>(".fade-in");

  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}, []);


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
        duration: 1.7,
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);
 
  return (
    <>
      <div className="container">
      <div className="banner-box bg-[#F9EEB6] relative z-2 py-14 pb-6">
        <div className="md:px-3">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-full md:w-2/3">
              <div className="relative px-6 md:px-2 md:w-3/4">
                <h1 className="text-2xl font-bold text-[34px] pb-[12px]">
                  Every child is a miracle. We&#39;re 
here to{" "}
                  <span className="text-[#5943A5]">nurture their </span>
                  <span className="relative clinic_border relative z-[2]">
                    <i className="font-normal text-[#5943A5] z-2 relative">
                      magic
                    </i>
                     <div className='svg-animation clinic-svg absolute z-[-1]' >
                        <svg className="w-[150px] h-auto" width="114" height="38" viewBox="0 0 114 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M70.4894 2.91253C74.4613 1.08843 78.4641 2.09986 82.411 2.64443C87.9738 3.41381 93.4434 4.74719 98.7282 6.88444C102.73 8.50215 106.665 10.2977 109.997 13.3172C113.215 16.2342 112.549 20.1866 109.836 22.7179C105.883 26.4096 101.011 28.1229 96.0535 29.5038C93.3809 30.2493 90.7043 30.9835 88.0062 31.608C85.3149 32.2284 82.6018 32.7314 79.888 33.2153C79.226 33.3357 78.5226 33.1869 78.1437 33.1746C77.3156 33.4004 76.7382 33.5557 76.1646 33.7184C75.292 33.9611 74.2999 33.9796 73.503 34.0212C72.3251 34.0849 71.1661 35.1086 69.8359 34.2667C69.3344 33.9502 68.3979 34.5232 67.6517 34.6201C65.7449 34.8715 63.8336 35.0963 61.9219 35.3097C59.8719 35.536 57.82 35.8081 55.7623 35.9241C54.5256 35.9937 53.2762 35.7284 52.0338 35.7411C51.1003 35.7497 50.1741 36.044 49.241 36.0641C47.7183 36.0988 46.1929 35.9697 44.6699 35.9968C43.6985 36.0145 42.6679 36.4844 41.7737 36.2475C39.4278 35.6309 37.1063 36.1153 34.781 36.0393C31.9412 35.9485 29.0952 35.7817 26.2649 35.4808C19.9247 34.8095 13.5524 34.208 7.60829 31.3446C6.45902 30.7895 5.33577 30.0046 4.41519 29.071C1.46902 26.0751 1.91893 21.9098 5.2692 19.5296C9.77234 16.3319 14.7623 14.4388 19.9261 13.1034C26.5509 11.3886 33.2341 9.93086 39.8754 8.28408C46.0936 6.741 52.3895 5.87366 58.7594 5.67837C61.6999 5.58997 64.6503 5.85199 67.5991 5.98061C67.9155 5.99533 68.2245 6.17808 68.5375 6.28444" stroke="#F8845D" stroke-width="3" stroke-linecap="round"/>
</svg>
                    </div>
                  </span>
                </h1>
               

                <p className="">
                  Thoughtfully designed, expert-led, holistic pediatric care — so you can parent with more confidence and less stress
                </p>
                <img
                  className="absolute top-[-40px] right-[30px]"
                  src="/images/Group 427319502.svg"
                  alt="Decorative"
                />
                <img
                  className="absolute bottom-[-60px] left-[20px]"
                  src="/images/Group 427319515.svg"
                  alt="Decorative"
                />
              </div>
            </div>
 
            <div className="w-full py-4 md:w-1/3 md:py-0 relative px-8 md:px-0">
              <img className="mx-auto" src="/images/bg_perfect.png" alt="Vector" />
              <img
                className="mx-auto absolute absolute-center"
                src="/images/baby_md_photo.png"
                alt="Mask group"
              />
            </div>
          </div>
        </div>
      </div>
 
      <img
        className="w-full relative z-0 bg-white"
        src="/images/Vector 141.svg"
        alt="Vector 141"
      />
 
      <div className="location-section py-4 relative bg-white">
        <div className="md:px-6">
          <div className="flex flex-row gap-1 items-start">
            <div className="w-full">
              <div className="relative px-6 md:px-0">
                <SubHeading2
            mainText={<>The</>}
            subText={<>journey</>}
            highlightText={<>BabyMD</>}
            />
                <p className="fade-in mb-4">
                  Parenting comes with questions, chaos, joy, and more than a few sleepless nights — and through it all, what every parent needs is a support system that just gets it.
                </p>
                <p className="fade-in mb-4">
                  BabyMD was created to be exactly that.
                </p>
                <p className="fade-in mb-4">
                  Our founder, Deeksha Senguttuvan, spent years working in healthcare and technology, but it was her close interactions with parents that revealed the real gap in paediatric care. Families were either navigating large hospitals with long waits and little personal connection, or relying on scattered, inconsistent care. There had to be a better way.
                </p>
                <p className="fade-in mb-4">
                  So in 2024, BabyMD began with one clinic and a simple mission: to make paediatric care feel closer, calmer, and kinder.
                </p>
                <p className="fade-in mb-4">
                  Today, BabyMD is a growing network of neighbourhood clinics offering everything from consultations and vaccinations to developmental assessments and therapy services — all under one roof. We’re proud to be open 7 days a week, backed by a team that listens first, treats with heart, and partners with parents every step of the way.
                </p>
              </div>
            </div>
          </div>
 
          
        </div>
      </div>
 


      <div className="px-6 bg-white">
        <div className="bg-[#FF9A6C] rounded-[20px]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex-1 flex md:items-center md:justify-center md:h-auto py-8 px-8 md:py-0 md:px-4 text-center">
            <p className="spansidecour text-white font-normal">Because every child is a miracle, and every moment of their growth deserves care that goes beyond the ordinary.</p>

          </div>
          <div className="flex-1 md:pt-12 relative">
            <Image
            src={BeeAbout}
            alt=""
            width={88}
            height={87}
            className="absolute right-1 top-0 z-2"
            />
            <Image
            src={BeePath}
            alt=""
            width={88}
            height={87}
            className="absolute right-10 top-15  z-2"
            />
            <Image
            src={baby_about}
            className="w-full"
            alt=""
            />
          </div>
        </div>
      </div>
      </div>

      <div className="px-6 bg-white">
        <div>
        <div>
          <div className="pt-8 mb-4">
            <p>Our clinics are designed to be warm, welcoming spaces where every visit feels like a little celebration of your child’s unique journey. Whether it’s a routine check-up or a specialized consultation, we are with you every step of the way, offering compassion and expert guidance to make your parenting experience easier 
and more joyful.</p>
          </div>
          <div className="mb-0">
            <SubHeading2
            mainText={<>Build on empathy.<br/>Backed</>}
            subText={<>expertise.</>}
            highlightText={<>by</>}
            />
            </div>
            <div className="pb-4">
            <p>At BabyMD, everything we do is guided by five core principles that are rooted in compassion, backed by expertise, and shaped by real-life parenting needs.</p>
          </div>
        </div>
      </div>
      </div>

      {/*Card Section*/}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-white">
      {cardData.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl px-6 py-12 ${item.bgColor}`}
        >
          <div className="flex mb-4 font-lato">{item.icon}</div>
          <h3 className="font-bold mb-2 spansidelatonormal">{item.title}</h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>


    <div className="rounded-2xl px-6 bg-white">
      <div className="bg-[#E1F5FF] px-6 py-10 rounded-[20px] relative">
      <SubHeading2
            mainText={<>A note from</>}
            subText={<>founder</>}
            highlightText={<>our</>}
            />
            <Image
            src={dr_deeksha}
            alt="Dr. Deeksha Senguttuvan"
            className="mx-auto my-6"
            width={210}
            height={235}
            />
            <Image
            src={contactpagebee}
            alt=""
            width={120}
            height={120}
            className="absolute right-1 bottom-0"
            />
        <p className="mb-4">“I started BabyMD because I saw how hard it was for parents to find good paediatric care that felt... human. You either ended up at a big hospital where everything felt rushed, or at a clinic that didn’t go beyond the basics.</p>
        <p className="mb-4">I wanted to build something that felt closer. A place where parents could walk in with a question — big or small — and feel heard. A place where doctors remembered your child’s name, and followed up without being asked. Where the care is not just clinical, but kind.</p>
        <p className="mb-4">That’s what BabyMD is about. And that’s what we try to deliver every single day.”</p>
        <p className="spansidecour">— Deeksha Senguttuvan<br/>Founder, BabyMD</p>
        </div>
        </div>


        <div className="px-6 bg-white py-8">
        <div>
        <div>
          <div className="mb-0">
            <SubHeading2
            mainText={<>The minds that lead,</>}
            subText={<>care</>}
            highlightText={<>the hearts that</>}
            />
            </div>
            <div className="pb-4">
            <p>Our leadership team blends together decades of medical expertise in paediatrics, child development, and holistic care — all to support you and your little one throughout your journey. We are united by one belief: every kid deserves exceptional care, and every parent deserves a partner they can trust.</p>
          </div>
        </div>
      </div>
      </div>
      <DoctorPageBanner />    
      </div>
    </>
  );
}