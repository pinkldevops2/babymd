"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactSubC = () => {
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
        duration: 1.8,
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
    <svg width="105" height="35" viewBox="0 0 105 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M43.228 30.1836C48.7574 29.7693 54.3037 29.5707 59.8162 28.9569C64.1343 28.475 68.4253 27.5779 72.7097 26.7175C77.6261 25.73 82.5726 24.8525 87.4086 23.4337C91.8188 22.1376 96.2789 20.8088 100.291 18.0072C100.787 17.6605 101.275 17.3017 101.75 16.9185C104.336 14.8229 103.684 12.2472 101.792 10.3244C99.3496 7.84474 96.3404 6.83519 93.3147 5.95184C87.563 4.27023 81.7158 3.40688 75.8259 2.88144C65.8129 1.99102 55.8044 1.88618 45.7768 2.52624C37.0136 3.08322 28.3411 4.42974 19.7429 6.48847C15.2691 7.5608 10.8357 8.92208 6.73646 11.4389C5.37671 12.2751 4.10723 13.4409 2.97428 14.6961C1.57223 16.2528 1.67467 18.2431 2.9779 19.959C5.15438 22.8258 8.03108 24.2914 10.8646 25.8018C16.1387 28.6115 23.3817 29.5746 29 31C32.2185 31.8139 35.4899 32.3062 38.7315 32.9694" stroke="#FFD25D" stroke-width="3"/>
</svg>
  );
};

export default ContactSubC;