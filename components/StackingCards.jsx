"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Observer } from 'gsap/dist/Observer';
import Image from "next/image";
import IconBackground from "../src/app/assets/supporticonbackground.png";
import GeneralConsultations from "../src/app/assets/GeneralConsultations.png";
import Vaccinations from "../src/app/assets/Vaccinations.png";
import SuperSpecialist from "../src/app/assets/SuperSpecialist.png";
import DevelopmentalTherapies from "../src/app/assets/DevelopmentalTherapies.png";

export default function StackingCards() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger, Observer);

// constants
let allowScroll = true; // sometimes we want to ignore scroll-related stuff, like when an Observer-based section is transitioning.
let scrollTimeout = gsap.delayedCall(1, () => (allowScroll = true)).pause(); // controls how long we should wait after an Observer-based animation is initiated before we allow another scroll-related action
const time = 0.5; // animation duration
let animating = false; // state

// Progressive enhancement
gsap.set(".card", {
  y: (index) => 140 * index,
  transformOrigin: "center top"
});

//--------------------------------//
// The timeline
//--------------------------------//
const tl = gsap.timeline({
  paused: true
});

tl.add("card2");
tl.to(".card:nth-child(1)", {
  scale: 1,
  duration: time
});
tl.from(
  ".card:nth-child(2)",
  {
    y: () => window.innerHeight,
    duration: time
  },
  "<"
);

tl.add("card3");
tl.to(".card:nth-child(2)", {
  scale: 1,
  duration: time
});
tl.from(
  ".card:nth-child(3)",
  {
    y: () => window.innerHeight,
    duration: time
  },
  "<"
);

tl.add("card4");
tl.to(".card:nth-child(3)", {
  scale: 1,
  duration: time
});
tl.from(
  ".card:nth-child(4)",
  {
    y: () => window.innerHeight,
    duration: time
  },
  "<"
);
tl.add("card5");
// END The timeline --------------//

function tweenToLabel(direction, isScrollingDown) {
  if (
    (!tl.nextLabel() && isScrollingDown) ||
    (!tl.previousLabel() && !isScrollingDown)
  ) {
    cardsObserver.disable(); // resume native scroll
    return;
  }
  if (!animating && direction) {
    // Check if we're already animating
    animating = true;
    tl.tweenTo(direction, { onComplete: () => (animating = false) });
  }
}

//--------------------------------//
// Observer plugin
//--------------------------------//
const cardsObserver = Observer.create({
  // type: "wheel,touch,pointer",
  wheelSpeed: -1,
  onDown: (self) => tweenToLabel(tl.previousLabel(), false),
  onUp: (self) => tweenToLabel(tl.nextLabel(), true),
  tolerance: 10,
  preventDefault: true,
  onEnable(self) {
    allowScroll = false;
    scrollTimeout.restart(true);
    // when enabling, we should save the scroll position and freeze it. This fixes momentum-scroll on Macs, for example.
    let savedScroll = self.scrollY();
    self._restoreScroll = () => self.scrollY(savedScroll); // if the native scroll repositions, force it back to where it should be
    document.addEventListener("scroll", self._restoreScroll, {
      passive: false
    });
  },
  onDisable: (self) =>
    document.removeEventListener("scroll", self._restoreScroll)
});

cardsObserver.disable(); // Disable one page load
// END Observer plugin --------------//

//--------------------------------//
// ScrollTrigger that disables the scroll and has the Observer plugin take over
//--------------------------------//
ScrollTrigger.create({
  id: "STOP-SCROLL",
  trigger: ".cards-section",
  pin: true,
  start: "top 20%",
  markers: false,
  end: "+=100",
  onEnter: (self) => {
    if (cardsObserver.isEnabled) return;
    cardsObserver.enable(); // STOP native scrolling
  },
  onEnterBack: (self) => {
    if (cardsObserver.isEnabled) return;
    cardsObserver.enable(); // STOP native scrolling
  }
});

  }, []);

  return (
    <div className="cards-section">
      <div class="cardsx">
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