'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const strengths = [
  { label: 'Fast Decisions',    desc: 'Offer within 48 hours, always.' },
  { label: 'Reliable Partner',  desc: 'What we agree to, we deliver.' },
  { label: 'Strong Execution',  desc: 'On time, on budget, every time.' },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="about" ref={ref} className="py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <motion.div
              style={{ y: imgY }}
              className="absolute inset-[-10%] bg-gradient-to-br from-zinc-800 via-zinc-700 to-stone-800"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <span className="font-serif text-white text-[20rem] font-bold select-none">N</span>
              </div>
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div className="h-px w-10 bg-gold mb-4" />
              <p className="font-serif text-white text-xl">Nathalie &amp; Steven</p>
              <p className="font-sans text-white/40 text-xs tracking-widest mt-1">Munich · Real Estate Investors</p>
            </div>
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-6 -right-6 glass rounded-xl p-5 shadow-2xl"
          >
            <p className="font-serif text-gold text-3xl">15+</p>
            <p className="font-sans text-white/40 text-xs tracking-wide mt-1">Projects completed</p>
          </motion.div>

          {/* Gold corner */}
          <div className="absolute -top-4 -left-4 w-14 h-14 border-l-2 border-t-2 border-gold/30 rounded-tl-sm" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Our Story</span>
          </div>

          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-white font-medium leading-tight mb-6">
            A couple driven by{' '}
            <span className="gradient-text italic">shared vision</span>
          </h2>

          <p className="font-sans text-white/45 text-[0.95rem] leading-relaxed mb-4">
            We are Nathalie and Steven — a Munich-based investment couple who turned a passion for architecture and market timing into a disciplined luxury fix-and-flip operation.
          </p>
          <p className="font-sans text-white/45 text-[0.95rem] leading-relaxed mb-10">
            We don&apos;t just renovate properties. We reimagine them — creating spaces that command premium prices and attract discerning buyers who recognise genuine quality.
          </p>

          <div className="space-y-5">
            {strengths.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-[2px] h-full self-stretch bg-gradient-to-b from-gold/60 to-transparent mt-1.5 min-h-[32px]" />
                <div>
                  <p className="font-serif text-white text-lg group-hover:text-gold transition-colors duration-300">{s.label}</p>
                  <p className="font-sans text-white/35 text-sm mt-0.5">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
