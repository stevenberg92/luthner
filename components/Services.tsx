'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Immobilienbewertung',
    desc: 'Marktgerechte und fundierte Wertermittlung Ihrer Immobilie – realistisch und nachvollziehbar.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    primary: true,
  },
  {
    title: 'Professionelle Vermarktung',
    desc: 'Hochwertige Exposés, Foto- und Videoaufnahmen sowie maximale Online-Sichtbarkeit.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    primary: false,
  },
  {
    title: 'Dokumentenservice',
    desc: 'Beschaffung und Aufbereitung aller relevanten Unterlagen – wir kümmern uns um die Behörden.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    primary: false,
  },
  {
    title: 'Homestaging',
    desc: 'Optimale Präsentation Ihrer Immobilie für deutlich höhere Verkaufschancen und Preise.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    primary: true,
  },
  {
    title: 'Organisation & Koordination',
    desc: 'Besichtigungen, Interessentenmanagement und Kommunikation – strukturiert und stressfrei.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    primary: false,
  },
  {
    title: 'Komplette Verkaufsabwicklung',
    desc: 'Von der Anfrage über Bankgespräche bis zum Notartermin und darüber hinaus – alles aus einer Hand.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    primary: false,
  },
];

const extras = [
  'Entrümpelung & Reinigung',
  'Netzwerk aus Handwerkern',
  'Unterstützung bei Behörden',
  'Begleitung bei Erbimmobilien',
  'Beratung für Kapitalanlagen',
  'Projektentwicklung & -beratung',
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="leistungen" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-6"
          >
            Leistungen
          </motion.span>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-end">
            <ScrollReveal
              as="h2"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight"
              baseColor="#D6CFBE"
              highlightColor="#1A1A19"
            >
              Unsere Leistungen für Sie.
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className="font-sans text-base leading-relaxed"
              baseColor="#CFC8B6"
              highlightColor="#67655E"
            >
              Wir übernehmen den gesamten Verkaufsprozess – professionell, strukturiert und stressfrei. Damit Sie sich um nichts kümmern müssen.
            </ScrollReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 flex flex-col cursor-default card-shadow transition-all duration-300 hover:card-shadow-hover ${
                s.primary ? 'bg-primary text-white' : 'bg-warm-50 border border-warm-200'
              }`}
            >
              <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl mb-6 ${
                s.primary ? 'bg-white/10 text-white' : 'bg-gold/12 text-gold-dark'
              }`}>
                {s.icon}
              </div>
              <h3 className={`font-serif text-2xl mb-3 ${s.primary ? 'text-white' : 'text-text'}`}>{s.title}</h3>
              <p className={`font-sans text-sm leading-relaxed ${s.primary ? 'text-white/65' : 'text-text-muted'}`}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Zusatzleistungen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 rounded-2xl bg-warm-50 border border-warm-200 p-8 md:p-10"
        >
          <p className="font-sans text-gold text-xs tracking-[0.25em] uppercase font-medium mb-6">Zusatzleistungen</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {extras.map((e) => (
              <div key={e} className="flex items-center gap-3">
                <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-text-muted text-sm">{e}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-8 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Mehr über unsere Leistungen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
