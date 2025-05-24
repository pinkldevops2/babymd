// components/SuperDocButton.js
import Link from 'next/link';
import clsx from 'clsx'; // Optional: for cleaner conditional class handling

const SuperDocButton = ({
  href,
  label,
  variant = 'pink', // 'pink' or 'purple'
  className = ''
}) => {
  // Define background colors
  const bgColors = {
    pink: 'bg-[#F8845D] hover:bg-[#5943A5]',
    purple: 'bg-[#5943A5] hover:bg-[#F8845D]'
  };

  return (
    <Link
      href={href}
      className={clsx(
        `whitespace-nowrap flex items-center gap-2 text-white font-bold py-5 px-10 rounded-full tracking-wide transition-transform duration-300 transform hover:scale-105`,
        bgColors[variant],
        className
      )}
    >
      {label}
      <span className="text-white text-base">
        <svg width="25" height="18" viewBox="0 0 79 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.5" d="M56.1238 31.7983L14.6527 58.7715L14.6527 4.82511L56.1238 31.7983Z" fill="white" />
          <path d="M78.7151 31.7983L37.244 58.7715L37.244 4.82511L78.7151 31.7983Z" fill="white" />
        </svg>
      </span>
    </Link>
  );
};

export default SuperDocButton;