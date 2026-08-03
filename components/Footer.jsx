import React from 'react';
import { Coffee } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const isSupportPage = location.pathname === '/support';

  return (
    <footer className="border-t border-white/10 py-8 mt-16 z-10 relative">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-xs sm:text-sm font-mono text-gray-300 font-medium">
            &copy; {year} Anish Aryal. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-gray-500 opacity-75">
            I only build what matters.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {isSupportPage && (
            <a
              href="https://ko-fi.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#FF5E5B]/30 bg-[#FF5E5B]/10 px-3.5 py-1.5 text-xs font-mono text-[#ff807d] transition-colors hover:bg-[#FF5E5B] hover:text-white"
            >
              <Coffee size={13} /> Support on Ko-fi
            </a>
          )}
          <div className="text-xs font-mono font-semibold text-gray-400 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
            v3.1.0
          </div>
        </div>
      </div>
    </footer>
  );
}
