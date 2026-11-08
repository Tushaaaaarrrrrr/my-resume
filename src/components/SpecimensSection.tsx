import React, { useState } from 'react';
import type { ViewLens, ProjectSpecimen } from '../types';
import { PROJECT_VISUALS } from '../data/projectVisuals';
import { SPECIMENS } from '../data/portfolioData';
import { SpecimenModal } from './SpecimenModal';
import { ProjectArtwork } from './ProjectArtwork';
import { FileSearch, Sparkles, Activity, ArrowUpRight } from 'lucide-react';

interface SpecimensSectionProps {
  lens: ViewLens;
}

export const SpecimensSection: React.FC<SpecimensSectionProps> = ({ lens }) => {
  const [selectedSpecimen, setSelectedSpecimen] = useState<ProjectSpecimen | null>(null);

  return (
    <section id="specimens" className="w-full border-b border-[#D8D3C5] py-16 bg-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#D8D3C5] pb-6 mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-2">
              <span className="w-2 h-2 bg-[#E65A2D] inline-block"></span>
              <span>THE RIGHT-BRAIN DEPARTMENT // CREATIVE WORK</span>
            </div>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#141613] tracking-tight">
              Four Case Studies in Narrative Scale
            </h2>
          </div>

          <div className="font-mono-tech text-xs text-[#555953] max-w-sm">
            {lens === 'editorial' ? (
              <span className="flex items-center gap-1.5 text-[#141613]">
                <Sparkles className="w-3.5 h-3.5 text-[#E65A2D]" />
                <span>Showing Editorial Lens: Hook craft, tone calibration, and script architecture.</span>
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-[#E65A2D]">
                <Activity className="w-3.5 h-3.5 text-[#E65A2D]" />
                <span>Showing Telemetry Lens: Retention loss functions, algorithmic vectors, and verified numbers.</span>
              </span>
            )}
          </div>
        </div>

        {/* The 4 Specimen Dossiers */}
        <div className="space-y-12">
          {SPECIMENS.map((specimen, index) => (
            <article
              key={specimen.id}
              id={specimen.id}
              className="specimen-card border border-[#D8D3C5] bg-[#FAF8F5] relative transition-all hover:border-[#141613]"
            >
              <a className={`project-cover theme-${PROJECT_VISUALS[index].theme}`} href={PROJECT_VISUALS[index].link} target="_blank" rel="noopener noreferrer" aria-label={PROJECT_VISUALS[index].linkLabel}>
                <ProjectArtwork theme={PROJECT_VISUALS[index].theme} />
                <div className="project-cover-top"><span>{specimen.title}</span><ArrowUpRight size={22} /></div>
                <div className="project-cover-title font-serif-editorial">{PROJECT_VISUALS[index].headline.join(' ')}</div>
                <div className="project-cover-bottom"><span>{PROJECT_VISUALS[index].linkLabel}</span><span>Original graphic study</span></div>
              </a>
              <div className="p-6 sm:p-10">
              {/* Specimen Index Header Bar */}
              <div className="flex flex-wrap items-center justify-between border-b border-[#E5E1D5] pb-4 mb-6 text-xs font-mono-tech text-[#555953] gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-[#141613] text-[#F4F1EA] font-semibold text-[11px]">
                    {specimen.number}
                  </span>
                  <span className="text-[#141613] font-medium">{specimen.organization}</span>
                  <span className="text-[#A3A7A4]">//</span>
                  <span>{specimen.period}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#E65A2D] font-bold">{specimen.scaleMetric}</span>
                  <span className="text-[#A3A7A4]">•</span>
                  <span>{specimen.scaleLabel}</span>
                </div>
              </div>

              {/* Title & Core Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                <div className="lg:col-span-8">
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#141613] tracking-tight mb-2">
                    {specimen.title}
                  </h3>
                  <div className="font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-4">
                    ROLE: {specimen.role}
                  </div>
                  <p className="font-sans-display text-sm sm:text-base text-[#282C26] leading-relaxed">
                    {specimen.summary}
                  </p>
                </div>

                <div className="lg:col-span-4 bg-[#F4F1EA] border border-[#D8D3C5] p-4 text-xs font-mono-tech space-y-2">
                  <div className="text-[10px] uppercase text-[#8E938A] border-b border-[#E5E1D5] pb-1">
                    VERIFIED PARAMETERS
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#555953]">COHORT:</span>
                    <span className="text-[#141613] font-medium">{specimen.telemetryLens.audienceCohort.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#555953]">IMPACT:</span>
                    <span className="text-[#E65A2D] font-semibold">{specimen.scaleMetric}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#555953]">STATUS:</span>
                    <span className="text-[#6B705C] font-semibold">VERIFIED</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Lens View Container */}
              {lens === 'editorial' ? (
                /* EDITORIAL CRAFT VIEW */
                <div className="bg-[#F4F1EA] border border-[#D8D3C5] p-5 sm:p-6 mb-6">
                  <div className="flex items-center justify-between border-b border-[#D8D3C5] pb-2 mb-4">
                    <span className="font-mono-tech text-xs text-[#141613] font-bold flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#E65A2D]" />
                      EDITORIAL CRAFT & NARRATIVE ARCHITECTURE
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#555953]">TONE: {specimen.editorialLens.narrativeTone}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono-tech text-[11px] text-[#E65A2D] uppercase mb-1">
                        Script Excerpt // Audio / Hook
                      </div>
                      <blockquote className="font-serif-editorial text-lg sm:text-xl text-[#141613] italic leading-snug border-l-2 border-[#141613] pl-3 py-1 bg-[#FAF8F5]">
                        {specimen.editorialLens.editorialExcerpt}
                      </blockquote>
                      <p className="font-sans-display text-xs text-[#555953] mt-2">
                        {specimen.editorialLens.hookConcept}
                      </p>
                    </div>

                    <div className="space-y-3 font-sans-display text-xs text-[#3E423B]">
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase text-[#141613] block font-semibold">
                          Pacing & Script Technique:
                        </span>
                        <p className="mt-0.5">{specimen.editorialLens.scriptTechnique}</p>
                      </div>
                      <div>
                        <span className="font-mono-tech text-[10px] uppercase text-[#141613] block font-semibold">
                          Audience Psychology Model:
                        </span>
                        <p className="mt-0.5">{specimen.editorialLens.audiencePsychology}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* TELEMETRY X-RAY VIEW */
                <div className="bg-[#141613] text-[#F4F1EA] border border-[#2C302B] p-5 sm:p-6 mb-6">
                  <div className="flex items-center justify-between border-b border-[#2C302B] pb-2 mb-4">
                    <span className="font-mono-tech text-xs text-[#E65A2D] font-bold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      DATA SCIENCE & ALGORITHMIC TELEMETRY
                    </span>
                    <span className="font-mono-tech text-[10px] text-[#A3A7A4]">{specimen.telemetryLens.reachVector}</span>
                  </div>

                  {/* Telemetry Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                    {specimen.telemetryLens.quantifiableGains.map((gain, i) => (
                      <div key={i} className="p-3 bg-[#262925] border border-[#3E423B]">
                        <div className="font-mono-tech text-[10px] text-[#A3A7A4]">{gain.label}</div>
                        <div className="font-serif-editorial text-2xl text-white font-medium mt-0.5">{gain.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#2C302B] pt-3 text-xs font-mono-tech text-[#D8D3C5]">
                    <div className="text-[#E65A2D] font-medium mb-1">RETENTION DECAY INSIGHT:</div>
                    <p className="text-[#A3A7A4]">{specimen.telemetryLens.retentionInsight}</p>
                  </div>
                </div>
              )}

              {/* Action: Open Complete 6-Chapter Dossier */}
              <div className="flex flex-wrap items-center justify-between pt-4 border-t border-[#E5E1D5] gap-4">
                <div className="flex flex-wrap gap-2">
                  {specimen.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="font-mono-tech text-[10px] uppercase tracking-wider text-[#555953] bg-[#F4F1EA] px-2 py-0.5 border border-[#D8D3C5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedSpecimen(specimen)}
                  className="px-4 py-2 bg-[#141613] text-[#F4F1EA] hover:bg-[#E65A2D] transition-colors font-mono-tech text-xs tracking-wider uppercase inline-flex items-center gap-2"
                >
                  <FileSearch className="w-3.5 h-3.5" />
                  <span>Inspect Full Dossier [7 Chapters]</span>
                </button>
              </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Deep Dossier Modal */}
      <SpecimenModal specimen={selectedSpecimen} onClose={() => setSelectedSpecimen(null)} />
    </section>
  );
};
