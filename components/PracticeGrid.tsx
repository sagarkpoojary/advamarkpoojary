import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../constants';
import { FadeIn, Reveal } from './Reveal';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const PracticeGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="practice" className="py-40 bg-[#060608] text-white">
      <div className="container mx-auto px-6">
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-8">
          <Reveal>
            <div className="flex flex-col">
              <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-700 mb-6">Expertise // Protocol_02</h2>
              <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-none uppercase">
                Legal<br/>Domains.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="max-w-md text-zinc-500 font-mono text-xs leading-relaxed uppercase tracking-wider mb-2">
              Specialized representation focused on high-stake litigation and regulatory navigation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-zinc-900">
          {PRACTICE_AREAS.map((area, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <motion.div 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                animate={{
                  opacity: hoveredIndex === null ? 1 : hoveredIndex === idx ? 1 : 0.3,
                  filter: hoveredIndex === null ? "blur(0px)" : hoveredIndex === idx ? "blur(0px)" : "blur(4px)",
                  scale: hoveredIndex === idx ? 1.02 : 1
                }}
                className="group relative aspect-[4/5] overflow-hidden border-r border-b border-zinc-900 cursor-pointer bg-zinc-950 transition-all duration-500"
              >
                {/* Background Image - Dynamic Grayscale */}
                <motion.img 
                  src={area.image} 
                  alt={area.title} 
                  initial={{ filter: "grayscale(1) brightness(0.3)" }}
                  whileHover={{ filter: "grayscale(0.5) brightness(0.6)", scale: 1.1 }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
                />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-12 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      whileHover={{ rotate: 90 }}
                      className="w-12 h-12 border border-zinc-800 flex items-center justify-center text-zinc-500 bg-zinc-950/40 backdrop-blur-md group-hover:border-white group-hover:text-white transition-all"
                    >
                      {area.icon}
                    </motion.div>
                    <ArrowUpRight size={24} className="text-zinc-800 group-hover:text-white transition-all" />
                  </div>
                  
                  <div>
                    <h4 className="text-4xl font-black tracking-tighter mb-6 leading-none group-hover:translate-x-2 transition-transform duration-500">{area.title}</h4>
                    <div className="h-px w-0 group-hover:w-full bg-white mb-6 transition-all duration-700" />
                    <p className="text-sm text-zinc-500 font-mono leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                      {area.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Gradient Reveal */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeGrid;