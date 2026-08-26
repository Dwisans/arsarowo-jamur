import { useEffect, useRef } from 'react';

export default function useParallax(speed = 0.18) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0;
    let current = 0;
    let target = 0;

    const update = () => {
      current += (target - current) * 0.1;
      el.style.transform = `translate3d(0, ${current}px, 0)`;
      if (Math.abs(target - current) > 0.05) {
        raf = requestAnimationFrame(update);
      } else {
        raf = 0;
      }
    };

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      target = (rect.top - window.innerHeight / 2) * speed;
      if (!raf) raf = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [speed]);

  return ref;
}
