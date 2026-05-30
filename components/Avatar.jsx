import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, X } from 'lucide-react';
import { supabase } from '../src/utils/supabaseClient';
import heroImg from '../src/assets/hero.jpg';

export default function Avatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');

    const { error } = await supabase
      .from('GetInTouch')
      .insert([formData]);

    if (!error) {
      setFormData({ name: '', email: '', message: '' });
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setIsOpen(false);
      }, 3000);
    } else {
      setStatus('idle');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-72 sm:w-80 glass-panel rounded-2xl p-5 shadow-2xl origin-bottom-right"
          >
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold text-electric uppercase tracking-widest">
                Direct COMMS
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {status === 'success' ? (
              <div className="py-8 flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={32} className="text-green-500 mb-3" />
                <p className="text-sm text-gray-300 font-mono">Transmission Sent.</p>
                <p className="text-xs text-gray-500 mt-1">I'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors"
                />
                <textarea
                  name="message"
                  placeholder="Message payload..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="3"
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors resize-none"
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black font-semibold text-sm py-2 rounded-lg hover:bg-electric transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? 'Transmitting...' : (
                    <>
                      <Send size={14} /> Send
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full pl-2 pr-4 py-2 shadow-2xl hover:border-electric/50 transition-colors group cursor-pointer"
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-electric/30 p-0.5 bg-black">
          <img 
            src={heroImg} 
            alt="Anish Aryal" 
            className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-none mb-1 flex items-center gap-1 group-hover:text-electric transition-colors">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
            NETWORK
          </span>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
            <span className="text-xs font-mono text-green-400 font-bold leading-none">STATUS: ONLINE</span>
          </div>
        </div>
      </button>
    </div>
  );
}
