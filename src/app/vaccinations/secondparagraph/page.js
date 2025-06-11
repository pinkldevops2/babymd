"use client";
import SubHeading from '../../../../../components/SubHeading';

export default function SecondParagraph() {
  return (
    <div className=" bg-white ">
      <div className="py-4 px-6">
        
      <div className='max-w-[300px]'>
        <SubHeading
          mainText={<>Vaccination schedule</>}
          highlightText={<>we</>}
          subText={<><i>follow</i></>}
        />
      </div>


        <p className="pt-5">
          We follow the Indian Academy of Pediatrics (IAP) recommended schedule
          — the gold standard for childhood immunization in India. Here’s a
          quick look at key vaccine milestones:
        </p>
      </div>
    </div>
  );
}
