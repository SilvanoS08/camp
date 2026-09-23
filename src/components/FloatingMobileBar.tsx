import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

export const FloatingMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 250px
      setIsVisible(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de ação rápida"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#121614]/95 backdrop-blur-md border-t border-white/15 p-3 shadow-2xl transition-transform duration-300 transform translate-y-0"
    >
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        <div className="truncate">
          <div className="text-[11px] uppercase tracking-wider text-[#D4AD45] font-semibold flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D4AD45] shrink-0" />
            <span>Tabela Zero</span>
          </div>
          <div className="text-xs font-serif font-bold text-white truncate">
            Horizonte Jardins · A partir de R$ 498k
          </div>
        </div>

        <a
          href={INTEREST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-3 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md active:scale-95 border border-[#E5C268]"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-950" />
        </a>
      </div>
    </aside>
  );
};
