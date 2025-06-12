'use client';
import Image from 'next/image';
import SubHeading from '../../../../components/SubHeading';

import beehive2 from '../../../../public/images/serviceassets/beehive2.png';

export default function Paragraph() {
  return (

         <div className="w-full mt-0 px-6 pb-5 pt-7 relative">
                <SubHeading
                mainText={<>Trusted by parents,</>}
                highlightText={<>loved by</>}
                subText={<><i>kids</i></>}
                />
                <Image
                width={33}
                height={30}
                src={beehive2}
                alt="Beehive"
                className="absolute right-[20px] top-[65px]"
                />

                <p className="pt-1 pr-8">
                Our doctors bring decades of experience and training from some of India’s top medical institutes. But what truly sets them apart is their passion for paediatrics and their commitment to making every child (and parent) feel heard, safe, and cared for.

                </p>
            </div>
  );
}