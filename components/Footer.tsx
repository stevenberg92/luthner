'use client';

import { motion } from 'framer-motion';

const navLinks = [
  ['Properties', '#properties'],
  ['About',      '#about'],
  ['Services',   '#services'],
  ['Results',    '#results'],
  ['Contact',    '#contact'],
];

const socials = [
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    label: 'LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 border border-gold/50 rounded-sm flex items-center justify-center">
                <span className="font-serif text-gold text-[0.6rem] font-semibold tracking-wider">NL</span>
              </div>
              <span className="font-serif text-white/80 text-sm tracking-wide">Luthner</span>
            </div>
            <p className="font-sans text-white/25 text-sm leading-relaxed max-w-xs">
              Premium real estate investments in the luxury segment. Fast, reliable, professional.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:hello@luthner.de" className="block font-sans text-white/45 text-sm hover:text-gold transition-colors">
                hello@luthner.de
              </a>
              <a href="tel:+4989123456789" className="block font-sans text-white/45 text-sm hover:text-gold transition-colors">
                +49 89 123 456 789
              </a>
              <p className="font-sans text-white/25 text-sm">Munich, Germany</p>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Navigation</h4>
            <div className="space-y-3">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href} className="block font-sans text-white/45 text-sm hover:text-gold transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/20 text-xs">
            © {new Date().getFullYear()} Luthner. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href="#"
                aria-label={s.label}
                whileHover={{ scale: 1.15, color: '#C9A84C' }}
                className="text-white/20 hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
