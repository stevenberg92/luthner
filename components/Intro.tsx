'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-white py-32 md:py-44 px-6 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-warm-50/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_3fr] gap-10 md:gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:sticky md:top-32"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-gold" />
            <span className="font-sans text-text-muted text-xs tracking-[0.3em] uppercase">
              Unser Versprechen
            </span>
          </div>
        </motion.div>

        <div>
          <ScrollReveal
            as="h2"
            className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.15] tracking-tight"
            baseColor="#D6CFBE"
            highlightColor="#1A1A19"
          >
            Immobilienverkauf ist Vertrauenssache.
          </ScrollReveal>
          <div className="mt-8">
            <ScrollReveal
              as="p"
              className="font-sans text-[clamp(1.05rem,1.6vw,1.45rem)] leading-relaxed"
              baseColor="#D6CFBE"
              highlightColor="#67655E"
            >
              Seit vielen Jahrzehnten steht unser Name für persönliche Beratung und zuverlässigen Service. Über die Hälfte unserer Neukunden kommt über Empfehlungen früherer zufriedener Kunden – Kompetenz, Individualität und Leidenschaft sind die Basis unseres Erfolgs.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
