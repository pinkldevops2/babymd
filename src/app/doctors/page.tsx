"use client";
import { useState, useRef } from "react";

import Banner from "../doctors/banner/page";
import Paragraph from "../doctors/paragraph/page";
import Locationform from "../doctors/LocationForm/page";
import CaseStudyCarousel from "../../components/CaseStudyCarousel";
import casestudy from "../assets/casestudy.png";
import casestudy2 from "../assets/casestudy2.png";
import DoctorTeam from "../doctors/DoctorTeam/page";
import DoctorSlider from "./DoctorDetailSlider/page";
import DoctorAppointment from "./DoctorAppointment/page";
import SuperDocButton from "../../components/SuperDocButton";

export default function Doctors() {
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
              <SuperDocButton
                href="https://babymd.in/pp/patient-portal/"
                label="Book an Appointment"
                className="w-70 text-center uppercase hidden md:flex"
                variant="pink"
                target="_blank"
              />
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
