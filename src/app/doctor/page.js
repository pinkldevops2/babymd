export default function Doctor() {
  return (
    <section>
      <div className="banner-box bg-[#F9EEB6] relative z-2 pt-12 pb-6">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 relative">
          <h2 className="text-[42px] leading-[40px] font-bold ">
            <span className="text-[#5943A5]"> Meet the </span>
            <span className="relative inline-block relative">
              <i className="text-[#5943A5] relative z-10 font-normal"> superheroes </i>
              <img className="absolute top-[3] right-0 z-0" src="/images/solvingcirc.png" />
            </span>
             <span> behind your child’s care</span>
          </h2>
          <p className="mt-4 mb-8">
          From tantrums to teething, our pediatricians are on-call, on-point and, honestly, a bit obsessed with tiny humans.
          </p>
          <img className="absolute top-[-40px] right-0" src="/images/Group 427319502.svg" />
          <img className="absolute bottom-[-42px] left-0" src="/images/Group 427319515.svg" />
          
        </div>

        <div className="w-full md:w-1/2 relative">
          <img className="mx-auto" src="/images/Vector copy.svg" />
          <img className="mx-auto absolute top-0 left-1/2 transform -translate-x-1/2" src="/images/doctorbg.png" />
        </div>
      </div>
    </div>
    </div>
    <img
        className="w-full relative z-0 bg-[#ffffff]"
        src="/images/Vector 141.svg"
        alt="Vector 141"
      />

       <div className="w-full md:w-1/2">
                  <div className="relative px-6 md:px-0 flex items-baseline pt-4">
                    <div>
                    <h2 className="text-[28px] leading-[26px] font-bold pb-0 mb-0 pt-8">
                    Care that 
                    <span className="text-[#5943A5]">feels like<br/>in</span>
                      <span className="relative">
                        <i className="font-normal text-[#5943A5] z-2">  a hug</i>
                      </span>
                    </h2>
                    <p className="mt-4 mb-8">
                    Think of us as your baby’s cheerleaders,
                    late-night worriers, and milestone high-fivers. Blending years of expertise, we provide your precious one with the kind of care that feels more like family than a clinic.
                      </p>
                    </div>
                   {/*  <Image
                      src="/images/Group 427319502.svg"
                      alt="Illustration"
                      width={40}
                      height={40}
                      className="absolute right-[30px]  top-[60px]"
                    /> */}
                  </div>
                
            <div className="max-w-md mx-5 my-6 bg-white rounded-[20px] shadow-md p-6 border" style={{ borderColor: '#91CFDA80' }}>
              <h2 className="text-lg font-large text-gray-800 font-semibold">
                Browse by <span className="text-[#5943A5]">specialty</span> or <span className="text-[#5943A5]">location</span>
              </h2>
              <input type="text" placeholder="Doctor Name" className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500" />
              <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>Types of Specialty</option>
              </select>
              <select className="w-full mt-4 px-4 py-2 border border-[#91CFDA80] bg-[#F4F4F4] rounded-lg focus:ring-2 focus:ring-purple-500">
                <option>Location</option>
              </select>
              <p className="text-sm text-gray-600 mt-4">Popular Search</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {['General', 'Lactation', 'Allergy', 'Development', 'Vaccines'].map(term => (
                  <span key={term} className="bg-purple-50 text-[#9C7EEB] text-600 px-3 py-1 rounded-full text-sm font-medium">{term}</span>
                ))}
              </div>
            </div>
          </div>
  </section>
  
  );
}
