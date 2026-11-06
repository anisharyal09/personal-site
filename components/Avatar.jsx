import React, { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Avatar() {
  const [footerReached, setFooterReached] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterReached(entry.isIntersecting);
    }, { threshold: 0.05 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (location.pathname !== '/' || location.hash !== '#contact') return;
    window.requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [location.pathname, location.hash]);

  if (dismissed) return null;

  return (
    <div className={`fixed right-6 z-[90] transition-[bottom] duration-300 ${footerReached ? 'bottom-20' : 'bottom-6'}`}>
      <Link
        to="/#contact"
        aria-label="Go to contact form"
        title="Go to contact form"
        className="grid h-11 w-11 place-items-center rounded-full border border-electric/30 bg-black/75 text-electric shadow-xl backdrop-blur-md transition-colors hover:bg-black"
      >
        <MessageCircle size={17} />
      </Link>
      {footerReached && (
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Hide contact shortcut"
          title="Hide contact shortcut"
          className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full border border-white/20 bg-black text-gray-300 transition-colors hover:text-white"
        >
          <X size={11} />
        </button>
      )}
    </div>
  );
}


