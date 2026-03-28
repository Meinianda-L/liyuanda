import { useEffect, useRef, useState } from 'react';
import config from '../config';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { hero, theme } = config;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!heroEl || !spotlight) return;

    let rafId = 0;
    let currentX = heroEl.offsetWidth / 2;
    let currentY = heroEl.offsetHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      const rect = heroEl.getBoundingClientRect();
      mousePos.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
    };

    const animate = () => {
      const targetX = mousePos.current.x || currentX;
      const targetY = mousePos.current.y || currentY;

      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      spotlight.style.background = `
        radial-gradient(
          1100px circle at ${currentX}px ${currentY}px,
          rgba(255, 244, 232, 0.45),
          transparent 58%
        ),
        radial-gradient(
          720px circle at ${currentX}px ${currentY}px,
          rgba(237, 210, 190, 0.32),
          transparent 48%
        )
      `;

      rafId = requestAnimationFrame(animate);
    };

    heroEl.addEventListener('mousemove', handleMouseMove, { passive: true });
    heroEl.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      heroEl.removeEventListener('mousemove', handleMouseMove);
      heroEl.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(135deg, #ffcccc 0%, #f7bcbc 30%, #e9a6a6 55%, #dc9696 75%, #ffcccc 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      <div ref={spotlightRef} className="absolute inset-0 pointer-events-none z-[1]" />

      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <p
          className={`text-lg md:text-xl text-white/90 font-light mb-4 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
          style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
        >
          {hero.greeting}
        </p>

        <h1
          className={`text-6xl sm:text-7xl md:text-8xl font-normal text-white mb-6 leading-[0.95] tracking-[-0.03em] transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
            textShadow: '0 4px 40px rgba(0,0,0,0.12)',
            transitionDelay: '150ms',
          }}
        >
          {hero.name}
        </h1>

        <p
          className={`text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-[0.01em] max-w-2xl mx-auto transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 26s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
