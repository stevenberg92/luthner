"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, FormEvent } from "react";
import { SectionHeader } from "./ui/SectionHeader";

type LeadType = "verkaeufer" | "kaeufer" | "partner";

const tabs: {
  id: LeadType;
  label: string;
  headline: string;
  cta: string;
  blurb: string;
}[] = [
  {
    id: "verkaeufer",
    label: "Verkäufer:innen",
    headline: "Kostenlose Immobilienbewertung",
    cta: "Bewertung anfordern",
    blurb:
      "Sie überlegen, Ihre Immobilie zu verkaufen? Wir bewerten diskret, schnell und mit fundierter Markterfahrung – verbindlich innerhalb von 72 Stunden.",
  },
  {
    id: "kaeufer",
    label: "Käufer:innen",
    headline: "Exklusive Objekte entdecken",
    cta: "Bestand anfragen",
    blurb:
      "Sie suchen nach einem hochwertigen Zuhause oder Investment? Erhalten Sie Zugang zu unserem kuratierten Off-Market-Portfolio.",
  },
  {
    id: "partner",
    label: "Partner & Makler:innen",
    headline: "Partnerschaft starten",
    cta: "Partnerschaft prüfen",
    blurb:
      "Sie sind Makler:in, Architekt:in oder Vermittler:in? Wir bauen langfristige Partnerschaften – auf Augenhöhe, mit klaren Provisionen.",
  },
];

export function Leads() {
  const [active, setActive] = useState<LeadType>("verkaeufer");
  const [submitted, setSubmitted] = useState(false);
  const tab = tabs.find((t) => t.id === active)!;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Demo only – integrate with your backend / CRM here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="kontakt" className="bg-ivory py-24 md:py-36">
      <div className="container-luxe">
        <SectionHeader
          eyebrow="Kontakt"
          title="Drei Wege. Ein Gespräch."
          intro="Persönlich, vertraulich, ohne Verpflichtungen. Wählen Sie Ihre Rolle – wir melden uns innerhalb von 24 Stunden."
        />

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid sm:grid-cols-3 gap-3"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`relative px-6 py-5 text-left border transition-all duration-500 ${
                active === t.id
                  ? "border-gold bg-graphite text-ivory"
                  : "border-graphite/15 bg-ivory text-graphite hover:border-gold"
              }`}
            >
              <div
                className={`text-[10px] uppercase tracking-widest2 ${
                  active === t.id ? "text-gold-soft" : "text-gold"
                }`}
              >
                {t.id === "verkaeufer"
                  ? "01 — Verkauf"
                  : t.id === "kaeufer"
                  ? "02 — Ankauf"
                  : "03 — Kooperation"}
              </div>
              <div className="mt-2 font-serif text-xl">{t.label}</div>
            </button>
          ))}
        </motion.div>

        {/* Active panel */}
        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5"
            >
              <h3 className="h-display text-3xl md:text-4xl text-graphite">
                {tab.headline}
              </h3>
              <p className="mt-5 text-base text-ash leading-relaxed max-w-md">
                {tab.blurb}
              </p>

              <ul className="mt-10 space-y-4 text-sm text-graphite">
                {[
                  "Diskrete, persönliche Beratung",
                  "Antwort innerhalb von 24 Stunden",
                  "Keine Maklergebühren für Verkäufer:innen",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 mt-0.5 text-gold shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.8}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 bg-bone p-8 md:p-12 border border-graphite/5"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" name="name" required />
              <Field label="E-Mail" name="email" type="email" required />
              <Field label="Telefon" name="phone" type="tel" />
              <Field
                label="Standort / Region"
                name="region"
                placeholder="z. B. München"
              />
            </div>

            <div className="mt-6">
              <Field
                label="Nachricht"
                name="message"
                as="textarea"
                placeholder="Erzählen Sie uns kurz, worum es geht …"
              />
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <label className="flex items-start gap-3 text-xs text-ash leading-relaxed max-w-sm cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 accent-gold"
                />
                <span>
                  Ich stimme der vertraulichen Verarbeitung meiner Angaben zu.
                  Es gilt unsere Datenschutzerklärung.
                </span>
              </label>

              <button type="submit" className="btn-primary group">
                {tab.cta}
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
              </button>
            </div>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 px-4 py-3 bg-gold/10 border border-gold/30 text-sm text-graphite"
                >
                  Vielen Dank – wir melden uns innerhalb von 24 Stunden
                  persönlich bei Ihnen.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  as?: "input" | "textarea";
};

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  as = "input",
}: FieldProps) {
  const [focused, setFocused] = useState(false);

  const sharedProps = {
    name,
    id: name,
    placeholder: placeholder || " ",
    required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    className:
      "peer w-full bg-transparent border-b border-graphite/25 pt-6 pb-2 text-sm text-graphite placeholder-transparent focus:outline-none focus:border-gold transition-colors duration-300",
  };

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={4} />
      ) : (
        <input {...sharedProps} type={type} />
      )}
      <label
        htmlFor={name}
        className={`absolute left-0 top-0 text-[11px] uppercase tracking-widest2 transition-colors duration-300 ${
          focused ? "text-gold" : "text-ash"
        }`}
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
    </div>
  );
}
