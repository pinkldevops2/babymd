"use client";
import Image from "next/image";
import beehive2 from "../../../../public/images/doctorassets/beedoc.png";
import SuperDocButton from "../../../components/SuperDocButton";

export default function Locationform() {
  return (
    <div className="">
      <div
        className="max-w-md mx-auto bg-white rounded-[20px] shadow-md p-6 border "
        style={{ borderColor: "#91CFDA80" }}
      >
        <h2 className="text-[16px] leading-[20px] text-black font-bold font-lato">
          Browse by <span className="text-[#5943A5]">specialty</span> or{" "}
          <span className="text-[#5943A5]">location</span>
        </h2>
        <input
          type="text"
          placeholder="Doctor Name"
          className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500"
        />
        <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
          <option>Types of Speciality</option>
          <option>General Paediatrics</option>
          <option>Paediatric Specialities</option>
          <option>Clinical Psychology</option>
          <option>Therapy</option>
        </select>
        {/*  <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option>Location</option>
                    </select> */}
        <div className="w-full mt-4 px-4 py-4 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg flex gap-4 flex-wrap location-select">
          <p className="w-full font-bold text-[14px]">Location</p>

          <label className="text-[#9C7EEB]">
            <input type="radio" name="location" value="Hosa Road" />{" "}
            <span>Hosa Road</span>
          </label>

          <label className="">
            <input type="radio" name="location" value="HSR" /> <span>HSR</span>
          </label>

          <label className="">
            <input type="radio" name="location" value="HSR" />{" "}
            <span>Varthur</span>
          </label>

          <label className="">
            <input type="radio" name="location" value="Bellandur" />{" "}
            <span>Bellandur</span>
          </label>

          <label className="">
            <input type="radio" name="location" value="HSR" />{" "}
            <span>Whitefield</span>
          </label>

          <label className="">
            <input type="radio" name="location" value="HSR" />{" "}
            <span>Electronic City</span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-6 pr-[59px] relative">
          <span className="text-[12px] leading-[16px] text-[#505050] font-bold font-lato">
            Popular Search
          </span>

          {["General", "Lactation", "Allergy", "Development", "Vaccines"].map(
            (term) => (
              <span
                key={term}
                className="bg-purple-50 text-[#9C7EEB] px-3 py-1 rounded-full text-[12px] leading-[16px]  font-bold font-lato"
              >
                {term}
              </span>
            )
          )}

          <div>
            <Image
              width={80}
              src={beehive2}
              alt="Beehive"
              className="absolute right-[-25px] bottom-[-27px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <SuperDocButton
          href="https://babymd.in/pp/patient-portal/"
          label="Book an Appointment"
          className="w-60 text-center uppercase md:hidden"
          variant="pink"
          target="_blank"
        />
      </div>
    </div>
  );
}
