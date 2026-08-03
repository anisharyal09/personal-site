import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, X, MessageCircle } from 'lucide-react';
import { supabase } from '../src/utils/supabaseClient';

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

  useEffect(() => {
    const openComms = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-direct-comms', openComms);
    return () => window.removeEventListener('open-direct-comms', openComms);
  }, []);

  return (
    <div className="fixed right-6 bottom-6 z-[90] flex flex-col items-end">
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
                aria-label="Close Direct COMMS"
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
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Direct COMMS"
        title="Open Direct COMMS"
        className="grid h-11 w-11 place-items-center rounded-full border border-electric/30 bg-black/75 text-electric shadow-xl backdrop-blur-md transition-colors hover:bg-black cursor-pointer"
      >
        <MessageCircle size={17} />
      </button>
    </div>
  );
}


