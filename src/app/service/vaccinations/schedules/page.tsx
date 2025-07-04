"use client";
import { useEffect, useRef } from "react";

import Image from "next/image";
import scheduleIcon1 from "public/icons/vaccination7.png";
import scheduleIcon2 from "public/icons/vaccination8.png";
import scheduleIcon3 from "public/icons/vaccination9.png";
import SubHeading from '../../../../components/SubHeading';
import arrow from "../../../../../public/images/Group 2349.png";
import SuperDocButton from '../../../../components/SuperDocButton';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Schedules() {
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
    <div className="flex flex-col gap-4 px-6 py-5">
      {/* 1 */}
      <div className="bg-[#C8E7EC] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon1} alt="First Year Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          First Year <br />
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>(0–12 Months)</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

        <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Birth:</strong> BCG, OPV, Hepatitis B
          </li>
          <li>
            <strong>6, 10, 14 weeks:</strong> DPT, Hib, Hep B, IPV, Rotavirus,
            PCV
          </li>
          <li>
            <strong>6 months:</strong> Influenza (first dose)
          </li>
          <li>
            <strong>9 months:</strong> MMR, Typhoid (conjugate)
          </li>
          <li>
            <strong>12 months:</strong> Hepatitis A
          </li>
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-[#E4FDD8] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon2} alt="Toddler to Preschool Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          Toddler To Preschool{" "}
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>(1–5 Years)</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

         <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>
            <strong>15 months:</strong> MMR (2nd dose), Varicella, PCV booster
          </li>
          <li>
            <strong>16–18 months:</strong> DPT booster, Hib booster, IPV booster
          </li>
          <li>
            <strong>18 months:</strong> Hepatitis A (2nd dose)
          </li>
          <li>
            <strong>2 years:</strong> Typhoid booster
          </li>
          <li>
            <strong>4–6 years:</strong> DPT, IPV, MMR (3rd dose), Varicella (2nd
            dose)
          </li>
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-[#FF9A6C] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon3} alt="Toddler to Preschool Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          Adolescent and Pre- Teen{" "}
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
             <span className="font-light"> <i>(9-12 Years)</i></span>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

        <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>HPV vaccine 1 and 2</li>
        </ul>
      </div>
      <div className=" bg-white ">
        <div className="py-4">
          
           <div className='max-w-[300px]'>
            
            <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Missed a vaccine or forgot
          <span className=" text-[#4B3A8F]">
            {" "}your{" "}
            <i className="relative z-[2] font-light">
              schedule?
              <div className="absolute z-[-1] left-[40px] top-0">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[110px] h-auto overflow-visible rotate-180"
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
           </div>

          <p className="pt-5">
           Don&apos;t worry! Our paediatricians are here to help with a customized catch-up plan.
          </p>
        </div>
          <div className="flex justify-center py-6">
              {/*   <button
                  type="button"
                  className="flex items-center mx-2 gap-3 px-10 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                >
                  <span className="uppercase tracking-wide text-sm">Consult our experts</span>
             <Image
             src={arrow}
              alt="Arrow"
             width={20}
             height={10} 
             />
                </button> */}
                 <SuperDocButton
                  href={"https://babymd-vizz.vercel.app/doctor"}
                  target={"_blank"}
                  label="Consult our experts"
                  className="w-80 text-center fade-in uppercase"
                  variant="purple"
                />
              </div>
      </div>
    </div>
  );
}
