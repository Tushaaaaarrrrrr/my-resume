import React from 'react';
import type { ViewLens } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentLens: ViewLens;
  onToggleLens: (lens: ViewLens) => void;
  onOpenResumeModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentLens, onToggleLens, onOpenResumeModal }) => {
  return (
    <header className="w-full border-b border-[#D8D3C5] bg-[#F4F1EA] sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      {/* Top micro-bar: Archival registry & Live status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 border-b border-[#E5E1D5] flex flex-wrap items-center justify-between text-[11px] font-mono-tech text-[#555953]">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E65A2D] animate-pulse"></span>
            <span className="font-medium text-[#141613]">BUILDING & CREATING</span>
          </span>
          <span className="hidden md:inline text-[#A3A7A4]">//</span>
          <span className="hidden md:inline truncate">{PERSONAL_INFO.status}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span>{PERSONAL_INFO.location}</span>
          <span className="text-[#A3A7A4]">//</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#141613] hover:text-[#E65A2D] inline-flex items-center gap-0.5 underline transition-colors"
          >
            LinkedIn <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Editorial Masthead */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Name & Academic Credentials */}
        <div>
          <a href="#" className="group inline-block">
            <div className="flex items-baseline gap-2.5">
              <span className="font-serif-editorial text-3xl sm:text-4xl text-[#141613] tracking-tight group-hover:text-[#E65A2D] transition-colors">
                Laxmikant
              </span>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[#555953] bg-[#ECE8DD] px-2 py-0.5 border border-[#D8D3C5]">
                IIT Madras
              </span>
            </div>
            <p className="font-sans-display text-xs text-[#555953] tracking-wide mt-0.5">
              Websites, apps & stories worth sticking around for
            </p>
          </a>
        </div>

        {/* Navigation & Controls */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {/* Section Anchors */}
          <nav className="hidden lg:flex items-center gap-4 font-mono-tech text-xs tracking-wider text-[#555953]">
            <a href="#builds" className="hover:text-[#141613] transition-colors">Builds</a>
            <a href="#specimens" className="hover:text-[#141613] transition-colors">Creative</a>
            <a href="#how-i-think" className="hover:text-[#141613] transition-colors">Thinking</a>
            <a href="#lab" className="hover:text-[#141613] transition-colors">Lab</a>
            <a href="#resume" className="hover:text-[#141613] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#141613] transition-colors">Contact</a>
          </nav>

          {/* Dual Lens Mode Switcher */}
          <div className="flex items-center border border-[#D8D3C5] bg-[#FAF8F5] p-0.5">
            <button
              onClick={() => onToggleLens('editorial')}
              aria-pressed={currentLens === 'editorial'}
              className={`px-2.5 py-1 text-[11px] font-mono-tech uppercase transition-all ${
                currentLens === 'editorial'
                  ? 'bg-[#141613] text-[#F4F1EA] font-semibold'
                  : 'text-[#555953] hover:text-[#141613]'
              }`}
              title="Content, scripts, and creator strategy"
            >
              Right brain
            </button>
            <button
              onClick={() => onToggleLens('telemetry')}
              aria-pressed={currentLens === 'telemetry'}
              className={`px-2.5 py-1 text-[11px] font-mono-tech uppercase transition-all flex items-center gap-1 ${
                currentLens === 'telemetry'
                  ? 'bg-[#E65A2D] text-white font-semibold'
                  : 'text-[#555953] hover:text-[#141613]'
              }`}
              title="Websites, apps, and technical builds"
            >
              <span>Left brain</span>
            </button>
          </div>

          {/* Quick Résumé Drawer Button */}
          <button
            onClick={onOpenResumeModal}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-[#141613] bg-[#141613] text-[#F4F1EA] hover:bg-[#E65A2D] hover:border-[#E65A2D] transition-colors text-xs font-mono-tech"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Résumé</span>
          </button>
        </div>
      </div>
    </header>
  );
};
