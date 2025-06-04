import React from 'react';

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
            More than symptoms, <br />we see the <span className="text-purple-800">bigger</span> <i>picture</i>
          </h2>
          <p className="pt-2">
            Because every child is a miracle, and every concern deserves real
            attention. Whether it&#39;s just a feeling, your tiny tot&#39;s in a fever, a
            delay, or just a feeling, we&#39;re here with expert eyes, kind hearts,
            and real answers.
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