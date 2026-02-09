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
    description: "Ideaal voor kleine ondernemers die willen starten met AI",
    icon: Zap,
    color: "text-brand-400",
    colorBg: "bg-brand-500/10",
    colorBorder: "border-brand-500/20",
    gradient: "from-brand-500/5 to-transparent",
    featured: false,
    features: [
      "1 AI-automatisering",
      "E-mail/chat support",
      "Maandelijks rapport",
    ],
  },
  {
    name: "Professional",
    price: "€999",
    period: "/maand",
    prefix: "Vanaf",
    description: "Ideaal voor groeiende bedrijven met meerdere processen",
    icon: Sparkles,
    color: "text-purple-400",
    colorBg: "bg-purple-500/10",
    colorBorder: "border-purple-500/30",
    gradient: "from-purple-500/10 to-brand-500/5",
    featured: true,
    features: [
      "Tot 3 AI-automatiseringen",
      "Prioriteit support",
      "Wekelijks rapport + optimalisatie",
    ],
  },
  {
    name: "Enterprise",
    price: "Op maat",
    period: "",
    prefix: "",
    description: "Ideaal voor grotere bedrijven met complexe workflows",
    icon: Crown,
    color: "text-amber-400",
    colorBg: "bg-amber-500/10",
    colorBorder: "border-amber-500/20",
    gradient: "from-amber-500/5 to-transparent",
    featured: false,
    features: [
      "Onbeperkt automatiseringen",
      "Dedicated support",
      "Dagelijks monitoring + optimalisatie",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Pricing() {
  return (
    <SectionWrapper id="prijzen" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/20 to-dark-950" />

      <div className="relative">
        <SectionHeader
          badge="Prijzen"
          title="Transparante prijsindicatie"
          description="Duidelijke prijzen, geen verrassingen. Start altijd met een gratis AI-Scan."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className={`group relative p-8 rounded-2xl bg-dark-900/50 border transition-all duration-500 hover:-translate-y-1 ${
                tier.featured
                  ? "border-brand-500/40 shadow-lg shadow-brand-500/10"
                  : "border-dark-800 hover:border-brand-500/30"
              }`}
            >
              {/* Featured badge */}
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 text-xs font-medium text-white bg-brand-600 rounded-full shadow-lg shadow-brand-500/25">
                    Populairst
                  </span>
                </div>
              )}

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${tier.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${tier.colorBg} border ${tier.colorBorder} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <tier.icon className={`w-7 h-7 ${tier.color}`} />
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  {tier.prefix && (
                    <span className="text-sm text-dark-500">{tier.prefix} </span>
                  )}
                  <span className="text-3xl sm:text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-dark-500 text-sm">{tier.period}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-dark-400 text-sm leading-relaxed mb-6">
                  {tier.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm text-dark-200">
                      <Check className={`w-4 h-4 ${tier.color} flex-shrink-0`} />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`group/btn w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
                    tier.featured
                      ? "bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-500/25"
                      : "bg-dark-800/50 hover:bg-dark-800 text-white border border-dark-700 hover:border-brand-500/30"
                  }`}
                >
                  Gratis AI-Scan Starten
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
          className="text-center text-sm text-dark-500 mt-10 max-w-2xl mx-auto"
        >
          Alle prijzen excl. BTW. Eenmalige setup kosten afhankelijk van
          complexiteit. Start altijd met een gratis AI-Scan.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
