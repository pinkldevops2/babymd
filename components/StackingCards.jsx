"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import IconBackground from "../src/app/assets/supporticonbackground.png";
import GeneralConsultations from "../src/app/assets/GeneralConsultations.png";
import Vaccinations from "../src/app/assets/Vaccinations.png";
import SuperSpecialist from "../src/app/assets/SuperSpecialist.png";
import DevelopmentalTherapies from "../src/app/assets/DevelopmentalTherapies.png";

export default function StackingCards() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".cardx");

    let cardHeight = cards[0]?.offsetHeight || 0;

    cards.forEach((card, index) => {
      if (index === 0) {
        gsap.set(card, {
          y: 0,
          opacity: 1,
          duration: 0.1
        });
      } if (index === 1) {
        gsap.set(card, {
        y: cardHeight,
        backgroundColor: "transparent",
        opacity: 1,
        duration: 1
      });
      } else {
        gsap.set(card, {
          y: cardHeight * index,
          opacity: 1,
          duration: 1
        });
      }

      ScrollTrigger.create({
        trigger: card,
        start: `top bottom`,
        end: `top center`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (index > 0) {
            gsap.to(card, {
              y: cardHeight * (index - progress),
              zIndex: 100 + index,
            });
          }
        },
      });
    });
  }, []);

  return (
    <div className="container">
      <div id="cardsx">
        <div className="cardx" id="card1">
          <div className="card-body">
            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                  src={IconBackground}
                                  alt="Icon background"
                                  layout="fill"
                                  objectFit="contain"
                                />
                                <Image
                                  src={GeneralConsultations}
                                  alt="General Consultations"
                                  width={200}
                                  height={24}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                              </div>
            <h2 className="text-black text-lg font-bold">General Consultations</h2>
            <p>Comprehensive health check-ups and consultations for your
                  child&#39;s everyday needs.</p>
          </div>
        </div>
        <div className="cardx" id="card2">
          <div className="card-body">
            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                  src={IconBackground}
                                  alt="Icon background"
                                  layout="fill"
                                  objectFit="contain"
                                />
                                <Image
                                  src={Vaccinations}
                                  alt="Vaccinations"
                                  width={24}
                                  height={24}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                              </div>
            <h2 className="text-black text-lg font-bold">Vaccinations</h2>
            <p>Timely vaccinations to protect your child from preventable
                  diseases.</p>
          </div>
        </div>
        <div className="cardx" id="card3">
          <div className="card-body">
            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                  src={IconBackground}
                                  alt="Icon background"
                                  layout="fill"
                                  objectFit="contain"
                                />
                                <Image
                                  src={SuperSpecialist}
                                  alt="Super Specialist"
                                  width={24}
                                  height={24}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                              </div>
            <h2 className="text-black text-lg font-bold">Super Specialist Consultations</h2>
            <p>Expert consultations with top specialists for complex medical
                  conditions.</p>
          </div>
        </div>
        <div className="cardx" id="card4">
          <div className="card-body">
            <div className="relative w-14 h-14 flex-shrink-0">
                                <Image
                                  src={IconBackground}
                                  alt="Icon background"
                                  layout="fill"
                                  objectFit="contain"
                                />
                                <Image
                                  src={DevelopmentalTherapies}
                                  alt="Developmental Therapies"
                                  width={24}
                                  height={24}
                                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                />
                              </div>
            <h2 className="text-black text-lg font-bold">Developmental Assessments and Therapies</h2>
            <p>Our developmental pediatricians and certified therapists go
                  beyond symptoms to create personalized plans that address your
                  little one&#39;s unique needs from speech delays to behavioral
                  challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}