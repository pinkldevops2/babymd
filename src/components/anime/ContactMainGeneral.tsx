"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMainC = () => {
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
    <svg width="270" height="54" viewBox="0 0 256 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        ref={pathRef}
        d="M100.574 40.7541C91.243 42.6227 77.035 41.8284 68.036 40.7541C55.353 39.2378 42.9495 37.0295 31.0635 33.8403C22.0637 31.4262 13.2365 28.7976 5.93534 24.7078C-1.11373 20.757 0.874142 15.9095 7.39593 13.0348C16.9006 8.84216 28.2846 7.20194 39.8265 5.9835C46.0493 5.32541 52.2798 4.68175 58.5469 4.17673C64.798 3.67609 71.0856 3.32358 77.3726 2.99482C78.9064 2.91175 80.5042 3.1675 81.3727 3.22098C83.3002 3.02354 84.6437 2.88853 85.9796 2.74383C88.0112 2.52981 90.2913 2.60665 92.1258 2.6351C94.8377 2.67448 97.6173 1.51812 100.574 2.69874C101.689 3.1428 103.905 2.52447 105.63 2.4791C110.037 2.35839 114.451 2.2711 118.865 2.19807C123.598 2.12296 128.341 1.99105 133.079 2.05384C135.926 2.09163 138.764 2.5473 141.618 2.6565C143.762 2.73968 145.923 2.4669 148.068 2.53583C151.568 2.64582 155.055 2.95982 158.555 3.07931C160.787 3.15503 163.208 2.6745 165.234 3.059C170.548 4.0617 175.935 3.69297 181.265 4.02136C187.774 4.41997 194.289 4.91373 200.753 5.57259C215.232 7.04521 229.793 8.43422 243.109 12.5927C245.683 13.3986 248.171 14.4875 250.176 15.741C256.594 19.7627 255.078 24.8967 247.11 27.5192C236.4 31.0424 224.724 32.8944 212.713 34.0354C197.303 35.5011 181.79 36.6413 166.351 38.0209C151.895 39.314 137.339 39.7591 122.691 39.3611C115.93 39.1752 103.255 36.9566 96.5 36.5"
        stroke="#FFD25D"
        strokeWidth="3"
      />
    </svg>
  );
};

export default ContactMainC;