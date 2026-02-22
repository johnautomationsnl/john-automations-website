"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const benefits = [
  "Tot 80% minder tijd kwijt aan herhalende taken",
  "24/7 bereikbaar voor je klanten, ook 's nachts en in het weekend",
  "Geen typefouten, geen vergeten mails, geen gemiste leads",
  "Nieuwe klanten worden automatisch opgevolgd — zonder dat jij er aan te pas komt",
  "Werkt gewoon samen met de tools die je al gebruikt",
  "Groeit mee met je bedrijf, zonder extra personeel",
];

const stats = [
  { icon: Zap, value: "80%", label: "Tijdsbesparing", color: "text-brand-400", bg: "bg-brand-900/20" },
  { icon: TrendingUp, value: "3x", label: "Meer Leads", color: "text-accent-400", bg: "bg-accent-900/20" },
  { icon: Shield, value: "99%", label: "Minder Fouten", color: "text-brand-300", bg: "bg-brand-900/15" },
];

export default function Solution() {
  return (
    <SectionWrapper id="oplossing" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent" />

      <div className="relative">
        <SectionHeader
          badge="De Oplossing"
          title="AI die écht werkt voor jouw bedrijf"
          description="Geen kant-en-klare pakketten, maar iets dat we samen bouwen specifiek voor hoe jij werkt. Zodat het ook écht werkt."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-warm-900/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-warm-300 font-light">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative p-6 rounded-2xl warm-card text-center group hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className={`font-display text-3xl font-800 ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-xs text-warm-500 font-mono uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
