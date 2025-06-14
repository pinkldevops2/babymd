"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

interface SpringHome3Props {
  className?: string;
}

const SpringHome3: React.FC<SpringHome3Props> = ({ className }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const maskRef = useRef<SVGGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const mask = maskRef.current;

    if (!svg || !mask) return;

    const paths = svg.querySelectorAll<SVGPathElement>("#maskReveal3 path");

    paths.forEach((originalPath) => {
      const clone = originalPath.cloneNode(true) as SVGPathElement;
      clone.removeAttribute("stroke-dasharray");
      clone.setAttribute("stroke", "white");

      gsap.set(clone, { drawSVG: "100% 100%" }); // Initially hidden
      mask.appendChild(clone);
    });

    gsap.to(mask.querySelectorAll("path"), {
      drawSVG: "0% 100%",
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.25,
      scrollTrigger: {
        trigger: svg,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (mask) mask.innerHTML = "";
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width="94"
      height="71"
      viewBox="0 0 94 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="theMask3" maskUnits="userSpaceOnUse">
          <g ref={maskRef}></g>
        </mask>
      </defs>
      <g id="maskReveal3" mask="url(#theMask3)">
        <path
          d="M54.3465 28.9252L53.3471 28.9615L53.3471 28.9615L54.3465 28.9252ZM46.0453..."
          fill="#5943A5"
        />
      </g>
    </svg>
  );
};

export default SpringHome3;