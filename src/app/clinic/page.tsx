"use client";
import "keen-slider/keen-slider.min.css";
import {
  useKeenSlider,
  KeenSliderInstance,
  KeenSliderPlugin,
} from "keen-slider/react";
import React, { useEffect, useRef, useState } from "react";
import SubHeading3 from "../../components/SubHeading3";
import SubHeading4 from "../../components/SubHeading4";
import SuperDocButton from "../../components/SuperDocButton";
import Image from "next/image";
import docImg from "../assets/doc.png";
import { gsap } from "gsap";

interface SlideItem {
  title: string;
  items: string[];
  icon: string;
}

export default function ClinicInner() {
  // Slider 1 (e.g., Hero or General Slider)
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef1] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.5,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 24,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3.5,
          spacing: 32,
        },
      },
    },
  });

  // Slider 2 (e.g., Testimonials)
  /*  const [slider1Ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
  }); */

  const [clientCurrentSlide, setClientCurrentSlide] = useState(0);

  const [slider1Ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged(s) {
      setClientCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setClientCurrentSlide(s.track.details.rel);
    },
  });

  const testimonials = [
    {
      quote:
        "Amazing experience at BabyMD. Timely service, ease of making appointments, lovely staff, and an amazing doctor. We visited for my child's vaccination—they made the process a breeze and clarified all my doubts. Plus, they even gave my child some freebies",
      name: " Shrinkhla Arya",
      img: "Mom+%26+Baby",
    },
  ];

  // Slider 3 (e.g., Milestones Section)
  const [activeSlide, setActiveSlide] = useState(0);
  const [keenSliderRef, keenInstanceRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 16 },
    created(s) {
      setActiveSlide(s.track.details.rel);
    },
    slideChanged(s) {
      setActiveSlide(s.track.details.rel);
    },
  });

  // Autoplay for Slider 3
  useEffect(() => {
    let autoplayTimeout: ReturnType<typeof setTimeout>;
    const clear = () => clearTimeout(autoplayTimeout);

    const startAutoplay = () => {
      if (keenInstanceRef.current) {
        keenInstanceRef.current.next();
        autoplayTimeout = setTimeout(startAutoplay, 3000);
      }
    };

    autoplayTimeout = setTimeout(startAutoplay, 3000);

    return clear;
  }, [keenInstanceRef]);

  const slides: SlideItem[] = Array(5).fill({
    title: "Clinic Consultations",
    items: [
      "General Pediatric Consultations",
      "Lactation & Nutrition",
      "Allergy & Asthma",
      "All Types of Infections/Viral Diseases",
    ],
    icon: "/images/Group 427319470.png",
  });
  const [docCurrentSlide, setDocCurrentSlide] = useState(0);
  const [docSliderRef, docSliderInstanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setDocCurrentSlide(slider.track.details.rel);
    },
  });
  const docSlides = [
    {
      id: 1,
      name: "Dr Bhaskar MV",
      title: "Paediatrician and Neonatologist",
      experience: "15+ Years | English, Kannada and Hindi",
      bgColor: "bg-[#DBFFCC]",
      image: docImg,
    },
    {
      id: 2,
      name: "Dr Vidisha Kumari",
      title: "Paediatric Pulmonologist",
      experience: "18+ Years | English, and Hindi",
      bgColor: "bg-[#D9F9FF]",
      image: docImg,
    },
    {
      id: 3,
      name: "Ms Rashmitha",
      title: "Behavioural Therapist",
      experience: "1.5+ Years | English, Hindi, Tulu, and Kannada",
      bgColor: "bg-[#D9F9FF]",
      image: docImg,
    },
    {
      id: 3,
      name: "Dr Aziza Habib",
      title: "Neuro-Physiotherapist 6+ Years | English, and Hindi",
      experience: "6+ Years | English, and Hindi",
      bgColor: "bg-[#DBFFCC]",
      image: docImg,
    },
    {
      id: 3,
      name: "Cicily Kurian",
      title: "Occupational Therapist",
      experience: "2+ Years | English, Malayalam, Tamil, and Hindi",
      bgColor: "bg-[#DBFFCC]",
      image: docImg,
    },
    {
      id: 3,
      name: "Christa Susan Joseph",
      title: "BSpeech Therapist",
      experience: "3+ Years | English, Malayalam, and Kannada",
      bgColor: "bg-[#D9F9FF]",
      image: docImg,
    },
  ]; // Replace with actual doctor data if needed

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
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div className="container mx-auto">
      {/* Banner Section */}
      <section className="banner-box bg-white relative z-2 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 relative">
              <p className="pb-3">BabyMD – Hosa Road</p>
              <h2 className="text-[34px] leading-[34px]  max-w-[400px] font-bold font-baloo2 mt-2">
                <span className="text-[#000000]">
                  Your neighbourhood clinic, &nbsp;
                </span>
                <span className=" relative text-[#4B3A8F]">
                  ready &nbsp;
                  <div className="absolute z-[-1] left-[-14px] top-[7px]">
                    <svg
                      viewBox="0 0 137 47"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[140px] h-auto overflow-visible "
                    >
                      <path
                        ref={pathRef}
                        d="M70.4894 2.91253C74.4613 1.08843 78.4641 2.09986 82.411 2.64443C87.9738 3.41381 93.4434 4.74719 98.7282 6.88444C102.73 8.50215 106.665 10.2977 109.997 13.3172C113.215 16.2342 112.549 20.1866 109.836 22.7179C105.883 26.4096 101.011 28.1229 96.0535 29.5038C93.3809 30.2493 90.7043 30.9835 88.0062 31.608C85.3149 32.2284 82.6018 32.7314 79.888 33.2153C79.226 33.3357 78.5226 33.1869 78.1437 33.1746C77.3156 33.4004 76.7382 33.5557 76.1646 33.7184C75.292 33.9611 74.2999 33.9796 73.503 34.0212C72.3251 34.0849 71.1661 35.1086 69.8359 34.2667C69.3344 33.9502 68.3979 34.5232 67.6517 34.6201C65.7449 34.8715 63.8336 35.0963 61.9219 35.3097C59.8719 35.536 57.82 35.8081 55.7623 35.9241C54.5256 35.9937 53.2762 35.7284 52.0338 35.7411C51.1003 35.7497 50.1741 36.044 49.241 36.0641C47.7183 36.0988 46.1929 35.9697 44.6699 35.9968C43.6985 36.0145 42.6679 36.4844 41.7737 36.2475C39.4278 35.6309 37.1063 36.1153 34.781 36.0393C31.9412 35.9485 29.0952 35.7817 26.2649 35.4808C19.9247 34.8095 13.5524 34.208 7.60829 31.3446C6.45902 30.7895 5.33577 30.0046 4.41519 29.071C1.46902 26.0751 1.91893 21.9098 5.2692 19.5296C9.77234 16.3319 14.7623 14.4388 19.9261 13.1034C26.5509 11.3886 33.2341 9.93086 39.8754 8.28408C46.0936 6.741 52.3895 5.87366 58.7594 5.67837C61.6999 5.58997 64.6503 5.85199 67.5991 5.98061C67.9155 5.99533 68.2245 6.17808 68.5375 6.28444"
                        fill="none"
                        stroke="#F4DF76"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </span>

                <i className="relative z-[2] font-light text-[#4B3A8F]">
                  when you are
                </i>
              </h2>

              <p className="mt-4 mb-8">
                We&#39;re here on Hosa Road to walk with you — offering real
                answers, expert guidance, and the kind of support that makes you
                feel like, &ldquo;Okay, I&#39;ve got this.&ldquo;
              </p>
              <img
                className="absolute top-[-40px] right-0"
                src="/images/Group 427319502.svg"
              />
              <img
                className="absolute bottom-[-42px] left-0"
                src="/images/Group 427319515.svg"
              />
            </div>

            <div className="w-full md:w-1/2 relative">
              <img className="mx-auto" src="/images/Vector copy.svg" />
              <img
                className="mx-auto absolute top-0 left-1/2 transform -translate-x-1/2"
                src="/images/cinic-innerbg.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section bg-white py-0 pt-8 mx-auto">
        <div className="container mx-auto px-4">
          {/* <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <h2 className="text-[28px] leading-[28px] font-bold">
                Swing by anytime,<br/><span className="text-[#5943A5]">doors (and hearts)<br/>are </span>
                <span className="relative font-normal"><i className="text-[#5943A5]">open!</i></span>
              </h2>
              <img className="absolute right-[25px] top-[25px]" src="/images/Group 427319502.svg" />
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row gap-6">
            {/* <div className="md:w-1/2">
              <img className="rounded-[20px]" src="/images/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg" />
            </div> */}

            <div className="md:w-1/2 p-2">
              {/* Address */}
              <div className="flex items-start flex-col relative gap-4 mb-0">
                <img
                  className="swing absolute right-0 top-[-20px]"
                  src="/images/address_bee.png"
                />
                <div className="relative">
                  <svg
                    width="74"
                    height="75"
                    viewBox="0 0 74 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74 37.5C74 39.8928 70.7296 41.9521 70.2845 44.2076C69.8201 46.5416 72.0649 49.6993 71.194 51.8567C70.3039 54.0533 66.511 54.6614 65.2144 56.603C63.9179 58.5643 64.7887 62.3496 63.1632 64.0167C61.5183 65.6838 57.7835 64.7816 55.8483 66.0957C53.9325 67.3902 53.3133 71.2343 51.1653 72.1561C49.0366 73.0387 45.9404 70.7832 43.6182 71.2343C41.3734 71.6854 39.3609 75 37 75C34.6391 75 32.6072 71.6854 30.3818 71.2343C28.079 70.7636 24.9634 73.0387 22.8347 72.1561C20.6674 71.2539 20.0675 67.4098 18.1517 66.0957C16.2165 64.7816 12.4817 65.6642 10.8368 64.0167C9.19194 62.3496 10.0821 58.5643 8.78557 56.603C7.50837 54.6614 3.71548 54.0337 2.80596 51.8567C1.93515 49.6993 4.16057 46.5612 3.71548 44.2076C3.2704 41.9325 0 39.8928 0 37.5C0 35.1072 3.2704 33.0479 3.71548 30.7924C4.17992 28.4584 1.93515 25.3007 2.80596 23.1433C3.69613 20.9467 7.48902 20.3386 8.78557 18.397C10.0821 16.4357 9.2113 12.6504 10.8368 10.9833C12.4817 9.31616 16.2165 10.2184 18.1517 8.90429C20.0675 7.60983 20.6867 3.76569 22.8347 2.84388C24.9634 1.9613 28.0596 4.21679 30.3818 3.76569C32.6266 3.31459 34.6391 0 37 0C39.3609 0 41.3928 3.31459 43.6182 3.76569C45.921 4.2364 49.0366 1.9613 51.1653 2.84388C53.3326 3.74608 53.9325 7.59022 55.8483 8.90429C57.7835 10.2184 61.5183 9.33577 63.1632 10.9833C64.8081 12.6504 63.9179 16.4357 65.2144 18.397C66.4916 20.3386 70.2845 20.9663 71.194 23.1433C72.0649 25.3007 69.8394 28.4388 70.2845 30.7924C70.7296 33.0675 74 35.1072 74 37.5Z"
                      fill="#AED8ED"
                      fill-opacity="0.3"
                    />
                    <path
                      d="M48 33.9192V37.5877L36.7144 29.8162C36.6501 29.7712 36.5746 29.7492 36.501 29.7492C36.4264 29.7492 36.3509 29.7712 36.2875 29.8162L25 37.5867V33.9189L36.4999 26L48 33.9192ZM44.307 26.7511H41.7792V28.6863L44.307 30.4264V26.7511ZM36.4999 30.6168L45.0078 36.4761L45.0087 50H38.8468V41.842H34.1519V50H27.991V36.4761L36.4999 30.6168ZM37.2493 33.52H35.7486C35.537 33.52 35.3646 33.696 35.3646 33.9132V35.2324H34.0802C33.8686 35.2324 33.6962 35.4093 33.6962 35.6265V37.1657C33.6962 37.3829 33.8686 37.5589 34.0802 37.5589H35.3646V38.8771C35.3646 39.0943 35.537 39.2703 35.7486 39.2703H37.2493C37.4618 39.2703 37.6333 39.0943 37.6333 38.8771V37.5589H38.9177C39.1302 37.5589 39.3017 37.3829 39.3017 37.1657V35.6265C39.3017 35.4093 39.1302 35.2324 38.9177 35.2324H37.6333V33.9132C37.6333 33.696 37.4618 33.52 37.2493 33.52Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-full pb-0">
                  <h4 className="font-bold pb-2">Address:</h4>
                  <p className="">
                    1st Floor, Aadeshwar Chambers, IAS Layout, Hosa Road,
                    Eastwood Township, Kasavanahalli, Bengaluru-560035
                  </p>
                  <div className="rounded-[20px] mt-3 text-[#5943A5]">
                    <p>
                      <strong>Landmark:</strong> Above ICICI Bank, Opp.
                      Aishwarya Value Mart
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <SuperDocButton
                      href="https://maps.app.goo.gl/yiQnHGHKYxLK7kF56"
                      label="Get Directions"
                      className="my-5 fade-in"
                      variant="pink"
                      target='_blank'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-2">
              {/* Clinic Hours */}
              <div className="flex items-start flex-col gap-4">
                <div className="relative">
                  <svg
                    width="74"
                    height="75"
                    viewBox="0 0 74 75"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M74 37.5C74 39.8928 70.7296 41.9521 70.2845 44.2076C69.8201 46.5416 72.0649 49.6993 71.194 51.8567C70.3039 54.0533 66.511 54.6614 65.2144 56.603C63.9179 58.5643 64.7887 62.3496 63.1632 64.0167C61.5183 65.6838 57.7835 64.7816 55.8483 66.0957C53.9325 67.3902 53.3133 71.2343 51.1653 72.1561C49.0366 73.0387 45.9404 70.7832 43.6182 71.2343C41.3734 71.6854 39.3609 75 37 75C34.6391 75 32.6072 71.6854 30.3818 71.2343C28.079 70.7636 24.9634 73.0387 22.8347 72.1561C20.6674 71.2539 20.0675 67.4098 18.1517 66.0957C16.2165 64.7816 12.4817 65.6642 10.8368 64.0167C9.19194 62.3496 10.0821 58.5643 8.78557 56.603C7.50837 54.6614 3.71548 54.0337 2.80596 51.8567C1.93515 49.6993 4.16057 46.5612 3.71548 44.2076C3.2704 41.9325 0 39.8928 0 37.5C0 35.1072 3.2704 33.0479 3.71548 30.7924C4.17992 28.4584 1.93515 25.3007 2.80596 23.1433C3.69613 20.9467 7.48902 20.3386 8.78557 18.397C10.0821 16.4357 9.2113 12.6504 10.8368 10.9833C12.4817 9.31616 16.2165 10.2184 18.1517 8.90429C20.0675 7.60983 20.6867 3.76569 22.8347 2.84388C24.9634 1.9613 28.0596 4.21679 30.3818 3.76569C32.6266 3.31459 34.6391 0 37 0C39.3609 0 41.3928 3.31459 43.6182 3.76569C45.921 4.2364 49.0366 1.9613 51.1653 2.84388C53.3326 3.74608 53.9325 7.59022 55.8483 8.90429C57.7835 10.2184 61.5183 9.33577 63.1632 10.9833C64.8081 12.6504 63.9179 16.4357 65.2144 18.397C66.4916 20.3386 70.2845 20.9663 71.194 23.1433C72.0649 25.3007 69.8394 28.4388 70.2845 30.7924C70.7296 33.0675 74 35.1072 74 37.5Z"
                      fill="#91CFDA"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M37 25.7176C37.5494 25.7254 38.0585 25.7523 38.6046 25.8216C39.6194 25.9481 39.9797 24.4856 38.966 24.1477C38.449 24.0179 37.5438 24.0011 37 24C33.1341 24 29.6341 25.5676 27.1007 28.1007C24.5674 30.6339 23 34.1339 23 38C23 41.8659 24.5676 45.3659 27.1007 47.8993C29.6339 50.4326 33.1339 52 37 52C40.8661 52 44.3648 50.4324 46.8993 47.8993C49.4325 45.366 51 41.8661 51 38C50.9966 37.7885 50.9317 37.5591 50.7796 37.4081C50.2458 36.8218 49.2612 37.2044 49.2813 38C49.2813 41.3904 47.9062 44.4619 45.6839 46.6827C43.4617 48.9049 40.3912 50.2802 37.0011 50.2802C33.6108 50.2802 30.5392 48.905 28.3184 46.6827C26.0962 44.4605 24.721 41.3901 24.721 38C24.721 34.6096 26.0961 31.5381 28.3184 29.3173C30.629 27.0067 33.7339 25.7198 37.0011 25.7198L37 25.7176ZM48.3458 33.2906C48.7184 34.2215 50.2413 33.831 49.9593 32.7043C49.7523 32.137 49.4189 31.5104 49.1179 30.9845C48.6054 30.0871 47.1743 30.7283 47.586 31.7565C47.8535 32.2858 48.1131 32.7334 48.3458 33.2906ZM44.4711 28.2509C44.7351 28.4545 45.0887 28.4825 45.3819 28.3348C45.9492 28.0517 46.0118 27.2673 45.515 26.8858C45.0193 26.5143 44.5304 26.1786 43.9933 25.8687C43.1272 25.3741 42.2522 26.5165 42.9605 27.2248C43.0198 27.2797 43.0679 27.3199 43.1373 27.3591C43.6106 27.6366 44.0325 27.9219 44.4711 28.2509ZM36.1441 32.5645C36.1441 32.0923 36.5279 31.7085 37.0001 31.7085C37.4723 31.7085 37.8561 32.0923 37.8561 32.5645V37.5761L40.0648 39.2937C40.4385 39.5846 40.5068 40.125 40.2159 40.4987C39.925 40.8725 39.3845 40.9407 39.0108 40.6498L36.4731 38.676C36.2739 38.5171 36.1441 38.2732 36.1441 37.9979L36.1441 32.5645ZM45.5945 38.8539C45.1201 38.8539 44.7352 38.469 44.7352 37.9946C44.7352 37.5202 45.1201 37.1353 45.5945 37.1353H46.7C46.4941 34.7911 45.4569 32.6842 43.8859 31.1133C42.3138 29.5412 40.2057 28.504 37.8594 28.2992V29.4014C37.8594 29.8758 37.4745 30.2607 37.0001 30.2607C36.5256 30.2607 36.1407 29.8758 36.1407 29.4014V28.2992C33.7943 28.504 31.6862 29.5424 30.1142 31.1133C28.5432 32.6854 27.506 34.7913 27.3001 37.1353H28.4056C28.88 37.1353 29.265 37.5202 29.265 37.9946C29.265 38.469 28.88 38.8539 28.4056 38.8539H27.299C27.5038 41.2014 28.541 43.3107 30.1142 44.8839C31.6863 46.456 33.7945 47.4932 36.1407 47.698V46.588C36.1407 46.1136 36.5256 45.7287 37.0001 45.7287C37.4745 45.7287 37.8594 46.1136 37.8594 46.588V47.698C40.2047 47.4932 42.3128 46.456 43.8848 44.8828C45.458 43.3096 46.4952 41.2005 46.7 38.8528H45.5934L45.5945 38.8539Z"
                      fill="black"
                    />
                  </svg>
                </div>
                <div className="w-full pb-6">
                  <h4 className="font-bold mb-4">Clinic Hours:</h4>
                  <p className="mb-4">
                    <span className="font-bold">Mon-Sat:</span> 8 AM - 1:30 PM |
                    4 PM - 8:30 PM
                  </p>
                  <p className="font-bold">Sunday: 9 AM - 12 PM</p>

                  <div className="flex justify-center ">
                    <SuperDocButton
                      href="../contact-baby-md/"
                      label=" Talk to us"
                      className="my-5 fade-in"
                      variant="pink"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="px-4">
        <div
          ref={docSliderRef}
          className="keen-slider max-w-6xl mx-auto"
          id="doctorSlider"
        >
          {docSlides.map((docSlides) => (
            <div
              key={docSlides.id}
              className={`${docSlides.bgColor} keen-slider__slide rounded-2xl`}>
              <div
                className="flex flex-col md:flex-row gap-1 items-start justify-between h-full">
                <div className="w-full md:w-1/2">
                  <div className="relative flex items-start">
                    <div className="text-[#000] text-[16px] p-6">
                      <h3 className="text-2xl font-lato font-bold text-[16px] leading-tight pb-3">
                        {docSlides.name}
                      </h3>
                      <p>
                        <i className="font-normal z-2">{docSlides.title}</i>
                      </p>
                      <p>{docSlides.experience}</p>
                    </div>
                    <img
                      className="absolute right-[65px] md:left-20 bottom-[10px] w-20 h-20"
                      src="/images/bee.png"
                      alt="bee"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 relative">
                  <img
                    className="mx-auto"
                    src="/images/Vector.png"
                    alt="Vector background"
                  />
                  <img
                    className="mx-auto absolute bottom-[0px] left-1/2 transform -translate-x-1/2"
                    src="/images/doc.png"
                    alt="Doctor"
                  />
                  <img
                    className="mx-auto absolute right-[80px] top-[-40px]"
                    src="/images/Vector 107.png"
                    alt="Decorative vector"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>


        <div
          id="doctorSliderDots"
          className="flex justify-center mt-6 space-x-2"
        >
          {docSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => docSliderInstanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full ${
                docCurrentSlide === idx ? "bg-[#5943A5]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>

        <button className="mx-auto uppercase mt-12 text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all font-medium rounded-full text-sm px-8 py-4 flex items-center gap-2">
          Ready when you are{" "}
          <img src="/images/Group 2349.png" alt="Arrow Icon" />
        </button>
      </div> */}

      <div className="bg-white">
        <div className=" mx-auto pb-6 px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3">
            {docSlides.map((slide, index) => (
              <div
                key={index}
                className={`${slide.bgColor} keen-slider__slide rounded-2xl`}
              >
                <div className="flex flex-col gap-1 items-start justify-between h-full">
                  {/* Top Content */}
                  <div className="w-full">
                    <div className="relative flex items-start">
                      <div className="text-[#000] text-[16px] p-4">
                        <h3 className="text-2xl font-lato font-bold text-[12px] md:text-[16px] leading-tight pb-3">
                          {slide.name}
                        </h3>
                        <p className="text-[12px] md:text-[16px]">
                          <i className="font-normal">{slide.title}</i>
                        </p>
                        <p className="text-[12px] md:text-[16px]">
                          {slide.experience}
                        </p>
                      </div>
                      <img
                        className="absolute right-0 top-0 w-10 h-10 md:w-15 md:h-15"
                        src="/images/bee.png"
                        alt="bee"
                      />
                    </div>
                  </div>

                  {/* Bottom Images */}
                  <div className="w-full relative">
                    <img
                      className="mx-auto"
                      src="/images/Vector.png"
                      alt="Vector background"
                    />
                    <img
                      className="mx-auto absolute bottom-0 left-1/2 transform -translate-x-1/2"
                      src="/images/doc.png"
                      alt="Doctor"
                    />
                    <img
                      className="mx-auto absolute right-5 -top-5 w-[30px] md:w-[45px]"
                      src="/images/Vector 107.png"
                      alt="Decorative vector"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Slider */}
      <section className="py-10 pt-10 bg-white">
        <div className="px-6 relative">
          <img
            className="absolute left-[25px] top-[-35px]"
            src="/images/beehive2.png"
          />
          <img
            className="absolute right-[25px] top-[35px]"
            src="/images/beehive2.png"
          />
          {/*   <h2 className="text-[28px] leading-[30px] font-semibold text-gray-800 pb-4">
            Peek inside our{" "}
            <span className="text-[#5943A5] spansidecour">happy place</span>
          </h2> */}
          <SubHeading4
            mainText={<> Peek inside our</>}
            highlightText={<></>}
            subText={
              <>
                <i> happy place</i>
              </>
            }
          />
        </div>
        <div ref={sliderRef} className="keen-slider max-w-5xl mx-auto mt-6">
          {["happyplace1.png", "happyplace2.png", "happyplace3.png"].map(
            (img, idx) => (
              <div
                key={idx}
                className="keen-slider__slide rounded-xl overflow-hidden"
              >
                <img
                  src={`/images/${img}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )
          )}
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {[
            ...Array(instanceRef1.current?.track.details.slides.length || 0),
          ].map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef1.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full ${
                currentSlide === idx ? "bg-purple-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Testimonials */}

      {/*    <DoctorSlider /> */}

      <div className="navigation-wrapper px-4 relative w-full mx-auto py-6 bg-white">
        <div className="pb-3">
          {/*  <h2 className="text-[28px] leading-[30px] font-semibold text-gray-800 pb-6">
            High-fives From{" "}
            <span className="text-[#5943A5] font-bold">happy </span>
            <span className="text-[#5943A5] spansidecour">families</span>
          </h2> */}
          <SubHeading3
            mainText={<>High-fives From</>}
            highlightText={<>happy</>}
            subText={
              <>
                <i> families</i>
              </>
            }
          />
        </div>
        <div className="relative w-full">
          {/* Slider */}
          {/* Slider */}
          <div ref={slider1Ref} className="keen-slider">
            {testimonials.map((t, idx) => (
              <div key={idx} className="keen-slider__slide flex justify-center">
                <div className="bg-[#FF9A6C] rounded-3xl px-6 pt-6 text-white w-full max-w-sm relative">
                  <p className="px-2">{t.quote}</p>
                  <p className="font-semibold text-sm pt-4 italic">
                    — {t.name}
                  </p>
                  {/*  <img
                    src="/images/bee_clinic_details.png"
                    alt="bee"
                    className="absolute right-3 top-4 w-13 h-13 swing"
                  /> */}
                  <div className="w-full flex justify-center mt-4">
                    <img
                      src="/images/Group 1 (1).png"
                      className="w-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 px-4 transform -translate-y-1/2 pointer-events-none">
            <button
              onClick={() => slider.current?.prev()}
              className="bg-[#F4DF76] text-black px-1 py-1 rounded-full shadow pointer-events-auto absolute left-[-10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M9.33752 12.0081L5.72764 8.39818C5.30132 7.97186 5.30132 7.27424 5.72764 6.84792L9.33752 3.23804"
                  stroke="#19223F"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => slider.current?.next()}
              className="bg-[#F4DF76] text-black px-1 py-1 rounded-full shadow pointer-events-auto absolute right-[-10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
              >
                <path
                  d="M5.65356 12.0081L9.26345 8.39818C9.68977 7.97186 9.68977 7.27424 9.26345 6.84792L5.65356 3.23804"
                  stroke="#19223F"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((index, idx) => (
              <button
                key={idx}
                onClick={() => slider.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  clientCurrentSlide === idx ? "bg-[#5943A5]" : "bg-[#DDD0FF]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
