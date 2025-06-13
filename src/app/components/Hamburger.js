'use client';

export default function Hamburger({ onClick, isScrolled }) {
  const coverColor = isScrolled ? '#000000' : '#ffffff';
  const spineColor = isScrolled ? '#ffffff' : '#000000';

  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center focus:outline-none group"
      aria-label="Open menu"
    >
      <svg
        viewBox="0 0 64 64"
        width="48"
        height="48"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105"
      >
        {/* Left Cover */}
        <path
          d="M10 18 Q22 12 30 16 L30 48 Q20 44 10 50 Z"
          fill={coverColor}
        />
        {/* Right Cover */}
        <path
          d="M54 18 Q42 12 34 16 L34 48 Q44 44 54 50 Z"
          fill={coverColor}
        />
        {/* Spine */}
        <rect
          x="30"
          y="14"
          width="4"
          height="36"
          rx="1"
          fill={spineColor}
        />
        {/* Pages effect */}
        <line x1="31" y1="20" x2="33" y2="20" stroke={spineColor} strokeWidth="1" />
        <line x1="31" y1="26" x2="33" y2="26" stroke={spineColor} strokeWidth="1" />
        <line x1="31" y1="32" x2="33" y2="32" stroke={spineColor} strokeWidth="1" />
        <line x1="31" y1="38" x2="33" y2="38" stroke={spineColor} strokeWidth="1" />
      </svg>
    </button>
  );
}
