'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const intents = [
  { id: 'seller',  label: 'I want to sell',       sub: 'Get a fast, fair offer' },
  { id: 'buyer',   label: 'I want to buy',         sub: 'Access premium properties' },
  { id: 'partner', label: 'I want to collaborate', sub: 'Joint ventures & referrals' },
];

const fields = [
  { id: 'name',     label: 'Full Name',                type: 'text',  required: true,  placeholder: 'Your name' },
  { id: 'email',    label: 'Email',                    type: 'email', required: true,  placeholder: 'your@email.com' },
  { id: 'phone',    label: 'Phone',                    type: 'tel',   required: false, placeholder: '+49 ...' },
  { id: 'property', label: 'Property / Location',      type: 'text',  required: false, placeholder: 'City or address (optional)' },
];

export default function LeadForm() {
  const ref       = useRef(null);
  const inView    = useInView(ref, { once: true, margin: '-80px' });
  const [intent, setIntent]     = useState('seller');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-gold/50" />
            <span className="font-sans text-gold/60 text-[0.65rem] tracking-[0.35em] uppercase">Get in Touch</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-medium mb-4">
            Start the Conversation
          </h2>
          <p className="font-sans text-white/35 text-base max-w-md mx-auto">
            We respond to every inquiry personally, within one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="glass rounded-2xl p-8 md:p-12"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-14 h-14 rounded-full border border-gold flex items-center justify-center mx-auto mb-6"
                >
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="font-serif text-white text-2xl mb-2">Message Received</h3>
                <p className="font-sans text-white/35 text-sm">We will be in touch within one business day.</p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="space-y-8"
              >
                {/* Intent */}
                <div>
                  <p className="font-sans text-white/30 text-xs tracking-widest uppercase mb-4">I am reaching out as a …</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {intents.map((it) => (
                      <button
                        key={it.id}
                        type="button"
                        onClick={() => setIntent(it.id)}
                        className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                          intent === it.id
                            ? 'border-gold/40 bg-gold/5'
                            : 'border-white/6 hover:border-white/15 bg-white/2'
                        }`}
                      >
                        <p className={`font-sans text-sm font-medium mb-1 transition-colors ${intent === it.id ? 'text-white' : 'text-white/55'}`}>
                          {it.label}
                        </p>
                        <p className="font-sans text-white/25 text-xs">{it.sub}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {fields.map((f) => (
                    <div key={f.id} className="flex flex-col gap-2">
                      <label htmlFor={f.id} className="font-sans text-white/30 text-xs tracking-widest uppercase">
                        {f.label}{f.required && <span className="text-gold ml-1">*</span>}
                      </label>
                      <input
                        id={f.id}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="bg-white/3 border border-white/8 rounded-lg px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-sans text-white/30 text-xs tracking-widest uppercase">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us briefly about your property or situation …"
                    className="bg-white/3 border border-white/8 rounded-lg px-4 py-3.5 font-sans text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(201,168,76,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-10 py-4 bg-gold text-bg rounded-full font-sans text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-gold-light transition-colors duration-300"
                >
                  Send Inquiry
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
