"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import serviceVector from "../../../../../public/images/serviceassets/serviceVector.png";
import vaccinationBannerImg from "../../../../../public/images/serviceassets/vaccinationBannerImg.png";
import beehive2 from "../../../../../public/images/serviceassets/beehive2.png";
import HexagonBlue from "../../../../../public/images/serviceassets/HexagonBlue.png";
import BannerGroupHexagon from "../../../../../public/images/serviceassets/BannerGroupHexagon.png";

export default function Banner() {
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
      {/* <div className="relative flex flex-col md:flex-row items-center px-6 py-4 md:p-6">
        <div className="md:w-1/2">
          <p className="text-base md:text-lg lg:text-xl font-lato mb-2">Vaccinations</p>
          <div className="relative flex items-center">
            <h1 className="text-[34px] leading-[34px] max-w-[400px] font-bold font-baloo2 mt-2">
              A shot of <span className="italic text-[#4B3A8F]">good <br /> health</span>
            </h1>
            <Image
              src={beehive2}
              width={36}
              height={36}
              className="ml-2 md:ml-3 lg:ml-4 mt-2 md:mt-3 lg:mt-4 z-10"
              alt="Beehive 2"
            />
          </div>
          <p className="text-sm md:text-base lg:text-lg text-black mt-4 leading-relaxed font-lato">
            Every tiny jab is our promise of protection, health, and hope for a healthier future
          </p>
        </div>
        <div className="mt-6 md:mt-0 flex justify-center">
          <Image
            width={330}
            height={150}
            src={serviceVector}
            alt="Layer 1"
            className="z-0 w-[250px] md:w-[330px] lg:w-[400px] "
          />
          <Image
            width={500}
            height={500}
            src={vaccinationBannerImg}
            alt="Layer 2"
            className="absolute  md:h-[100px] bottom-[-20px] w-[300px] md:w-[700px] lg:w-[400px] lg:h-[200px] xl:w-[900px] md:bottom-[-30px] lg:bottom-[-40px] left-1/2 transform -translate-x-1/2 z-10"
          />
        </div>
      </div> */}


            <div className="relative flex flex-col md:flex-row items-center px-6 py-4 md:p-6">
              <div className="md:w-1/2">
                <h2 className="text-[#E3B200] text-[34px] leading-[34px] font-bold font-baloo2 pt-6">Vaccinations</h2>
                <div className="relative flex items-center">
                  <h2 className="text-[34px] leading-[34px] max-w-[300px] font-bold font-baloo2 pt-4">
                    A shot of &nbsp;
                     <span className=" text-[#4B3A8F]">
                        good <i className="relative z-[2] font-light"> 
                        health
                         <div className='absolute z-[-1] left-[-5px] top-1' >
                          <svg
                            viewBox="0 0 137 47"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[125px] h-auto overflow-visible "
                          >
                            <path
                              ref={pathRef}
                              d="M51.5 42.7882C50.4656 42.5819 46.155 42.918 45.19 42.7882C41.2244 42.2568 37.2352 41.9268 33.2867 41.2182C26.394 39.9759 19.5899 38.1522 13.0141 35.2718C9.48117 33.7233 5.89927 32.2302 3.06343 29.053C1.36543 27.1512 1.09917 24.8407 2.68239 22.9231C3.96193 21.3769 5.41289 19.9246 6.99654 18.8494C11.771 15.613 17.0323 13.6977 22.3629 12.1159C32.6081 9.07832 42.9939 6.86483 53.5461 5.56421C65.6203 4.07278 77.725 3.4504 89.8912 3.7427C97.0478 3.9166 104.177 4.48725 111.249 6.01808C114.97 6.82191 118.679 7.77395 121.808 10.4806C124.233 12.5794 125.206 15.5309 122.23 18.1641C121.683 18.6459 121.118 19.1002 120.545 19.5408C115.895 23.1025 110.6 24.9819 105.362 26.8197C99.6183 28.832 93.7023 30.2221 87.8306 31.7379C82.7138 33.0588 77.5915 34.4229 72.4067 35.3054C65.7879 36.4304 59.0984 37.0743 52.4448 37.9682C51.6923 38.0726 50.9687 38.4417 50.2292 38.688L50.2332 38.6878"
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
                    className="mt-1 ml-2 mb-14 md:mt-0 lg:mt-[-30px] z-10"
                    alt="Beehive 2"
                  />
                </div>
                <p className="text-black mt-4 leading-relaxed font-lato">
                 Every tiny jab is our promise of protection, health, and hope for a healthier future
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
                  width={327}
                  height={283}
                  src={vaccinationBannerImg}
                  alt="Layer 2"
                  className="absolute bottom-[10px] md:bottom-[-30px] lg:bottom-[10px] w-[340px] md:w-[360px] h-auto"
                />
      
               {/*  <Image
                  width={50}
                  height={50}
                  src={HexagonBlue}
                  alt="Layer 3"
                  className="absolute bottom-[90px]  right-[11px]  w-[20px]  h-auto"
                /> */}
      
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