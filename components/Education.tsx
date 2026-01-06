
import React from 'react';
import SectionHeading from './SectionHeading';
import { EDUCATION_DATA, SKILLS_DATA, LANGUAGES } from '../constants';
import { Reveal, FadeIn } from './Reveal';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 bg-white text-zinc-900 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Education Column */}
          <div>
            <Reveal>
               <h3 className="text-2xl font-serif mb-10 pb-4 border-b border-zinc-900 inline-block">Education</h3>
            </Reveal>
            
            <div className="space-y-12">
              {EDUCATION_DATA.map((edu, idx) => (
                <Reveal key={edu.id} delay={idx * 0.1}>
                  <div className="flex group">
                    <div className="flex-1">
                      <h4 className="text-xl font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors">{edu.degree}</h4>
                      <p className="text-zinc-500 mt-1">{edu.institution}</p>
                      <p className="text-xs font-mono text-zinc-400 mt-2">{edu.year}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Skills & Languages Column */}
          <div id="skills">
            <Reveal>
               <h3 className="text-2xl font-serif mb-10 pb-4 border-b border-zinc-900 inline-block">Competencies</h3>
            </Reveal>
            
            <div className="mb-16">
              <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Professional Skills</h4>
              <div className="flex flex-wrap gap-3">
                {SKILLS_DATA.map((skill, index) => (
                  <FadeIn key={index} delay={index * 0.05}>
                    <div className="flex items-center space-x-2 px-5 py-3 bg-zinc-50 border border-zinc-100 hover:border-zinc-900 hover:bg-white transition-colors duration-300 cursor-default">
                      {/* Fixed: Cast skill.icon to any to allow cloning with extra props like size and strokeWidth */}
                      {React.cloneElement(skill.icon as React.ReactElement<any>, { size: 14, strokeWidth: 1.5 })}
                      <span className="text-sm tracking-wide text-zinc-700">{skill.label}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <Reveal>
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Languages</h4>
                <div className="flex flex-wrap gap-x-8 gap-y-2">
                  {LANGUAGES.map((lang, index) => (
                    <span key={index} className="text-lg font-serif italic text-zinc-600 hover:text-black transition-colors">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
