import { useEffect, useState } from 'react';
import { ArrowUpRight, Pause, Play, ScanLine } from 'lucide-react';
import { PROJECT_VISUALS } from '../data/projectVisuals';
import type { ViewLens } from '../types';
import { ProjectArtwork } from './ProjectArtwork';

export function MotionStudio({ lens, onNavigate }: {
  lens: ViewLens;
  onNavigate: (id: string) => void;
}) {
  const [scene, setScene] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [scrub, setScrub] = useState(12);
  const visual = PROJECT_VISUALS[scene];

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPlaying(!preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  return (
    <div className={`motion-studio ${playing ? 'is-playing' : ''}`}>
      <div className="studio-chrome">
        <span className="studio-dots" aria-hidden="true"><i /><i /><i /></span>
        <span>The narrative desk</span>
        <ScanLine size={14} aria-hidden="true" />
      </div>

      <div className={`studio-scene theme-${visual.theme}`}>
        <ProjectArtwork key={visual.id} theme={visual.theme} />
        <div className="studio-scene-top"><span>Concept motion study</span><span>Story / {String(scene + 1).padStart(2, '0')}</span></div>
        <div className="studio-frame" aria-hidden="true"><i /><i /><i /><i /></div>

        <div key={`${scene}-${lens}`} className="studio-type">
          <span className="studio-project">{visual.name}</span>
          {lens === 'editorial' ? (
            <p>{visual.headline[0]}<br /><em>{visual.headline[1]}</em></p>
          ) : (
            <p>Story.<br /><em>Signal. Scale.</em></p>
          )}
          <span className="studio-caption">{visual.caption}</span>
        </div>

        <div className="studio-scene-bottom">
          <div className="studio-wave" aria-hidden="true">{[9, 19, 12, 28, 16, 35, 22, 13, 30, 18, 25, 11].map((height, i) => <i key={i} style={{ height, animationDelay: `${i * -0.11}s` }} />)}</div>
          <span>An original motion study</span>
        </div>
      </div>

      <div className="studio-timeline">
        <div className="studio-transport">
          <button onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause motion' : 'Play motion'} aria-pressed={playing}>
            {playing ? <Pause size={15} /> : <Play size={15} />}
          </button>
          <span>Move the playhead. Shape the story.</span>
          <span className="studio-time">{(scrub * 0.15).toFixed(1)}s / 15s</span>
        </div>
        <div className="timeline-ruler" aria-hidden="true"><span>00:00</span><span>00:05</span><span>00:10</span><span>00:15</span></div>
        <div className="timeline-tracks">
          <div className="timeline-clips" aria-hidden="true"><span>The hook</span><span>The build</span><span>The payoff</span></div>
          <div className="timeline-audio" aria-hidden="true" />
          <div className="timeline-playhead" style={{ left: `${scrub}%` }} aria-hidden="true" />
          <input type="range" min="0" max="100" value={scrub} aria-label="Story timeline" onChange={event => {
            const value = Number(event.target.value);
            setScrub(value);
            setScene(Math.min(3, Math.floor(value / 25)));
          }} />
        </div>
      </div>

      <div className="studio-scene-picker" role="group" aria-label="Choose a project scene">
        {PROJECT_VISUALS.map((project, index) => (
          <button key={project.id} aria-label={`Preview ${project.name}`} aria-pressed={scene === index} onClick={() => { setScene(index); setScrub(index * 25 + 12); }}>
            <span className={`scene-symbol theme-${project.theme}`} aria-hidden="true">{['✳', '▧', '◎', '⊕'][index]}</span>
            <span>{['Festival', 'Creator', 'Community', 'Global'][index]}</span>
          </button>
        ))}
      </div>
      <button className="studio-case-link" onClick={() => onNavigate(visual.id)}>Inside this project <ArrowUpRight size={15} /></button>
    </div>
  );
}
