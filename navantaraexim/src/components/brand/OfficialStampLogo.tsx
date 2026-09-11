import React from 'react';

interface OfficialStampLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'banner' | 'md' | 'lg' | 'xl';
  showShadow?: boolean;
}

export const OfficialStampLogo: React.FC<OfficialStampLogoProps> = ({
  className = '',
  size = 'md',
  showShadow = true,
}) => {
  const sizeMap = {
    xs: { width: 44, height: 53 },
    sm: { width: 100, height: 120 },
    banner: { width: 190, height: 228 },
    md: { width: 220, height: 264 },
    lg: { width: 280, height: 336 },
    xl: { width: 380, height: 456 },
  };

  const dim = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: `${dim.width}px`, height: `${dim.height}px` }}
    >
      <img
        src="/Navantara logo.png.png"
        alt="Navantara Exim - Seamless Trade. Global Trust."
        width={dim.width}
        height={dim.height}
        loading="eager"
        decoding="async"
        className={`w-full h-full object-contain ${
          showShadow ? 'filter drop-shadow-xl' : 'drop-shadow-sm'
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
