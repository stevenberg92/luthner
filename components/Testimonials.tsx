'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: 'Nathalie and Steven made us a firm offer within 24 hours and closed without a single delay. A level of professionalism we have rarely experienced in this market.',
    name: 'Michael & Sandra T.',
    role: 'Property Sellers, Munich',
    initials: 'MS',
  },
  {
    quote: 'As a real estate agent, they are my first call for any off-market opportunity in the luxury segment. Fast, reliable, and genuinely pleasant to work with.',
    name: 'Thomas Krüger',
    role: 'Senior Real Estate Agent',
    initials: 'TK',
  },
  {
    quote: 'We purchased one of their renovated properties and were genuinely impressed. Every detail had been considered — this is not standard fix-and-flip.',
    name: 'Jennifer M.',
    role: 'Property Buyer, Schwabing',
    initials: 'JM',
  },
  {
    quote: 'Clear communication, realistic timelines, and a final result that exceeded our expectations. Working with Luthner felt like a true partnership.',
    name: 'Robert & Clara B.',
    role: 'Investment Partners',
    initials: 'RB',
  },
];

export default function Testimonials() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold/50" />
              <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Testimonials</span>
            </div>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium">
              What our partners<br />
              <span className="gradient-text italic">say about us</span>
            </h2>
          </div>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active ? 'w-8 h-2 bg-gold' : 'w-2 h-2 bg-white/15 hover:bg-white/30'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Active testimonial — large format */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-2xl p-10 md:p-14 mb-6"
          >
            <div className="font-serif text-gold/15 text-8xl leading-none mb-4 select-none">&ldquo;</div>
            <p className="font-serif text-white text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl">
              {testimonials[active].quote}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-gold text-xs">{testimonials[active].initials}</span>
              </div>
              <div>
                <p className="font-serif text-white text-sm">{testimonials[active].name}</p>
                <p className="font-sans text-white/30 text-xs tracking-wide mt-0.5">{testimonials[active].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Thumbnail row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                i === active
                  ? 'border-gold/30 bg-gold/5'
                  : 'border-white/5 glass hover:border-white/15'
              }`}
            >
              <p className="font-serif text-white/60 text-sm mb-2 truncate">{t.name}</p>
              <p className="font-sans text-white/25 text-xs">{t.role}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
