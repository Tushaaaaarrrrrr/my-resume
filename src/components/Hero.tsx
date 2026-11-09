import type { ViewLens } from '../types';
import { MotionStudio } from './MotionStudio';
import { ArrowDownRight, ArrowUpRight, Code2, PenTool } from 'lucide-react';

interface HeroProps {
  lens: ViewLens;
  onNavigate: (sectionId: string) => void;
  onChangeLens: (lens: ViewLens) => void;
  onOpenResumeModal: () => void;
}

export function Hero({ lens, onNavigate, onChangeLens, onOpenResumeModal }: HeroProps) {
  return (
    <section className="portfolio-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-intro-line"><span>Developer · Content strategist</span><span>Goa, India</span></div>
        <div className="hero-profile">
          <div className="hero-profile-copy">
            <h1>Software that works.<br /><em>Stories that land.</em></h1>
            <div className="brain-switch" role="group" aria-label="Explore both sides of my work">
              <button aria-pressed={lens === 'telemetry'} onClick={() => onChangeLens('telemetry')}><Code2 size={16} />Engineering</button>
              <button aria-pressed={lens === 'editorial'} onClick={() => onChangeLens('editorial')}><PenTool size={16} />Content</button>
            </div>
            <div className="brain-description" aria-live="polite">
              <p className="brain-aside">{lens === 'telemetry' ? 'Engineering' : 'Content strategy'}</p>
              <p className="hero-introduction">{lens === 'telemetry' ? 'Websites, mobile apps, and custom technical builds. From a rough idea to something you can actually use.' : 'Content strategy, scripts, and creator-led storytelling. Turning complex ideas into things people watch, share, and come back to.'}</p>
            </div>
            <div className="hero-actions">
              <a href={lens === 'editorial' ? '#specimens' : '#builds'}>{lens === 'editorial' ? 'Explore creative work' : 'Explore technical work'} <ArrowDownRight size={18} /></a>
              <button onClick={onOpenResumeModal}>Résumé <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <figure className="hero-portrait">
            <div className="portrait-image"><img src="/images/laxmikant.jpg" alt="Laxmikant standing by the sea in Goa" width="1671" height="784" fetchPriority="high" /></div>
            <figcaption><span>Laxmikant</span><span>Developer & content strategist</span></figcaption>

          </figure>
        </div>

        <div className="hero-credentials" aria-label="Selected experience">
          <span><strong>IIT Madras</strong><small>Data Science & Applications</small></span>
          <span><strong>Paradox</strong><small>Festival content strategy</small></span>
          <span><strong>Brightsoo</strong><small>Creator Club by Tech Burner</small></span>
          <span><strong>GenZ IITian / IMUN</strong><small>Community & global outreach</small></span>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[0, 1].map(n => <span key={n}>{['Websites', 'Mobile apps', 'Content strategy', 'Scripts', 'Creator-led storytelling', 'Data science', 'Community', 'Festival campaigns'].map(t => <b key={t}>{t}</b>)}</span>)}
          </div>
        </div>

        <div className="hero-workbench">
          <div className="workbench-copy">
            <span className="workbench-label">Featured</span>
            <h2>Content,<br />in motion.</h2>
            <p>How a story is structured: the hook, the build and the payoff.</p>
            <p className="workbench-instruction">Select a project and drag the timeline to preview its structure.</p>
            <a href="#lab">Try the interactive tools <ArrowDownRight size={16} /></a>
          </div>
          <MotionStudio lens={lens} onNavigate={onNavigate} />
        </div>
      </div>
    </section>
  );
}
