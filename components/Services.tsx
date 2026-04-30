'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: 'Fix & Flip',
    tag: 'Kernkompetenz',
    desc: 'Ich kaufe sanierungsbedürftige und unterbewertete Immobilien zu fairen Preisen – schnell, ohne Makler und ohne langwierige Verhandlungen.',
    bullets: ['Direktkauf ohne Makler', 'Faire Marktpreise', 'Schneller Abschluss', 'Kein Aufwand für Sie'],
    primary: true,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Wohnungsverkauf',
    tag: 'Ohne Wartezeit',
    desc: 'Verkaufen Sie Ihre Wohnung direkt an mich – ganz ohne Maklergebühren, Besichtigungstourismus und monatelange Wartezeiten.',
    bullets: ['Keine Maklercourtage', 'Kein Besichtigungsstress', 'Flexibler Übergabetermin', 'Persönliche Betreuung'],
    primary: false,
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: 'Premium Objekte',
    tag: 'Exklusiv',
    desc: 'Aktuell renovierte und fertiggestellte Premiumobjekte im Großraum München – für Eigennutzer und Kapitalanleger.',
    bullets: ['Vollsanierte Objekte', 'Hochwertige Ausstattung', 'Geprüfte Bausubstanz', 'Sofort bezugsbereit'],
    primary: false,
  },
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="leistungen" ref={ref} className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Leistungen
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium mb-4">
            Was ich für Sie tun kann
          </h2>
          <p className="font-sans text-text-muted text-base max-w-xl mx-auto leading-relaxed">
            Ob Direktverkauf, sanierungsbedürftiges Objekt oder Premiumwohnung –
            ich finde die passende Lösung für Ihre Situation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`rounded-2xl p-8 flex flex-col cursor-default card-shadow transition-all duration-300 hover:card-shadow-hover ${
                s.primary ? 'bg-primary text-white' : 'bg-warm-50 border border-warm-200'
              }`}
            >
              <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl mb-6 ${
                s.primary ? 'bg-white/10 text-white' : 'bg-primary/8 text-primary'
              }`}>
                {s.icon}
              </div>
              <span className={`font-sans text-[0.65rem] tracking-[0.25em] uppercase font-medium mb-2 ${
                s.primary ? 'text-gold' : 'text-primary'
              }`}>{s.tag}</span>
              <h3 className={`font-serif text-2xl mb-3 ${s.primary ? 'text-white' : 'text-text'}`}>{s.title}</h3>
              <p className={`font-sans text-sm leading-relaxed mb-6 ${s.primary ? 'text-white/65' : 'text-text-muted'}`}>
                {s.desc}
              </p>
              <ul className="space-y-2.5 mt-auto">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <svg className={`w-4 h-4 flex-shrink-0 ${s.primary ? 'text-gold' : 'text-primary'}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`font-sans text-sm ${s.primary ? 'text-white/75' : 'text-text-muted'}`}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
