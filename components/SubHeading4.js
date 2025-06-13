import ContactC from './anime/ContactMainC';
const SubHeading4 = ({ mainText, highlightText, subText }) => {
  return (
    <h2 className="text-[28px] leading-[32px] font-bold text-gray-900 fade-in">
      {mainText}
      <span className="text-[#5943A5] fade-in"> {highlightText}</span>{" "}
      <span className='relative circling_around4 adjusters relative'><i className="italic text-[#5943A5] font-thin fade-in relative z-4"> {subText}</i>
        <ContactC />        
      </span>
    </h2>
  );
};
export default SubHeading4;