"use client";
import { useEffect } from "react";

import Head from 'next/head';
import Image from 'next/image';
import beeimage from "../assets/contactpagebee.png";
import contactbaby from "../assets/contactbaby.png";
import contactbb from "../assets/contactbb.png";
import office from "../../../public/images/office.png";
import BabyMDCampaignForm from '../../../components/BabyMDCampaignForm';
import ContactMainC from '../../../components/anime/ContactMainC';
import ContactSubC from '../../../components/anime/ContactSubC';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

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
      <Head>
        <title>Contact Us | babyMD</title>
      </Head>
      <main className="container min-h-screen bg-[#f0ebea] flex items-center justify-center">
        <div className="w-full bg-white p-5  relative">
          {/* Header Title */}
          <div className="mb-6 relative pt-8">
            <h1 className="text-xl font-bold leading-tight text-black contactSub mt-8">
              Guidance? Concerns?
              <br />
              <span className="text-[#5d3fd3] decoration-[#5d3fd3] circling_around relative"><span className="relative z-4">Appointments?</span>
                <ContactMainC />
              </span>
            </h1>
			

            <p className=" text-gray-700 mt-2">
			  Reach out anytime, we&rsquo;ve got the time and the team!
            </p>

            {/* Icon (top right corner) */}
            
          </div>

          {/* Contact Form */}
          <BabyMDCampaignForm formID={'form'} />
          <Head>
        <title>Join Us | babyMD</title>
      </Head>
      <main className="flex items-center justify-center">
        <div className="w-full bg-white rounded-xl space-y-6">

          {/* Title Section */}
          <div className="relative pt-8">
            <h2 className="text-xl font-bold text-black pb-2 customtenight fade-in">
              Grow <span className="spansidecour text-[#5d3fd3] circling_around2 relative">
                <span className="relative z-2">with us</span>
                <ContactSubC />
              </span>
			  <Image 
				src={beeimage}
				className="absolute right-[10px] m-[-30px] swing fastbeecontact fade-in"
				alt="Bee" 
				width={134} // adjust as needed
				height={134} // adjust as needed
			  />
            </h2>
            <p className="mt-2 text-gray-700 fade-in">
              Looking to join a bunch of enthusiasts passionate about shaping brighter futures for little humans?
              We’d love to hear from you! Mail us at <a href="mailto:hiring@babymd.in" className="text-[#5d3fd3] underline">hiring@babymd.in</a>.
            </p>

            {/* Placeholder for top-right bee */}
            
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#eaf6ff] rounded-xl pl-2 pl-8 pr-8 space-y-4 relative contactblkbee pt-8">
            <h2 className="font-semibold  text-gray-800 mediumWnn pb-8 fade-in">
              Pediapulse Health Services Private Limited
            </h2>

            {/* Placeholder for small bee */}
            <Image 
				src={contactbb}
				className="absolute right-0 top-0 semicircmotion fastbeecontact2 fade-in"
				alt="Bee" 
				width={80} // adjust as needed
				height={78} // adjust as needed
			/>

            <div className=" text-gray-700 space-y-2">
              <div className="flex items-start gap-2 pb-4 fade-in">
			  <span>
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4614 7.7759L13.8821 0.266385C13.3747 -0.0887949 12.6897 -0.0887949 12.1823 0.266385L1.57763 7.7759C0.918012 8.25793 0.765792 9.17125 1.22245 9.83087C1.70448 10.4905 2.6178 10.6427 3.27742 10.186L4.97721 8.99366V16.5285C4.97721 17.3404 5.63683 18 6.44867 18H19.5649C20.3768 18 21.0364 17.3404 21.0364 16.5285V8.96829L22.7362 10.1607C22.9899 10.3383 23.2943 10.4397 23.5988 10.4397C24.0554 10.4397 24.5121 10.2114 24.7912 9.83087C25.2732 9.17125 25.121 8.25793 24.4614 7.7759ZM16.7235 11.277C16.7235 11.4292 16.5967 11.556 16.4444 11.556H14.2626V13.7378C14.2626 13.8901 14.1358 14.0169 13.9836 14.0169H12.0808C11.9286 14.0169 11.8017 13.8901 11.8017 13.7378V11.556H9.61991C9.46769 11.556 9.34085 11.4292 9.34085 11.277V9.37421C9.34085 9.22199 9.46769 9.09514 9.61991 9.09514H11.8017V6.91332C11.8017 6.7611 11.9286 6.63425 12.0808 6.63425H13.9836C14.1358 6.63425 14.2626 6.7611 14.2626 6.91332V9.09514H16.4444C16.5967 9.09514 16.7235 9.22199 16.7235 9.37421V11.277Z" fill="black"/>
</svg>
</span>

                <p>
                  <b>Corporate Address:</b> <br/>WeWork, Prestige Atlanta, 80 Feet Road,
Koramangala, Bengaluru, Karnataka-560034

                </p>
              </div>
              <div className="flex items-start gap-2 pb-4 fade-in">
			  <span>
                <svg class="w-[26px]" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 19H9.5C9.78 19 10 18.78 10 18.5V14.5C10 14.22 9.78 14 9.5 14H5.5C5.22 14 5 14.22 5 14.5V18.5C5 18.78 5.22 19 5.5 19ZM6 15H9V18H6V15Z" fill="black"/>
