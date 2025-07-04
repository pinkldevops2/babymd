'use client';
import Banner from "../doctor-details/banner/page";
import BrowseSpecialty from "./BrowseSpecialty/page";
import DoctorProfile from "./DoctorProfile/page";
import HappyFamily from "./HappyFamily/page";

export default function DoctorDetail() {

   

  return (
    <section className="container">
      <div className="bg-white">
      <Banner />
      <DoctorProfile />
      <BrowseSpecialty />
      <HappyFamily />
      </div>


  </section>
  
  );
}
