import Image from "next/image";
import { useEffect, useRef } from "react";
import SuperDocButton from './SuperDocButton';
import { gsap } from "gsap";

const ReadySection = ({ readyvector, readyvectorImg, bluebtnarrow, onClick }) => {

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
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%", // animate when path enters 80% of viewport height
          toggleActions: "play none none reverse",
          // scrub: true, // if you want scroll-progress-based drawing
          // markers: true, // uncomment for debugging
        },
      }
    );
  }, []);

  return (
    <div className="px-6 py-6 md:pt-2 md:px-6">
      {/* Parent container: relative for button positioning on mobile */}
      <div className="relative overflow-hidden bg-[#5943A5] text-white rounded-2xl px-6 pt-10 lg:p-6 w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-0">
          {/* Left: Text Content (60% on desktop) */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="fade-in font-baloo2 text-[28px] md:text-[28px] leading-[30px] font-bold pb-2">
              Whenever you need us, we&#39;re here &mdash; with<br/>care{' '}
              <span className="italic font-light text-white px-1 yellow_circle relative">
                <i className="relative z-3">that&#39;s ready</i>
                <svg className="w-[200px] h-auto overflow-visible" width="157" height="35" viewBox="0 0 157 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M58.6909 33.2383C57.4196 33.0127 56.2488 32.7631 55.058 32.605C50.164 31.9568 45.2249 31.4755 40.366 30.6802C31.8842 29.2874 23.5579 27.4137 15.5977 24.6695C11.3211 23.1943 6.97922 21.7629 3.69648 18.9637C1.73086 17.2882 1.57877 15.3452 3.6979 13.8258C5.41028 12.6007 7.32872 11.4629 9.38303 10.6469C15.5761 8.19083 22.2724 6.86291 29.0291 5.81709C42.0152 3.80924 55.1122 2.49671 68.3455 1.95497C83.4879 1.33242 98.6006 1.43706 113.719 2.30862C122.612 2.82293 131.44 3.66711 140.123 5.31009C144.691 6.17314 149.233 7.15939 152.917 9.58073C155.773 11.4583 156.754 13.9729 152.847 16.0181C152.128 16.3921 151.39 16.7423 150.642 17.0806C144.58 19.8147 137.843 21.1109 131.182 22.3752C123.878 23.7592 116.407 24.6148 108.982 25.5776C102.512 26.4166 96.0313 27.2914 89.5103 27.7609C81.1857 28.3588 72.8105 28.5514 64.4606 28.9546C63.5161 29.003 62.5868 29.2738 61.6474 29.4414L61.6525 29.4414C61.6676 29.5606 61.6828 29.6798 61.6979 29.799" stroke="#F0CB46" stroke-width="3" stroke-linecap="round"/>
</svg>
              </span>
            </h2>

            <p className="fade-in leading-relaxed font-lato text-[#FFFFFF]">
              Just pick a time and choose a clinic. We will handle the rest, so you can focus on the moments that matter.
            </p>
          </div>

          {/* Right: Image (40% on desktop) */}
          <div className="w-full lg:w-2/5 relative lg:mt-0 md:h-[300px] lg:h-[300px]">
            <div className="flex justify-center lg:justify-end items-end">
              <div className="relative w-[100%] lg:w-full h-[270px] md:h-[270px] mx-auto lg:mx-0 lg:h-[430px]">
                <Image
                  src={readyvectorImg}
                  alt="Family"
                  fill
                  className="fade-in object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Button: absolute on mobile (20px from bottom), static on desktop */}
        <div className="absolute  bottom-[20px] left-1/2 transform -translate-x-1/2 w-full px-6 lg:transform-none lg:px-0 lg:w-auto lg:mt-8 lg:w-fit lg:relative lg:left-[152px]">
          <SuperDocButton href="" onClick={onClick } label="BOOK YOUR APPOINTMENT" className="text-center justify-center fade-in" variant="yellow" textColor="#5943A5"/>
        </div>
      </div>
    </div>
  );
};

export default ReadySection;