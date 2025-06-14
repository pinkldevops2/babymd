import React from 'react';
import ContactSubD from './anime/ContactSubD';

interface SubHeading3Props {
  mainText: React.ReactNode;
  highlightText: React.ReactNode;
  subText: React.ReactNode;
}

const SubHeading3: React.FC<SubHeading3Props> = ({
  mainText,
  highlightText,
  subText,
}) => {
  return (
    <h2 className="text-[28px] leading-[32px] font-bold text-gray-900 fade-in">
      {mainText}
      <span className="text-[#5943A5] fade-in"> {highlightText}</span>{' '}
      <span className="relative circling_around2 adjusters">
        <i className="italic text-[#5943A5] font-thin fade-in relative z-4">
          {subText}
        </i>
        <ContactSubD />
      </span>
    </h2>
  );
};

export default SubHeading3;