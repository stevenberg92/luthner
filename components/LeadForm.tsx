'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const trust = ['Kostenlos', 'Unverbindlich', 'Persönlich', 'Schnell'];

const fields = [
  { id: 'name',  label: 'Ihr Name',          type: 'text', placeholder: 'Max Mustermann' },
  { id: 'phone', label: 'Telefonnummer',     type: 'tel',  placeholder: '+49 …' },
  { id: 'email', label: 'E-Mail-Adresse',    type: 'email', placeholder: 'ihre@email.de' },
  { id: 'ort',   label: 'Ort der Immobilie', type: 'text', placeholder: 'Norderstedt, Hamburg …' },
];

export default function LeadForm() {
  const ref       = useRef<HTMLElement>(null);
  const inView    = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);

  return (
    <section id="kontakt" ref={ref} className="relative py-28 md:py-36 px-6 overflow-hidden">
      {/* Blurred property background */}
      <motion.div style={{ y: bgY }} className="absolute inset-[-15%] z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80')",
            filter: 'blur(6px)',
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-sans text-gold text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Immobilienbewertung
            </span>
            <h2 className="font-serif text-white text-[clamp(2rem,4.2vw,3.4rem)] font-medium leading-tight mb-5">
              Was ist Ihre Immobilie<br />
              <span className="text-gold italic">aktuell wert?</span>
            </h2>
            <p className="font-sans text-white/70 text-base leading-relaxed mb-8">
              Erhalten Sie eine professionelle und unverbindliche Marktwerteinschätzung
              Ihrer Immobilie – persönlich von Ihrem Maklerbüro für Norderstedt &amp; Hamburg.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8">
              {trust.map((t) => (
                <span key={t} className="flex items-center gap-2 font-sans text-white/80 text-sm">
                  <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>

            <div className="p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15">
              <p className="font-sans text-white/60 text-sm mb-1">Oder direkt anrufen:</p>
              <a href="tel:+4940524 9091" className="font-serif text-white text-xl hover:text-gold transition-colors">
                +49 (0)40 524 90 91
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="bg-white rounded-2xl p-8 card-shadow"
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
                    className="w-16 h-16 bg-gold/15 rounded-full flex items-center justify-center mx-auto mb-5"
                  >
                    <svg className="w-7 h-7 text-gold-dark" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h3 className="font-serif text-text text-2xl mb-2">Vielen Dank!</h3>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns zeitnah
                    persönlich bei Ihnen.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  className="space-y-5"
                >
                  <p className="font-serif text-text text-xl mb-1">Kostenlose Bewertung anfragen</p>
                  <p className="font-sans text-text-muted text-sm mb-4">
                    Wir antworten in der Regel innerhalb von 24 Stunden.
                  </p>
                  {fields.map((f) => (
                    <div key={f.id}>
                      <label className="font-sans text-text-muted text-xs tracking-widest uppercase block mb-1.5">
                        {f.label}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required
                        placeholder={f.placeholder}
                        className="w-full border border-warm-200 rounded-xl px-4 py-3 font-sans text-sm text-text placeholder:text-text-light focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  ))}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0,0,0,0.18)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-primary text-white font-sans text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300"
                  >
                    Jetzt kostenlose Bewertung anfragen
                  </motion.button>
                  <p className="font-sans text-text-light text-xs text-center">
                    Kostenlos · Unverbindlich · Persönlich · Diskret
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
