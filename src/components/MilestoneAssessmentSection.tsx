"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import SubHeading from "./SubHeading";
import MRectangle from "../app/assets/Mrectangle.png";
import MRectangleImg from "../app/assets/MrectangleImg.png";
import topright from "../app/assets/topright.png";
import bottomleft from "../app/assets/bottomleft.png";
import dotearrow from "../app/assets/dotearrow.png";
import bee2 from "../app/assets/bee2.png";
import beehive6 from "../app/assets/beehive6.png";
import beehive7 from "../app/assets/beehive7.png";
import beehive8 from "../app/assets/beehive8.png";
import SpringHome3 from "./anime/SpringHome3";
import SuperDocButton from './SuperDocButton';
import SubHeading2 from "./SubHeading2";

gsap.registerPlugin(ScrollTrigger);

const MilestoneAssessmentSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".popinanimation",
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "bounce.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".milestone-image-cluster",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="bg-white rounded-3xl p-6 md:py-12 md:px-6 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left Column: Text Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <SubHeading2
                mainText={
                  <>
                    Curious about your
                    <br />
                    child&apos;s growth?
                  </>
                }
                highlightText={
                  <>
                    <br />
                    Let&apos;s take a look
                  </>
                }
                subText={<> <i>together</i> </>}
              />
              <Image
                width={37}
                height={33}
                src={beehive8}
                alt="Layer 1"
                className="absolute right-0 top-0"
              />
            </div>
            <p className="leading-relaxed mb-1 mt-2 fade-in">
              You&#39;re the expert when it comes to your child — but sometimes, it helps to have an extra pair of professional eyes. Our <b>free, online</b> milestone assessment tool lets you easily track their development, from physical growth to behavioural needs. In just a few simple steps, you&#39;ll get the clarity you need to understand where they stand and feel confident in their progress.
            </p>
          </div>

          {/* Right Column: Image Cluster */}
          <div className="relative w-full md:w-1/2 h-[380px] pt-10 milestone-image-cluster">
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
                src={MRectangle}
                alt="Background"
                className="mx-auto max-w-[250px]"
              />
              <Image
                width={255}
                height={255}
                src={MRectangleImg}
                alt="Overlay"
                className="absolute absolute-center mx-auto fade-in"
              />
              <Image
                width={75}
                src={topright}
                alt="Top Right"
                className="absolute top-[-40px] right-[-40px] fade-in"
              />
              <Image
                width={75}
                src={bottomleft}
                alt="Bottom Left"
                className="absolute bottom-[-40px] left-[-40px]"
              />

              {/* Labels with popinanimation */}
              <div className="w-fit absolute -bottom-13 left-12 popinanimation">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Spectator Behaviour
                </p>
              </div>
              <div className="w-fit absolute -top-12 -left-8 popinanimation">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Cognition
                </p>
              </div>
              <div className="w-fit absolute top-12 -right-[50px] popinanimation">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Unoccupied Play
                </p>
              </div>
              <div className="w-fit absolute top-[150px] -right-[50px] popinanimation">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Neurodivergent
                </p>
              </div>
              <div className="w-fit absolute top-[150px] -left-[50px] popinanimation">
                <p className="text-[12px] bg-[#DDD0FF] px-4 py-2 rounded-full w-fit">
                  Color stimulation
                </p>
              </div>

              {/* Decorations */}
              <SpringHome3 className="absolute bottom-[-35px] right-[-35px]" />
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
      <div className="flex justify-center mt-0 mb-12 block">
        <SuperDocButton
            href={"https://babymd.in/pp/development-assesment"}
            target={"_blank"}
            label="milestone assessment test"
            className="w-80 text-center fade-in uppercase"
            variant="pink"
          />
      </div>
    </>
  );
};

export default MilestoneAssessmentSection;