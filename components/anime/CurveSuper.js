
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CurveSuper = ({ className }) => {
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
<svg width="124" className={className} height="35" viewBox="0 0 124 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M43.7448 33.1059C39.9136 32.4596 36.0471 31.9796 32.2433 31.1869C25.6033 29.7988 19.085 27.9317 12.8531 25.1979C9.50508 23.7283 6.10594 22.3023 3.53571 19.5145C1.99673 17.8457 1.87738 15.9109 3.53606 14.3982C4.87637 13.1786 6.378 12.0458 7.98604 11.2335C12.8338 8.78876 18.0756 7.46744 23.3648 6.42703C33.5303 4.4296 43.7828 3.12455 54.1421 2.58707C65.9958 1.9694 77.8264 2.07586 89.6616 2.946C96.6234 3.45947 103.534 4.30141 110.332 5.93875C113.908 6.79884 117.464 7.78161 120.348 10.1933C122.584 12.0633 123.352 14.5675 120.294 16.6035C119.732 16.9758 119.154 17.3244 118.568 17.6612C113.823 20.3829 108.549 21.6726 103.335 22.9305C97.6173 24.3076 91.7695 25.1585 85.9571 26.1161C80.892 26.9506 75.819 27.8207 70.7142 28.2873C64.1976 28.8814 57.6414 29.072 51.1049 29.4723C50.3655 29.5203 49.6381 29.7898 48.9028 29.9565L48.9067 29.9565C48.9186 30.0752 48.9305 30.1939 48.9423 30.3126" stroke="#F8845D" stroke-width="3"/>
</svg>
  );
};

export default CurveSuper;
