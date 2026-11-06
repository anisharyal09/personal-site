import React from 'react';
import { ArrowLeft, Coffee, ExternalLink, Github } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const PROJECTS = {
  'feed-free': {
    name: 'Feed Free — Unbiased Feed',
    github: 'https://github.com/anishcreations/feed-free-ext',
    description: 'Block algorithmic recommendations, Shorts, Reels and suggested content on YouTube and Instagram.',
  },
  'yt-audio-air': {
    name: 'YT Audio Air',
    github: 'https://github.com/anishcreations/yt-audio-air',
    description: 'A lightweight macOS menu-bar app for background YouTube audio playback.',
  },
};

export default function Support() {
  const [searchParams] = useSearchParams();
  const project = PROJECTS[searchParams.get('from')] || null;

  const title = project ? `Support ${project.name}` : 'Support my work';
  const description = project
    ? project.description
    : 'I build open-source tools, native macOS apps and browser extensions. If they’re useful to you, here are two ways to help.';
  const githubUrl = project?.github || 'https://github.com/anisharyal09';

  return (
    <main className="relative z-10 min-h-[70vh] w-full px-3 sm:px-6 pt-24 sm:pt-32 pb-12">
      <div className="mx-auto w-full max-w-5xl">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-xs font-mono text-gray-400 transition-colors hover:text-electric"
        >
          <ArrowLeft size={14} /> Back to portfolio
        </Link>

        <header className="mb-7 border-b border-white/10 pb-5 sm:mb-8 sm:pb-6">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-wider text-electric">
            {project ? 'Project support' : 'Support'}
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl break-words">
            {title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" aria-label="Ways to support">
          <a
            href="https://buymemomo.com/anisharyal09"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover group flex min-w-0 flex-col justify-between gap-7 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-electric/20 bg-electric/10 text-electric">
                <Coffee size={20} />
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-electric">Buy me momo</h2>
                <span className="mt-1 inline-block text-[10px] font-mono text-gray-500">Buy Me Coffee alternative</span>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  A small tip helps me keep building and maintaining useful tools.
                </p>
              </div>
            </div>
            <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-mono font-semibold text-gray-200 transition-colors group-hover:border-electric/30 group-hover:text-electric">
              Buy me momo <span className="inline-flex items-center gap-0.5">(<Coffee size={12} />)</span> <ExternalLink size={13} />
            </span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover group flex min-w-0 flex-col justify-between gap-7 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-gray-300">
                <Github size={20} />
              </span>
              <div className="min-w-0">
                <h2 className="text-lg font-semibold text-white transition-colors group-hover:text-electric">
                  {project ? 'Contribute to the project' : 'Contribute on GitHub'}
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-gray-400">
                  {project
                    ? 'Report an issue, suggest a change or contribute code.'
                    : 'Explore the source, report issues or contribute code.'}
                </p>
              </div>
            </div>
            <span className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-xs font-mono font-semibold text-gray-200 transition-colors group-hover:border-electric/30 group-hover:text-electric">
              View repository <ExternalLink size={13} />
            </span>
          </a>
        </section>
      </div>
    </main>
  );
}
