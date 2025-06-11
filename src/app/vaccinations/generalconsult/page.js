"use client";

import Image from "next/image";
import NeedleFreeOptionsIcon from "../../../../../public/images/serviceassets/NeedleFreeOptionsIcon.png";
import DoctorOnlyCareIcon from "../../../../../public/images/serviceassets/DoctorOnlyCareIcon.png";
import TimelyandTrackableIcon from "../../../../../public/images/serviceassets/TimelyandTrackableIcon.png";
import ParentalChoiceIcon from "../../../../../public/images/serviceassets/ParentalChoiceIcon.png";
import NewbornIcon from "../../../../../public/images/serviceassets/newborn.png";
import BeeIcon from "../../../../../public/images/serviceassets/BeeIcon.png";
import DigitallyLoggedIcon from "../../../../../public/images/serviceassets/DigitallyLoggedIcon.png";

export default function GeneralConsults() {
  return (
    <div className="px-6  bg-white">
      {/* Heading */}

      {/* Grid Content - 2x2 Grid for all views */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-5 overflow-hidden">
        {/* Item 1 - Sick Visits */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={TimelyandTrackableIcon}
              alt="Sick Visits Icon"
              width={40}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
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
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={NeedleFreeOptionsIcon}
              alt="Routine Checkup Icon"
              width={50}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
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
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={NewbornIcon}
              alt="Newborn Care Icon"
              width={30}
              height={40}
              className="w-8 md:w-10 lg:w-12 h-auto"
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
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={DoctorOnlyCareIcon}
              alt="Lactation Icon"
              width={40}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
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
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={ParentalChoiceIcon}
              alt="Hand Icon"
              width={30}
              height={40}
              className="w-10 md:w-10 lg:w-12 h-auto"
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
          <div className="mb-1 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={DigitallyLoggedIcon}
              alt="Lactation Icon"
              width={40}
              height={40}
              className="w-8 md:w-12 lg:w-14 h-auto"
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
