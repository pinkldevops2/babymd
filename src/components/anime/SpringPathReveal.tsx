"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

interface SpringPathRevealProps {
  className?: string;
}

const SpringPathReveal: React.FC<SpringPathRevealProps> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const maskRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const mask = maskRef.current;

    if (!svg || !mask) return;

    const paths = svg.querySelectorAll<SVGPathElement>("#maskReveal2 path");

    paths.forEach((originalPath) => {
      const clone = originalPath.cloneNode(true) as SVGPathElement;
      clone.removeAttribute("stroke-dasharray");
      clone.setAttribute("stroke", "white");

      gsap.set(clone, { drawSVG: "0% 0%" }); // Start from 0 length
      mask.appendChild(clone);

      gsap.to(clone, {
        drawSVG: "0% 100%", // Animate from start to end
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: svg,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      mask.innerHTML = "";
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width="702"
      height="1483"
      viewBox="0 0 702 1483"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="theMask2" maskUnits="userSpaceOnUse">
          <g ref={maskRef}></g>
        </mask>
      </defs>
      <g id="maskReveal2" mask="url(#theMask2)">
        <path
          d="M562.281 1C622.65 85.712 564.523 223.683 298.897 323.39C33.2715 423.097 406.813 785.479 670.362 958.149C763.837 1080.19 667.246 1366.71 0.4552 1482"
          stroke="#5943A5"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </g>
    </svg>
  );
};

export default SpringPathReveal;