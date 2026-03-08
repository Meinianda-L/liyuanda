import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Folder, BookOpen } from 'lucide-react';
import config from '../config';

interface PreviewItem {
  title: string;
  description?: string;
  image: string;
  link: string;
  date?: string;
  category?: string;
}

interface PreviewSectionProps {
  type: 'projects' | 'blog';
  title: string;
  subtitle: string;
  items: PreviewItem[];
  viewAllLink: string;
  viewAllText: string;
}

const PreviewSection = ({ type, title, subtitle, items, viewAllLink, viewAllText }: PreviewSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = config;
  const Icon = type === 'projects' ? Folder : BookOpen;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={type}
      className="py-20 md:py-28"
      style={{ backgroundColor: type === 'projects' ? '#f5f0e8' : '#faf6f0' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-7 h-7" style={{ color: theme.primaryColor }} />
              <h2
                className={`text-3xl md:text-4xl font-normal text-gray-900 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ fontFamily: theme.fontFamily.heading }}
              >
                {title}
              </h2>
            </div>
            <p
              className={`text-base text-gray-600 transition-all duration-1000 delay-150 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {subtitle}
            </p>
          </div>
          <a
            href={viewAllLink}
            className={`mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium transition-all duration-500 hover:gap-3 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: theme.primaryColor, transitionDelay: '200ms' }}
          >
            {viewAllText}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Preview Cards - 2 per row */}
        {items.length === 0 ? (
          <div className="rounded-2xl bg-white/70 border border-white/60 p-8 text-center text-gray-500">
            No published {type === 'projects' ? 'projects' : 'blog posts'} yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.slice(0, 4).map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:opacity-80 transition-opacity">
                    {item.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-2 text-sm font-medium" style={{ color: theme.primaryColor }}>
                    <span>Open</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PreviewSection;
