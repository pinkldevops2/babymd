"use client";

import Image from "next/image";
import DoctorImg1 from "../../../../../public/images/serviceassets/DoctorImg1.png";
import DoctorImg2 from "../../../../../public/images/serviceassets/DoctorImg2.png";
import DoctorImg3 from "../../../../../public/images/serviceassets/DoctorImg3.png";
import DoctorImg4 from "../../../../../public/images/serviceassets/DoctorImg4.png";
import arrow from "../../../../../public/images/Group 2349.png";
import SuperDocButton from '../../../../components/SuperDocButton';

export default function DoctorsTeam() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-4 ">
      {/* Grid Layout - 2x2 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {/* Doctor 1 - Dr Shivangi Bora */}
        <div className="bg-white rounded-2xl overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#F0CB46] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg1}
              alt="Dr Shivangi Bora"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
            <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Dr Shivangi Bora</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              Consultant Paediatrician, Allergy and Asthma Specialist,
              Paediatric Sleep Specialist
            </p>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD in Paediatrics, DAA (CMC Vellore), DPSM (University of
              Colorado))
            </p>
          </div>
        </div>

        {/* Doctor 2 - Dr Sampat Kumar Shettagar */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#5943A5] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg2}
              alt="Dr Sampat Kumar Shettagar"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
             <em>Dr Sampat Kumar Shettigar</em> 
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              Paediatrician
            </p>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD Paediatrics, Fellowship in Neonatology [NNF], Fellowship
              in Neonatology [RCPCH])
            </p>
          </div>
        </div>

        {/* Doctor 3 - Dr Indu S Nair */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#F6835D] rounded-lg  flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg3}
              alt="Dr Indu S Nair"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Dr Indu S Nair</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              Paediatrician
            </p>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, DCH, DNB [Paediatrics], Fellowship in Neonatology)
            </p>
          </div>
        </div>

        {/* Doctor 4 - Dr Bhaskar MV */}
        <div className="bg-white rounded-2xl  overflow-hidden">
          {/* Doctor Image with Colored Background */}
          <div className="bg-[#269BD9] rounded-lg flex items-center justify-center relative overflow-hidden rounded-t-2xl">
            <Image
              src={DoctorImg4}
              alt="Dr Bhaskar MV"
              width={300}
              height={280}
              className="object-cover object-center"
            />
          </div>
          {/* Doctor Information */}
          <div className="py-2 mt-2 ">
             <h3 className="text-[16px] font-lato font-Lato font-bold leading-[20px] text-[#2E2E2E] font-Lato font-bold  font-italic">
              <em>Dr Bhaskar MV</em>
            </h3>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              Paediatrician
            </p>
            <p className="text-[14px] leading-[18px] font-normal text-[#2E2E2E] font-Lato mb-3">
              (MBBS, MD Paediatrics, Fellowship in Neonatology [NNF])
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6 px-6">
        {/* <button
          type="button"
          className="flex items-center justify-center gap-3 px-8 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
        >
          <span className="uppercase tracking-[2px] text-sm">
            Explore all doctors
          </span>
          <Image src={arrow} alt="Arrow" width={20} height={10} />
        </button> */}

        <SuperDocButton
                  href={"/doctors"}
                  target={"_blank"}
                  label="Explore all doctors"
                  className="w-80 text-center fade-in uppercase"
                  variant="pink"
                />
      </div>
    </div>
  );
}
