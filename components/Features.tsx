'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const items = [
  {
    num: '01',
    title: 'Fast Transactions',
    desc: 'We evaluate and commit within 48 hours. From first viewing to notarised closing in under 30 days — no financing delays, no broken chains.',
    tag: '< 30 Days',
  },
  {
    num: '02',
    title: 'Financial Strength',
    desc: 'Cash-backed acquisitions with no bank dependency. Our liquidity gives sellers certainty and puts us in a position to negotiate with confidence.',
    tag: 'Cash Buyer',
  },
  {
    num: '03',
    title: 'Precision Execution',
    desc: 'In-house renovation management, bespoke design direction, and premium market positioning — every project delivered on time and on spec.',
    tag: '100% On Spec',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 px-6" ref={ref}>
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
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Core Principles</span>
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium leading-tight">
            Why serious sellers &amp;<br />
            <span className="gradient-text italic">buyers choose us</span>
          </h2>
        </motion.div>

        {/* Items */}
        <div className="flex flex-col divide-y divide-white/5">
          {items.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-12 items-start py-10 cursor-default"
            >
              <span className="font-serif text-white/10 text-5xl group-hover:text-gold/30 transition-colors duration-500">
                {item.num}
              </span>
              <div>
                <h3 className="font-serif text-white text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors duration-400">
                  {item.title}
                </h3>
                <p className="font-sans text-white/40 text-sm md:text-base leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
              <div className="hidden md:block">
                <span className="font-sans text-[0.7rem] tracking-widest uppercase px-4 py-2 rounded-full border border-gold/25 text-gold/60 group-hover:border-gold/50 group-hover:text-gold transition-all duration-400">
                  {item.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
