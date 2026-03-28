import { useEffect, useRef, useState } from 'react';
import config from '../config';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const layer1Ref = useRef<HTMLDivElement>(null);
  const layer2Ref = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);
  const { hero, theme } = config;

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const heroEl = heroRef.current;
    const l1 = layer1Ref.current;
    const l2 = layer2Ref.current;
    if (!heroEl || !l1 || !l2) return;

    let raf: number;

    const mouse = { x: 0.5, y: 0.5 };
    const smooth = { x: 0.5, y: 0.5 };

    const handleMove = (e: MouseEvent) => {
      const rect = heroEl.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };

    const handleLeave = () => {
      mouse.x = 0.5;
      mouse.y = 0.5;
    };

    const animate = () => {
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      const dx = (smooth.x - 0.5);
      const dy = (smooth.y - 0.5);

      // foreground layer (stronger movement)
      l1.style.transform = `
        translate3d(${dx * 80}px, ${dy * 60}px, 0)
      `;

      // background layer (slower = depth)
      l2.style.transform = `
        translate3d(${dx * 40}px, ${dy * 30}px, 0)
      `;

      raf = requestAnimationFrame(animate);
    };

    heroEl.addEventListener('mousemove', handleMove, { passive: true });
    heroEl.addEventListener('mouseleave', handleLeave);

    raf = requestAnimationFrame(animate);

    return () => {
      heroEl.removeEventListener('mousemove', handleMove);
      heroEl.removeEventListener('mouseleave', handleLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, hsl(8, 46%, 76%) 0%, #cb8478 30%, #bf786c 55%, #b06c61 75%, #d38b7e 100%)',
        }}
      />

      {/* BACK LIGHT LAYER */}
      <div
        ref={layer2Ref}
        className="absolute inset-0 pointer-events-none z-[1]"
      >
        <div className="streak s1" />
        <div className="streak s2" />
        <div className="streak s3" />
      </div>

      {/* FRONT LIGHT LAYER */}
      <div
        ref={layer1Ref}
        className="absolute inset-0 pointer-events-none z-[2]"
      >
        <div className="streak s4" />
        <div className="streak s5" />
        <div className="streak s6" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.25) 100%)',
        }}
      />

      {/* CONTENT (restored) */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-white">
        <p
          className={`text-lg md:text-xl mb-4 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
          }`}
          style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
        >
          {hero.greeting}
        </p>

        <h1
          className={`text-6xl sm:text-7xl md:text-8xl mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
          }}
        >
          {hero.name}
        </h1>

        <p
          className={`text-xl md:text-2xl transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{
            fontFamily: theme.fontFamily.heading,
            fontStyle: 'italic',
          }}
        >
          {hero.subtitle}
        </p>
      </div>

      <style>{`
        .streak {
          position: absolute;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 240, 200, 0.35) 0%,
            rgba(255, 230, 180, 0.2) 40%,
            transparent 70%
          );
          filter: blur(50px);
          mix-blend-mode: screen;
        }

        /* elongated shapes = key difference */

        .s1 {
          width: 900px;
          height: 300px;
          top: 10%;
          left: 5%;
          transform: rotate(25deg);
        }

        .s2 {
          width: 800px;
          height: 250px;
          top: 30%;
          right: 0%;
          transform: rotate(30deg);
        }

        .s3 {
          width: 700px;
          height: 250px;
          bottom: 10%;
          left: 20%;
          transform: rotate(20deg);
        }

        .s4 {
          width: 1000px;
          height: 350px;
          top: 15%;
          left: 10%;
          transform: rotate(28deg);
        }

        .s5 {
          width: 900px;
          height: 300px;
          bottom: 5%;
          right: 10%;
          transform: rotate(32deg);
        }

        .s6 {
          width: 700px;
          height: 280px;
          top: 50%;
          left: 30%;
          transform: rotate(26deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;