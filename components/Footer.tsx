"use client";

import { motion } from "framer-motion";

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

const navColumns = [
  {
    heading: "Navigation",
    links: [
      { label: "Über uns", href: "#story" },
      { label: "Werte", href: "#vorteile" },
      { label: "Objekte", href: "#objekte" },
      { label: "Projekte", href: "#cases" },
      { label: "Leistungen", href: "#leistungen" },
    ],
  },
  {
    heading: "Kontakt",
    links: [
      { label: "kontakt@luthner-estates.de", href: "mailto:kontakt@luthner-estates.de" },
      { label: "+49 89 1234 5678", href: "tel:+498912345678" },
      { label: "Maximilianstraße 12, München", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory">
      <div className="container-luxe py-20 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          <div className="lg:col-span-5">
            <a href="#top" className="flex items-baseline gap-2">
              <span className="font-serif text-3xl tracking-tight text-ivory">
                Luthner
              </span>
              <span className="text-[10px] tracking-widest2 uppercase text-gold-soft">
                Estates
              </span>
            </a>
            <p className="mt-6 max-w-md text-base text-ivory/65 leading-relaxed">
              Premium-Immobilieninvestitionen aus Leidenschaft. Persönlich,
              diskret, kompromisslos auf Qualität.
            </p>
            <a
              href="#kontakt"
              className="mt-8 inline-flex items-center text-sm text-ivory border-b border-ivory/30 pb-1
                         hover:text-gold-soft hover:border-gold transition-colors duration-500"
            >
              Gespräch starten →
            </a>
          </div>

          {navColumns.map((col) => (
            <div key={col.heading} className="lg:col-span-3">
              <div className="text-[10px] uppercase tracking-widest2 text-gold-soft">
                {col.heading}
              </div>
              <ul className="mt-6 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ivory/75 hover:text-gold-soft transition-colors duration-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1">
            <div className="text-[10px] uppercase tracking-widest2 text-gold-soft">
              Folgen
            </div>
            <ul className="mt-6 space-y-3">
              {social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ivory/75 hover:text-gold-soft transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-ivory/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-xs text-ivory/50">
            © {new Date().getFullYear()} Luthner Estates. Alle Rechte
            vorbehalten.
          </div>
          <div className="flex flex-wrap gap-6 text-xs text-ivory/50">
            <a href="#" className="hover:text-ivory transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-ivory transition-colors">
              Datenschutz
            </a>
            <a href="#" className="hover:text-ivory transition-colors">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
