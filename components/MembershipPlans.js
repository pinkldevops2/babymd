import { useState, useRef,useEffect } from 'react';
import Image from "next/image";
import SuperDocButton from "./SuperDocButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MembershipPlans = ({
  goldPackageImg,
  platinumPackageImg,
  premiumLayerBg,
  premiumLayerImg,
  onClick
}) => {

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
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%", // when the top of path hits 80% of viewport height
          end: "bottom 60%", // optional, for scrub
          toggleActions: "play none none reverse", // customize as needed
          // scrub: true, // if you want scroll-linked animation
        }
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
              <svg className="w-[120px] h-auto overflow-visible relative z-4" width="147" height="35" viewBox="0 -1 150 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    ref={pathRef}
    d="M57.904 29.4999C58.7587 29.3393 59.6042 29.0796 60.4635 29.0333C68.0603 28.647 75.6802 28.4626 83.2541 27.8896C89.187 27.4396 95.0831 26.6011 100.97 25.7969C107.726 24.8739 114.522 24.0538 121.168 22.7271C127.228 21.515 133.357 20.2725 138.872 17.6511C139.553 17.3268 140.225 16.991 140.878 16.6324C144.433 14.6716 143.54 12.2605 140.943 10.4601C137.59 8.13835 133.457 7.19255 129.302 6.36488C121.402 4.78925 113.37 3.97953 105.279 3.48608C91.5237 2.64989 77.7739 2.54903 63.9971 3.14543C51.9572 3.66441 40.0413 4.92246 28.2264 6.84719C22.079 7.84973 15.9867 9.12274 10.3522 11.4775C8.48314 12.2598 6.73776 13.3507 5.17984 14.5253C3.25187 15.9821 3.39031 17.8451 5.17872 19.4517C8.16552 22.1357 12.1159 23.5083 16.0069 24.923C23.2493 27.5544 30.8248 29.3513 38.5417 30.687C42.9625 31.4497 47.4562 31.9114 51.9089 32.5331C52.9923 32.6848 54.0576 32.924 55.2142 33.1404C49.8946 34.8167 44.6736 33.6583 39.5033 32.9685C32.2163 31.9944 25.0798 30.4602 18.2261 28.1294C13.0367 26.3652 7.94314 24.4257 3.70355 21.2854C-0.38969 18.2516 0.681763 14.3265 4.37806 11.897C9.76488 8.35366 16.2639 6.82128 22.8591 5.62412C26.4149 4.97773 29.9754 4.34277 33.5587 3.81828C37.1329 3.29761 40.7301 2.89503 44.3273 2.51151C45.2049 2.41564 46.1238 2.59026 46.622 2.61658C47.7235 2.4215 48.4914 2.28761 49.2546 2.1461C50.4155 1.93574 51.7229 1.95387 52.7742 1.94171C54.3284 1.92157 55.9047 0.941283 57.6149 1.83163C58.2597 2.16647 59.5209 1.62836 60.5082 1.55909C63.0313 1.37825 65.559 1.22408 68.0867 1.08133C70.7973 0.930843 73.5124 0.734629 76.2276 0.694626C77.8594 0.670622 79.4915 0.981904 81.128 1.01505C82.3576 1.04086 83.5916 0.780912 84.8213 0.795291C86.828 0.816745 88.8302 1.00203 90.837 1.0311C92.1169 1.04926 93.497 0.617758 94.6628 0.887453C97.7214 1.59017 100.802 1.19177 103.86 1.35346C107.595 1.54896 111.334 1.82066 115.046 2.22574C123.362 3.13051 131.723 3.96667 139.409 7.04741C140.895 7.64455 142.335 8.47032 143.502 9.43725C147.234 12.5398 146.437 16.6857 141.908 18.9406C135.822 21.97 129.158 23.6778 122.293 24.8218C113.486 26.291 104.614 27.5012 95.7887 28.9019C87.5251 30.2145 79.1925 30.849 70.7954 30.8092C66.9191 30.789 63.0471 30.4184 59.1707 30.181C58.7547 30.1547 58.3569 29.9606 57.95 29.8428C57.9362 29.7285 57.9224 29.6142 57.9086 29.4999L57.904 29.4999Z"
    fill="none"
    stroke="#5943A5"
    stroke-width="3"
  />
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
            href="" 
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