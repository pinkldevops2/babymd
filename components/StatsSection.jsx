import Image from 'next/image';
import CountUp from 'react-countup';
import SubHeading from './SubHeading'; // Adjust the path
import { useInView } from 'react-intersection-observer';

const StatsSection = ({
  beehive2,
  bee,
  sleep_bee,
  Vector,
  Vector1,
  Vector2,
  Vector2a,
  Vector3,
  Vector3a,
  Vector4,
  Vector4a,
}) => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });
  const [ref4, inView4] = useInView({ triggerOnce: true });

  return (
    <>
      <div className="container">
      <div className="w-full mt-8 md:mt-0 px-6 pt-10 relative">
        <SubHeading
          mainText={<> You don&apos;t have to<br /></>}
          highlightText={<>figure it out</>}
          subText={<><i>all alone</i></>}
        />
        <Image
          width={33}
          height={30}
          src={beehive2}
          alt="Beehive"
          className="absolute right-[40px] top-[20px]"
        />

        <p className="pt-3">
          Behind our every mark is a parent who found clarity and a child who
          felt better, safer, and happier. From midnight fevers to milestone
          check-ups, these stats reflect a story of care that goes beyond
          treatment – it&apos;s about peace of mind and trust.
        </p>
      </div>

      <div className="w-full mt-8 pb-6 flex flex-col items-center space-y-4 curved_lines">
        {/* Decorative Bees */}
        <div className="mb-8 relative w-full">
          <Image
            width={93}
            height={93}
            src={bee}
            alt="Bee"
            className="absolute right-[50px] top-[-50px] swing"
          />
        </div>

        {/* Stat Blocks */}
        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 items-center md:px-4">
          {/* Stat 1 */}
          <div className="relative w-80 h-[300px]" ref={ref1}>
            <Image src={Vector} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover" />
            <Image src={Vector1} alt="overlay" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div>
              <h2 className="w-fit text-[#5943A5] text-[60px] font-bold absolute left-[70px] top-[40px] z-5">
                {inView1 ? <CountUp start={0} end={5000} duration={2} suffix="+" /> : "5000+"}
              </h2>
              <p className="w-fit text-[#5943A5] absolute left-[170px] top-[120px] leading-[20px] md:text-[20px] md:leading-[24px]">
                Happy <br />Families <br />and <br />Counting
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="relative w-80 h-[330px]" ref={ref2}>
            <Image src={Vector2} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover" />
            <Image src={Vector2a} alt="overlay" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div>
              <h2 className="w-fit text-[#E3B200] relative font-bold text-[60px] left-[140px]">
                {inView2 ? <CountUp start={0} end={4.9} decimals={1} duration={2} suffix="+" /> : "4.9+"}
              </h2>
              <p className="w-fit text-[#E3B200] text-[20px] relative left-[150px] top-[-25px]">
                Google Rating
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="relative w-80 h-[300px]" ref={ref3}>
            <Image src={Vector3} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover" />
            <Image src={Vector3a} alt="overlay" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
            <div>
              <h2 className="w-fit text-[#269BD9] text-[60px] relative font-bold left-[130px] top-[25px]">
                {inView3 ? <CountUp start={0} end={2500} duration={2} suffix="+" /> : "2500+"}
              </h2>
              <p className="w-fit text-[#269BD9] text-[20px] relative left-[190px]">
                Glowing <br /> Reviews
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="relative w-80 h-[320px]" ref={ref4}>
            <Image src={Vector4} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover" />
            <Image src={Vector4a} alt="overlay" className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2" />
            <h2 className="w-fit text-[#ED750F] text-[60px] relative font-bold left-[130px] top-[25px]">
              {inView4 ? <CountUp start={0} end={30} duration={2} suffix="+" /> : "30+"}
            </h2>
            <p className="w-fit text-[#ED750F] text-[20px] relative whitespace-nowrap left-[130px]">
              Years of Pediatric <br /> Wisdom
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default StatsSection;