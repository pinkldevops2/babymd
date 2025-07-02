"use client";
import Image from "next/image";
import Banner from "./banner/page";
import Paragraph from "./paragraph/page";
import CareProvide from "./careprovide/page";
import DoctorDetail from "./secondparagraph/page";
import ThirdParagraph from './thirdparagraph/page';

import SmileSection from "./SmileSection/page";
import SearchBox from "./searchBox/page";
import Facilities from './facilities/page';
import CloudTestimonials from '../../../components/CloudTestimonialsSuper';
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";
import DoctorsTeam from "./doctorsTeam/page";





export default function SuperSpecialityCosultation() {
  return (
     
      <div className="container mx-auto bg-white">
           <Banner /> 
           <Paragraph/>
           <CareProvide/>  
           <ThirdParagraph/> 
           <DoctorsTeam />
         
          {/*  <SearchBox/> */}
           {/*  <DoctorDetail/> */}
           <div className="relative w-full bg-[#FFFFFF]">
                       <Image
                         src={curvedTop}
                         alt="Layer 1"
                         className=" mx-auto w-full"
                       />
                     </div>
           <CloudTestimonials/>
           <div className="relative w-full bg-[#FFFFFF] z-0">
                       <Image
                         src={curvedBottom}
                         alt="Layer 1"
                         className=" mx-auto w-full relative  top[-30px]"
                       />
                     </div>
           <Facilities/>
           <SmileSection/>

      </div>

  );
}