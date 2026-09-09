import React, { useState, useEffect } from 'react';
import { getImageFromIDB, getCachedImageSync } from '../../utils/imageStorage';

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
  const [imageSrc, setImageSrc] = useState<string>(() => {
    return getCachedImageSync('navantara_custom_logo') || '/navantara-logo.svg';
  });
  const [hasError, setHasError] = useState(false);

  // Directly retrieve saved logo without flashing old dead asset candidates
  useEffect(() => {
    let isMounted = true;
    getImageFromIDB('navantara_custom_logo').then((saved) => {
      if (saved && isMounted) {
        setImageSrc(saved);
        setHasError(false);
        return;
      }

      // Check if /custom-logo.png loads, otherwise fallback to /navantara-logo.svg
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          setImageSrc('/custom-logo.png?t=' + Date.now());
          setHasError(false);
        }
      };
      img.onerror = () => {
        if (isMounted) {
          setImageSrc('/navantara-logo.svg');
          setHasError(false);
        }
      };
      img.src = '/custom-logo.png?t=' + Date.now();
    });

    const handleAssetsReady = () => {
      const cached = getCachedImageSync('navantara_custom_logo');
      if (cached && isMounted) {
        setImageSrc(cached);
        setHasError(false);
      }
    };

    window.addEventListener('navantara-assets-ready', handleAssetsReady);

    return () => {
      isMounted = false;
      window.removeEventListener('navantara-assets-ready', handleAssetsReady);
    };
  }, []);

  return (
    <div 
      className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}
      style={{ width: `${dim.width}px`, height: `${dim.height}px` }}
    >
      {imageSrc && !hasError ? (
        <img
          src={imageSrc}
          alt="Navantara Exim - Seamless Trade. Global Trust."
          width={dim.width}
          height={dim.height}
          loading="eager"
          decoding="async"
          onError={() => {
            if (imageSrc !== '/navantara-logo.svg') {
              setImageSrc('/navantara-logo.svg');
            } else {
              setHasError(true);
            }
          }}
          className={`w-full h-full object-contain ${
            showShadow ? 'filter drop-shadow-xl' : 'drop-shadow-sm'
          }`}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full rounded-md border border-[#C5A059]/50 bg-[#081321]/90 flex flex-col items-center justify-center p-2 text-center shadow-lg">
          <div className="w-1/2 h-1/2 rounded border border-[#DFC17B]/40 flex items-center justify-center bg-[#C5A059]/10">
            <span className="font-serif font-bold text-[#DFC17B] text-xs">NE</span>
          </div>
          <span className="text-[9px] font-serif font-bold text-[#DFC17B] tracking-wider mt-1 uppercase">
            Navantara
          </span>
        </div>
      )}
    </div>
  );
};
