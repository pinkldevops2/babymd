'use client';
import Image from 'next/image';
import { useKeenSlider } from "keen-slider/react"; // Import keen-slider hook
import "keen-slider/keen-slider.min.css"; // Import keen-slider styles
import whitebtnarrow from "../../assets/btnwhitearrow.png";
import Nearbyclinic from "../../../../public/images/doctorassets/doc1.png";
import SubHeading from '../../../../components/SubHeading';
import beehive2 from '../../../../public/images/serviceassets/beehive2.png';

export default function DoctorSlider() {
      // Clinic data
  const clinics = [
    {
      name: "Dr Shivangi Bora",
      about: `“Parents come to us with questions, fears, and hopes. Our job is to meet them with answers, calm, and care.”`,
      specialist: "Paediatrician, Allergy and Asthma Specialist, and Paediatric Sleep Specialist",
      image: Nearbyclinic,
    },
    {
      name: "Dr Shivangi Bora",
      about: `“Parents come to us with questions, fears, and hopes. Our job is to meet them with answers, calm, and care.”`,
    specialist: "Paediatrician, Allergy and Asthma Specialist, and Paediatric Sleep Specialist",
      image: Nearbyclinic,
    },
    {
      name: "Dr Shivangi Bora",
      about: `“Parents come to us with questions, fears, and hopes. Our job is to meet them with answers, calm, and care.”`,
      specialist: "Paediatrician, Allergy and Asthma Specialist, and Paediatric Sleep Specialist",
      image: Nearbyclinic,
    },
  ];

      // Keen-slider setup for clinic carousel with free mode
  const [clinicSliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (

          <div className="bg-[#E1F5FF]">
             <div className="w-full mt-0 px-6 pb-5 pt-7 relative">
        <SubHeading
          mainText={<>From White Coats,</>}
          highlightText={<>With</>}
          subText={<><i>Love</i></>}
        />
        <Image
          width={33}
          height={30}
          src={beehive2}
          alt="Beehive"
          className="absolute right-[20px] top-[65px]"
        />

        <p className="pt-8">
         Read our care team’s little love notes.
        </p>
      </div>
             





        <div className="p-6">
          <div className="relative max-w-md mx-auto rounded-2xl ">
            <div ref={clinicSliderRef} className="keen-slider">
              {clinics.map((clinic, index) => (
                <div key={index} className="keen-slider__slide">

                <div className="relative h-[300px] w-full imageoverlay">
                    <Image
                      width={350}
                      height={300}
                      src={clinic.image}
                      alt={clinic.name}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                     
                      <div className="absolute bottom-2 left-0 right-0 flex flex-wrap gap-1 px-2 z-10">
                         <p className="text-xs md:text-sm text-white mb-2 md:mb-3 leading-relaxed"  dangerouslySetInnerHTML={{ __html: clinic.about }}>
                         
                          </p>
                         <h3 className="text-sm md:text-lg font-bold text-white mb-0">
                           {clinic.name}
                          </h3>
                          <span
                            className=" bg-opacity-20 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[10px] font-medium"
                          >
                           <p dangerouslySetInnerHTML={{ __html: clinic.specialist }} />
                          </span>
                      </div>
                    </div>



                </div>
              ))}
            </div>
            {/* Navigation Arrows for Clinic Carousel */}
            <button
              onClick={() => instanceRef.current?.prev()}
              className="absolute left-[-10px] top-[170px] z-4 transform -translate-y-1/2 bg-[#F4DF76] rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => instanceRef.current?.next()}
              className="absolute right-[-10px] top-[170px] z-4 transform -translate-y-1/2 bg-[#F4DF76]  rounded-full shadow-md"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center mt-6">
            <button className="flex items-center bg-[#F9825F] hover:bg-[#f86f47] text-white font-bold py-3 px-10 rounded-full text-sm tracking-wide transition-transform duration-300 transform hover:scale-105">
              VISIT YOUR NEAREST BABYMD
              <span className="text-white text-base ml-2">
              <Image
                src={whitebtnarrow}
                alt="Layer 1"
                className="w-full min-w-[15px]"
              />

              </span>
            </button>
          </div>
        </div>

        </div>
  );
}