'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tiers = [
  {
    name: 'Essential',
    badge: 'Get Started',
    price: 'From €299',
    desc: 'A one-time deep dive into your property\'s market potential.',
    features: [
      'Property assessment visit',
      'Comparable market analysis',
      'Investment potential report',
      'Renovation scope overview',
      '60-min strategy session',
    ],
    cta: 'Book Consultation',
    highlight: false,
  },
  {
    name: 'Premium',
    badge: 'Most Popular',
    price: 'From €2.500',
    desc: 'Full-service partnership for your Fix & Flip or renovation project.',
    features: [
      'Everything in Essential',
      'Full project management',
      'Design direction & oversight',
      'Contractor coordination',
      'Market positioning strategy',
      'Buyer network access',
      'Sale support',
    ],
    cta: 'Start Your Project',
    highlight: true,
  },
  {
    name: 'Exclusive',
    badge: 'By Invitation',
    price: 'On Request',
    desc: 'A complete bespoke investment partnership for serious players.',
    features: [
      'Everything in Premium',
      'Joint venture options',
      'Priority off-market deals',
      'Dedicated account manager',
      'Quarterly portfolio review',
      'Network introductions',
    ],
    cta: 'Apply Now',
    highlight: false,
  },
];

export default function Pricing() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Pricing</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium mb-4">
            Transparent Options
          </h2>
          <p className="font-sans text-white/35 text-base max-w-lg mx-auto">
            Every engagement starts with a confidential conversation. Choose the level of partnership that fits your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 items-start">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className={`rounded-xl p-8 flex flex-col relative transition-all duration-400 ${
                t.highlight
                  ? 'bg-surface border border-gold/30 shadow-[0_0_80px_rgba(201,168,76,0.08)] md:-mt-4'
                  : 'glass'
              }`}
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-8">
                <span className={`font-sans text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full ${
                  t.highlight ? 'bg-gold/15 text-gold' : 'bg-white/5 text-white/40'
                }`}>
                  {t.badge}
                </span>
              </div>

              <div className="font-sans text-[0.65rem] tracking-[0.2em] uppercase text-gold mb-1">{t.name}</div>
              <div className="font-serif text-3xl text-white mb-3">{t.price}</div>
              <p className="font-sans text-white/35 text-sm leading-relaxed mb-8">{t.desc}</p>

              <div className={`h-px mb-8 ${t.highlight ? 'bg-white/8' : 'bg-white/5'}`} />

              <ul className="space-y-3 mb-10 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans text-sm text-white/50">{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center font-sans text-[0.75rem] tracking-widest uppercase py-4 rounded-full transition-all duration-300 ${
                  t.highlight
                    ? 'bg-gold text-bg hover:bg-gold-light'
                    : 'border border-white/10 text-white/50 hover:border-gold/50 hover:text-gold'
                }`}
              >
                {t.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
