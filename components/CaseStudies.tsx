"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";

type Case = {
  name: string;
  location: string;
  duration: string;
  uplift: string;
  before: string;
  after: string;
  description: string;
};

const cases: Case[] = [
  {
    name: "Villa am Ammersee",
    location: "Bayern",
    duration: "8 Monate",
    uplift: "+ 47 % Wertsteigerung",
    before:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80",
    description:
      "Eine in die Jahre gekommene Villa wurde zur architektonischen Ikone am Ufer. Vollständiger Innenausbau, neue Fassade, energetische Sanierung – behutsam, mit Respekt vor dem Bestand.",
  },
  {
    name: "Stadtpalais Hamburg",
    location: "Harvestehude",
    duration: "11 Monate",
    uplift: "+ 38 % Wertsteigerung",
    before:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1600&q=80",
    after:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80",
    description:
      "Ein klassisches Gründerzeit-Palais zurück in seine ursprüngliche Eleganz übersetzt – mit zeitgemäßem Komfort, intelligenter Aufteilung und einer kuratierten Material-Auswahl.",
  },
];

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="cases" className="relative bg-graphite text-ivory py-24 md:py-36">
      <div className="container-luxe">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-block w-12 h-px bg-gold" />
          <span className="eyebrow">Realisierte Projekte</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="h-display text-4xl md:text-5xl lg:text-[3.5rem] text-ivory max-w-2xl">
            Vorher. Nachher.
            <span className="block italic text-gold-soft">
              Eine Frage der Vision.
            </span>
          </h2>

          <div className="flex gap-2">
            {cases.map((cs, i) => (
              <button
                key={cs.name}
                onClick={() => setActive(i)}
                className={`px-5 py-2.5 text-xs tracking-widest2 uppercase border transition-all duration-500 ${
                  active === i
                    ? "border-gold bg-gold text-ivory"
                    : "border-ivory/20 text-ivory/70 hover:border-gold hover:text-ivory"
                }`}
              >
                Projekt {String(i + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={c.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              key={`${c.name}-before`}
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${c.before}')` }}
            />
            <div className="absolute inset-0 bg-graphite/30" />
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-graphite/80 text-[10px] tracking-widest2 uppercase">
              Vorher
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden">
            <motion.div
              key={`${c.name}-after`}
              initial={{ scale: 1.06, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${c.after}')` }}
            />
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-gold text-[10px] tracking-widest2 uppercase">
              Nachher
            </div>
          </div>
        </motion.div>

        <motion.div
          key={`${c.name}-text`}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10"
        >
          <div className="lg:col-span-7">
            <h3 className="font-serif text-3xl md:text-4xl text-ivory">
              {c.name}
            </h3>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed max-w-xl">
              {c.description}
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-3 gap-6 self-end border-t border-ivory/10 pt-8">
            <div>
              <div className="text-[10px] uppercase tracking-widest2 text-ivory/50">
                Lage
              </div>
              <div className="mt-2 font-serif text-xl text-ivory">
                {c.location}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest2 text-ivory/50">
                Dauer
              </div>
              <div className="mt-2 font-serif text-xl text-ivory">
                {c.duration}
              </div>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest2 text-ivory/50">
                Resultat
              </div>
              <div className="mt-2 font-serif text-xl text-gold-soft">
                {c.uplift}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
