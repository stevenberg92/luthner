'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Phase 1 (0 → 0.4): Hero text + initial blur, building visible
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.18, 0.3], [1, 0.7, 0]);
  const heroTextY       = useTransform(scrollYProgress, [0, 0.4], ['0%', '-30%']);
  const heroTextFilter  = useTransform(scrollYProgress, [0, 0.3], ['blur(0px)', 'blur(8px)']);

  // Phase 2 (0.1 → 0.6): Building zooms in
  const bgScale         = useTransform(scrollYProgress, [0, 0.7], [1, 1.6]);
  const bgY             = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  // Phase 3 (0.3 → 0.7): Logo outline appears + fills with building
  const logoOpacity     = useTransform(scrollYProgress, [0.25, 0.45, 0.85], [0, 1, 1]);
  const logoScale       = useTransform(scrollYProgress, [0.25, 0.6], [0.7, 1]);
  const logoFillOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  // Phase 4 (0.55 → 1): Clouds roll in, white overlay grows
  const cloud1Y         = useTransform(scrollYProgress, [0.4, 1], ['100%', '-20%']);
  const cloud2Y         = useTransform(scrollYProgress, [0.5, 1], ['100%', '-30%']);
  const cloud3Y         = useTransform(scrollYProgress, [0.45, 1], ['110%', '-10%']);
  const whiteOpacity    = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  // Scroll cue
  const cueOpacity      = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-gradient-to-b from-sky-200 via-sky-100 to-warm-50">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Sky base — soft blue-to-warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B8D4E8] via-[#E8DCCB] to-[#F7F5F0]" />

        {/* Sun glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,200,140,0.35),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(201,168,76,0.15),transparent_60%)]" />

        {/* Building — zooms in on scroll */}
        <motion.div style={{ scale: bgScale, y: bgY }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85')",
            }}
          />
          {/* Warm sunset overlay on building */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 via-transparent to-[#FFB87A]/15" />
        </motion.div>

        {/* Logo Outline Overlay — appears + fills with building */}
        <motion.div
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
        >
          <div className="relative">
            {/* Outline layer */}
            <h2
              className="font-serif font-medium tracking-tight leading-none text-center"
              style={{
                fontSize: 'clamp(8rem, 24vw, 26rem)',
                WebkitTextStroke: '2px white',
                color: 'transparent',
              }}
            >
              Nathalie
            </h2>
            {/* Fill layer — masked with building image */}
            <motion.h2
              style={{
                opacity: logoFillOpacity,
                fontSize: 'clamp(8rem, 24vw, 26rem)',
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85')",
                backgroundSize: '180% auto',
                backgroundPosition: 'center 30%',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                WebkitTextStroke: '1.5px rgba(255,255,255,0.6)',
              }}
              className="font-serif font-medium tracking-tight leading-none text-center absolute inset-0"
            >
              Nathalie
            </motion.h2>
            <p className="font-sans text-white/85 text-center text-xs md:text-sm tracking-[0.5em] uppercase mt-4 md:mt-6">
              Luthner · Real Estate
            </p>
          </div>
        </motion.div>

        {/* Cloud layers — roll up to cover everything */}
        <motion.div
          style={{ y: cloud1Y }}
          className="absolute inset-x-0 bottom-0 h-[80%] z-30 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(255,255,255,0.95),transparent_55%)] blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_70%,rgba(255,255,255,0.85),transparent_50%)] blur-2xl" />
        </motion.div>
        <motion.div
          style={{ y: cloud2Y }}
          className="absolute inset-x-0 bottom-0 h-[100%] z-30 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_70%,rgba(255,255,255,0.92),transparent_60%)] blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(255,255,255,0.8),transparent_45%)] blur-2xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_80%,rgba(255,255,255,0.85),transparent_45%)] blur-2xl" />
        </motion.div>
        <motion.div
          style={{ y: cloud3Y }}
          className="absolute inset-x-0 bottom-0 h-[110%] z-30 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_80%,rgba(255,255,255,0.95),transparent_55%)] blur-3xl" />
        </motion.div>

        {/* Final white wash */}
        <motion.div
          style={{ opacity: whiteOpacity }}
          className="absolute inset-0 bg-white z-40 pointer-events-none"
        />

        {/* Hero text content (visible at top of scroll) */}
        <motion.div
          style={{ opacity: heroTextOpacity, y: heroTextY, filter: heroTextFilter }}
          className="absolute inset-0 flex flex-col items-center justify-center z-25 px-6 pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-2 mb-8 pointer-events-auto"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-sans text-white text-xs tracking-widest uppercase drop-shadow">
              Immobilieninvestorin · München
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-white text-center font-medium leading-[0.95] tracking-tight max-w-5xl drop-shadow-2xl"
            style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
          >
            Ihre Immobilie.<br />
            <span className="italic text-gold">Mein Projekt.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-white/85 text-center text-base md:text-xl leading-relaxed mt-8 max-w-2xl font-light drop-shadow"
          >
            Schnell. Diskret. Fair. Als Fix &amp; Flip Investorin aus München kaufe ich
            Ihre Immobilie direkt – ohne Makler, ohne Provision, ohne Stress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-10 pointer-events-auto"
          >
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-primary font-sans text-sm font-semibold rounded-full hover:bg-warm-100 transition-colors duration-300"
            >
              Kostenlose Bewertung anfragen
            </motion.a>
            <motion.a
              href="#objekte"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-sans text-sm font-medium rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Aktuelle Objekte ansehen
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-8 rounded-full border-2 border-white/50 flex items-start justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-white/70 rounded-full" />
          </motion.div>
          <span className="font-sans text-white/60 text-[0.6rem] tracking-widest uppercase">Scrollen</span>
        </motion.div>
      </div>
    </section>
  );
}
