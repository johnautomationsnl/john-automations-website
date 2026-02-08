"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, TrendingUp, Shield } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const benefits = [
  "Tot 80% tijdsbesparing op repetitieve taken",
  "24/7 beschikbare klantenservice via AI-chatbots",
  "Foutloze data-verwerking en administratie",
  "Directe lead-opvolging zonder personeel",
  "Naadloze integratie met uw bestaande systemen",
  "Schaalbaar meegroeien zonder extra personeel",
];

const stats = [
  { icon: Zap, value: "80%", label: "Tijdsbesparing", color: "text-brand-400" },
  { icon: TrendingUp, value: "3x", label: "Meer Leads", color: "text-emerald-400" },
  { icon: Shield, value: "99%", label: "Minder Fouten", color: "text-purple-400" },
];

export default function Solution() {
  return (
    <SectionWrapper id="oplossing" className="relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-brand-950/20 to-dark-950" />

      <div className="relative">
        <SectionHeader
          badge="De Oplossing"
          title="AI die écht werkt voor uw bedrijf"
          description="Geen standaard oplossingen, maar op maat gemaakte automatiseringen die perfect aansluiten bij uw werkprocessen."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.02] transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-400 mt-0.5 shrink-0" />
                <span className="text-dark-200">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative p-6 rounded-2xl bg-dark-900/50 border border-dark-800 text-center group hover:border-brand-500/20 transition-all"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-dark-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
