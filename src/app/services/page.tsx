"use client";
import { useState,useEffect, useRef } from "react";
import Image from "next/image";
import RoadMapDoctors from '../../components/RoadMapDoctors';
import Modal from '../../components/FormPopUp';
import BabyMDCampaignForm from '../../components/BabyMDCampaignForm';
import CloudTestimonials from '../../components/CloudTestimonialsServices';
import ServicePackages from '../../components/ServicePackages';
import curvedBottom from "../../app/assets/curved-bottom.png";
import curvedTop from "../../app/assets/curved-top.png";
 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const clinics = [
    {
      image: "/clinic/f599ef5c0bc6b9e548520dd4c3c29270435d932e.jpg",
      title: "BabyMD – Hosa Road",
      location: "https://maps.app.goo.gl/yiQnHGHKYxLK7kF56",
      hours: [
        {
          days: "Monday to Saturday",
          time: "9:00 AM to 8:00 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/351beb004171eecf5fa8fcabcad24c88067fc6d4.jpg",
      title: "BabyMD – Whitefield",
      location: "https://maps.app.goo.gl/mCpiktpusP9V3Crt7",
      hours: [
        {
          days: "Monday to Saturday",
          time: "9:00 AM to 8:00 PM",
        },
        { days: "Sunday", time: " 9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/bd6e88dec0f434f565572c1a818fb23885fb5b33.jpg",
      title: "BabyMD – Electronic City",
      location: "https://maps.app.goo.gl/YsmHaMG3rq29G5CA6",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/39e64f6c9f643abdd21ece3b69668b9b60b15dfe.jpg",
      title: "BabyMD – HSR Layout",
      location: "https://maps.app.goo.gl/4n2TAFAhGebGy8nJ8",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/c340ff5accd3a76b9824168ee4a673930fbf9234.jpg",
      title: "BabyMD – Varthur",
      location: "https://maps.app.goo.gl/9DzJ1XLWuh3zbZ8cA",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    },
    {
      image: "/clinic/ballandur.png",
      title: "BabyMD – Bellandur",
      location: "https://maps.app.goo.gl/wrFkjX7sgjEuDzfD7",
      hours: [
        {
          days: "Monday to Saturday",
          time: "8:00 AM to 1:30 PM | 4:00 PM to 8:30 PM",
        },
        { days: "Sunday", time: "9:00 AM to 12:00 PM" },
      ],
    }
  ];
 
 useEffect(() => {
  const elements = gsap.utils.toArray<HTMLElement>(".fade-in");

  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}, []);


  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if(!path) return;
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
        duration: 1.7,
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);
 
  return (
    <>
      <div className="container">
      <div className="banner-box bg-[#F9EEB6] relative z-2 py-14 pb-6">
        <div className="md:px-6">
          <div className="flex flex-col justify-center items-center md:flex-row">
            <div className="w-full md:w-2/3">
              <div className="relative px-6 md:px-0 md:w-3/4">
                <h1 className="text-2xl font-bold text-[34px] pb-[12px]">
                  Care that celebrates{" "}
                  <span className="text-[#5943A5]">every tiny</span>
                  <span className="relative clinic_border relative z-[2]">
                    <i className="font-normal text-[#5943A5] z-2 relative">
                      miracle
                    </i>
                     <div className='svg-animation clinic-svg absolute z-[-1]' >
                        <svg className="w-[150px] h-auto" width="114" height="38" viewBox="0 0 114 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path ref={pathRef} d="M70.4894 2.91253C74.4613 1.08843 78.4641 2.09986 82.411 2.64443C87.9738 3.41381 93.4434 4.74719 98.7282 6.88444C102.73 8.50215 106.665 10.2977 109.997 13.3172C113.215 16.2342 112.549 20.1866 109.836 22.7179C105.883 26.4096 101.011 28.1229 96.0535 29.5038C93.3809 30.2493 90.7043 30.9835 88.0062 31.608C85.3149 32.2284 82.6018 32.7314 79.888 33.2153C79.226 33.3357 78.5226 33.1869 78.1437 33.1746C77.3156 33.4004 76.7382 33.5557 76.1646 33.7184C75.292 33.9611 74.2999 33.9796 73.503 34.0212C72.3251 34.0849 71.1661 35.1086 69.8359 34.2667C69.3344 33.9502 68.3979 34.5232 67.6517 34.6201C65.7449 34.8715 63.8336 35.0963 61.9219 35.3097C59.8719 35.536 57.82 35.8081 55.7623 35.9241C54.5256 35.9937 53.2762 35.7284 52.0338 35.7411C51.1003 35.7497 50.1741 36.044 49.241 36.0641C47.7183 36.0988 46.1929 35.9697 44.6699 35.9968C43.6985 36.0145 42.6679 36.4844 41.7737 36.2475C39.4278 35.6309 37.1063 36.1153 34.781 36.0393C31.9412 35.9485 29.0952 35.7817 26.2649 35.4808C19.9247 34.8095 13.5524 34.208 7.60829 31.3446C6.45902 30.7895 5.33577 30.0046 4.41519 29.071C1.46902 26.0751 1.91893 21.9098 5.2692 19.5296C9.77234 16.3319 14.7623 14.4388 19.9261 13.1034C26.5509 11.3886 33.2341 9.93086 39.8754 8.28408C46.0936 6.741 52.3895 5.87366 58.7594 5.67837C61.6999 5.58997 64.6503 5.85199 67.5991 5.98061C67.9155 5.99533 68.2245 6.17808 68.5375 6.28444" stroke="#F8845D" stroke-width="3" stroke-linecap="round"/>
</svg>
                    </div>
                  </span>
                </h1>
               

                <p className="">
                  Where check-ups spark giggles, vaccinations come with cuddles, and milestones get the birthday treatment
                </p>
                <img
                  className="absolute top-[-40px] right-[30px]"
                  src="/images/Group 427319502.svg"
                  alt="Decorative"
                />
                <img
                  className="absolute bottom-[-60px] left-[20px]"
                  src="/images/Group 427319515.svg"
                  alt="Decorative"
                />
              </div>
            </div>
 
            <div className="w-full py-4 md:w-1/3 md:py-0 relative px-6 md:px-0">
              <img className="mx-auto scale-x-[-1]" src="/images/Vector.svg" alt="Vector" />
              <img
                className="mx-auto mt-3 absolute absolute-center"
                src="/images/serviceassets/services_home.png"
                alt="Mask group"
              />
            </div>
          </div>
        </div>
      </div>
 
      <img
        className="w-full relative z-0 bg-[#ffffff]"
        src="/images/Vector 141.svg"
        alt="Vector 141"
      />
 
 
    <RoadMapDoctors onClick={() => setIsModalOpen(true)}  />
	<div className="relative w-full bg-[#FFFFFF]">
            <Image
              src={curvedTop}
              alt="Layer 1"
              className=" mx-auto w-full"
            />
          </div>
	<CloudTestimonials />
	<div className="relative w-full bg-[#FFFFFF] z-0">
            <Image
              src={curvedBottom}
              alt="Layer 1"
              className=" mx-auto w-full relative  top[-30px]"
            />
          </div>   
	<ServicePackages onClick={() => setIsModalOpen(true)}/>
	
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <BabyMDCampaignForm formID="cl_get_appointment_today" />
            </Modal>
      </div>
    </>
  );
}