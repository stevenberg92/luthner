"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#story", label: "Über uns" },
  { href: "#vorteile", label: "Werte" },
  { href: "#objekte", label: "Objekte" },
  { href: "#cases", label: "Projekte" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-graphite/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-luxe flex items-center justify-between h-20 md:h-24">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl md:text-3xl tracking-tight text-graphite">
            Luthner
          </span>
          <span className="text-[10px] tracking-widest2 uppercase text-gold mt-1">
            Estates
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-graphite/80 hover:text-gold transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#kontakt" className="btn-primary !py-2.5 !px-5 text-xs">
            Bewertung anfragen
          </a>
        </div>

        <button
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-px bg-graphite transition-all duration-300 ${
              open ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-graphite transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-graphite transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-ivory border-t border-graphite/5 overflow-hidden"
          >
            <nav className="container-luxe flex flex-col gap-5 py-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl text-graphite hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 self-start"
              >
                Bewertung anfragen
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
