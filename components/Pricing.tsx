'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tiers = [
  {
    name: 'Essential',
    tag: 'Get Started',
    price: 'From €299',
    description: 'A one-time deep dive into your property\'s market potential.',
    features: [
      'Property assessment visit',
      'Comparable market analysis',
      'Investment potential report',
      'Renovation scope overview',
      '60-min strategy session',
    ],
    cta: 'Book Consultation',
    highlighted: false,
  },
  {
    name: 'Premium',
    tag: 'Most Popular',
    price: 'From €2.500',
    description: 'Full-service partnership for your Fix & Flip or renovation project.',
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
    highlighted: true,
  },
  {
    name: 'Exclusive',
    tag: 'By Invitation',
    price: 'On Request',
    description: 'A complete bespoke investment partnership for serious players.',
    features: [
      'Everything in Premium',
      'Joint venture options',
      'Priority off-market deals',
      'Dedicated account manager',
      'Quarterly portfolio review',
      'Network introductions',
    ],
    cta: 'Apply Now',
    highlighted: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Pricing() {
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
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Investment Options</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium">
            Transparent Pricing
          </h2>
          <p className="font-sans text-dark-500 text-base mt-4 max-w-xl mx-auto">
            Choose the level of partnership that fits your goals. All engagements begin with a confidential conversation.
          </p>
        </motion.div>

        {/* Tiers */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={!t.highlighted ? { y: -6 } : { y: -4 }}
              className={`relative p-10 border transition-all duration-300 ${
                t.highlighted
                  ? 'bg-dark-900 border-gold md:-mt-4 md:pb-14 shadow-2xl shadow-dark-900/30'
                  : 'bg-white border-cream-200 hover:border-gold/30'
              }`}
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`font-sans text-[0.6rem] tracking-[0.25em] uppercase px-3 py-1.5 ${
                    t.highlighted ? 'bg-gold text-dark-900' : 'bg-cream text-dark-500'
                  }`}
                >
                  {t.tag}
                </span>
              </div>

              <div className={`font-sans text-[0.65rem] tracking-[0.2em] uppercase mb-1 ${t.highlighted ? 'text-gold' : 'text-gold'}`}>
                {t.name}
              </div>
              <div className={`font-serif text-3xl mb-3 ${t.highlighted ? 'text-white' : 'text-dark-700'}`}>
                {t.price}
              </div>
              <p className={`font-sans text-sm leading-relaxed mb-8 ${t.highlighted ? 'text-white/50' : 'text-dark-500'}`}>
                {t.description}
              </p>

              <div className={`h-px mb-8 ${t.highlighted ? 'bg-white/10' : 'bg-cream-200'}`} />

              <ul className="space-y-3 mb-10">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${t.highlighted ? 'text-gold' : 'text-gold'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`font-sans text-sm ${t.highlighted ? 'text-white/70' : 'text-dark-500'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center font-sans text-xs tracking-widest uppercase py-4 transition-all duration-300 ${
                  t.highlighted
                    ? 'bg-gold text-dark-900 hover:bg-gold-light'
                    : 'border border-dark-600/20 text-dark-700 hover:border-gold hover:text-gold'
                }`}
              >
                {t.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
