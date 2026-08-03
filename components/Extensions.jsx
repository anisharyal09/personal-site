import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const channels = [
  {
    name: 'eTechs',
    type: 'Tech / Empowerment',
    url: 'https://www.youtube.com/@empowermenttechspace',
    icon: <div className="text-electric"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg></div>,
    featured: true,
    videoId: 'HumllUTEzms',
    title: 'The Digital Afterlife — What Happens to Your Digital Soul When You Die?',
  },
  {
    name: 'ani',
    type: 'Personal',
    url: 'https://www.youtube.com/@anisharyal09',
    icon: <div className="text-gray-400"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></div>,
  },
];

const interests = ['Listening to Music', 'Travel', 'μControllers', 'AI', 'Editing', 'ML'];

export default function Extensions() {
  const featured = channels.find(c => c.featured);

  return (
    <section className="relative py-12 scroll-mt-28" id="extensions">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="border-b border-white/10 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Digital Presence</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Channels List */}
          <div className="space-y-4">
            <h3 className="font-mono text-xs text-electric uppercase tracking-wider mb-4">YouTube Networks</h3>
            <div className="space-y-3">
              {channels.map((c, idx) => (
                <motion.a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group flex items-center justify-between p-4 rounded-2xl glass-panel glass-panel-hover"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                      {c.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm group-hover:text-electric transition-colors">{c.name}</h4>
                      <p className="text-xs text-gray-400 font-light">{c.type}</p>
                    </div>
                  </div>
                  <div className="text-gray-500 group-hover:text-white transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Featured Video & Interests */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-between"
          >
            {featured && (
              <div className="mb-6">
                <h3 className="font-mono text-xs text-electric uppercase tracking-wider mb-4">Latest Upload</h3>
                <a
                  href={`https://youtu.be/${featured.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden glass-panel group aspect-video border border-white/10"
                >
                  <img
                    src={`https://img.youtube.com/vi/${featured.videoId}/maxresdefault.jpg`}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle size={48} className="text-white mb-2" />
                    <span className="text-white text-xs font-medium px-4 text-center">{featured.title}</span>
                  </div>
                </a>
              </div>
            )}

            <div>
              <h3 className="font-mono text-xs text-electric uppercase tracking-wider mb-3">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
