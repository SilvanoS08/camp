import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Empreendimento', href: '#projeto' },
    { name: 'Plantas', href: '#plantas' },
    { name: 'Lazer', href: '#lazer' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Pre-header top notification banner */}
      <div className="bg-[#121614] text-white/90 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-[#D4AD45]">Fase de Lançamento:</span>
            <span className="hidden sm:inline text-white/80">Condições de Tabela Zero & unidades com condições especiais</span>
          </div>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#E5C268] hover:text-white font-medium transition-colors cursor-pointer group"
          >
            <span>Quero atendimento VIP</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#121614]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5'
            : 'bg-[#121614] border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 text-white group">
            <div className="w-9 h-9 border border-[#C29B38]/60 flex items-center justify-center bg-[#181F1C] text-[#D4AD45] font-serif font-bold text-lg group-hover:border-[#D4AD45] transition-colors">
              H
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white uppercase group-hover:text-[#D4AD45] transition-colors">
                Horizonte Jardins
              </div>
              <div className="text-[10px] tracking-[0.2em] text-white/60 uppercase">
                Residências Exclusivas
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#D4AD45] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4AD45] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Main Action Button ("Tenho Interesse") */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-none bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] border border-[#D4AD45]/40"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-4 h-4 text-slate-950" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
            <a
              href={INTEREST_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center px-3.5 py-2 bg-[#C29B38] text-slate-950 font-semibold text-xs rounded-none border border-[#D4AD45]"
            >
              Tenho Interesse
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-none focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#121614] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base text-white/80 hover:text-[#D4AD45] hover:bg-white/5 font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-white/10">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#C29B38] text-slate-950 font-bold text-sm text-center shadow-md"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
