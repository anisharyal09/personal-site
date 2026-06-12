import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Sparkles, X, ArrowRight, ExternalLink } from 'lucide-react';
import feedFreeIcon from '../src/assets/icon.png';

const ChromeLogo = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C8.21 0 4.89 2.19 3.23 5.42l4.03 6.98C7.62 10.45 9.61 9 12 9c2.72 0 5 1.73 5.8 4.15l4.89-8.47C20.44 1.83 16.5 0 12 0zM2.06 6.91C.74 9.17 0 11.75 0 14.5c0 5.48 3.72 10.09 8.75 11.41l4.03-6.98C10.38 18.55 8.39 17.1 7.6 14.68l-5.54-7.77zM16.4 12.58C16.4 15.02 15.09 17.06 13.06 18H20.7c2.09-2.3 3.3-5.26 3.3-8.5 0-3.32-.93-6.42-2.54-9.06l-5.06 8.14zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
  </svg>
);

const FirefoxLogo = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm-.12 3.012c-1.397.05-3.08.775-4.226 2.05-2.28 2.534-1.954 6.845-1.954 6.845a7.35 7.35 0 0 1 1.054-2.85c.677-1.127 1.868-2.072 3.498-2.483.585-.148 1.403-.213 1.258.468-.13.61-.83 1.156-1.298 1.703-1.077 1.258-1.523 2.825-1.523 4.49 0 3.327 2.456 5.862 5.617 5.862 3.12 0 5.617-2.617 5.617-5.862 0-3.21-2.29-6.467-5.01-7.76-.796-.379-1.558-.577-2.062-.647.534-.233 1.282-.361 2.076-.361 3.535 0 7.42 2.617 7.42 7.76 0 4.148-3.045 7.76-7.42 7.76-4.375 0-7.42-3.612-7.42-7.76 0-3.418 2.05-7.76 6.87-8.19v-.03z" />
  </svg>
);

const projects = [
  {
    name: 'Feed Free — Unbiased Feed Extension',
    type: 'Browser Extension / Productivity',
    description: 'Take control of your social media feeds. Block algorithmic recommendations, Shorts, Reels, suggested content, comments, and more on YouTube and Instagram. Works seamlessly with SPA navigation — no page reload required.',
    tags: ['React 19', 'Zustand 5', 'Tailwind CSS v4', 'TypeScript', 'Vite 6 / CRXJS', 'MV3'],
    status: 'Live',
    github: 'https://github.com/anisharyal09/feed-free-ext',
    chrome: 'https://chromewebstore.google.com/detail/feed-free-unbiased-feed-f/fmmfdjmmjmkedafmhhdmoafbioakeefp',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/feed-free-uf/',
    icon: feedFreeIcon,
    featured: true,
    details: {
      tagline: 'Take control of your social media feeds. Block algorithmic recommendations, Shorts, Reels, suggested content, comments, and more on YouTube and Instagram. Works seamlessly with SPA navigation — no page reload required.',
      features: {
        youtube: [
          { name: 'Hide Home Feed', desc: 'Remove the algorithmic video grid from youtube.com.' },
          { name: 'Hide Shorts', desc: 'Remove Shorts from sidebar and homepage.' },
          { name: 'Hide Shorts Everywhere', desc: 'Remove Shorts tab and thumbnails from channel pages.' },
          { name: 'Hide Recommendations', desc: 'Clear suggested recommendations next to/below the player and playlist pages (leaves playlists visible).' },
          { name: 'Hide Entire Sidebar', desc: 'Completely hide the sidebar, stretching the video player to full width.' },
          { name: 'Hide Comments', desc: 'Remove the entire comments section.' },
          { name: 'Hide End Screens', desc: 'Remove video card overlays at the end of videos.' },
          { name: 'Hide Subscriptions', desc: 'Remove Subscriptions link from guide/sidebar.' },
          { name: 'Hide Explore', desc: 'Remove Trending/Explore links from guide/sidebar.' },
          { name: 'Hide Report History', desc: 'Remove Report History link from guide/sidebar.' },
          { name: 'Hide More from YouTube', desc: 'Remove the "More from YouTube" category block from the guide/sidebar.' },
          { name: 'Dynamic Music Mode', desc: 'Black out the video player (keep audio playing) with a floating toggle button on the player UI to switch back-and-forth directly, plus an optional screen overlay.' },
          { name: 'Grayscale Mode', desc: 'Turn YouTube completely black & white.' }
        ],
        instagram: [
          { name: 'Following Feed', desc: 'Auto-redirect to the Following timeline instead of the algorithmic Home feed.' },
          { name: 'Redirect to DMs', desc: 'Go straight to /direct/inbox/ on open instead of the feed.' },
          { name: 'Hide DMs', desc: 'Remove DM navigation and redirect away from the messages inbox.' },
          { name: 'Hide Reels', desc: 'Remove Reels from sidebar/navigation menus (keeping profile reels visible) and auto-redirect away from /reels/.' },
          { name: 'Hide Explore', desc: 'Remove the Explore tab and auto-redirect.' },
          { name: 'Hide Professional Dashboard', desc: 'Remove Professional Dashboard link and icon from the sidebar navigation on creator/business profiles.' },
          { name: 'Hide Stories (Home)', desc: 'Remove the top stories tray from the home feed.' },
          { name: 'Hide Stories Everywhere', desc: 'Completely remove the stories tray, highlights, and story rings (plus auto-redirect from /stories/).' },
          { name: 'Square Profile Photos', desc: 'Render profile pictures and story rings as soft squares.' },
          { name: 'Hide Notes', desc: 'Block status note bubbles from profiles and inbox.' },
          { name: 'Hide Likes', desc: 'Remove likes counts on posts, reels, hover cards, and profile page follower counts.' },
          { name: 'Hide Notifications', desc: 'Remove notifications tab from sidebar.' },
          { name: 'Hide Comments', desc: 'Remove comment sections, comment counts, icons, and input forms from posts/reels.' },
          { name: 'Conflict Resolution', desc: 'Choose redirect target (Profile or Saved) when both "Redirect to DMs" and "Hide DMs" are enabled simultaneously.' },
          { name: 'Grayscale Mode', desc: 'Turn Instagram completely black & white.' }
        ],
        global: [
          { name: 'Master toggle', desc: 'Enable/disable all blocking at once (Feed Free Active / Inactive).' },
          { name: 'Real-time sync', desc: 'Changes apply across all open tabs instantly.' },
          { name: 'SPA-proof', desc: 'Works through client-side navigation without requiring a page reload.' },
          { name: 'Firefox + Chrome', desc: 'Supports both browsers from the same codebase.' },
          { name: 'Grayscale Mode', desc: 'Apply a global high-contrast desaturation filter across both platforms to reduce visual dopamine triggers without shifting layouts.' },
          { name: 'Core Engine Optimization', desc: 'Synchronous Anti-Flicker scripts ensure instant, zero-delay node filtering during Single-Page Application (SPA) transitions.' }
        ],
        roadmap: [
          { name: 'Phase 2: Unbiased Feed', desc: 'Work on compiling educational or curated random feeds (Wikipedia, custom resources) to replace manipulative algorithms.' },
          { name: 'Phase 3: Strict Lock', desc: 'Introduce behavior controls, usage restrictions, and intentional friction blocks for digital detoxing.' },
          { name: 'Social Platform Scaling', desc: 'Engine architecture decoupled from platform hooks, built for future expansion to support other major feed platforms.' }
        ]
      }
    }
  },
  {
    name: 'Lipi-Snap',
    type: 'Machine Learning / OCR',
    description: 'An advanced deep-learning OCR system for the Ranjana script. Phase 2 achieves 98.14% word recognition accuracy using a CRNN+CTC architecture, and features a Streamlit interface for real-time Nepali / IAST Transliteration, and English translation, including Ranjana Transcription.',
    tags: ['Python', 'AI', 'Machine Learning', 'Computer Vision', 'Streamlit'],
    github: 'https://github.com/anisharyal09/Lipi-Snap',
    demo: 'https://huggingface.co/spaces/anisharyal09/Lipi-Snap',
    status: 'Active',
    featured: false,
    details: {
      tagline: 'An OCR (Transcription, Transliteration & Translation) model for the Ranjana script.',
      features: {
        model: [
          { name: 'CRNN + CTC (Phase 2)', desc: 'Current PyTorch network utilizing Bidirectional LSTM recurrence and CTC sequence decoding for word-level prediction.' },
          { name: 'CharCNN (Phase 1)', desc: 'Archived character-level recognition model based on a custom convolutional neural network (CNN) architecture.' },
          { name: '98.14% Word Accuracy', desc: 'Validation accuracy of 99.65% (CER 0.05%) and exact-match test accuracy of 98.14% on unseen synthetic words.' }
        ],
        pipeline: [
          { name: 'Multi-Stage Pipeline', desc: 'Seamless translation: Devanagari transcription, indic-transliteration (IAST) with indica numerals, and English translations.' },
          { name: 'Augmentations & Dataset', desc: 'Augmented with random affine transforms, Gaussian blur, and custom synthetic generation covering 241k samples.' }
        ],
        interface: [
          { name: 'Neo-Minimal Streamlit UI', desc: 'Responsive dual-panel layout supporting dynamic font rendering, OpenCV previews (Raw vs Processed), and diagnostic metrics.' },
          { name: 'Visual Diagnostics', desc: 'Visualizes CTC greedy decoding paths, character-level confidence breakdown bars, and random image test set testing.' }
        ]
      }
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section className="relative bg-white/[0.02] border-y border-white/5" id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between ${project.featured ? 'md:col-span-2 md:flex-row gap-8 items-center border-electric/30' : ''
                }`}
            >
              {/* Background Glow */}
              <div className="absolute -inset-24 bg-gradient-to-br from-electric/0 via-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl pointer-events-none"></div>

              {/* Icon for featured on desktop (Left column) */}
              {project.featured && project.icon && (
                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-24 h-24 rounded-3xl bg-white/5 p-4 border border-white/10 filter drop-shadow-[0_0_15px_rgba(0,229,255,0.15)] group-hover:scale-105 transition-transform duration-300">
                  <img src={project.icon} className="w-full h-full object-contain" alt="" />
                </div>
              )}

              <div className="flex-1 relative z-10 w-full">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    {/* Icon for mobile, or if not featured */}
                    {project.icon && (!project.featured ? (
                      <img src={project.icon} className="w-12 h-12 rounded-xl bg-white/5 p-1 border border-white/10 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.1)]" alt="" />
                    ) : (
                      <img src={project.icon} className="md:hidden w-12 h-12 rounded-xl bg-white/5 p-1 border border-white/10 filter drop-shadow-[0_0_8px_rgba(0,229,255,0.1)]" alt="" />
                    ))}
                    <div>
                      <span className="font-mono text-xs font-semibold tracking-wider text-electric uppercase mb-1 block flex items-center gap-2">
                        {project.featured && <Sparkles size={14} />}
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-bold text-white leading-tight">{project.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors" title="View GitHub Repository">
                        <Github size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors" title="View Live Demo">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="inline-flex items-center gap-2 text-xs font-mono">
                    <div className={`w-2 h-2 rounded-full ${project.status.includes('Live') || project.status === 'Active' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`}></div>
                    <span className="text-gray-400">{project.status}</span>
                  </div>

                  {project.details && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="group flex items-center gap-2 text-xs font-mono text-electric hover:text-white border border-electric/30 hover:border-electric px-4 py-2 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      View Details
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      {/* Backdrop Click */}
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto glass-panel rounded-3xl p-6 md:p-10 border border-white/20 shadow-2xl flex flex-col z-10"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer z-10"
          title="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pb-6 border-b border-white/10 mb-6">
          {project.icon && (
            <img
              src={project.icon}
              className="w-16 h-16 rounded-2xl bg-white/5 p-2 border border-white/15 filter drop-shadow-[0_0_15px_rgba(0,229,255,0.15)] flex-shrink-0"
              alt=""
            />
          )}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs font-semibold tracking-widest text-electric uppercase">
                {project.type}
              </span>
              {project.name.includes('Feed Free') && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">
                  Phase 1 // Live Version
                </span>
              )}
              {project.name.includes('Lipi-Snap') && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  Phase 2 // Word-Level OCR
                </span>
              )}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              {project.details.tagline}
            </p>
          </div>
        </div>

        {/* Store & GitHub & Demo Links */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.chrome && (
            <a
              href={project.chrome}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-blue-600/10 hover:bg-blue-600 border border-blue-500/30 hover:border-blue-500 text-blue-400 hover:text-white rounded-xl transition-all duration-300 font-semibold cursor-pointer shadow-[0_0_10px_rgba(66,133,244,0.15)] hover:shadow-[0_0_15px_rgba(66,133,244,0.4)]"
            >
              <ChromeLogo />
              Chrome Web Store
            </a>
          )}
          {project.firefox && (
            <a
              href={project.firefox}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-orange-600/10 hover:bg-orange-600 border border-orange-500/30 hover:border-orange-500 text-orange-400 hover:text-white rounded-xl transition-all duration-300 font-semibold cursor-pointer shadow-[0_0_10px_rgba(249,115,22,0.15)] hover:shadow-[0_0_15px_rgba(249,115,22,0.4)]"
            >
              <FirefoxLogo />
              Firefox Add-on
            </a>
          )}
          {project.demo && project.demo.includes('huggingface.co') && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-yellow-500/10 hover:bg-yellow-500 border border-yellow-500/30 hover:border-yellow-500 text-yellow-600 hover:text-white rounded-xl transition-all duration-300 font-semibold cursor-pointer shadow-[0_0_10px_rgba(234,179,8,0.15)] hover:shadow-[0_0_15px_rgba(234,179,8,0.4)]"
            >
              <span className="text-xs">🤗</span>
              Hugging Face Spaces
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-zinc-800/50 hover:bg-zinc-100 border border-zinc-700 hover:border-zinc-300 text-zinc-300 hover:text-zinc-950 rounded-xl transition-all duration-300 font-semibold cursor-pointer hover:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            >
              <Github size={14} />
              GitHub Repository
            </a>
          )}
        </div>

        {/* Features Content Grid */}
        <div className="flex-1 mt-2">
          <h4 className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-4">Project Details & Features</h4>

          <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 space-y-8 max-h-[400px] overflow-y-auto scrollbar-thin">
            {Object.keys(project.details.features).map((categoryKey) => {
              const category = project.details.features[categoryKey];
              const config = {
                youtube: { label: 'YouTube Rules', colorClass: 'text-red-400', bgClass: 'bg-red-500' },
                instagram: { label: 'Instagram Rules', colorClass: 'text-pink-400', bgClass: 'bg-pink-500' },
                global: { label: 'Global Engine', colorClass: 'text-electric', bgClass: 'bg-electric' },
                roadmap: { label: 'Roadmap & Future Phases', colorClass: 'text-neon-purple', bgClass: 'bg-neon-purple' },
                model: { label: 'CRNN + CTC Model Architecture', colorClass: 'text-electric', bgClass: 'bg-electric' },
                dataset: { label: 'Training Dataset', colorClass: 'text-red-400', bgClass: 'bg-red-500' },
                pipeline: { label: 'Real-time OCR Pipeline', colorClass: 'text-pink-400', bgClass: 'bg-pink-500' }
              }[categoryKey] || { label: categoryKey, colorClass: 'text-white', bgClass: 'bg-white' };

              return (
                <div key={categoryKey}>
                  <h5 className={`font-mono text-xs font-bold ${config.colorClass} flex items-center gap-2 pb-2 border-b border-white/5 mb-3 uppercase tracking-wider`}>
                    <span className={`w-2 h-2 rounded-full ${config.bgClass}`}></span>
                    {config.label}
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    {category.map((f) => (
                      <div key={f.name} className="flex gap-2 items-start text-xs text-gray-400 font-light leading-relaxed">
                        <span className={`${config.colorClass} flex-shrink-0 font-bold`}>•</span>
                        <div>
                          <strong className="text-white font-medium">{f.name}</strong> — <span>{f.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

