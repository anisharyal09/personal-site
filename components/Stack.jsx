import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Sparkles, Layers, Code2, Brain, AppWindow } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Systems',
    icon: <Terminal className="text-electric" size={20} />,
    skills: [
      { name: 'C / C++', level: 'Core' },
      { name: 'Python', level: 'Scripting & AI' },
      { name: 'Swift', level: 'macOS Native' },
      { name: 'JavaScript / TS', level: 'Web' }
    ]
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="text-neon-purple" size={20} />,
    skills: [
      { name: 'PyTorch', level: 'Deep Learning' },
      { name: 'Computer Vision', level: 'OpenCV' },
      { name: 'CRNN + CTC', level: 'OCR Pipelines' },
      { name: 'Model Deployment', level: 'Streamlit / Spaces' }
    ]
  },
  {
    title: 'Web & Interface Design',
    icon: <AppWindow className="text-cyan-400" size={20} />,
    skills: [
      { name: 'React', level: 'UI Architecture' },
      { name: 'Tailwind CSS', level: 'Design Systems' },
      { name: 'Framer Motion', level: 'Animations' },
      { name: 'Vite & Web Engine', level: 'Tooling' }
    ]
  }
];

export default function Stack() {
  return (
    <section className="relative" id="stack">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-electric uppercase mb-1 block flex items-center gap-2">
              <Sparkles size={14} />
              Technical Stack
            </span>
            <h2 className="section-title mb-0">Skills & Tooling</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 border-b border-white/10 pb-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                    {cat.icon}
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-gray-200 uppercase tracking-wider">
                    {cat.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-electric/10 border border-white/5 hover:border-electric/30 transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-gray-400 group-hover:text-electric transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
