"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import Image from "next/image";
import IconBackground from "../app/assets/supporticonbackground.png";
import GeneralConsultations from "../app/assets/GeneralConsultations.png";
import Vaccinations from "../app/assets/Vaccinations.png";
import SuperSpecialist from "../app/assets/SuperSpecialist.png";
import DevelopmentalTherapies from "../app/assets/DevelopmentalTherapies.png";

export default function StackingCards() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let allowScroll = true;
    const scrollTimeout = gsap.delayedCall(1, () => {
      allowScroll = true;
    }).pause();

    const time = 0.5;
    let animating = false;

    gsap.set(".card", {
      y: (index: number) => 140 * index,
      transformOrigin: "center top",
    });

    const tl = gsap.timeline({ paused: true });

    tl.add("card2")
      .to(".card:nth-child(1)", { scale: 1, duration: time })
      .from(".card:nth-child(2)", { y: window.innerHeight, duration: time }, "<")

      .add("card3")
      .to(".card:nth-child(2)", { scale: 1, duration: time })
      .from(".card:nth-child(3)", { y: window.innerHeight, duration: time }, "<")

      .add("card4")
      .to(".card:nth-child(3)", { scale: 1, duration: time })
      .from(".card:nth-child(4)", { y: window.innerHeight, duration: time }, "<")

      .add("card5");

    function tweenToLabel(direction: string | null, isScrollingDown: boolean) {
      if (
        (!tl.nextLabel() && isScrollingDown) ||
        (!tl.previousLabel() && !isScrollingDown)
      ) {
        cardsObserver.disable();
        return;
      }

      if (!animating && direction) {
        animating = true;
        tl.tweenTo(direction, {
          onComplete: () => {
            animating = false;
          },
        });
      }
    }

    const cardsObserver = Observer.create({
      wheelSpeed: -1,
      onDown: () => tweenToLabel(tl.previousLabel(), false),
      onUp: () => tweenToLabel(tl.nextLabel(), true),
      tolerance: 10,
      preventDefault: true,
      onEnable(self) {
        allowScroll = false;
        scrollTimeout.restart(true);
        const savedScroll = self.scrollY();
        (self as any)._restoreScroll = () => self.scrollY(savedScroll);
        document.addEventListener("scroll", (self as any)._restoreScroll, {
          passive: false,
        });
      },
      onDisable(self) {
        document.removeEventListener("scroll", (self as any)._restoreScroll);
      },
    });

    cardsObserver.disable();

    ScrollTrigger.create({
      id: "STOP-SCROLL",
      trigger: ".cards-section",
      pin: true,
      start: "top 20%",
      markers: false,
      end: "+=100",
      onEnter: () => {
        if (!cardsObserver.isEnabled) cardsObserver.enable();
      },
      onEnterBack: () => {
        if (!cardsObserver.isEnabled) cardsObserver.enable();
      },
    });
  }, []);

  return (
    <div className="cards-section">
      <div className="cardsx">
        <div className="card bg-[#DDD0FF]" id="card1">
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
            <h2 className="text-black text-[20px] font-lato font-bold pt-3 pb-4">General Consultations</h2>
            <p>You shouldn&#39;t have to choose between being heard and being helped. Our paediatricians take the time to listen to your concerns, check thoroughly, and explain clearly.</p>
          </div>
        </div>
        <div className="card bg-[#A3E48A]" id="card2">
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
            <h2 className="text-black text-[20px] font-lato font-bold pt-3 pb-4">Vaccinations</h2>
            <p>Vaccine day doesn&#39;t have to mean tears. We turn it into a fun experience — with gentle doctors, a cosy environment, and growth assessments built into every visit.
</p>
          </div>
        </div>
        <div className="card bg-[#FBE38F]" id="card3">
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
            <h2 className="text-black text-[20px] font-lato font-bold pt-3 pb-4">Super Specialist Consultations</h2>
            <p>With 15+ paediatric specialties under one roof — from allergies and asthma to skin, hormones, and behaviour — you get trusted expert advice without the hospital runaround.</p>
          </div>
        </div>
        <div className="card bg-[#CDE6F3]" id="card4">
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
            <h2 className="text-black text-[20px] font-lato font-bold pt-3 pb-4">Developmental Assessments and Therapies</h2>
            <p>Our developmental paediatricians and certified therapists go beyond symptoms to create personalised plans that address your little one&#39;s unique needs — from speech delays to behavioural challenges.</p>
          </div>
        </div>
      </div>
    </div>
  );
}