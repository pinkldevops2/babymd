'use client'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider,KeenSliderInstance, KeenSliderPlugin } from 'keen-slider/react'
import React, { useEffect,useRef, useState } from "react"
import Image from 'next/image';
import docImg from '../assets/doc.png'
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
  const [testimonialSliderRef, instanceRef] = useKeenSlider({
    loop: true,
  });

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
let autoplayTimeout;

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
  const slides = Array(5).fill({
    title: 'Clinic Consultations',
    items: [
      'General Pediatric Consultations',
      'Lactation & Nutrition',
      'Allergy & Asthma',
      'All Types of Infections/Viral Diseases',
    ],
    icon: '/images/Group 427319470.png',
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
      bgColor: "bg-[#DBFFCC]",
      image: docImg,
    },

  ]; // Replace with actual doctor data if needed
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-box bg-white relative z-2 pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-1/2 relative">
              <h2 className="text-[42px] leading-[40px] font-bold ">
                Ready with <span className="text-[#5943A5]">love,<br/>science,and </span>
                <span className="relative inline-block relative">
                  <i className="text-[#5943A5] relative z-10 font-normal">smiles</i>
                  <img className="absolute top-[3] right-0 z-0" src="/images/solvingcirc.png" />
                </span>
              </h2>
              <p className="mt-4 mb-8">We&#39;re here on Hosa Road to walk with you — offering real answers, expert guidance, and the kind of support that makes you feel like, &ldquo;Okay, I&#39;ve got this.&ldquo;</p>
              <img className="absolute top-[-40px] right-0" src="/images/Group 427319502.svg" />
              <img className="absolute bottom-[-42px] left-0" src="/images/Group 427319515.svg" />
              
            </div>

            <div className="w-full md:w-1/2 relative">
              <img className="mx-auto" src="/images/Vector copy.svg" />
              <img className="mx-auto absolute top-0 left-1/2 transform -translate-x-1/2" src="/images/Mask group.png" />
            </div>
			<button className="uppercase mt-4 text-white bg-[#F8845D] hover:bg-[#5943A5] transition-all font-medium rounded-full text-sm px-8 py-4 flex items-center gap-2">
                Come say hi! <img src="/images/Group 2349.png" />
              </button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section bg-white py-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative">
              <h2 className="text-[28px] leading-[28px] font-bold">
                Swing by anytime,<br/><span className="text-[#5943A5]">doors (and hearts)<br/>are </span>
                <span className="relative font-normal"><i className="text-[#5943A5]">open!</i></span>
              </h2>
              <img className="absolute right-[25px] top-[25px]" src="/images/Group 427319502.svg" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <div className="md:w-1/2">
              <img className="rounded-[20px]" src="/images/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg" />
            </div>

            <div className="md:w-1/2 p-2">
              {/* Address */}
              <div className="flex items-start flex-col relative gap-4 mb-6">
			  <img className="swing absolute right-0 top-[-20px]" src="/images/address_bee.png" />
                <div className="relative">
                  <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74 37.5C74 39.8928 70.7296 41.9521 70.2845 44.2076C69.8201 46.5416 72.0649 49.6993 71.194 51.8567C70.3039 54.0533 66.511 54.6614 65.2144 56.603C63.9179 58.5643 64.7887 62.3496 63.1632 64.0167C61.5183 65.6838 57.7835 64.7816 55.8483 66.0957C53.9325 67.3902 53.3133 71.2343 51.1653 72.1561C49.0366 73.0387 45.9404 70.7832 43.6182 71.2343C41.3734 71.6854 39.3609 75 37 75C34.6391 75 32.6072 71.6854 30.3818 71.2343C28.079 70.7636 24.9634 73.0387 22.8347 72.1561C20.6674 71.2539 20.0675 67.4098 18.1517 66.0957C16.2165 64.7816 12.4817 65.6642 10.8368 64.0167C9.19194 62.3496 10.0821 58.5643 8.78557 56.603C7.50837 54.6614 3.71548 54.0337 2.80596 51.8567C1.93515 49.6993 4.16057 46.5612 3.71548 44.2076C3.2704 41.9325 0 39.8928 0 37.5C0 35.1072 3.2704 33.0479 3.71548 30.7924C4.17992 28.4584 1.93515 25.3007 2.80596 23.1433C3.69613 20.9467 7.48902 20.3386 8.78557 18.397C10.0821 16.4357 9.2113 12.6504 10.8368 10.9833C12.4817 9.31616 16.2165 10.2184 18.1517 8.90429C20.0675 7.60983 20.6867 3.76569 22.8347 2.84388C24.9634 1.9613 28.0596 4.21679 30.3818 3.76569C32.6266 3.31459 34.6391 0 37 0C39.3609 0 41.3928 3.31459 43.6182 3.76569C45.921 4.2364 49.0366 1.9613 51.1653 2.84388C53.3326 3.74608 53.9325 7.59022 55.8483 8.90429C57.7835 10.2184 61.5183 9.33577 63.1632 10.9833C64.8081 12.6504 63.9179 16.4357 65.2144 18.397C66.4916 20.3386 70.2845 20.9663 71.194 23.1433C72.0649 25.3007 69.8394 28.4388 70.2845 30.7924C70.7296 33.0675 74 35.1072 74 37.5Z" fill="#AED8ED" fill-opacity="0.3"/>
