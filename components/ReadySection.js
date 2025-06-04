import Image from "next/image";
import SuperDocButton from './SuperDocButton';

const ReadySection = ({ readyvector, readyvectorImg, bluebtnarrow }) => {
  return (
    <div className="px-6 py-6 md:pt-2 md:px-6">
      {/* Parent container: relative for button positioning on mobile */}
      <div className="relative overflow-hidden bg-[#5943A5] text-white rounded-2xl px-6 pt-10 lg:p-6 w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-0">
          {/* Left: Text Content (60% on desktop) */}
          <div className="w-full lg:w-3/5 space-y-6">
            <h2 className="fade-in font-baloo2 text-[28px] md:text-[28px] leading-[30px] font-bold pb-2">
              Whenever you need us, we’re here &mdash; with<br/>care{' '}
              <span className="italic font-light text-white px-1 yellow_circle">
                <i>that’s ready</i>
              </span>
            </h2>

            <p className="fade-in md:text-base lg:text-lg leading-relaxed font-lato text-[#FFFFFF]">
              Babies don’t come with instructions, but we do. Whether it’s a
              routine check-up, a fever that won’t quit, or just a little peace
              of mind — pick a time, choose a clinic, and we’ll handle the rest.
            </p>
          </div>

          {/* Right: Image (40% on desktop) */}
          <div className="w-full lg:w-2/5 relative lg:mt-0 md:h-[300px] lg:h-[300px]">
            <div className="flex justify-center lg:justify-end items-end">
              <div className="relative w-[100%] lg:w-full h-[270px] md:h-[270px] mx-auto lg:mx-0 lg:h-[430px]">
                <Image
                  src={readyvectorImg}
                  alt="Family"
                  fill
                  className="fade-in object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Button: absolute on mobile (20px from bottom), static on desktop */}
        <div className="absolute  bottom-[20px] left-1/2 transform -translate-x-1/2 w-full px-6 lg:transform-none lg:px-0 lg:w-auto lg:mt-8 lg:w-fit lg:relative lg:left-[152px]">
          <SuperDocButton href="#" label="BOOK YOUR APPOINTMENT" className="text-center justify-center fade-in" variant="yellow" textColor="#5943A5"/>
        </div>
      </div>
    </div>
  );
};

export default ReadySection;