"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface MaskReveal4Props {
  className?: string;
}

const MaskReveal4: React.FC<MaskReveal4Props> = ({ className = "" }) => {
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
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <svg
      className={className}
      width="134"
      height="46"
      viewBox="0 0 134 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={pathRef}
        d="M50.5 42.1102C48.3697 42.1102 39.8355 43.3474 32.5 42.1102C25.1645 40.873 20.8857 39.046 13.893 36.1471C10.1361 34.5886 6.32684 33.0865 3.3174 29.8746C1.51547 27.9521 1.23939 25.6106 2.9314 23.6615C4.29885 22.0898 5.84853 20.6129 7.5383 19.5178C12.6327 16.2214 18.2411 14.2627 23.9223 12.642C34.8413 9.52959 45.9074 7.25217 57.1478 5.89966C70.0095 4.34882 82.9007 3.6789 95.8545 3.93607C103.474 4.08932 111.064 4.64489 118.59 6.17406C122.549 6.97699 126.495 7.93021 129.819 10.664C132.394 12.784 133.42 15.7731 130.243 18.4521C129.659 18.9423 129.056 19.4047 128.444 19.8532C123.482 23.4789 117.837 25.4013 112.254 27.2812C106.131 29.3398 99.8275 30.7681 93.5703 32.3237C88.1175 33.6793 82.6589 35.0786 77.1352 35.99C70.0837 37.1518 62.9585 37.8261 55.8708 38.7537C55.0693 38.862 54.2975 39.2385 53.5093 39.4906L53.5136 39.4903"
        stroke="#FFD25D"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MaskReveal4;