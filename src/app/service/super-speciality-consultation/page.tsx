"use client";
import Image from "next/image";
import Banner from "./Banner/BannerComponent";
import Paragraph from "./Paragraph/ParagraphComponent";
import CareProvide from "./Careprovide/CareprovideComp";
import ThirdParagraph from "./Thirdparagraph/Thirdpara";
import FourthParagraph from "./FourthParagraph/ParagraphComponent";
import SmileSection from "./SmileSection/page";
import SearchBox from "./SearchBox/SearchB";
import Facilities from './Facilities/FacilitiesC';
import CloudTestimonials from '../../../components/CloudTestimonialsSuper';
import curvedBottom from "../../assets/curved-bottom.png";
import curvedTop from "../../assets/curved-top.png";
import DoctorsTeam from "./DoctorsTeam/DoctorsT";





export default function SuperSpecialityCosultation() {
  return (
     
      <div className="container mx-auto bg-white">
           <Banner /> 
           <Paragraph/>
           <CareProvide/>  
            <FourthParagraph/> 
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