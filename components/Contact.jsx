import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Github, Linkedin, Instagram, Mail, Info } from 'lucide-react';
import { supabase } from '../src/utils/supabaseClient';

const XIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, href: 'https://github.com/anisharyal09' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://linkedin.com/in/anisharyal09' },
    { name: 'X (Twitter)', icon: <XIcon size={16} />, href: 'https://x.com/anisharyal09' },
    { name: 'Instagram', icon: <Instagram size={18} />, href: 'https://instagram.com/anisharyal09' },
  ];

  const handleChange = (event) => setFormData((previous) => ({ ...previous, [event.target.name]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('sending');
    const { error } = await supabase.from('GetInTouch').insert([formData]);
    if (error) return setStatus('idle');
    setFormData({ name: '', email: '', message: '' });
    setStatus('success');
    window.setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className="relative py-12 scroll-mt-28" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10">
        <div className="border-b border-white/10 pb-4 mb-8">
          <span className="font-mono text-xs font-semibold tracking-wider text-electric uppercase mb-1 block">Let&apos;s Connect</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-electric bg-clip-text text-transparent">Get in Touch</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl p-2 sm:p-4">
            <h3 className="text-xl font-bold text-white">Let&apos;s make something useful.</h3>
            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-gray-400">For a project, an idea, or a thoughtful technical conversation—send a message or reach out directly.</p>
            <a href="mailto:anish.creations.hq@gmail.com?subject=Inquiry%20%7C%20Anish%20Aryal" className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-mono text-gray-300 transition-colors hover:border-electric/40 hover:text-electric" title="Send an email">
              <Mail size={15} className="text-electric" />
              Email directly
            </a>
            <p className="mt-3 flex items-center gap-2 text-[11px] font-mono text-gray-500"><Info size={12} className="text-electric" /> Clear subject lines are appreciated.</p>
            <div className="mt-8">
              <h4 className="font-mono text-xs text-electric uppercase tracking-wider">Elsewhere</h4>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {socialLinks.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-mono text-gray-300 transition-all duration-200 hover:border-electric/40 hover:bg-white/10 hover:text-white">{social.icon}<span>{social.name}</span></a>)}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider">Name<input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/40 transition-all" /></label>
              <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider">Email<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" required className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/40 transition-all" /></label>
              <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider">Message<textarea name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Write your message..." required className="mt-2 w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-electric focus:ring-1 focus:ring-electric/40 transition-all resize-none" /></label>
              <button type="submit" disabled={status === 'sending'} className="w-full py-3 px-6 rounded-xl bg-electric text-black font-mono text-xs font-bold inline-flex items-center justify-center gap-2 leading-none hover:bg-electric/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.25)] disabled:opacity-50">
                {status === 'sending' ? <span>Sending Message...</span> : status === 'success' ? <><CheckCircle2 size={16} /><span>Message Sent!</span></> : <><Send size={14} /><span>Send Message</span></>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
