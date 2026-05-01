'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function Intro() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="relative bg-white py-32 md:py-44 px-6 overflow-hidden">
      {/* Subtle cloud wisp at top — continuation from Hero */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-warm-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_3fr] gap-10 md:gap-20 items-start">
        {/* Sidebar label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:sticky md:top-32"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-primary" />
            <span className="font-sans text-text-muted text-xs tracking-[0.3em] uppercase">
              Warum Nathalie
            </span>
          </div>
        </motion.div>

        {/* Big scroll-reveal text */}
        <div>
          <ScrollReveal
            as="h2"
            className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] font-medium leading-[1.15] tracking-tight"
            baseColor="#D4D0C8"
            highlightColor="#1C1C1C"
          >
            Ihre Immobilie verdient mehr als ein Schild im Garten.
          </ScrollReveal>
          <div className="mt-8">
            <ScrollReveal
              as="p"
              className="font-sans text-[clamp(1.1rem,1.6vw,1.5rem)] leading-relaxed"
              baseColor="#D4D0C8"
              highlightColor="#6B6B6B"
            >
              Ich kaufe direkt – ohne Makler, ohne Provision, ohne Besichtigungsmarathon. Persönlich, fair und immer auf Augenhöhe.
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
