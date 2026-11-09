import React, { useEffect } from 'react';
import { PERSONAL_INFO, EXPERIENCE_ITEMS, EDUCATION } from '../data/portfolioData';
import { X, Printer } from 'lucide-react';

interface PrintResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintResumeModal: React.FC<PrintResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in no-print">
      <div className="relative w-full max-w-3xl max-h-[92vh] bg-white text-black border border-neutral-300 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Top Control Header (Hidden when printing) */}
        <div className="px-6 py-3 bg-[#141613] text-[#F4F1EA] flex items-center justify-between no-print border-b border-[#2C302B]">
          <div className="flex items-center gap-2 font-mono-tech text-xs">
            <span className="text-[#E65A2D] font-bold">RECRUITER DOSSIER</span>
            <span className="text-[#8E938A]">// STANDARD PRINT FORMAT</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1 bg-[#E65A2D] text-white hover:bg-[#D04A1F] transition-colors font-mono-tech text-xs uppercase flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 text-[#A3A7A4] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Printable Résumé Document Sheet */}
        <div id="printable-resume" className="p-8 sm:p-12 overflow-y-auto font-sans text-neutral-900 bg-white">
          
          {/* Header */}
          <div className="border-b-2 border-neutral-900 pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 font-serif-editorial">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              <div className="text-sm font-semibold text-neutral-700 tracking-wide">
                {PERSONAL_INFO.title}
              </div>
            </div>

            {/* Contact details */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 mt-2 font-mono-tech">
              <span>{PERSONAL_INFO.phone}</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-neutral-900 underline">{PERSONAL_INFO.email}</a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-neutral-900 underline">linkedin.com/in/laxmikant-iitm</a>
              <span>•</span>
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* About Me / Executive Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2 font-mono-tech">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Creative and detail-oriented Content Strategist and Data Science undergraduate at IIT Madras with 2+ years of experience planning, developing, and optimizing high-impact content across multiple digital platforms. Proven record scaling organic reach to millions on Instagram for Paradox IIT Madras and managing high-velocity creator scripting workflows under Tech Burner’s Brightsoo Creator Club. Experienced in audience retention modeling, cross-functional campaign execution, and timely delivery.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2 font-mono-tech">
              Education
            </h2>
            <div className="flex justify-between items-baseline text-xs sm:text-sm font-bold text-neutral-900">
              <div>{EDUCATION.institution}</div>
              <div className="font-mono-tech font-normal text-neutral-600">{EDUCATION.period}</div>
            </div>
            <div className="text-xs italic text-neutral-700">{EDUCATION.degree}</div>
          </div>

          {/* Professional Experience */}
          <div className="mb-6 space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-3 font-mono-tech">
              Professional Experience
            </h2>

            {EXPERIENCE_ITEMS.map((exp) => (
              <div key={exp.id} className="space-y-1 text-xs sm:text-sm">
                <div className="flex justify-between items-baseline font-bold text-neutral-900">
                  <div>
                    <span>{exp.role}</span> — <span className="font-semibold text-neutral-700">{exp.organization}</span>
                  </div>
                  <div className="font-mono-tech text-xs font-normal text-neutral-600">{exp.period}</div>
                </div>
                <div className="font-mono-tech text-[11px] font-semibold text-neutral-800">
                  Impact Metric: {exp.verifiedMetric}
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-1 leading-normal">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Core Competencies & Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2 font-mono-tech">
              Core Skills & Tools
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs text-neutral-800">
              <div>
                <span className="font-bold">Content Strategy:</span> Writing, Scripting, Hook Architecture, Editorial Alignment
              </div>
              <div>
                <span className="font-bold">Distribution & Media:</span> Instagram Reels, YouTube Longform, Community Outreach
              </div>
              <div>
                <span className="font-bold">Analytical Rigor:</span> Retention Modeling, Loss Function Minimization, Cohort Segmentation
              </div>
              <div>
                <span className="font-bold">Execution:</span> Project Management, Creator Sprint Workflows, Cross-Functional Alignment
              </div>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2 font-mono-tech">
              Languages
            </h2>
            <div className="text-xs text-neutral-700">
              Hindi (Native / 100%) • English (Professional Working / 99%)
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
