'use client';

import { motion } from 'framer-motion';

const navLinks = [
  ['Start',      '#top'],
  ['Angebot',    '#objekte'],
  ['Leistungen', '#leistungen'],
  ['Über uns',   '#ueber-uns'],
  ['Vorteile',   '#vorteile'],
  ['Kontakt',    '#kontakt'],
];

const legalLinks = ['Impressum', 'Datenschutz', 'Widerrufsbelehrung', 'Maklervertrag'];

export default function Footer() {
  return (
    <footer className="bg-primary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-white/10 flex items-center justify-center rounded-sm">
                <span className="font-serif text-white text-[0.7rem] font-semibold tracking-wider">MBI</span>
              </div>
              <span className="font-serif text-white text-base tracking-wide">Bormann Immobilien</span>
            </div>
            <p className="font-sans text-white/40 text-sm leading-relaxed">
              Ihr Immobilienpartner für Norderstedt, Hamburg und Umgebung. Persönliche
              Beratung und zuverlässiger Service seit vielen Jahrzehnten.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Kontakt</h4>
            <div className="space-y-3 font-sans text-sm">
              <p className="text-white/45 leading-relaxed">
                MBI Bormann Immobilien<br />
                Vermittlungsgesellschaft mbH<br />
                Friedrich-Ebert-Straße 2–4<br />
                22848 Norderstedt-Garstedt
              </p>
              <a href="tel:+4940524 9091" className="block text-white/55 hover:text-white transition-colors">
                Tel.: +49 (0)40 524 90 91
              </a>
              <p className="text-white/40">Fax: +49 (0)40 529 29 93</p>
              <a href="mailto:info@mbi-immobilien.de" className="block text-white/55 hover:text-white transition-colors">
                info@mbi-immobilien.de
              </a>
            </div>
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

          {/* Company / Legal */}
          <div>
            <h4 className="font-sans text-white/30 text-[0.6rem] tracking-[0.3em] uppercase mb-5">Unternehmen</h4>
            <div className="space-y-2 font-sans text-white/40 text-xs leading-relaxed mb-5">
              <p>Geschäftsführerin: Jennifer Bormann</p>
              <p>Registergericht Kiel, HRB 6784</p>
              <p>USt-IdNr.: DE 238894304</p>
              <p>Aufsicht: IHK zu Lübeck · Ordnungsamt Norderstedt</p>
            </div>
            <div className="space-y-2.5">
              {legalLinks.map((l) => (
                <a key={l} href="#" className="block font-sans text-white/45 text-xs hover:text-white/70 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-white/25 text-xs">
            © {new Date().getFullYear()} MBI Bormann Immobilien Vermittlungsgesellschaft mbH. Alle Rechte vorbehalten.
          </p>
          <motion.a
            href="#kontakt"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-white text-primary font-sans text-xs font-medium rounded-full hover:bg-warm-100 transition-colors"
          >
            Kostenlose Immobilienbewertung
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
