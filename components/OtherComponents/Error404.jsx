import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center relative z-10">
      <div className="glass-panel p-12 rounded-3xl max-w-lg w-full">
        <h1 className="text-6xl font-black text-white mb-2 font-mono">404</h1>
        <div className="font-mono text-electric text-xs tracking-widest uppercase mb-6">System Not Found</div>
        <p className="text-gray-400 mb-4 font-light">
          The requested system pathway does not exist.
        </p>
        <p className="text-gray-500 mb-8 font-mono text-sm">
          Maybe visit my <a href="https://www.youtube.com/@empowermenttechspace" target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">YouTube</a> instead? hehe
        </p>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-white text-dark hover:bg-electric transition-colors">
          Return to Hub
        </Link>
      </div>
    </div>
  );
}
