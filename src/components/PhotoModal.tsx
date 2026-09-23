import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { INTEREST_FORM_URL, FALLBACK_IMAGES } from '../data/content';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || 'Visualização ampliada da imagem'}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative max-w-5xl w-full bg-[#121614] border border-white/20 shadow-2xl overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#181F1C]">
          <h4 className="text-white font-serif text-base sm:text-lg font-medium truncate pr-4">
            {title}
          </h4>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar visualização"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image content */}
        <div className="relative max-h-[75vh] flex items-center justify-center bg-black/50 p-2">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[70vh] w-auto object-contain mx-auto"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== FALLBACK_IMAGES.facade) {
                target.src = FALLBACK_IMAGES.facade;
              }
            }}
          />
        </div>

        {/* Footer bar */}
        <div className="p-4 bg-[#181F1C] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/60">
            Perspectiva artística meramente ilustrativa · Horizonte Jardins
          </span>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
