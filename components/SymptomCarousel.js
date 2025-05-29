import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SubHeading from './SubHeading'; // Adjust path as needed

const SymptomCarousel = ({ symptomRows }) => {
  const symptomSliderRef1 = useRef(null);
  const symptomSliderRef2 = useRef(null);
  const symptomSliderRef3 = useRef(null);


  const [slider1Ref] = useKeenSlider({
      mode: "free-snap",
      loop: true,
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
    });
  
    const [slider2Ref] = useKeenSlider({
      mode: "free-snap",
      loop: true,
      slides: {
        origin: "center",
        perView: 2.5,
        spacing: 15,
      },
    });
  
    const [slider3Ref] = useKeenSlider({
      mode: "free-snap",
      loop: true,
      slides: {
        origin: "center",
        perView: 2.2,
        spacing: 15,
      },
    });

  useEffect(() => {
    if (symptomSliderRef1.current) slider1Ref(symptomSliderRef1.current);
    if (symptomSliderRef2.current) slider2Ref(symptomSliderRef2.current);
    if (symptomSliderRef3.current) slider3Ref(symptomSliderRef3.current);
  }, []);

  return (
    <div className="pt-0 pb-8 md:p-12 mt-0 md:mb-12">
      <div className="px-6">
        <SubHeading
          mainText={<>More than symptoms, <br />we see the</>}
          highlightText={<>bigger<br /></>}
          subText={<><i>picture</i></>}
        />
        <p className="pt-2">
          Because every child is a miracle, and every concern deserves real
          attention. Whether it&apos;s just a feeling, your tiny tot&apos;s in a fever, a
          delay, or just a feeling, we&apos;re here with expert eyes, kind hearts,
          and real answers.
        </p>
      </div>

      {/* Carousel Buttons */}
      <div className="space-y-4 mt-10 pb-5">
        {[symptomSliderRef1, symptomSliderRef2, symptomSliderRef3].map((ref, i) => (
          <div key={i} className="mx-auto rounded-2xl overflow-hidden p-0">
            <div ref={ref} className="keen-slider">
              {symptomRows[i].map((buttonText, index) => (
                <div key={index} className="keen-slider__slide !w-auto">
                  <button className="bg-[#FBE38F] text-[#4B3A8F] rounded-full w-full px-4 py-2 hover:bg-[#F6E8C3] transition-all duration-300">
                    {buttonText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SymptomCarousel;