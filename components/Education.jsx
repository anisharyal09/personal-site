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
    const timer = setTimeout(() => setRevealed(false), 3000);
    return () => clearTimeout(timer);
  }, [revealed]);

  return (
    <button
      onClick={() => setRevealed(!revealed)}
      className={`relative overflow-hidden flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 border cursor-pointer ${
        revealed
          ? 'bg-electric/10 border-electric/40 text-electric shadow-[0_0_15px_rgba(0,229,255,0.2)] opacity-100'
          : 'bg-white/5 border-white/10 text-gray-400 opacity-30 hover:opacity-100 hover:bg-white/10 hover:text-gray-200'
      }`}
      title={revealed ? 'Hides in 3s' : 'Click to reveal'}
    >
      {revealed ? <Unlock size={13} /> : <Lock size={13} />}
      <span className={revealed ? 'inline-block' : 'filter blur-[5px] select-none inline-block'}>
        {revealed ? value : 'HIDDEN'}
      </span>
    </button>
  );
}

export default function Education() {
  return (
    <section className="relative py-12 scroll-mt-28" id="education">
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="border-b border-white/10 pb-4 mb-8">
          <h2 className="text-2xl font-bold text-white tracking-tight">Education</h2>
        </div>

        <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-8 py-2">
          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative glass-panel rounded-2xl p-6"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[37px] md:-left-[45px] top-6 flex items-center justify-center w-7 h-7 rounded-full bg-dark border border-white/20 text-electric shadow-lg">
                <GraduationCap size={14} />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-xs text-electric mb-1 block">{item.year}</span>
                  <h3 className="text-lg font-bold text-white mb-0.5">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-light">{item.institution}</p>
                </div>
                <div className="self-start sm:self-center">
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
