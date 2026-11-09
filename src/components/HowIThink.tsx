import React from 'react';
import { FIELD_NOTES } from '../data/portfolioData';

export const HowIThink: React.FC = () => {
  return (
    <section id="how-i-think" className="w-full border-b border-[#D8D3C5] py-16 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#D8D3C5] pb-6 mb-12">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 bg-[#E65A2D] inline-block"></span>
            <span>APPROACH</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#141613] tracking-tight">
              How I Work
            </h2>
            <p className="font-mono-tech text-xs text-[#555953] max-w-md">
              Four principles from analytical training at IIT Madras and hands-on creator work.
            </p>
          </div>
        </div>

        {/* 2x2 Editorial Layout of Field Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FIELD_NOTES.map((note) => (
            <article
              key={note.number}
              className="border border-[#D8D3C5] bg-[#FAF8F5] p-6 sm:p-8 flex flex-col justify-between hover:border-[#141613] transition-colors"
            >
              <div>
                {/* Note Identification Tag */}
                <div className="flex items-center justify-between border-b border-[#E5E1D5] pb-3 mb-4">
                  <span className="font-mono-tech text-xs text-[#E65A2D] font-bold">{note.number}</span>
                  <span className="font-mono-tech text-[10px] text-[#8E938A] uppercase">PRINCIPLE</span>
                </div>

                {/* Title */}
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#141613] tracking-tight mb-3">
                  {note.title}
                </h3>

                {/* Thesis Highlight */}
                <div className="p-3 bg-[#F4F1EA] border-l-2 border-[#141613] mb-5">
                  <p className="font-serif-editorial italic text-base text-[#141613]">
                    "{note.thesis}"
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="space-y-3 font-sans-display text-xs sm:text-sm text-[#3E423B] leading-relaxed">
                  {note.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>

              {/* Bottom Axiom & Empirical Correlation */}
              <div className="mt-6 pt-4 border-t border-[#E5E1D5] space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech text-[10px] uppercase text-[#141613] font-bold">TAKEAWAY:</span>
                  <span className="font-sans-display text-xs text-[#E65A2D] font-medium">{note.keyPrinciple}</span>
                </div>
                <div className="font-mono-tech text-[10px] text-[#8E938A]">
                  EMPIRICAL CORRELATION: {note.metricCorrelation}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
