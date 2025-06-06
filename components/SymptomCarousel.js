import React from 'react';
import ContactSubC from './anime/ContactSubC';
const Marquee = ({ items, direction = 'left', speed = '20s' }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div 
        className="inline-block whitespace-nowrap"
        style={{
          animation: `${direction === 'left' ? 'marqueeLeft' : 'marqueeRight'} ${speed} linear infinite`
        }}
      >
        {[...items, ...items].map((item, index) => (
          <span key={index} className="mx-2 inline-block lightergreen">
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

const SymptomMarquees = ({ symptomRows }) => {
  return (
    <div className="container">
      <div className="pt-0 pb-8 mt-0 md:mb-12">
        <div className="px-6 md:p-6">
          <h2 className="text-3xl font-bold mb-4">
            More than symptoms, <br />we see the <span className="text-purple-800">bigger<br/></span> 
            <span className='relative circling_around2'>
            <i className="relative z-4 text-[#5943A5] font-thin">picture</i>
            <ContactSubC /> 
            </span>
          </h2>
          <p className="pt-2">
            We know it&#39;s difficult when your little one isn&#39;t feeling their best. From mild coughs and stubborn fevers to tummy troubles and skin rashes, we handle it all with kindness and expertise. Our team is well-equipped to tackle asthma, allergies, growth or speech delays, and even complex challenges like ADHD or sleep troubles — whatever brings you through our doors.
          </p>
        </div>

        {/* Marquee Buttons */}
        <div className="space-y-6 mt-10 pb-5">
          <Marquee 
            items={symptomRows[0]} 
            direction="left" 
            speed="30s"
          />
          <Marquee 
            items={symptomRows[1]} 
            direction="right" 
            speed="25s"
          />
          <Marquee 
            items={symptomRows[2]} 
            direction="left" 
            speed="35s"
          />
        </div>
      </div>
    </div>
  );
};

export default SymptomMarquees;