import React from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2, Shield, Sparkles, MapPin, Eye } from 'lucide-react';
import { INTEREST_FORM_URL, IMAGES } from '../data/content';

interface HeroProps {
  onOpenPhoto?: (src: string, title: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhoto }) => {
  return (
    <section id="projeto" className="relative bg-[#121614] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient & Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2a3530]/40 via-[#121614] to-[#0d100e] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Copy & Primary CTAs */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Clean unboxed editorial metadata (Anti-slop rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-[#D4AD45] font-semibold">
              <span>Bairro Nobre & Privilegiado</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Lançamento Exclusivo</span>
              <span aria-hidden="true" className="text-white/30">·</span>
              <span>Obras Iniciadas</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-serif font-medium leading-[1.15] text-white">
              O privilégio de viver com <span className="italic font-serif text-[#E5C268]">horizonte livre</span> e arquitetura que inspira.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl font-light">
              Apartamentos modernos de <strong className="font-semibold text-white">54m² a 184m²</strong> com 1 a 4 dormitórios, varanda gourmet com churrasqueira a carvão e complexo de lazer com piscina de borda infinita no rooftop. Viva com máxima segurança, conforto e comodidade.
            </p>

            {/* Architectural Highlights Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10">
              <div>
                <div className="text-2xl lg:text-3xl font-serif font-bold text-[#D4AD45]">54 a 184<span className="text-sm font-sans font-normal ml-0.5">m²</span></div>
                <div className="text-xs text-white/60 mt-0.5">Área Privativa</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-serif font-bold text-[#D4AD45]">1 a 4</div>
                <div className="text-xs text-white/60 mt-0.5">Dormitórios</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-serif font-bold text-[#D4AD45]">1 a 3</div>
                <div className="text-xs text-white/60 mt-0.5">Vagas Determinadas</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-serif font-bold text-[#D4AD45]">28º</div>
                <div className="text-xs text-white/60 mt-0.5">Lazer no Rooftop</div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-base transition-all duration-200 shadow-xl shadow-amber-950/20 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] border border-[#E5C268]"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-5 h-5 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#plantas"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 hover:bg-white/10 text-white font-medium text-sm transition-colors border border-white/15"
              >
                <span>Ver Opções de Plantas</span>
                <ChevronDown className="w-4 h-4 text-white/70" />
              </a>
            </div>

            {/* Trust and status bullets */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-white/65 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AD45]" />
                <span>Condições de Tabela Zero</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AD45]" />
                <span>Stand com Decorado Aberto</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4AD45]" />
                <span>Financiamento Caixa / Itaú / Bradesco</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual & Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative group overflow-hidden border border-white/15 shadow-2xl bg-[#181F1C]">
              <img
                src={IMAGES.facade}
                alt="Fachada do Edifício Horizonte Jardins com arquitetura biofílica contemporânea"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1412] via-transparent to-transparent opacity-80" />

              {/* Top pill badge: Perspective */}
              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3 py-1.5 text-[11px] uppercase tracking-wider text-white font-medium border border-white/10 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Perspectiva Artística da Fachada</span>
              </div>

              {/* View Full Image Button */}
              {onOpenPhoto && (
                <button
                  onClick={() => onOpenPhoto(IMAGES.facade, "Perspectiva da Fachada - Horizonte Jardins")}
                  className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/85 text-white/90 hover:text-white transition-colors border border-white/15 backdrop-blur-sm cursor-pointer"
                  title="Ampliar imagem"
                >
                  <Eye className="w-4 h-4" />
                </button>
              )}

              {/* Bottom Card details */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#121614]/90 backdrop-blur-md border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[#D4AD45] uppercase tracking-wider font-semibold">
                      Pronto para Conhecer?
                    </div>
                    <div className="text-sm font-medium text-white mt-0.5">
                      Agende visita guiada ao Decorado
                    </div>
                  </div>
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-semibold text-xs transition-colors shrink-0"
                  >
                    <span>Tenho Interesse</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Floating Experience Box */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 bg-[#181F1C] border border-[#C29B38]/40 p-4 shadow-xl max-w-[240px]">
              <div className="text-[#D4AD45] text-xs font-semibold uppercase tracking-wider">
                Exclusividade
              </div>
              <div className="text-xs text-white/80 mt-1 font-light leading-relaxed">
                Apenas 4 apartamentos por andar com elevadores com biometria facial.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
