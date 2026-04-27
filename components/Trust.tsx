"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/Reveal";

const benefits = [
  {
    num: "01",
    title: "Schnelle Abwicklung",
    body: "Verbindliches Angebot in 72 Stunden. Notartermin in unter 21 Tagen möglich.",
  },
  {
    num: "02",
    title: "Finanzielle Sicherheit",
    body: "Eigenkapitalstarker Ankauf ohne Finanzierungsvorbehalt. Bonität auf Anfrage.",
  },
  {
    num: "03",
    title: "Professionelle Ausführung",
    body: "Architekt:innen, Handwerksmeister und Stagings-Profis aus einer Hand.",
  },
  {
    num: "04",
    title: "Premium-Fokus",
    body: "Wir arbeiten ausschließlich mit hochwertigen Lagen und Objekten – mit Anspruch.",
  },
];

export function Trust() {
  return (
    <section id="vorteile" className="bg-bone py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Warum Luthner"
          title="Vier Werte, die jeden Deal definieren."
          intro="Wir agieren als Partner – nicht als Marktteilnehmer. Diskretion, Tempo und Qualität sind keine Versprechen, sondern Standard."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((b) => (
            <motion.article
              key={b.num}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-ivory p-8 md:p-9 border border-graphite/5
                         shadow-[0_1px_0_rgba(0,0,0,0.02)] hover:shadow-card transition-shadow duration-500"
            >
              <div className="font-serif text-gold text-sm tracking-widest2">
                {b.num}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-graphite leading-tight">
                {b.title}
              </h3>
              <p className="mt-4 text-sm text-ash leading-relaxed">
                {b.body}
              </p>

              <div className="mt-8 pt-6 border-t border-graphite/10">
                <span className="inline-flex items-center text-xs tracking-widest2 uppercase text-graphite group-hover:text-gold transition-colors">
                  Mehr erfahren
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
