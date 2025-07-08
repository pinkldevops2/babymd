"use client";
import Image from "next/image";
import beehive2 from "../../../../public/images/doctorassets/beedoc.png";
import arrow from "../../../../public/images/Group 2349.png";


const doctors = [
  {
    name: 'Dr Vidisha Kumari',
    specialty: 'Paediatric Pulmonologist',
    image: '/images/doc.png',
    bgColor: '#F0CB46',
  },
  {
    name: 'Dr Amit Sharma',
    specialty: 'Cardiologist',
    image: '/images/doc1.png',
    bgColor: '#5943A5',
  },
  {
    name: 'Dr Neha Sinha',
    specialty: 'Dermatologist',
    image: '/images/doc2.png',
    bgColor: '#F6835D',
  },
  {
    name: 'Dr Ramesh Gupta',
    specialty: 'Orthopedic Surgeon',
    image: '/images/doc3.png',
    bgColor: '#269BD9',
  },
  {
    name: 'Dr Priya Malhotra',
    specialty: 'Neurologist',
    image: '/images/doc4.png',
    bgColor: '#F0CB46',
  },
  {
    name: 'Dr Arjun Patel',
    specialty: 'General Physician',
    image: '/images/doc.png',
    bgColor: '#5943A5',
  },
];

export default function DoctorTeam() {

  return (
    <div className="bg-white">
     <div className=" mx-auto pb-6 px-6">
      <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <div
              className="flex items-end justify-center relative overflow-hidden rounded-lg"
              style={{ backgroundColor: doctor.bgColor }}
            >
              <Image
                src={doctor.image}
                alt={doctor.name}
                width={100}
                height={100}
                className="mx-auto w-full max-h-[250px] object-contain"
              />
            </div>
            <div className="py-2 md:py-4">
              <h3 className="text-[16px] leading-[20px] font-lato font-bold text-[#2E2E2E] mb-1">
                <em>{doctor.name}</em>
              </h3>

              <p className="text-[14px] font-lato font-normal text-[#2E2E2E]  mb-2  leading-[16px]">
                {doctor.specialty}
              </p>

              <p className="mb-1 leading-relaxed">
                <a
                  href="#"
                  className="flex gap-2 items-center text-[12px] font-lato font-bold  text-[#5943A5] underline uppercase tracking-[2px] underline-offset-[5px]"
                >
                  Know More
                 <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                    <path opacity="0.5" d="M12.207 6.34066L3.57568 11.324L3.57568 1.35735L12.207 6.34066Z" fill="#5943A5"/>
                    <path d="M16.9086 6.34066L8.27728 11.324L8.27728 1.35735L16.9086 6.34066Z" fill="#5943A5"/>
                    </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>

    <div className="flex justify-center pt-6">
                              <button
                                type="button"
                                className="flex items-center justify-center gap-3 px-5 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[200px]"
                              >
                                <span className="uppercase tracking-[2px] text-sm font-bold">
                                  Load more
                                </span>
                                <Image src={arrow} alt="Arrow" width={20} height={10} />
                              </button>
                            </div>
    </div>
    </div>
  );
}
