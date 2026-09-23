import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, ArrowUpRight, Compass } from 'lucide-react';
import { LOCATION_POINTS, INTEREST_FORM_URL } from '../data/content';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-20 bg-[#FAF9F6] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9F7A20] font-bold">
            <span>Localização & Mobilidade</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Região Nobre & Arborizada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0F1412] mt-3">
            O endereço mais desejado, onde conveniência e tranquilidade se encontram.
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed font-light">
            More a poucos passos de parques exuberantes, das melhores escolas da cidade e de um polo gastronômico cosmopolita, sem abrir mão de fácil acesso aos principais eixos corporativos.
          </p>
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Points of interest list */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {LOCATION_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border border-[#E2DDD6] hover:border-[#9F7A20] transition-colors flex items-center justify-between shadow-xs"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-none bg-[#FAF9F6] border border-slate-200 flex items-center justify-center text-[#9F7A20]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#0F1412]">{point.title}</div>
                      <div className="text-xs text-slate-500">{point.category}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#9F7A20] bg-[#F5F2EB] px-2.5 py-1 border border-[#E8E2D5]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{point.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Neighborhood quick stats */}
            <div className="p-6 bg-[#181F1C] text-white border border-white/10 mt-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#D4AD45] font-semibold">Índice de Caminhabilidade</span>
                  <div className="text-2xl font-serif font-bold text-white mt-0.5">Walk Score: 94/100</div>
                </div>
                <div className="w-12 h-12 bg-[#121614] border border-white/15 flex items-center justify-center text-[#D4AD45]">
                  <Compass className="w-6 h-6" />
                </div>
              </div>
              <p className="text-xs text-white/70 font-light leading-relaxed mb-4">
                Faça praticamente tudo a pé: padarias artesanais, farmácias, mercados gourmet e academias a menos de 300 metros da portaria.
              </p>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Stylized Architectural Map & Stand Representation */}
          <div className="lg:col-span-6 bg-[#121614] border border-white/10 p-6 sm:p-8 text-white flex flex-col justify-between relative overflow-hidden">
            
            {/* Visual background map simulation */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#C29B38_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs text-[#D4AD45] uppercase tracking-wider font-semibold">Endereço do Stand</span>
                  <h3 className="text-lg font-serif font-semibold text-white mt-1">Av. dos Jardins, 1.450</h3>
                  <p className="text-xs text-white/60">Bairro Jardins · São Paulo, SP</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 bg-emerald-950/80 text-emerald-400 text-[11px] font-medium border border-emerald-800/60">
                    Estacionamento com Valet
                  </span>
                </div>
              </div>

              {/* Graphical representation of the development location */}
              <div className="relative border border-white/15 bg-[#181F1C] p-6 rounded-none space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#C29B38] animate-ping" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">
                    Ponto Central de Alta Valorização Imobiliária
                  </span>
                </div>

                <div className="space-y-2 text-xs text-white/75 font-light">
                  <p>• Região com valorização média de <strong className="text-[#D4AD45] font-semibold">14,8% ao ano</strong> nos últimos 3 anos.</p>
                  <p>• Zoneamento estritamente residencial com preservação das copas das árvores vizinhas.</p>
                  <p>• Monitoramento perimetral integrado com a associação de moradores e segurança armada.</p>
                </div>
              </div>

              {/* Schedule visit callout */}
              <div className="p-5 bg-white/5 border border-white/10">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D4AD45] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Privacidade e Atendimento Exclusivo</h4>
                    <p className="text-xs text-white/70 mt-1 font-light">
                      Agende um horário exclusivo com nosso consultor especialista para atendimento individualizado e apresentação da maquete física.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="relative z-10 pt-6">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-sm uppercase tracking-wider transition-colors shadow-lg"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
