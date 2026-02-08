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
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/20 to-dark-950" />

      <div className="relative">
        <SectionHeader
          badge="Werkwijze"
          title="Hoe werken wij?"
          description="In drie heldere stappen van probleem naar oplossing. Simpel, transparant en effectief."
        />

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative"
              >
                <div className="group relative p-8 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1 text-center">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    {/* Step number */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 mb-6 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                      <span className="text-2xl font-bold gradient-text">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <step.icon className="w-6 h-6 text-brand-400" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-dark-400 text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Highlight badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-brand-300 bg-brand-500/10 rounded-full">
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
