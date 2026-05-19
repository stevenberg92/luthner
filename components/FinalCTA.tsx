'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

export default function FinalCTA() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <section ref={ref} className="relative py-28 px-6 overflow-hidden bg-warm-50">
      <motion.div style={{ y: bgY }} className="absolute inset-[-20%] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(176,145,95,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_70%,rgba(27,27,26,0.05),transparent_55%)]" />
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-5">
            Kontakt aufnehmen
          </span>
          <h2 className="font-serif text-text text-[clamp(2.2rem,5vw,3.8rem)] font-medium leading-tight mb-6">
            Sprechen wir über Ihre Immobilie.
          </h2>
          <p className="font-sans text-text-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Persönlich, regional und zuverlässig – wir freuen uns auf Ihren Anruf
            oder Ihre Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+4940524 9091"
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(0,0,0,0.2)' }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
            >
              +49 (0)40 524 90 91
            </motion.a>
            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 border border-text/20 text-text font-sans text-sm font-medium rounded-full hover:bg-warm-100 transition-all duration-300"
            >
              Kostenlose Bewertung anfragen
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
