'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '> 50%', label: 'Neukunden über Empfehlung' },
  { value: 'Jahrzehnte', label: 'Erfahrung am Markt' },
  { value: 'Region', label: 'Norderstedt & Hamburg' },
  { value: 'IVD', label: 'Geprüftes Maklerbüro' },
];

export default function Trust() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section ref={ref} className="bg-primary py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="font-serif text-white text-2xl md:text-3xl font-medium mb-2">{s.value}</div>
            <div className="font-sans text-white/55 text-xs tracking-wide">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
