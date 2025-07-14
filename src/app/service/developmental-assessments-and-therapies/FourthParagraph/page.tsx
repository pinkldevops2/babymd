'use client';
import Image from 'next/image';
import SubHeading4 from "../../../../components/SubHeading4";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Paragraph() {

    const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if(!path) return;
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
        duration: 3,
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (

          <div className="w-full mt-0 px-6 pb-5 pt-0 relative bg-white">
        
        <SubHeading4
            mainText={<>Personalised,</>}
            highlightText={<>play-based therapy plans, backed by</>}
            subText={
              <>
                <i> expert care</i>
              </>
            }
          />

        <p className="pt-6">
       At BabyMD, therapy isn’t just about sessions — it’s about building the right foundation for your child’s future. Guided by our developmental paediatrician, each therapy is tailored to your child’s needs, delivered by experienced professionals, and reviewed regularly to track progress. Here are the therapies we offer:
        </p>


     
      </div>
  );
}