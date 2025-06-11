"use client";
import Image from "next/image";
import scheduleIcon1 from "../../../../../public/images/serviceassets/scheduleIcon1.png";
import scheduleIcon2 from "../../../../../public/images/serviceassets/scheduleIcon2.png";
import SubHeading from '../../../../../components/SubHeading';
import arrow from "../../../../../public/images/Group 2349.png";

export default function schedule() {
  return (
    <div className="flex flex-col gap-4 px-6 py-5">
      {/* 1 */}
      <div className="bg-[#C8E7EC] rounded-2xl p-10 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon1} alt="First Year Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          First Year <br />
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>(0–12 Months)</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

        <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Birth:</strong> BCG, OPV, Hepatitis B
          </li>
          <li>
            <strong>6, 10, 14 weeks:</strong> DPT, Hib, Hep B, IPV, Rotavirus,
            PCV
          </li>
          <li>
            <strong>6 months:</strong> Influenza (first dose)
          </li>
          <li>
            <strong>9 months:</strong> MMR, Typhoid (conjugate)
          </li>
          <li>
            <strong>12 months:</strong> Hepatitis A
          </li>
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-[#E4FDD8] rounded-2xl p-10 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon2} alt="Toddler to Preschool Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          Toddler To Preschool{" "}
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>(1–5 Years)</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

         <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>
            <strong>15 months:</strong> MMR (2nd dose), Varicella, PCV booster
          </li>
          <li>
            <strong>16–18 months:</strong> DPT booster, Hib booster, IPV booster
          </li>
          <li>
            <strong>18 months:</strong> Hepatitis A (2nd dose)
          </li>
          <li>
            <strong>2 years:</strong> Typhoid booster
          </li>
          <li>
            <strong>4–6 years:</strong> DPT, IPV, MMR (3rd dose), Varicella (2nd
            dose)
          </li>
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-[#FF9A6C] rounded-2xl p-10 shadow-md">
        <div className="mb-4">
          <Image src={scheduleIcon2} alt="Toddler to Preschool Immunizations" />
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          Adolescent and Pre- Teen{" "}
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
             <span className="font-light"> <i>(1–5 Years)</i></span>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>

        <ul className="list-disc pl-5 mt-4 space-y-2 text-[16px] leading-[20px] text-black">
          <li>HPV vaccine 1 and 2</li>
        </ul>
      </div>
      <div className=" bg-white ">
        <div className="py-4">
          
           <div className='max-w-[300px]'>
            <SubHeading
              mainText={<>Missed a vaccine or forgot</>}
              highlightText={<>your</>}
              subText={<><i>schedule? </i></>}
            />
           </div>

          <p className="pt-5">
           Don&apos;t worry! Our paediatricians are here to help with a customized catch-up plan.
          </p>
        </div>
          <div className="flex justify-center py-6">
                <button
                  type="button"
                  className="flex items-center mx-2 gap-3 px-10 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                >
                  <span className="uppercase tracking-wide text-sm">Consult our experts</span>
             <Image
             src={arrow}
              alt="Arrow"
             width={20}
             height={10} 
             />
                </button>
              </div>
      </div>
    </div>
  );
}
