import React from 'react';
import SectionHeading from './SectionHeading';
import { CERTIFICATES_DATA } from '../constants';
import { Award } from 'lucide-react';
import { Reveal, FadeIn } from './Reveal';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Distinctions" subtitle="Honors & Certificates" light />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES_DATA.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="bg-zinc-900/50 backdrop-blur-sm p-8 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-500 group h-full">
                <Award className="text-zinc-600 mb-6 group-hover:text-white transition-colors" size={32} strokeWidth={1} />
                <h4 className="text-lg font-serif mb-3 leading-snug text-zinc-200 group-hover:text-white">{item.title}</h4>
                {item.issuer && (
                  <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3">{item.issuer}</p>
                )}
                {item.details && (
                  <p className="text-sm text-zinc-400 font-light">{item.details}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Blog Placeholder */}
        <div className="mt-32 pt-16 border-t border-zinc-900">
          <Reveal width="100%">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-serif text-white mb-4">Legal Insights</h3>
              <p className="text-zinc-500 mb-8 max-w-xl font-light">
                Forthcoming analysis on Motor Vehicle Laws and IRDAI compliance updates.
              </p>
              <div className="w-full max-w-lg h-32 border border-dashed border-zinc-800 flex items-center justify-center text-zinc-600 font-mono text-xs uppercase tracking-widest">
                Publication Pending
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Achievements;