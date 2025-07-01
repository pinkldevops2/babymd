"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import beehive4 from "@/app/assets/beehive4.png";
import familysmile from "../../../../../public/images/doctorassets/happyfamily.png";
import smilevectorimg from "../../../../public/images/serviceassets/smileimg.png";
import SubHeading3 from '../../../../components/SubHeading3';
import bee from "../../../../../public/images/doctorassets/bee.png";
import SuperDocButton from "@/components/SuperDocButton";
import Modal from '@/components/FormPopUp';
import BabyMDCampaignForm from '@/components/BabyMDCampaignForm';

import arrow from "../../../../../public/images/Group 2349.png";

function HappyFamily() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <div className="pt-0 px-6">
        <div className="">
          <div className="pb-6">

         
           <SubHeading3
                mainText={<>High-fives from</>}
                highlightText={<>happy</>}
                subText={<><i>families</i></>}
                />
             </div>
          <div className="flex flex-col relative justify-center items-end md:flex-row bg-[#FF9A6C] rounded-[20px] md:mx-0 overflow-hidden pt-8">
            <div className="w-full md:w-2/3 px-2 py-2 md:pb-10 md:px-6">
              <div className="relative px-4 md:px-0">
                <p className="text-white text-[16px] leading-[20px] mt-4 font-lato">
                  &quot;Dr Bhaskar is not just an expert in his field — he&#39;s also a
                  wonderful person. He avoids unnecessary medication and offers
                  thoughtful, practical suggestions instead. I truly value his
                  approach and look forward to consulting him for my son
                  whenever needed.&quot;
                </p>
                <h6 className="text-white text-[16px] leading-[20px] font-bold mt-6 font-lato">
                  — Abhishek Kamal
                </h6>
              </div>
            </div>

            <div className="w-full relative md:px-0 pt-4">
              <Image className="mx-auto" src={familysmile} alt="Vector 3" />
              <Image
                className="mx-auto absolute  top-[-40px] right-20 w-[80px] z-2 md:top-[20px]"
                src={bee}
                alt="Decorative"
              />
              <div className="absolute top-[-40px] right-20 z-1 md:top-[20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="49"
                  height="87"
                  viewBox="0 0 49 87"
                  fill="none"
                >
                  <path
                    d="M21.8154 31.697L21.607 32.675L21.8154 31.697ZM18.9845 39.5448L18.9891 40.5448L18.9845 39.5448ZM0.99968 1.45859L0.951279 0.459761C1.64299 0.426241 2.32648 0.437418 3.00081 0.490458L2.92241 1.48738L2.844 2.4843C2.25328 2.43784 1.6545 2.42803 1.04808 2.45742L0.99968 1.45859ZM6.68065 2.25926L6.99765 1.31083C8.27479 1.7377 9.50256 2.30959 10.6753 2.99982L10.168 3.86162L9.66081 4.72343C8.59763 4.09767 7.49681 3.58643 6.36365 3.20768L6.68065 2.25926ZM13.2949 6.09268L13.9401 5.32865C14.9436 6.17608 15.8958 7.10837 16.7926 8.10499L16.0492 8.77387L15.3058 9.44274C14.4648 8.50801 13.5777 7.64031 12.6497 6.85672L13.2949 6.09268ZM18.4488 11.7784L19.2638 11.1989C20.0257 12.2703 20.7332 13.386 21.3825 14.5284L20.5132 15.0226L19.6438 15.5167C19.0263 14.4303 18.3548 13.3718 17.6339 12.3578L18.4488 11.7784ZM22.2506 18.4522L23.1632 18.0433C23.7091 19.2615 24.1895 20.4915 24.5996 21.7144L23.6515 22.0324L22.7034 22.3503C22.3143 21.1901 21.8577 20.0208 21.338 18.8611L22.2506 18.4522ZM24.6773 25.7396L25.6547 25.5281C25.948 26.8837 26.1442 28.2094 26.234 29.4766L25.2365 29.5473L24.239 29.6179C24.1567 28.456 23.9756 27.2248 23.7 25.9511L24.6773 25.7396ZM25.1257 33.3761L26.1147 33.5237C25.8909 35.0233 25.4428 36.3932 24.7165 37.5245L23.875 36.9843L23.0335 36.444C23.5681 35.6113 23.9424 34.5298 24.1366 33.2284L25.1257 33.3761ZM20.895 39.2737L21.1852 40.2307C20.5075 40.4362 19.7743 40.5412 18.9891 40.5448L18.9845 39.5448L18.9799 38.5448C19.5919 38.542 20.1309 38.4604 20.6048 38.3167L20.895 39.2737ZM18.9845 39.5448L18.9891 40.5448C18.2924 40.548 17.6414 40.5288 17.0345 40.4891L17.0999 39.4912L17.1653 38.4933C17.7212 38.5298 18.3253 38.5478 18.9799 38.5448L18.9845 39.5448ZM13.4336 38.8266L13.0991 39.7689C11.2371 39.108 10.0272 37.956 9.94188 36.3988L10.9404 36.3441L11.9389 36.2894C11.9607 36.6872 12.2648 37.3505 13.7681 37.8842L13.4336 38.8266ZM12.8585 33.3002L12.272 32.4903C13.2802 31.7602 14.5618 31.1677 16.0064 30.8066L16.2489 31.7767L16.4914 32.7469C15.2679 33.0527 14.2253 33.5451 13.445 34.1101L12.8585 33.3002ZM19.9627 31.4431L20.0247 30.445C20.6788 30.4856 21.3472 30.5748 22.0238 30.719L21.8154 31.697L21.607 32.675C21.0287 32.5518 20.4582 32.4758 19.9008 32.4412L19.9627 31.4431ZM21.8154 31.697L22.0238 30.719C22.7407 30.8717 23.4407 31.0314 24.1239 31.1978L23.8873 32.1694L23.6506 33.141C22.9867 32.9793 22.3056 32.8239 21.607 32.675L21.8154 31.697ZM27.8781 33.2772L28.1783 32.3233C29.5869 32.7667 30.9115 33.2433 32.155 33.7509L31.7772 34.6767L31.3993 35.6026C30.21 35.1172 28.9375 34.659 27.5778 34.231L27.8781 33.2772ZM35.5232 36.4306L35.9962 35.5495C37.3134 36.2565 38.5135 37.0071 39.6018 37.797L39.0144 38.6063L38.427 39.4156C37.4169 38.6825 36.2939 37.9792 35.0503 37.3116L35.5232 36.4306ZM42.1651 41.3285L42.8856 40.635C43.9375 41.7279 44.8222 42.873 45.55 44.0607L44.6973 44.5832L43.8447 45.1057C43.1954 44.0462 42.4004 43.015 41.4446 42.022L42.1651 41.3285ZM46.4184 48.3451L47.3718 48.0435C47.8173 49.4515 48.08 50.8895 48.1804 52.3411L47.1828 52.4101L46.1851 52.4791C46.0951 51.1772 45.8602 49.896 45.465 48.6468L46.4184 48.3451ZM47.0301 56.5446L48.0208 56.6807C47.8275 58.0884 47.5031 59.494 47.0664 60.8843L46.1123 60.5847L45.1583 60.285C45.5645 58.9917 45.8627 57.6957 46.0394 56.4086L47.0301 56.5446ZM44.593 64.4454L45.4973 64.8723C44.8976 66.1428 44.2131 67.3915 43.4583 68.6084L42.6085 68.0812L41.7587 67.5541C42.4762 66.3976 43.1236 65.2156 43.6887 64.0185L44.593 64.4454ZM40.2454 71.4899L41.0382 72.0994C40.1768 73.22 39.2601 74.3021 38.3009 75.3361L37.5678 74.656L36.8346 73.9759C37.753 72.986 38.6297 71.9509 39.4526 70.8805L40.2454 71.4899ZM34.6107 77.5671L35.2791 78.3109C34.2124 79.2694 33.1126 80.1676 31.9934 80.9946L31.3991 80.1904L30.8048 79.3861C31.8713 78.598 32.9217 77.7403 33.9424 76.8233L34.6107 77.5671ZM27.9447 82.4715L28.4482 83.3354C27.1729 84.0787 25.8879 84.7216 24.6122 85.2477L24.2309 84.3232L23.8497 83.3987C25.033 82.9108 26.2364 82.3096 27.4411 81.6075L27.9447 82.4715ZM20.2775 85.5544L20.4763 86.5344C19.7408 86.6837 19.0132 86.7854 18.2982 86.8349L18.229 85.8373L18.1598 84.8397C18.7803 84.7967 19.4211 84.7078 20.0787 84.5744L20.2775 85.5544Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-[#DBFFCC] p-6 text-center rounded-[20px]">
          <span className=" text-[16px] leading-[20px] font-normal">Check out what other parents are saying about Dr Bhaskar on Google Reviews!

</span>
<div className="pt-4 px-2">
  <SuperDocButton
    href="https://maps.app.goo.gl/yiQnHGHKYxLK7kF56"
    target="_blank"
    label="Click here for reviews"
    className="md:z-10 relative uppercase md:w-[30%] md:mx-auto"
    variant="pink"
  />
</div>

        </div>
      </div>

      {/* Book Now Button Section */}
      <div className="flex justify-center py-9">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center mx-2 gap-3 px-8 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
        >
          <span className="uppercase tracking-wide text-sm">
            Schedule a visit today
          </span>
          <Image src={arrow} alt="Arrow" width={20} height={10} />
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
             <BabyMDCampaignForm formID="doctor-details-appointment" />
      </Modal>
    </div>
  );
}

export default HappyFamily;
