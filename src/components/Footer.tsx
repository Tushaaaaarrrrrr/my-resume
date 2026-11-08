import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#141613] text-[#8E938A] border-t border-[#2C302B] py-12 font-mono-tech text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#2C302B]">
          
          {/* Identity */}
          <div className="space-y-2">
            <div className="font-serif-editorial text-2xl text-white">Laxmikant</div>
            <div className="text-[11px] text-[#A3A7A4]">
              Content Strategist & Narrative Architect
            </div>
            <div className="text-[10px] text-[#6B705C]">
              IIT Madras — BS Data Science & Applications
            </div>
          </div>

          {/* Typography & Design Spec */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase text-[#E65A2D] font-bold">TYPOGRAPHIC SYSTEM</div>
            <div className="text-[11px]">Display: Instrument Serif</div>
            <div className="text-[11px]">Structure: Space Grotesk</div>
            <div className="text-[11px]">Telemetry: JetBrains Mono</div>
          </div>

          {/* Architectural Principles */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase text-[#E65A2D] font-bold">SYSTEM INTEGRITY</div>
            <div className="text-[11px]">• Zero generic AI slop</div>
            <div className="text-[11px]">• No purple gradients or buzzwords</div>
            <div className="text-[11px]">• 100% verified scale & metrics</div>
          </div>

          {/* Location & Coordinates */}
          <div className="space-y-1">
            <div className="text-[10px] uppercase text-[#E65A2D] font-bold">LOCATION & TIME</div>
            <div className="text-[11px]">{PERSONAL_INFO.location}</div>
            <div className="text-[11px]">{PERSONAL_INFO.coordinates}</div>
            <div className="text-[10px] text-[#A3A7A4] pt-2">
              <button
                onClick={scrollToTop}
                className="text-white hover:text-[#E65A2D] transition-colors inline-flex items-center gap-1 underline cursor-pointer"
              >
                <span>Return to Zenith [Top]</span>
                <ArrowUp className="w-3 h-3" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6B705C]">
          <div>
            © {new Date().getFullYear()} Laxmikant. Built with architectural discipline.
          </div>
          <div className="flex items-center gap-4">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">
              {PERSONAL_INFO.email}
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
