"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "../../../../components/SubHeading";
import beehive2 from "../../../../../public/images/serviceassets/beehive2.png";
gsap.registerPlugin(ScrollTrigger);
export default function Paragraph() {
  const pathRef = useRef(null);

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
      <div className="w-full mt-0 px-6 pb-5 pt-7 relative  ">
        {/* <SubHeading
          mainText={<>From first shots to boosters,</>}
          highlightText={<> we’ve got </>}
          subText={<><i>you!</i></>}
        /> */}
        <h2 className="text-[28px] leading-[28px] max-w-[300px] font-bold font-baloo2 mt-2">
          From first shots to boosters,
          <span className=" text-[#4B3A8F]">
            {" "}
            we’ve got{" "}
            <i className="relative z-[2] font-light">
              you
              <div className="absolute z-[-1] left-[-5px] top-2">
                <svg
                  viewBox="0 0 137 47"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[100px] h-auto overflow-visible "
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
            </i>
          </span>
        </h2>

        <Image
          width={33}
          height={30}
          src={beehive2}
          alt="Beehive"
          className="absolute right-[20px] top-[-5px]"
        />
        <p className="p-5 pl-1">
          {" "}
          At BabyMD, we see vaccinations as a vital step in your child’s growth
          and protection — not just a medical task. Every dose is given with
          care and precision, and we keep you informed at every step so there
          are no surprises, only reassurance.
        </p>
      </div>
    </div>
  );
}
