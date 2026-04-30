'use client';

import { motion } from 'framer-motion';

const navLinks = [
  ['Objekte',    '#objekte'],
  ['Leistungen', '#leistungen'],
  ['Ablauf',     '#ablauf'],
  ['Über mich',  '#ueber-mich'],
  ['Kontakt',    '#kontakt'],
];

export default function Footer() {
  return (
    <footer className="bg-text py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                <span className="font-serif text-white text-xs font-semibold">NL</span>
              </div>
              <span className="font-serif text-white text-base tracking-wide">Nathalie Luthner</span>
            </div>
            <p className="font-sans text-white/35 text-sm leading-relaxed max-w-xs">
              Immobilieninvestorin aus München.<br />
              Fix &amp; Flip · Direktankauf · Premium Objekte.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Navigation</h4>
            <div className="space-y-3">
              {navLinks.map(([label, href]) => (
                <a key={label} href={href} className="block font-sans text-white/50 text-sm hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Kontakt</h4>
            <div className="space-y-3">
              <a href="tel:+4989123456789" className="block font-sans text-white/50 text-sm hover:text-white transition-colors">
                +49 89 123 456 789
              </a>
              <a href="mailto:kontakt@nathalie-luthner.de" className="block font-sans text-white/50 text-sm hover:text-white transition-colors">
                kontakt@nathalie-luthner.de
              </a>
              <p className="font-sans text-white/30 text-sm">München, Bayern</p>
            </div>

            <motion.a
              href="#kontakt"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block mt-6 px-5 py-2.5 bg-primary text-white font-sans text-xs font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Immobilie bewerten lassen
            </motion.a>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/20 text-xs">
            © {new Date().getFullYear()} Nathalie Luthner. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="font-sans text-white/20 text-xs hover:text-white/40 transition-colors">Impressum</a>
            <a href="#" className="font-sans text-white/20 text-xs hover:text-white/40 transition-colors">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
