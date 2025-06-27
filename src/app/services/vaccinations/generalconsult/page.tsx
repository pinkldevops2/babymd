"use client";

import Image from "next/image";
import NeedleFreeOptionsIcon from "public/icons/vaccination2.png";
import DoctorOnlyCareIcon from "public/icons/vaccination4.png";
import TimelyandTrackableIcon from "public/icons/vaccination1.png";
import ParentalChoiceIcon from "public/icons/vaccination5.png";
import NewbornIcon from "public/icons/vaccination3.png";
import BeeIcon from "../../../../../public/images/serviceassets/BeeIcon.png";
import DigitallyLoggedIcon from "public/icons/vaccination6.png";

export default function GeneralConsults() {
  return (
    <div className="px-6  bg-white">
      {/* Heading */}

      {/* Grid Content - 2x2 Grid for all views */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5 overflow-hidden">
        {/* Item 1 - Sick Visits */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={TimelyandTrackableIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
          <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Timely and 

            <br />
           Trackable
          </h3>
          <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato">
            From IAP-recommended schedules to HPV and yearly flu vaccines — all scheduled, explained, and gently given.
          </p>
        </div>

        {/* Item 2 - Routine Check-ups */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={NeedleFreeOptionsIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
          <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Needle-Free Options

          </h3>
           <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato">
            Needle-free administrations to ease anxiety for kids (and parents); suitable only for children above 2 years and for select vaccines*.
          </p>
        </div>

        {/* Item 3 - Newborn Care */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={NewbornIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
           Growth Tracking
          </h3>
           <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato ">
            Height, weight, and  milestone checks at every  vaccine visit. 
          </p>
        </div>

        {/* Item 4 - Lactation */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={DoctorOnlyCareIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
          <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
          Doctor-Only Care
          </h3>
           <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato ">
           All vaccines administered by experienced paediatricians, no exceptions.
          </p>
        </div>

        {/* Item 5 - Hand-Holding */}
        {/* Item 3 - Newborn Care */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={ParentalChoiceIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
           Parental Choice
          </h3>
          <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato">
        Choose from trusted vaccine brands, with guidance available if needed.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-15 flex items-center justify-center">
            <Image
            src={DigitallyLoggedIcon}
            width={54}
            height={54}
            alt=""
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
          Digitally Logged
          </h3>
           <p className="ttext-xs md:text-sm lg:text-base leading-relaxed font-lato">
           All vaccine records are saved in your BabyMD health profile for easy access.
          </p>
        </div>
      </div>
      <p className="py-5">
        <em>*Please consult our care managers to confirm if the needle-free option
        fits your child’s vaccination needs.</em>
      </p>
    </div>
  );
}
