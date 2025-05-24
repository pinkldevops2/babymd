export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content Container */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Purple Splash Frame */}
        <div className="bg-[#4B3A8F] rounded-3xl p-8 md:p-12 mb-8 md:mb-12 shadow-lg">
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight mb-4">
            Raising a baby
            <br />
            <span className="text-xl md:text-3xl font-semibold">takes a village;</span>
          </h1>
          
          {/* Image Frame with Different Splash Color */}
          <div className="bg-[#FFD9E8] rounded-2xl p-6 md:p-8 mb-6 relative overflow-hidden">
            {/* Image placeholder - replace with actual image */}
            <div className="w-full h-48 md:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Image placeholder</span>
            </div>
            
            {/* Overlay Text */}
            <p className="text-[#4B3A8F] text-lg md:text-xl font-medium absolute bottom-6 left-6">
              you come to
            </p>
          </div>
        </div>

        {/* White Text Frame */}
        <div className="bg-white rounded-3xl p-8 md:p-12 mb-8 md:mb-12 shadow-md">
          <p className="text-[#4B3A8F] text-xl md:text-2xl leading-relaxed font-medium">
            You deserve care that&apos;s as thoughtful as your
            <br />
            parenting. From cozy clinics to expert
            <br />
            pediatricians and holistic support, we&apos;re here
            <br />
            for every milestone, worry, and wonder.
          </p>
        </div>

        {/* Superdoc CTA Frame */}
        <div className="bg-[#4B3A8F] rounded-3xl p-8 md:p-12 text-center shadow-lg">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            WHERE&apos;S MY SUPERDOC?
          </h2>
          <button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white font-bold py-4 px-8 rounded-full 
                           text-lg md:text-xl transition-all duration-300 transform hover:scale-105">
            Find Your Pediatrician
          </button>
        </div>

      </div>
    </div>
  );
}