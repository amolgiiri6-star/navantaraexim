import React, { useState, useEffect } from 'react';
import { getImageFromIDB, getCachedImageSync } from '../../utils/imageStorage';

interface EditableImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  storageKey?: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  buttonPosition?: 'top-right' | 'bottom-right' | 'center';
  badgeLabel?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  storageKey,
  defaultSrc,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = 'relative overflow-hidden',
  buttonPosition,
  badgeLabel,
  ...rest
}) => {
  // Check synchronous cache first so any uploaded image displays immediately without flashing old defaults
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    if (storageKey) {
      const cached = getCachedImageSync(`img_${storageKey}`);
      if (cached) return cached;
    }
      if (storageKey === 'prod_img_eo-1') return '/Sandalwood oil.png';
if (storageKey === 'prod_img_eo-2') return '/peppermint oil.png';
if (storageKey === 'prod_img_eo-3') return '/ginger oil.png';
   if (storageKey === 'prod_img_eo-4') return '/Palma Rosa.png';
 if (storageKey === 'prod_img_eo-5') return '/Clove oil.png';   
return defaultSrc;
});
  // Load custom image from IndexedDB on mount if available
  useEffect(() => {
    let isMounted = true;
    if (storageKey) {
      getImageFromIDB(`img_${storageKey}`).then((saved) => {
        if (saved && isMounted) {
          setCurrentSrc(saved);
        }
      });

      const handleAssetsReady = () => {
        const cached = getCachedImageSync(`img_${storageKey}`);
        if (cached && isMounted) {
          setCurrentSrc(cached);
        }
      };

      window.addEventListener('navantara-assets-ready', handleAssetsReady);

      return () => {
        isMounted = false;
        window.removeEventListener('navantara-assets-ready', handleAssetsReady);
      };
    }
  }, [storageKey, defaultSrc]);

  return (
    <div className={`relative ${containerClassName}`}>
      <img
        src={currentSrc}
        alt={alt}
        className={className}
        referrerPolicy="no-referrer"
        {...rest}
      />
    </div>
  );
};
