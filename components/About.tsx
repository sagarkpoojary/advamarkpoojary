import React from 'react';
import { Reveal, FadeIn } from './Reveal';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-40 bg-zinc-50 text-zinc-950 border-y border-zinc-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          <div className="lg:col-span-4">
            <Reveal direction="right">
              <div className="sticky top-40">
                <h2 className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-400 mb-6">Dossier // Mandate</h2>
                <h3 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase">Legal<br/>Doctrine.</h3>
                <div className="w-16 h-1 bg-zinc-950" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.3}>
              <p className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter text-zinc-900 mb-20">
                Justice is not a stagnant ideal, but a <span className="text-zinc-400 underline decoration-zinc-200 underline-offset-8">precise execution</span> of constitutional rights.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <Reveal delay={0.4}>
                <div className="space-y-6">
                  <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Philosophy // Approach</h4>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed italic">
                    "As a high-stakes Legal Executive and Litigator, my mandate is to provide aggressive, evidence-driven representation across the MACT and Civil Court ecosystems."
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.5}>
                <div className="space-y-6">
                  <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Context // Current</h4>
                  <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                    Currently overseeing critical legal operations at IFFCO Tokio GIC, specializing in insurance law and regulatory compliance through analytical procedural mastery.
                  </p>
                </div>
              </Reveal>
            </div>
            
            <FadeIn delay={0.6} className="mt-24">
              <div className="p-12 border border-zinc-200 bg-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 group cursor-pointer hover:border-zinc-900 transition-all duration-700">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-widest text-zinc-400 uppercase mb-2">Academic Foundation</span>
                  <span className="text-2xl font-black tracking-tight group-hover:translate-x-2 transition-transform duration-500">SDM LAW COLLEGE, MANGALORE</span>
                </div>
                <div className="h-px flex-grow bg-zinc-100 mx-8 hidden md:block" />
                <span className="font-mono text-sm font-bold bg-zinc-950 text-white px-6 py-3">CLASS OF 2023</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;