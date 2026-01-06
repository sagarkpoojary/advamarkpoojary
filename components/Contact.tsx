import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Reveal } from './Reveal';
import { ArrowRight, Mail, Linkedin, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white text-zinc-950">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400 mb-4">Section_04 // Consultation</h2>
            <h3 className="text-7xl md:text-9xl font-black tracking-tighter-extreme mb-20 leading-[0.85]">
              START THE<br/>CONSULTATION.
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-200 pt-20">
            <div className="lg:col-span-8">
              <Reveal delay={0.2}>
                <p className="text-2xl font-light text-zinc-600 mb-12 max-w-2xl">
                  Discreet, objective-driven legal advisory. Reach out for strategic litigation support or corporate consultancy.
                </p>
              </Reveal>
              
              <div className="space-y-6">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center justify-between group py-8 border-b border-zinc-100 hover:border-zinc-900 transition-all">
                  <div className="flex items-center space-x-6">
                    <Mail size={24} />
                    <span className="text-2xl font-black tracking-tighter uppercase">{CONTACT_INFO.email}</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>

                <a href={CONTACT_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-between group py-8 border-b border-zinc-100 hover:border-zinc-900 transition-all">
                  <div className="flex items-center space-x-6">
                    <Linkedin size={24} />
                    <span className="text-2xl font-black tracking-tighter uppercase">LinkedIn Presence</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>

                <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center justify-between group py-8 border-b border-zinc-100 hover:border-zinc-900 transition-all">
                  <div className="flex items-center space-x-6">
                    <MessageSquare size={24} />
                    <span className="text-2xl font-black tracking-tighter uppercase">Direct Line: {CONTACT_INFO.phone}</span>
                  </div>
                  <ArrowRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-zinc-50 p-12">
               <h4 className="font-mono text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-8 underline">Office_Location</h4>
               <p className="text-xl font-black mb-1">{CONTACT_INFO.location}</p>
               <p className="text-zinc-500 font-mono text-xs">JURISDICTION: {CONTACT_INFO.jurisdiction}</p>
               
               <div className="mt-20 pt-12 border-t border-zinc-200">
                  <p className="font-mono text-[9px] text-zinc-400 leading-relaxed uppercase">
                    All communications are privileged and confidential under the Advocates Act, 1961.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;