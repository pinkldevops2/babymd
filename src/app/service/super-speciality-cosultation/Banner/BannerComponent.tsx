"use client";

import Image from "next/image";
import serviceVector from "../../../../../public/images/serviceassets/serviceVector.png";
import serviceVectorimg1 from "../../../../../public/images/serviceassets/service3.png";
import beehive2 from "../../../../../public/images/serviceassets/beehive2.png";
import HexagonBlue from "../../../../../public/images/serviceassets/HexagonBlue.png";
import BannerGroupHexagon from "../../../../../public/images/serviceassets/BannerGroupHexagon.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BannerComponent() {

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
    <div className="bg-white">
      <div className="relative flex flex-col md:flex-row items-center px-6 py-4 md:p-6">
        {/* Text Content */}
        <div className="md:w-1/2">
         {/*  <p className="text-base md:text-lg lg:text-xl font-lato mb-2">
            Super Specialist Consultations-
          </p> */}
           <h2 className="text-[#E3B200] text-[34px] leading-[34px] font-bold font-baloo2 pt-6">
             Super Specialist Consultations
            </h2>
          <div className="relative flex items-center">
            <h2 className="text-[34px] leading-[34px] max-w-[400px] font-bold font-baloo2 pt-4">
              When growing up needs{" "}
              <span className=" text-[#4B3A8F]">
                extra <i className="relative z-[2] font-light"> 
                  help
                   <div className='absolute z-[-1] left-[-5px] top-1' >
                    <svg
                      viewBox="0 0 137 47"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[130px] h-auto overflow-visible "
                    >
                      <path
                        ref={pathRef}
                        d="M51.1895 35.8928C46.7719 35.7652 42.3632 35.9006 37.9385 35.5297C34.4724 35.2377 30.9851 34.4398 27.5068 33.686C23.5153 32.8208 19.5114 32.0911 15.5392 30.6967C11.9165 29.4223 8.25102 28.1117 4.78843 24.9823C4.36091 24.595 3.93741 24.1925 3.52195 23.7594C1.26058 21.3904 1.51188 18.2186 2.81156 15.7553C4.48896 12.5785 6.76611 11.1483 9.06927 9.87019C13.4473 7.43771 17.9849 5.99233 22.5912 4.95434C30.422 3.19323 38.3302 2.3863 46.33 2.48259C53.3209 2.56385 60.3211 3.60998 67.3358 5.52596C70.9857 6.52426 74.6335 7.87616 78.1356 10.6539C79.2974 11.5769 80.4216 12.9063 81.447 14.3535C82.7164 16.1485 82.8399 18.5722 81.9852 20.7443C80.5577 24.3731 78.4323 26.3481 76.3456 28.3745C72.4615 32.1444 68.2944 34.8479 63.9956 36.9602C61.5327 38.167 58.9949 38.9869 56.4983 40.0124C55.8908 40.2624 54.6609 40.9628 54.6609 40.9628"
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
            </h2>
           
            <Image
              src={beehive2}
              width={36}
              height={36}
              className="mt-1 ml-2 mb-14 md:mt-0 lg:mt-[-30px] z-10 min-w-[34px]"
              alt="Beehive 2"
            />
          </div>
          <p className=" md:text-base lg:text-lg text-black mt-4 leading-relaxed font-lato">
            Specialised care for allergies, hormones, skin issues, behaviour, and more — with the compassion and attention your child deserves
          </p>
        </div>
        {/* Images */}
        <div className=" mt-6 md:mt-0 md:w-1/2 flex justify-center">
          <Image
            width={330}
            height={150}
            src={serviceVector}
            alt="Layer 1"
            className="z-0 w-[330px] md:w-[330px]  h-auto"
          />
          <Image
            width={376}
            height={376}
            src={serviceVectorimg1}
            alt="Layer 2"
            className="absolute bottom-[-40px] md:bottom-[-30px] lg:bottom-[-30px] w-[385px] md:w-[400px] h-auto"
          />

          <Image
            width={50}
            height={50}
            src={HexagonBlue}
            alt="Layer 3"
            className="absolute bottom-[90px]  right-[11px]  w-[20px]  h-auto"
          />

          <Image
            width={50}
            height={50}
            src={BannerGroupHexagon}
            alt="Layer 3"
            className="absolute md:bottom-[-30px] left-[40px]  w-[35px] lg:w-[35px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}
