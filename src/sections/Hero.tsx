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

  // Mouse spotlight effect - uses ref for smooth tracking without re-renders
  useEffect(() => {
    const heroEl = heroRef.current;
    const spotlight = spotlightRef.current;
    if (!heroEl || !spotlight) return;

    let rafId: number;
    let currentX = heroEl.offsetWidth / 2;
    let currentY = heroEl.offsetHeight / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseEnter = () => {
      const rect = heroEl.getBoundingClientRect();
      mousePos.current = {
        x: rect.width / 2,
        y: rect.height / 2
      };
    };

    const animate = () => {
      // Use mouse position directly from ref (no state lag)
      const targetX = mousePos.current.x || currentX;
      const targetY = mousePos.current.y || currentY;
      
      // Faster interpolation for more responsive following
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      
      // Enhanced spotlight with multiple layers for depth
      spotlight.style.background = `
        radial-gradient(
          1000px circle at ${currentX}px ${currentY}px,
          rgba(255, 255, 255, 0.35),
          transparent 45%
        ),
        radial-gradient(
          800px circle at ${currentX}px ${currentY}px,
          rgba(255, 255, 255, 0.2),
          transparent 35%
        ),
        radial-gradient(
          400px circle at ${currentX}px ${currentY}px,
          rgba(255, 255, 255, 0.15),
          transparent 25%
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
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, #f4d0c4 0%, #e8b8a8 25%, #d4a08c 50%, #c99480 75%, #f4d0c4 100%)',
          backgroundSize: '400% 400%',
        }}
      />

      {/* Mouse-following Spotlight Effect */}
      <div 
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-[1]"
      />

      {/* Subtle vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.08) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <p
          className={`text-lg md:text-xl text-white/90 font-light mb-4 transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
          style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
        >
          {hero.greeting}
        </p>

        {/* Main Name */}
        <h1
          className={`text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-normal text-white mb-6 leading-[0.95] tracking-[-0.03em] transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
            textShadow: '0 4px 40px rgba(0,0,0,0.15)',
            transitionDelay: '150ms',
          }}
        >
          {hero.name}
        </h1>
        
        {/* Subtitle */}
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

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '600ms' }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce" />
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
