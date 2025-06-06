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
        duration: 2.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",      // adjust these as needed
          end: "bottom 60%",
          toggleActions: "play none none reverse", // or "restart pause resume reverse"
          // scrub: true,        // if you want scroll-based drawing
          // markers: true,      // enable for debug
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
                <svg className="w-[200px] h-auto overflow-visible" width="163" height="38" viewBox="0 0 163 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M64.6475 31.4355C65.5869 31.268 66.5161 30.9971 67.4607 30.9488C75.8105 30.5455 84.1857 30.3529 92.5103 29.755C99.0313 29.2855 105.512 28.4107 111.982 27.5717C119.407 26.6089 126.878 25.7533 134.182 24.3693C140.843 23.105 147.58 21.8089 153.642 19.0747C154.39 18.7364 155.128 18.3862 155.847 18.0122C159.754 15.967 158.773 13.4524 155.918 11.5749C152.233 9.15353 147.691 8.16728 143.123 7.30423C134.44 5.66125 125.612 4.81707 116.719 4.30276C101.601 3.4312 86.4879 3.32656 71.3455 3.94911C58.1122 4.49085 45.0152 5.80338 32.0291 7.81122C25.2724 8.85705 18.5761 10.185 12.383 12.641C10.3287 13.4571 8.41028 14.5949 6.6979 15.82C4.57877 17.3394 4.73086 19.2824 6.69648 20.9579C9.97922 23.757 14.3211 25.1884 18.5977 26.6636C26.5579 29.4078 34.8842 31.2815 43.366 32.6743C48.2249 33.4696 53.164 33.9509 58.058 34.5992C59.2488 34.7573 60.4196 35.0068 61.6909 35.2324C55.844 36.9809 50.1056 35.773 44.4227 35.0538C36.4135 34.0382 28.5697 32.4383 21.0367 30.0077C15.333 28.168 9.73471 26.1453 5.07501 22.8703C0.576175 19.7065 1.75398 15.6128 5.81675 13.0788C11.7376 9.38311 18.8809 7.78467 26.1299 6.53585C30.0382 5.86156 33.9516 5.19919 37.8901 4.65205C41.8186 4.10888 45.7723 3.68887 49.7261 3.28874C50.6906 3.18872 51.7006 3.3708 52.2483 3.39823C53.459 3.19473 54.3029 3.05506 55.1419 2.90745C56.4178 2.688 57.8548 2.70687 59.0103 2.69414C60.7185 2.67307 62.4511 1.65063 64.3308 2.57915C65.0395 2.92833 66.4257 2.36707 67.5109 2.29479C70.2841 2.10608 73.0624 1.94519 75.8406 1.79622C78.8198 1.63916 81.804 1.43441 84.7884 1.39258C86.582 1.36748 88.3758 1.69207 90.1745 1.72657C91.526 1.75344 92.8824 1.48228 94.2339 1.49723C96.4395 1.51953 98.6402 1.71269 100.846 1.74293C102.253 1.76182 103.77 1.31173 105.051 1.59296C108.413 2.32573 111.799 1.9101 115.16 2.07861C119.265 2.28237 123.375 2.56559 127.455 2.98791C136.594 3.93121 145.784 4.80294 154.232 8.01567C155.865 8.63839 157.448 9.49956 158.73 10.508C162.832 13.7436 161.956 18.0675 156.979 20.4195C150.289 23.5792 142.965 25.3606 135.419 26.554C125.739 28.0866 115.988 29.3491 106.287 30.8103C97.2045 32.1796 88.046 32.8417 78.8166 32.8005C74.5561 32.7796 70.3003 32.3932 66.0396 32.1458C65.5824 32.1183 65.1452 31.916 64.698 31.7931C64.6828 31.6739 64.6676 31.5547 64.6525 31.4355L64.6475 31.4355Z" stroke="#F0CB46" stroke-width="2.5"/>
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