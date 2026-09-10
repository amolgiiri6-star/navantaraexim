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
  if (storageKey === 'prod_img_cs-brush-96033020') return '/Cosmetic Brushes.png';
    if (storageKey === 'prod_img_cs-brush-96033010') return '/Artistic Brushes.png';
    if (storageKey === 'prod_img_cs-sheet-1') return '/Drawer sheets.png';
    if (storageKey === 'prod_img_cs-wipe-1') return '/Herbal Wipes.png';
    if (storageKey === 'prod_img_cs-brush-96033090') return '/Brushes.png';
    if (storageKey === 'prod_img_pow-1') return '/Cooling Talc.png';
    if (storageKey === 'prod_img_pow-2') return '/Baby Powder.png';
    if (storageKey === 'prod_img_pow-3') return '/Translucent Loose Setting Powder.jpg';
    if (storageKey === 'prod_img_fab-twill-4th-60s') return '/Executive 4 Threads.png';
    if (storageKey === 'prod_img_fab-twill-3th-80s') return '/Royal 3 Threads.png';
    if (storageKey === 'prod_img_fab-twill-4th-yd-herringbone') return '/Yarn Dyed 4 threads.png';
    if (storageKey === 'prod_img_fab-twill-4th-satin-100s') return '/Ultra Compact 4 threads.png';
    if (storageKey === 'prod_img_fab-twill-3th-peach-40s') return '/Peach Finish 3 threads.png';
    if (storageKey === 'prod_img_fab-poplin-100s') return '/cotton poppolin.png';
    if (storageKey === 'prod_img_fab-oxford-50s') return '/Royal Oxford.png';
    if (storageKey === 'prod_img_fab-linen-60lea') return '/linen 60.png';
    if (storageKey === 'prod_img_attar-mitti-33019031') return '/Mitti Attar.png';
    if (storageKey === 'prod_img_attar-khus-33019031') return '/Khus Attar.png';
    if (storageKey === 'prod_img_attar-shamama-33019031') return '/Shamama Safforn Attar.png';
    if (storageKey === 'prod_img_rosewater-gulabjal-33030020') return '/Rose Water.png';
    if (storageKey === 'prod_img_keora-water-33030030') return '/Kewra Water.png';
    if (storageKey === 'prod_img_aqueous-distillates-33019060') return '/floral_waters_and_botanical_hydrosol.jpg';
    if (storageKey === 'prod_img_oil-rose-33012938') return '/Indian_Rose_Oil.jpg';
    if (storageKey === 'prod_img_oil-lemongrass-33012942') return '/Lemongrass oil.jpg';
    if (storageKey === 'prod_img_oil-palmarosa-33012933') return '/Palmarosa_Oil.jpg';
    if (storageKey === 'prod_img_oil-patchouli-33012934') return '/Patchouli_Oil.jpg';
    if (storageKey === 'prod_img_oil-davana-33012944') return '/_Davana_Oil_.jpg';
    if (storageKey === 'prod_img_oil-sandalwood-33012937') return '/Mysore_Sandalwood_Oil.jpg';
    if (storageKey === 'prod_img_deo-rollon-sticks-33072000') return '/Botanical_Roll-Ons_Stick.jpg';
    if (storageKey === 'prod_img_deo-creams-solids-33072000') return '/Artisnal deodorants.jpg';
    if (storageKey === 'prod_img_tob-24039910-khaini') return '/Chewing Tobacco - Filter Khaini.png';
    if (storageKey === 'prod_img_tob-24039920-prep') return '/Preparations Containing Chewing Tobacco (2).png';
    if (storageKey === 'prod_img_tob-24039930-jarda') return '/zarda_compressed.jpeg';
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
