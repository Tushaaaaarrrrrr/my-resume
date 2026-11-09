import { useEffect, useRef } from 'react';

const REVEAL = 'main section h2, main section article, main section figure, .hero-credentials, .hero-workbench > *, .build-layout > *';

/** Scroll progress bar and scroll-reveal. All skipped under reduced motion. */
export function MotionLayer() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cleanups: (() => void)[] = [];

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      bar.current?.style.setProperty('transform', `scaleX(${max > 0 ? scrollY / max : 0})`);
    };
    addEventListener('scroll', onScroll, { passive: true });
    cleanups.push(() => removeEventListener('scroll', onScroll));
    onScroll();

    const all = [...document.querySelectorAll<HTMLElement>(REVEAL)];
    const targets = all.filter(el => !all.some(o => o !== el && o.contains(el)));
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    targets.forEach((el, i) => { el.classList.add('reveal'); el.style.setProperty('--d', `${(i % 3) * 70}ms`); io.observe(el); });
    cleanups.push(() => { io.disconnect(); targets.forEach(el => el.classList.remove('reveal', 'in')); });

    return () => cleanups.forEach(c => c());
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-progress" aria-hidden="true" />
    </>
  );
}
