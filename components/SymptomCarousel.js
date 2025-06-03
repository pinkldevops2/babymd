import React, { useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SubHeading from './SubHeading';

const SymptomCarousel = ({ symptomRows }) => {
  const symptomSliderRef1 = useRef(null);
  const symptomSliderRef2 = useRef(null);
  const symptomSliderRef3 = useRef(null);

  const intervalTime = 2000; // Time between slides (ms)

  const [slider1Ref, slider1Instance] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 15,
    },
  });

  const [slider2Ref, slider2Instance] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2.5,
      spacing: 15,
    },
  });

  const [slider3Ref, slider3Instance] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2.2,
      spacing: 15,
    },
  });

  const startAutoScroll = (instance, direction = "right") => {
    if (!instance) return;

    let index = instance.track.details.rel;

    const timer = setInterval(() => {
      const totalSlides = instance.track.details.slides.length;
      index = (index + (direction === "left" ? -1 : 1) + totalSlides) % totalSlides;
      instance.moveToIdx(index);
    }, intervalTime);

    return () => clearInterval(timer);
  };

  useEffect(() => {
    if (symptomSliderRef1.current) slider1Ref(symptomSliderRef1.current);
    if (symptomSliderRef2.current) slider2Ref(symptomSliderRef2.current);
    if (symptomSliderRef3.current) slider3Ref(symptomSliderRef3.current);
  }, []);

  useEffect(() => {
    let cleanup1, cleanup2, cleanup3;

    if (slider1Instance.current) {
      cleanup1 = startAutoScroll(slider1Instance.current, "left");
    }
    if (slider2Instance.current) {
      cleanup2 = startAutoScroll(slider2Instance.current, "right");
    }
    if (slider3Instance.current) {
      cleanup3 = startAutoScroll(slider3Instance.current, "left");
    }

    return () => {
      cleanup1 && cleanup1();
      cleanup2 && cleanup2();
      cleanup3 && cleanup3();
    };
  }, [slider1Instance, slider2Instance, slider3Instance]);

  return (
    <div className="container">
      <div className="pt-0 pb-8 mt-0 md:mb-12">
        <div className="px-6 md:p-6">
          <SubHeading
            mainText={<>More than symptoms, <br />we see the</>}
            highlightText={<>bigger<br /></>}
            subText={<><i>picture</i></>}
            className="fade-in"
          />
          <p className="pt-2 fade-in">
            Because every child is a miracle, and every concern deserves real
            attention. Whether it&apos;s just a feeling, your tiny tot&apos;s in a fever, a
            delay, or just a feeling, we&apos;re here with expert eyes, kind hearts,
            and real answers.
          </p>
        </div>

        {/* Carousel Buttons */}
        <div className="space-y-4 mt-10 pb-5">
          {[symptomSliderRef1, symptomSliderRef2, symptomSliderRef3].map((ref, i) => (
            <div key={i} className="mx-auto rounded-2xl overflow-hidden p-0 fade-in">
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
    </div>
  );
};

export default SymptomCarousel;