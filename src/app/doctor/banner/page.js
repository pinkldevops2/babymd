"use client";

import Image from "next/image";
//import serviceVector from "../../../../../public/images/serviceassets/serviceVector.png";
import serviceVector from "../../../../public/images/serviceassets/serviceVector.png";
import serviceVectorimg1 from "../../../../public/images/doctorassets/doctorbg.png";
import DoctorCurveimg from "../../../../public/images/doctorassets/doctorbgbottom.png";
import beehive2 from "../../../../public/images/serviceassets/beehive2.png";
import bannerBumpYellow from "../../../../public/images/serviceassets/bannerBumpYellow.png";
import HexagonBlue from "../../../../public/images/serviceassets/HexagonBlue.png";
import BannerGroupHexagon from "../../../../public/images/serviceassets/BannerGroupHexagon.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Banner() {

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
    <div className="">
      <div className="relative bg-[#F9EEB6] flex flex-col md:flex-row items-center px-6 py-4 md:p-6">
        {/* Text Content */}
        <div className="md:w-1/2">
          <div className="relative flex items-center">
            <h2 className="text-[34px] leading-[34px] text-[#4B3A8F] max-w-[400px] font-bold font-baloo2 mt-2">
              Meet the &nbsp;
              <i className="relative z-[2] font-light text-[#4B3A8F]"> 
                   superheroes &nbsp;
                   <div className='absolute z-[-1] left-[-7px] top-[-2px]' >
                    <svg
                      viewBox="0 0 137 47"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[140px] h-auto overflow-visible "
                    >
                      <path
                        ref={pathRef}
                        d="M117.403 6.9899C116.273 7.19476 115.156 7.52267 114.02 7.58553C103.973 8.11242 93.894 8.38853 83.8784 9.14726C76.0328 9.74294 68.2382 10.8213 60.4554 11.857C51.5245 13.0455 42.5385 14.1066 33.7555 15.7962C25.7456 17.3397 17.6452 18.9216 10.3642 22.2131C9.46541 22.6204 8.57876 23.0417 7.71645 23.4914C3.0251 25.95 4.22013 28.9408 7.66653 31.162C12.1141 34.0266 17.5865 35.1765 23.0884 36.1794C33.5474 38.0888 44.1768 39.0455 54.8826 39.6089C73.0826 40.5632 91.2716 40.6039 109.492 39.7778C125.416 39.0587 141.171 37.4219 156.789 34.9573C164.915 33.6736 172.967 32.0541 180.407 29.0932C182.875 28.1094 185.178 26.743 187.232 25.2738C189.774 23.4516 189.58 21.1373 187.205 19.1518C183.239 15.8349 178.006 14.1534 172.851 12.4195C163.255 9.19403 153.224 7.0078 143.008 5.39545C137.156 4.47487 131.209 3.92884 125.316 3.18366C123.882 3.00189 122.471 2.7111 120.94 2.44935C127.967 0.333418 134.88 1.74079 141.724 2.56614C151.368 3.73171 160.817 5.59434 169.897 8.44851C176.771 10.6089 183.52 12.9878 189.146 16.8641C194.578 20.6088 193.183 25.4931 188.307 28.5351C181.202 32.9715 172.613 34.9158 163.896 36.4441C159.196 37.2693 154.49 38.0803 149.753 38.7542C145.028 39.4232 140.272 39.9456 135.515 40.4444C134.355 40.569 133.138 40.3576 132.479 40.328C131.023 40.5772 130.008 40.7483 128.999 40.9289C127.465 41.1974 125.736 41.1829 124.345 41.2045C122.289 41.2391 120.209 42.467 117.942 41.3712C117.087 40.959 115.422 41.6355 114.116 41.7277C110.78 41.9679 107.437 42.1751 104.094 42.3681C100.51 42.5718 96.9191 42.8323 93.3276 42.8988C91.1691 42.9387 89.0084 42.5619 86.8435 42.5308C85.2168 42.5063 83.5859 42.8369 81.9592 42.8266C79.3046 42.8123 76.6549 42.5944 74.0003 42.5707C72.3071 42.556 70.4839 43.1007 68.9402 42.7727C64.8903 41.9183 60.8175 42.4324 56.7712 42.2503C51.8298 42.0304 46.8818 41.7158 41.9692 41.2353C30.9644 40.1621 19.8995 39.1746 9.71471 35.3935C7.7456 34.6606 5.83544 33.6433 4.28715 32.4489C-0.667423 28.6164 0.363355 23.4595 6.3407 20.6294C14.3749 16.8273 23.1796 14.664 32.2541 13.2001C43.8964 11.32 55.6249 9.76147 67.2918 7.96651C78.2155 6.2844 89.2344 5.44458 100.342 5.44234C105.47 5.44349 110.594 5.88027 115.723 6.1513C116.274 6.18151 116.801 6.42019 117.34 6.5641C117.359 6.70604 117.378 6.84798 117.397 6.98993L117.403 6.9899Z"
                        fill="none"
                        stroke="#F8845D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
              </div>
                </i>
              <span className=" text-black">
                behind your child’s care
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
          <p className=" md:text-base lg:text-lg text-black mt-4 leading-relaxed font-lato">
            From tantrums to teething, our pediatricians are on-call, on-point and, honestly, a bit obsessed with tiny humans.
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
            width={150}
            height={500}
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
  {/*     <Image
            width={50}
            height={50}
            src={DoctorCurveimg}
            alt="Layer 3"
            className="w-full"
          /> */}
        <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 390 54" className="w-full">
        <path d="m197.8 13.3c68 14.5 130.3 57.6 185.8 0l65.5-86.1h-458.1v126.8c41.9-24 122.8-58.6 206.8-40.7z"  fill="#F9EEB6"/>
    </svg>
    </div>
  );
}
