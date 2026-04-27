"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // subtle parallax on the background image
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.8]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
        aria-hidden
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=80')",
          }}
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-graphite/40 via-graphite/55 to-graphite/85"
        />
      </motion.div>

      <div className="container-luxe relative pt-40 pb-24 md:pt-44 md:pb-32 w-full">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
          }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="inline-block w-12 h-px bg-gold" />
            <span className="text-[11px] md:text-xs uppercase tracking-widest2 text-gold-soft">
              Premium Real Estate · Fix &amp; Flip
            </span>
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 28 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="h-display text-ivory text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Exklusive Immobilien&shy;investitionen
            <span className="block italic text-gold-soft mt-2">
              mit Geschwindigkeit, Präzision &amp; Vertrauen.
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-8 max-w-xl text-base md:text-lg text-ivory/80 leading-relaxed"
          >
            Wir transformieren Liegenschaften in hochwertige Anlagen – und
            sichern Ihnen verlässliche, unkomplizierte Transaktionen auf
            höchstem Niveau.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-ivory text-sm tracking-wide
                         transition-all duration-500 ease-luxe hover:bg-gold-deep hover:shadow-soft hover:-translate-y-0.5"
            >
              Kostenlose Immobilienbewertung
            </a>
            <a
              href="#objekte"
              className="inline-flex items-center justify-center px-8 py-4 border border-ivory/40 text-ivory text-sm tracking-wide
                         transition-all duration-500 ease-luxe hover:bg-ivory hover:text-graphite hover:-translate-y-0.5"
            >
              Aktuelle Objekte ansehen
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-16 grid grid-cols-3 gap-6 md:gap-12 max-w-xl border-t border-ivory/15 pt-8"
          >
            {[
              { v: "120+", l: "Realisierte Objekte" },
              { v: "< 14", l: "Tage bis Ankauf" },
              { v: "100 %", l: "Eigenkapitalbasiert" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl md:text-4xl text-ivory">
                  {s.v}
                </div>
                <div className="mt-2 text-[11px] uppercase tracking-widest2 text-ivory/60">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
        aria-hidden
      >
        <span className="text-[10px] tracking-widest2 uppercase text-ivory/60">
          Scrollen
        </span>
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-12 bg-gradient-to-b from-ivory/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
