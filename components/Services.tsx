'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    number: '01',
    title: 'Fix & Flip',
    subtitle: 'Our Core Business',
    description:
      'We identify undervalued properties in premium locations, acquire them with speed, and transform them through meticulous renovation into high-demand luxury assets.',
    benefits: [
      'Off-market sourcing',
      'Fast acquisition (cash buyer)',
      'Premium renovation management',
      'Strategic market positioning',
      'Targeted buyer outreach',
    ],
    isPrimary: true,
  },
  {
    number: '02',
    title: 'Home Staging',
    subtitle: 'Maximize Appeal',
    description:
      'Professional staging services that showcase a property\'s full potential and dramatically reduce time-on-market while maximizing final sale price.',
    benefits: [
      'Interior design concept',
      'Furniture & decor sourcing',
      'Photoshoot-ready finish',
      'Available for third parties',
    ],
    isPrimary: false,
  },
  {
    number: '03',
    title: 'Renovation',
    subtitle: 'Expert Execution',
    description:
      'Full renovation management for property owners who want to increase their asset value without the complexity of managing contractors and tradespeople.',
    benefits: [
      'Design planning',
      'Contractor management',
      'Budget & timeline control',
      'Quality assurance',
    ],
    isPrimary: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">What We Offer</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium">
            Our Services
          </h2>
        </motion.div>

        {/* Services */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className={`p-10 border transition-all duration-300 ${
                s.isPrimary
                  ? 'border-gold bg-dark-900 text-white'
                  : 'border-cream-200 bg-cream hover:border-gold/30'
              }`}
            >
              <div className={`font-serif text-5xl mb-6 ${s.isPrimary ? 'text-gold/20' : 'text-dark-500/10'}`}>
                {s.number}
              </div>
              <div className={`font-sans text-[0.65rem] tracking-[0.25em] uppercase mb-2 ${s.isPrimary ? 'text-gold' : 'text-gold'}`}>
                {s.subtitle}
              </div>
              <h3 className={`font-serif text-2xl mb-4 ${s.isPrimary ? 'text-white' : 'text-dark-700'}`}>
                {s.title}
              </h3>
              <p className={`font-sans text-sm leading-relaxed mb-8 ${s.isPrimary ? 'text-white/55' : 'text-dark-500'}`}>
                {s.description}
              </p>
              <ul className="space-y-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3">
                    <div className={`w-1 h-1 rounded-full flex-shrink-0 ${s.isPrimary ? 'bg-gold' : 'bg-gold'}`} />
                    <span className={`font-sans text-sm ${s.isPrimary ? 'text-white/70' : 'text-dark-500'}`}>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
