'use client';
import Image from 'next/image';
import SubHeading from '../../../../../components/SubHeading';

import beehive2 from '../../../../../public/images/serviceassets/beehive2.png';

export default function Paragraph() {
  return (

          <div className="w-full mt-0 px-6 pb-5 pt-7 relative">
        <SubHeading
          mainText={<>Care that</>}
          highlightText={<>feels like</>}
          subText={<><i>home</i></>}
        />
        <Image
          width={33}
          height={30}
          src={beehive2}
          alt="Beehive"
          className="absolute right-[20px] top-[65px]"
        />

        <p className="pt-8">
          At BabyMD, we’re that go-to kids’ clinic right around the corner — open all 7 days because we know fevers and falls don’t wait for weekdays. No long queues, no hospital chaos — just friendly faces, expert care, and doctors who actually listen. Whether it’s a rash, a runny nose, or just something that’s been bugging you, no question is too small. We treat every child like the little miracle they are, and keep track of everything so you don’t have to.

        </p>
      </div>
  );
}