<path d="M48 33.9192V37.5877L36.7144 29.8162C36.6501 29.7712 36.5746 29.7492 36.501 29.7492C36.4264 29.7492 36.3509 29.7712 36.2875 29.8162L25 37.5867V33.9189L36.4999 26L48 33.9192ZM44.307 26.7511H41.7792V28.6863L44.307 30.4264V26.7511ZM36.4999 30.6168L45.0078 36.4761L45.0087 50H38.8468V41.842H34.1519V50H27.991V36.4761L36.4999 30.6168ZM37.2493 33.52H35.7486C35.537 33.52 35.3646 33.696 35.3646 33.9132V35.2324H34.0802C33.8686 35.2324 33.6962 35.4093 33.6962 35.6265V37.1657C33.6962 37.3829 33.8686 37.5589 34.0802 37.5589H35.3646V38.8771C35.3646 39.0943 35.537 39.2703 35.7486 39.2703H37.2493C37.4618 39.2703 37.6333 39.0943 37.6333 38.8771V37.5589H38.9177C39.1302 37.5589 39.3017 37.3829 39.3017 37.1657V35.6265C39.3017 35.4093 39.1302 35.2324 38.9177 35.2324H37.6333V33.9132C37.6333 33.696 37.4618 33.52 37.2493 33.52Z" fill="black"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold pb-2">Address:</h4>
                  <p className="">
                    1st Floor, Aadeshwar Chambers, IAS Layout, Hosa Road, Eastwood Township, Kasavanahalli, Bengaluru-560035
                  </p>
                  <div className="bg-[#F8845D] rounded-[20px] p-4 mt-6 text-white">
                    <p><strong>Landmark:</strong> Above ICICI Bank, Opp. Aishwarya Value Mart</p>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="flex items-start flex-col gap-4">
                <div className="relative">
                  <svg width="74" height="75" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74 37.5C74 39.8928 70.7296 41.9521 70.2845 44.2076C69.8201 46.5416 72.0649 49.6993 71.194 51.8567C70.3039 54.0533 66.511 54.6614 65.2144 56.603C63.9179 58.5643 64.7887 62.3496 63.1632 64.0167C61.5183 65.6838 57.7835 64.7816 55.8483 66.0957C53.9325 67.3902 53.3133 71.2343 51.1653 72.1561C49.0366 73.0387 45.9404 70.7832 43.6182 71.2343C41.3734 71.6854 39.3609 75 37 75C34.6391 75 32.6072 71.6854 30.3818 71.2343C28.079 70.7636 24.9634 73.0387 22.8347 72.1561C20.6674 71.2539 20.0675 67.4098 18.1517 66.0957C16.2165 64.7816 12.4817 65.6642 10.8368 64.0167C9.19194 62.3496 10.0821 58.5643 8.78557 56.603C7.50837 54.6614 3.71548 54.0337 2.80596 51.8567C1.93515 49.6993 4.16057 46.5612 3.71548 44.2076C3.2704 41.9325 0 39.8928 0 37.5C0 35.1072 3.2704 33.0479 3.71548 30.7924C4.17992 28.4584 1.93515 25.3007 2.80596 23.1433C3.69613 20.9467 7.48902 20.3386 8.78557 18.397C10.0821 16.4357 9.2113 12.6504 10.8368 10.9833C12.4817 9.31616 16.2165 10.2184 18.1517 8.90429C20.0675 7.60983 20.6867 3.76569 22.8347 2.84388C24.9634 1.9613 28.0596 4.21679 30.3818 3.76569C32.6266 3.31459 34.6391 0 37 0C39.3609 0 41.3928 3.31459 43.6182 3.76569C45.921 4.2364 49.0366 1.9613 51.1653 2.84388C53.3326 3.74608 53.9325 7.59022 55.8483 8.90429C57.7835 10.2184 61.5183 9.33577 63.1632 10.9833C64.8081 12.6504 63.9179 16.4357 65.2144 18.397C66.4916 20.3386 70.2845 20.9663 71.194 23.1433C72.0649 25.3007 69.8394 28.4388 70.2845 30.7924C70.7296 33.0675 74 35.1072 74 37.5Z" fill="#91CFDA" fill-opacity="0.5"/>
