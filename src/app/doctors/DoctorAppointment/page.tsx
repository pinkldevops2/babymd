"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SubHeading from "../../../components/SubHeading";

import beehive2 from "../../../../public/images/serviceassets/beehive2.png";
import docsmile from "../../../../public/images/doctorassets/docchild.png";
import SuperDocButton from "../../../components/SuperDocButton";

import SuperDocButton2 from "../../../components/SuperDocButton2";
import Modal from "../../../components/FormPopUp";
import BabyMDCampaignForm from "../../../components/BabyMDCampaignForm";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function DoctorAppointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.fromTo(
      path,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%", // adjust as needed
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div className="bg-white py-6 px-6">
      <div className="flex flex-col relative justify-center items-center md:flex-row bg-[#DBFFCC] rounded-[20px] overflow-hidden pt-8">
        <div className="w-full px-2 py-2 md:p-4 md:pl-8">
          <div className="">
            <div className="relative flex items-end gap-3 ">
              <h2 className="text-[34px] leading-[34px] text-[#4B3A8F] max-w-[400px] font-bold font-baloo2 mt-2 px-4">
                Ready when you are, &nbsp;
                <i className="relative z-[2] font-light text-[#4B3A8F]">
                  parents! &nbsp;
                  <div className="absolute z-[-1] left-[-7px] top-[4px]">
                    <svg
                      viewBox="0 0 137 47"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[100px] h-auto overflow-visible "
                    >
                      <path
                        ref={pathRef}
                        d="M121.568 3.34321C128.595 1.22728 135.508 2.63465 142.352 3.46C151.996 4.62557 161.445 6.4882 170.525 9.34237C177.399 11.5028 184.148 13.8816 189.774 17.7579C195.206 21.5027 193.811 26.387 188.935 29.429C181.83 33.8654 173.241 35.8097 164.524 37.338C159.824 38.1632 155.118 38.9742 150.381 39.648C145.656 40.3171 140.899 40.8395 136.143 41.3383C134.983 41.4628 133.766 41.2515 133.107 41.2218C131.651 41.4711 130.636 41.6422 129.627 41.8227C128.093 42.0913 126.363 42.0768 124.973 42.0984C122.917 42.133 120.837 43.3609 118.57 42.265C117.715 41.8529 116.05 42.5294 114.744 42.6215C111.408 42.8618 108.065 43.069 104.722 43.2619C101.137 43.4656 97.547 43.7262 93.9556 43.7926C91.7971 43.8325 89.6364 43.4558 87.4714 43.4246C85.8447 43.4002 84.2138 43.7308 82.5872 43.7205C79.9325 43.7062 77.2829 43.4883 74.6282 43.4645C72.935 43.4498 71.1118 43.9946 69.5681 43.6666C65.5182 42.8122 61.4454 43.3263 57.3991 43.1442C52.4577 42.9242 47.5097 42.6096 42.5972 42.1291C31.5923 41.056 20.5274 40.0684 10.3426 36.2874C8.37353 35.5545 6.46338 34.5372 4.9151 33.3428C-0.0394794 29.5103 0.991291 24.3533 6.96864 21.5233C15.0028 17.7211 23.8076 15.5579 32.8821 14.0939C44.5243 12.2139 56.2529 10.6553 67.9197 8.86037C78.8434 7.17826 89.8623 6.33843 100.97 6.3362C106.098 6.33735 111.222 6.77413 116.351 7.04516C116.902 7.07538 117.429 7.31405 117.968 7.45796C117.987 7.5999 118.025 7.88379 118.025 7.88379"
                        fill="none"
                        stroke="#F8845D"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </i>
              </h2>
            </div>
            <p className=" text-[16px] text-black mt-1 mb-6 px-4 leading-relaxed font-lato">
              One click, and we’re part of your superteam.
            </p>
          </div>
          {/* <SuperDocButton href="#" label="Schedule your appointment" className="w-80 text-center uppercase" variant="pink"/> */}

          <div
            className="absolute bottom-[20px] z-[2] absolute-bottom-center"
            style={{ bottom: "20px" }}
          >
            <SuperDocButton2
              onClick={() => setIsModalOpen(true)}
              label="Schedule your appointment"
              className="w-80 text-center fade-in uppercase"
              variant="purple"
            />
          </div>

          {/*  <button
                type="button"
                className="text-[16px] font-lato text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-5 text-center mt-12 mx-auto md:mx-0 flex flex-row gap-2 justify-center middlingbtns middlingbtns-fullwidth"
              >
                <span>Schedule your appointment </span>
                <img src="/images/Group 2349.png" alt="Arrow" />
              </button> */}
        </div>

        <div className="w-full md:w-1/3 relative md:px-0 pt-4">
          <img className="mx-auto" src="/images/Vector 3.svg" alt="Vector 3" />

          <Image
            src={docsmile}
            alt={"BabyMD Doctors"}
            className="mx-auto absolute absolute-bottom-center  w-[350px]"
          />

          <div className="absolute top-[-30px] left-[58%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="71"
              viewBox="0 0 24 71"
              fill="none"
            >
              <path
                d="M10.142 27.7936L9.64543 28.6616L9.64543 28.6616L10.142 27.7936ZM7.43918 33.4226L7.69102 32.4548L7.43918 33.4226ZM1.77432 1.09871L1.97138 0.118318C2.70618 0.266015 3.40546 0.511136 4.06775 0.839376L3.62368 1.73537L3.17962 2.63136C2.66536 2.37649 2.13161 2.19053 1.57726 2.0791L1.77432 1.09871ZM6.67838 4.16194L7.42893 3.50112C8.30662 4.49798 9.08313 5.65839 9.76265 6.92232L8.88187 7.39585L8.00109 7.86937C7.37888 6.71203 6.68579 5.68362 5.92784 4.82276L6.67838 4.16194ZM10.4599 10.9812L11.4011 10.6434C11.8496 11.8928 12.2296 13.1947 12.5415 14.5149L11.5682 14.7448L10.595 14.9747C10.2989 13.7211 9.93963 12.4918 9.51868 11.3191L10.4599 10.9812ZM12.2781 18.6027L13.2693 18.4703C13.4509 19.8307 13.5617 21.1804 13.6004 22.4838L12.6009 22.5135L11.6013 22.5432C11.5647 21.3111 11.4598 20.0299 11.2869 18.7351L12.2781 18.6027ZM12.4743 26.4321L13.4691 26.5345C13.3143 28.037 13.0342 29.4237 12.6137 30.603L11.6718 30.2671L10.7299 29.9312C11.0821 28.9435 11.3361 27.7226 11.4796 26.3297L12.4743 26.4321ZM9.36254 33.3039L9.77081 34.2168C8.9764 34.5721 8.10036 34.6279 7.18733 34.3903L7.43918 33.4226L7.69102 32.4548C8.21065 32.59 8.6164 32.5421 8.95426 32.391L9.36254 33.3039ZM7.43918 33.4226L7.18733 34.3903C6.48009 34.2063 5.85171 33.9919 5.29854 33.7509L5.69801 32.8341L6.09749 31.9174C6.54154 32.1109 7.06935 32.293 7.69102 32.4548L7.43918 33.4226ZM3.13451 30.4031L2.16113 30.6323C1.74295 28.8562 2.93683 27.3448 4.4216 26.5965L4.87163 27.4895L5.32166 28.3825C4.28924 28.9028 3.98446 29.6497 4.10789 30.1739L3.13451 30.4031ZM8.44354 27.119L8.67086 26.1452C9.32595 26.2981 9.98838 26.5536 10.6386 26.9256L10.142 27.7936L9.64543 28.6616C9.16185 28.3849 8.68062 28.2012 8.21621 28.0928L8.44354 27.119ZM10.142 27.7936L10.6386 26.9256C11.2745 27.2894 11.884 27.66 12.4677 28.0369L11.9253 28.877L11.3828 29.7171C10.8302 29.3603 10.2514 29.0083 9.64543 28.6616L10.142 27.7936ZM15.2442 31.3223L15.89 30.5589C17.041 31.5325 18.0494 32.5381 18.924 33.5696L18.1613 34.2163L17.3986 34.8631C16.5998 33.9211 15.6706 32.9928 14.5983 32.0858L15.2442 31.3223ZM20.4987 37.6113L21.3783 37.1355C22.0993 38.4684 22.6291 39.8245 22.9871 41.1896L22.0198 41.4433L21.0525 41.6969C20.7353 40.4871 20.2645 39.2801 19.6192 38.0871L20.4987 37.6113ZM22.5691 45.5255L23.569 45.5124C23.588 46.9715 23.4349 48.4166 23.1384 49.8302L22.1597 49.625L21.181 49.4197C21.4496 48.1386 21.5861 46.8402 21.5691 45.5385L22.5691 45.5255ZM20.9308 53.5615L21.8545 53.9445C21.3074 55.2642 20.6471 56.5397 19.9 57.7557L19.048 57.2322L18.196 56.7087C18.892 55.5759 19.503 54.3941 20.007 53.1785L20.9308 53.5615ZM16.6427 60.5862L17.413 61.2238C16.4936 62.3345 15.5073 63.3701 14.4805 64.3142L13.8036 63.5781L13.1268 62.842C14.0874 61.9587 15.0111 60.9888 15.8723 59.9485L16.6427 60.5862ZM10.5684 66.1477L11.1289 66.9759C9.88293 67.8193 8.61215 68.5241 7.35547 69.0609L6.96266 68.1413L6.56984 67.2217C7.69516 66.741 8.85421 66.1005 10.0078 65.3196L10.5684 66.1477ZM2.98822 69.2105L3.07733 70.2065C2.28454 70.2775 1.5081 70.2567 0.764455 70.1279L0.935107 69.1426L1.10576 68.1573C1.65495 68.2524 2.25484 68.2721 2.8991 68.2145L2.98822 69.2105Z"
                fill="#FF9A6C"
              />
            </svg>
          </div>
        </div>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mainText={<>Contact for </>}
          highlightText={<span> </span>}
          subText={<i>Appointment</i>}
        >
          <BabyMDCampaignForm formID="doctor-appointment" />
        </Modal>
      </div>
    </div>
  );
}
