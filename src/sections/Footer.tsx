import { useEffect, useRef, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import config from '../config';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { personal, footer } = config;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} id="contact" className="bg-gray-900 text-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a href="/liyuanda/" className="inline-block text-3xl font-medium mb-4">
              {personal.logo}
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/liyuanda/" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/liyuanda/about-detail.html" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="/liyuanda/projects.html" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/liyuanda/blog.html" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-gray-500 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {personal.email}
                </a>
              </li>
              <li>
                <span className="text-gray-300 text-sm inline-flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WeChat: {personal.wechat}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`pt-8 border-t border-white/10 text-center transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-gray-500 text-sm">
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
