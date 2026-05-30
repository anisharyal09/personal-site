import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lock, Unlock } from 'lucide-react';

const educationData = [
  {
    year: '2022',
    title: 'Tenth Grade',
    institution: 'Gandaki E.B.S, Tamghas',
    gpa: '3.70 GPA',
  },
  {
    year: '2024',
    title: 'Plus Two (12)',
    institution: 'Kanti Sec. School, Butwal',
    gpa: '3.84 GPA',
  },
  {
    year: '2024–2028',
    title: 'BEng. Electronics, Communication & Information Engineering',
    institution: 'IOE, Pulchowk Campus, TU',
    gpa: 'Running',
  },
];

function DecryptGPA({ value }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const timer = setTimeout(() => setRevealed(false), 9000);
    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <button
      onClick={() => setRevealed(!revealed)}
      className={`relative overflow-hidden flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-mono transition-all duration-500 border ${revealed
        ? 'bg-electric/10 border-electric/30 text-electric shadow-[0_0_15px_var(--color-electric-glow)]'
        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
        }`}
      title={revealed ? 'Hides in 9s' : 'Click to decrypt'}
    >
      {revealed ? <Unlock size={14} /> : <Lock size={14} />}
      <span className={revealed ? 'animate-decrypt inline-block' : 'filter blur-sm select-none opacity-60 inline-block'}>
        {revealed ? value : 'HIDDEN'}
      </span>
    </button>
  );
}

export default function Education() {
  return (
    <section className="relative" id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>

        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 py-4">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1 flex items-center justify-center w-8 h-8 rounded-full bg-dark border border-white/20 text-electric">
                <GraduationCap size={16} />
              </div>

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs text-electric mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-gray-400">{item.institution}</p>
                </div>
                <div>
                  <DecryptGPA value={item.gpa} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
