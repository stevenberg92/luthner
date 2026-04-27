'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const properties = [
  {
    gradient: 'from-slate-800 via-slate-700 to-zinc-900',
    tag: 'Just Sold',
    tagStyle: 'bg-gold text-bg',
    title: 'Villa Schwabing',
    location: 'Munich, Bavaria',
    area: '320 m²',
    price: '€ 1.285.000',
    roi: '+56% ROI',
    desc: 'Fully restored 1920s villa with bespoke interiors and landscaped garden.',
  },
  {
    gradient: 'from-zinc-800 via-stone-700 to-neutral-900',
    tag: 'In Renovation',
    tagStyle: 'bg-white/8 text-white/70',
    title: 'Penthouse Maxvorstadt',
    location: 'Munich, Bavaria',
    area: '218 m²',
    price: '€ 960.000',
    roi: 'Est. +48%',
    desc: 'Rooftop penthouse with panoramic views undergoing premium transformation.',
  },
  {
    gradient: 'from-neutral-800 via-stone-700 to-zinc-900',
    tag: 'Coming Soon',
    tagStyle: 'bg-white/8 text-white/70',
    title: 'Townhouse Bogenhausen',
    location: 'Munich, Bavaria',
    area: '185 m²',
    price: 'On Request',
    roi: 'TBD',
    desc: 'Four-story townhouse in Munich\'s most prestigious residential district.',
  },
  {
    gradient: 'from-stone-800 via-zinc-700 to-slate-900',
    tag: 'Upcoming',
    tagStyle: 'bg-white/8 text-white/70',
    title: 'Penthouse Lehel',
    location: 'Munich, Bavaria',
    area: '160 m²',
    price: 'On Request',
    roi: 'TBD',
    desc: 'Exceptional penthouse in Munich\'s most sought-after old-town quarter.',
  },
];

export default function Properties() {
  const ref    = useRef(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="properties" className="py-32 overflow-hidden" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/50" />
              <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Portfolio</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium">
              Current Properties
            </h2>
          </div>
          <a
            href="#contact"
            className="font-sans text-white/40 text-sm hover:text-gold transition-colors pb-0.5 border-b border-white/15 hover:border-gold self-start md:self-auto"
          >
            Ask about off-market deals →
          </a>
        </motion.div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={listRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-[calc((100vw-72rem)/2)]"
        style={{ paddingBottom: '12px' }}
      >
        {properties.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 w-[300px] md:w-[360px] glass rounded-xl overflow-hidden group cursor-default"
          >
            {/* Image */}
            <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
              </motion.div>
              <div className="absolute top-4 left-4">
                <span className={`font-sans text-[0.6rem] tracking-widest uppercase px-3 py-1.5 rounded-full ${p.tagStyle}`}>
                  {p.tag}
                </span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="font-sans text-[0.65rem] text-gold tracking-wide">{p.roi}</span>
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-serif text-white text-xl group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                <span className="font-sans text-white/30 text-xs">{p.area}</span>
              </div>
              <p className="font-sans text-white/35 text-xs tracking-wide mb-3">{p.location}</p>
              <p className="font-sans text-white/45 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-serif text-gold text-lg">{p.price}</span>
                <motion.a
                  href="#contact"
                  whileHover={{ x: 4 }}
                  className="font-sans text-white/40 text-xs hover:text-gold transition-colors"
                >
                  Details →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
