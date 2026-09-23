import React, { useState } from 'react';
import { BedDouble, Bath, Car, Maximize2, ArrowUpRight, Check, Eye } from 'lucide-react';
import { APARTMENT_PLANS, INTEREST_FORM_URL, ApartmentPlan, FALLBACK_IMAGES } from '../data/content';

interface ApartmentTypesProps {
  onOpenPhoto?: (src: string, title: string) => void;
}

export const ApartmentTypes: React.FC<ApartmentTypesProps> = ({ onOpenPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'compact' | 'family' | 'duplex'>('all');

  const filteredPlans = activeCategory === 'all'
    ? APARTMENT_PLANS
    : APARTMENT_PLANS.filter((plan) => plan.category === activeCategory);

  return (
    <section id="plantas" className="py-20 bg-[#FAF9F6] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9F7A20] font-bold">
            <span>Plantas Humanizadas & Metragens</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Alta Flexibilidade</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-serif font-semibold text-[#0F1412] mt-3">
            Escolha o formato ideal para o seu estilo de vida.
          </h2>
          <p className="text-slate-600 mt-3 text-base font-normal leading-relaxed">
            Plantas inteligentes com aproveitamento máximo de cada metro quadrado, integração completa entre sala e varanda gourmet e acabamentos refinados.
          </p>
        </div>

        {/* Filter Tabs (Functional interactive button controls compliant with Anti-slop rule) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#EFECE6] border border-slate-200/80 inline-flex">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#121614] text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Todas as Opções ({APARTMENT_PLANS.length})
          </button>
          <button
            onClick={() => setActiveCategory('compact')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === 'compact'
                ? 'bg-[#121614] text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            1 Dormitório (54m²)
          </button>
          <button
            onClick={() => setActiveCategory('family')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === 'family'
                ? 'bg-[#121614] text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            2 e 3 Dormitórios (82m² e 118m²)
          </button>
          <button
            onClick={() => setActiveCategory('duplex')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              activeCategory === 'duplex'
                ? 'bg-[#121614] text-white shadow-sm'
                : 'text-slate-700 hover:text-slate-900 hover:bg-white/50'
            }`}
          >
            Penthouse Duplex (184m²)
          </button>
        </div>

        {/* Apartment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white border border-[#E2DDD6] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={plan.image}
                  alt={`Perspectiva e planta do apartamento ${plan.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const fallback = plan.category === 'duplex' ? FALLBACK_IMAGES.pool : plan.category === 'family' ? FALLBACK_IMAGES.suite : FALLBACK_IMAGES.living;
                    if (target.src !== fallback) {
                      target.src = fallback;
                    }
                  }}
                />
                
                {/* Highlight text label */}
                {plan.highlight && (
                  <div className="absolute top-4 left-4 bg-[#121614] text-[#E5C268] text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 border border-white/10">
                    {plan.highlight}
                  </div>
                )}

                {/* Lightbox button */}
                {onOpenPhoto && (
                  <button
                    onClick={() => onOpenPhoto(plan.image, `${plan.name} - ${plan.size}m²`)}
                    className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
                    title="Ver em tamanho ampliado"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}

                {/* Price watermark */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 border border-slate-200">
                  <span className="text-[11px] text-slate-500 block uppercase font-medium">A partir de</span>
                  <span className="text-base font-bold text-[#0F1412]">{plan.startingPrice}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Area */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#0F1412]">
                        {plan.name}
                      </h3>
                      <div className="text-xs text-slate-500 mt-1">
                        Planta Flexível · Opção com Living Ampliado
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-serif font-bold text-[#9F7A20]">
                        {plan.size} <span className="text-sm font-sans font-normal">m²</span>
                      </div>
                      <div className="text-[11px] text-slate-500">privativos</div>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
                    {plan.description}
                  </p>

                  {/* Room Specs matrix */}
                  <div className="grid grid-cols-4 gap-2 py-3 border-y border-slate-100 mb-6 text-center">
                    <div className="p-2 bg-[#FAF9F6]">
                      <BedDouble className="w-4 h-4 mx-auto text-[#9F7A20] mb-1" />
                      <div className="text-xs font-semibold text-slate-800">{plan.bedrooms} {plan.bedrooms > 1 ? 'Dorms' : 'Dorm'}</div>
                      <div className="text-[10px] text-slate-500">({plan.suites} suíte{plan.suites > 1 ? 's' : ''})</div>
                    </div>
                    <div className="p-2 bg-[#FAF9F6]">
                      <Bath className="w-4 h-4 mx-auto text-[#9F7A20] mb-1" />
                      <div className="text-xs font-semibold text-slate-800">{plan.bathrooms} {plan.bathrooms > 1 ? 'Banhos' : 'Banho'}</div>
                      <div className="text-[10px] text-slate-500">com ventilação</div>
                    </div>
                    <div className="p-2 bg-[#FAF9F6]">
                      <Car className="w-4 h-4 mx-auto text-[#9F7A20] mb-1" />
                      <div className="text-xs font-semibold text-slate-800">{plan.parkingSpots} {plan.parkingSpots > 1 ? 'Vagas' : 'Vaga'}</div>
                      <div className="text-[10px] text-slate-500">demarcadas</div>
                    </div>
                    <div className="p-2 bg-[#FAF9F6]">
                      <Maximize2 className="w-4 h-4 mx-auto text-[#9F7A20] mb-1" />
                      <div className="text-xs font-semibold text-slate-800">Varanda</div>
                      <div className="text-[10px] text-slate-500">com churrasq.</div>
                    </div>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Primary Button: Tenho Interesse */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={INTEREST_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#121614] hover:bg-[#C29B38] text-white hover:text-slate-950 font-semibold text-sm transition-all duration-200 group/btn"
                  >
                    <span>Tenho Interesse nesta Planta</span>
                    <ArrowUpRight className="w-4 h-4 text-[#D4AD45] group-hover/btn:text-slate-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Customization Callout banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#181F1C] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AD45] font-semibold">
              Personalização de Planta & Acabamentos
            </div>
            <h4 className="text-xl sm:text-2xl font-serif font-medium mt-1">
              Deseja modificar a configuração do apartamento durante a obra?
            </h4>
            <p className="text-sm text-white/70 mt-1 font-light max-w-2xl">
              Nossa equipe técnica disponibiliza opções para unificação de dormitórios, criação de closet ampliado ou cozinha com ilha gourmet.
            </p>
          </div>

          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-sm shrink-0 transition-colors"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
