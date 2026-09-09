import { getAllCustomAssets, getImageFromIDB } from './imageStorage';

export interface SyncStatus {
  synced: boolean;
  hasBanner: boolean;
  hasLogo: boolean;
  hasProductsHero: boolean;
  savedCount?: number;
  error?: string;
}

export const syncPreviewAssetsToLive = async (): Promise<SyncStatus> => {
  try {
    const assets = await getAllCustomAssets();
    
    // Also check products hero background
    let productsHeroData: string | null = null;
    try {
      productsHeroData = await getImageFromIDB('products_hero_bg_custom');
      if (!productsHeroData && typeof window !== 'undefined') {
        productsHeroData = localStorage.getItem('products_hero_bg_custom');
      }
    } catch {
      // ignore
    }

    const payload = {
      bannerData: assets.bannerData,
      logoData: assets.logoData,
      productsHeroData: productsHeroData,
      productImages: assets.productImages,
    };

    // If nothing to sync, check status
    if (!payload.bannerData && !payload.logoData && !payload.productsHeroData && Object.keys(payload.productImages).length === 0) {
      try {
        const res = await fetch('/api/sync-assets');
        if (res.ok) {
          const status = await res.json();
          return { synced: true, ...status };
        }
      } catch {
        // ignore
      }
      return { synced: false, hasBanner: false, hasLogo: false, hasProductsHero: false };
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    const res = await fetch('/api/sync-assets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      return {
        synced: true,
        hasBanner: Boolean(payload.bannerData),
        hasLogo: Boolean(payload.logoData),
        hasProductsHero: Boolean(payload.productsHeroData),
        savedCount: data.savedCount,
      };
    } else {
      return {
        synced: false,
        hasBanner: false,
        hasLogo: false,
        hasProductsHero: false,
        error: `Server responded with status ${res.status}`,
      };
    }
  } catch (err) {
    return {
      synced: false,
      hasBanner: false,
      hasLogo: false,
      hasProductsHero: false,
      error: String(err),
    };
  }
};

export const uploadSingleAssetToServer = async (
  type: 'banner' | 'logo' | 'productsHero',
  file: File
): Promise<boolean> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      if (!base64) {
        resolve(false);
        return;
      }

      const payload: Record<string, string> = {};
      if (type === 'banner') payload.bannerData = base64;
      if (type === 'logo') payload.logoData = base64;
      if (type === 'productsHero') payload.productsHeroData = base64;

      try {
        const res = await fetch('/api/sync-assets', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) {
          // Trigger local event so UI updates immediately
          window.dispatchEvent(new CustomEvent('navantara-assets-ready'));
          resolve(true);
        } else {
          resolve(false);
        }
      } catch {
        resolve(false);
      }
    };
    reader.onerror = () => resolve(false);
    reader.readAsDataURL(file);
  });
};

