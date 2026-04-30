'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const properties = [
  {
    gradient: 'from-slate-700 via-stone-600 to-slate-800',
    accent: 'rgba(201,168,76,0.12)',
    status: 'Verkauft',
    statusStyle: 'bg-green-100 text-green-700',
    title: 'Penthouse Schwabing',
    location: 'München-Schwabing',
    area: '320 m²',
    rooms: '6 Zimmer',
    price: '€ 1.285.000',
    roi: '+56% ROI',
    desc: 'Vollständig saniertes Stadtpalais aus den 1920er Jahren mit exklusiver Innenausstattung.',
  },
  {
    gradient: 'from-zinc-700 via-stone-600 to-neutral-800',
    accent: 'rgba(255,255,255,0.04)',
    status: 'In Renovierung',
    statusStyle: 'bg-amber-100 text-amber-700',
    title: 'Penthouse Maxvorstadt',
    location: 'München-Maxvorstadt',
    area: '218 m²',
    rooms: '4 Zimmer',
    price: '€ 960.000',
    roi: 'Est. +48%',
    desc: 'Dachgeschosswohnung mit Panoramablick – aktuell in hochwertiger Kernsanierung.',
  },
  {
    gradient: 'from-stone-700 via-zinc-600 to-stone-800',
    accent: 'rgba(201,168,76,0.08)',
    status: 'Demnächst',
    statusStyle: 'bg-blue-100 text-blue-700',
    title: 'Townhouse Bogenhausen',
    location: 'München-Bogenhausen',
    area: '185 m²',
    rooms: '5 Zimmer',
    price: 'Auf Anfrage',
    roi: '',
    desc: 'Elegantes Stadthaus im exklusivsten Wohnviertel Münchens – vollständige Sanierung geplant.',
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
      className="group rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-400 bg-white"
    >
      {/* Parallax image */}
      <div ref={ref} className="relative h-64 overflow-hidden">
        <motion.div
          style={{ y: imgY }}
          className={`absolute inset-[-15%] bg-gradient-to-br ${p.gradient}`}
        >
          <div style={{ background: `radial-gradient(ellipse at 60% 40%, ${p.accent}, transparent 60%)` }} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Overlays */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`font-sans text-xs font-medium px-3 py-1.5 rounded-full ${p.statusStyle}`}>
            {p.status}
          </span>
        </div>
        {p.roi && (
          <div className="absolute top-4 right-4 z-10">
            <span className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full bg-primary text-white">
              {p.roi}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-serif text-text text-xl group-hover:text-primary transition-colors duration-300">{p.title}</h3>
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
            className="font-sans text-primary text-sm font-medium hover:text-primary-dark transition-colors flex items-center gap-1.5">
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
            <span className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-3">
              Portfolio
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium">
              Aktuelle Objekte
            </h2>
          </div>
          <a href="#kontakt" className="font-sans text-primary text-sm font-medium border-b border-primary/30 pb-0.5 hover:border-primary transition-colors self-start md:self-auto">
            Off-Market Deals anfragen →
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {properties.map((p, i) => <PropertyCard key={p.title} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}
