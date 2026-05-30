import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Github, Linkedin, Instagram } from 'lucide-react';
import { supabase } from '../src/utils/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

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
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('idle');
    }
  };

const XIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/anisharyal09' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/anisharyal09' },
    { name: 'X', icon: <XIcon size={18} />, href: 'https://x.com/anisharyal09' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: 'https://instagram.com/anisharyal09' },
  ];

  return (
    <section className="relative py-24" id="contact">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-8"
          >
            <div>
              <p className="text-gray-400 font-light max-w-md">
                Whether you have an interesting project idea, a challenging problem to solve together, or just want to connect—reach out!
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="font-mono text-sm text-gray-500 uppercase tracking-widest">Connect</span>
              <div className="flex items-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-electric hover:border-electric transition-all"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-3xl"
          >
            {status === 'success' ? (
              <div className="py-16 flex flex-col items-center justify-center text-center">
                <CheckCircle2 size={48} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
                <p className="text-gray-400 font-light">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gray-500 uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors"
                      placeholder="[name]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-gray-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors"
                      placeholder="[email address]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-gray-500 uppercase tracking-wider">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-electric transition-colors resize-none"
                    placeholder="Hello Anish..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-electric transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? 'Sending...' : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
