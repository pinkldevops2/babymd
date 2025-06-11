"use client";
import React, { useEffect, useRef } from 'react';
import Image from "next/image";
import RoutineCheckupIcon from "../../../../../public/images/serviceassets/RoutineCheckupIcon.png";
import LactationIcon from "../../../../../public/images/serviceassets/LactationIcon.png";
import SickVisitIcon from "../../../../../public/images/serviceassets/SickVisitIcon.png";
import HandIcon from "../../../../../public/images/serviceassets/HandIcon.png";
import NewbornIcon from "../../../../../public/images/serviceassets/newborn.png";
import BeeIcon from "../../../../../public/images/serviceassets/BeeIcon.png";
import BeeTail from "../../../../../public/images/serviceassets/BeeTail.png";


export default function GeneralConsults() {

  return (
    <div className='overflow-hidden'>
    <div className="mx-auto py-4 px-6 pt-0 bg-white">
      {/* Heading */}
      <p className="text-[16px] font-bold text-center mt-6 md:mb-6 lg:mb-12 text-black font-Lato">
        Our general consults include:
      </p>

      {/* Grid Content - 2x2 Grid for all views */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-8 mb-5">
        {/* Item 1 - Sick Visits */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={SickVisitIcon}
              alt="Sick Visits Icon"
              width={40}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
            />
          </div>
          <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Sick Visits and
            <br />
            Common Illnesses
          </h3>
          <p className=" text-xs md:text-sm lg:text-base leading-relaxed font-lato px-2 md:px-4">
            Fevers, flu, infections, tummy troubles — handled gently and
            thoroughly.
          </p>
        </div>

        {/* Item 2 - Routine Check-ups */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={RoutineCheckupIcon}
              alt="Routine Checkup Icon"
              width={50}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
            />
          </div>
          <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Routine Check-Ups
          </h3>
          <p className="text-xs md:text-sm lg:text-base leading-relaxed font-lato px-2 md:px-4">
            Regular wellness visits that track growth, development, and overall
            health.
          </p>
        </div>

        {/* Item 3 - Newborn Care */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={NewbornIcon}
              alt="Newborn Care Icon"
              width={30}
              height={40}
              className="w-8 md:w-10 lg:w-12 h-auto"
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Newborn and
            <br />
            Infant Care
          </h3>
          <p className=" text-xs md:text-sm lg:text-base leading-relaxed font-lato px-2 md:px-4">
            Support for sleep, feeding, poop questions <br /> (we get a lot of
            those).
          </p>
        </div>

        {/* Item 4 - Lactation */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={LactationIcon}
              alt="Lactation Icon"
              width={40}
              height={40}
              className="w-10 md:w-12 lg:w-14 h-auto"
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Lactation and
            <br />
            Nutrition Consults
          </h3>
          <p className=" text-xs md:text-sm lg:text-base leading-relaxed font-lato px-2 md:px-4">
            For new parents navigating milk, meals, and everything in between.
          </p>
        </div>

        {/* Item 5 - Hand-Holding */}
        {/* Item 3 - Newborn Care */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 h-16 md:h-20 lg:h-24 flex items-center justify-center">
            <Image
              src={HandIcon}
              alt="Hand Icon"
              width={30}
              height={40}
              className="w-8 md:w-10 lg:w-12 h-auto"
            />
          </div>
         <h3 className="text-[16px] leading-[20px] font-bold  mb-1 md:mb-3 text-black font-lato flex items-baseline justify-center min-h-[40px]">
            Newborn and
            <br />
            Infant Care
          </h3>
          <p className=" text-xs md:text-sm lg:text-base leading-relaxed font-lato px-2 md:px-4">
            Also, <b>‘just in case’</b> is a valid reason to visit. Always.
          </p>
        </div>

        {/* Item 4 - Lactation */}
        <div className="flex flex-col  items-end justify-end relative ">
          <div className='flex flex-col  items-center relative w-full h-full max-w-[160px]'>
            <div className="">
              <Image
                src={BeeIcon}
                alt="Lactation Icon"
                width={120}
                height={40}
                className=" max-w-[80px] absolute bottom-0 right-[50px]"
              />            
            
            <div className="">
              <div>
              <Image
                src={BeeTail}
                alt="BeeTail"
                width={140}
                height={60}
                className="absolute bottom-0 right-[-20px] max-w-[100px] md:max-[200px]"
              />
            </div>
           
            </div>
            </div> 
          </div>          
        </div>      
          
      </div>
    </div>
       
    </div>
  );
}
