'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ to, prefix = '', suffix = '' }: { to: number; prefix?: string; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { label: 'Purchase Price',     value: '450',  prefix: '€ ', suffix: 'K' },
  { label: 'Renovation Budget',  value: '180',  prefix: '€ ', suffix: 'K' },
  { label: 'Sale Price',         value: '985',  prefix: '€ ', suffix: 'K' },
  { label: 'Net Profit',         value: '355',  prefix: '€ ', suffix: 'K' },
  { label: 'ROI',                value: '56',   prefix: '',   suffix: '%' },
  { label: 'Timeline',           value: '8',    prefix: '',   suffix: ' mo' },
];

export default function CaseStudies() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Case Study</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium leading-tight">
            The numbers<br />
            <span className="gradient-text italic">tell the story</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mb-10">
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-[3/4] bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <span className="font-serif text-white text-9xl font-bold">B</span>
                  </div>
                  <div className="absolute bottom-3 left-3 glass rounded-md px-2.5 py-1.5">
                    <span className="font-sans text-white/40 text-[0.6rem] tracking-widest uppercase">Before</span>
                  </div>
                </div>
                <div className="aspect-[3/4] bg-gradient-to-br from-stone-600 via-stone-700 to-zinc-800 rounded-sm relative overflow-hidden mt-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-5">
                    <span className="font-serif text-white text-9xl font-bold">A</span>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-gold/90 rounded-md px-2.5 py-1.5">
                    <span className="font-sans text-bg text-[0.6rem] tracking-widest uppercase font-medium">After</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="font-serif text-white text-2xl md:text-3xl mb-4">
              Villa Schwabing<br />
              <span className="gradient-text italic">Transformation</span>
            </h3>
            <p className="font-sans text-white/40 text-sm leading-relaxed">
              A neglected 1920s villa acquired off-market, fully restored to its original grandeur with contemporary luxury interiors, and sold to a private buyer within three weeks of listing.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="grid grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
                className="bg-surface p-6 md:p-8"
              >
                <div className="font-serif text-gold text-3xl md:text-4xl mb-2">
                  <Counter to={parseInt(s.value)} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="font-sans text-white/30 text-xs tracking-wide">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
