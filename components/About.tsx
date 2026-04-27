'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const strengths = [
  { label: 'Fast Decisions', desc: 'We evaluate and commit within 48 hours — no lengthy approval chains.' },
  { label: 'Reliable Partner', desc: 'What we agree to, we deliver. Our word is our contract.' },
  { label: 'Strong Execution', desc: 'In-house renovation management that transforms properties on time and on budget.' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-white py-28 px-6">
      <div ref={ref} className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Placeholder portrait */}
          <div className="aspect-[4/5] bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 relative overflow-hidden">
            {/* Decorative gold overlay elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="h-px w-12 bg-gold mb-4" />
              <div className="font-serif text-white text-xl">Nathalie &amp; Steven</div>
              <div className="font-sans text-white/50 text-sm tracking-wider mt-1">Real Estate Investors · Munich</div>
            </div>
          </div>
          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -bottom-6 -right-6 bg-white border border-cream-200 p-6 shadow-xl"
          >
            <div className="font-serif text-gold text-3xl">15+</div>
            <div className="font-sans text-dark-500 text-xs tracking-wide mt-1">Projects completed</div>
          </motion.div>
          {/* Gold frame accent */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-l-2 border-t-2 border-gold/40" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Our Story</span>
          </div>
          <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium leading-tight mb-6">
            A Couple with a{' '}
            <span className="italic text-gold">Shared Vision</span>
          </h2>
          <p className="font-sans text-dark-500 text-base leading-relaxed mb-6">
            We are Nathalie and Steven — a Munich-based investment couple who have turned a passion for architecture and property into a thriving luxury real estate venture.
          </p>
          <p className="font-sans text-dark-500 text-base leading-relaxed mb-10">
            Our approach combines design sensibility, financial discipline, and deep market knowledge. We don&apos;t just renovate properties — we reimagine them, creating spaces that command premium prices and attract discerning buyers.
          </p>

          {/* Strengths */}
          <div className="space-y-6">
            {strengths.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-5 h-5 mt-0.5 border border-gold flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-gold" />
                </div>
                <div>
                  <div className="font-serif text-dark-700 text-lg mb-1">{s.label}</div>
                  <div className="font-sans text-dark-500 text-sm leading-relaxed">{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
