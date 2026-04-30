'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY      = useTransform(scrollYProgress, [0, 1], ['0%',  '25%']);
  const textY    = useTransform(scrollYProgress, [0, 1], ['0%',  '12%']);
  const opacity  = useTransform(scrollYProgress, [0, 0.75], [1,  0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background — luxury penthouse gradient */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-[-15%] z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-stone-700 to-slate-900" />
        {/* City lights overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(201,168,76,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.05),transparent_50%)]" />
        {/* Subtle grid/texture for depth */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-6 pt-28 pb-20"
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-sans text-white/90 text-xs tracking-widest uppercase">
              Immobilieninvestorin · München
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white text-[clamp(2.8rem,7vw,5.5rem)] font-medium leading-[1.08] mb-6"
          >
            Ihre Immobilie.<br />
            <span className="text-gold italic">Mein Projekt.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-light"
          >
            Ich kaufe Ihre Immobilie – schnell, diskret und zu fairen Konditionen.
            Als Fix &amp; Flip Investorin aus München biete ich Ihnen eine stressfreie
            Alternative zum klassischen Verkauf.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(26,75,58,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300 text-center"
            >
              Kostenlose Bewertung anfragen
            </motion.a>
            <motion.a
              href="#objekte"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-sans text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300 text-center"
            >
              Aktuelle Objekte ansehen
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-white/50 rounded-full" />
        </motion.div>
        <span className="font-sans text-white/30 text-[0.6rem] tracking-widest uppercase">Scrollen</span>
      </motion.div>
    </section>
  );
}
