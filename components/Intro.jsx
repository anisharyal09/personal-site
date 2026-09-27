import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowRight, FolderGit2 } from 'lucide-react';
import heroImg from '../src/assets/hero.webp';

export default function Intro() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "ECIE @ IOE, Pulchowk",
    "Curious & Problem Solver",
    "Tech & Open Source Enthusiast",
    "Learner & Explorer"
  ];

  const currentRole = roles[wordIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          if (displayText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2200);
          }
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 25 : 65
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, currentRole]);

  return (
    <section className="relative w-full pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" id="intro">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-14 relative z-10">

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-3">
            Anish Aryal
          </h1>

          <div className="h-7 text-sm sm:text-base text-electric font-mono flex items-center mb-4">
            <span>{displayText}</span>
            <span className="animate-pulse ml-0.5">_</span>
          </div>

          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed mb-6">
            2nd year Electronics, Communication & Information Engineering student at IOE, Pulchowk Campus, TU — basically exploring everything in software, systems, design and beyond(just everything).
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-electric text-black font-semibold rounded-xl hover:bg-electric/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.2)]"
            >
              Explore Featuring
              <ArrowRight size={14} />
            </a>

            <a
              href="https://github.com/anisharyal09"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono bg-white/5 hover:bg-white/10 text-gray-200 rounded-xl border border-white/10 transition-colors"
              title="GitHub Profile"
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            <a
              href="https://github.com/anishcreations"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-colors opacity-70 hover:opacity-100"
              title="Anish Creations GitHub Org"
            >
              <FolderGit2 size={16} />
            </a>
          </div>
        </motion.div>

        {/* Dynamic Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center flex-shrink-0 relative"
        >
          <motion.div
            whileHover={{ scale: 1.04, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative w-52 h-52 sm:w-68 sm:h-68 rounded-2xl overflow-hidden border border-white/15 bg-white/5 p-1.5 shadow-2xl hover:border-electric/50 transition-colors group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
            <img
              src={heroImg}
              alt="Anish Aryal"
              className="w-full h-full object-cover rounded-xl transition-all duration-500 group-hover:scale-105"
              width="640"
              height="640"
              decoding="async"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
