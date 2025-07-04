import Image from 'next/image';
import SuperDocButton from './SuperDocButton';
import SpringHome1 from './anime/SpringHome1';
import MaskReveal4 from './anime/MaskReveal4';
import React from 'react';

interface HeroSectionProps {
  i1: any;
  i1a: any;
  beehive_full: any;
  beehive9: any;
  spring: any; // Currently unused, but typed for completeness
}

const HeroSection: React.FC<HeroSectionProps> = ({
  i1,
  i1a,
  beehive_full,
  beehive9,
  spring,
}) => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Text Section */}
        <div className="w-full md:w-7/12 relative rounded-3xl py-6 px-6 md:py-12 md:px-6 mb-8 md:mb-12 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Raising a baby <br /> takes a village,
          </h1>

          <h2 className="text-[#5943A5] font-bold text-[42px] leading-[38px]">
            welcome to <br />
          </h2>

          <h3 className="text-[#5943A5] spansidecour text-[42px] leading-[38px] mb-[20px] font-baloo2 relative pb-3 inline-block">
            <MaskReveal4 className="w-[120px] h-auto overflow-visible absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1" />
            <span className="relative z-3">yours</span>
          </h3>

          {/* White Text Frame */}
          <div className="md:mt-7 mb-8 pt-4">
            <p>
              You deserve care that&apos;s as thoughtful as your parenting. From cosy clinics to expert paediatricians and holistic support, we&apos;re here for every milestone, worry, and wonder.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-5/12 h-[420px] md:h-auto md:mb-12">
          <Image
            width={390}
            height={420}
            sizes="100vw"
            src={i1}
            alt="Layer 1"
            className="absolute top-6 left-0 z-1 md:hidden"
          />
          <Image
            width={56}
            height={61}
            src={beehive_full}
            alt="Beehive Full"
            className="absolute top-[-30px] left-[20px] z-10"
          />
          <Image
            width={38}
            height={42}
            src={beehive9}
            alt="Beehive 9"
            className="absolute top-[220px] right-[30px] z-10"
          />
          <Image
            width={400}
            height={200}
            src={i1a}
            alt="Layer 2"
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 lg:bottom-[30px] z-7"
          />
          <SpringHome1 className="absolute bottom-22 left-14 transform -translate-x-1/2 z-2" />
          <div className="absolute left-1/2 bottom-[0px] translate-x-[-50%] z-12">
            <SuperDocButton
              href="/clinic"
              label="WHERE&#39;S MY SUPERDOC?"
              className="md:z-10 relative hidden"
              variant="pink"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;