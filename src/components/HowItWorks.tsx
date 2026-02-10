"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Gratis AI-Scan",
    description:
      "We beginnen met een vrijblijvend gesprek van 30 minuten. We analyseren uw huidige processen en identificeren waar AI en automatisering de meeste impact hebben. U ontvangt een concreet rapport met aanbevelingen.",
    highlight: "30 min gesprek + rapport",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategie & Ontwerp",
    description:
      "Op basis van de AI-Scan ontwerpen we een oplossing op maat. We maken een helder plan met tijdlijn, kosten en verwachte resultaten. Geen verrassingen, volledige transparantie.",
    highlight: "Helder plan & vaste prijs",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Bouwen & Lanceren",
    description:
      "We bouwen uw oplossing, testen uitvoerig en lanceren samen. Na de lancering blijven we beschikbaar voor support en optimalisatie. Uw succes is ons succes.",
    highlight: "Support & optimalisatie",
  },
];

export default function HowItWorks() {
  return (
    <SectionWrapper id="werkwijze" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent" />

      <div className="relative">
        <SectionHeader
          badge="Werkwijze"
          title="Hoe werken wij?"
          description="In drie heldere stappen van probleem naar oplossing. Simpel, transparant en effectief."
        />

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-800/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
              >
                <div className="group relative p-7 rounded-2xl warm-card hover:-translate-y-0.5 transition-all duration-500 text-center">
                  <div className="relative">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-900/20 border border-brand-800/20 mb-5 group-hover:scale-105 transition-transform duration-300">
                      <span className="font-mono text-xl font-medium text-brand-400">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <step.icon className="w-5 h-5 text-brand-400/60" />
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-700 text-warm-50 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-warm-500 text-sm leading-relaxed mb-4 font-light">
                      {step.description}
                    </p>

                    {/* Highlight badge */}
                    <span className="inline-block px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-brand-400 bg-brand-900/20 rounded-full">
                      {step.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
