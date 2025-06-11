"use client";
import Image from 'next/image';
import SubHeading from '../../../../../components/SubHeading';
import beehive2 from '../../../../../public/images/serviceassets/beehive2.png';

export default function Paragraph() {
  return (
    <div className=" bg-white ">
      <div className="w-full mt-0 px-6 pb-5 pt-7 relative  ">
         <SubHeading
          mainText={<>From first shots to boosters,</>}
          highlightText={<> we’ve got </>}
          subText={<><i>you!</i></>}
        />
         <Image
                  width={33}
                  height={30}
                  src={beehive2}
                  alt="Beehive"
                  className="absolute right-[20px] top-[-5px]"
                />
        <p className="p-5 pl-1">
          {" "}
          At BabyMD, we see vaccinations as a vital step in your child’s growth
          and protection — not just a medical task. Every dose is given with
          care and precision, and we keep you informed at every step so there
          are no surprises, only reassurance.
        </p>
      </div>
    </div>
  );
}
