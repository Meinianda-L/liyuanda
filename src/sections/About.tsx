import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import config from '../config';

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { about, theme } = config;

  const imagePairs = Array.from({ length: Math.floor(about.images.length / 2) }, (_, index) => ({
    left: about.images[index * 2],
    right: about.images[index * 2 + 1],
  }));

  const hasImages = imagePairs.length > 0;

  useEffect(() => {
    if (!hasImages) return;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalTravel = rect.height + viewportHeight;
      const current = viewportHeight - rect.top;
      const progress = clamp(current / totalTravel, 0, 1);
      setScrollProgress(progress);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [hasImages]);

  const getPairProgress = (pairIndex: number) => {
    if (imagePairs.length === 0) return 0;

    const segment = 1 / imagePairs.length;
    const start = pairIndex * segment;
    const end = (pairIndex + 1) * segment;
    const local = clamp((scrollProgress - start) / (end - start), 0, 1);
    return local;
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative"
      style={{
        backgroundColor: '#faf6f0',
        height: hasImages ? `${imagePairs.length * 120}vh` : '100vh',
      }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center" style={{ backgroundColor: '#faf6f0' }}>
        {hasImages && imagePairs.map((pair, pairIndex) => {
          const pairProgress = getPairProgress(pairIndex);
          const size = 0.85 + pairProgress * 0.15;
          const offset = (1 - pairProgress) * 48;
          const fadeOutStart = 0.72;
          const opacity =
            pairProgress < fadeOutStart
              ? clamp(pairProgress / 0.2, 0, 1)
              : clamp(1 - (pairProgress - fadeOutStart) / (1 - fadeOutStart), 0, 1);

          return (
            <div key={pairIndex} className="absolute inset-0 pointer-events-none" style={{ zIndex: pairIndex + 1 }}>
              <div
                className="absolute left-8 md:left-16 lg:left-24 top-1/2 w-44 md:w-60 lg:w-80 transition-all duration-300"
                style={{
                  opacity,
                  transform: `translateY(-50%) translateX(${-offset}px) scale(${size})`,
                  willChange: 'opacity, transform',
                }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={pair.left.src}
                    alt={pair.left.alt}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
                  />
                </div>
              </div>

              <div
                className="absolute right-8 md:right-16 lg:right-24 top-1/2 w-40 md:w-52 lg:w-72 transition-all duration-300"
                style={{
                  opacity,
                  transform: `translateY(-50%) translateX(${offset}px) scale(${size})`,
                  willChange: 'opacity, transform',
                }}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={pair.right.src}
                    alt={pair.right.alt}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'auto', transform: 'translateZ(0)' }}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="relative z-20 max-w-xl mx-auto px-6 text-center">
          <span className="block text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">
            {about.sectionTitle}
          </span>

          <h2
            className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 leading-[1.5] mb-10"
            style={{ fontFamily: theme.fontFamily.heading }}
          >
            {about.shortDescription}
          </h2>

          <a
            href={about.ctaButton.href}
            className="inline-flex items-center gap-3 px-8 py-4 text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{ backgroundColor: theme.primaryColor }}
          >
            {about.ctaButton.text}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
