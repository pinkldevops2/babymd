"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MaskReveal4 = ({ className }) => {
  const maskPathRef = useRef(null);

  useEffect(() => {
    const path = maskPathRef.current;
    const length = path.getTotalLength();

    // Init stroke dash
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate with scroll scrub (for gradual reveal and hide)
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        end: "top 20%",
        scrub: true, // ← this binds animation to scroll progress
      },
    });
  }, []);

  const pathData = `M55.856 41.4906C56.6442 41.2385 57.416 40.862 58.2175 40.7537C65.3053 39.8261 ... 55.8603 41.4903L55.856 41.4906Z`;

  return (
    <svg
      className={className}
      width="139"
      height="51"
      viewBox="0 0 139 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="theMask4" maskUnits="userSpaceOnUse">
          <path
            ref={maskPathRef}
            d={pathData}
            stroke="white"
            strokeWidth="4"
            fill="none"
          />
        </mask>
      </defs>

      <g mask="url(#theMask4)">
        <path
          d={pathData}
          stroke="#FFD25D"
          strokeWidth="1.5"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default MaskReveal4;