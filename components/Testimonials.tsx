'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote: 'Nathalie hat uns ein faires Angebot gemacht und den gesamten Verkaufsprozess extrem professionell abgewickelt. Kein Stress, keine Überraschungen – einfach alles wie versprochen.',
    name: 'Michael & Sandra T.',
    role: 'Verkäufer, München-Schwabing',
    initials: 'MT',
  },
  {
    quote: 'Als Maklerin empfehle ich Nathalie regelmäßig weiter. Sie ist schnell, verbindlich und hält jeden Termin ein. Genau die Partnerin, die man im Immobiliengeschäft braucht.',
    name: 'Christina K.',
    role: 'Immobilienmaklerin, München',
    initials: 'CK',
  },
  {
    quote: 'Wir mussten das Elternhaus schnell verkaufen. Nathalie hat die Situation sofort verstanden, war sehr einfühlsam und hat alles diskret und zügig geregelt.',
    name: 'Familie Bergmann',
    role: 'Verkäufer, München-Solln',
    initials: 'FB',
  },
];

const stars = Array(5).fill(0);

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Erfahrungen
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium mb-4">
            Was meine Kunden sagen
          </h2>
          <div className="flex items-center justify-center gap-1 mt-3">
            {stars.map((_, i) => (
              <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="font-sans text-text-muted text-sm ml-2">5.0 · Kundenbewertung</span>
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
              className="bg-warm-50 border border-warm-200 rounded-2xl p-7 flex flex-col hover:border-primary/20 transition-all duration-300 card-shadow-hover"
            >
              {/* Stars */}
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
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-primary text-xs font-semibold">{t.initials}</span>
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
