'use client';
import Image from "next/image";
import { useState } from "react";
import doctor from '../../../../../public/images/serviceassets/DoctorImg.png';


export default function Secondpara() {

  const doctors = [
  {
    image: doctor,
    bgColor: "#CCCCCC",
    name: "Dr Vidisha Kumari",
    details: "(MBBS, MRCPH (UK), and Fellowship in Pediatric Pulmonology)"
  },
  {
    image: doctor,
    bgColor: "#FCE4EC",
    name: "Dr Aman Sharma",
    details: "(MD, DM Cardiology, FACC)"
  }
];

  return (   
       
        <div className=" bg-white ">
             <div className="p-6   ">

                <div className="w-full text-black text-center text-[16px] bg-[#DDD0FF75] border-2 border-[#5943A5] py-5 px-6 rounded-[14px]">
                  <div className="flex justify-center items-baseline space-x-2">
                    <div className="text-[16px] text-center font-black text-black">
                      <p>Pulmonologist</p>
                    </div>
                   
                  </div>
                </div>
                {doctors.map((doctor, index) => (
                <div key={index} className="w-full text-black text-left text-[16px] bg-white border-2 border-[#5943A5] rounded-[14px]">
                  
                  <div  className="flex justify-between items-center space-x-5">
                    <div className="text-[16px] text-center font-black text-black">
                      <div
                                    className="flex items-end justify-center relative overflow-hidden rounded-[14px]"
                                    style={{ backgroundColor: doctor.bgColor }}
                                  >
                                    <Image
                                      src={doctor.image}
                                      alt={doctor.name}
                                      width={180}
                                      height={180}
                                      className="mx-auto w-full max-h-[250px] min-h-[120px] min-w-[120px] object-contain"
                                    />
                                  </div>
                    </div>
                    <div className="text-[16px] text-black pr-6 py-6">
                      <p className="text-[16px] text-black font-semibold">{doctor.name} </p>
                      <p>{doctor.details}</p>
                    </div>
                  </div>
                 
                </div>
                 ))}
              </div>
             
      </div> 
    
    );
}