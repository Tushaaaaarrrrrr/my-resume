import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subjectTopic, setSubjectTopic] = useState('Content Strategy & Narrative Architecture');
  const [inquiryNotes, setInquiryNotes] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(`[Inquiry] ${subjectTopic}`)}&body=${encodeURIComponent(inquiryNotes || 'Hello Laxmikant, I explored your portfolio and would like to discuss a narrative/content strategy project.')}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="w-full border-b border-[#D8D3C5] py-16 bg-[#141613] text-[#F4F1EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="border-b border-[#2C302B] pb-6 mb-12">
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#E65A2D] uppercase tracking-wider mb-2">
            <span className="w-2 h-2 bg-[#E65A2D] inline-block"></span>
            <span>INDEX 05 // DIRECT FREQUENCY & DISPATCH</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif-editorial text-4xl sm:text-5xl text-white tracking-tight">
              Initiate a Direct Transmission
            </h2>
            <p className="font-mono-tech text-xs text-[#A3A7A4] max-w-md">
              Available for ambitious content strategy advisory, high-scale digital campaigns, and forward-looking media architectures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Coordinates & Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#262925] border border-[#3E423B] space-y-4 font-mono-tech text-xs">
              <div className="text-[10px] text-[#8E938A] uppercase tracking-wider border-b border-[#3E423B] pb-2">
                COORDINATES & VERIFIED CHANNELS
              </div>

              {/* Email */}
              <div className="flex items-center justify-between py-1">
                <span className="text-[#A3A7A4]">EMAIL:</span>
                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white hover:text-[#E65A2D] transition-colors underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 text-[#8E938A] hover:text-white cursor-pointer"
                    title="Copy email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#E65A2D]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between py-1">
                <span className="text-[#A3A7A4]">TELEPHONE:</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-white hover:text-[#E65A2D] transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between py-1">
                <span className="text-[#A3A7A4]">LINKEDIN:</span>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#E65A2D] transition-colors inline-flex items-center gap-1 underline"
                >
                  <span>in/laxmikant-iitm</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Station Location */}
              <div className="flex items-center justify-between py-1 border-t border-[#3E423B] pt-3">
                <span className="text-[#A3A7A4]">BASE OF OPERATIONS:</span>
                <span className="text-white">{PERSONAL_INFO.location}</span>
              </div>
              <div className="text-[10px] text-[#6B705C]">
                GRID: {PERSONAL_INFO.coordinates} // INDIAN STANDARD TIME (UTC+5:30)
              </div>
            </div>

            <div className="p-4 bg-[#1B1D19] border border-[#2C302B] text-xs font-mono-tech text-[#A3A7A4]">
              <span className="text-[#E65A2D] font-bold block mb-1">AVAILABILITY & CADENCE:</span>
              <span>Currently accepting high-leverage content advisory, creator script architecture sprints, and strategic media leadership roles.</span>
            </div>
          </div>

          {/* Quick Dispatch Composer (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 bg-[#262925] border border-[#3E423B]">
            <div className="flex items-center justify-between border-b border-[#3E423B] pb-3 mb-6">
              <span className="font-mono-tech text-xs text-[#E65A2D] font-bold">DISPATCH COMPOSER</span>
              <span className="font-mono-tech text-[10px] text-[#8E938A]">ONE-CLICK EMAIL DISPATCH</span>
            </div>

            <form onSubmit={handleDispatch} className="space-y-4">
              <div>
                <label className="block font-mono-tech text-xs text-[#A3A7A4] mb-1.5">
                  NATURE OF INQUIRY / SCOPE
                </label>
                <select
                  value={subjectTopic}
                  onChange={(e) => setSubjectTopic(e.target.value)}
                  className="w-full p-2.5 bg-[#141613] text-[#F4F1EA] border border-[#3E423B] font-mono-tech text-xs focus:outline-none focus:border-[#E65A2D]"
                >
                  <option value="Content Strategy & Narrative Architecture">Content Strategy & Narrative Architecture</option>
                  <option value="High-Velocity Creator Scripting Sprint">High-Velocity Creator Scripting Sprint (Tech/Product)</option>
                  <option value="Institutional / Festival Media Architecture">Institutional / Festival Media Architecture</option>
                  <option value="Full-Time / High-Growth Opportunity">Full-Time / High-Growth Opportunity</option>
                  <option value="Direct Conversation / Technical Exchange">Direct Conversation / Technical Exchange</option>
                </select>
              </div>

              <div>
                <label className="block font-mono-tech text-xs text-[#A3A7A4] mb-1.5">
                  INITIAL BRIEF / CONTEXT NOTES
                </label>
                <textarea
                  value={inquiryNotes}
                  onChange={(e) => setInquiryNotes(e.target.value)}
                  rows={4}
                  placeholder="Outline your project scope, timeline, audience parameters, or goals..."
                  className="w-full p-3 bg-[#141613] text-[#F4F1EA] border border-[#3E423B] font-mono-tech text-xs focus:outline-none focus:border-[#E65A2D] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#E65A2D] text-white hover:bg-[#D04A1F] transition-colors font-mono-tech text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Transmit Inquiry to Pay.laxmikant@gmail.com</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
