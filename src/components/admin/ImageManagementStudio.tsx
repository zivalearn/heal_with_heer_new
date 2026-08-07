import React, { useState, useMemo } from 'react';
import {
  Camera,
  Search,
  Filter,
  Lock,
  Unlock,
  RotateCcw,
  Sparkles,
  Eye,
  ArrowLeft,
  Check,
  ShieldCheck,
  Key,
  FolderOpen,
  Image as ImageIcon,
  ExternalLink
} from 'lucide-react';
import { useImageRegistry } from '../../context/ImageContext';
import { CATEGORIES, IMAGE_CATALOG, CatalogImageItem } from '../../data/imageRegistryCatalog';

export const ImageManagementStudio: React.FC<{ onBackToSite?: () => void }> = ({ onBackToSite }) => {
  const {
    manifest,
    isVisualEditMode,
    isAdminUnlocked,
    toggleVisualEditMode,
    openReplaceModal,
    restoreImage,
    unlockAdmin,
    lockAdmin,
    getImageInfo,
    getSrc
  } = useImageRegistry();

  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle PIN unlock
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pinInput.trim()) return;

    setIsVerifying(true);
    setPinError('');
    const result = await unlockAdmin(pinInput.trim());
    setIsVerifying(false);

    if (!result.success) {
      setPinError(result.error || 'Invalid Security PIN. Default pin is heer2026');
    }
  };

  // Catalog list combining catalog and dynamic items
  const catalogList = useMemo(() => {
    const baseList: CatalogImageItem[] = [...IMAGE_CATALOG];
    const dynamicIds = new Set(baseList.map(i => i.id));
    const extraItems: CatalogImageItem[] = [];

    Object.keys(manifest).forEach(id => {
      if (!dynamicIds.has(id)) {
        extraItems.push(getImageInfo(id)!);
      }
    });

    return [...baseList, ...extraItems];
  }, [manifest, getImageInfo]);

  const filteredItems = useMemo(() => {
    return catalogList.filter(item => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.id.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [catalogList, selectedCategory, searchQuery]);

  // PIN Gate Screen if not authenticated
  if (!isAdminUnlocked) {
    return (
      <div className="min-h-screen bg-[#030815] text-white flex items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Ambient Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-md bg-[#071b2e]/90 border border-[#D4AF37]/40 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.15)] backdrop-blur-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-amber-500/10 border border-[#D4AF37]/50 flex items-center justify-center mx-auto text-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <Lock className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
              ✦ RESTRICTED ACCESS ✦
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-amber-200">
              Image Management Studio
            </h2>
            <p className="text-xs text-white/70 leading-relaxed max-w-xs mx-auto">
              Please enter your Admin Security PIN to access the sanctuary image management studio.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter Security PIN (Default: heer2026)"
                className="w-full pl-10 pr-4 py-3 bg-[#030815] border border-[#D4AF37]/40 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-sm transition-all"
                autoFocus
              />
            </div>

            {pinError && (
              <p className="text-xs text-rose-400 bg-rose-950/50 border border-rose-500/30 p-2.5 rounded-lg">
                {pinError}
              </p>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-amber-400 hover:to-amber-600 text-[#030815] shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {isVerifying ? (
                <span>Verifying PIN...</span>
              ) : (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Unlock Image Studio</span>
                </>
              )}
            </button>
          </form>

          {onBackToSite && (
            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors pt-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Sanctuary Website</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030815] text-white p-4 sm:p-6 md:p-8 font-sans selection:bg-[#D4AF37] selection:text-[#030815]">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header & Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D4AF37]/30 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#D4AF37] uppercase">
                HEAL WITH HEER SANCTUARY
              </span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-amber-200">
              Image Management Studio
            </h1>
            <p className="text-xs sm:text-sm text-white/70 max-w-2xl">
              Replace, upload, preview, and manage every image across the entire website instantly without touching code or redeploying.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Visual Editing Mode Toggle */}
            <button
              type="button"
              onClick={() => toggleVisualEditMode()}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-medium transition-all shadow-md ${
                isVisualEditMode
                  ? 'bg-amber-400 text-[#030815] border-amber-300 shadow-[0_0_20px_rgba(212,175,55,0.5)] font-bold'
                  : 'bg-[#071b2e] text-amber-300 border-[#D4AF37]/40 hover:bg-[#D4AF37]/20'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Visual Edit Mode: {isVisualEditMode ? 'ON' : 'OFF'}</span>
            </button>

            {onBackToSite && (
              <button
                type="button"
                onClick={onBackToSite}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm transition-colors border border-white/10"
              >
                <Eye className="w-4 h-4" />
                <span>View Live Site</span>
              </button>
            )}

            <button
              type="button"
              onClick={lockAdmin}
              className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-500/30 text-rose-300 hover:bg-rose-900/60 transition-colors"
              title="Lock Admin Studio"
            >
              <Lock className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Visual Editing Mode Notice Banner */}
        {isVisualEditMode && (
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-[#071b2e] to-amber-500/20 border border-[#D4AF37]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-amber-200 text-xs sm:text-sm animate-fade-in shadow-[0_0_25px_rgba(212,175,55,0.2)]">
            <div className="flex items-center gap-2.5">
              <Camera className="w-5 h-5 text-[#D4AF37] shrink-0 animate-pulse" />
              <div>
                <span className="font-bold text-white">Visual Editing Mode is ACTIVE!</span>
                <p className="text-white/80 text-xs">
                  When browsing the website, hover over any image to see a floating <code className="text-amber-300 bg-black/40 px-1 py-0.5 rounded">📷 Replace Image</code> badge for instant in-context updates.
                </p>
              </div>
            </div>
            {onBackToSite && (
              <button
                onClick={onBackToSite}
                className="px-3.5 py-1.5 rounded-lg bg-[#D4AF37] text-[#030815] font-bold text-xs hover:bg-amber-300 transition-all shrink-0"
              >
                Go to Live Website
              </button>
            )}
          </div>
        )}

        {/* Controls Bar: Category Tabs & Search Input */}
        <div className="space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search images by name, page, or ID..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#071b2e]/80 border border-[#D4AF37]/40 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] text-xs sm:text-sm transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-[#030815] font-semibold shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                    : 'bg-[#071b2e]/60 text-white/70 hover:text-white hover:bg-[#071b2e]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Image Grid Catalog */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredItems.map(item => {
            const currentSrc = getSrc(item.id, item.defaultSrc);
            const isCustom = Boolean(manifest[item.id]?.currentSrc);
            const record = manifest[item.id];

            return (
              <div
                key={item.id}
                className="group relative bg-[#071b2e]/70 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] flex flex-col"
              >
                {/* Image Thumbnail Box */}
                <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-[#D4AF37]/20 flex items-center justify-center">
                  <img
                    src={currentSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Custom Replace Badge */}
                  {isCustom && (
                    <span className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-amber-500 text-[#030815] font-bold text-[10px] shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Custom Replaced</span>
                    </span>
                  )}

                  {/* Hover Quick Action */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-3 backdrop-blur-xs">
                    <button
                      type="button"
                      onClick={() => openReplaceModal(item.id, item.defaultSrc)}
                      className="px-3.5 py-2 rounded-xl bg-[#D4AF37] text-[#030815] font-bold text-xs flex items-center gap-1.5 hover:bg-amber-300 transition-all shadow-lg hover:scale-105 active:scale-95"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>Replace Image</span>
                    </button>
                  </div>
                </div>

                {/* Info Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-[#D4AF37] uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base font-medium text-amber-100 line-clamp-1" title={item.title}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
                    <code className="text-amber-300/80 truncate max-w-[140px]">{item.id}</code>
                    
                    {isCustom ? (
                      <button
                        type="button"
                        onClick={() => restoreImage(item.id, 'original')}
                        className="text-rose-300 hover:text-rose-200 flex items-center gap-1 hover:underline"
                        title="Restore to original default image"
                      >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                      </button>
                    ) : (
                      <span className="text-white/40">Default</span>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#071b2e]/40 border border-white/10 rounded-2xl space-y-3">
            <ImageIcon className="w-12 h-12 text-white/30 mx-auto" />
            <h3 className="text-lg font-serif text-amber-200">No matching images found</h3>
            <p className="text-xs text-white/60">Try searching for a different keyword or select another category tab.</p>
          </div>
        )}

      </div>
    </div>
  );
};
