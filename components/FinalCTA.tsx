'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function FinalCTA() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-20%] z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-stone-600 to-primary-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(201,168,76,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,255,255,0.04),transparent_50%)]" />
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-sans text-white/90 text-xs tracking-widest uppercase">Jetzt anfragen</span>
          </div>

          <h2 className="font-serif text-white text-[clamp(2.5rem,6vw,4.5rem)] font-medium leading-tight mb-6">
            Bereit, Ihre Immobilie<br />
            <span className="text-gold italic">stressfrei zu verkaufen?</span>
          </h2>
          <p className="font-sans text-white/65 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Kontaktieren Sie mich noch heute – ich mache Ihnen ein faires Angebot.
            Unverbindlich, kostenlos und diskret.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(26,75,58,0.5)' }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-white text-primary font-sans text-sm font-semibold rounded-full hover:bg-warm-100 transition-colors duration-300"
            >
              Kostenlose Bewertung anfragen
            </motion.a>
            <motion.a
              href="tel:+4989123456789"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 border border-white/30 text-white font-sans text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300"
            >
              +49 89 123 456 789
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
