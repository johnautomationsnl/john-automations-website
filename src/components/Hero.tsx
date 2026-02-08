"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 radial-overlay" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-700/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] animate-pulse-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-dark-300">
              AI-Specialist voor het Nederlandse MKB
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            <span className="text-white">Uw bedrijf.</span>
            <br />
            <span className="gradient-text">Slimmer geautomatiseerd.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-lg sm:text-xl text-dark-400 max-w-2xl mx-auto text-balance"
          >
            Wij bouwen op maat gemaakte AI-oplossingen en automatiseringen
            die uw MKB-bedrijf tijd besparen, kosten verlagen en sneller
            laten groeien.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/25 hover:-translate-y-0.5"
            >
              Gratis AI-Scan Aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-xl bg-brand-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </a>
            <a
              href="#diensten"
              className="inline-flex items-center gap-2 px-8 py-4 text-dark-300 hover:text-white border border-dark-700 hover:border-dark-500 rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              Bekijk Diensten
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-dark-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>100% Op Maat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>MKB-Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full" />
              <span>Persoonlijke Aanpak</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
