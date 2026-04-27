'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-dark-900 py-32 px-6 relative overflow-hidden">
      {/* Gold accent corners */}
      <div className="absolute top-10 left-10 w-12 h-12 border-l border-t border-gold/20 pointer-events-none" />
      <div className="absolute top-10 right-10 w-12 h-12 border-r border-t border-gold/20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-12 h-12 border-l border-b border-gold/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-12 h-12 border-r border-b border-gold/20 pointer-events-none" />

      <div ref={ref} className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Ready to Begin?</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-6xl font-medium leading-tight mb-6">
            Work with a Partner<br />
            <span className="text-gold italic">You Can Trust</span>
          </h2>
          <p className="font-sans text-white/45 text-base md:text-lg leading-relaxed mb-12 max-w-xl mx-auto">
            Every great property deal starts with one conversation. Reach out — we respond to every inquiry personally and promptly.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.025, boxShadow: '0 0 40px rgba(201,168,76,0.3)' }}
            whileTap={{ scale: 0.975 }}
            className="inline-block px-10 py-5 bg-gold text-dark-900 font-sans text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-light transition-colors duration-300"
          >
            Start Your Inquiry
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
