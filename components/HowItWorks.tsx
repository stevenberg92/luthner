'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    num: '01',
    title: 'Kontakt aufnehmen',
    desc: 'Füllen Sie das Formular aus oder rufen Sie mich an. Ich melde mich innerhalb von 24 Stunden persönlich bei Ihnen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Kostenlose Besichtigung',
    desc: 'Ich besichtige Ihre Immobilie persönlich – schnell, unkompliziert und ohne Verpflichtungen für Sie.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Faires Angebot in 48h',
    desc: 'Sie erhalten ein transparentes, faires Kaufangebot – ohne versteckte Kosten, ohne Druck und ohne Maklergebühren.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Notartermin & Übergabe',
    desc: 'Nach Ihrer Zusage kümmere ich mich um alles. Notartermin, Finanzierung, Übergabe – schnell und stressfrei.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ablauf" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-6"
          >
            Für Verkäufer
          </motion.span>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-end">
            <ScrollReveal
              as="h2"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight"
              baseColor="#D4D0C8"
              highlightColor="#1C1C1C"
            >
              So einfach verkaufen Sie Ihre Immobilie.
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className="font-sans text-base leading-relaxed"
              baseColor="#C8C4BC"
              highlightColor="#6B6B6B"
            >
              Kein Stress, keine Wartezeiten, keine Überraschungen – nur ein klarer, persönlicher Prozess von A bis Z.
            </ScrollReveal>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6 md:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-warm-200 z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(26,75,58,0.12)' }}
                transition={{ duration: 0.25 }}
                className="w-14 h-14 rounded-full bg-primary/8 border-4 border-white flex items-center justify-center text-primary mb-5 ring-2 ring-warm-200"
              >
                {s.icon}
              </motion.div>
              <span className="font-sans text-primary text-[0.65rem] tracking-[0.3em] uppercase font-medium mb-2">{s.num}</span>
              <h3 className="font-serif text-text text-xl mb-3">{s.title}</h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Arrow scroll cue + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(26,75,58,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Jetzt kostenfrei anfragen
            <motion.svg
              className="w-4 h-4"
              fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
