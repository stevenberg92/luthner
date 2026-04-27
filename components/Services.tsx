"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/Reveal";

const services = [
  {
    tag: "Kerngeschäft",
    title: "Fix & Flip",
    body: "Wir akquirieren, sanieren und verkaufen Premium-Immobilien. Von der Bewertung bis zur Beurkundung – ein Partner, ein Prozess, ein klarer Mehrwert.",
    cta: "Objekt anbieten",
    href: "#kontakt",
  },
  {
    tag: "Ergänzend",
    title: "Homestaging",
    body: "Inszenierung mit Stilgefühl. Wir lassen Räume in ihrer schönsten Version erscheinen – und steigern dadurch nachweislich Verkaufspreise.",
    cta: "Anfragen",
    href: "#kontakt",
  },
  {
    tag: "Ergänzend",
    title: "Renovierung",
    body: "Hochwertige Renovierungen aus einer Hand. Mit Architekten, Handwerksmeistern und einem internen Projektteam – termintreu und kompromisslos.",
    cta: "Beratung",
    href: "#kontakt",
  },
];

export function Services() {
  return (
    <section id="leistungen" className="bg-bone py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Leistungen"
          title="Drei Disziplinen. Ein Anspruch."
          intro="Unser Kerngeschäft ist der Ankauf und die Veredelung von Premium-Liegenschaften. Ergänzt durch zwei Spezialleistungen aus dem eigenen Haus."
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mt-16 grid lg:grid-cols-3 gap-px bg-graphite/10 border border-graphite/10"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              variants={staggerItem}
              className={`relative bg-ivory p-10 md:p-12 group transition-colors duration-700 ${
                i === 0 ? "lg:bg-graphite lg:text-ivory" : ""
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-widest2 ${
                  i === 0 ? "lg:text-gold-soft text-gold" : "text-gold"
                }`}
              >
                {s.tag}
              </div>

              <h3
                className={`mt-6 font-serif text-3xl md:text-4xl leading-tight ${
                  i === 0 ? "lg:text-ivory text-graphite" : "text-graphite"
                }`}
              >
                {s.title}
              </h3>

              <p
                className={`mt-5 text-sm md:text-base leading-relaxed ${
                  i === 0 ? "lg:text-ivory/75 text-ash" : "text-ash"
                }`}
              >
                {s.body}
              </p>

              <a
                href={s.href}
                className={`mt-10 inline-flex items-center text-sm tracking-wide pb-1 border-b transition-colors duration-500 ${
                  i === 0
                    ? "lg:text-gold-soft lg:border-gold-soft/40 lg:hover:text-ivory lg:hover:border-ivory text-graphite border-graphite/40 hover:text-gold hover:border-gold"
                    : "text-graphite border-graphite/40 hover:text-gold hover:border-gold"
                }`}
              >
                {s.cta}
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
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
