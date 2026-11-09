import React from 'react';
import { EXPERIENCE_ITEMS, EDUCATION, CORE_SKILLS, PERSONAL_INFO } from '../data/portfolioData';
import { Download, CheckCircle2 } from 'lucide-react';

interface ResumeSectionProps {
  onOpenPrintModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenPrintModal }) => {
  return (
    <section id="resume" className="w-full border-b border-[#D8D3C5] py-16 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D3C5] pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 bg-[#E65A2D] inline-block"></span>
              <span>EXPERIENCE & EDUCATION</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#141613] tracking-tight">
              Experience
            </h2>
          </div>

          <button
            onClick={onOpenPrintModal}
            className="px-5 py-2.5 bg-[#141613] text-[#F4F1EA] hover:bg-[#E65A2D] transition-colors font-mono-tech text-xs tracking-wider uppercase inline-flex items-center gap-2 self-start md:self-auto cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Recruiter View / Print Résumé</span>
          </button>
        </div>

        {/* Education Milestone Banner */}
        <div className="border border-[#141613] bg-[#FAF8F5] p-6 sm:p-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 bg-[#E65A2D] text-white text-[11px] font-mono-tech uppercase font-bold tracking-wider">
                  CURRENT DEGREE
                </span>
                <span className="font-mono-tech text-xs text-[#555953]">{EDUCATION.period}</span>
              </div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#141613]">
                {EDUCATION.degree}
              </h3>
              <div className="font-sans-display text-sm font-semibold text-[#141613]">
                {EDUCATION.institution} • {EDUCATION.location}
              </div>
              <p className="font-sans-display text-xs sm:text-sm text-[#3E423B] max-w-3xl leading-relaxed pt-1">
                {EDUCATION.description}
              </p>
            </div>

            <div className="shrink-0 p-4 bg-[#F4F1EA] border border-[#D8D3C5] text-xs font-mono-tech text-[#141613] space-y-1">
              <div className="text-[#8E938A] text-[10px] uppercase">KEY FOCUS AREAS:</div>
              <div>• Data Science & Computation</div>
              <div>• Algorithmic Statistics</div>
              <div>• Narrative Analytics</div>
            </div>
          </div>
        </div>

        {/* Professional Experience Chronological Ledger */}
        <div className="space-y-8 mb-16">
          <div className="font-mono-tech text-xs text-[#141613] font-bold uppercase tracking-wider pb-2 border-b border-[#D8D3C5]">
            CHRONOLOGICAL EXPERIENCE RECORD
          </div>

          <div className="divide-y divide-[#D8D3C5] border-y border-[#D8D3C5]">
            {EXPERIENCE_ITEMS.map((item) => (
              <div key={item.id} className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Meta column */}
                <div className="lg:col-span-4 font-mono-tech text-xs space-y-1">
                  <div className="text-[#555953]">{item.period}</div>
                  <div className="font-bold text-sm text-[#141613]">{item.organization}</div>
                  <div className="text-[#E65A2D] font-medium">{item.role}</div>
                  <div className="text-[11px] text-[#8E938A] pt-2">
                    <span className="font-semibold text-[#141613]">RESULT:</span> {item.verifiedMetric}
                  </div>
                </div>

                {/* Highlights column */}
                <div className="lg:col-span-8 space-y-3">
                  <ul className="space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans-display text-[#282C26] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E65A2D] shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.skillsUsed.map((skill, idx) => (
                      <span
                        key={idx}
                        className="font-mono-tech text-[10px] text-[#555953] bg-[#FAF8F5] px-2 py-0.5 border border-[#E5E1D5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Capabilities Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SKILLS.map((cat, i) => (
            <div key={i} className="p-5 border border-[#D8D3C5] bg-[#FAF8F5]">
              <div className="font-mono-tech text-[11px] uppercase text-[#E65A2D] font-bold mb-3 border-b border-[#E5E1D5] pb-2">
                {cat.category}
              </div>
              <ul className="space-y-1.5 font-sans-display text-xs text-[#3E423B]">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-[#141613] inline-block"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Languages & Location Footer */}
        <div className="mt-8 p-4 bg-[#FAF8F5] border border-[#D8D3C5] flex flex-wrap items-center justify-between gap-4 font-mono-tech text-xs text-[#555953]">
          <div className="flex items-center gap-4">
            <span className="text-[#141613] font-bold">LANGUAGES:</span>
            {PERSONAL_INFO.languages.map((lang, idx) => (
              <span key={idx}>
                {lang.name} ({lang.proficiency})
              </span>
            ))}
          </div>

          <div>
            <span className="text-[#141613] font-bold">LOCATION:</span> {PERSONAL_INFO.location} ({PERSONAL_INFO.coordinates})
          </div>
        </div>

      </div>
    </section>
  );
};
