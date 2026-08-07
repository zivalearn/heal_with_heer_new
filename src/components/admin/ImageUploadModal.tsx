import React, { useState, useRef, useEffect } from 'react';
import { X, Upload, RotateCcw, Check, AlertCircle, Image as ImageIcon, Sparkles, ArrowRight } from 'lucide-react';
import { useImageRegistry } from '../../context/ImageContext';

// Helper function to optimize and compress image using Canvas
async function optimizeImageFile(file: File): Promise<{ dataUrl: string; filename: string; size: number }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Max dimension 2048px for crisp rendering without excessive payload
        const MAX_DIM = 2048;
        if (width > MAX_DIM || height > MAX_DIM) {
          if (width > height) {
            height = Math.round((height * MAX_DIM) / width);
            width = MAX_DIM;
          } else {
            width = Math.round((width * MAX_DIM) / height);
            height = MAX_DIM;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          return reject(new Error('Canvas context unavailable'));
        }

        ctx.drawImage(img, 0, 0, width, height);

        // Keep WebP format with 0.88 quality
        let outputType = 'image/webp';
        if (file.type === 'image/png' || file.type === 'image/svg+xml') {
          outputType = 'image/webp'; // WebP preserves transparency in modern browsers
        }

        const dataUrl = canvas.toDataURL(outputType, 0.88);
        resolve({
          dataUrl,
          filename: file.name,
          size: Math.round((dataUrl.length * 3) / 4)
        });
      };
      img.onerror = () => reject(new Error('Failed to load image file for optimization'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export const ImageUploadModal: React.FC = () => {
  const {
    activeModalImageId,
    activeModalDefaultSrc,
    closeReplaceModal,
    getImageInfo,
    getSrc,
    uploadImage,
    restoreImage,
    manifest
  } = useImageRegistry();

  const [dragActive, setDragActive] = useState(false);
  const [newImagePreview, setNewImagePreview] = useState<string | null>(null);
  const [newImageFile, setNewImageFile] = useState<{ filename: string; size: number } | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNewImagePreview(null);
    setNewImageFile(null);
    setStatusMessage(null);
  }, [activeModalImageId]);

  if (!activeModalImageId) return null;

  const info = getImageInfo(activeModalImageId);
  const currentSrc = getSrc(activeModalImageId, activeModalDefaultSrc);
  const record = manifest[activeModalImageId];
  const isCustom = Boolean(record?.currentSrc);
  const hasHistory = Boolean(record?.history && record.history.length > 0);

  const handleFileSelect = async (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      setStatusMessage({ type: 'error', text: 'Please select a valid image file (JPG, PNG, WebP, SVG, GIF).' });
      return;
    }

    try {
      setIsProcessing(true);
      setStatusMessage(null);
      const optimized = await optimizeImageFile(file);
      setNewImagePreview(optimized.dataUrl);
      setNewImageFile({ filename: optimized.filename, size: optimized.size });
    } catch (err: any) {
      console.error(err);
      setStatusMessage({ type: 'error', text: 'Failed to process image file.' });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleConfirmSave = async () => {
    if (!newImagePreview || !activeModalImageId) return;

    setIsProcessing(true);
    const success = await uploadImage(activeModalImageId, newImagePreview, newImageFile?.filename);
    setIsProcessing(false);

    if (success) {
      setStatusMessage({ type: 'success', text: 'Image successfully updated across the website!' });
      setTimeout(() => {
        closeReplaceModal();
      }, 800);
    } else {
      setStatusMessage({ type: 'error', text: 'Failed to save image replacement.' });
    }
  };

  const handleRestoreOriginal = async () => {
    if (!activeModalImageId) return;
    setIsProcessing(true);
    const success = await restoreImage(activeModalImageId, 'original');
    setIsProcessing(false);
    if (success) {
      setStatusMessage({ type: 'success', text: 'Restored original default image.' });
      setNewImagePreview(null);
      setTimeout(() => {
        closeReplaceModal();
      }, 800);
    }
  };

  const handleRestorePrevious = async () => {
    if (!activeModalImageId) return;
    setIsProcessing(true);
    const success = await restoreImage(activeModalImageId, 'previous');
    setIsProcessing(false);
    if (success) {
      setStatusMessage({ type: 'success', text: 'Restored previous version.' });
      setNewImagePreview(null);
      setTimeout(() => {
        closeReplaceModal();
      }, 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-[#030815] border border-[#D4AF37]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.2)] text-white overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#D4AF37]/30 pb-4 mb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                {info?.category || 'Website Image'}
              </span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-amber-200">
              Replace Image: {info?.title || activeModalImageId}
            </h3>
            <p className="text-xs text-white/60 font-mono">
              ID: <code className="text-amber-300/90">{activeModalImageId}</code>
            </p>
          </div>
          <button
            onClick={closeReplaceModal}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto space-y-6 pr-1 custom-scrollbar">

          {statusMessage && (
            <div className={`p-3.5 rounded-xl border flex items-center gap-2 text-sm ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-200'
                : 'bg-rose-950/60 border-rose-500/50 text-rose-200'
            }`}>
              {statusMessage.type === 'success' ? <Check className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* Side by Side Preview Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Current Image Card */}
            <div className="bg-[#071b2e]/60 border border-[#D4AF37]/30 rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-amber-300">
                <span>Current Image</span>
                {isCustom ? (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] border border-amber-500/40">
                    Custom Replace
                  </span>
                ) : (
                  <span className="text-white/40 text-[10px]">Default Asset</span>
                )}
              </div>
              <div className="relative aspect-video bg-black/60 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                <img
                  src={currentSrc}
                  alt="Current"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] text-white/50 truncate font-mono">
                {record?.originalFilename ? `File: ${record.originalFilename}` : 'Original default asset'}
              </p>
            </div>

            {/* New Image Preview Card */}
            <div className={`border rounded-xl p-4 space-y-3 transition-colors ${
              newImagePreview ? 'bg-[#071b2e]/90 border-[#D4AF37]' : 'bg-[#071b2e]/30 border-dashed border-white/20'
            }`}>
              <div className="flex items-center justify-between text-xs font-semibold text-amber-300">
                <span>New Image Preview</span>
                {newImageFile && (
                  <span className="text-[10px] text-emerald-400 font-mono">
                    {(newImageFile.size / 1024).toFixed(1)} KB (Optimized WebP)
                  </span>
                )}
              </div>
              <div className="relative aspect-video bg-black/60 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center">
                {newImagePreview ? (
                  <img
                    src={newImagePreview}
                    alt="New Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-4 space-y-2 text-white/40">
                    <ImageIcon className="w-8 h-8 mx-auto opacity-50" />
                    <p className="text-xs">No new image selected yet</p>
                  </div>
                )}
              </div>
              <p className="text-[11px] text-white/50 truncate font-mono">
                {newImageFile?.filename ? `File: ${newImageFile.filename}` : 'Drag or select image below'}
              </p>
            </div>

          </div>

          {/* Drag & Drop Upload Zone */}
          <div
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${
              dragActive
                ? 'border-[#D4AF37] bg-[#D4AF37]/10 scale-[1.01]'
                : 'border-[#D4AF37]/40 hover:border-[#D4AF37] bg-[#071b2e]/40 hover:bg-[#071b2e]/80'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  handleFileSelect(e.target.files[0]);
                }
              }}
            />
            <Upload className="w-8 h-8 text-[#D4AF37] mx-auto mb-2 animate-bounce" />
            <p className="text-sm font-medium text-amber-200">
              Drag & Drop your new image here, or <span className="underline text-[#D4AF37]">click to browse</span>
            </p>
            <p className="text-xs text-white/50 mt-1">
              Supports any filename (e.g. <code className="text-amber-300/80">IMG_3829.jpg</code>, <code className="text-amber-300/80">My Aura.png</code>). Auto-optimizes to WebP.
            </p>
          </div>

          {/* Restore Actions */}
          {(isCustom || hasHistory) && (
            <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 text-xs">
              <span className="text-white/60">Restore Options:</span>
              <div className="flex items-center gap-2">
                {hasHistory && (
                  <button
                    type="button"
                    onClick={handleRestorePrevious}
                    disabled={isProcessing}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Undo / Previous Version</span>
                  </button>
                )}
                {isCustom && (
                  <button
                    type="button"
                    onClick={handleRestoreOriginal}
                    disabled={isProcessing}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore Original Default</span>
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

        {/* Action Buttons Footer */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#D4AF37]/30 mt-4">
          <button
            type="button"
            onClick={closeReplaceModal}
            className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleConfirmSave}
            disabled={!newImagePreview || isProcessing}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-lg ${
              !newImagePreview || isProcessing
                ? 'bg-amber-500/20 text-amber-200/40 cursor-not-allowed border border-amber-500/20'
                : 'bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-600 text-[#030815] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95'
            }`}
          >
            {isProcessing ? (
              <span>Saving Image...</span>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>Save & Replace Image</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
