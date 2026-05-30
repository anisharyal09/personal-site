import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Database, Cpu } from 'lucide-react';

const coreStack = [
  { name: 'C / C++', icon: <Cpu className="text-electric" size={24} />, desc: 'Foundational logic & algorithms' },
  { name: 'Python', icon: <Terminal className="text-neon-purple" size={24} />, desc: 'Scripting & automation' },
];

const prodStack = [
  { name: 'React / JS', icon: <Code2 className="text-yellow-400" size={24} />, desc: 'UI flows' },
  { name: 'Tailwind CSS', icon: <Database className="text-blue-400" size={24} />, desc: 'Rapid responsive styling' },
  { name: 'AI Workflows', icon: <Cpu className="text-electric" size={24} />, desc: 'Leveraging AI for prototyping' },
];

export default function Stack() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="relative" id="stack">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Core Column */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Core</h3>
            <div className="space-y-4">
              {coreStack.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants} className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400 font-light">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Production Column */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}>
            <h3 className="font-mono text-sm text-gray-400 mb-6 uppercase tracking-widest border-b border-white/10 pb-2">Production</h3>
            <div className="space-y-4">
              {prodStack.map((tech) => (
                <motion.div key={tech.name} variants={itemVariants} className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {tech.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-400 font-light">{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
