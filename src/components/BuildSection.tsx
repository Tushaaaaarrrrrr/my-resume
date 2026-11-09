import { ArrowUpRight, Code2, Smartphone } from 'lucide-react';

export function BuildSection() {
  return (
    <section id="builds" className="build-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 build-layout">
        <div className="build-copy">
          <span className="workbench-label"><Code2 size={16} /> Engineering</span>
          <h2>From idea<br />to working<br /><em>product.</em></h2>
          <p>Websites, mobile apps, and the systems behind them. I like taking an idea out of a conversation and putting it on a screen.</p>
          <div className="build-capabilities"><span>Websites</span><span>Mobile apps</span><span>Custom builds</span></div>
          <a href="#contact">Tell me what you’re building <ArrowUpRight size={18} /></a>
        </div>
        <div className="device-scene" role="img" aria-label="A desktop monitor and mobile phone displaying original interface studies">
          <div className="device-orbit" aria-hidden="true" />
          <div className="desktop-device">
            <div className="desktop-bezel">
              <div className="device-browser"><i /><i /><i /><span>your-next-idea.site</span></div>
              <div className="desktop-interface">
                <div className="interface-nav"><strong>hello.</strong><span>Ideas, made real.</span></div>
                <div className="interface-content"><div><span>A little ambition.</span><strong>A whole<br />lot of<br /><em>possibility.</em></strong><div className="interface-button">Let’s make it happen <ArrowUpRight size={12} /></div></div><div className="interface-sculpture"><i /><i /><i /></div></div>
                <div className="interface-footer"><span>Designed with intention.</span><span>Built to work.</span></div>
              </div>
            </div>
            <div className="desktop-neck" /><div className="desktop-foot" />
          </div>
          <div className="mobile-device">
            <div className="mobile-island" />
            <div className="mobile-status"><span>9:41</span><span>● ▰</span></div>
            <div className="mobile-interface"><span>Good morning.</span><strong>Make room<br />for good ideas.</strong><div className="mobile-feature"><span>Today’s focus</span><b>Build something<br />you believe in.</b><i>↗</i></div><div className="mobile-list"><span><i /> Sketch the idea</span><span><i /> Make it work</span><span><i /> Make it feel right</span></div><div className="mobile-tabs"><span>⌂</span><span>＋</span><span>◎</span></div></div>
            <div className="mobile-home" />
          </div>
          <div className="device-caption"><Smartphone size={13} /><span>Original interface studies. Your idea goes here.</span></div>
        </div>
      </div>
    </section>
  );
}
