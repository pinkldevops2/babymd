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
    <div className="py-10 px-6 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:gap-8">
       
       <div className='mb-6'>
          <SubHeading
          mainText={<>Why parents choose</>}
          highlightText={<> BabyMD for</>}
          subText={<><i> vaccinations </i></>}
        />
       </div>
        

        {/* List of Items */}
        <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 lg:w-2/3">
          {/* Item 1 */}
          <div className="flex items-stretch bg-[#DBFFCC] rounded-lg shadow-md overflow-hidden">
            <div className="w-1/3">
              <Image
                src={facilitiesImage1}
                alt="7-day availability"
                width={150}
                height={100}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-2/3 p-4">
               <p className="text-[16px] text-black">
                Open all 7 days (yes, even weekends!)
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-stretch bg-[#E1F5FF] rounded-lg shadow-md overflow-hidden">
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
                Separate space for well-baby visits
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-stretch bg-[#FFD6C6] rounded-lg shadow-md overflow-hidden">
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
                Fun, friendly vibe — not scary or stressful
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-stretch bg-[#FBE38F] rounded-lg shadow-md overflow-hidden">
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
                Doctors-only for every shot
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="flex items-stretch bg-[#FF9A6C] rounded-lg shadow-md overflow-hidden">
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
               <p className="text-[16px] text-black">
                Your choice of vaccine brands
              </p>
            </div>
          </div>

          {/* Item 6 */}
          <div className="flex items-stretch bg-[#E2B40EAD] rounded-lg shadow-md overflow-hidden">
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
               <p className="text-[16px] text-black">
                Needle-free options available
              </p>
            </div>
          </div>

          {/* Item 7 */}
          <div className="flex items-stretch bg-[#B6694687] rounded-lg shadow-md overflow-hidden">
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
              <p className="text-[16px] text-black">
                Growth tracked at every visit
              </p>
            </div>
          </div>

          <p className='py-2 text-[16px] text-black'>
            Because a shot shouldn’t feel like a chore — just another step in growing up healthy.
          </p>
        </div>
      </div>
    </div>
  );
}