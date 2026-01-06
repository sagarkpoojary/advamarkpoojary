import React from 'react';
import { SKILLS_GRID } from '../constants';
import { motion } from 'framer-motion';

const ExpertiseCloud: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-zinc-900 border border-zinc-900">
          {SKILLS_GRID.map((skill, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ backgroundColor: '#ffffff', color: '#000000' }}
              className="bg-zinc-950 p-12 flex items-center justify-center text-center transition-colors duration-300"
            >
              <span className="font-mono text-xs font-black tracking-[0.2em] uppercase">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCloud;