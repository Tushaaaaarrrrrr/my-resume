import React, { useEffect } from 'react';
import type { ProjectSpecimen } from '../types';
import { X, ArrowRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';

interface SpecimenModalProps {
  specimen: ProjectSpecimen | null;
  onClose: () => void;
}

export const SpecimenModal: React.FC<SpecimenModalProps> = ({ specimen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (specimen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [specimen, onClose]);

  if (!specimen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#F4F1EA] border border-[#141613] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#141613] text-[#F4F1EA] flex items-center justify-between border-b border-[#2C302B]">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs text-[#E65A2D] font-bold">{specimen.number}</span>
            <span className="text-[#8E938A] font-mono-tech text-xs">// FULL CASE DOSSIER</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-[#A3A7A4] hover:text-white transition-colors"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-[#141613]">
          
          {/* Header Title Section */}
          <div className="border-b border-[#D8D3C5] pb-6">
            <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[#555953] mb-2">
              <span>{specimen.organization}</span>
              <span>•</span>
              <span>{specimen.period}</span>
              <span>•</span>
              <span className="text-[#E65A2D] font-medium">{specimen.role}</span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#141613] tracking-tight mb-2">
              {specimen.title}
            </h2>
            <p className="font-sans-display text-base text-[#555953] max-w-2xl">
              {specimen.subtitle}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {specimen.tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-mono-tech text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF8F5] border border-[#D8D3C5] text-[#282C26]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Chapter 01 — The Problem */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider">
              <span>CHAPTER 01</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">The Strategic Problem</span>
            </div>
            <p className="font-sans-display text-sm sm:text-base text-[#282C26] leading-relaxed pl-4 border-l-2 border-[#141613]">
              {specimen.chapters.problem}
            </p>
          </div>

          {/* Chapter 02 — The Constraints */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider">
              <span>CHAPTER 02</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">The Practical Constraints</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4">
              {specimen.chapters.constraints.map((c, i) => (
                <div key={i} className="p-3 bg-[#FAF8F5] border border-[#D8D3C5] flex items-start gap-2 text-xs font-sans-display text-[#3E423B]">
                  <AlertCircle className="w-3.5 h-3.5 text-[#E65A2D] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 03 — The Approach */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider">
              <span>CHAPTER 03</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">Editorial Reasoning & Direction</span>
            </div>
            <p className="font-sans-display text-sm sm:text-base text-[#282C26] leading-relaxed pl-4 border-l-2 border-[#E65A2D]">
              {specimen.chapters.approach}
            </p>
          </div>

          {/* Chapter 04 — The System Architecture */}
          <div className="space-y-2 bg-[#FAF8F5] p-5 border border-[#D8D3C5]">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-1">
              <span>CHAPTER 04</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">The Content System Architecture</span>
            </div>
            <p className="font-sans-display text-sm text-[#282C26] leading-relaxed">
              {specimen.chapters.systemArchitecture}
            </p>
          </div>

          {/* Chapter 05 — The Engineering & Scripting Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider">
              <span>CHAPTER 05</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">Execution Mechanics</span>
            </div>
            <ul className="space-y-2 pl-4">
              {specimen.chapters.engineeringDetails.map((det, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans-display text-[#3E423B]">
                  <ArrowRight className="w-3.5 h-3.5 text-[#E65A2D] shrink-0 mt-0.5" />
                  <span>{det}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Chapter 06 — Outcomes & Verified Scale */}
          <div className="space-y-3 p-5 bg-[#FAF8F5] border-l-4 border-l-[#E65A2D] border border-[#D8D3C5]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[#141613] font-bold">CHAPTER 06 // VERIFIED OUTCOMES</span>
              </div>
              <span className="font-mono-tech text-xs font-bold text-[#E65A2D]">{specimen.scaleMetric}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {specimen.chapters.outcomes.map((out, i) => (
                <div key={i} className="p-3 bg-white border border-[#D8D3C5] text-xs font-sans-display text-[#141613] flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#6B705C] shrink-0 mt-0.5" />
                  <span>{out}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chapter 07 — The Honest Retrospective */}
          <div className="space-y-2 border-t border-[#D8D3C5] pt-6">
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#555953] uppercase tracking-wider">
              <span>CHAPTER 07</span>
              <span>//</span>
              <span className="text-[#141613] font-bold">Retrospective ("What I'd change today")</span>
            </div>
            <p className="font-sans-display text-sm text-[#555953] italic pl-4 border-l-2 border-[#D8D3C5] leading-relaxed">
              "{specimen.chapters.retrospective}"
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#D8D3C5] flex items-center justify-between">
          <span className="font-mono-tech text-xs text-[#555953]">
            {specimen.title} // End of Dossier
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#141613] text-[#F4F1EA] text-xs font-mono-tech uppercase hover:bg-[#E65A2D] transition-colors"
          >
            Close Dossier [ESC]
          </button>
        </div>

      </div>
    </div>
  );
};
