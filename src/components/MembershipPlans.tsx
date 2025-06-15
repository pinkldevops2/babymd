"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import SuperDocButton from "./SuperDocButton2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

type MembershipPlansProps = {
  goldPackageImg: StaticImageData;
  platinumPackageImg: StaticImageData;
  premiumLayerBg?: StaticImageData; // Unused in current layout, keep optional
  premiumLayerImg: StaticImageData;
  onClick: () => void;
};

const MembershipPlans: React.FC<MembershipPlansProps> = ({
  goldPackageImg,
  platinumPackageImg,
  premiumLayerBg,
  premiumLayerImg,
  onClick,
}) => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

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
        duration: 1.7,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="px-6 md:px-6">
      <div className="relative bg-[#FF9A6C] text-white mt-6 mb-4 pt-10 rounded-2xl space-y-4 w-full mx-auto overflow-hidden flex flex-col md:flex-row md:p-6">
        {/* Heading */}
        <div className="px-6 md:w-1/2 md:px-0">
          <h2 className="text-[28px] leading-[30px] font-bold fade-in">
            Because <span className="text-white purple_circle"><span className="relative z-5">parenting</span>
              <svg className="w-[120px] h-auto overflow-visible relative z-4" width="149" height="37" viewBox="0 0 149 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M56.2143 34.1404C50.8947 35.8167 45.6738 34.6583 40.5034 33.9685C33.2164 32.9945 26.0799 31.4602 19.2262 29.1294C14.0368 27.3652 8.94326 25.4257 4.70367 22.2854C0.610432 19.2516 1.68189 15.3265 5.37818 12.897C10.765 9.35366 17.264 7.82128 23.8592 6.62412C27.4151 5.97773 30.9755 5.34277 34.5589 4.81828C38.1331 4.29761 41.7302 3.89503 45.3274 3.51151C46.205 3.41564 47.1239 3.59026 47.6221 3.61658C48.7236 3.4215 49.4915 3.28761 50.2548 3.1461C51.4157 2.93574 52.723 2.95387 53.7743 2.94171C55.3285 2.92157 56.9048 1.94128 58.615 2.83163C59.2598 3.16647 60.521 2.62836 61.5083 2.55909C64.0315 2.37825 66.5592 2.22408 69.0869 2.08133C71.7974 1.93084 74.5125 1.73463 77.2277 1.69463C78.8595 1.67062 80.4916 1.9819 82.1281 2.01505C83.3577 2.04086 84.5917 1.78091 85.8214 1.79529C87.8281 1.81674 89.8304 2.00203 91.8371 2.0311C93.117 2.04926 94.4972 1.61776 95.663 1.88745C98.7215 2.59017 101.802 2.19177 104.86 2.35346C108.595 2.54896 112.334 2.82066 116.046 3.22574C124.362 4.13051 132.723 4.96667 140.409 8.04741C141.895 8.64455 143.335 9.47032 144.502 10.4372C148.234 13.5398 147.437 17.6857 142.909 19.9406C136.822 22.97 130.159 24.6778 123.294 25.8218C114.486 27.291 105.615 28.5012 96.7888 29.9019C88.5252 31.2145 80.1926 31.849 71.7955 31.8092C67.9192 31.789 64.0472 31.4184 60.1708 31.181C59.7548 31.1547 59.357 30.9606 58.9501 30.8428" stroke="#5943A5" stroke-width="3"/>
</svg></span> shouldn&apos;t cost a{' '}
            <span className="italic font-normal">
              <i>fortune</i>
            </span>
          </h2>
          <p className="mt-2 fade-in pb-3" style={{ fontFamily: 'Baloo 2, sans-serif', fontSize: '16px', lineHeight: '22px' }}>
            We know how much you already carry as a parent. That&#39;s why our membership plans are designed to ease a little of that load with expert paediatric care, thoughtful savings of up to ₹10,000 a year, and small comforts that make a big difference.
          </p>
        

        {/* Membership Cards */}
        <div className="flex flex-row md:flex-row gap-3 text-center">
          {/* Gold Plan */}
          <div
            className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2 w-full md:w-1/2 fade-in"
            style={{ boxShadow: '-5px 5px 0 #F4DF76' }}
          >
            <div className="h-20 flex justify-center items-center">
              <Image
                width={70}
                height={50}
                src={goldPackageImg}
                alt="Gold Package"
              />
            </div>
            <h3 className="font-baloo2 font-[700] text-[#5943A5] leading-[18px] mb-0">
              Gold<br />Membership
            </h3>
            <p className="text-sm mb-7">Save more on everyday care</p>
            <p className="text-[#5943A5] font-bold text-lg mt-1 package_price_bg mb-2">
              &#8377;699<span className="text-xs">/year</span>
            </p>
            <ul className="list-none m-0 p-0 text-sm text-[#4D4D4D] mt-2 memberlisting leading-[32px]">
              <li>10% off consults</li>
              <li><span className="leading-[18px] block pt-2 pb-2">5% off other services</span></li>
              <li>&#8377;700 gift card</li>
            </ul>
          </div>

          {/* Platinum Plan */}
          <div
            className="bg-white text-[#231F20] p-4 rounded-2xl space-y-2 w-full md:w-1/2 fade-in"
            style={{ boxShadow: '5px 5px 0 #5943A5' }}
          >
            <div className="h-20 flex justify-center items-center">
              <Image
                width={50}
                height={28}
                src={platinumPackageImg}
                alt="Platinum Package"
              />
            </div>
            <h3 className="font-baloo2 font-[700] text-[#5943A5] leading-[18px] mb-0">
              Platinum<br />Membership
            </h3>
            <p className="text-sm mb-2">Our best value for growing families</p>
            <p className="text-[#5943A5] font-bold text-lg mt-1 package_price_bg mb-2">
              &#8377;999<span className="text-xs">/year</span>
            </p>
            <ul className="list-none m-0 p-0 text-sm text-[#4D4D4D] mt-2 memberlisting leading-[32px]">
              <li>15% off consults</li>
              <li><span className="leading-[18px] block pt-2 pb-2">10% off other services</span></li>
              <li>&#8377;1000 gift card</li>
            </ul>
          </div>
        </div>

        {/* Note */}
        <p
          className="mt-4 fade-in"
          style={{ fontWeight: 400, lineHeight: '22px', fontFamily: 'Lato, sans-serif'}}
        >
          With both plans, you get priority booking at all BabyMD clinics and online consults. Plus, a dedicated Care Manager to handle appointments, reminders, and check-ins so you can focus on what matters most.
        </p>
        </div>

        {/* CTA Button */}
          

        {/* Overlapping Images */}
        <div className="mt-2 pl-6 pb-2 relative md:w-1/2">
        <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 z-10 px-[20px]">
        <SuperDocButton
            onClick={onClick }
            label="PICK A PLAN, START SAVING"
            className="fade-in"
            variant="purple"
          />

          </div>
          <Image
            src={premiumLayerImg}
            alt="Doctor and Child"
            width={420}
            height={350}
            className="w-full fade-in md:absolute md:bottom-0"
          />
        </div>
      </div>
    </div>    
  );
};

export default MembershipPlans;