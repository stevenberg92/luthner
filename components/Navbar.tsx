'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Start',      href: '#top' },
  { label: 'Angebot',    href: '#objekte' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Über uns',   href: '#ueber-uns' },
  { label: 'Team',       href: '#ueber-uns' },
  { label: 'Vorteile',   href: '#vorteile' },
  { label: 'Kontakt',    href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-primary flex items-center justify-center rounded-sm">
            <span className="font-serif text-white text-[0.7rem] font-semibold tracking-wider">MBI</span>
          </div>
          <div className="leading-tight">
            <span className={`block font-serif text-base font-medium tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Bormann Immobilien
            </span>
            <span className={`block font-sans text-[0.6rem] tracking-[0.25em] uppercase transition-colors ${scrolled ? 'text-text-muted' : 'text-white/60'}`}>
              Norderstedt · Hamburg
            </span>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-sans text-sm transition-colors duration-200 hover:text-gold ${
                scrolled ? 'text-text-muted' : 'text-white/80 hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-primary text-white font-sans text-sm rounded-full hover:bg-primary-dark transition-colors duration-200"
          >
            Kostenlose Immobilienbewertung
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          className={`lg:hidden flex flex-col gap-[5px] p-1 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
        >
          <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }} className="block w-5 h-0.5 bg-current origin-center" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-5 h-0.5 bg-current" />
          <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }} className="block w-5 h-0.5 bg-current origin-center" />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-warm-200 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="text-text-muted hover:text-gold font-sans text-sm transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-primary text-white font-sans text-sm rounded-full text-center hover:bg-primary-dark transition-colors">
                Kostenlose Immobilienbewertung
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
