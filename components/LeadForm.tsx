'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const types = [
  { id: 'einfamilienhaus', label: 'Einfamilienhaus',   icon: '🏠' },
  { id: 'wohnung',         label: 'Eigentumswohnung',  icon: '🏢' },
  { id: 'mehrfamilienhaus', label: 'Mehrfamilienhaus', icon: '🏘️' },
  { id: 'sonstiges',       label: 'Sonstiges',         icon: '📋' },
];

export default function LeadForm() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: '-80px' });
  const [type,    setType]      = useState('wohnung');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="kontakt" className="section-padding bg-warm-50" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-sans text-primary text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Kontakt
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] text-text font-medium leading-tight mb-6">
              Immobilie verkaufen?<br />
              <span className="text-primary italic">Ich mache Ihnen ein Angebot.</span>
            </h2>
            <p className="font-sans text-text-muted text-base leading-relaxed mb-8">
              Füllen Sie das Formular aus – ich melde mich persönlich innerhalb von
              24 Stunden bei Ihnen. Kostenlos, unverbindlich und diskret.
            </p>

            {/* Trust signals */}
            <div className="space-y-3">
              {[
                'Angebot in 48 Stunden',
                'Kein Makler, keine Provision',
                'Abschluss in unter 30 Tagen',
                '100% kostenlos & unverbindlich',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-sans text-text-muted text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-5 bg-white rounded-2xl border border-warm-200 card-shadow">
              <p className="font-sans text-text-muted text-sm mb-1">Oder direkt anrufen:</p>
              <a href="tel:+4989123456789" className="font-serif text-primary text-xl hover:text-primary-dark transition-colors">
                +49 89 123 456 789
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-white rounded-2xl p-8 card-shadow border border-warm-200"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-serif text-text text-2xl mb-2">Vielen Dank!</h3>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Ihre Anfrage ist bei mir eingegangen. Ich melde mich innerhalb
                    von 24 Stunden persönlich bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <div>
                    <p className="font-sans text-text-muted text-xs tracking-widest uppercase mb-3">Art der Immobilie</p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {types.map((t) => (
                        <button key={t.id} type="button" onClick={() => setType(t.id)}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all duration-200 ${
                            type === t.id ? 'border-primary bg-primary/4 text-text' : 'border-warm-200 text-text-muted hover:border-primary/30'
                          }`}>
                          <span className="text-base">{t.icon}</span>
                          <span className="font-sans text-sm">{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'name',  label: 'Ihr Name',       type: 'text',  required: true,  placeholder: 'Max Mustermann' },
                      { id: 'phone', label: 'Telefonnummer',   type: 'tel',   required: true,  placeholder: '+49 ...' },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="font-sans text-text-muted text-xs tracking-widest uppercase block mb-1.5">{f.label}</label>
                        <input id={f.id} type={f.type} required={f.required} placeholder={f.placeholder}
                          className="w-full border border-warm-200 rounded-xl px-4 py-3 font-sans text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary transition-colors" />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="font-sans text-text-muted text-xs tracking-widest uppercase block mb-1.5">E-Mail-Adresse</label>
                    <input type="email" required placeholder="ihre@email.de"
                      className="w-full border border-warm-200 rounded-xl px-4 py-3 font-sans text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary transition-colors" />
                  </div>

                  <div>
                    <label className="font-sans text-text-muted text-xs tracking-widest uppercase block mb-1.5">Lage der Immobilie</label>
                    <input type="text" placeholder="Stadt / PLZ"
                      className="w-full border border-warm-200 rounded-xl px-4 py-3 font-sans text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary transition-colors" />
                  </div>

                  <div>
                    <label className="font-sans text-text-muted text-xs tracking-widest uppercase block mb-1.5">Ihre Nachricht (optional)</label>
                    <textarea rows={3} placeholder="Kurze Beschreibung Ihrer Immobilie oder Situation ..."
                      className="w-full border border-warm-200 rounded-xl px-4 py-3 font-sans text-sm text-text placeholder:text-text-light focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>

                  <motion.button type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(26,75,58,0.25)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300">
                    Kostenlos anfragen
                  </motion.button>
                  <p className="font-sans text-text-light text-xs text-center">
                    Unverbindlich · Kostenlos · 100% diskret
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
