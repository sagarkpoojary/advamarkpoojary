import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Scale } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-500 py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white p-2 text-black">
            <Scale size={20} />
          </div>
        </div>
        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
          <span className="text-zinc-500 text-sm font-medium mr-2">ADV.</span>
          AMAR K. POOJARY
        </h2>
        <p className="text-[10px] uppercase tracking-[0.3em] mb-10 text-zinc-400 font-mono">Litigation Expert | Motor Claims Specialist</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-xs font-bold uppercase tracking-widest">
          <a href="#home" className="hover:text-white transition-colors">Dossier</a>
          <a href="#about" className="hover:text-white transition-colors">Mandate</a>
          <a href="#experience" className="hover:text-white transition-colors">Timeline</a>
          <a href="#contact" className="hover:text-white transition-colors">Consult</a>
          <a href="/resume.pdf" download className="text-zinc-300 hover:text-white border-b border-zinc-800 pb-1 hover:border-white transition-all">Archive.pdf</a>
        </div>

        <p className="text-[9px] text-zinc-800 font-mono uppercase tracking-widest">
          &copy; {currentYear} Advocate Amar K. Poojary. All rights reserved. Registered under BCI.
        </p>
      </div>
    </footer>
  );
};

export default Footer;