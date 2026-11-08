import { useState } from 'react';
import type { ViewLens } from './types';
import { Header } from './components/Header';
import { BuildSection } from './components/BuildSection';
import { Hero } from './components/Hero';
import { SpecimensSection } from './components/SpecimensSection';
import { HowIThink } from './components/HowIThink';
import { LabExperiments } from './components/LabExperiments';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintResumeModal } from './components/PrintResumeModal';

export function App() {
  const [currentLens, setCurrentLens] = useState<ViewLens>('editorial');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#141613] selection:bg-[#E65A2D] selection:text-white">
      {/* Editorial Navigation Masthead */}
      <Header
        currentLens={currentLens}
        onToggleLens={setCurrentLens}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Narrative Flow */}
      <main>
        {/* Hero Section with Interactive Schematic Centerpiece */}
        <Hero
          lens={currentLens}
          onChangeLens={setCurrentLens}
          onNavigate={handleNavigate}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 01 Selected Work Specimens (Paradox IITM, Tech Burner, GenZ, IMUN) */}
        <BuildSection />
        <SpecimensSection lens={currentLens} />

        {/* 02 Field Notes: How I Think */}
        <HowIThink />

        {/* 03 Laboratory & Interactive Prototypes */}
        <LabExperiments />

        {/* 04 Verified Curriculum Vitae & Career Index */}
        <ResumeSection onOpenPrintModal={() => setIsResumeModalOpen(true)} />

        {/* 05 Direct Frequency & Contact */}
        <ContactSection />
      </main>

      {/* Architectural Colophon & Details */}
      <Footer />

      {/* Recruiter Print/Save Modal */}
      <PrintResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
