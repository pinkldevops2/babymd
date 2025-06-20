import Image, { StaticImageData } from 'next/image';
import CountUp from 'react-countup';
import SubHeading2 from './SubHeading2';
import { useInView } from 'react-intersection-observer';
import SpringPathReveal from './anime/SpringPathReveal';

interface StatsSectionProps {
  beehive2: StaticImageData | string;
  bee: StaticImageData | string;
  sleep_bee: StaticImageData | string;
  Vector: StaticImageData | string;
  Vector1: StaticImageData | string;
  Vector2: StaticImageData | string;
  Vector2a: StaticImageData | string;
  Vector3: StaticImageData | string;
  Vector3a: StaticImageData | string;
  Vector4: StaticImageData | string;
  Vector4a: StaticImageData | string;
}

const StatsSection: React.FC<StatsSectionProps> = ({
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
    <div className="container">
      <div className="w-full mt-8 md:mt-0 px-6 pt-10 relative">
        <SpringPathReveal className="absolute left-[-266px] top-[323px] md:left-1/2 md:-translate-x-1/2" />
        <SubHeading2
          mainText={<>But you don&apos;t have to<br /></>}
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

        <p className="pt-3 fade-in">
          Behind our every mark is a parent who found clarity and a child who felt better, safer, and happier.
          From midnight fevers to milestone<br />check-ups, these stats reflect a story of care that goes beyond
          treatment &mdash; it&#39;s about peace of mind and trust.
        </p>
      </div>

      <div className="w-full mt-8 pb-12 flex flex-col items-center space-y-4 curved_lines">
        <div className="mb-8 relative w-full">
          <Image
            width={93}
            height={93}
            src={bee}
            alt="Bee"
            className="absolute right-[50px] top-[-50px] swing"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between flex-wrap gap-6 items-center md:px-6">
          {/* Stat 1 */}
          <div className="relative w-80 h-[300px]" ref={ref1}>
            <Image src={Vector} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover fade-in" />
            <Image src={Vector1} alt="overlay" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fade-in" />
            <div>
              <h2 className="w-fit text-[#5943A5] text-[50px] font-bold absolute left-[70px] top-[40px] z-5">
                {inView1 ? <CountUp start={0} end={20000} duration={2} suffix="+" /> : "20000+"}
              </h2>
              <p className="fade-in w-fit text-[#5943A5] absolute left-[170px] top-[120px] leading-[20px] text-[20px] md:leading-[24px]">
                Happy <br />Families <br />and <br />Counting
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="relative w-80 h-[330px]" ref={ref2}>
            <Image src={Vector2} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover fade-in" />
            <Image src={Vector2a} alt="overlay" className="absolute bottom-0 fade-in left-1/2 transform -translate-x-1/2" />
            <div>
              <h2 className="w-fit text-[#E3B200] relative font-bold text-[50px] left-[140px]">
                {inView2 ? <CountUp start={0} end={4.9} decimals={1} duration={2} suffix="+" /> : "4.9+"}
              </h2>
              <p className="fade-in w-fit text-[#E3B200] text-[20px] relative left-[150px] top-[-25px]">
                Google Rating
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="relative w-80 h-[300px]" ref={ref3}>
            <Image src={Vector3} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover fade-in" />
            <Image src={Vector3a} alt="overlay" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fade-in" />
            <div>
              <h2 className="w-fit text-[#269BD9] text-[50px] relative font-bold left-[130px] top-[25px]">
                {inView3 ? <CountUp start={0} end={2500} duration={2} suffix="+" /> : "2500+"}
              </h2>
              <p className="w-fit text-[#269BD9] text-[20px] relative left-[190px] fade-in">
                Glowing <br /> Reviews
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="relative w-80 h-[320px]" ref={ref4}>
            <Image src={Vector4} alt="bg" fill className="absolute top-0 left-0 h-full w-full object-cover fade-in" />
            <Image src={Vector4a} alt="overlay" className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 fade-in" />
            <h2 className="w-fit text-[#ED750F] text-[50px] relative font-bold left-[130px] top-[25px]">
              {inView4 ? <CountUp start={0} end={30} duration={2} suffix="+" /> : "30+"}
            </h2>
            <p className="w-fit text-[#ED750F] text-[20px] relative whitespace-nowrap left-[130px] fade-in">
              Years of Paediatric <br /> Expertise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;