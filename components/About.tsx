'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const points = [
  { title: 'Persönlicher statt anonymer Service', desc: 'Sie haben einen festen Ansprechpartner – erreichbar, transparent und auf Augenhöhe.' },
  { title: 'Maßgeschneiderte Vermarktung',         desc: 'Jede Immobilie ist individuell. Wir entwickeln die passende Strategie für den besten Preis.' },
  { title: 'Rundum-sorglos-Service',               desc: 'Von der Bewertung über Behörden und Notar bis zur Übergabe – alles aus einer Hand.' },
];

export default function About() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section id="ueber-uns" ref={ref} className="section-padding bg-warm-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-6"
          >
            Über uns &amp; Team
          </motion.span>
          <ScrollReveal
            as="h2"
            className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.1] tracking-tight"
            baseColor="#D6CFBE"
            highlightColor="#1A1A19"
          >
            Mehr als ein Immobilienverkauf – persönliche Betreuung mit Leidenschaft.
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden card-shadow">
              <motion.div style={{ y: imgY }} className="absolute inset-[-12%]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="h-0.5 w-10 bg-gold mb-4" />
                <p className="font-serif text-white text-2xl">Jennifer Bormann</p>
                <p className="font-sans text-white/60 text-sm tracking-wide mt-1">Geschäftsführerin · MBI Bormann Immobilien</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-5 card-shadow"
            >
              <div className="font-serif text-primary text-3xl font-medium">IVD</div>
              <div className="font-sans text-text-muted text-xs tracking-wide mt-1">Geprüftes Maklerbüro</div>
            </motion.div>
            <div className="absolute -top-4 -left-4 w-14 h-14 border-2 border-gold/30 rounded-tl-2xl" />
          </motion.div>

          {/* Text */}
          <div>
            <div className="mb-8 space-y-5">
              <ScrollReveal
                as="p"
                className="font-sans text-base leading-relaxed"
                baseColor="#CFC8B6"
                highlightColor="#67655E"
              >
                Als inhabergeführtes Maklerbüro aus Norderstedt-Garstedt beraten wir Käufer, Verkäufer, Mieter und Vermieter mit einem kompletten Immobilienservice. Wir sind regional verwurzelt, persönlich erreichbar und kennen den Markt in Norderstedt, Hamburg und Umgebung genau.
              </ScrollReveal>
              <ScrollReveal
                as="p"
                className="font-sans text-base leading-relaxed"
                baseColor="#CFC8B6"
                highlightColor="#67655E"
              >
                Dank guter Vernetzung zu Behörden, Ämtern und Baufachbereichen ersparen wir Ihnen die „Lauferei“ – und begleiten Sie zuverlässig von der ersten Einschätzung bis zum Notartermin.
              </ScrollReveal>
            </div>

            <div className="space-y-4">
              {points.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex gap-4 p-4 rounded-xl bg-white border border-warm-200 hover:border-gold/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/12 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                  <div>
                    <p className="font-serif text-text text-lg mb-1">{v.title}</p>
                    <p className="font-sans text-text-muted text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