<path d="M37 25.7176C37.5494 25.7254 38.0585 25.7523 38.6046 25.8216C39.6194 25.9481 39.9797 24.4856 38.966 24.1477C38.449 24.0179 37.5438 24.0011 37 24C33.1341 24 29.6341 25.5676 27.1007 28.1007C24.5674 30.6339 23 34.1339 23 38C23 41.8659 24.5676 45.3659 27.1007 47.8993C29.6339 50.4326 33.1339 52 37 52C40.8661 52 44.3648 50.4324 46.8993 47.8993C49.4325 45.366 51 41.8661 51 38C50.9966 37.7885 50.9317 37.5591 50.7796 37.4081C50.2458 36.8218 49.2612 37.2044 49.2813 38C49.2813 41.3904 47.9062 44.4619 45.6839 46.6827C43.4617 48.9049 40.3912 50.2802 37.0011 50.2802C33.6108 50.2802 30.5392 48.905 28.3184 46.6827C26.0962 44.4605 24.721 41.3901 24.721 38C24.721 34.6096 26.0961 31.5381 28.3184 29.3173C30.629 27.0067 33.7339 25.7198 37.0011 25.7198L37 25.7176ZM48.3458 33.2906C48.7184 34.2215 50.2413 33.831 49.9593 32.7043C49.7523 32.137 49.4189 31.5104 49.1179 30.9845C48.6054 30.0871 47.1743 30.7283 47.586 31.7565C47.8535 32.2858 48.1131 32.7334 48.3458 33.2906ZM44.4711 28.2509C44.7351 28.4545 45.0887 28.4825 45.3819 28.3348C45.9492 28.0517 46.0118 27.2673 45.515 26.8858C45.0193 26.5143 44.5304 26.1786 43.9933 25.8687C43.1272 25.3741 42.2522 26.5165 42.9605 27.2248C43.0198 27.2797 43.0679 27.3199 43.1373 27.3591C43.6106 27.6366 44.0325 27.9219 44.4711 28.2509ZM36.1441 32.5645C36.1441 32.0923 36.5279 31.7085 37.0001 31.7085C37.4723 31.7085 37.8561 32.0923 37.8561 32.5645V37.5761L40.0648 39.2937C40.4385 39.5846 40.5068 40.125 40.2159 40.4987C39.925 40.8725 39.3845 40.9407 39.0108 40.6498L36.4731 38.676C36.2739 38.5171 36.1441 38.2732 36.1441 37.9979L36.1441 32.5645ZM45.5945 38.8539C45.1201 38.8539 44.7352 38.469 44.7352 37.9946C44.7352 37.5202 45.1201 37.1353 45.5945 37.1353H46.7C46.4941 34.7911 45.4569 32.6842 43.8859 31.1133C42.3138 29.5412 40.2057 28.504 37.8594 28.2992V29.4014C37.8594 29.8758 37.4745 30.2607 37.0001 30.2607C36.5256 30.2607 36.1407 29.8758 36.1407 29.4014V28.2992C33.7943 28.504 31.6862 29.5424 30.1142 31.1133C28.5432 32.6854 27.506 34.7913 27.3001 37.1353H28.4056C28.88 37.1353 29.265 37.5202 29.265 37.9946C29.265 38.469 28.88 38.8539 28.4056 38.8539H27.299C27.5038 41.2014 28.541 43.3107 30.1142 44.8839C31.6863 46.456 33.7945 47.4932 36.1407 47.698V46.588C36.1407 46.1136 36.5256 45.7287 37.0001 45.7287C37.4745 45.7287 37.8594 46.1136 37.8594 46.588V47.698C40.2047 47.4932 42.3128 46.456 43.8848 44.8828C45.458 43.3096 46.4952 41.2005 46.7 38.8528H45.5934L45.5945 38.8539Z" fill="black"/>
</svg>

                </div>
                <div>
                  <h4 className="font-bold mb-4">Clinic Hours:</h4>
                  <p className="mb-4"><span className="font-bold">Mon-Sat:</span> 8 AM - 1:30 PM | 4 PM - 8:30 PM</p>
                  <p className="font-bold">Sunday: 9 AM - 12 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
	  
	  
	  <div className="milestones-section">
      <div className="container mx-auto">
        <div className="flex flex-row gap-1 items-start">
          <div className="w-full md:w-1/2">
            <div className="relative px-4 md:px-0 flex items-baseline">
              <h2 className="text-[28px] leading-[26px] font-bold pb-6 pt-10">
                <span className="text-[#5943A5]">Sniffles to milestones — </span>
                <span className="relative"><br/>
                  <i className="font-normal text-[#5943A5] z-2">we&#39;re on it!</i>
                </span>
              </h2>
              <Image
                src="/images/Group 427319502.svg"
                alt="Illustration"
                width={40}
                height={40}
                className="absolute right-[30px] md:left-20 top-[20px]"
              />
            </div>
          </div>
        </div>

        <p className="px-4 md:px-0">
          What does your little one need today — a vaccine, a check-up, or speech boost? From sniffles and nutrition chats to therapy sessions and dental check-ups, our clinic has it all under one roof. Need help with milestones, moods, or managing allergies? We’ve got superspecialists, diagnostics, therapy packages, and everything (and everyone) your kid might need.
        </p>

        <div className="slinder-innerbox px-0 md:px-0 mt-8">
          <div className="w-full px-4">
            <div className="md:px-0 mt-8">
      <div ref={keenSliderRef} className="keen-slider">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide bg-[#5943A5] text-white rounded-2xl p-6 shadow-lg">
            <img className="min-w-[55px] mb-3" src={slide.icon} alt="icon" />
            <h2 className="text-lg font-semibold mb-2">{slide.title}</h2>
            <ul className="list-disc list-inside text-sm space-y-1">
              {slide.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2 pt-8 pb-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => keenInstanceRef.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full transition duration-300 ${
              activeSlide === idx ? 'bg-gray-700' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
          </div>
        </div>

        <button
          type="button"
          className="uppercase text-white bg-[#F8845D] hover:bg-[#5943A5] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-4 text-center mt-8 mx-auto dark:bg-blue-600 dark:hover:bg-[#F8845D] dark:focus:ring-blue-800 flex flex-row gap-2 md:relative z-2 justify-center"
        >
          <span>Let’s book that visit! </span>
          <Image src="/images/Group 2349.png" alt="Arrow Icon" width={20} height={20} />
        </button>
      </div>
    </div>

      {/* Search Specialties */}
	  <div className="w-full md:w-1/2">
            <div className="relative px-6 md:px-0 flex items-baseline pt-4">
              <h2 className="text-[28px] leading-[26px] font-bold pb-0 mb-0 pt-8">
                Meet the <span className="text-[#5943A5]">superstars<br/>in</span>
                <span className="relative">
                  <i className="font-normal text-[#5943A5] z-2"> scrubs</i>
                </span>
              </h2>
              <Image
                src="/images/Group 427319502.svg"
                alt="Illustration"
                width={40}
                height={40}
                className="absolute right-[30px]  top-[60px]"
              />
            </div>
          
      <div className="max-w-md mx-5 my-6 bg-white rounded-[20px] shadow-md p-6 border" style={{ borderColor: '#91CFDA80' }}>
        <h2 className="text-lg font-large text-gray-800">
          Browse by <span className="text-purple-600 font-semibold">specialty</span> or <span className="text-purple-600 font-semibold">location</span>
        </h2>
        <input type="text" placeholder="Location" className="w-full mt-4 px-4 py-2 border border-[#91CFDA80]  rounded-lg focus:ring-2 focus:ring-purple-500" />
        <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] rounded-lg focus:ring-2 focus:ring-purple-500">
          <option>Types of Specialty</option>
        </select>
        <p className="text-sm text-gray-600 mt-4">Popular Search</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {['General', 'Lactation', 'Allergy', 'Development', 'Vaccines'].map(term => (
            <span key={term} className="bg-purple-50 text-[#9C7EEB] text-600 px-3 py-1 rounded-full text-sm font-medium">{term}</span>
          ))}
        </div>
      </div>
	  </div>
	  
	  
	  <div className="px-4">
      <div ref={docSliderRef} className="keen-slider max-w-6xl mx-auto" id="doctorSlider">
        {docSlides.map((docSlides) => (
          <div key={docSlides.id} className={`${docSlides.bgColor} keen-slider__slide rounded-2xl`}>
            <div className="flex flex-col md:flex-row gap-1 items-start justify-between h-full
">
              <div className="w-full md:w-1/2">
                <div className="relative flex items-start">
                  <div className="text-[#000] text-[16px] p-6">
                    <h3 className="text-2xl font-lato font-bold text-[16px] leading-tight pb-3">
                    {docSlides.name}
                    </h3>
                    <p><i className="font-normal z-2">{docSlides.title}</i></p>
                    <p>{docSlides.experience}</p>
                  </div>
                  <img className="absolute right-[65px] md:left-20 bottom-[10px] w-20 h-20" src="/images/bee.png" alt="bee" />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <img className="mx-auto" src="/images/Vector.png" alt="Vector background" />
                <img
                  className="mx-auto absolute bottom-[0px] left-1/2 transform -translate-x-1/2"
                  src="/images/doc.png"
                  alt="Doctor"
                />
                <img className="mx-auto absolute right-[80px] top-[-40px]" src="/images/Vector 107.png" alt="Decorative vector" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div id="doctorSliderDots" className="flex justify-center mt-6 space-x-2">
        {docSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => docSliderInstanceRef.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full ${docCurrentSlide === idx ? 'bg-[#5943A5]' : 'bg-gray-400'}`}
          />
        ))}
      </div>
	  
	  <button className="mx-auto uppercase mt-12 text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all font-medium rounded-full text-sm px-8 py-4 flex items-center gap-2">
  Ready when you are <img src="/images/Group 2349.png" alt="Arrow Icon" />
</button>

	  
    </div>
	  

      {/* Image Slider */}
      <section className="my-10 mt-20">
	  <div className="px-6 relative">
	  <img className="absolute left-[25px] top-[-35px]" src="/images/beehive2.png" />
	  <img className="absolute right-[25px] top-[35px]" src="/images/beehive2.png" />
        <h2 className="text-[28px] leading-[30px] font-semibold text-gray-800 pb-4">
          Peek inside our <span className="text-purple-600 spansidecour">happy<br/>place</span>
        </h2>
		</div>
        <div ref={sliderRef} className="keen-slider max-w-5xl mx-auto mt-6">
          {['55381dd959d8ca7734ae09329da862013d365d3a.png', '2c8e2c21f3a9a17d44ed0a3c79743893ca018a61.png', 'ebfd198dbaa96adccc8746a82d0bd2a2dc94ee28.png'].map((img, idx) => (
            <div key={idx} className="keen-slider__slide rounded-xl overflow-hidden">
              <img src={`/images/${img}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
		<div className="flex justify-center mt-4 space-x-2">
        {[...Array(instanceRef1.current?.track.details.slides.length || 0)].map((_, idx) => (
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
      <div className="navigation-wrapper px-4 relative max-w-md mx-auto my-10">
	  		<div className="">
	   			<h2 className="text-[28px] leading-[30px] font-semibold text-gray-800 pb-6">
                  High-fives From <span className="text-purple-700 font-bold">happy</span><br />
                  <span className="text-purple-600 spansidecour">families</span>
                </h2>
				</div>
        <div ref={testimonialSliderRef} className="keen-slider">
          {[
            { quote: "Amazing experience at BabyMD. Timely service, ease of making appointments, lovely staff, and an amazing doctor. We visited for my child's vaccination—they made the process a breeze and clarified all my doubts. Plus, they even gave my child some freebies", name: "Revathy Kumar", img: "Mom+%26+Baby" },
            { quote: "Amazing experience at BabyMD. Timely service, ease of making appointments, lovely staff, and an amazing doctor. We visited for my child's vaccination—they made the process a breeze and clarified all my doubts. Plus, they even gave my child some freebies", name: "Anjali Sharma", img: "Mom+%26+Baby+2" },
          ].map((t, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <div className="bg-[#FF9A6C] rounded-3xl px-6 pt-6 text-white w-full max-w-sm relative">               
                <p className="px-2">{t.quote}</p>
                <p className="font-semibold text-sm pt-4 italic">— {t.name}</p>
                <img src="/images/bee_clinic_details.png" alt="bee" className="absolute right-8 top-28 w-20 h-20 swing" />
                <div className="w-full flex justify-center mt-4">
                  <img src="/images/Group 1 (1).png" className="w-full object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}