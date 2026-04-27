'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const links = [
  { label: 'Properties', href: '#properties' },
  { label: 'About',      href: '#about' },
  { label: 'Services',   href: '#services' },
  { label: 'Results',    href: '#results' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress }   = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gold z-[100] origin-left"
        style={{ width }}
      />

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'w-[calc(100%-2rem)] max-w-5xl'
            : 'w-[calc(100%-3rem)] max-w-6xl'
        }`}
      >
        <div className={`glass rounded-full px-6 py-3.5 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'shadow-[0_8px_40px_rgba(0,0,0,0.6)]' : ''
        }`}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 border border-gold/50 rounded-sm flex items-center justify-center group-hover:border-gold transition-colors duration-300">
              <span className="font-serif text-gold text-[0.6rem] font-semibold tracking-wider">NL</span>
            </div>
            <span className="font-serif text-white/90 text-sm tracking-wide">Luthner</span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-white/50 hover:text-white text-[0.8rem] tracking-wide transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(201,168,76,1)' }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:block px-5 py-2 bg-gold/90 text-bg rounded-full font-sans text-[0.75rem] font-medium tracking-wide transition-colors duration-200"
            >
              Get in Touch
            </motion.a>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-[5px]"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
                className="block w-5 h-px bg-white origin-center"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                className="block w-5 h-px bg-white"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
                className="block w-5 h-px bg-white origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl mt-2 px-6 py-5 flex flex-col gap-4"
            >
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/60 hover:text-white text-sm tracking-wide transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 px-5 py-3 bg-gold/90 text-bg rounded-full font-sans text-sm font-medium tracking-wide text-center"
              >
                Get in Touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
