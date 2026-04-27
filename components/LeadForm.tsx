'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const intents = [
  { id: 'seller', label: 'I want to sell a property', icon: '🏠' },
  { id: 'buyer', label: 'I am looking to buy', icon: '🔑' },
  { id: 'partner', label: 'I want to collaborate', icon: '🤝' },
];

export default function LeadForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selected, setSelected] = useState('seller');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-28 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="font-sans text-gold text-[0.65rem] tracking-[0.3em] uppercase">Get in Touch</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="font-serif text-dark-700 text-4xl md:text-5xl font-medium mb-4">
            Start the Conversation
          </h2>
          <p className="font-sans text-dark-500 text-base max-w-lg mx-auto">
            Whether you&apos;re selling, buying, or looking to partner — we respond to every inquiry within one business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="bg-cream border border-cream-200 p-10 md:p-14"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10"
            >
              <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-6">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-dark-700 text-2xl mb-3">Thank you for reaching out</h3>
              <p className="font-sans text-dark-500 text-sm">We will be in touch within one business day.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Intent selector */}
              <div>
                <label className="font-sans text-dark-500/60 text-xs tracking-widest uppercase block mb-4">
                  I am interested as a …
                </label>
                <div className="grid sm:grid-cols-3 gap-3">
                  {intents.map((intent) => (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setSelected(intent.id)}
                      className={`text-left p-4 border transition-all duration-200 ${
                        selected === intent.id
                          ? 'border-gold bg-white'
                          : 'border-cream-200 bg-white/50 hover:border-gold/30'
                      }`}
                    >
                      <span className="block text-lg mb-2">{intent.icon}</span>
                      <span className={`font-sans text-sm ${selected === intent.id ? 'text-dark-700' : 'text-dark-500'}`}>
                        {intent.label}
                      </span>
                      {selected === intent.id && (
                        <div className="h-px bg-gold mt-3" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Your name' },
                  { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'your@email.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: '+49 ...' },
                  { id: 'property', label: 'Property Location (optional)', type: 'text', required: false, placeholder: 'City or address' },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2">
                    <label htmlFor={field.id} className="font-sans text-dark-500/60 text-xs tracking-widest uppercase">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                      className="bg-white border border-cream-200 px-4 py-3.5 font-sans text-sm text-dark-700 placeholder:text-dark-500/30 focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-sans text-dark-500/60 text-xs tracking-widest uppercase">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us briefly about your situation or property …"
                  className="bg-white border border-cream-200 px-4 py-3.5 font-sans text-sm text-dark-700 placeholder:text-dark-500/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.015, boxShadow: '0 0 28px rgba(201,168,76,0.22)' }}
                whileTap={{ scale: 0.985 }}
                className="w-full sm:w-auto px-10 py-4 bg-dark-900 text-white font-sans text-xs tracking-widest uppercase hover:bg-gold hover:text-dark-900 transition-all duration-300"
              >
                Send Inquiry
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
