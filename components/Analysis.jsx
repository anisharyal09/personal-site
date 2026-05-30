import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Analysis() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-panel p-12 rounded-3xl max-w-lg w-full"
      >
        <div className="inline-block p-4 rounded-full bg-electric/10 border border-electric/20 mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-electric)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        
        <div className="font-mono text-xs text-electric mb-2 tracking-widest uppercase">
          Status: Knowledge_Acquisition
        </div>
        <h1 className="text-3xl font-bold text-white mb-6">Analysis Center</h1>
        
        <p className="text-gray-400 mb-10 font-light leading-relaxed">
          This module is currently under a learning and exploring phase. Technical whitepapers and architectural studies will be documented as system knowledge expands.
        </p>

        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-white transition-colors border border-electric/30 px-6 py-2 rounded-full hover:bg-electric/10">
          <ArrowLeft size={16} />
          Return to Hub
        </Link>
      </motion.div>
    </div>
  );
}
