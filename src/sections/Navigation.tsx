import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import config from '../config';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal, navigation } = config;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-90 -translate-y-1'
      }`}
    >
      <div className="flex items-center gap-1 px-5 py-2.5 bg-white/90 backdrop-blur-xl rounded-full shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-white/30">
        <Link to="/" className="text-lg font-medium tracking-tight text-gray-900 px-3">
          {personal.logo}
        </Link>

        <div className="w-px h-4 bg-gray-200 mx-1" />

        <div className="hidden md:flex items-center gap-1">
          {navigation.links.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm px-3 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'text-gray-900 bg-gray-100/70'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100/50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="w-px h-4 bg-gray-200 mx-1 hidden md:block" />

        <a
          href={`mailto:${personal.email}`}
          className="hidden md:flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 px-3 py-1.5 rounded-full hover:bg-gray-100/50 transition-all"
        >
          Email
        </a>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="text-sm font-medium text-gray-700">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>
      </div>

      <div
        className={`md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 py-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/20 overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {navigation.links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) =>
              `block px-6 py-2.5 text-sm transition-colors ${
                isActive ? 'text-gray-900 bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`
            }
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <div className="border-t border-gray-100 my-2" />
        <a
          href={`mailto:${personal.email}`}
          className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Email Me
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
