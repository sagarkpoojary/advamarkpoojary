import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-zinc-950/70 blur-backdrop border-zinc-800 py-4' 
          : 'bg-transparent border-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-4 group">
          <div className="w-10 h-10 bg-white flex items-center justify-center font-black text-black transition-transform group-hover:scale-90">
            <Scale size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm tracking-tighter text-white uppercase leading-none">
              ADV. AMAR K. POOJARY
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-zinc-500 font-mono mt-1">
              Litigation_Protocol
            </span>
          </div>
        </a>

        {/* Removed top 5 navigation items as requested for a cleaner, ultra-minimalist interface */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="text-[10px] uppercase tracking-[0.3em] font-bold text-white hover:text-zinc-400 transition-colors">
            Inquiry // Open
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;