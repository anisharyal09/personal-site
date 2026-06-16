import React from 'react';
import { useLocation } from 'react-router-dom';
import { Coffee } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();
  const isSupportPage = location.pathname === '/support';

  return (
    <footer className="border-t border-white/5 py-8 mt-12 z-10 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex flex-col items-center md:items-start gap-1 font-mono text-center md:text-left">
          <p className="text-gray-500 text-sm">
            &copy; {year} Anish Aryal. All rights reserved.
          </p>
          <p className="text-[10px] text-gray-600 tracking-wide">
            I only build - what matters.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isSupportPage && (
            <a
              href="https://ko-fi.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-mono text-gray-500 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/5 hover:border-electric/30 transition-all duration-300 cursor-pointer"
            >
              <Coffee size={14} className="text-electric" />
              <span>Buy me coffee</span>
            </a>
          )}

          <div className="text-xs font-mono text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
            v2.1.0
          </div>
        </div>

      </div>
    </footer>
  );
}
