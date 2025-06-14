import React, { ReactNode } from 'react';
import ContactSubC from './anime/ContactSubC';

interface SubHeading2Props {
  mainText: ReactNode;
  highlightText: ReactNode;
  subText: ReactNode;
}

const SubHeading2: React.FC<SubHeading2Props> = ({ mainText, highlightText, subText }) => {
  return (
    <h2 className="text-[28px] leading-[32px] font-bold text-gray-900 fade-in">
      {mainText}
      <span className="text-[#5943A5] fade-in"> {highlightText}</span>{" "}
      <span className="relative circling_around2 adjusters2">
        <i className="italic text-[#5943A5] font-thin fade-in relative z-4">{subText}</i>
        <ContactSubC />
      </span>
    </h2>
  );
};

export default SubHeading2;