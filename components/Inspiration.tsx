import React from 'react';
import SectionHeading from './SectionHeading';
import { INSPIRATION_DATA } from '../constants';
import { FadeIn, Reveal } from './Reveal';
import { Quote } from 'lucide-react';

const Inspiration: React.FC = () => {
  return (
    <section id="inspiration" className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Texture - Pillars of Justice concept */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2070&auto=format&fit=crop" 
            alt="Justice Background"
            className="w-full h-full object-cover opacity-10 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/90 to-zinc-950"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading title="Legal Titans" subtitle="My Inspirations" light />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {INSPIRATION_DATA.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.2}>
              <div className="h-full bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 hover:border-zinc-500 transition-colors duration-500 group flex flex-col items-center text-center">
                <div className="mb-6 text-zinc-600 group-hover:text-white transition-colors duration-500">
                  <Quote size={32} />
                </div>
                
                <Reveal width="100%">
                  <blockquote className="text-xl font-serif text-zinc-200 mb-8 leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </Reveal>
                
                <div className="mt-auto">
                  <div className="w-8 h-px bg-zinc-700 mx-auto mb-4 group-hover:bg-white transition-colors"></div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                    {item.source}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500">
                    {item.context}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inspiration;