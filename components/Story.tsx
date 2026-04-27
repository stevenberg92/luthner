"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Schnelle Entscheidungen",
    body: "Verbindliche Rückmeldung innerhalb weniger Tage – ohne Bürokratie, ohne Umwege.",
  },
  {
    title: "Solide Finanzkraft",
    body: "Eigenkapitalstarke Strukturen ermöglichen reibungslose Ankäufe in jeder Größenordnung.",
  },
  {
    title: "Verlässliche Umsetzung",
    body: "Vom ersten Gespräch bis zum Notartermin – diskret, präzise und auf den Punkt.",
  },
];

export function Story() {
  return (
    <section
      id="story"
      className="relative bg-ivory grain py-24 md:py-36 overflow-hidden"
    >
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center scale-[1.02]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80')",
              }}
            />
            <div className="absolute inset-0 bg-graphite/10" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:block absolute -bottom-6 -right-6 bg-graphite text-ivory px-7 py-6 max-w-[260px]"
          >
            <div className="font-serif italic text-2xl text-gold-soft leading-tight">
              „Wir kaufen nicht nur Häuser – wir geben ihnen ihre Bestform."
            </div>
            <div className="mt-3 text-[11px] tracking-widest2 uppercase text-ivory/60">
              Nathalie &amp; Marc Luthner
            </div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="divider-gold" />
            <span className="eyebrow">Wer wir sind</span>
          </div>

          <h2 className="h-display text-4xl md:text-5xl lg:text-[3.5rem] text-graphite">
            Ein Paar.
            <span className="block italic text-gold">
              Ein Anspruch. Premium.
            </span>
          </h2>

          <div className="mt-8 space-y-6 text-base md:text-lg text-slate leading-relaxed max-w-xl">
            <p>
              Nathalie und Marc Luthner stehen für eine neue Generation von
              Immobilieninvestoren: persönlich, kompromisslos auf Qualität
              fokussiert und mit einem klaren Auge für das, was eine Immobilie
              wertvoll macht.
            </p>
            <p>
              Aus dieser Haltung heraus entstehen seit über einem Jahrzehnt
              kuratierte Fix-&-Flip-Projekte im Premium-Segment – getragen
              von Vertrauen, finanzieller Stärke und einem Netzwerk, das
              Türen öffnet.
            </p>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
            }}
            className="mt-12 grid sm:grid-cols-3 gap-px bg-graphite/10 border border-graphite/10"
          >
            {strengths.map((s) => (
              <motion.li
                key={s.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="bg-ivory p-6"
              >
                <div className="font-serif text-xl text-graphite">
                  {s.title}
                </div>
                <p className="mt-2 text-sm text-ash leading-relaxed">
                  {s.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
