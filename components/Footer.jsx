import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8 mt-12 z-10 relative">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-gray-500 text-sm flex items-center gap-2 font-mono">
          <span>&copy; {year} Anish Aryal.</span>
          <span className="hidden md:inline">All rights reserved.</span>
        </p>

        <div className="flex items-center gap-3 text-xs font-mono text-gray-500 bg-white/5 px-4 py-2 rounded-full border border-white/5">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
          <span>System Online</span>
          <span className="text-gray-700">|</span>
          <span>V2.0</span>
        </div>

      </div>
    </footer>
  );
}
