'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote:
      'Nathalie and Steven are the rare combination of speed and quality. They made us a firm offer within 24 hours and closed without a single delay. Exactly what we needed.',
    name: 'Michael & Sandra T.',
    role: 'Property Sellers, Munich',
    initials: 'MS',
  },
  {
    quote:
      'As a real estate agent, I\'ve seen many investors. Few operate at this level of professionalism. They are my first call for any off-market opportunity in the luxury segment.',
    name: 'Thomas Krüger',
    role: 'Senior Real Estate Agent',
    initials: 'TK',
  },
  {
    quote:
      'We purchased one of their renovated properties and were genuinely impressed by the quality of work and design sensibility. Every detail had been considered.',
    name: 'Jennifer M.',
    role: 'Property Buyer, Schwabing',
    initials: 'JM',
  },
  {
    quote:
      'Clear communication, realistic timelines, and a final result that exceeded expectations. Working with Luthner felt like a true partnership, not just a transaction.',
    name: 'Robert & Clara B.',
    role: 'Investment Partners',
    initials: 'RB',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const card = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-dark-900 py-28 px-6">
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
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Testimonials</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-medium">
            What Our Partners Say
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              whileHover={{ y: -4 }}
              className="bg-dark-800 border border-white/5 p-8 transition-all duration-300 hover:border-gold/20"
            >
              {/* Quote mark */}
              <div className="font-serif text-gold/20 text-6xl leading-none mb-4">&ldquo;</div>
              <p className="font-sans text-white/65 text-base leading-relaxed mb-8">{t.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gold/15 border border-gold/25 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif text-gold text-xs">{t.initials}</span>
                </div>
                <div>
                  <div className="font-serif text-white text-sm">{t.name}</div>
                  <div className="font-sans text-white/35 text-xs tracking-wide mt-0.5">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
