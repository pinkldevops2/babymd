'use client';
import Banner from "../doctor/banner/page";
import Paragraph from "../doctor/paragraph/page";
import Locationform from "../doctor/LocationForm/page";
import CaseStudyCarousel from '../../../components/CaseStudyCarousel';
import casestudy from "../assets/casestudy.png";
import casestudy2 from "../assets/casestudy2.png";
import DoctorTeam from "../doctor/DoctorTeam/page";
import DoctorSlider from "./DoctorDetailSlider/page";

export default function Doctor() {

    // Case study data
    const caseStudies = [
      {
        title: "Pediatric Care Online Workshop",
        image: casestudy,
        category: "Case Study",
      },
      {
        title: "Behavioral Milestones Insights",
        image: casestudy2,
        category: "Case Study",
      },
      {
        title: "Nutrition for Toddlers Guide",
        image: casestudy,
        category: "Case Study",
      },
    ];

  // Navigation functions for case study carousel
  const prevCaseStudySlide = () => {
    setCurrentCaseStudySlide((prev) =>
      prev === 0 ? caseStudies.length - 1 : prev - 1
    );
    caseStudyInstanceRef.current?.prev();
  };

  const nextCaseStudySlide = () => {
    setCurrentCaseStudySlide((prev) =>
      prev === caseStudies.length - 1 ? 0 : prev + 1
    );
    caseStudyInstanceRef.current?.next();
  };

  return (
    <section className="container">
      <div className="bg-white">
      <Banner />
      </div>


       <div className="w-full md:flex md:justify-center">
                  <div className="relative bg-white flex items-baseline md:w-1/2">
                    <div>
                       <Paragraph />
                      <div className="hidden justify-center  md:flex pt-2">
                        <button className="bg-[#F8845D] text-white text-sm px-6 py-3 rounded-full flex items-center gap-2">
                          Book an Appointment <img className="w-[20px] object-contain" src="/images/Group 2349.png" />
                        </button>
                      </div>
                    </div>
                  </div>
                <div className="md:w-1/2 py-6 px-6 bg-white">
                   <Locationform />
                </div>
           
          </div>
         
        <DoctorTeam />
      
      <DoctorSlider />
 

    <div className="py-6 bg-white ">
        <div className="container mx-auto">
          <div className="flex flex-col relative justify-center items-center md:flex-row bg-[#DBFFCC] rounded-[20px] mx-4 md:mx-0 overflow-hidden pt-8">
            <div className="w-full md:w-2/3 px-2 py-2 md:p-4 md:pl-12">
              <div className="relative px-8 md:px-0">
                <h2 className="font-bold text-[28px] leading-[26px]">
                  <span className="text-[#5943A5]">
                    You’ve got this.
                    <br />
                    We’ve{" "}
                  </span>
                  <span className="relative">
                    <i className="font-normal text-[#5943A5] z-10 relative">
                      got you.
                    </i>
                    <img
                      className="absolute top-[5px] right-0 z-0 w-full"
                      src="/images/Vector 2.svg"
                      alt="Vector 2"
                    />
                  </span>
                </h2>
              </div>
              <button
                type="button"
                className="text-white bg-[#5943A5] hover:bg-[#F8845D] transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-4 text-center mt-12 mx-auto md:mx-0 flex flex-row gap-2 justify-center middlingbtns"
              >
                <span>Care? Right This Way </span>
                <img src="/images/Group 2349.png" alt="Arrow" />
              </button>
            </div>

            <div className="w-full md:w-1/3 relative md:px-0 pt-4">
              <img
                className="mx-auto"
                src="/images/Vector 3.svg"
                alt="Vector 3"
              />
              <img
                className="mx-auto absolute bottom-0 w-[400px]"
                src="/images/6725559f65e92e9a71cddc105d37d087dc44f123.png"
                alt="Decorative"
              />
            </div>
          </div>
        </div>
      </div>
       <CaseStudyCarousel 
        caseStudies={caseStudies} 
        />
 

  </section>
  
  );
}
