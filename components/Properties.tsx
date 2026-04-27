'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const properties = [
  {
    gradient: 'from-slate-800 via-slate-700 to-slate-900',
    tag: 'Just Sold',
    tagColor: 'bg-gold text-dark-900',
    title: 'Villa Schwabing',
    location: 'Munich, Bavaria',
    size: '320 m²',
    price: '€ 1.285.000',
    desc: 'Completely renovated 1920s villa with bespoke interior design and landscaped garden.',
  },
  {
    gradient: 'from-zinc-800 via-stone-700 to-zinc-900',
    tag: 'Current Project',
    tagColor: 'bg-white/10 text-white',
    title: 'Penthouse Maxvorstadt',
    location: 'Munich, Bavaria',
    size: '218 m²',
    price: '€ 960.000',
    desc: 'Rooftop penthouse with panoramic city views undergoing high-end renovation.',
  },
  {
    gradient: 'from-neutral-800 via-neutral-700 to-stone-900',
    tag: 'Coming Soon',
    tagColor: 'bg-white/10 text-white',
    title: 'Townhouse Bogenhausen',
    location: 'Munich, Bavaria',
    size: '185 m²',
    price: 'On Request',
    desc: 'Elegant four-story townhouse in Munich\'s most prestigious residential district.',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Properties() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="properties" className="bg-cream-100 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold/50" />
              <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Portfolio</span>
            </div>
            <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium">
              Current Properties
            </h2>
          </div>
          <a
            href="#contact"
            className="font-sans text-dark-500 text-sm border-b border-dark-500/30 pb-0.5 hover:text-gold hover:border-gold transition-colors self-start md:self-auto"
          >
            Inquire about off-market deals →
          </a>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {properties.map((p) => (
            <motion.div
              key={p.title}
              variants={card}
              className="group bg-white overflow-hidden border border-cream-200"
            >
              {/* Image placeholder */}
              <div className={`relative h-64 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-inherit to-transparent"
                />
                <div className="absolute inset-0 flex items-end p-6">
                  <span className={`font-sans text-[0.65rem] tracking-widest uppercase px-3 py-1.5 ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-serif text-dark-700 text-xl mb-1">{p.title}</h3>
                    <div className="font-sans text-dark-500/60 text-xs tracking-wide">{p.location}</div>
                  </div>
                  <div className="font-sans text-dark-500/50 text-xs bg-cream px-2.5 py-1">{p.size}</div>
                </div>
                <p className="font-sans text-dark-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                <div className="flex items-center justify-between border-t border-cream-200 pt-5">
                  <span className="font-serif text-dark-700 text-lg">{p.price}</span>
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 4 }}
                    className="font-sans text-gold text-xs tracking-wide hover:text-gold-dark transition-colors"
                  >
                    Request Details →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