<path d="M15.5 19H19.5C19.78 19 20 18.78 20 18.5V14.5C20 14.22 19.78 14 19.5 14H15.5C15.22 14 15 14.22 15 14.5V18.5C15 18.78 15.22 19 15.5 19ZM16 15H19V18H16V15Z" fill="black"/>
<path d="M28.5 11H32.5C32.78 11 33 10.78 33 10.5V6.5C33 6.22 32.78 6 32.5 6H28.5C28.22 6 28 6.22 28 6.5V10.5C28 10.78 28.22 11 28.5 11ZM29 7H32V10H29V7Z" fill="black"/>
<path d="M28.5 19H32.5C32.78 19 33 18.78 33 18.5V14.5C33 14.22 32.78 14 32.5 14H28.5C28.22 14 28 14.22 28 14.5V18.5C28 18.78 28.22 19 28.5 19ZM29 15H32V18H29V15Z" fill="black"/>
<path d="M28.5 27H32.5C32.78 27 33 26.78 33 26.5V22.5C33 22.22 32.78 22 32.5 22H28.5C28.22 22 28 22.22 28 22.5V26.5C28 26.78 28.22 27 28.5 27ZM29 23H32V26H29V23Z" fill="black"/>
<path d="M5.5 27H9.5C9.78 27 10 26.78 10 26.5V22.5C10 22.22 9.78 22 9.5 22H5.5C5.22 22 5 22.22 5 22.5V26.5C5 26.78 5.22 27 5.5 27ZM6 23H9V26H6V23Z" fill="black"/>
<path d="M15.5 27H19.5C19.78 27 20 26.78 20 26.5V22.5C20 22.22 19.78 22 19.5 22H15.5C15.22 22 15 22.22 15 22.5V26.5C15 26.78 15.22 27 15.5 27ZM16 23H19V26H16V23Z" fill="black"/>
<path d="M40.5 0H16.5C16.22 0 16 0.22 16 0.5V8H0.5C0.22 8 0 8.22 0 8.5V40.5C0 40.78 0.22 41 0.5 41H9.5H15.5H16.5H24.5H40.5C40.78 41 41 40.78 41 40.5V0.5C41 0.22 40.78 0 40.5 0ZM15 40H10V34H15V40ZM24 40H16.5H16V33.5C16 33.22 15.78 33 15.5 33H9.5C9.22 33 9 33.22 9 33.5V40H1V9H24V40ZM40 40H25V8.5C25 8.22 24.78 8 24.5 8H17V1H40V40Z" fill="black"/>
</svg>

</span>

                <p>
                  <b>Office Address:</b><br/>#99, 11th Main road, HSR Layout, 
Bangalore, Karnataka-560102

                </p>
              </div>
              <div className="flex items-center gap-2 pb-4 fade-in">
                <span><svg width="26" height="14" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.24572 1.40001L1.89573 0.370992C2.2502 0.130369 2.67162 0.000873608 3.10286 0H18.8171C19.2484 0.000874952 19.6698 0.130376 20.0243 0.370992L18.6814 1.40001L11.267 7.05606C11.0599 7.24506 10.8599 7.24506 10.6027 7.02106L3.24572 1.40001ZM20.8599 1.50501L19.5313 2.52001L12.1885 8.127C11.8599 8.43151 11.426 8.60126 10.9742 8.60301C10.492 8.59776 10.0295 8.41226 9.68133 8.085L2.38853 2.5199L1.05996 1.5049C0.99746 1.6974 0.963531 1.89778 0.959961 2.0999V11.9C0.963532 13.0585 1.92067 13.9965 3.10282 14H18.8171C19.9993 13.9965 20.9564 13.0585 20.96 11.9V2.0999C20.9564 1.89777 20.9224 1.6975 20.8599 1.50501Z" fill="black"/>
</svg>
</span>
                <p>Email: help@babymd.in</p>
              </div>
              <div className="flex items-center gap-2 pb-4 hidden fade-in">
                <span><svg width="26" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3232 16.0465L17.1056 18.3102C16.9842 18.4892 16.5333 19 15.263 19C14.8533 19 14.359 18.9476 13.7629 18.8123L13.752 18.8101C13.6631 18.7861 11.53 18.2076 8.91352 16.3958C7.37873 15.3327 5.99568 14.0622 4.80556 12.6215C3.31846 10.825 2.12835 8.75774 1.26557 6.47223C1.22872 6.38928 1.03578 5.92868 0.977254 5.30655C0.890543 4.40064 1.13117 3.5755 1.67095 2.9228L1.67962 2.91189L4.18341 0.370971L4.19642 0.360056C4.25495 0.309849 4.79473 -0.11582 5.38653 0.0304354C5.74422 0.117752 6.02169 0.386251 6.21029 0.827201L8.02256 4.30022C8.08543 4.38318 8.23717 4.6102 8.30004 4.92672C8.37374 5.28909 8.34556 5.83918 7.80578 6.40238L7.79277 6.41547L6.9972 7.15548L6.97769 7.1664C6.83678 7.26681 6.90832 7.3956 6.93216 7.43708L6.93867 7.45018C6.94517 7.46546 7.41775 8.38665 8.33255 9.52613C9.16715 10.5674 10.5545 12.0125 12.4297 12.997C12.5012 13.0035 12.7202 12.9948 12.9868 12.7263L12.9911 12.7219L13.7087 12.0278C13.7715 11.9448 13.9406 11.7549 14.2333 11.6326C14.5498 11.5017 15.0809 11.4231 15.8157 11.8029L15.8331 11.8116L19.2452 13.8265C19.3688 13.8832 19.8413 14.1321 19.9432 14.656C20.0234 15.0948 19.8153 15.5619 19.3232 16.0465Z" fill="black"/>
</svg>
</span>
                <p>Phone: +91 70707 08220</p>
              </div>
            </div>

            {/* Image Frame Placeholder */}
            <div className="w-full mt-4 flex items-center justify-center text-gray-400 fade-in">
              <Image 
				src={contactbaby}
				alt="Bee" 
				width={296} // adjust as needed
				height={296} // adjust as needed
			  />
            </div>
          </div>
        </div>
      </main>
          
        </div>
      </main>
    </>
  );
}