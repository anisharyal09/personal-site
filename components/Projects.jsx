import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ArrowRight, ExternalLink, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import aniAuthIcon from '../src/assets/aniauth-icon.webp';

const projects = [
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
          <h2 className="text-2xl font-bold text-white tracking-tight">Featured Work</h2>
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
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
          {project.download && (
            <a
              href={project.download}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Download size={14} /> Releases / Downloads
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
            >
              <Github size={14} /> Repository
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
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
