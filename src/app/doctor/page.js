"use client";
import Banner from "../doctor/banner/page";
import Paragraph from "../doctor/paragraph/page";
import Locationform from "../doctor/LocationForm/page";
import CaseStudyCarousel from "../../../components/CaseStudyCarousel";
import casestudy from "../assets/casestudy.png";
import casestudy2 from "../assets/casestudy2.png";
import DoctorTeam from "../doctor/DoctorTeam/page";
import DoctorSlider from "./DoctorDetailSlider/page";
import DoctorAppointment from "./DoctorAppointment/page";

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
                Book an Appointment{" "}
                <img
                  className="w-[20px] object-contain"
                  src="/images/Group 2349.png"
                />
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

      <DoctorAppointment />

      <CaseStudyCarousel caseStudies={caseStudies} />
    </section>
  );
}
