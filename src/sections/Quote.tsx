import { useEffect, useRef, useState } from 'react';
import config from '../config';

const Quote = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { quote, theme } = config;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: '#f5f0e8' }}
    >
      {/* Subtle background decoration */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, ${theme.primaryColor}20 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <blockquote
          className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p
            className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 leading-[1.4] tracking-[-0.01em] mb-8"
            style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
          >
            "{quote.text}"
          </p>
          <footer
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <cite 
              className="text-base text-gray-500 not-italic"
              style={{ fontFamily: theme.fontFamily.heading, fontStyle: 'italic' }}
            >
              — {quote.author}
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quote;
