// components/SuperDocButton.js
import Link from 'next/link';
import clsx from 'clsx'; // Optional: for cleaner conditional class handling

const SuperDocButton = ({
  href,
  label,
  variant = 'pink', // 'pink', 'purple', or 'yellow'
  className = '',
  textColor = '#FFFFFF' // Default white, accepts hex code
}) => {
  // Define background colors
  const bgColors = {
    pink: 'bg-[#F8845D] hover:bg-[#5943A5]',
    purple: 'bg-[#5943A5] hover:bg-[#F8845D]',
    yellow: 'bg-[#F0CB46] hover:bg-[#5943A5]'
  };

  return (
    <Link
      href={href}
      target={href}
      className={clsx(
        `whitespace-nowrap text-sm flex items-center gap-2 font-bold py-4 px-10 rounded-full tracking-wide transition-transform duration-300 transform hover:scale-105`,
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