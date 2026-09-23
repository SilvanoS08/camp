import React, { useState } from 'react';
import { Waves, Coffee, Dumbbell, Zap, Sparkles, ShieldCheck, ArrowUpRight, Eye } from 'lucide-react';
import { AMENITIES, INTEREST_FORM_URL } from '../data/content';

interface AmenitiesProps {
  onOpenPhoto?: (src: string, title: string) => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenPhoto }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'lazer' | 'bem-estar' | 'praticidade'>('all');

  const filteredAmenities = selectedCategory === 'all'
    ? AMENITIES
    : AMENITIES.filter((a) => a.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-6 h-6 text-[#C29B38]" />;
      case 'Coffee': return <Coffee className="w-6 h-6 text-[#C29B38]" />;
      case 'Dumbbell': return <Dumbbell className="w-6 h-6 text-[#C29B38]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#C29B38]" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#C29B38]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#C29B38]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C29B38]" />;
    }
  };

  return (
    <section id="lazer" className="py-20 bg-[#121614] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D4AD45] font-semibold">
              Áreas Comuns & Resort Living
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-medium mt-2 max-w-xl">
              Um verdadeiro refúgio urbano equipado e decorado por grandes nomes do design.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm text-white/70 font-light leading-relaxed">
              Todas as áreas comuns serão entregues climatizadas, equipadas e decoradas sem taxa extra de implantação de condomínio.
            </p>
          </div>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 bg-[#181F1C] border border-white/10 inline-flex">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#C29B38] text-slate-950 font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Todos os Espaços
          </button>
          <button
            onClick={() => setSelectedCategory('lazer')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedCategory === 'lazer'
                ? 'bg-[#C29B38] text-slate-950 font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Lazer & Encontros
          </button>
          <button
            onClick={() => setSelectedCategory('bem-estar')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedCategory === 'bem-estar'
                ? 'bg-[#C29B38] text-slate-950 font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Saúde & Bem-Estar
          </button>
          <button
            onClick={() => setSelectedCategory('praticidade')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              selectedCategory === 'praticidade'
                ? 'bg-[#C29B38] text-slate-950 font-bold'
                : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Trabalho & Conveniência
          </button>
        </div>

        {/* Amenity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-[#181F1C] border border-white/10 group hover:border-[#C29B38]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image Preview */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-black/40">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181F1C] via-transparent to-transparent" />
                
                {onOpenPhoto && (
                  <button
                    onClick={() => onOpenPhoto(amenity.image, amenity.title)}
                    className="absolute top-3 right-3 p-1.5 bg-black/70 hover:bg-black text-white/90 transition-colors cursor-pointer"
                    title="Ampliar foto"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                )}

                <div className="absolute bottom-3 left-4 p-2 bg-[#121614]/90 border border-white/10 backdrop-blur-sm">
                  {getIcon(amenity.iconName)}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-[#D4AD45] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-2 font-light leading-relaxed">
                    {amenity.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D4AD45]">
                  <span>Entregue equipado e decorado</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AD45]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar below amenities */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/70 mb-4 font-light">
            Quer receber o book completo com todas as perspectivas e metragens do lazer?
          </p>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-sm transition-all duration-200 border border-[#E5C268] hover:scale-[1.02]"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
