'use client';

import Image from 'next/image';

import facilitiesImage1 from 'public/icons/vaccination4.png';
import facilitiesImage2 from 'public/icons/gpc1.png';
import facilitiesImage3 from 'public/icons/serviceicon3.png';
import facilitiesImage4 from 'public/icons/vaccination12.png';
import SubHeading3 from '../../../../components/SubHeading3';

export default function FacilitiesC() {
  return (
    <div className="py-10  px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:items-start lg:gap-8 ">
        {/* Heading */}

        <SubHeading3
          mainText={<>From A to Z: </>}
          highlightText={<>All paediatric needs in </>}
          subText={<><i> one place </i></>}
        />

         <p className="pb-3">
          Let’s face it — taking your little one to the doctor shouldn’t be a nightmare. We’ve gathered the best pediatric specialists all under one roof. Whether it’s a skin issue, respiratory challenge, or behavioural concern, we’ve got specialists who speak your child’s language.
        </p>

        {/* List of Items */}
        <div className="space-y-4  mt-4  md:w-full md:max-w-[668px] md:mx-auto md:mt-4">
          {/* Item 1 */}
          <div className="flex items-stretch  bg-[#DBFFCC] rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/4 flex items-center justify-center">
              <Image
                src={facilitiesImage1}
                alt="7-day availability"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div className="w-3/4 p-4 min-h-[100px] flex items-center">
              <p className="text-[16px] text-black">
                10+ paediatric specialities under one roof
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-stretch bg-[#E1F5FF] rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/4 flex items-center justify-center">
              <Image
                src={facilitiesImage2}
                alt="Integrated pharmacy"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div className="w-3/4 p-4 min-h-[100px] flex items-center">
              <p className="text-[16px] text-black">
                In-house diagnostics to speed up care
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-stretch bg-[#FFD6C6] rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/4 flex items-center justify-center">
              <Image
                src={facilitiesImage3}
                alt="Child-friendly spaces"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div className="w-3/4 p-4 min-h-[100px] flex items-center">
               <p className="text-[16px] text-black">
                Seamless coordination 
between primary and 
specialist doctors
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-stretch bg-[#FBE38F] rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/4 flex items-center justify-center">
              <Image
                src={facilitiesImage4}
                alt="30+ years experience"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div className="w-3/4 p-4 min-h-[100px] flex items-center">
              <p className="text-[16px] text-black">
                No hospital overwhelm —
just expert care in child-
first spaces
              </p>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
}