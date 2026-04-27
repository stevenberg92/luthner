'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Fast Transactions',
    description:
      'We move decisively. From first viewing to closing, we operate with the speed and clarity that sellers and partners expect from a trusted investment partner.',
    stat: '< 30 Days',
    statLabel: 'Average closing time',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Financial Strength',
    description:
      'Backed by solid capital reserves, we purchase without financing constraints. Our financial independence gives sellers certainty and gives us negotiating power.',
    stat: '€2M+',
    statLabel: 'Annual investment volume',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.25} className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Professional Execution',
    description:
      'Every project is managed with precision — from acquisition analysis and design direction to renovation oversight and premium market positioning.',
    stat: '100%',
    statLabel: 'Projects delivered on spec',
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

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-cream py-28 px-6">
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
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Why Work With Us</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium">
            Built on Three Core Principles
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}
              className="bg-white border border-cream-200 p-10 transition-all duration-400 group cursor-default"
            >
              <div className="text-gold mb-6 transition-transform duration-300 group-hover:scale-110 origin-left">
                {f.icon}
              </div>
              <h3 className="font-serif text-dark-700 text-2xl mb-4">{f.title}</h3>
              <p className="font-sans text-dark-500 text-sm leading-relaxed mb-8">{f.description}</p>
              <div className="border-t border-cream-200 pt-6">
                <div className="font-serif text-gold text-2xl">{f.stat}</div>
                <div className="font-sans text-dark-500/60 text-xs tracking-wide mt-1">{f.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
