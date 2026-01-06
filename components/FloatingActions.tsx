import React, { useEffect, useState } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/918075938913";

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4 items-end">
      {/* Scroll To Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollTop}
            className="bg-white text-black p-4 shadow-xl border border-zinc-200 hover:bg-zinc-100 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black text-white p-4 shadow-2xl hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
};

export default FloatingActions;