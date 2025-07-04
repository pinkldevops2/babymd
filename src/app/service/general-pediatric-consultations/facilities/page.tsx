'use client';

import Image from 'next/image';

import facilitiesImage1 from 'public/icons/vaccination10.png';
import facilitiesImage2 from 'public/icons/gpc6.png';
import facilitiesImage3 from 'public/icons/vaccination11.png';
import facilitiesImage4 from 'public/icons/vaccination13.png';
import facilitiesImage5 from 'public/icons/gpc7.png';
import SubHeading2 from '../../../../components/SubHeading2';

export default function Facilities() {
  return (
    <div className="py-10  px-6 bg-[#FFEBB5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:items-start lg:gap-8 ">
        {/* Heading */}

        <SubHeading2
          mainText={<>Convenient care.</>}
          highlightText={<>Compassionate</>}
          subText={<><i> hearts. </i></>}
        />

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
                7-day availability, walk-ins welcome
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
                Integrated pharmacy and diagnostics
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
                Child-friendly spaces that make check-ups fun
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
                Experienced doctors with an empathetic approach
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-stretch bg-[#FF9A6C] rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/4 flex items-center justify-center">
              <Image
                src={facilitiesImage5}
                alt="Trusted by families"
                width={75}
                height={44}
                className="object-cover"
              />
            </div>
            <div className="w-3/4 p-4 min-h-[100px] flex items-center">
              <p className="text-gray-800 font-medium">
                Trusted by 20K+ families
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}