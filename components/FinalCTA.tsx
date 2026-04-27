'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function FinalCTA() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="py-16 px-6">
      <motion.div
        style={{ scale, opacity }}
        className="max-w-6xl mx-auto rounded-2xl bg-surface border border-white/6 overflow-hidden relative"
      >
        {/* Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold/6 blur-[100px]" />
        </div>

        {/* Corners */}
        <div className="absolute top-6 left-6 w-10 h-10 border-l border-t border-gold/20" />
        <div className="absolute top-6 right-6 w-10 h-10 border-r border-t border-gold/20" />
        <div className="absolute bottom-6 left-6 w-10 h-10 border-l border-b border-gold/20" />
        <div className="absolute bottom-6 right-6 w-10 h-10 border-r border-b border-gold/20" />

        <div className="relative z-10 text-center px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Ready to Begin?</span>
            <div className="h-px w-8 bg-gold/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] text-white font-medium leading-tight mb-6"
          >
            Work with a partner<br />
            <span className="gradient-text italic">you can trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-white/35 text-base md:text-lg max-w-lg mx-auto mb-12"
          >
            Every great deal starts with one conversation. Reach out — we respond personally and promptly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, boxShadow: '0 0 50px rgba(201,168,76,0.4)' }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 bg-gold text-bg rounded-full font-sans text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-gold-light transition-colors"
            >
              Start Your Inquiry
            </motion.a>
            <motion.a
              href="#properties"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-10 py-4 glass rounded-full font-sans text-[0.75rem] font-medium tracking-[0.15em] uppercase text-white/60 hover:text-white transition-colors"
            >
              View Properties
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
