"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const testimonials = [
  {
    quote:
      "Dankzij John Automations besparen we nu 15 uur per week op administratie. De AI-chatbot handelt 70% van onze klantvragen automatisch af. Een absolute gamechanger voor ons makelaarskantoor.",
    author: "Klant Placeholder",
    role: "Directeur, Makelaarskantoor",
    initials: "KP",
  },
  {
    quote:
      "De procesautomatisering heeft onze offerteflow compleet getransformeerd. Waar we eerst dagen nodig hadden, versturen we nu binnen een uur een professionele offerte. De ROI was binnen 2 maanden bereikt.",
    author: "Klant Placeholder",
    role: "Eigenaar, Bouwbedrijf",
    initials: "KP",
  },
  {
    quote:
      "John denkt écht mee met je bedrijf. Geen standaard oplossing, maar een systeem dat perfect past bij hoe wij werken. De samenwerking voelt als een partnership, niet als een leverancier.",
    author: "Klant Placeholder",
    role: "Manager, Retail MKB",
    initials: "KP",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <SectionWrapper id="referenties">
      <SectionHeader
        badge="Referenties"
        title="Wat klanten zeggen"
        description="Ontdek hoe andere MKB-bedrijven hun processen hebben getransformeerd met onze AI-oplossingen."
      />

      <div className="max-w-3xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-2xl bg-dark-900/50 border border-dark-800">
          {/* Quote icon */}
          <Quote className="absolute top-6 left-6 w-10 h-10 text-brand-500/20" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative text-center"
            >
              <blockquote className="text-lg sm:text-xl text-dark-200 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-brand-400">
                    {testimonials[current].initials}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">
                    {testimonials[current].author}
                  </div>
                  <div className="text-sm text-dark-400">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-lg border border-dark-700 hover:border-brand-500/30 hover:bg-brand-500/5 text-dark-400 hover:text-white transition-all"
              aria-label="Vorige"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current
                      ? "bg-brand-400 w-6"
                      : "bg-dark-600 hover:bg-dark-500"
                  }`}
                  aria-label={`Ga naar referentie ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-lg border border-dark-700 hover:border-brand-500/30 hover:bg-brand-500/5 text-dark-400 hover:text-white transition-all"
              aria-label="Volgende"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Placeholder notice */}
        <p className="text-center text-xs text-dark-600 mt-4">
          * Placeholder testimonials — worden vervangen door echte klantervaringen.
        </p>
      </div>
    </SectionWrapper>
  );
}
