import React from 'react';

interface SubHeadingProps {
  mainText: React.ReactNode;
  highlightText: React.ReactNode;
  subText: React.ReactNode;
}

const SubHeading: React.FC<SubHeadingProps> = ({
  mainText,
  highlightText,
  subText,
}) => {
  return (
    <h2 className="text-[28px] leading-[32px] font-bold text-gray-900 fade-in">
      {mainText}
      <span className="text-[#5943A5] fade-in"> {highlightText}</span>{' '}
      <i className="italic text-[#5943A5] font-thin fade-in"> {subText}</i>
    </h2>
  );
};

export default SubHeading;