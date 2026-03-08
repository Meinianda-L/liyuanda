import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import config from '../config';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal, navigation } = config;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation - appears on scroll */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-1 px-5 py-2.5 bg-white/90 backdrop-blur-xl rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-white/30">
          {/* Logo */}
          <a href="/" className="text-lg font-medium tracking-tight text-gray-900 px-3">
            {personal.logo}
          </a>

          <div className="w-px h-4 bg-gray-200 mx-1" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 px-3 py-1.5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-gray-200 mx-1 hidden md:block" />

          {/* Email Button */}
          <a
            href={`mailto:${personal.email}`}
            className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-full hover:bg-gray-100/50 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen 
              ? 'opacity-100 translate-y-0 pointer-events-auto' 
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          {navigation.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-gray-100 my-2" />
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
        </div>
      </nav>

      {/* Initial visible nav (transparent) */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-40 transition-all duration-700 ${
          isScrolled 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100'
        }`}
      >
        <div className="flex items-center gap-1 px-5 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/20">
          {/* Logo */}
          <a href="/" className="text-lg font-medium tracking-tight text-gray-900 px-3">
            {personal.logo}
          </a>

          <div className="w-px h-4 bg-gray-400/30 mx-1" />

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-800 hover:text-gray-900 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-px h-4 bg-gray-400/30 mx-1 hidden md:block" />

          {/* Email Button */}
          <a
            href={`mailto:${personal.email}`}
            className="hidden md:flex items-center gap-2 text-sm text-gray-800 hover:text-gray-900 px-3 py-1.5 rounded-full hover:bg-white/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
