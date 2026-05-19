'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: 'Frau Bormann hat unser Reihenhaus in Norderstedt schneller verkauft als gedacht – und das völlig stressfrei. Wir wurden über jeden Schritt informiert und immer ehrlich beraten.',
    name: 'Familie Petersen',
    role: 'Verkäufer · Norderstedt-Friedrichsgabe',
    initials: 'FP',
  },
  {
    quote: 'Endlich ein Makler, der wirklich erreichbar ist. Persönlich, kompetent und absolut zuverlässig. Die Vermarktung war hochwertig, der Verkaufspreis besser als erwartet.',
    name: 'Andreas K.',
    role: 'Verkäufer · Hamburg-Rahlstedt',
    initials: 'AK',
  },
  {
    quote: 'Wir mussten eine Erbimmobilie verkaufen und hatten keine Ahnung, wo wir anfangen sollen. MBI Bormann hat uns die komplette Lauferei bei Behörden und Notar abgenommen.',
    name: 'Sabine & Thomas R.',
    role: 'Verkäufer · Norderstedt-Garstedt',
    initials: 'SR',
  },
];

const stars = Array(5).fill(0);

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-warm-50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Kundenreferenzen
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium mb-4">
            Was unsere Kunden sagen
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {stars.map((_, i) => (
              <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-sans text-text-muted text-sm ml-2">Empfehlung ist unser bestes Aushängeschild</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-white border border-warm-200 rounded-2xl p-7 flex flex-col hover:border-gold/30 transition-all duration-300 card-shadow-hover"
            >
              <div className="flex gap-0.5 mb-5">
                {stars.map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-sans text-text-muted text-[0.95rem] leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-warm-200 pt-5">
                <div className="w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold-dark text-xs font-semibold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-serif text-text text-sm">{t.name}</p>
                  <p className="font-sans text-text-light text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
