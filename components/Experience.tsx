import React from 'react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE_DATA } from '../constants';
import { Reveal, FadeIn } from './Reveal';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-40 bg-zinc-50 text-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <Reveal>
             <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-400 mb-6">Timeline // Experience</h2>
             <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">Career<br/>Evolution.</h3>
          </Reveal>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Minimalist Center Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-200 -translate-x-1/2 hidden md:block" />

            {EXPERIENCE_DATA.map((item, index) => (
              <div key={item.id} className={`relative flex flex-col md:flex-row items-center mb-24 last:mb-0 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-0 md:left-1/2 top-0 md:top-8 w-3 h-3 bg-zinc-950 rounded-full -translate-x-1/2 z-10 hidden md:block"
                />

                <div className="w-full md:w-[45%]">
                  <Reveal direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
                    <div className={`p-10 bg-white border border-zinc-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-700 group ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                      <span className="font-mono text-[10px] text-zinc-400 tracking-[0.3em] uppercase mb-4 block">{item.period}</span>
                      <h3 className="text-3xl font-black tracking-tighter text-zinc-900 mb-2 group-hover:text-zinc-600 transition-colors">{item.role}</h3>
                      <p className="text-zinc-500 font-bold uppercase tracking-widest text-[10px] mb-8">{item.company}</p>
                      
                      <ul className={`space-y-4 ${index % 2 !== 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {item.description.map((desc, i) => (
                          <li key={i} className="flex items-start text-zinc-600 text-sm font-medium leading-relaxed max-w-sm">
                            {index % 2 === 0 && <span className="mr-4 mt-2.5 w-2 h-[1px] bg-zinc-300 flex-shrink-0" />}
                            <span>{desc}</span>
                            {index % 2 !== 0 && <span className="ml-4 mt-2.5 w-2 h-[1px] bg-zinc-300 flex-shrink-0 hidden md:block" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;