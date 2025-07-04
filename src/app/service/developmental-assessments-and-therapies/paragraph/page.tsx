'use client';
import Image from 'next/image';
import SubHeading from '../../../../components/SubHeading';

import beehive2 from '../../../../../public/images/serviceassets/beehive2.png';
import SubHeading4 from '../../../../components/SubHeading4';
import SubHeading3 from '../../../../components/SubHeading3';
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

          <div className="w-full mt-0 px-6 pb-5 pt-7 relative bg-white">
       
        <Image
          width={33}
          height={30}
          src={beehive2}
          alt="Beehive"
          className="absolute right-[20px] top-[65px]"
        />

        

        <SubHeading4
          mainText={<>Nurturing their</>}
          highlightText={<> story, </>}
          subText={<><i> chapter by chapter </i></>}
        />

        <p className="pt-8">
         Every child grows at their own pace, but sometimes, they may need a little extra support along the way. At BabyMD, our developmental assessments and therapy services help identify delays early, understand their unique needs, and build a care plan that supports overall development.
        </p>
         <p>
         From speech and social skills to motor skills, coordination, and learning abilities, our team of developmental paediatricians, therapists, and child specialists work together to guide both you and your child. Whether you’re looking for answers, clarity, or ongoing therapy such as Speech Education, Sensory Modulation Therapy, or ADHD Therapy, we’re here to walk this journey with you.
        </p>


        <div className='pt-6'>
         
         <SubHeading3
          mainText={<> Why parents choose </>}
          highlightText={<> </>}
          subText={<><i> BabyMD </i></>}
        />
      
        <p className="pt-6">
         When it comes to your child’s development, we know you’re not just looking for therapy sessions — you’re looking for a place you can trust. A place that listens, explains, and supports your family every step of the way.<br/><br/>

          Here’s why families across Bangalore choose BabyMD:

        </p>
        </div>
      </div>
  );
}