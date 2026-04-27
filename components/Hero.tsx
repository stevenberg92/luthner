'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Decorative accent lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[38%] left-0 w-28 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-[38%] right-0 w-28 h-px bg-gradient-to-l from-transparent via-gold/20 to-transparent" />
        <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-gold/15 to-transparent" />
        {/* Corner details */}
        <div className="absolute top-24 left-10 w-6 h-6 border-l border-t border-gold/20" />
        <div className="absolute top-24 right-10 w-6 h-6 border-r border-t border-gold/20" />
        <div className="absolute bottom-16 left-10 w-6 h-6 border-l border-b border-gold/20" />
        <div className="absolute bottom-16 right-10 w-6 h-6 border-r border-b border-gold/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">
          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold/80 text-[0.65rem] tracking-[0.35em] uppercase">
              Premium Real Estate · Munich
            </span>
            <div className="h-px w-10 bg-gold/50" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif text-white text-5xl sm:text-6xl md:text-7xl font-medium leading-[1.1] mb-6"
          >
            Premium Real Estate
            <br />
            <span className="text-gold italic">Investments</span>
            <br />
            with Speed &amp; Trust
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="font-sans text-white/55 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            We transform properties into high-value assets — providing fast,
            reliable transactions in the luxury segment.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.025, boxShadow: '0 0 32px rgba(201,168,76,0.28)' }}
              whileTap={{ scale: 0.975 }}
              className="px-8 py-4 bg-gold text-dark-900 font-sans text-xs tracking-[0.2em] uppercase font-medium transition-colors hover:bg-gold-light"
            >
              Free Property Evaluation
            </motion.a>
            <motion.a
              href="#properties"
              whileHover={{ scale: 1.025, borderColor: 'rgba(255,255,255,0.7)' }}
              whileTap={{ scale: 0.975 }}
              className="px-8 py-4 border border-white/30 text-white font-sans text-xs tracking-[0.2em] uppercase hover:text-white transition-all"
            >
              View Properties
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-white/25 text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ scaleY: [0.6, 1, 0.6], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold/40 to-transparent origin-top"
        />
      </motion.div>
    </section>
  );
}
