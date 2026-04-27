"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ui/SectionHeader";
import { staggerContainer, staggerItem } from "./ui/Reveal";

type Property = {
  title: string;
  location: string;
  status: "Verfügbar" | "Reserviert" | "In Sanierung";
  size: string;
  price: string;
  image: string;
};

const properties: Property[] = [
  {
    title: "Villa Solis",
    location: "Starnberger See, Bayern",
    status: "Verfügbar",
    size: "412 m² · 7 Zimmer",
    price: "Auf Anfrage",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Townhouse Aurum",
    location: "Hamburg, Harvestehude",
    status: "In Sanierung",
    size: "286 m² · 5 Zimmer",
    price: "ab 3,4 Mio. €",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Penthouse Nova",
    location: "München, Bogenhausen",
    status: "Reserviert",
    size: "198 m² · 4 Zimmer",
    price: "2,9 Mio. €",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Landhaus Lumen",
    location: "Tegernsee, Bayern",
    status: "Verfügbar",
    size: "365 m² · 6 Zimmer",
    price: "4,2 Mio. €",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80",
  },
];

export function Properties() {
  return (
    <section id="objekte" className="bg-ivory py-24 md:py-36">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            eyebrow="Aktuelle Objekte"
            title="Eine kleine Auswahl. Bewusst kuratiert."
            intro="Diskrete Off-Market-Liegenschaften und ausgewählte Premium-Projekte. Vollständiger Bestand auf Anfrage."
          />
          <a href="#kontakt" className="btn-ghost self-start md:self-auto">
            Gesamten Bestand anfragen →
          </a>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {properties.map((p) => (
            <motion.article
              key={p.title}
              variants={staggerItem}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-graphite/5">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-5 left-5">
                  <span
                    className={`inline-block px-3 py-1.5 text-[10px] tracking-widest2 uppercase ${
                      p.status === "Verfügbar"
                        ? "bg-gold text-ivory"
                        : p.status === "Reserviert"
                        ? "bg-graphite text-ivory"
                        : "bg-ivory text-graphite"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs uppercase tracking-widest2 text-gold">
                    {p.location}
                  </div>
                  <h3 className="mt-2 font-serif text-2xl md:text-3xl text-graphite group-hover:text-gold transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-ash">{p.size}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[10px] uppercase tracking-widest2 text-ash">
                    Preis
                  </div>
                  <div className="mt-1 font-serif text-lg text-graphite">
                    {p.price}
                  </div>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center text-sm tracking-wide text-graphite border-b border-graphite/30 pb-1 group-hover:text-gold group-hover:border-gold transition-colors duration-500">
                Details ansehen
                <svg
                  className="ml-2 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
