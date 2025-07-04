"use client";
import SubHeading4 from '../../../../components/SubHeading4';

export default function ThirdParagraph() {
  return (
    <div className=" px-6 py-4  ">
      <div className=" mx-auto ">
        <SubHeading4
          mainText={<>More than medicine</>}
          highlightText={<>offer</>}
          subText={<><i> peace of mind </i></>}
        />
        <p className="p-4 pl-0">
          Parenting doesn’t clock out, and neither do we. Our pediatricians know
          just when to jump into action and when to share a laugh with your
          little one. Because the right care isn’t just about treating illness,
          it’s about making every child feel safe, heard, and understood.
        </p>
      </div>
    </div>
  );
}
