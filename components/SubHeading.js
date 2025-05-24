const SubHeading = ({ mainText, highlightText, subText }) => {
  return (
    <h2 className="text-[28px] leading-[32px] font-bold text-gray-900">
      {mainText}
      <span className="text-[#5943A5]"> {highlightText}</span>{" "}
      <i className="italic text-[#5943A5] font-thin"> {subText}</i>
    </h2>
  );
};
export default SubHeading;