import React, { useEffect } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

// Register the DrawSVGPlugin
gsap.registerPlugin(DrawSVGPlugin);

const SpringHome1 = ({ className }) => {
  useEffect(() => {
    const targets = gsap.utils.toArray("#maskReveal path");
    const appendGroup = document.querySelector("#theMask");

    targets.forEach((obj) => {
      const clone = obj.cloneNode(true);
      clone.removeAttribute("stroke-dasharray");
      gsap.set(clone, {
        attr: { stroke: "white" },
        drawSVG: "100% 100%",
      });
      appendGroup.appendChild(clone);
    });

    gsap.to("#theMask path", {
      duration: 2,
      ease: "power1.inOut",
      stagger: 0.25,
      drawSVG: "100% 0%",
    });
  }, []);

  return (
    <svg
      className={className}
      width="57"
      height="131"
      viewBox="0 0 57 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <mask id="theMask" maskUnits="userSpaceOnUse">
          {/* Mask content will be dynamically added via JS */}
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