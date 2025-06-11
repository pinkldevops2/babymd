"use client";
import SubHeading from '../../../../../components/SubHeading';
export default function SecondParagraph() {
  return (
    <div className=" bg-white   ">
      <div className="py-4 px-6 mt-3">
        <SubHeading
          mainText={<>Experts</>}
          highlightText={<>who are all</>}
          subText={<><i> ears </i></>}
        />
        <p className="py-2 font-Lato">
          Our team of doctors isn’t just experienced — they’re calm, kind, and
          genuinely invested in your child’s well-being. Whether you&apos;re
          visiting in person or online, you&apos;ll find professionals who take
          the time to listen, explain, and connect.
        </p>
      </div>
    </div>
  );
}
