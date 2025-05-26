import Image from "next/image";
import SubHeading from "./SubHeading";
import Rectangle from "@/app/assets/Rectangle.png";
import RectangleImg from "@/app/assets/RectangleImg.png";
import topright from "@/app/assets/topright.png";
import bottomleft from "@/app/assets/bottomleft.png";
import dotearrow from "@/app/assets/dotearrow.png";
import bee2 from "@/app/assets/bee2.png";
import beehive6 from '@/app/assets/beehive6.png';
import beehive7 from '@/app/assets/beehive7.png';
import beehive8 from '@/app/assets/beehive8.png';

const MilestoneAssessmentSection = () => {
  return (
    <>
      <div className="bg-white rounded-3xl p-6 md:p-12 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Column: Text Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <SubHeading
                mainText={<>Curious about your<br />child&apos;s growth?</>}
                highlightText={<><br />Let&apos;s take a look</>}
                subText={<><i>together</i></>}
              />
              <Image
                width={37}
                height={33}
                src={beehive8}
                alt="Layer 1"
                className="absolute right-0 top-0"
              />
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-1 mt-2">
              You&apos;re the expert when it comes to your child but sometimes, it
              helps to have an extra pair of professional eyes. Our free, online{" "}
              <span className="font-semibold">milestone assessment tool</span>{" "}
              lets you easily track their development, from physical growth to
              behavioral needs. In just a few simple steps, you&apos;ll get the
              clarity you need to understand where they stand and feel confident
              in their progress.
            </p>
          </div>

          {/* Right Column: Image Cluster */}
          <div className="relative w-full md:w-1/2 h-[340px] pt-10">
            <div className="relative w-fit mx-auto">
              <Image
                width={30}
                height={30}
                src={beehive6}
                alt="Layer 1"
                className="absolute left-[-50px] top-[30px]"
              />
              <Image
                width={30}
                height={30}
                src={beehive7}
                alt="Layer 1"
                className="absolute right-[-50px] bottom-0"
              />
              <Image
                width={300}
                height={300}
                src={Rectangle}
                alt="Background"
                className="mx-auto max-w-[250px]"
              />
              <Image
                width={255}
                height={255}
                src={RectangleImg}
                alt="Overlay"
                className="absolute absolute-center mx-auto"
              />
              <Image
                width={75}
                src={topright}
                alt="Top Right"
                className="absolute top-[-40px] right-[-40px]"
              />
              <Image
                width={75}
                src={bottomleft}
                alt="Bottom Left"
                className="absolute bottom-[-40px] left-[-40px]"
              />

              {/* Labels */}
              <div className="w-fit absolute -bottom-13 left-12">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Spectator Behaviour
                </p>
              </div>
              <div className="w-fit absolute -top-12 -left-8">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Cognition
                </p>
              </div>
              <div className="w-fit absolute top-12 -right-[50px]">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Unoccupied Play
                </p>
              </div>
              <div className="w-fit absolute top-[150px] -right-[50px]">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Neurodivergent
                </p>
              </div>
              <div className="w-fit absolute top-[150px] -left-[50px]">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Color stimulation
                </p>
              </div>

              {/* Decorations */}
              <Image
                width={100}
                src={dotearrow}
                alt="Arrow Decoration"
                className="absolute bottom-[-15px] right-[-15px]"
              />
              <Image
                width={100}
                src={bee2}
                alt="Bee Icon"
                className="absolute top-[-30px] right-[-80px] swing"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-6 mb-12">
        <button className="text-lg font-medium underline hover:text-[#3A2A7F] transition-colors duration-300">
          Take our milestone assessment test
        </button>
      </div>
    </>
  );
};

export default MilestoneAssessmentSection;