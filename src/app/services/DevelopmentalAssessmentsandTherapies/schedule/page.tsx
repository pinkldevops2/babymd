"use client";
import Image from "next/image";
import scheduleIcon1 from "../../../../../public/images/serviceassets/scheduleIcon1.png";
import scheduleIcon2 from "../../../../../public/images/serviceassets/scheduleIcon2.png";
import SubHeading from '../../../../components/SubHeading';
import arrow from "../../../../../public/images/Group 2349.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Schedule() {
  const pathRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    if(!path) return;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.fromTo(
      path,
      { strokeDashoffset: length },
      {
        strokeDashoffset: 0,
        duration: 3,
        //repeat: -1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
   <div className="bg-white">
    
    <div className="flex flex-col gap-4 px-6 py-5">
      {/* 1 */}
      <div className="bg-[#C8E7EC] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
          {/* <Image src={scheduleIcon1} alt="First Year Immunizations" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
<g clip-path="url(#clip0_291_10)">
<path d="M36.166 2.75C38.592 2.74648 40.9436 3.58854 42.8154 5.13184C44.6873 6.67521 45.962 8.82376 46.4209 11.2061C46.8797 13.5882 46.4935 16.0554 45.3291 18.1836C44.1645 20.3119 42.2948 21.9683 40.041 22.8662L40.0322 22.8691C39.0021 23.2381 37.9318 23.4835 36.8438 23.5996L36.1182 23.7051C35.8826 23.7424 35.6524 23.7829 35.4238 23.8291H35.4219C35.3236 23.8483 35.2271 23.8702 35.1309 23.8926C37.2578 26.8394 38.6711 29.6885 39.2627 32.126C39.8722 34.6373 39.6226 36.7742 38.292 38.0889L38.2861 38.0947C37.8076 38.5368 37.2449 38.8781 36.6318 39.0986C36.0202 39.3186 35.3706 39.4132 34.7217 39.3779V39.3789C33.0578 39.3183 31.4204 38.9374 29.9004 38.2578V38.2568C29.7073 38.1774 29.5171 38.0933 29.3271 38.0068C28.5978 40.2329 27.328 42.2455 25.627 43.8604C23.8573 45.5403 21.6829 46.7333 19.3154 47.3242C16.9477 47.9151 14.467 47.884 12.1152 47.2324C9.76359 46.5809 7.62053 45.3315 5.89453 43.6064C4.16854 41.8814 2.91851 39.739 2.26562 37.3877C1.61274 35.0363 1.57939 32.5555 2.16895 30.1875C2.75853 27.8197 3.95085 25.6447 5.62988 23.874C7.24374 22.1721 9.25488 20.9006 11.4805 20.1699C11.3928 19.9762 11.3075 19.7831 11.2275 19.5918L11.2266 19.5898C9.71497 15.9151 9.70047 12.904 11.4004 11.2041C12.7104 9.87692 14.7994 9.6022 17.2695 10.1865C19.6642 10.7531 22.4713 12.138 25.415 14.249C25.5664 13.5603 25.6892 12.8655 25.7793 12.166V12.1641C26.5278 6.72256 30.8788 2.75 36.166 2.75ZM12.1377 21.5088C9.30063 22.393 6.86208 24.246 5.25391 26.75C3.60927 29.3109 2.9425 32.3791 3.37598 35.3916C3.80946 38.4041 5.31429 41.16 7.61426 43.1533C9.9141 45.1464 12.8551 46.2441 15.8984 46.2451C18.6329 46.2446 21.2937 45.3579 23.4824 43.7188C25.6171 42.12 27.1879 39.8883 27.9785 37.3447C27.0707 36.8682 26.1881 36.3458 25.333 35.7803C24.9635 37.37 24.1995 38.8432 23.1064 40.0605C21.9308 41.3699 20.4205 42.3344 18.7383 42.8506C17.056 43.3668 15.2643 43.4149 13.5566 42.9902C11.8492 42.5655 10.2894 41.6843 9.04492 40.4404C7.80043 39.1965 6.91766 37.6371 6.49219 35.9297C6.06676 34.2222 6.11449 32.4306 6.62988 30.748C7.14528 29.0656 8.10923 27.5551 9.41797 26.3789C10.6349 25.2852 12.1076 24.5187 13.6973 24.1484C13.134 23.2949 12.6131 22.4143 12.1377 21.5088ZM14.6582 25.5117C12.7452 25.7926 10.992 26.7422 9.71289 28.1963C8.40187 29.6868 7.67888 31.6039 7.67871 33.5889V33.5928C7.65081 35.6814 8.4206 37.7024 9.83105 39.2432C11.2416 40.7838 13.1866 41.7285 15.2695 41.8848C17.3525 42.0409 19.4165 41.397 21.041 40.084C22.6538 38.7803 23.7119 36.9142 24.0049 34.8623C22.2103 33.554 20.5206 32.1076 18.9541 30.5332V30.5322C17.3928 28.9738 15.957 27.2947 14.6582 25.5117ZM17.3457 11.7539C15.2236 11.174 13.5803 11.2933 12.624 12.0674L12.4414 12.2314C11.8744 12.7986 11.5777 13.6806 11.5938 14.8408C11.6099 15.9999 11.9387 17.4117 12.5938 18.9961L12.8916 19.668C13.6015 21.2133 14.457 22.688 15.4453 24.0732C15.5131 24.1228 15.5724 24.1834 15.6201 24.2529C15.6668 24.321 15.7017 24.3963 15.7236 24.4756C16.8524 26.0344 18.0895 27.5113 19.4268 28.8945L20.0107 29.4863C23.4003 32.8759 27.1168 35.5025 30.4746 36.8926H30.4736C32.0566 37.5434 33.4681 37.8708 34.6279 37.8857C35.7885 37.9007 36.6723 37.6037 37.2422 37.0361L37.2432 37.0342L37.4121 36.8506C38.2096 35.8815 38.322 34.2054 37.709 32.0381C37.0717 29.7853 35.6701 27.0861 33.6025 24.3135C32.0576 24.8325 30.6492 25.6948 29.4844 26.8369L29.4746 26.8467L29.4629 26.8555L29.3848 26.915C28.469 27.8371 27.2268 28.3607 25.9268 28.3701C24.6207 28.3794 23.3638 27.87 22.4336 26.9531C21.5034 26.0361 20.9751 24.7866 20.9658 23.4805C20.9566 22.1745 21.467 20.9184 22.3838 19.9883C22.4492 19.9129 22.5175 19.8402 22.5898 19.7715C23.6922 18.6316 24.5125 17.2511 24.9883 15.7402C22.2418 13.7209 19.5717 12.3622 17.3457 11.7539ZM35.7441 4.25C31.413 4.45458 27.8549 7.79655 27.2559 12.3643L27.2549 12.3652C26.8823 15.1028 26.1857 18.3059 23.6514 20.8418L23.4785 21.0186L23.4795 21.0195C23.1672 21.3446 22.922 21.7286 22.7578 22.1484C22.5937 22.5682 22.5145 23.0162 22.5234 23.4668C22.5416 24.3772 22.9206 25.2431 23.5771 25.874C24.2337 26.5049 25.1141 26.8492 26.0244 26.8311C26.9347 26.8128 27.8008 26.4339 28.4316 25.7773L28.4395 25.7695L28.4482 25.7617L28.5225 25.6973C30.2449 24.0818 32.371 22.9658 34.6729 22.4648L35.1367 22.373C35.6374 22.2731 36.1364 22.1981 36.6309 22.1289L36.6406 22.127C37.6126 22.0276 38.569 21.8118 39.4893 21.4834C40.5429 21.0594 41.5045 20.4381 42.3271 19.6562L42.4268 19.5596C43.694 18.3165 44.562 16.7238 44.9209 14.9854C45.2798 13.2467 45.113 11.4402 44.4414 9.79688C43.7698 8.15358 42.6242 6.74745 41.1504 5.75781C39.6765 4.76816 37.9413 4.23991 36.166 4.24023L35.7441 4.25Z" fill="#5943A5" stroke="#5943A5" stroke-width="0.5"/>
</g>
<defs>
<clipPath id="clip0_291_10">
<rect width="49.505" height="50" fill="white" transform="translate(0.24707 0.5)"/>
</clipPath>
</defs>
</svg>
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>Early milestones and delays</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>
        <p className="pt-6">When your child isn’t hitting expected milestones or needs close follow-up:</p>

        <ul className="list-disc pl-5 mt-4 space-y-8 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Premature Birth/NICU Follow-up</strong>
          </li>
          <li>
            <strong>Motor Delays </strong> – Delayed crawling, walking, or coordination
          </li>
          <li>
            <strong>Speech and Language Delays </strong> – Speech start concerns and unclear speech
          </li>
          <li>
            <strong>Down Syndrome </strong> – Early intervention for physical and cognitive development
          </li>
          <li>
            <strong>Cerebral Palsy </strong> – Posture, mobility, muscle tone, and primitive reflexes support
          </li>
        </ul>
      </div>

      {/* 2 */}
      <div className="bg-[#DBFFCC] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
         {/*  <Image src={scheduleIcon1} alt="First Year Immunizations" /> */}
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>Neurodevelopmental conditions</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>
        <p className="pt-6">For diagnoses or ongoing concerns around how your child processes the world:</p>

        <ul className="list-disc pl-5 mt-4 space-y-8 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Autism Spectrum Disorder (ASD)</strong>
            – Support with sensory integration, social communication, and behaviour
          </li>
          <li>
            <strong>ADHD </strong> – Inattention, impulsivity, and self-regulation issues
          </li>
          <li>
            <strong>Speech and Language Delays </strong> – Speech start concerns and unclear speech
          </li>
          <li>
            <strong>Global Developmental Delay</strong> or <strong> Intellectual Disability </strong> 
          </li>
        </ul>
      </div>


      {/* 3 */}
      
       <div className="bg-[#FBE28F] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
         {/*  <Image src={scheduleIcon1} alt="First Year Immunizations" /> */}
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>Behavior, sensory, and social skills</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>
        <p className="pt-6">If your child’s daily routines or social life 
feel unusually difficult or overwhelming:</p>

        <ul className="list-disc pl-5 mt-4 space-y-8 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Behavioral Issues </strong>
            – Tantrums, rigidity, aggression, and emotional dysregulation
          </li>
            <li>
            <strong>Sensory Processing Challenges </strong>
             – Extreme reactions to sound, light, touch, or movement
          </li>
          <li>
            <strong>Social Skill Delays </strong>
            – Difficulty playing, making friends, or maintaining eye contact 
          </li>
        
          <li>
            Anxiety, school refusal, or fear of separation 
          </li>
        </ul>
      </div>

      {/* 4 */}
      
       <div className="bg-[#FF9A6C] rounded-2xl py-10 px-6 shadow-md">
        <div className="mb-4">
         {/*  <Image src={scheduleIcon1} alt="First Year Immunizations" /> */}
        </div>
        <h2 className="text-[28px] leading-[30px] font-bold text-[#4B3A8F]">
          <span className="text-[28px] leading-[30px] relative inline-block text-[#4B3A8F] font-light">
            <i>Learning and School Readiness</i>
            <span className="absolute left-0 bottom-0 h-[8px] w-full bg-[#F6908B] rounded-full -z-10 opacity-70 translate-y-1" />
          </span>
        </h2>
        <p className="pt-6">Helping your child feel confident, capable, 
and supported in school settings:</p>

        <ul className="list-disc pl-5 mt-4 space-y-8 text-[16px] leading-[20px] text-black">
          <li>
            <strong>Learning Difficulties</strong>
           – Problems with reading skills, writing, or comprehension
          </li>
          <li>
            <strong>Executive Function Challenges  </strong> – Memory, planning, and organisation
          </li>
          <li>
            <strong>School Readiness Assessments</strong>  – For preschool or primary school transitions
          </li>
          <li>
            <strong>School Collaboration and Accommodations </strong> 
            – Guidance to parents and educators for special education needs in classrooms 
          </li>
        </ul>
      </div>




      <div className=" bg-white ">
        <div className="py-4">
          
           <div className='max-w-[300px]'>
            
            <h2 className="text-[28px] leading-[28px] font-bold font-baloo2 mt-2">
          Not sure 
          <span className=" text-[#4B3A8F]">
            {" "}where to{" "}
            <i className="relative z-[2] font-light">
               begin?
              <div className="absolute z-[-1] left-[-5px] top-[4px]">
              </div>
            </i>
          </span>
        </h2>
           </div>

          <p className="pt-5">
           Start with a consultation with our developmental paediatricians, we’ll guide you to the right assessment, therapies, and next steps.
          </p>
        </div>
          <div className="flex justify-center py-6">
                <button
                  type="button"
                  className="flex items-center mx-2 gap-3 px-10 py-5 text-white bg-[#5943A5] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200"
                >
                  <span className="uppercase tracking-wide text-sm">Speak to Our 
Developmental Paediatricians</span>
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
    </div>
  );
}