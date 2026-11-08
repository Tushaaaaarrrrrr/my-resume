import React from 'react';
import type { ViewLens } from '../types';
import { SchematicCanvas } from './SchematicCanvas';
import { ArrowDownRight, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  lens: ViewLens;
  onNavigate: (sectionId: string) => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lens, onNavigate, onOpenResumeModal }) => {
  return (
    <section className="relative w-full border-b border-[#D8D3C5] pt-10 pb-14 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header Tagline */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D8D3C5] pb-3 mb-8 text-xs font-mono-tech text-[#555953]">
          <div className="flex items-center gap-2">
            <span className="text-[#E65A2D] font-bold">VOL. 01</span>
            <span>// ARCHIVE OF NARRATIVE ARCHITECTURE & DATA SYSTEMS</span>
          </div>
          <div className="flex items-center gap-4">
            <span>IIT MADRAS [DS&A 2024–2028]</span>
            <span className="hidden sm:inline text-[#A3A7A4]">|</span>
            <span className="hidden sm:inline">GOA, INDIA</span>
          </div>
        </div>

        {/* Master Statement — Large Art-Directed Editorial Typography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <div className="lg:col-span-8">
            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl leading-[0.98] text-[#141613] tracking-tight mb-6">
              I engineer attention into <em className="italic font-normal text-[#E65A2D]">systems</em>.
              <br />
              Then I scale them with data.
            </h1>

            <p className="font-sans-display text-base sm:text-lg text-[#3E423B] max-w-2xl leading-relaxed">
              Most content is written on instinct. I approach narrative through the quantitative lens of{' '}
              <strong className="text-[#141613] font-semibold">IIT Madras Data Science</strong> and the disciplined, second-by-second pacing of{' '}
              <strong className="text-[#141613] font-semibold">Tech Burner’s Brightsoo Creator Club</strong>. The goal is simple: transform complex ideas into distribution engines that hold attention and measure reach in the millions.
            </p>
          </div>

          {/* Editorial Marginal Note Card */}
          <div className="lg:col-span-4 border border-[#D8D3C5] bg-[#FAF8F5] p-5 self-stretch flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E5E1D5] pb-2 mb-3">
                <span className="font-mono-tech text-[10px] text-[#E65A2D] uppercase tracking-wider">THESIS // 2026</span>
                <span className="font-mono-tech text-[10px] text-[#8E938A]">FIELD SPEC</span>
              </div>
              <p className="font-mono-tech text-xs text-[#282C26] leading-relaxed">
                "Ideas become hypotheses. Hypotheses become structured scripts. Scripts become algorithmic vectors. Attention is the final verified state."
              </p>
            </div>

            <div className="pt-4 border-t border-[#E5E1D5] mt-4 flex items-center justify-between">
              <span className="font-mono-tech text-[11px] text-[#555953]">VERIFIED REACH</span>
              <span className="font-serif-editorial text-2xl text-[#141613] font-semibold">Millions+</span>
            </div>
          </div>
        </div>

        {/* The Interactive Schematic Centerpiece */}
        <div className="my-6">
          <SchematicCanvas onSelectNode={onNavigate} lens={lens} />
        </div>

        {/* 3 Core Institutional Anchors / Scale Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-[#D8D3C5]">
          {/* Pillar 1 */}
          <div className="p-4 bg-[#FAF8F5] border border-[#D8D3C5] flex flex-col justify-between group hover:border-[#141613] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[10px] text-[#555953]">PILLAR 01 // FESTIVAL REACH</span>
                <span className="font-mono-tech text-[10px] text-[#E65A2D]">PARADOX IITM</span>
              </div>
              <div className="font-serif-editorial text-2xl text-[#141613]">Millions in Reach</div>
              <p className="font-sans-display text-xs text-[#555953] mt-1.5 leading-normal">
                Spearheaded the Instagram narrative strategy for IIT Madras’s flagship festival across a 40,000+ community.
              </p>
            </div>
            <a
              href="#specimens"
              className="mt-4 inline-flex items-center gap-1 font-mono-tech text-[11px] text-[#141613] group-hover:text-[#E65A2D] transition-colors"
            >
              <span>Examine Specimen 01</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 2 */}
          <div className="p-4 bg-[#FAF8F5] border border-[#D8D3C5] flex flex-col justify-between group hover:border-[#141613] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[10px] text-[#555953]">PILLAR 02 // CREATOR RIGOR</span>
                <span className="font-mono-tech text-[10px] text-[#E65A2D]">TECH BURNER</span>
              </div>
              <div className="font-serif-editorial text-2xl text-[#141613]">11M+ Standard</div>
              <p className="font-sans-display text-xs text-[#555953] mt-1.5 leading-normal">
                Drafted high-velocity video scripts and digital asset frameworks under Brightsoo Creator Club’s leadership.
              </p>
            </div>
            <a
              href="#specimens"
              className="mt-4 inline-flex items-center gap-1 font-mono-tech text-[11px] text-[#141613] group-hover:text-[#E65A2D] transition-colors"
            >
              <span>Examine Specimen 02</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Pillar 3 */}
          <div className="p-4 bg-[#FAF8F5] border border-[#D8D3C5] flex flex-col justify-between group hover:border-[#141613] transition-colors">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-tech text-[10px] text-[#555953]">PILLAR 03 // GLOBAL SCALE</span>
                <span className="font-mono-tech text-[10px] text-[#E65A2D]">GENZ & IMUN</span>
              </div>
              <div className="font-serif-editorial text-2xl text-[#141613]">114,000+ Engaged</div>
              <p className="font-sans-display text-xs text-[#555953] mt-1.5 leading-normal">
                Scaled GenZ IITian to 14K+ BS students on YouTube and engaged 100K+ global delegates for IMUN.
              </p>
            </div>
            <a
              href="#specimens"
              className="mt-4 inline-flex items-center gap-1 font-mono-tech text-[11px] text-[#141613] group-hover:text-[#E65A2D] transition-colors"
            >
              <span>Examine Specimens 03 & 04</span>
              <ArrowDownRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Quick Path Actions */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#specimens"
            className="px-5 py-2.5 bg-[#141613] text-[#F4F1EA] hover:bg-[#E65A2D] transition-colors font-mono-tech text-xs tracking-wider uppercase inline-flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore Case Dossiers</span>
          </a>

          <button
            onClick={onOpenResumeModal}
            className="px-5 py-2.5 border border-[#141613] bg-transparent text-[#141613] hover:bg-[#ECE8DD] transition-colors font-mono-tech text-xs tracking-wider uppercase inline-flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Recruiter Résumé Index</span>
          </button>
        </div>

      </div>
    </section>
  );
};
