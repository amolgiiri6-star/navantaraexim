const DB_NAME = 'NavantaraDB';
const STORE_NAME = 'assets';

// Global memory cache to prevent any async latency or flash of old fallback images
const memoryCache = new Map<string, string>();

export const getCachedImageSync = (key: string): string | null => {
  if (typeof window === 'undefined') return null;

  // 1. Check in-memory map
  if (memoryCache.has(key)) {
    return memoryCache.get(key) || null;
  }

  // 2. Check early window prefetch cache from index.html
  const winCache = (window as any).__NAVANTARA_CACHE;
  if (winCache && winCache[key]) {
    memoryCache.set(key, winCache[key]);
    return winCache[key];
  }

  // 3. Check sessionStorage (fast synchronous lookup)
  try {
    const fromSession = sessionStorage.getItem(key);
    if (fromSession) {
      memoryCache.set(key, fromSession);
      return fromSession;
    }
  } catch {
    // ignore
  }

  // 4. Check localStorage
  try {
    const fromLocal = localStorage.getItem(key);
    if (fromLocal) {
      memoryCache.set(key, fromLocal);
      return fromLocal;
    }
  } catch {
    // ignore
  }

  return null;
};

export const saveImageToIDB = async (key: string, data: string): Promise<void> => {
  // Immediately populate memory cache and fast storages
  memoryCache.set(key, data);
  if (typeof window !== 'undefined') {
    if (!(window as any).__NAVANTARA_CACHE) {
      (window as any).__NAVANTARA_CACHE = {};
    }
    (window as any).__NAVANTARA_CACHE[key] = data;

    try {
      sessionStorage.setItem(key, data);
    } catch {
      // ignore
    }
    try {
      localStorage.setItem(key, data);
    } catch {
      // ignore
    }
  }

  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => {
        try {
          const db = request.result;
          const tx = db.transaction(STORE_NAME, 'readwrite');
          const store = tx.objectStore(STORE_NAME);
          store.put(data, key);
          tx.oncomplete = () => resolve();
          tx.onerror = () => resolve();
        } catch {
          resolve();
        }
      };
      request.onerror = () => resolve();
    } catch {
      resolve();
    }
  });
};

export const getImageFromIDB = async (key: string): Promise<string | null> => {
  // Check synchronous cache first
  const cached = getCachedImageSync(key);
  if (cached) return cached;

  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME);
        }
      };
      request.onsuccess = () => {
        try {
          const db = request.result;
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const getReq = store.get(key);
          getReq.onsuccess = () => {
            const val = getReq.result || null;
            if (val) {
              memoryCache.set(key, val);
              if (typeof window !== 'undefined') {
                if (!(window as any).__NAVANTARA_CACHE) {
                  (window as any).__NAVANTARA_CACHE = {};
                }
                (window as any).__NAVANTARA_CACHE[key] = val;
              }
            }
            resolve(val);
          };
          getReq.onerror = () => resolve(null);
        } catch {
          resolve(null);
        }
      };
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
};

export interface CustomPreviewAssets {
  scale: number;
  hasBanner: boolean;
  bannerData: string | null;
  hasLogo: boolean;
  logoData: string | null;
  productImagesCount: number;
  productImages: Record<string, string>;
}

export const getAllCustomAssets = async (): Promise<CustomPreviewAssets> => {
  let scale = 100;
  try {
    const savedScale = localStorage.getItem('navantara_site_image_scale');
    if (savedScale) scale = parseInt(savedScale, 10) || 100;
  } catch {
    // ignore
  }

  // Fast synchronous check
  let bannerData: string | null = getCachedImageSync('navantara_custom_banner_bg');
  if (!bannerData) {
    try {
      bannerData = localStorage.getItem('navantara_custom_banner_bg') || sessionStorage.getItem('navantara_custom_banner_bg');
    } catch {
      // ignore
    }
  }

  let logoData: string | null = getCachedImageSync('navantara_custom_logo');
  if (!logoData) {
    try {
      logoData = localStorage.getItem('navantara_custom_logo') || sessionStorage.getItem('navantara_custom_logo');
    } catch {
      // ignore
    }
  }

  // If not found in sync cache, query IDB with strict 1-second timeout
  if (!bannerData) {
    try {
      bannerData = await Promise.race([
        getImageFromIDB('navantara_custom_banner_bg'),
        new Promise<null>((r) => setTimeout(() => r(null), 1000))
      ]);
    } catch {
      // ignore
    }
  }

  if (!logoData) {
    try {
      logoData = await Promise.race([
        getImageFromIDB('navantara_custom_logo'),
        new Promise<null>((r) => setTimeout(() => r(null), 1000))
      ]);
    } catch {
      // ignore
    }
  }

  const productImages: Record<string, string> = {};

  // Check IndexedDB all keys with strict 1.2-second timeout
  try {
    await new Promise<void>((resolve) => {
      const timer = setTimeout(() => resolve(), 1200);

      try {
        if (typeof indexedDB === 'undefined') {
          clearTimeout(timer);
          resolve();
          return;
        }

        const request = indexedDB.open(DB_NAME, 1);
        request.onblocked = () => {
          clearTimeout(timer);
          resolve();
        };
        request.onerror = () => {
          clearTimeout(timer);
          resolve();
        };
        request.onsuccess = () => {
          try {
            const db = request.result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
              clearTimeout(timer);
              resolve();
              return;
            }
            const tx = db.transaction(STORE_NAME, 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const cursorReq = store.openCursor();
            cursorReq.onsuccess = (e: any) => {
              const cursor = e.target.result;
              if (cursor) {
                const key = String(cursor.key);
                if (key.startsWith('img_')) {
                  productImages[key.replace('img_', '')] = cursor.value;
                }
                cursor.continue();
              } else {
                clearTimeout(timer);
                resolve();
              }
            };
            cursorReq.onerror = () => {
              clearTimeout(timer);
              resolve();
            };
          } catch {
            clearTimeout(timer);
            resolve();
          }
        };
      } catch {
        clearTimeout(timer);
        resolve();
      }
    });
  } catch {
    // ignore
  }

  return {
    scale,
    hasBanner: Boolean(bannerData),
    bannerData,
    hasLogo: Boolean(logoData),
    logoData,
    productImagesCount: Object.keys(productImages).length,
    productImages,
  };
};
