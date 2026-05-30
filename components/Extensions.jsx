import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const channels = [
  {
    name: 'eTechs',
    type: 'Tech / Empowerment',
    url: 'https://www.youtube.com/@empowermenttechspace',
    icon: <div className="text-electric"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg></div>,
    featured: true,
    videoId: 'HumllUTEzms',
    title: 'The Digital Afterlife — What Happens to Your Digital Soul When You Die?',
  },
  {
    name: 'Anish Echoes',
    type: 'Music',
    url: 'https://www.youtube.com/@anishechoes',
    icon: <div className="text-neon-purple"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></div>,
  },
  {
    name: 'ani',
    type: 'Personal',
    url: 'https://www.youtube.com/@anisharyal09',
    icon: <div className="text-gray-400"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></div>,
  },
];

const interests = ['Listening to Music', 'Travel', 'μControllers', 'Editing', 'ML'];

export default function Extensions() {
  const featured = channels.find(c => c.featured);

  return (
    <section className="relative bg-white/[0.01]" id="extensions">
      <div className="section-container">
        <h2 className="section-title">Digital Self</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Channels List */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">YouTube Networks</h3>
            {channels.map((c, idx) => (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group flex items-center justify-between p-4 rounded-2xl glass-panel glass-panel-hover"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-electric transition-colors">{c.name}</h4>
                    <p className="text-xs text-gray-400">{c.type}</p>
                  </div>
                </div>
                <div className="text-gray-500 group-hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Featured Video & Interests */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            {featured && (
              <div className="mb-8">
                <h3 className="font-mono text-sm text-gray-400 mb-6 tracking-widest border-b border-white/10 pb-2">Latest Upload (eTechs)</h3>
                <a
                  href={`https://youtu.be/${featured.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative rounded-2xl overflow-hidden glass-panel group aspect-video"
                >
                  <img
                    src={`https://img.youtube.com/vi/${featured.videoId}/maxresdefault.jpg`}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-dark/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle size={64} className="text-white mb-2" />
                    <span className="text-white font-medium px-6 text-center">{featured.title}</span>
                  </div>
                </a>
              </div>
            )}

            <div>
              <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Current Interests</h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, idx) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default"
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
