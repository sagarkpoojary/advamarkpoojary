import React from 'react';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';
import { Reveal, FadeIn } from './Reveal';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 bg-white text-zinc-900">
      <div className="container mx-auto px-6">
        <SectionHeading title="Endorsements" subtitle="Peer Review" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i, idx) => (
                <FadeIn key={i} delay={idx * 0.2}>
                  <div className="flex flex-col items-center text-center">
                      <Quote className="text-zinc-300 mb-6" size={32} />
                      <p className="text-zinc-600 italic mb-8 text-lg font-light leading-relaxed">
                          "Amar's dedication to detail in legal drafting is exceptional. His understanding of MACT claims has been a valuable asset to our team operations."
                      </p>
                      <div className="w-10 h-px bg-zinc-300 mb-4"></div>
                      <h4 className="font-serif font-bold text-zinc-900">Professional Colleague</h4>
                      <p className="text-xs text-zinc-400 uppercase tracking-widest mt-1">Senior Advocate</p>
                  </div>
                </FadeIn>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;