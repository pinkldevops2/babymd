"use client";

import Image from "next/image";
import bluebtnarrow from "@/app/assets/btnBluearrow.png"; // adjust path based on your project structure
import whitebtnarrow from "@/app/assets/btnwhitearrow.png";
import cloudtext from "@/app/assets/cloud.png"; // if you're using the cloud background
import SuperDocButton from './SuperDocButton';
import next_bees_sleeping from "@/app/assets/next_bees_sleeping.png";
import beehive2 from "@/app/assets/beehive2.png";
import beehive_cloud from "@/app/assets/beehive_cloud.png";
import keerthana from "@/app/assets/keerthana.png";


const CloudTestimonials = () => {
  return (
    <div className="bg-[#E1F5FF] md:p-8 text-[#4B3A8F] relative z-2">
      <Image
                  src={next_bees_sleeping}
                  width={152}
                  height={152}
                  className="absolute right-[40px] top-[-120px]"
                />
        <Image
                  src={beehive2}
                  width={36}
                  height={36}
                  className="absolute right-[50px] top-[80px]"
                />  
        <Image
                  src={beehive_cloud}
                  width={56}
                  height={59}
                  className="absolute right-[70px] top-[410px]"
                />        
      {/* Heading */}
      <h2 className="text-[28px] leading-[32px] md:text-2xl font-bold mb-2 px-6">
        Don&apos;t just <span className="text-[#5943A5]">take</span>
        <br />
        <span className="text-[#5943A5] italic font-medium">
          <i>our word </i>
        </span>{" "}
        for it
      </h2>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-6">
        {/* Optional SVG/Images for decoration */}
      </div>

      <div className="testimonial-cloud">
        {/* Testimonial Box */}
        <div className="mt-4 relative px-6 w-80 top-[88px] z-2">
          {/* Optional Cloud Background Layer */}
          {/* <div className="absolute w-full bg-[#E1F5FF] z-0">
            <Image src={cloudtext} alt="Cloud background" className="w-full" />
          </div> */}

          <p className="text-sm relative leading-relaxed text-gray-800">
            &quot;We had a wonderful consultation with Dr Shivanga Bora at
            BabyMD HSR Layout, for my son&apos;s wheezing issue. She was
            incredibly patient, listened to all our concerns, and provided a
            clear effective treatment plan. Her friendly approach and expertise
            made us feel reassured and confident in the care my son received.
            Highly recommend her for pediatric care!&quot;
          </p>

          {/* Author */}
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
              <Image
                  src={keerthana}
                  width={36}
                  height={36}
                />  
            </div>
            <div className="">
              <p className="font-semibold text-[#EB5A44] text-sm">Keerthana A</p>
              <p className="italic text-[#4B3A8F] text-xs">BabyMD HSR Layout</p>
            </div>
          </div>

          {/* See Video Link */}
          <div className="flex items-center justify-start mt-5 mb-6">
            <button className="text-xs font-semibold text-[#4B3A8F] flex items-center underline underline-offset-[3px]">
              SEE VIDEO
              <span className="ml-1 text-xs">
                <Image
                  src={bluebtnarrow}
                  alt="Blue Arrow"
                  className="w-full min-w-[15px]"
                />
              </span>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-[160px] px-6">
          <SuperDocButton href="/superdoc" label="SEE MORE REVIEWS" className="w-60 text-center" variant="purple"/>
        </div>
      </div>
    </div>
  );
};

export default CloudTestimonials;