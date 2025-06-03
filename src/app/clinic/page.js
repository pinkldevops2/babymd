"use client";
import { useEffect } from "react";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Clinic() {
  const clinics = [
    {
      image: "/images/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg",
      title: "BabyMD – Hosa Road",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/351beb004171eecf5fa8fcabcad24c88067fc6d4.jpg",
      title: "BabyMD – Whitefield",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: " 9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/bd6e88dec0f434f565572c1a818fb23885fb5b33.jpg",
      title: "BabyMD – Electronic City",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/39e64f6c9f643abdd21ece3b69668b9b60b15dfe.jpg",
      title: "BabyMD – HSR Layout",
      location: "locate clinic",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
    {
      image: "/images/c340ff5accd3a76b9824168ee4a673930fbf9234.jpg",
      title: "BabyMD – Varthur",
      location: "see map",
      hours: [
        {
          days: "Monday to Saturday",
          time: " 8 AM to 1:30 PM | 4 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9 AM to 12 PM" },
      ],
    },
  ];

useEffect(() => {
    gsap.utils.toArray(".fade-in").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // when element top hits 80% of viewport
          toggleActions: "play none none none", // onEnter, onLeave, onEnterBack, onLeaveBack
        },
      });
    });
  }, []);

  return (
    <>
      <div className="container">
      <div className="banner-box bg-[#F9EEB6] relative z-2 py-14 pb-6">
        <div className="md:px-3">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-full md:w-2/3">
              <div className="relative px-8 md:px-0 md:w-3/4">
                <h1 className="text-2xl font-bold text-[34px] fade-in">
                  Care that feels{" "}
                  <span className="text-[#5943A5]">like your second </span>
                  <span className="relative">
                    <i className="font-normal text-[#5943A5] z-2 relative">
                      home
                    </i>
                    <img
                      className="absolute top-[13px] right-0 z-0"
                      src="/images/Vector 2.svg"
                      alt="Vector 2"
                    />
                  </span>
                </h1>
                <p className="fade-in">
                  Got a sniffle, stumble, or question that can’t wait? We’re
                  just down the road, stocked with smiles, support, and
                  paediatric pros who get it.
                </p>
                <img
                  className="absolute top-[-40px] right-[30px] fade-in"
                  src="/images/Group 427319502.svg"
                  alt="Decorative"
                />
                <img
                  className="absolute bottom-[-60px] left-[20px] fade-in"
                  src="/images/Group 427319515.svg"
                  alt="Decorative"
                />
              </div>
            </div>

            <div className="w-full py-4 md:w-1/3 md:py-0 relative px-8 md:px-0">
              <img className="mx-auto" src="/images/Vector.svg" alt="Vector" />
              <img
                className="mx-auto absolute absolute-center"
                src="/images/clinic_listing_banner.png"
                alt="Mask group"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        className="w-full relative z-0 bg-[#FFF2EF]"
        src="/images/Vector 141.svg"
        alt="Vector 141"
      />

      <div className="location-section bg-[#FFF2EF] py-4 relative">
        <div className="md:px-3">
          <div className="flex flex-row gap-1 items-start">
            <div className="w-full md:w-3/4">
              <div className="relative px-6 md:px-0">
                <h2 className="text-2xl font-bold text-[28px] leading-[26px] pb-4 fade-in">
                  Right around the
                  <br />
                  corner, <span className="text-[#5943A5]">ready with </span>
                  <br />
                  <span className="relative">
                    <i className="font-normal text-[#5943A5] z-2">care</i>
                  </span>
                  <img
                    className="swing w-[80px] absolute right-[40px] top-[-20px]"
                    src="/images/4be6e5c41183d4eea09865755fb1b63ab0582ac3.png"
                    alt="Map"
                  />
                  <img
                    className="absolute right-[30px] top-[50px]"
                    src="/images/Group 427319502.svg"
                    alt="Decorative"
                  />
                </h2>
                <p className="fade-in">
                  Whether you&#39;re in HSR, Hosa Road, Whitefield, or wherever life
                  takes you, we’re all set with our warm spaces and caring faces
                  for your tiny superstar. And yep, we’re popping up in even
                  more neighbourhoods.
                </p>
              </div>
            </div>
          </div>

          {/* Clinic Cards */}
          <div className="w-full my-8 flex flex-col gap-4 px-6 md:px-0">
            {clinics.map((clinic, i) => (
              <div key={i} className="w-full">
                <div className="bg-white p-4 rounded-[20px] fade-in">
                  <img
                    className="mx-auto rounded-[20px] min-h-[205px] object-cover"
                    src={clinic.image}
                    alt="Clinic"
                  />
                  <div className="p-4">
                    <h4 className="text-[20px] font-bold my-1 font-lato fade-in">
                      {clinic.title}
                    </h4>
                    <div className="flex flex-row gap-3 fade-in">
                      <img src="/images/map-pin.svg" alt="Map pin" />
                      <h5 className="text-[14px] text-[#F8845D] underline uppercase underline-offset-[5px] tracking-[2px]">
                        {clinic.location}
                      </h5>
                    </div>
                    <div className="clinic-hrs mt-6">
                      <h4 className="text-[14px] font-bold font-lato fade-in">
                        Clinic Hours:
                      </h4>
                      {clinic.hours.map((hour, idx) => (
                        <h4 key={idx} className="text-[14px] font-lato fade-in">
                          <span className="font-bold">{hour.days} </span> –{" "}
                          {hour.time}
                        </h4>
                      ))}
                      <button
                        type="button"
                        className="fade-in hidden text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-4 text-center mt-5 mx-auto flex flex-row gap-2"
                      >
                        <span>view details</span>
                        <img src="/images/Group 2349.png" alt="Arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full my-2 flex justify-center flex-row gap-2 fade-in">
            <h1 className="text-2xl font-bold text-[34px]">
              <a href="#" className="relative cursor-pointer">
                <i className="font-normal text-[#5943A5] z-2">... and more !</i>
              </a>
            </h1>
            <img
              src="/images/uuid-4cbc27ba-dfca-41a0-8924-42aadae760f7.png"
              alt="More"
            />
          </div>
        </div>
      </div>

      <div className="py-6 bg-[#FFF2EF] ">
        <div className="container mx-auto">
          <div className="flex flex-col relative justify-center items-center md:flex-row bg-[#DBFFCC] rounded-[20px] mx-4 md:mx-0 overflow-hidden pt-8">
            <div className="w-full md:w-2/3 px-2 py-2 md:p-4 md:pl-12">
              <div className="relative px-8 md:px-0">
                <h2 className="font-bold text-[28px] leading-[26px] fade-in">
                  <span className="text-[#5943A5]">
                    You’ve got this.
                    <br />
                    We’ve{" "}
                  </span>
                  <span className="relative">
                    <i className="font-normal text-[#5943A5] z-10 relative">
                      got you.
                    </i>
                    <img
                      className="absolute top-[5px] right-0 z-0 w-full"
                      src="/images/Vector 2.svg"
                      alt="Vector 2"
                    />
                  </span>
                </h2>
              </div>
              <button
                type="button"
                className="fade-in text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-4 text-center mt-12 mx-auto md:mx-0 flex flex-row gap-2 justify-center middlingbtns"
              >
                <span>Care? Right This Way </span>
                <img src="/images/Group 2349.png" alt="Arrow" />
              </button>
            </div>

            <div className="w-full md:w-1/3 relative md:px-0 pt-4">
              <img
                className="mx-auto"
                src="/images/Vector 3.svg"
                alt="Vector 3"
              />
              <img
                className="mx-auto absolute bottom-0 w-[400px]"
                src="/images/6725559f65e92e9a71cddc105d37d087dc44f123.png"
                alt="Decorative"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}