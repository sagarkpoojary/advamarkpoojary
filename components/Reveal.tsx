import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0.2,
  direction = "up"
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case "up": return { y: 40 };
      case "down": return { y: -40 };
      case "left": return { x: 40 };
      case "right": return { x: -40 };
      default: return { y: 40 };
    }
  };

  return (
    <div style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            ...getInitialOffset(),
            filter: "blur(12px)",
            scale: 0.98
          },
          visible: { 
            opacity: 1, 
            x: 0,
            y: 0,
            filter: "blur(0px)",
            scale: 1
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ 
          duration: 0.9, 
          delay: delay,
          ease: [0.22, 1, 0.36, 1] 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string }> = ({ 
  children, 
  delay = 0, 
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ 
        duration: 1.2, 
        delay,
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};