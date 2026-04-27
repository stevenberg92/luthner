'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Purchase Price', value: '€ 450.000' },
  { label: 'Renovation', value: '€ 180.000' },
  { label: 'Sale Price', value: '€ 985.000' },
  { label: 'Net Profit', value: '€ 355.000' },
  { label: 'ROI', value: '56%' },
  { label: 'Timeline', value: '8 months' },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" className="bg-dark-900 py-28 px-6 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Case Study</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-medium">
            The Numbers Speak
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Before / After */}
          <div className="grid grid-cols-2 gap-4">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,rgba(255,255,255,0.03),transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/10 font-serif text-6xl">B</div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-dark-900/80 px-3 py-1.5 backdrop-blur-sm">
                <span className="font-sans text-white/50 text-[0.6rem] tracking-widest uppercase">Before</span>
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="relative mt-8"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-stone-600 via-stone-700 to-stone-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,168,76,0.08),transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-gold/20 font-serif text-6xl">A</div>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 bg-gold/90 px-3 py-1.5">
                <span className="font-sans text-dark-900 text-[0.6rem] tracking-widest uppercase font-medium">After</span>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="font-serif text-white text-3xl md:text-4xl mb-3">
              Villa Schwabing<br />
              <span className="text-gold italic">Transformation</span>
            </h3>
            <p className="font-sans text-white/45 text-sm leading-relaxed mb-10">
              A neglected 1920s villa in Munich-Schwabing was acquired off-market,
              fully restored to its original grandeur, and enhanced with contemporary
              luxury interiors — then sold to a private buyer within three weeks of listing.
            </p>

            <div className="grid grid-cols-2 gap-px bg-white/5">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                  className="bg-dark-800 p-5"
                >
                  <div className="font-serif text-gold text-2xl mb-1">{s.value}</div>
                  <div className="font-sans text-white/35 text-xs tracking-wide">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
