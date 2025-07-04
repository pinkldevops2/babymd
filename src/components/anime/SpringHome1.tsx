"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);

interface SpringHome1Props {
  className?: string;
}

const SpringHome1: React.FC<SpringHome1Props> = ({ className = "" }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const maskRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const mask = maskRef.current;

    if (!svg || !mask) return;

    const targets = svg.querySelectorAll<SVGPathElement>("#maskReveal path");

    targets.forEach((originalPath) => {
      const clone = originalPath.cloneNode(true) as SVGPathElement;
      clone.removeAttribute("stroke-dasharray");

      gsap.set(clone, {
        attr: { stroke: "white" },
        drawSVG: "100% 100%",
      });

      mask.appendChild(clone);
    });

    gsap.to(mask.querySelectorAll("path"), {
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.25,
      drawSVG: "100% 0%",
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (maskRef.current) maskRef.current.innerHTML = "";
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width="57"
      height="131"
      viewBox="0 0 57 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="theMask" maskUnits="userSpaceOnUse">
          <g ref={maskRef}></g>
        </mask>
      </defs>
      <g id="maskReveal" mask="url(#theMask)">
        <path
          d="M55.6416 5.24121C38.025 21.2367 -11.2643 60.8678 14.527 91.7612C29.5366 109.74 48.0182 87.8276 40.425 79.9698C32.8318 72.1121 -5.89555 118.343 40.4248 129.97"
          stroke="#5943A5"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </g>
    </svg>
  );
};

export default SpringHome1;