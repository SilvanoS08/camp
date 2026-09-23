import React, { useState, useId } from 'react';
import { Calculator, ArrowUpRight, CheckCircle, Percent, Calendar, ShieldAlert } from 'lucide-react';
import { INTEREST_FORM_URL } from '../data/content';

interface UnitOption {
  name: string;
  size: string;
  price: number;
}

const UNITS: UnitOption[] = [
  { name: "Smart Residence (1 Suíte)", size: "54m²", price: 498000 },
  { name: "Comfort Living (2 Dorms / 1 Suíte)", size: "82m²", price: 785000 },
  { name: "Prestige Family (3 Dorms / 2 Suítes)", size: "118m²", price: 1150000 },
  { name: "Penthouse Rooftop Duplex (4 Dorms)", size: "184m²", price: 1890000 },
];

export const MortgageSimulator: React.FC = () => {
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(1);
  const [downPaymentPercent, setDownPaymentPercent] = useState(25);
  const [termMonths, setTermMonths] = useState(360);

  const selectedUnit = UNITS[selectedUnitIndex];
  const unitPrice = selectedUnit.price;
  const downPaymentAmount = Math.round(unitPrice * (downPaymentPercent / 100));
  const financedAmount = unitPrice - downPaymentAmount;

  // Monthly installment estimation (SAC / Price approximate estimation ~9.5% annual rate)
  const annualRate = 0.098;
  const monthlyRate = annualRate / 12;
  const estimatedInstallment = Math.round(
    (financedAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths))
  );

  // During construction down payment installment (e.g. 36 months)
  const constructionInstallment = Math.round(downPaymentAmount / 36);

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  };

  const unitSelectId = useId();
  const downPaymentSliderId = useId();
  const termSelectId = useId();

  return (
    <section id="simulador" className="py-20 bg-[#FAF9F6] text-[#1E2522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9F7A20] font-bold">
            <span>Planejamento Financeiro Sob Medida</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Fluxo Facilitado na Obra</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0F1412] mt-3">
            Simule o fluxo de pagamento para a sua nova conquista.
          </h2>
          <p className="text-slate-600 mt-3 text-base font-light leading-relaxed">
            Tenha uma estimativa transparente das parcelas durante o período de obras e do saldo financiado com o banco da sua preferência.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="bg-white border border-[#E2DDD6] shadow-xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#E2DDD6] space-y-8">
            
            {/* 1. Choose Unit */}
            <div>
              <label htmlFor={unitSelectId} className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-3">
                1. Selecione a tipologia do apartamento
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {UNITS.map((unit, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedUnitIndex(idx)}
                    className={`p-3.5 text-left border transition-all cursor-pointer ${
                      selectedUnitIndex === idx
                        ? 'border-[#0F1412] bg-[#121614] text-white shadow-xs'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-slate-400'
                    }`}
                  >
                    <div className="text-xs font-semibold">{unit.name}</div>
                    <div className="flex items-center justify-between mt-1 text-[11px] opacity-80">
                      <span>{unit.size}</span>
                      <span className="font-bold">{formatCurrency(unit.price)}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Down payment slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={downPaymentSliderId} className="text-xs uppercase tracking-wider text-slate-500 font-bold">
                  2. Entrada facilitada durante a obra ({downPaymentPercent}%)
                </label>
                <span className="text-sm font-bold text-[#9F7A20]">
                  {formatCurrency(downPaymentAmount)}
                </span>
              </div>
              <input
                id={downPaymentSliderId}
                type="range"
                min="15"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 accent-[#0F1412] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>15% (Mínimo)</span>
                <span>25% (Recomendado)</span>
                <span>50% (Maior desconto)</span>
              </div>
            </div>

            {/* 3. Financing Term */}
            <div>
              <label htmlFor={termSelectId} className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">
                3. Prazo do financiamento bancário pós-entrega
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[180, 240, 360].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setTermMonths(term)}
                    className={`py-3 px-3 text-center border text-xs font-semibold cursor-pointer transition-colors ${
                      termMonths === term
                        ? 'border-[#0F1412] bg-[#121614] text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <div>{term / 12} anos</div>
                    <div className="text-[10px] opacity-70 font-normal">{term} meses</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Conditions note */}
            <div className="p-3.5 bg-[#FAF9F6] border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-[#9F7A20] shrink-0 mt-0.5" />
              <span>
                Possibilidade de utilizar seu <strong>FGTS</strong> na amortização da entrada ou na entrega das chaves. Aceitamos seu imóvel usado ou veículo sob avaliação prévia.
              </span>
            </div>

          </div>

          {/* Result Column */}
          <div className="lg:col-span-5 bg-[#121614] text-white p-6 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AD45] font-semibold">
                  Resumo da Simulação
                </span>
                <h3 className="text-xl font-serif font-bold text-white mt-1">
                  {selectedUnit.name}
                </h3>
                <div className="text-2xl font-serif font-bold text-[#E5C268] mt-1">
                  {formatCurrency(unitPrice)}
                </div>
              </div>

              <div className="space-y-3.5 py-4 border-y border-white/10 text-xs">
                <div className="flex justify-between items-center text-white/80">
                  <span>Entrada total na obra ({downPaymentPercent}%):</span>
                  <span className="font-semibold text-white">{formatCurrency(downPaymentAmount)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Parcela estimada na obra (36x):</span>
                  <span className="font-semibold text-[#D4AD45] text-sm">~{formatCurrency(constructionInstallment)} /mês</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Saldo devedor para financiamento:</span>
                  <span className="font-semibold text-white">{formatCurrency(financedAmount)}</span>
                </div>
                <div className="flex justify-between items-center text-white/80">
                  <span>Parcela estimada pós-chaves ({termMonths}x):</span>
                  <span className="font-semibold text-[#D4AD45] text-sm">~{formatCurrency(estimatedInstallment)} /mês</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Aprovação de crédito rápida e sem burocracia</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Assessoria bancária gratuita inclusa</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/70">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Garantia de tabela de lançamento congelada</span>
                </div>
              </div>

            </div>

            {/* Simulated Action CTA Button */}
            <div className="pt-8">
              <a
                href={INTEREST_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-sm uppercase tracking-wider transition-all duration-200 border border-[#E5C268] hover:scale-[1.02]"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[10px] text-center text-white/50 mt-2 font-light">
                *Valores estimados para fins de estudo preliminar. Sujeito à análise de crédito e tabela vigente.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
