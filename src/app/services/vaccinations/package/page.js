"use client";
import Image from "next/image";
import { useState } from 'react';
import SubHeading from '../../../../../components/SubHeading';
import arrow from "../../../../../public/images/Group 2349.png";

export default function Package() {
  const [isDurationOpen, setIsDurationOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('6 Week - 14 Week');

  const durationOptions = [
    '6 Week - 14 Week',
    '2 Month - 6 Month',
    '6 Month - 12 Month',
    '1 Year - 2 Year'
  ];

  return (
      <>
        <div className='px-6'>
           <SubHeading
          mainText={<> Big protection,</>}
          subText={<><i>  smaller bill </i></>}
        />

      <p className="text-[16px] text-black text-xs mb-4 mt-2">
        Stay ahead of your baby&#39;s vaccine schedule with our pre-purchase packages and big savings.
      </p>
        </div>

      
    <div className="mx-auto px-6 py-4 ">
    
      {/* Title Section */}
      
    

      {/* Duration Section */}
      <div className="relative bg-[#DDD0FF73] rounded-[15px]">
        <button
          onClick={() => setIsDurationOpen(!isDurationOpen)}
          className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full flex justify-center items-center gap-x-2"
        >
          <span className='text-[16px] leading-[20px] font-bold'>Duration</span>
          <svg
            className={`absolute right-[20px] bg-white rounded-[50px] w-4 h-4 transform transition-transform duration-200 ${isDurationOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="#5943A5"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isDurationOpen && (
          <div className="absolute top-[50px] left-0 right-0 bg-white rounded-lg lg:rounded-xl shadow-lg border border-gray-200 z-10 mt-1">
            {durationOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedDuration(option);
                  setIsDurationOpen(false);
                }}
                className="w-full text-left px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base text-gray-800 hover:bg-gray-50 first:rounded-t-lg first:lg:rounded-t-xl last:rounded-b-lg last:lg:rounded-b-xl"
              >
                {option}
              </button>
            ))}
          </div>
        )}

        <div className="text-center py-7  px-4 text-[#2E2E2E] text-[16px]">
          {selectedDuration}
        </div>
      </div>

      {/* Value Package */}
      <div className="relative bg-[#DDD0FF73] rounded-[15px] pb-8">
        <div className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full">
          Value Package
        </div>
        <div className="text-center py-3  rounded-lg lg:rounded-xl">
          <div className="flex justify-center items-baseline space-x-2">
            <span className="text-[16px] text-[#5943A5]" style={{ color: '#5943A5' }}><i>₹15,819</i></span>
            <span className="text-[16px] text-black line-through">₹17,577</span>
          </div>
        </div>
        <div className="text-white text-center bg-[#8B7DB8] text-[16px] py-4  px-3 rounded-2xl text-xs  mx-8 ">
          <i>Easy Six, Pneumoshield 14%, and Rotavac</i>
        </div>
      </div>

      {/* Premium Package */}
      <div className="relative bg-[#DDD0FF73] rounded-[15px] pb-8">
        <div className="w-full text-white text-center text-[16px] bg-[#5943A5] py-4 px-4 rounded-full">
          Premium Package
        </div>
        <div className="text-center py-3  rounded-lg lg:rounded-xl">
          <div className="flex justify-center items-baseline space-x-2">
            <span className="text-[16px] text-[#5943A5]"><i>₹28,780</i></span>
            <span className="text-[16px] text-black line-through">₹29,754</span>
          </div>
        </div>
        <div className="text-white text-center bg-[#8B7DB8] py-4  px-3 text-[16px] rounded-2xl mx-8 ">
          <i>Hexaxim, Prevenar, and Rotosill</i>
        </div>
      </div>

      {/* Bullet Points */}
      <div className="py-4 px-4">
        
          <ul className='list-disc text-[16px]'>
            <li>No repeated payments or billing</li>
            <li>Just show up — everything&#39;s already taken care of</li>
          </ul>
      
      </div>

      {/* Footer Text */}
      <p className="text-[16px] pb-4">
        Because when it comes to your baby's health, planning ahead should come with perks.
      </p>
       <div className="flex justify-center pt-6">
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-8 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
              >
                <span className="uppercase tracking-[2px] text-sm">
                  Get your vaccine package
                </span>
                <Image src={arrow} alt="Arrow" width={20} height={10} />
              </button>
            </div>
    </div>
    </>
  );
}