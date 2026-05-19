'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80',
    status: 'Verfügbar',
    statusStyle: 'bg-warm-100 text-primary',
    title: 'Stilvolles Endreihenhaus',
    location: 'Norderstedt-Friedrichsgabe',
    area: 'ca. 137 m²',
    rooms: '5 Zimmer',
    price: '€ 598.000',
    desc: 'Gepflegtes Endreihenhaus in ruhiger, familienfreundlicher Lage – bezugsfertig und mit eigenem Garten.',
  },
  {
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    status: 'Neu im Angebot',
    statusStyle: 'bg-gold/15 text-gold-dark',
    title: 'Kompaktes Einfamilienhaus',
    location: 'Norderstedt-Harksheide',
    area: 'ca. 60 m² + 50 m² Nutzfl.',
    rooms: '3 Zimmer',
    price: '€ 328.000',
    desc: 'Charmantes Einfamilienhaus mit zusätzlicher Nutzfläche – ideal für Paare oder als Kapitalanlage.',
  },
  {
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    status: 'Exklusiv',
    statusStyle: 'bg-primary text-white',
    title: 'Elegante Jugendstilwohnung',
    location: 'Hamburg-Rahlstedt',
    area: 'ca. 94 m²',
    rooms: '3 Zimmer',
    price: 'Auf Anfrage',
    desc: 'Hochwertige Altbauwohnung mit Stuck, Dielen und großzügigem Schnitt in begehrter Lage.',
  },
];

function PropertyCard({ p, index }: { p: typeof properties[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 bg-white"
    >
      <div ref={ref} className="relative h-64 overflow-hidden">
        <motion.div
          style={{ y: imgY, backgroundImage: `url('${p.image}')` }}
          className="absolute inset-[-15%] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        </motion.div>

        <div className="absolute top-4 left-4 z-10">
          <span className={`font-sans text-xs font-medium px-3 py-1.5 rounded-full ${p.statusStyle}`}>
            {p.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-serif text-text text-xl group-hover:text-gold-dark transition-colors duration-300">{p.title}</h3>
          <span className="font-sans text-text-light text-xs bg-warm-100 px-2.5 py-1 rounded-full flex-shrink-0">{p.area}</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-3.5 h-3.5 text-text-light flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
          </svg>
          <span className="font-sans text-text-light text-xs">{p.location} · {p.rooms}</span>
        </div>
        <p className="font-sans text-text-muted text-sm leading-relaxed mb-5">{p.desc}</p>
        <div className="flex items-center justify-between border-t border-warm-200 pt-4">
          <span className="font-serif text-text text-lg font-medium">{p.price}</span>
          <motion.a href="#kontakt" whileHover={{ x: 3 }}
            className="font-sans text-gold-dark text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5">
            Details anfragen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Properties() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="objekte" className="section-padding bg-warm-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Aktuelles Angebot
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium">
              Top Immobilien
            </h2>
          </div>
          <a href="#kontakt" className="font-sans text-gold-dark text-sm font-medium border-b border-gold/40 pb-0.5 hover:border-gold transition-colors self-start md:self-auto">
            Weitere Immobilien ansehen →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((p, i) => <PropertyCard key={p.title} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
