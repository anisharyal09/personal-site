import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const KofiIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 12.25 15.609 12.25 15.609 0h1.56s3.784.162 5.922-3.693c1.789-3.23.83-8.083.091-8.327zm-5.011 5.275c-.389.916-1.517.916-1.517.916h-1.636V6.155h1.636s1.258.077 1.636.969c.39.917.39 6.007 0 7.099z" />
  </svg>
);

const PROJECT_MAP = {
  'feed-free': {
    name: 'Feed Free - Unbiased Feed',
    githubRepo: 'https://github.com/anishcreations/feed-free-ext',
    description: 'Take control of your social media feeds. Block algorithmic recommendations, Shorts, Reels, and suggested content on YouTube and Instagram.'
  },
  'yt-audio-air': {
    name: 'YT Audio Air',
    githubRepo: 'https://github.com/anishcreations/yt-audio-air',
    description: 'Listen to YouTube videos as background audio streams, ad-free and open-source.'
  }
};

export default function Support() {
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');

  const project = PROJECT_MAP[from] || null;
  const isCustomProject = !!project;

  const title = isCustomProject ? `Support ${project.name}` : 'Support My Work';
  const description = isCustomProject
    ? project.description
    : 'I build open-source tools, native macOS apps, and browser extensions. If my work helps you, consider supporting its development.';

  const githubLink = isCustomProject ? project.githubRepo : 'https://github.com/anisharyal09';
  const githubLabel = isCustomProject ? 'Contribute to the project' : 'Contribute on GitHub';
  const githubDesc = isCustomProject
    ? 'Help improve the project by contributing code, reporting bugs, or suggesting features.'
    : 'Contribute to my repositories to help support open-source development.';

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col items-center pt-24 sm:pt-36 pb-14 sm:pb-20 px-4 sm:px-6 relative z-10 scroll-mt-28">
      <div className="max-w-6xl w-full max-w-full min-w-0 flex flex-col z-20">

        {/* Navigation / Return Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Return to Home</span>
          </Link>
        </motion.div>

        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-10 text-left border-b border-white/10 pb-5 sm:pb-6"
        >
          <span className="font-mono text-xs font-semibold tracking-wider text-electric uppercase mb-1 block">
            {isCustomProject ? 'Project Support' : 'Developer Support'}
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 break-words">
            {title}
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </motion.div>

        {/* Support Options Section - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">

          {/* Ko-fi Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex"
          >
            <a
              href="https://ko-fi.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center justify-between border border-[#FF5E5B]/20 w-full min-w-0 cursor-pointer group"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="p-4 rounded-full bg-[#FF5E5B]/10 border border-[#FF5E5B]/20 text-[#FF5E5B] mb-5 group-hover:scale-110 transition-transform duration-300">
                  <KofiIcon className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-electric transition-colors">Fuel the craft</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed max-w-xs">
                  A direct way to support my work with a quick, secure tip via Ko-fi.
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-[#FF5E5B] hover:bg-[#ff4a47] text-white text-xs font-mono font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(255,94,91,0.2)]">
                <span>Support on Ko-fi</span>
                <ExternalLink size={12} />
              </div>
            </a>
          </motion.div>

          {/* GitHub Option */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-8 flex flex-col items-center text-center justify-between border border-white/10 w-full min-w-0 cursor-pointer group"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="p-4 rounded-full bg-white/5 border border-white/10 text-gray-300 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Github size={32} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-electric transition-colors break-words">{githubLabel}</h3>
                <p className="text-gray-400 text-xs font-light leading-relaxed max-w-xs">
                  {githubDesc}
                </p>
              </div>

              <div className="w-full flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-mono font-bold rounded-xl transition-all duration-300 border border-white/10">
                <span>View Repository</span>
                <ExternalLink size={12} />
              </div>
            </a>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
