import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';

interface SuperDocButtonProps {
  href: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  label: string;
  variant?: 'pink' | 'purple' | 'yellow';
  className?: string;
  textColor?: string;
  onClick?: () => void; // <-- add this
}

const SuperDocButton: React.FC<SuperDocButtonProps> = ({
  href,
  target = '_self',
  label,
  variant = 'pink',
  className = '',
  textColor = '#FFFFFF',
  onClick, // <-- receive it
}) => {
  const bgColors: Record<string, string> = {
    pink: 'bg-[#F8845D] hover:bg-[#5943A5]',
    purple: 'bg-[#5943A5] hover:bg-[#F8845D]',
    yellow: 'bg-[#F0CB46] hover:bg-[#F8845D]',
  };

  return (
    <Link
      href={href}
      target={target}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault(); // prevent default anchor behavior
          onClick();
        }
      }}
      className={clsx(
        'whitespace-nowrap text-sm flex justify-center items-center gap-2 uppercase font-bold py-4 px-10 rounded-full tracking-wide transition-transform duration-300 transform hover:scale-105',
        bgColors[variant],
        className
      )}
      style={{ color: textColor }}
    >
      {label}
      <span className="text-base">
        <svg width="25" height="18" viewBox="0 0 79 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M56.1238 31.7983L14.6527 58.7715L14.6527 4.82511L56.1238 31.7983Z" fill={textColor} />
          <path d="M78.7151 31.7983L37.244 58.7715L37.244 4.82511L78.7151 31.7983Z" fill={textColor} />
        </svg>
      </span>
    </Link>
  );
};

export default SuperDocButton;