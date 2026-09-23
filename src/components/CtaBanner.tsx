import React from 'react';
import { ArrowUpRight, Sparkles, Check, Clock, PhoneCall, ShieldCheck } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-20 bg-[#0F1412] text-white overflow-hidden border-t border-[#C29B38]/30">
      {/* Background architectural glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-[#3a2c0c]/30 via-[#0F1412] to-[#0F1412] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Unboxed editorial status */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AD45] font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Oportunidade Limitada</span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span>Tabela Zero de Pré-Lançamento</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-medium leading-tight max-w-3xl mx-auto">
          Dê o primeiro passo para garantir a sua unidade no <span className="italic text-[#E5C268]">Horizonte Jardins</span>.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          Preencha o formulário rápido de interesse para receber o book executivo com valores, plantas detalhadas e garantir atendimento com prioridade na escolha dos melhores andares.
        </p>

        {/* Benefit Checkmarks */}
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm text-white/85">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AD45]" />
            <span>Condição exclusiva de lançamento</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AD45]" />
            <span>Convite para o Apartamento Decorado</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#D4AD45]" />
            <span>Simulação de fluxo sob medida</span>
          </div>
        </div>

        {/* Big CTA Button */}
        <div className="pt-4">
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-base sm:text-lg transition-all duration-200 shadow-2xl shadow-amber-950/40 hover:scale-105 active:scale-95 border-2 border-[#E5C268]"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <div className="flex items-center justify-center gap-2 text-xs text-white/50 mt-4 font-light">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Seus dados são 100% confidenciais e protegidos pela LGPD.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
