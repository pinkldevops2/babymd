"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSubD = () => {
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
    <svg width="128" height="41" viewBox="0 0 128 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M50.7055 38.0822C46.1526 39.9616 39.3422 38.8543 34.9144 38.0822C28.6739 36.992 22.5616 35.2741 16.6906 32.6636C12.2453 30.6877 7.88181 28.5152 4.24816 24.9972C0.739936 21.5985 1.65288 17.2001 4.81501 14.477C9.42335 10.5057 14.9863 8.7875 20.632 7.44489C23.6759 6.71997 26.7237 6.00786 29.7913 5.41953C32.851 4.83548 35.9306 4.38375 39.0102 3.95337C39.7615 3.8458 40.5485 4.0413 40.9751 4.07071C41.918 3.85192 42.5754 3.70176 43.2287 3.54306C44.2225 3.30714 45.3419 3.32723 46.2421 3.31341C47.5728 3.29057 48.9214 2.19186 50.3867 3.18923C50.9392 3.5643 52.0185 2.96112 52.8638 2.88333C55.0239 2.68025 57.1881 2.50705 59.3522 2.34666C61.6729 2.17756 63.9974 1.95722 66.3222 1.91192C67.7194 1.88474 69.1172 2.23325 70.5185 2.27011C71.5713 2.29881 72.6276 2.00732 73.6805 2.02322C75.3988 2.0469 77.1134 2.25417 78.8316 2.2864C79.9276 2.30652 81.1088 1.82277 82.1073 2.12477C84.7269 2.91164 87.3642 2.46469 89.9829 2.64533C93.1809 2.86374 96.383 3.16754 99.5618 3.62079C106.683 4.63316 113.843 5.56864 120.427 9.01937C121.7 9.68822 122.935 10.6133 123.934 11.6965C127.134 15.1724 126.456 19.8181 122.581 22.3456C117.373 25.7413 111.67 27.656 105.793 28.9391C98.2533 30.587 93.5553 31.429 86 33C78.9259 34.4723 68.8952 35.7003 61.7053 35.6571C58.3862 35.6353 58.3194 35.9224 55 35.6571C54.6438 35.6277 51.054 34.7085 50.7055 34.5765" stroke="#FFD25D" stroke-width="3" stroke-linecap="round"/>
</svg>
  );
};

export default ContactSubD;