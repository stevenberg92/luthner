'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const advantages = [
  {
    title: 'Regionale Marktkenntnis',
    desc: 'Wir kennen Norderstedt, Hamburg und das Umland – und wissen, was Ihre Immobilie wirklich wert ist.',
    icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
  },
  {
    title: 'Persönliche Betreuung',
    desc: 'Ein fester Ansprechpartner, der erreichbar ist und Sie über jeden Schritt informiert.',
    icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
  },
  {
    title: 'Schnelle Vermarktung',
    desc: 'Strukturierte Abläufe und ein klarer Plan sorgen für einen zügigen, reibungslosen Verkauf.',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  },
  {
    title: 'Qualifizierte Interessenten',
    desc: 'Wir filtern vor und führen Besichtigungen nur mit ernsthaften, geprüften Kaufinteressenten.',
    icon: 'M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z',
  },
  {
    title: 'Hochwertige Präsentation',
    desc: 'Professionelle Fotos, Videos und Exposés, die Ihre Immobilie ins beste Licht rücken.',
    icon: 'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z',
  },
  {
    title: 'Starkes Netzwerk',
    desc: 'Beste Verbindungen zu Behörden, Ämtern, Handwerkern und Baufachbereichen.',
    icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
  },
  {
    title: 'Transparente Kommunikation',
    desc: 'Klare Aussagen, ehrliche Einschätzungen und keine versteckten Kosten – jederzeit.',
    icon: 'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z',
  },
  {
    title: 'Rundum-Service',
    desc: 'Von der Bewertung bis zum Notartermin – alles aus einer Hand, ganz ohne Ihre „Lauferei“.',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
];

export default function HowItWorks() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="vorteile" className="section-padding bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-6"
          >
            Vorteile
          </motion.span>
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20 items-end">
            <ScrollReveal
              as="h2"
              className="font-serif text-[clamp(2rem,4vw,3.2rem)] font-medium leading-[1.1] tracking-tight"
              baseColor="#D6CFBE"
              highlightColor="#1A1A19"
            >
              Warum Eigentümer uns vertrauen.
            </ScrollReveal>
            <ScrollReveal
              as="p"
              className="font-sans text-base leading-relaxed"
              baseColor="#CFC8B6"
              highlightColor="#67655E"
            >
              Erfahrung, Erreichbarkeit und ein starkes regionales Netzwerk – darauf bauen unsere Kunden seit Jahrzehnten.
            </ScrollReveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {advantages.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: (i % 4) * 0.08 + Math.floor(i / 4) * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-warm-50 border border-warm-200 p-6 hover:border-gold/40 transition-all duration-300"
            >
              <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gold/12 text-gold-dark mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={a.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-text text-lg mb-2">{a.title}</h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="text-center mt-14"
        >
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(0,0,0,0.18)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
          >
            Jetzt unverbindlich anfragen
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
