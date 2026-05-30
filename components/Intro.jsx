import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import heroImg from '../src/assets/hero.jpg';

export default function Intro() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const words = [
    "Aspiring Engineer",
    "Problem Solver",
    "Innovator"
  ];

  const currentFullWord = words[wordIndex];
  const article = /^[aeiou]/i.test(currentFullWord) ? "an" : "a";

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentFullWord.substring(0, displayText.length + 1));
          if (displayText === currentFullWord)
            setTimeout(() => setIsDeleting(true), 2500);
        } else {
          setDisplayText(currentFullWord.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 30 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, currentFullWord]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: x / 15, y: y / 15 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section className="relative w-full flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32 overflow-hidden" id="intro">
      <div className="section-container w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 relative">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col z-20 items-center text-center lg:items-start lg:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 mb-8 group"
          >
            <div className="flex items-center gap-3 px-3 py-1.5 bg-electric/5 border border-electric/20 rounded-md relative overflow-hidden backdrop-blur-sm cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-electric opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric"></span>
              </div>
              
              <span className="font-mono text-[10px] text-electric tracking-[0.2em] uppercase font-medium">
                SYS.CORE // <span className="text-white font-bold">ONLINE</span>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-1 opacity-60">
               {[...Array(4)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ height: ["4px", "16px", "4px"] }} 
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.15, ease: "easeInOut" }}
                    className="w-[2px] bg-electric rounded-full"
                  />
               ))}
            </div>
          </motion.div>

          <h1 className="text-7xl sm:text-8xl lg:text-[7rem] font-black tracking-tighter text-white leading-[0.85] mb-8">
            ANISH<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-600">
              ARYAL.
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-400 font-light flex items-center justify-center lg:justify-start h-8 mb-6">
            <span>I'm {article} <span className="text-white font-medium">{displayText}</span></span>
            <span className="animate-pulse text-electric font-mono ml-1">_</span>
          </div>

          <p className="text-gray-500 text-sm md:text-base max-w-sm font-light leading-relaxed mb-10 mx-auto lg:mx-0">
            turning ideas into reality.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-6">
            <a
              href="#contact"
              className="group flex items-center gap-3 text-sm font-medium text-white hover:text-electric transition-colors"
            >
              <span className="border-b border-white/20 pb-1 group-hover:border-electric transition-colors uppercase tracking-widest text-xs">
                Initiate Contact
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://github.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
            >
              <Github size={18} />
              <span className="font-mono text-xs tracking-wider">GitHub</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end perspective-1000 z-20 w-full mt-8 lg:mt-0"
        >
          <a href="#contact" className="block relative w-72 h-72 md:w-[22rem] md:h-[22rem] lg:w-[26rem] lg:h-[26rem] group cursor-pointer">
            <motion.div
              className="w-full h-full"
              animate={{
                rotateY: tilt.x,
                rotateX: -tilt.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.5 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-electric to-neon-purple opacity-20 blur-3xl" style={{ transform: 'translateZ(-50px)' }}></div>

              <div className="relative w-full h-full bg-darker p-2 rounded-xl border border-white/10 shadow-2xl overflow-visible">

                <div className="absolute -top-1.5 left-8 right-8 h-3 flex justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={`t${i}`} className="w-3 h-3 bg-white/10 rounded-sm"></div>
                  ))}
                </div>

                <div className="absolute -bottom-1.5 left-8 right-8 h-3 flex justify-between">
                  {[...Array(6)].map((_, i) => (
                    <div key={`b${i}`} className="w-3 h-3 bg-white/10 rounded-sm"></div>
                  ))}
                </div>

                <div className="relative overflow-hidden rounded-lg bg-black w-full h-full">
                  <img
                    src={heroImg}
                    alt="Anish Aryal"
                    className="w-full h-full object-cover grayscale contrast-125 brightness-90 sepia-[.5] hue-rotate-[170deg] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-100 transition-all duration-700"
                  />

                  <div className="absolute inset-0 w-full h-1 bg-electric/50 shadow-[0_0_15px_var(--color-electric)] animate-scan pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400px); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
