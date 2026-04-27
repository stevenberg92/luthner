'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Fix & Flip',
    tag: 'Core Business',
    desc: 'We identify undervalued properties in premium locations, acquire with speed, and transform them through meticulous renovation into high-demand luxury assets.',
    points: ['Off-market sourcing', 'Cash acquisition', 'Premium renovation', 'Strategic positioning', 'Buyer network'],
    dark: true,
  },
  {
    num: '02',
    title: 'Home Staging',
    tag: 'Maximize Appeal',
    desc: 'Professional staging that showcases a property\'s full potential — reducing time-on-market while maximising the final sale price.',
    points: ['Interior design concept', 'Furniture & decor', 'Photoshoot-ready finish', 'Available to third parties'],
    dark: false,
  },
  {
    num: '03',
    title: 'Renovation',
    tag: 'Expert Execution',
    desc: 'Full renovation management for owners who want to increase asset value without the complexity of coordinating contractors.',
    points: ['Design planning', 'Contractor coordination', 'Budget & schedule control', 'Quality assurance'],
    dark: false,
  },
];

export default function Services() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">What We Do</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium">
            Our Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className={`rounded-xl p-8 flex flex-col cursor-default transition-shadow duration-400 ${
                s.dark
                  ? 'bg-surface border border-gold/20 hover:border-gold/40 shadow-[0_0_60px_rgba(201,168,76,0.04)] hover:shadow-[0_0_80px_rgba(201,168,76,0.1)]'
                  : 'glass hover:border-white/12'
              }`}
            >
              <div className={`font-serif text-5xl mb-6 ${s.dark ? 'text-gold/15' : 'text-white/6'}`}>
                {s.num}
              </div>
              <div className="font-sans text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-2">{s.tag}</div>
              <h3 className={`font-serif text-2xl mb-4 ${s.dark ? 'text-white' : 'text-white'}`}>{s.title}</h3>
              <p className={`font-sans text-sm leading-relaxed mb-8 ${s.dark ? 'text-white/45' : 'text-white/40'}`}>
                {s.desc}
              </p>
              <ul className="mt-auto space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className={`font-sans text-sm ${s.dark ? 'text-white/60' : 'text-white/45'}`}>{p}</span>
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
