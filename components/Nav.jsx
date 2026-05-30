import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    // Real implementation would apply a '.light' class to the body or tailwind wrapper.
    document.documentElement.classList.toggle('light-mode-active');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Stack', href: '#stack', isHash: true },
    { label: 'Projects', href: '#projects', isHash: true },
    { label: 'Education', href: '#education', isHash: true },
    { label: 'Analysis', href: '/analysis', isHash: false },
    { label: 'Content', href: '#extensions', isHash: true },
    { label: 'Contact', href: '#contact', isHash: true },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-300 ${scrolled ? 'glass-panel' : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-1 group">
            <span className="font-mono text-sm md:text-base font-bold tracking-tight text-white group-hover:text-glow transition-all duration-300">
              ANISH SYS.
            </span>
            <span className="font-mono text-electric text-sm md:text-base opacity-70 group-hover:opacity-100 transition-opacity">@</span>
            <span className="font-mono text-xs md:text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
              anisharyal09
            </span>
            <span className="w-1.5 h-4 bg-electric ml-1 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.isHash ? (
                <a
                  key={link.label}
                  href={location.pathname === '/' ? link.href : `/${link.href}`}
                  className="text-sm font-medium text-gray-400 hover:text-white hover:text-glow transition-all duration-300"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-400 hover:text-white hover:text-glow transition-all duration-300"
                >
                  {link.label}
                </Link>
              )
            ))}

            <button
              onClick={toggleTheme}
              className="ml-2 w-10 h-5 rounded-full bg-white/10 flex items-center p-0.5 border border-white/20 transition-colors hover:border-electric relative"
              title="Toggle Theme"
            >
              <div className={`w-4 h-4 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}>
                {darkMode ? <Moon size={10} className="text-black" /> : <Sun size={10} className="text-black" />}
              </div>
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-6 right-6 mt-2 glass-panel rounded-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
