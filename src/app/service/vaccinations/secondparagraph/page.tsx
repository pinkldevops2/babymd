"use client";
import SubHeading from '../../../../components/SubHeading';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function SecondParagraph() {
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
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%", // adjust as needed
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <div className=" bg-white ">
      <div className="py-4 px-6">
        
      <div className='max-w-[300px]'>
        <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Vaccination schedule
          <span className=" text-[#4B3A8F]">
            {" "}we{" "}
            <i className="relative z-[2] font-light">
              follow
              <div className="absolute z-[-1] left-[-5px] top-0">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[110px] h-auto overflow-visible "
                >
                  <path
                    ref={pathRef}
                    d="M51.5 42.7882C50.4656 42.5819 46.155 42.918 45.19 42.7882C41.2244 42.2568 37.2352 41.9268 33.2867 41.2182C26.394 39.9759 19.5899 38.1522 13.0141 35.2718C9.48117 33.7233 5.89927 32.2302 3.06343 29.053C1.36543 27.1512 1.09917 24.8407 2.68239 22.9231C3.96193 21.3769 5.41289 19.9246 6.99654 18.8494C11.771 15.613 17.0323 13.6977 22.3629 12.1159C32.6081 9.07832 42.9939 6.86483 53.5461 5.56421C65.6203 4.07278 77.725 3.4504 89.8912 3.7427C97.0478 3.9166 104.177 4.48725 111.249 6.01808C114.97 6.82191 118.679 7.77395 121.808 10.4806C124.233 12.5794 125.206 15.5309 122.23 18.1641C121.683 18.6459 121.118 19.1002 120.545 19.5408C115.895 23.1025 110.6 24.9819 105.362 26.8197C99.6183 28.832 93.7023 30.2221 87.8306 31.7379C82.7138 33.0588 77.5915 34.4229 72.4067 35.3054C65.7879 36.4304 59.0984 37.0743 52.4448 37.9682C51.6923 38.0726 50.9687 38.4417 50.2292 38.688L50.2332 38.6878"
                    fill="none"
                    stroke="#F8845D"
                    strokeWidth={3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </i>
          </span>
        </h2>
      </div>


        <p className="pt-5">
          We follow the Indian Academy of Pediatrics (IAP) recommended schedule
          — the gold standard for childhood immunization in India. Here’s a
          quick look at key vaccine milestones:
        </p>
      </div>
    </div>
  );
}
