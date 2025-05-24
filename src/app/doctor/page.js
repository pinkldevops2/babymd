export default function Doctor() {
  return (
    <section className="bg-[#FFF3D5] py-12 px-6 text-center relative overflow-hidden">
      {/* Top Text */}
      <h2 className="text-2xl font-bold text-black leading-snug " >
               <span className="italic text-purple-600 decoration-orange-400 decoration-[3px]">
           Meet the{" "} <br /> <span className="underline  decoration-orange-400">superheroes</span>
        </span>{" "}
        behind <br />your childs care
      </h2>
      <p className="text-sm text-gray-700 mt-4 max-w-md mx-auto">
        From tantrums to teething, our pediatricians are on-call, on-point and, honestly, a bit obsessed with tiny humans.
      </p>
      {/* Image */}
      <div className="mt-8 relative flex justify-center">
        <div className="border-[10px] border-purple-600 overflow-hidden w-64 h-64">
          {/* Replace src with your actual image later */}
          {/* <img
            src="/placeholder.jpg"
            alt="Doctor with child image"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
      {/* Bottom Section */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold text-black">
          Care that <span className="text-purple-600 italic">feels like <br />a hug</span>
        </h3>
        <p className="text-sm text-gray-700 mt-2 max-w-sm mx-auto">
          Think of us as your babys cheerleaders, late-night worriers, and milestone high-fivers.
        </p>
      </div>
    </section>
  );
}
