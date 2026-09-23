import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';
import { FAQS, INTEREST_FORM_URL } from '../data/content';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF9F6] text-[#1E2522]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9F7A20] font-bold">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
            <span aria-hidden="true" className="text-slate-400">·</span>
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#0F1412] mt-3">
            Tudo o que você precisa saber antes de dar esse passo.
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base font-light leading-relaxed">
            Transparência total em cada etapa do seu processo de aquisição.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E2DDD6] bg-white transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#0F1412]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-none border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#121614] text-white border-[#121614]' : 'text-slate-600 bg-[#FAF9F6]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base font-light leading-relaxed border-t border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner with Tenho Interesse CTA */}
        <div className="mt-12 p-8 bg-[#181F1C] border border-white/10 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-serif font-semibold text-white">
              Ficou com alguma dúvida específica?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
              Nossa equipe de consultores imobiliários credenciados está à disposição para atendimento prioritário.
            </p>
          </div>

          <a
            href={INTEREST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C29B38] hover:bg-[#D4AD45] text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
