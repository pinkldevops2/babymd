"use client";

import React, { useState , useEffect, useRef} from "react";
import { gsap } from "gsap";
import Image from "next/image";
import beehive4 from "@/app/assets/beehive4.png";
import smilevectorange from "../../../../../public/images/serviceassets/smilevectorange.png";
import smilevectorimg from "../../../../../public/images/serviceassets/smileimg.png";

import arrow from "../../../../../public/images/Group 2349.png";

function SmileSection() {

  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
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
    <div>
      <div className="pt-6 px-6">
        <div className="container">
          <div className="flex flex-col relative justify-center items-end md:flex-row bg-[#DBFFCC] rounded-[20px] md:mx-0 overflow-hidden pt-8">
            <div className="w-full md:w-2/3 px-2 py-2 md:p-4 md:pl-12">
              <div className="relative px-4 md:px-0">
                <h2 className="font-bold text-[28px] leading-[26px]">
                  <span className="text-[#5943A5] ">
                    Healthy <i className="z-[2] font-light relative"> Smiles 

                  <div className='absolute z-[-1] left-[-5px] top-0' >
                    <svg
                      viewBox="0 0 137 47"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[138px] h-auto overflow-visible "
                    >
                      <path
                        ref={pathRef}
                        d="M51.1895 35.8928C46.7719 35.7652 42.3632 35.9006 37.9385 35.5297C34.4724 35.2377 30.9851 34.4398 27.5068 33.686C23.5153 32.8208 19.5114 32.0911 15.5392 30.6967C11.9165 29.4223 8.25102 28.1117 4.78843 24.9823C4.36091 24.595 3.93741 24.1925 3.52195 23.7594C1.26058 21.3904 1.51188 18.2186 2.81156 15.7553C4.48896 12.5785 6.76611 11.1483 9.06927 9.87019C13.4473 7.43771 17.9849 5.99233 22.5912 4.95434C30.422 3.19323 38.3302 2.3863 46.33 2.48259C53.3209 2.56385 60.3211 3.60998 67.3358 5.52596C70.9857 6.52426 74.6335 7.87616 78.1356 10.6539C79.2974 11.5769 80.4216 12.9063 81.447 14.3535C82.7164 16.1485 82.8399 18.5722 81.9852 20.7443C80.5577 24.3731 78.4323 26.3481 76.3456 28.3745C72.4615 32.1444 68.2944 34.8479 63.9956 36.9602C61.5327 38.167 58.9949 38.9869 56.4983 40.0124C55.8908 40.2624 54.6609 40.9628 54.6609 40.9628"
                        fill="none"
                        stroke="#F8845D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
          </div>
                      </i><br />
                     Start Here...
                  </span>
      
                </h2>
                <p className="text-[#2E2E2E] text-[16px] leading-relaxed mt-4">
                  No long waits, no rushed visits, and no cold hospital vibes –
                  just a warm welcome, a listening ear, and the kind of care
                  that treats every child like the miracle they are. Be it their
                  routine check-up or a little extra TLC, we give every visit
                  the attention it deserves.
                </p>
              </div>
            </div>

            <div className="w-full relative md:px-0 pt-4">
              <Image className="mx-auto" src={smilevectorange} alt="Vector 3" />
              <Image
                className="mx-auto absolute absolute-bottom-center bottom-0 w-[300px]"
                src={smilevectorimg}
                alt="Decorative"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Book Now Button Section */}
      <div className="flex justify-center py-9">
        <button
          type="button"
          className="flex items-center mx-2 gap-3 px-8 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
        >
          <span className="uppercase tracking-wide text-sm">Book your appointment now</span>
     <Image
     src={arrow}
      alt="Arrow"
     width={20}
     height={10} 
     />
        </button>
      </div>
    </div>
  );
}

export default SmileSection;