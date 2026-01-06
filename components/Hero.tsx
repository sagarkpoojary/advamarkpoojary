import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Scale } from 'lucide-react';

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Litigation Expert", "Corporate Strategist", "Legal Consultant", "MACT Specialist"];
  
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);
  const blurFade = useTransform(scrollY, [0, 200], ["blur(0px)", "blur(10px)"]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060608]">
      <ParticleBackground />

      {/* Parallax Background Monogram */}
      <motion.div 
        style={{ y: yParallax, opacity: 0.03 }}
        className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none"
      >
        <h2 className="text-[35vw] font-black tracking-tighter text-white leading-none select-none">AKP</h2>
      </motion.div>

      <motion.div style={{ opacity: opacityFade, filter: blurFade }} className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <Reveal delay={0.1}>
            <div className="flex flex-col items-center mb-12">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="bg-white p-4 text-black mb-4 shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all cursor-pointer"
              >
                <Scale size={32} strokeWidth={2} />
              </motion.div>
              <div className="flex flex-col items-center">
                <span className="font-mono text-[9px] tracking-[0.5em] uppercase text-zinc-500 leading-none mb-1">Authenticated Protocol</span>
                <span className="text-[8px] text-zinc-700 uppercase tracking-[0.2em] font-mono">Dossier // 2025.V1</span>
              </div>
            </div>
          </Reveal>
          
          <div className="relative mb-10">
             <Reveal delay={0.25} direction="up">
                <h1 className="font-sans text-[12vw] md:text-8xl lg:text-[10rem] font-black text-white tracking-tighter-extreme leading-[0.8] text-mask">
                  <span className="block text-zinc-600 text-3xl md:text-5xl lg:text-7xl tracking-tighter mb-4 font-light opacity-80">ADV.</span>
                  AMAR K.<br/>POOJARY
                </h1>
             </Reveal>
          </div>
          
          <Reveal delay={0.4}>
            <div className="h-20 flex flex-col items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={roleIndex}
                  initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -30, filter: 'blur(15px)' }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl md:text-3xl font-light text-zinc-400 font-mono tracking-widest uppercase"
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ delay: 1, duration: 1 }}
                className="h-px bg-zinc-800 mt-6" 
              />
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="mt-16 flex flex-wrap gap-6 justify-center">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] transition-all border border-white shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Initialize mandate</span>
                <motion.div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
              <motion.a 
                href="#practice" 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.3em] border border-zinc-800 transition-all hover:bg-zinc-900/40"
              >
                Legal Domains
              </motion.a>
            </div>
          </Reveal>
        </div>
      </motion.div>
      
      {/* Refined Scroll Hint */}
      <motion.div 
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <span className="text-[8px] font-mono text-zinc-600 tracking-[0.4em] uppercase mb-4">Descend</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;