"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSubC = () => {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const animation = gsap.fromTo(
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
          // scrub: true,
          // markers: true,
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <svg
      viewBox="0 0 109 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[80px] top-[9px] left-[-9px]"
    >
      <path
        ref={pathRef}
        d="M41.4128 38.2721C37.5423 40.1514 33.7409 38.8543 29.9767 38.0822C24.6716 36.992 19.4755 35.2741 14.4845 32.6636C10.7054 30.6877 6.99596 28.5152 3.90695 24.9972C0.924558 21.5985 1.70067 17.2001 4.38883 14.477C8.30645 10.5057 13.0356 8.7875 17.835 7.44489C20.4227 6.71997 23.0137 6.00786 25.6215 5.41953C28.2226 4.83548 30.8406 4.38375 33.4586 3.95337C34.0973 3.8458 34.7663 4.0413 35.129 4.07071C35.9306 3.85192 36.4894 3.70176 37.0449 3.54306C37.8897 3.30714 38.8413 3.32723 39.6065 3.31341C40.7378 3.29057 41.8842 2.19186 43.13 3.18923C43.5996 3.5643 44.5171 2.96112 45.2357 2.88333C47.0721 2.68025 48.9119 2.50705 50.7516 2.34666C52.7245 2.17756 54.7006 1.95722 56.6769 1.91192C57.8647 1.88474 59.053 2.23325 60.2442 2.27011C61.1393 2.29881 62.0373 2.00732 62.9323 2.02322C64.393 2.0469 65.8506 2.25417 67.3114 2.2864C68.243 2.30652 69.2472 1.82277 70.0961 2.12477C72.323 2.91164 74.565 2.46469 76.7912 2.64533C79.5099 2.86374 82.232 3.16754 84.9343 3.62079C90.988 4.63316 97.0748 5.56864 102.672 9.01937C103.755 9.68822 104.804 10.6133 105.654 11.6965C108.374 15.1724 107.797 19.8181 104.503 22.3456C100.076 25.7413 95.2273 27.656 90.2315 28.9391C83.822 30.587 77.3656 31.9446 70.9427 33.5156C64.9289 34.9879 58.8642 35.7003 52.752 35.6571C49.9304 35.6353 47.1117 35.2206 44.2898 34.9553C43.987 34.9258 43.6972 34.7085 43.4009 34.5765"
        stroke="#FFD25D"
        strokeWidth="3"
      />
    </svg>
  );
};

export default ContactSubC;