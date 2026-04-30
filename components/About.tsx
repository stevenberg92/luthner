'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const values = [
  { title: 'Transparenz',    desc: 'Keine versteckten Kosten, keine Überraschungen – ich kommuniziere klar und ehrlich.' },
  { title: 'Schnelligkeit',  desc: 'Angebot in 48 Stunden, Abschluss in unter 30 Tagen – weil Ihre Zeit wertvoll ist.' },
  { title: 'Verlässlichkeit', desc: 'Was ich zusage, halte ich. Ihr Wort gilt bei mir genauso viel wie meins.' },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="ueber-mich" ref={ref} className="section-padding bg-warm-50 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
            <motion.div style={{ y: imgY }} className="absolute inset-[-12%]">
              <div className="absolute inset-0 bg-gradient-to-br from-stone-400 via-stone-500 to-zinc-600" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <div className="h-0.5 w-10 bg-gold mb-4" />
              <p className="font-serif text-white text-2xl">Nathalie Luthner</p>
              <p className="font-sans text-white/60 text-sm tracking-wide mt-1">Immobilieninvestorin · München</p>
            </div>
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 card-shadow"
          >
            <div className="font-serif text-primary text-3xl font-medium">15+</div>
            <div className="font-sans text-text-muted text-xs tracking-wide mt-1">Objekte erworben</div>
          </motion.div>
          <div className="absolute -top-4 -left-4 w-14 h-14 border-2 border-primary/20 rounded-tl-2xl" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <span className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Über mich
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] text-text font-medium leading-tight mb-6">
            Persönlich. Professionell.{' '}
            <span className="text-primary italic">Verlässlich.</span>
          </h2>
          <p className="font-sans text-text-muted text-base leading-relaxed mb-4">
            Ich bin Nathalie – Immobilieninvestorin aus München mit einer Leidenschaft
            für die Transformation von Immobilien. Mit meiner Erfahrung im Bereich
            Fix &amp; Flip und einem starken Netzwerk aus Handwerkern, Maklern und
            Investoren bin ich Ihre zuverlässige Partnerin.
          </p>
          <p className="font-sans text-text-muted text-base leading-relaxed mb-10">
            Für mich ist jede Immobilie mehr als nur ein Objekt – es ist Ihre persönliche
            Geschichte. Deshalb behandle ich jeden Verkauf mit der nötigen Diskretion,
            Professionalität und Wertschätzung.
          </p>

          <div className="space-y-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-4 p-4 rounded-xl bg-white border border-warm-200 hover:border-primary/20 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/8 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div>
                  <p className="font-serif text-text text-lg mb-1">{v.title}</p>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
