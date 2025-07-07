import React from "react";
import Image from 'next/image';
import SubHeading from './SubHeading';
//import beehive2 from '../../../../../public/images/serviceassets/beehive2.png';
import beehive2 from '../../public/images/bee.png';

type FormPopUpProps = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  mainText: React.ReactNode;
  highlightText: React.ReactNode;
  subText: React.ReactNode;
};

export default function FormPopUp({ isOpen,
  onClose,
  children,
  mainText,
  highlightText,
  subText, }: FormPopUpProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center glass-effect bg-opacity-50">
      <div className="relative bg-[#FBE38F] shadow-lg w-full max-w-md max-h-[93vh] overflow-y-auto p-6 px-8 mx-4 rounded-[58px]">
        <button
          onClick={onClose}
          className="absolute rounded-full bg-[#5943a5] text-white right-[20px] top-[20px] w-[40px] h-[40px] hover:text-black text-2xl"
        >
          &times;
        </button>
        <div className="flex items-center relative top-[34px]">
            <SubHeading
              mainText={<>{mainText}</>}
              highlightText={<>{highlightText}</>}
              subText={<><i>{subText}</i></>}
            />
                <Image
              width={83}
              height={80}
              src={beehive2}
              alt="Beehive"
              className="right-[20px] top-[65px]"
            />
        </div>
        {children}
      </div>
    </div>
  );
}