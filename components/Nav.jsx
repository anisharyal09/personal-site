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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'
        }`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-3 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${scrolled ? 'glass-panel' : 'bg-transparent'
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 min-[950px]:gap-3 group">
            <img src="/favicon.svg" className="w-8 h-8 min-[950px]:w-9 min-[950px]:h-9 filter drop-shadow-[0_0_8px_rgba(0,242,254,0.25)] group-hover:drop-shadow-[0_0_12px_rgba(0,242,254,0.5)] transition-all duration-300 flex-shrink-0" alt="Logo" />
            <div className="flex flex-col items-start leading-none min-[950px]:flex-row min-[950px]:items-center gap-0.5 min-[950px]:gap-1.5">
              <span className="font-mono text-xs min-[950px]:text-sm lg:text-base font-bold tracking-tight text-white group-hover:text-glow transition-all duration-300">
                ANISH SYS.
              </span>
              <div className="flex items-center gap-0.5 font-mono text-[9px] min-[950px]:text-sm">
                <span className="text-electric opacity-70 group-hover:opacity-100 transition-opacity">@</span>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  anisharyal09
                </span>
              </div>
            </div>
            <span className="w-1 h-3.5 bg-electric ml-0.5 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline-block"></span>
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

          {/* Mobile Menu Toggle & Theme Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-5 rounded-full bg-white/10 flex items-center p-0.5 border border-white/20 transition-colors hover:border-electric relative"
              title="Toggle Theme"
            >
              <div className={`w-4 h-4 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ${darkMode ? 'translate-x-5' : 'translate-x-0'}`}>
                {darkMode ? <Moon size={10} className="text-black" /> : <Sun size={10} className="text-black" />}
              </div>
            </button>
            <button
              className="text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-3 right-3 sm:left-6 sm:right-6 mt-2 glass-panel rounded-2xl overflow-hidden backdrop-blur-2xl bg-black/85 border border-white/10 shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            <motion.nav 
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05
                  }
                }
              }}
              className="flex flex-col p-3 gap-1"
            >
              {navLinks.map((link) => {
                const itemProps = {
                  className: "block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all font-mono border border-transparent hover:border-white/5",
                  onClick: () => setMenuOpen(false)
                };

                return (
                  <motion.div
                    key={link.label}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      show: { opacity: 1, x: 0 }
                    }}
                  >
                    {link.isHash ? (
                      <a
                        href={location.pathname === '/' ? link.href : `/${link.href}`}
                        {...itemProps}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        {...itemProps}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
