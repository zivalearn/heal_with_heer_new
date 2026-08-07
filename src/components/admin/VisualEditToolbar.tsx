import React, { useState } from 'react';
import { Camera, Settings, Lock, Sparkles, ChevronUp, ChevronDown, Eye } from 'lucide-react';
import { useImageRegistry } from '../../context/ImageContext';

export const VisualEditToolbar: React.FC<{ onOpenStudio: () => void }> = ({ onOpenStudio }) => {
  const { isVisualEditMode, isAdminUnlocked, toggleVisualEditMode, lockAdmin, manifest } = useImageRegistry();
  const [isCollapsed, setIsCollapsed] = useState(false);

  if (!isAdminUnlocked) return null;

  const customCount = Object.keys(manifest).length;

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans animate-fade-in select-none">
      <div className="bg-[#030815]/95 border border-[#D4AF37]/60 rounded-2xl p-3 shadow-[0_0_30px_rgba(212,175,55,0.3)] text-white backdrop-blur-md flex flex-col gap-2 min-w-[240px]">
        
        {/* Bar Header */}
        <div className="flex items-center justify-between border-b border-[#D4AF37]/30 pb-2 text-xs">
          <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Image Studio Active</span>
            {customCount > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-[#D4AF37] text-[#030815] text-[10px]">
                {customCount} custom
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCollapsed(prev => !prev)}
            className="p-1 hover:text-[#D4AF37] transition-colors"
          >
            {isCollapsed ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {!isCollapsed && (
          <div className="space-y-2 pt-1">
            {/* Toggle Visual Edit Mode */}
            <button
              type="button"
              onClick={() => toggleVisualEditMode()}
              className={`w-full py-2 px-3 rounded-xl flex items-center justify-between text-xs font-medium transition-all ${
                isVisualEditMode
                  ? 'bg-amber-400 text-[#030815] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#071b2e] text-amber-200 border border-[#D4AF37]/40 hover:bg-[#D4AF37]/20'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5" />
                <span>Hover Replace Badges</span>
              </span>
              <span className="font-mono text-[10px] uppercase font-bold">
                {isVisualEditMode ? 'ON' : 'OFF'}
              </span>
            </button>

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={onOpenStudio}
                className="flex-1 py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors flex items-center justify-center gap-1"
              >
                <Settings className="w-3 h-3 text-[#D4AF37]" />
                <span>Studio</span>
              </button>

              <button
                type="button"
                onClick={lockAdmin}
                className="py-1.5 px-2.5 rounded-lg bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-500/30 text-xs transition-colors flex items-center justify-center gap-1"
                title="Lock Admin Studio"
              >
                <Lock className="w-3 h-3" />
                <span>Lock</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
