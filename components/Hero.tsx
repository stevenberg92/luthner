'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const words = ['Premium', 'Real Estate', 'Investments'];

const stats = [
  { value: '€2M+',   label: 'Annual Volume' },
  { value: '15+',    label: 'Projects Closed' },
  { value: '56%',    label: 'Average ROI' },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y     = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg noise">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/3 blur-[80px]" />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="h-px w-8 bg-gold/50" />
          <span className="font-sans text-gold/70 text-[0.65rem] tracking-[0.4em] uppercase">Munich · Luxury Real Estate</span>
          <div className="h-px w-8 bg-gold/50" />
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="font-serif font-medium leading-[1.05] mb-8">
          {words.map((word, wi) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60, filter: 'blur(12px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: 0.4 + wi * 0.18,
                duration: 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`block text-[clamp(3rem,9vw,7rem)] ${
                wi === 2 ? 'gradient-text italic' : 'text-white'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-white/40 text-base md:text-lg max-w-xl leading-relaxed mb-12 font-light"
        >
          We acquire undervalued properties, transform them into premium assets,
          and deliver fast, reliable transactions in the luxury segment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(201,168,76,0.35)' }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 bg-gold text-bg font-sans text-[0.75rem] font-semibold tracking-[0.15em] uppercase rounded-full transition-colors hover:bg-gold-light"
          >
            Free Property Evaluation
          </motion.a>
          <motion.a
            href="#properties"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-4 glass rounded-full font-sans text-[0.75rem] font-medium tracking-[0.15em] uppercase text-white/70 hover:text-white transition-colors"
          >
            View Properties
          </motion.a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-3 gap-px w-full max-w-2xl glass rounded-2xl overflow-hidden"
        >
          {stats.map((s, i) => (
            <div key={s.label} className={`px-6 py-5 text-center ${i > 0 ? 'border-l border-white/5' : ''}`}>
              <div className="font-serif text-2xl md:text-3xl text-gold mb-1">{s.value}</div>
              <div className="font-sans text-white/35 text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-white/30 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
