"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Zap, Crown } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const tiers = [
  {
    name: "Starter",
    price: "€499",
    period: "/maand",
    prefix: "Vanaf",
    description: "Voor ondernemers die willen starten met 1 concrete automatisering — snel live, geen gedoe.",
    icon: Zap,
    color: "text-brand-400",
    bg: "bg-brand-900/20",
    featured: false,
    features: [
      "1 volledig gebouwde automatisering",
      "Onboarding & implementatie inbegrepen",
      "E-mail/chat support (reactie binnen 24u)",
      "Maandelijks rapport & kleine aanpassingen",
      "Eenmalige setup: €250 – €500",
    ],
  },
  {
    name: "Professional",
    price: "€999",
    period: "/maand",
    prefix: "Vanaf",
    description: "Voor groeiende bedrijven die meerdere processen willen automatiseren en sneller willen schalen.",
    icon: Sparkles,
    color: "text-accent-400",
    bg: "bg-accent-900/20",
    featured: true,
    features: [
      "Tot 3 volledig gebouwde automatiseringen",
      "Onboarding & implementatie inbegrepen",
      "Prioriteit support (reactie binnen 4u)",
      "Wekelijks rapport + actieve optimalisatie",
      "2u aanpassingen per maand inbegrepen",
      "Eenmalige setup: €500 – €1.000",
    ],
  },
  {
    name: "Enterprise",
    price: "Op maat",
    period: "",
    prefix: "",
    description: "Voor grotere bedrijven met complexe workflows en meerdere afdelingen. Alles wat u nodig heeft.",
    icon: Crown,
    color: "text-accent-300",
    bg: "bg-accent-900/15",
    featured: false,
    features: [
      "Onbeperkt automatiseringen",
      "Dedicated contactpersoon",
      "Directe support (reactie binnen 1u)",
      "Dagelijkse monitoring & optimalisatie",
      "Maatwerk integraties & koppelingen",
      "Setup & kosten volledig op maat",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  return (
    <SectionWrapper id="prijzen" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent" />

      <div className="relative">
        <SectionHeader
          badge="Prijzen"
          title="Transparante prijsindicatie"
          description="Duidelijke prijzen, geen verrassingen. U weet vooraf exact wat u krijgt — en wat het kost."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative p-7 rounded-2xl warm-card transition-all duration-500 hover:-translate-y-0.5 ${
                tier.featured
                  ? "border-brand-700/30 shadow-lg shadow-brand-900/10 ring-1 ring-brand-800/20"
                  : ""
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-[10px] font-mono tracking-[0.15em] uppercase text-warm-50 bg-brand-600 rounded-full shadow-lg shadow-brand-600/20">
                    Populairst
                  </span>
                </div>
              )}

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${tier.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  <tier.icon className={`w-6 h-6 ${tier.color}`} />
                </div>

                {/* Name */}
                <h3 className="font-display text-xl font-700 text-warm-50 mb-2">{tier.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  {tier.prefix && (
                    <span className="text-sm text-warm-600 font-light">{tier.prefix} </span>
                  )}
                  <span className="font-display text-3xl sm:text-4xl font-800 text-warm-50">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-warm-600 text-sm font-light">{tier.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-warm-500 text-sm leading-relaxed mb-6 font-light">
                  {tier.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-7">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-warm-300 font-light">
                      <Check className={`w-4 h-4 ${tier.color} flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    tier.featured
                      ? "bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-600/20"
                      : "bg-dark-800/50 hover:bg-dark-700/50 text-warm-200 border border-warm-800/20 hover:border-brand-800/30"
                  }`}
                >
                  Gratis AI-Scan Starten
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-warm-600 mt-10 max-w-2xl mx-auto font-light"
        >
          Alle prijzen excl. BTW. Setup kosten zijn eenmalig en afhankelijk van
          de complexiteit van uw automatisering — u krijgt altijd een heldere
          offerte vooraf. Start altijd met een gratis AI-Scan.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
