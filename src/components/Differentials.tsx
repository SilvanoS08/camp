import React from 'react';
import { VolumeX, BatteryCharging, Zap, Shield, Sun, Layers, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

export const Differentials: React.FC = () => {
  const items = [
    {
      icon: VolumeX,
      title: "Isolamento Acústico Superior",
      description: "Manta acústica sob o contrapiso de todos os dormitórios e salas, além de caixilhos especiais que minimizam ruídos urbanos."
    },
    {
      icon: BatteryCharging,
      title: "Vaga com Ponto de Carga Elétrica",
      description: "Infraestrutura individualizada de carregamento para veículos elétricos e híbridos em todas as vagas vinculadas."
    },
    {
      icon: Zap,
      title: "Gerador Full de Emergência",
      description: "Atende 100% das áreas comuns, elevadores e mantém funcionando pontos estratégicos de iluminação e geladeira dentro do apartamento."
    },
    {
      icon: Shield,
      title: "Segurança com Inteligência Facial",
      description: "Guarita blindada nível III-A, clausura dupla de pedestres e veículos, e biometria facial para acesso aos halls sociais."
    },
    {
      icon: Sun,
      title: "Sustentabilidade & Energia Solar",
      description: "Placas fotovoltaicas para geração de energia limpa nas áreas comuns e sistema de captação de chuva para irrigação dos jardins."
    },
    {
      icon: Layers,
      title: "Lajes Protendidas Sem Vigas",
      description: "Estrutura moderna que permite total liberdade para integrar ambientes ou reconfigurar paredes no futuro conforme suas necessidades."
    }
  ];

  return (
    <section id="diferenciais" className="py-20 bg-[#F5F2EB] text-[#1E2522] border-t border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9F7A20] font-bold">
            <span>Padrão Construtivo Impecável</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Tecnologia & Conforto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0F1412] mt-3">
            Diferenciais pensados para valorizar o seu investimento a cada dia.
          </h2>
          <p className="text-slate-600 mt-3 text-base leading-relaxed font-light">
            Da escolha dos materiais estruturais aos detalhes tecnológicos de comodidade, conheça a engenharia de alta precisão do Horizonte Jardins.
          </p>
        </div>

        {/* Grid of differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 border border-[#E2DDD6] hover:border-[#9F7A20] transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#FAF9F6] border border-[#E8E2D5] flex items-center justify-center text-[#9F7A20] mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0F1412]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Item padrão entregue</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-14 p-8 bg-[#121614] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl font-serif font-semibold text-white">
              Deseja conferir o Memorial Descritivo de Acabamentos?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Receba o documento oficial com todas as marcas de metais, louças, pedras e especificações técnicas.
            </p>
          </div>
          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-sm shrink-0 transition-colors uppercase tracking-wider"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
