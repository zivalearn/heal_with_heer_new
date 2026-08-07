import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { IMAGE_CATALOG, CatalogImageItem } from '../data/imageRegistryCatalog';

export interface ImageManifestRecord {
  imageId: string;
  currentSrc: string;
  originalFilename?: string;
  updatedAt?: string;
  history?: string[];
}

export type ImageManifest = Record<string, ImageManifestRecord>;

interface ImageContextType {
  manifest: ImageManifest;
  isVisualEditMode: boolean;
  isAdminUnlocked: boolean;
  activeModalImageId: string | null;
  activeModalDefaultSrc: string;
  getSrc: (imageId: string, defaultSrc?: string) => string;
  getImageInfo: (imageId: string) => CatalogImageItem | undefined;
  uploadImage: (imageId: string, dataUrl: string, filename?: string) => Promise<boolean>;
  restoreImage: (imageId: string, mode?: 'original' | 'previous') => Promise<boolean>;
  toggleVisualEditMode: (overrideState?: boolean) => void;
  openReplaceModal: (imageId: string, defaultSrc?: string) => void;
  closeReplaceModal: () => void;
  unlockAdmin: (pin: string) => Promise<{ success: boolean; error?: string }>;
  lockAdmin: () => void;
  refreshManifest: () => Promise<void>;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'hwh_image_manifest_cache';
const ADMIN_AUTH_KEY = 'hwh_admin_unlocked';

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [manifest, setManifest] = useState<ImageManifest>(() => {
    try {
      const cached = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (cached) return JSON.parse(cached);
    } catch (e) {
      console.warn("Failed to read image manifest from localStorage cache", e);
    }
    return {};
  });

  const [isAdminUnlocked, setIsAdminUnlocked] = useState<boolean>(() => {
    try {
      return localStorage.getItem(ADMIN_AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isVisualEditMode, setIsVisualEditMode] = useState<boolean>(false);
  const [activeModalImageId, setActiveModalImageId] = useState<string | null>(null);
  const [activeModalDefaultSrc, setActiveModalDefaultSrc] = useState<string>('');

  // Fetch from server API
  const refreshManifest = useCallback(async () => {
    try {
      const res = await fetch('/api/images');
      if (res.ok) {
        const data = await res.json();
        setManifest(data);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
      }
    } catch (err) {
      console.warn("Failed to fetch image manifest from server API, using local cache:", err);
    }
  }, []);

  useEffect(() => {
    refreshManifest();
  }, [refreshManifest]);

  const saveManifestState = (newManifest: ImageManifest) => {
    setManifest(newManifest);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newManifest));
    } catch (e) {
      console.warn("Failed to write manifest to localStorage", e);
    }
  };

  const getSrc = useCallback((imageId: string, defaultSrc?: string): string => {
    if (manifest[imageId]?.currentSrc) {
      return manifest[imageId].currentSrc;
    }
    if (defaultSrc) return defaultSrc;
    const item = IMAGE_CATALOG.find(i => i.id === imageId);
    return item?.defaultSrc || '';
  }, [manifest]);

  const getImageInfo = useCallback((imageId: string): CatalogImageItem | undefined => {
    return IMAGE_CATALOG.find(i => i.id === imageId) || {
      id: imageId,
      title: imageId.replace(/[._]/g, ' ').toUpperCase(),
      category: 'General',
      description: 'Dynamically registered website asset',
      defaultSrc: ''
    };
  }, []);

  const uploadImage = async (imageId: string, dataUrl: string, filename?: string): Promise<boolean> => {
    try {
      // Optimistic update
      const current = manifest[imageId] || { imageId, currentSrc: '', history: [] };
      const history = current.history || [];
      if (current.currentSrc && current.currentSrc !== dataUrl) {
        history.unshift(current.currentSrc);
      }

      const updatedRecord: ImageManifestRecord = {
        imageId,
        currentSrc: dataUrl,
        originalFilename: filename || 'uploaded_image',
        updatedAt: new Date().toISOString(),
        history: history.slice(0, 5)
      };

      const newManifest = { ...manifest, [imageId]: updatedRecord };
      saveManifestState(newManifest);

      // Server upload call
      const response = await fetch('/api/images/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageId, dataUrl, filename })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.manifest) {
          saveManifestState(result.manifest);
        }
      }
      return true;
    } catch (err) {
      console.error("Failed to upload image:", err);
      return false;
    }
  };

  const restoreImage = async (imageId: string, mode: 'original' | 'previous' = 'original'): Promise<boolean> => {
    try {
      const newManifest = { ...manifest };
      if (mode === 'original') {
        delete newManifest[imageId];
      } else if (mode === 'previous' && newManifest[imageId]?.history?.length) {
        const prev = newManifest[imageId].history!.shift();
        newManifest[imageId] = {
          ...newManifest[imageId],
          currentSrc: prev!,
          updatedAt: new Date().toISOString()
        };
      }
      saveManifestState(newManifest);

      const response = await fetch('/api/images/restore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageId, mode })
      });

      if (response.ok) {
        const result = await response.json();
        if (result.manifest) {
          saveManifestState(result.manifest);
        }
      }
      return true;
    } catch (err) {
      console.error("Failed to restore image:", err);
      return false;
    }
  };

  const toggleVisualEditMode = (overrideState?: boolean) => {
    setIsVisualEditMode(prev => overrideState !== undefined ? overrideState : !prev);
  };

  const openReplaceModal = (imageId: string, defaultSrc?: string) => {
    setActiveModalImageId(imageId);
    setActiveModalDefaultSrc(defaultSrc || getSrc(imageId));
  };

  const closeReplaceModal = () => {
    setActiveModalImageId(null);
    setActiveModalDefaultSrc('');
  };

  const unlockAdmin = async (pin: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch('/api/admin/verify-pin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin })
      });
      const data = await res.json();
      if (data.success) {
        setIsAdminUnlocked(true);
        localStorage.setItem(ADMIN_AUTH_KEY, 'true');
        return { success: true };
      }
      return { success: false, error: data.error || 'Invalid Admin Security PIN.' };
    } catch (e: any) {
      // Fallback offline verification if pin is heer2026
      if (pin === 'heer2026') {
        setIsAdminUnlocked(true);
        localStorage.setItem(ADMIN_AUTH_KEY, 'true');
        return { success: true };
      }
      return { success: false, error: e.message || 'Authentication error.' };
    }
  };

  const lockAdmin = () => {
    setIsAdminUnlocked(false);
    setIsVisualEditMode(false);
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  return (
    <ImageContext.Provider
      value={{
        manifest,
        isVisualEditMode,
        isAdminUnlocked,
        activeModalImageId,
        activeModalDefaultSrc,
        getSrc,
        getImageInfo,
        uploadImage,
        restoreImage,
        toggleVisualEditMode,
        openReplaceModal,
        closeReplaceModal,
        unlockAdmin,
        lockAdmin,
        refreshManifest
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageRegistry = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageRegistry must be used within an ImageProvider');
  }
  return context;
};
