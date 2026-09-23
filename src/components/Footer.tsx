import React from 'react';
import { ArrowUpRight, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0D0C] text-white/80 text-xs border-t border-white/10 pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[#C29B38] flex items-center justify-center bg-[#181F1C] text-[#D4AD45] font-serif font-bold text-base">
                H
              </div>
              <div className="font-serif text-lg font-bold tracking-wider text-white uppercase">
                Horizonte Jardins
              </div>
            </div>
            <p className="text-white/60 text-xs font-light leading-relaxed max-w-sm">
              Um empreendimento concebido para unir sofisticação contemporânea, sustentabilidade e bem-estar em uma das localizações mais cobiçadas da cidade.
            </p>
            <div className="pt-2">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-white/60">
              <li><a href="#projeto" className="hover:text-[#D4AD45] transition-colors">O Projeto</a></li>
              <li><a href="#plantas" className="hover:text-[#D4AD45] transition-colors">Plantas e Metragens</a></li>
              <li><a href="#lazer" className="hover:text-[#D4AD45] transition-colors">Lazer & Áreas Comuns</a></li>
              <li><a href="#localizacao" className="hover:text-[#D4AD45] transition-colors">Localização</a></li>
              <li><a href="#diferenciais" className="hover:text-[#D4AD45] transition-colors">Diferenciais Construtivos</a></li>
              <li><a href="#simulador" className="hover:text-[#D4AD45] transition-colors">Simulador Financeiro</a></li>
              <li><a href="#faq" className="hover:text-[#D4AD45] transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Stand & Contact */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Stand de Vendas
            </h4>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AD45] shrink-0 mt-0.5" />
                <span>Av. dos Jardins, 1.450 - Bairro Jardins</span>
              </li>
              <li>
                <span className="block font-medium text-white/80">Horário de Atendimento:</span>
                <span>Todos os dias, das 09h às 19h (inclusive sábados e domingos)</span>
              </li>
              <li>
                <span className="block font-medium text-white/80">Estacionamento:</span>
                <span>Cortesia com manobrista no local</span>
              </li>
            </ul>
          </div>

          {/* Real Estate Compliance */}
          <div>
            <h4 className="font-serif text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Garantias
            </h4>
            <ul className="space-y-2 text-white/60 text-[11px] leading-relaxed">
              <li className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Patrimônio de Afetação</span>
              </li>
              <li>Incorporação imobiliária registrada sob o R.3 da matrícula nº 184.920 no 4º Cartório de Registro de Imóveis.</li>
              <li>Intermediação credenciada: CRECI/SP nº 42.189-J.</li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-white/40 leading-relaxed space-y-2">
          <p>
            *Todas as imagens, plantas, perspectivas artísticas e fotos utilizadas nesta página são meramente ilustrativas e possuem caráter de sugestão de decoração. Os acabamentos, revestimentos e equipamentos serão entregues em conformidade estrita com o Memorial Descritivo do empreendimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-white/50">
            <div>
              © {new Date().getFullYear()} Horizonte Jardins Residencial. Todos os direitos reservados.
            </div>
            <div>
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AD45] hover:underline font-medium"
              >
                Formulário Oficial: Tenho Interesse
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
