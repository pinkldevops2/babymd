import Image from 'next/image';
import SuperDocButton from './SuperDocButton'; // adjust import based on your folder structure

const HeroSection = ({
  i1,
  i1a,
  beehive_full,
  beehive9,
  spring
}) => {
  return (
    <div className="container">
    <div className="flex flex-col md:flex-row justify-between">
      {/* Text Section */}
      <div className="w-full md:w-7/12 relative rounded-3xl p-6 md:py-12 md:px-4 mb-8 md:mb-12 mt-8">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Raising a baby <br /> takes a village,
        </h1>

        <h2 className="text-[#5943A5] font-bold text-[42px] leading-[38px]">
          welcome to <br />
        </h2>

        <h3 className="rounded_circle text-[#5943A5] spansidecour text-[42px] leading-[38px] mb-[20px] font-baloo2">
          yours
        </h3>

        {/* White Text Frame */}
        <div className="md:mt-7 mb-8 pt-4">
          <p>
            You deserve care that&apos;s as thoughtful as your
            <br />
            parenting. From cozy clinics to expert
            <br />
            pediatricians and holistic support, we&apos;re here
            <br />
            for every milestone, worry, and wonder.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative w-full md:w-5/12 h-[420px] md:mb-12">
        <Image
          width={800}
          height={200}
          sizes="100vw"
          src={i1}
          alt="Layer 1"
          className="absolute top-6 left-0 h-full"
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
          className="absolute bottom-24 left-1/2 transform -translate-x-1/2 lg:bottom-[30px]"
        />
        <Image
          width={50}
          height={120}
          src={spring}
          alt="Spring"
          className="absolute bottom-22 left-14 transform -translate-x-1/2"
        />

        <SuperDocButton
          href="#"
          label="WHERE IS MY SUPERDOC?"
          className="absolute left-1/2 bottom-[40px] translate-x-[-50%]"
          variant="pink"
        />
      </div>
      </div>
    </div>
  );
};

export default HeroSection;