"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Clock, TrendingUp } from "lucide-react";
import { Particles } from "./magicui/particles";
import { ShimmerButton } from "./magicui/shimmer-button";

const pills = [
  { icon: Bot, label: "AI-medewerker voor jouw bedrijf" },
  { icon: Clock, label: "24/7 actief, ook in het weekend" },
  { icon: TrendingUp, label: "Resultaat binnen 2 weken" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Warm gradient background */}
      <div className="absolute inset-0 warm-gradient-bg" />

      {/* Particles background */}
      <Particles
        className="absolute inset-0"
        quantity={80}
        color="#2d8a6e"
        size={0.6}
        staticity={40}
        ease={60}
      />

      {/* Subtle organic shapes */}
      <div className="absolute top-1/3 left-1/5 w-[500px] h-[500px] bg-brand-600/[0.04] rounded-full blur-[150px] animate-float" />
      <div className="absolute bottom-1/4 right-1/5 w-[600px] h-[600px] bg-accent-600/[0.03] rounded-full blur-[150px] animate-float" style={{ animationDelay: "-4s" }} />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(245,240,232,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16">
        <div className="text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-brand-400 mb-8"
          >
            AI-automatisering voor het Nederlandse MKB
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display text-balance"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-200 text-warm-200 leading-[1.05]">
              Wij bouwen een
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-warm-50 leading-[1.05] mt-1">
              AI-medewerker <span className="text-brand-400">voor jouw bedrijf.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-base sm:text-lg text-warm-400 max-w-2xl mx-auto text-balance font-light leading-relaxed"
          >
            Een digitale medewerker die jouw klantcontact afhandelt, leads opvolgt en de
            administratie bijhoudt. Automatisch, dag en nacht. Jij hoeft er niks van te
            begrijpen. Wij bouwen het, jij plukt de vruchten.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contact">
              <ShimmerButton
                shimmerColor="#4ade80"
                background="rgba(26, 107, 82, 0.9)"
                borderRadius="12px"
                shimmerSize="0.05em"
                className="px-7 py-4 text-base font-medium shadow-xl shadow-brand-600/20"
              >
                <span className="flex items-center gap-2.5">
                  Gratis AI-Scan Aanvragen
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </ShimmerButton>
            </a>
            <a
              href="#ai-medewerker"
              className="inline-flex items-center gap-2 px-7 py-4 text-warm-300 hover:text-warm-50 border border-warm-800/40 hover:border-brand-700/40 rounded-xl transition-all duration-300 hover:bg-warm-900/20"
            >
              Hoe werkt het?
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-3"
          >
            {pills.map((pill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-warm-900/30 border border-warm-800/20 text-xs text-warm-400 font-light"
              >
                <pill.icon className="w-3.5 h-3.5 text-brand-400" />
                {pill.label}
              </div>
            ))}
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono tracking-wider uppercase text-warm-700"
          >
            <span>Actief in Zuid-Limburg</span>
            <span className="text-warm-800">·</span>
            <span>Gratis scan, geen verplichtingen</span>
            <span className="text-warm-800">·</span>
            <span>100% op maat</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
