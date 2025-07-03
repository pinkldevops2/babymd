"use client";
import Image from "next/image";
import Banner from "./Banner/Page";
import Paragraph from "./Paragraph/page";
import CareProvide from "./Careprovide/page";
import DoctorDetail from "./Secondparagraph/page";
import ThirdParagraph from "./Thirdparagraph/page"

import SmileSection from "./SmileSection/page";
import SearchBox from "./SearchBox/page";
import Facilities from './Facilities/page';
import CloudTestimonials from '../../../components/CloudTestimonialsSuper';
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";
import DoctorsTeam from "./DoctorsTeam/page";





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