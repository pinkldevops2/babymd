"use client";

import Image from "next/image";
import DoctorImg1 from "../../../../../public/images/serviceassets/DoctorImg1.png";
import DoctorImg2 from "../../../../../public/images/serviceassets/DoctorImg2.png";
import DoctorImg3 from "../../../../../public/images/serviceassets/DoctorImg3.png";
import DoctorImg4 from "../../../../../public/images/serviceassets/DoctorImg4.png";
import arrow from "../../../../../public/images/Group 2349.png";
import SubHeading3 from "../../../../components/SubHeading3";
import SuperDocButton from "../../../../components/SuperDocButton";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function DoctorsTeam() {
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
    <div className="max-w-6xl mx-auto px-6 py-4 bg-white">
      <div className="mb-6">
 {/*       <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
                Your {" "}
                <span className=" text-[#4B3A8F]">
                     partners in    {" "}
                  <i className="relative z-[2] font-light whitespace-nowrap">
                    progress
                    <div className="absolute z-[-1] left-[-5px] top-[-2px]">
                      <svg
                        viewBox="0 0 137 47"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[100px] h-auto overflow-visible "
                      >
                        <path
                          ref={pathRef}
                          d="M121.568 3.34321C128.595 1.22728 135.508 2.63465 142.352 3.46C151.996 4.62557 161.445 6.4882 170.525 9.34237C177.399 11.5028 184.148 13.8816 189.774 17.7579C195.206 21.5027 193.811 26.387 188.935 29.429C181.83 33.8654 173.241 35.8097 164.524 37.338C159.824 38.1632 155.118 38.9742 150.381 39.648C145.656 40.3171 140.899 40.8395 136.143 41.3383C134.983 41.4628 133.766 41.2515 133.107 41.2218C131.651 41.4711 130.636 41.6422 129.627 41.8227C128.093 42.0913 126.363 42.0768 124.973 42.0984C122.917 42.133 120.837 43.3609 118.57 42.265C117.715 41.8529 116.05 42.5294 114.744 42.6215C111.408 42.8618 108.065 43.069 104.722 43.2619C101.137 43.4656 97.547 43.7262 93.9556 43.7926C91.7971 43.8325 89.6364 43.4558 87.4714 43.4246C85.8447 43.4002 84.2138 43.7308 82.5872 43.7205C79.9325 43.7062 77.2829 43.4883 74.6282 43.4645C72.935 43.4498 71.1118 43.9946 69.5681 43.6666C65.5182 42.8122 61.4454 43.3263 57.3991 43.1442C52.4577 42.9242 47.5097 42.6096 42.5972 42.1291C31.5923 41.056 20.5274 40.0684 10.3426 36.2874C8.37353 35.5545 6.46338 34.5372 4.9151 33.3428C-0.0394794 29.5103 0.991291 24.3533 6.96864 21.5233C15.0028 17.7211 23.8076 15.5579 32.8821 14.0939C44.5243 12.2139 56.2529 10.6553 67.9197 8.86037C78.8434 7.17826 89.8623 6.33843 100.97 6.3362C106.098 6.33735 111.222 6.77413 116.351 7.04516C116.902 7.07538 117.429 7.31405 117.968 7.45796C117.987 7.5999 118.025 7.88379 118.025 7.88379"
                          fill="none"
                          stroke="#FFD25D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </i>
                </span>
              </h2> */}
               <SubHeading3
            mainText={<>Your</>}
            highlightText={<> partners in</>}
            subText={
              <>
                <i> progress</i>
              </>
            }
          />
            </div>
      {/* Grid Layout - 2x2 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {/* Doctor 1 - Dr Shivangi Bora */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#F0CB46] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg1}
              alt="Dr Shivangi Bora"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
            <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Dr Y Lakshmi Pravallika</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mt-3 mb-3">
              MBBS, MD (Paediatrics), Fellowship in Neuro Developmental Paediatrics
            </p>
            {/* <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD in Paediatrics, DAA (CMC Vellore), DPSM (University of
              Colorado))
            </p> */}
          </div>
        </div>

        {/* Doctor 2 - Dr Sampat Kumar Shettagar */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#5943A5] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg2}
              alt="Dr Sampat Kumar Shettagar"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
             <em>Ms Neelam Verma</em> 
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mt-3 mb-3">
              MPhil in Clinical Psychology, PGDCP 13+ Years of Experience
            </p>
            {/* <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD Paediatrics, Fellowship in Neonatology [NNF], Fellowship
              in Neonatology [RCPCH])
            </p> */}
          </div>
        </div>

        {/* Doctor 3 - Dr Indu S Nair */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#F6835D] rounded-lg  flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg3}
              alt="Dr Indu S Nair"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Ms Liya Jones</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mt-3 mb-3">
              Bachelor of Audiology and Speech-Language Pathology 5+ Years of Experience
            </p>
            {/* <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, DCH, DNB [Paediatrics], Fellowship in Neonatology)
            </p> */}
          </div>
        </div>

        {/* Doctor 4 - Dr Bhaskar MV */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#269BD9] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg4}
              alt="Dr Bhaskar MV"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Dr Aziza Habib</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mt-3 mb-3">
              PT, MPT, Neurology 6+ Years of Experience
            </p>
          {/*   <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD Paediatrics, Fellowship in Neonatology [NNF])
            </p> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center py-0 px-6">
        {/* <button
          type="button"
          className="flex items-center justify-center gap-3 px-8 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
        >
          <span className="uppercase tracking-[2px] text-sm">
            View all therapists
          </span>
          <Image src={arrow} alt="Arrow" width={20} height={10} />
        </button> */}
         <SuperDocButton
                      href="/doctors"
                      label="View all therapists"
                      className="my-5 fade-in"
                      variant="pink"
                      target='_blank'
                    />
      </div>
    </div>
  );
}
