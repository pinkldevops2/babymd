'use client';

import Image from 'next/image';

import facilitiesImage1 from '../../../../../public/images/serviceassets/facilitiesImage1.png';
import facilitiesImage2 from '../../../../../public/images/serviceassets/facilitiesImage2.png';
import facilitiesImage3 from '../../../../../public/images/serviceassets/facilitiesImage3.png';
import facilitiesImage4 from '../../../../../public/images/serviceassets/facilitiesImage4.png';
import facilitiesImage5 from '../../../../../public/images/serviceassets/facilitiesImage5.png';
import SubHeading from '../../../../../components/SubHeading';

export default function Facilities() {
  return (
    <div className="py-10  px-6 bg-[#FFEBB5]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row lg:items-start lg:gap-8 ">
        {/* Heading */}

        <SubHeading
          mainText={<>Convenient care.</>}
          highlightText={<>Compassionate</>}
          subText={<><i> hearts. </i></>}
        />

        {/* List of Items */}
        <div className="space-y-4  mt-8 lg:mx-0 md:w-1/2">
          {/* Item 1 */}
          <div className="flex items-stretch  bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage1}
                alt="7-day availability"
                width={150}
                height={100}
                className="object-cover w-full h-full max-w-[200px]"
              />
            </div>
            <div className="w-2/3 p-4">
              <p className="text-[16px] text-black">
                7-day availability, walk-ins welcome
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-stretch bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage2}
                alt="Integrated pharmacy"
                width={150}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <p className="text-[16px] text-black">
                Integrated pharmacy with home delivery
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-stretch bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage3}
                alt="Child-friendly spaces"
                width={150}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
               <p className="text-[16px] text-black">
                Child-friendly spaces that make check-ups fun
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-stretch bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage4}
                alt="30+ years experience"
                width={150}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
              <p className="text-[16px] text-black">
                30+ years of combined pediatric experience
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-stretch bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage5}
                alt="Trusted by families"
                width={150}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
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