import { useEffect, useRef, useState } from 'react';
import config from '../config';

type Pt = { x: number; y: number; t: number; hue: number; w: number };

const MAX_AGE = 1500; // ms until a point fully dissolves

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { hero, theme } = config;

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroEl = heroRef.current;
    if (!canvas || !heroEl) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d')!;
    let rafId = 0;

    const trail: Pt[] = [];
    let hue = 200;
    let lastX = -1, lastY = -1;
    let distAccum = 0; // accumulate distance between stored points

    const setup = () => {
      canvas.width = heroEl.offsetWidth;
      canvas.height = heroEl.offsetHeight;
    };
    setup();

    const onMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (lastX < 0) {
        lastX = x; lastY = y;
        trail.push({ x, y, t: Date.now(), hue, w: 2 });
        return;
      }

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.hypot(dx, dy);

      // Hue cycles with distance — fast movement sweeps through more colours
      hue = (hue + dist * 0.6) % 360;

      // Only record a new point every ~5 px to keep the buffer lean
      distAccum += dist;
      if (distAccum >= 5) {
        const w = Math.max(2, Math.min(9, dist * 0.22));
        trail.push({ x, y, t: Date.now(), hue, w });
        distAccum = 0;
      }

      lastX = x;
      lastY = y;
    };
    heroEl.addEventListener('mousemove', onMouseMove, { passive: true });

    const draw = () => {
      const now = Date.now();

      // Evict points that have fully aged out
      while (trail.length > 0 && now - trail[0].t > MAX_AGE) trail.shift();

      // True clear — canvas is transparent where nothing is drawn
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (trail.length >= 2) {
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[Math.max(0, i - 2)];
          const p1 = trail[i - 1];
          const p2 = trail[i];
          const p3 = trail[Math.min(trail.length - 1, i + 1)];

          // Catmull-Rom control points → smooth continuous curve through all points
          const cp1x = p1.x + (p2.x - p0.x) / 6;
          const cp1y = p1.y + (p2.y - p0.y) / 6;
          const cp2x = p2.x - (p3.x - p1.x) / 6;
          const cp2y = p2.y - (p3.y - p1.y) / 6;

          // age 0 = just drawn, age 1 = about to vanish
          const age = (now - p2.t) / MAX_AGE;
          // Power curve: trail stays vivid most of its life, then dissolves quickly at the end
          const alpha = Math.pow(1 - age, 2.2);
          if (alpha <= 0.01) continue;

          const w = p2.w * alpha; // width tapers to nothing alongside opacity
          const h = p2.hue;

          // ── Outer halo ──
          ctx.save();
          ctx.globalAlpha = alpha * 0.25;
          ctx.strokeStyle = `hsl(${h},90%,58%)`;
          ctx.lineWidth = w * 5;
          ctx.shadowBlur = 20;
          ctx.shadowColor = `hsl(${h},95%,62%)`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
          ctx.stroke();
          ctx.restore();

          // ── Mid glow ──
          ctx.save();
          ctx.globalAlpha = alpha * 0.55;
          ctx.strokeStyle = `hsl(${h},88%,52%)`;
          ctx.lineWidth = w * 1.8;
          ctx.shadowBlur = 9;
          ctx.shadowColor = `hsl(${h},92%,58%)`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
          ctx.stroke();
          ctx.restore();

          // ── Bright core ──
          ctx.save();
          ctx.globalAlpha = alpha * 0.92;
          ctx.strokeStyle = `hsl(${h},85%,45%)`;
          ctx.lineWidth = Math.max(0.4, w * 0.55);
          ctx.shadowBlur = 4;
          ctx.shadowColor = `hsl(${h},90%,55%)`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }

        // ── Cursor head: small radial bloom at the live tip ──
        const tip = trail[trail.length - 1];
        if (tip && now - tip.t < 120) {
          ctx.save();
          const r = tip.w * 3.5;
          const g = ctx.createRadialGradient(tip.x, tip.y, 0, tip.x, tip.y, r);
          g.addColorStop(0,   `hsla(${tip.hue},92%,52%,0.75)`);
          g.addColorStop(0.45,`hsla(${tip.hue},90%,58%,0.28)`);
          g.addColorStop(1,   `hsla(${tip.hue},88%,62%,0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(tip.x, tip.y, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => setup();
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      heroEl.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(155deg, #ffffff 0%, #f4f8ff 55%, #ecf2ff 100%)',
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, width: '100%', height: '100%' }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto select-none">
        <p
          className={`text-[11px] tracking-[0.28em] uppercase text-gray-400 mb-5 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          {hero.greeting}
        </p>

        <h1
          className={`text-6xl sm:text-7xl md:text-8xl font-normal text-gray-900 mb-7 leading-[0.9] tracking-[-0.03em] transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
            textShadow: '0 2px 24px rgba(37,99,235,0.07)',
            transitionDelay: '150ms',
          }}
        >
          {hero.name}
        </h1>

        <p
          className={`text-base sm:text-lg text-gray-500 font-light tracking-[0.02em] max-w-lg mx-auto transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
            transitionDelay: '300ms',
          }}
        >
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
};

export default Hero;
