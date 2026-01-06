import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, light = false }) => {
  return (
    <div className="mb-16 md:mb-24 text-center">
      <Reveal width="100%">
        <div className="flex flex-col items-center">
          {subtitle && (
            <span className={`text-xs md:text-sm tracking-[0.2em] uppercase font-semibold mb-3 ${light ? 'text-gold-500' : 'text-gold-500'}`}>
              {subtitle}
            </span>
          )}
          <h2 className={`text-3xl md:text-5xl font-serif font-medium tracking-tight ${light ? 'text-white' : 'text-zinc-900'}`}>
            {title}
          </h2>
          <div className={`mt-6 w-px h-16 ${light ? 'bg-gold-500' : 'bg-gold-500'}`}></div>
        </div>
      </Reveal>
    </div>
  );
};

export default SectionHeading;