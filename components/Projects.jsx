import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ArrowRight, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import feedFreeIcon from '../src/assets/feed-free-icon.webp';
import aniAuthIcon from '../src/assets/aniauth-icon.webp';

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
    name: 'Feed Free',
    type: 'Browser Extension',
    description: 'Take control of YouTube & Instagram. Block algorithmic recommendations, Shorts, Reels, suggested content, and comments.',
    tags: ['React 19', 'TypeScript', 'Zustand', 'Chrome MV3', 'Firefox MV3'],
    status: 'Active',
    github: 'https://github.com/anishcreations/feed-free-ext',
    chrome: 'https://chromewebstore.google.com/detail/feed-free-unbiased-feed-f/fmmfdjmmjmkedafmhhdmoafbioakeefp',
    firefox: 'https://addons.mozilla.org/en-US/firefox/addon/feed-free-uf/',
    icon: feedFreeIcon,
    details: {
      tagline: 'Unbiased social media feed blocker for YouTube & Instagram (Chrome MV3 & Firefox MV3).',
      features: [
        { name: 'YouTube Feed Control', desc: 'Removes home video grid, Shorts shelves (homepage, sidebar, & search results), recommended video sidebars, and comments.' },
        { name: 'Instagram Distraction Blocking', desc: 'Auto-redirects to Following timeline instead of algorithmic feed, hides Reels, Explore, Stories, and comments/likes count.' },
        { name: 'Dynamic Audio Only Mode', desc: 'Black out video player (keep audio playing) with draggable floating toggle button and keyboard shortcut ("A").' },
        { name: 'Document Start Anti-Flicker', desc: 'Synchronous document_start anti-flicker style injection prevents layout flickering before page renders.' },
        { name: 'DOMPatron Observer', desc: 'URL polling and MutationObserver instantly detect Single-Page Application (SPA) navigations without requiring page reloads.' }
      ]
    }
  },
  {
    name: 'aniAuth',
    type: 'Android & Wear OS App',
    description: 'Minimalist, secure, and aesthetic TOTP authenticator for Android smartphones and Wear OS smartwatches with wrist code syncing.',
    tags: ['Kotlin', 'Jetpack Compose', 'Android KeyStore', 'Wear OS'],
    status: 'Active',
    github: 'https://github.com/anishcreations/aniAuth',
    download: 'https://github.com/anishcreations/aniAuth/releases',
    icon: aniAuthIcon,
    details: {
      tagline: 'Minimalist, local-first TOTP authenticator for Android and Wear OS.',
      features: [
        { name: 'Hardware-Backed Encryption', desc: 'Master AES-256 keys generated inside TEE/SE enclave via Android KeyStore.' },
        { name: 'Wear OS Biometric Syncing', desc: 'Wirelessly transfer accounts to Wear OS over Bluetooth protected by biometrics.' },
        { name: 'Duress PIN Protection', desc: 'Configurable watch duress PIN attempt limits that silently wipe watch data if exceeded.' },
        { name: 'Zero Network Permission', desc: '100% offline app with zero network footprint for maximum privacy.' },
        { name: 'Bitwarden & Universal Import', desc: 'Import Bitwarden JSON exports and standard otpauth:// URIs with auto re-encryption.' }
      ]
    }
  },
  {
    name: 'Lipi-Snap',
    type: 'Machine Learning / OCR',
    description: 'Deep-learning OCR system for the Ranjana script combining CharCNN and CRNN+CTC architectures for transcription, transliteration, and translation.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'Streamlit'],
    status: 'Active',
    github: 'https://github.com/anisharyal09/Lipi-Snap',
    demo: 'https://huggingface.co/spaces/anisharyal09/Lipi-Snap',
    details: {
      tagline: 'OCR system (Transcription, Transliteration & Translation) for the Ranjana script.',
      features: [
        { name: 'Phase 2: CRNN + CTC Model', desc: 'Sequence network with 3x3 conv backbone, Bidirectional LSTM, and CTC greedy decoding for word-level recognition.' },
        { name: 'Phase 1: CharCNN Model', desc: 'Character-level recognition CNN (Bati & Dawadi architecture) for 62 Ranjana character classes.' },
        { name: '98.14% Word Test Accuracy', desc: 'Validation accuracy 99.65% (CER 0.05%) and 98.14% exact-match accuracy on 6,468 unseen test words.' },
        { name: 'Multi-Stage Pipeline', desc: 'Ranjana transcription, Devanagari conversion, Roman IAST transliteration with indica numerals, and English translation.' }
      ]
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

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
    <section className="relative py-12 scroll-mt-28" id="projects">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-bold text-white tracking-tight flex items-baseline">
            Featuring
            <span className="text-electric inline-flex ml-0.5 tracking-tight font-mono select-none">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  .
                </motion.span>
              ))}
            </span>
          </h2>
          <Link
            to="/creations"
            className="text-xs font-mono text-electric hover:underline flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"
          >
            Explore the Build Library <ArrowRight size={12} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {project.icon && (
                      <img src={project.icon} className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" alt={project.name} width="40" height="40" decoding="async" />
                    )}
                    <div>
                      <span className="font-mono text-xs text-electric uppercase tracking-wider block mb-0.5">
                        {project.type}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.chrome && (
                      <a
                        href={project.chrome}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Chrome Web Store"
                      >
                        <ChromeLogo />
                      </a>
                    )}
                    {project.firefox && (
                      <a
                        href={project.firefox}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Firefox Add-on"
                      >
                        <FirefoxLogo />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.download && (
                      <a
                        href={project.download}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Download Releases"
                      >
                        <Download size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400">
                  {project.status}
                </span>

                {project.details && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-2 text-xs font-mono text-electric hover:text-white border border-electric/30 hover:border-electric px-3.5 py-1.5 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    Details
                    <ArrowRight size={12} />
                  </button>
                )}
              </div>
            </div>
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
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-xl glass-panel rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl flex flex-col z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          {project.icon && (
            <img src={project.icon} className="w-10 h-10 rounded-xl flex-shrink-0 object-cover" alt={project.name} width="40" height="40" decoding="async" />
          )}
          <div>
            <span className="font-mono text-xs text-electric uppercase tracking-wider block mb-0.5">
              {project.type}
            </span>
            <h3 className="text-xl font-bold text-white">{project.name}</h3>
          </div>
        </div>

        <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
          {project.details.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-2 mb-6">
          {project.chrome && (
            <a
              href={project.chrome}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <ChromeLogo /> Chrome Web Store
            </a>
          )}
          {project.firefox && (
            <a
              href={project.firefox}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <FirefoxLogo /> Firefox Add-on
            </a>
          )}
          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Download size={14} /> Releases / Downloads
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Github size={14} /> Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <ExternalLink size={14} /> Hugging Face Space
            </a>
          )}
        </div>

        <div className="space-y-4 pt-4 border-t border-white/10">
          <h5 className="font-mono text-xs text-electric uppercase tracking-wider mb-2">
            Features & Details
          </h5>
          <div className="space-y-2">
            {project.details.features.map((f) => (
              <div key={f.name} className="text-xs text-gray-300 font-light">
                <strong className="text-white font-medium">{f.name}</strong> — <span className="text-gray-400">{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
