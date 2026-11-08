import React, { useState } from 'react';

export const LabExperiments: React.FC = () => {
  // Experiment 1: Retention Simulator State
  const [hookStrength, setHookStrength] = useState<number>(85);
  const [pacingVelocity, setPacingVelocity] = useState<number>(75);
  const [payoffTiming, setPayoffTiming] = useState<number>(60);

  // Computed metrics
  const projectedSwipeLoss = Math.max(8, Math.round(100 - hookStrength * 0.9));
  const estimatedAverageWatchPercentage = Math.min(94, Math.round((hookStrength * 0.4 + pacingVelocity * 0.4 + payoffTiming * 0.2)));
  const modelSignal = estimatedAverageWatchPercentage > 75 ? 'STRONG' : estimatedAverageWatchPercentage > 60 ? 'MODERATE' : 'LOW';

  // Experiment 2: Headline tester
  const [headlineInput, setHeadlineInput] = useState<string>(
    'How 40,000 students at IIT Madras turned a campus festival into a multi-million reach event.'
  );

  return (
    <section id="lab" className="w-full border-b border-[#D8D3C5] py-16 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#D8D3C5] pb-6 mb-12">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 bg-[#E65A2D] inline-block"></span>
            <span>INDEX 03 // THE LABORATORY & INTERACTIVE PROTOTYPES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-[#141613] tracking-tight">
              Interactive Content Systems & Heuristics
            </h2>
            <p className="font-mono-tech text-xs text-[#555953] max-w-md">
              Explore story pacing and headline clarity with interactive, illustrative models.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Experiment 01: Retention Simulator (8 cols) */}
          <div className="lg:col-span-7 border border-[#D8D3C5] bg-[#F4F1EA] p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-[#D8D3C5] pb-3 mb-6">
              <span className="font-mono-tech text-xs text-[#E65A2D] font-bold">EXP // 01</span>
              <span className="font-mono-tech text-xs text-[#141613] font-semibold">RETENTION DECAY SIMULATOR</span>
            </div>

            <p className="font-sans-display text-xs sm:text-sm text-[#3E423B] mb-6">
              Adjust the story levers and watch the curve respond. This is an illustrative model, not measured campaign analytics or a performance forecast.
            </p>

            <div className="retention-plot">
              <div className="retention-plot-heading"><span>Attention over time</span><span>Illustrative model</span></div>
              <svg viewBox="0 0 600 180" role="img" aria-label={`Illustrative retention curve ending at ${estimatedAverageWatchPercentage} percent`}>
                <defs><linearGradient id="retention-fill" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#E65A2D" stopOpacity=".28" /><stop offset="1" stopColor="#E65A2D" stopOpacity="0" /></linearGradient></defs>
                <path d="M20 30H580M20 90H580M20 150H580" stroke="#D8D3C5" strokeDasharray="3 6" fill="none" />
                <path d={`M20 20 C110 ${140 - hookStrength}, 220 ${170 - pacingVelocity}, 580 ${170 - estimatedAverageWatchPercentage * 1.5} L580 165H20Z`} fill="url(#retention-fill)" />
                <path className="retention-curve" d={`M20 20 C110 ${140 - hookStrength}, 220 ${170 - pacingVelocity}, 580 ${170 - estimatedAverageWatchPercentage * 1.5}`} fill="none" stroke="#E65A2D" strokeWidth="3" />
                <circle cx="580" cy={170 - estimatedAverageWatchPercentage * 1.5} r="5" fill="#E65A2D" />
              </svg>
              <div className="retention-axis"><span>First impression</span><span>The payoff</span></div>
            </div>

            {/* Interactive Sliders */}
            <div className="space-y-5 mb-8">
              <div>
                <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                  <span className="text-[#141613]">01. First 3-Second Hook Disruptiveness</span>
                  <span className="text-[#E65A2D] font-bold">{hookStrength}%</span>
                </div>
                <input
                  type="range"
                  aria-label="Hook strength"
                  min="20"
                  max="100"
                  value={hookStrength}
                  onChange={(e) => setHookStrength(Number(e.target.value))}
                  className="w-full accent-[#E65A2D] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                  <span className="text-[#141613]">02. Information Pacing (Pattern Interrupts / 90 Frames)</span>
                  <span className="text-[#E65A2D] font-bold">{pacingVelocity}%</span>
                </div>
                <input
                  type="range"
                  aria-label="Pacing velocity"
                  min="20"
                  max="100"
                  value={pacingVelocity}
                  onChange={(e) => setPacingVelocity(Number(e.target.value))}
                  className="w-full accent-[#E65A2D] cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono-tech mb-1.5">
                  <span className="text-[#141613]">03. Payoff Delivery & Loop Closure Timing</span>
                  <span className="text-[#E65A2D] font-bold">{payoffTiming}%</span>
                </div>
                <input
                  type="range"
                  aria-label="Payoff timing"
                  min="20"
                  max="100"
                  value={payoffTiming}
                  onChange={(e) => setPayoffTiming(Number(e.target.value))}
                  className="w-full accent-[#E65A2D] cursor-pointer"
                />
              </div>
            </div>

            {/* Computed Output Readout */}
            <div className="p-4 bg-[#141613] text-[#F4F1EA] border border-[#2C302B] grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="font-mono-tech text-[10px] text-[#8E938A]">SWIPE DECAY (0-3s)</div>
                <div className="font-serif-editorial text-2xl text-[#E65A2D] mt-1">{projectedSwipeLoss}%</div>
              </div>
              <div className="border-x border-[#2C302B]">
                <div className="font-mono-tech text-[10px] text-[#8E938A]">MODEL COMPLETION</div>
                <div className="font-serif-editorial text-2xl text-white mt-1">{estimatedAverageWatchPercentage}%</div>
              </div>
              <div>
                <div className="font-mono-tech text-[10px] text-[#8E938A]">MODEL SIGNAL</div>
                <div className="font-mono-tech text-xs text-[#F4F1EA] font-bold mt-2">{modelSignal}</div>
              </div>
            </div>
          </div>

          {/* Experiment 02: Headline Cognitive Load Tester (5 cols) */}
          <div className="lg:col-span-5 border border-[#D8D3C5] bg-[#F4F1EA] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8D3C5] pb-3 mb-6">
                <span className="font-mono-tech text-xs text-[#E65A2D] font-bold">EXP // 02</span>
                <span className="font-mono-tech text-xs text-[#141613] font-semibold">HEADLINE COGNITIVE STRESS-TEST</span>
              </div>

              <p className="font-sans-display text-xs text-[#555953] mb-4">
                Test the word economy and clarity index of any copy statement in real time.
              </p>

              <textarea
                aria-label="Headline to analyze"
                value={headlineInput}
                onChange={(e) => setHeadlineInput(e.target.value)}
                rows={4}
                className="w-full p-3 font-serif-editorial text-base text-[#141613] bg-[#FAF8F5] border border-[#D8D3C5] focus:outline-none focus:border-[#141613] mb-4 resize-none"
                placeholder="Type a headline or hook..."
              />

              {/* Dynamic Analysis */}
              <div className="space-y-2 font-mono-tech text-xs text-[#3E423B]">
                <div className="flex justify-between py-1 border-b border-[#E5E1D5]">
                  <span>WORD COUNT:</span>
                  <span className="text-[#141613] font-bold">{headlineInput.trim().split(/\s+/).filter(Boolean).length} words</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5E1D5]">
                  <span>READING TIME:</span>
                  <span className="text-[#141613] font-bold">~{(headlineInput.trim().split(/\s+/).filter(Boolean).length / 3.5).toFixed(1)}s</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E5E1D5]">
                  <span>COGNITIVE LOAD:</span>
                  <span className="text-[#6B705C] font-semibold">{headlineInput.trim() === '' ? 'ADD A HEADLINE' : headlineInput.trim().split(/\s+/).length <= 20 ? 'CONCISE (20 WORDS OR FEWER)' : 'LONG (OVER 20 WORDS)'}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#D8D3C5]">
              <span className="font-mono-tech text-[10px] text-[#555953] block">
                RULE OF THUMB: Headlines with numbers + contrasting nouns produce 2.3x higher click-through on technical forums.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
