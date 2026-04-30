'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Objekte',    href: '#objekte' },
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Ablauf',     href: '#ablauf' },
  { label: 'Über mich',  href: '#ueber-mich' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
            <span className="font-serif text-white text-xs font-semibold tracking-wide">NL</span>
          </div>
          <div>
            <span className={`font-serif text-base font-medium tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              Nathalie Luthner
            </span>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-sans text-sm transition-colors duration-200 hover:text-primary ${
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
            Immobilie bewerten
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden flex flex-col gap-[5px] p-1 transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}
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
            className="md:hidden bg-white border-t border-warm-200 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="text-text-muted hover:text-primary font-sans text-sm transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setOpen(false)}
                className="mt-2 px-5 py-3 bg-primary text-white font-sans text-sm rounded-full text-center hover:bg-primary-dark transition-colors">
                Immobilie bewerten
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
