import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const projects = [
  {
    name: 'Lipi-Snap',
    type: 'Machine Learning / OCR',
    description: 'An advanced deep-learning OCR system for the Ranjana script. Phase 2 achieves 98.14% word recognition accuracy using a CRNN+CTC architecture, and features a Streamlit interface for real-time Nepali / IAST Transliteration, and English translation, including Ranjana Transcription.',
    tags: ['Python', 'Machine Learning', 'Computer Vision'],
    status: '...',
    github: 'https://github.com/anisharyal09/Lipi-Snap',
    featured: true,
  }
];

export default function Projects() {
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
              className={`glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden group flex flex-col ${project.featured ? 'md:col-span-2 md:flex-row gap-8 items-center border-electric/30' : ''
                }`}
            >
              {/* Background Glow */}
              <div className="absolute -inset-24 bg-gradient-to-br from-electric/0 via-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl"></div>

              <div className="flex-1 relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-mono text-xs font-semibold tracking-wider text-electric uppercase mb-2 block flex items-center gap-2">
                      {project.featured && <Sparkles size={14} />}
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-white/10 hover:text-white text-gray-400 transition-colors">
                        <Github size={18} />
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

                <div className="inline-flex items-center gap-2 text-xs font-mono">
                  <div className={`w-2 h-2 rounded-full ${project.status === 'Live' ? 'bg-green-400 animate-pulse' : 'bg-yellow-400'}`}></div>
                  <span className="text-gray-400">{project.status}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
