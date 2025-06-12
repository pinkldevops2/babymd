'use client';
import Image from 'next/image';
import beehive2 from '../../../../public/images/doctorassets/beedoc.png';
import arrow from "../../../../public/images/Group 2349.png";

export default function Locationform() {
  return (

          <div className="">
            <div className="max-w-md mx-auto bg-white rounded-[20px] shadow-md p-6 border " style={{ borderColor: '#91CFDA80' }}>
                    <h2 className="text-[16px] leading-[20px] text-black font-bold font-lato">
                      Browse by <span className="text-[#5943A5]">specialty</span> or <span className="text-[#5943A5]">location</span>
                    </h2>
                    <input type="text" placeholder="Doctor Name" className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500" />
                    <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option>Types of Specialty</option>
                    </select>
                    <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option>Location</option>
                    </select>
                    
                    <div className="flex flex-wrap items-center gap-2 mt-6 pr-[59px] relative">
                      <span className="text-[12px] leading-[16px] text-[#505050] font-bold font-lato">Popular Search</span>
                      
                           {['General', 'Lactation', 'Allergy', 'Development', 'Vaccines'].map(term => (
                            <span key={term} className="bg-purple-50 text-[#9C7EEB] px-3 py-1 rounded-full text-[12px] leading-[16px]  font-bold font-lato">{term}</span>
                          ))}
                      
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
                          <button
                            type="button"
                            className="flex items-center justify-center gap-3 px-5 py-5 text-white bg-[#F8845D] hover:bg-[#4a3794] transition-colors duration-200 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-200 min-w-[300px]"
                          >
                            <span className="uppercase tracking-[2px] text-sm">
                              Book an Appointment
                            </span>
                            <Image src={arrow} alt="Arrow" width={20} height={10} />
                          </button>
                        </div>
        </div>
  );
}