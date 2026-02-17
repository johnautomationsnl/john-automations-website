"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Particles } from "./magicui/particles";
import { ShimmerButton } from "./magicui/shimmer-button";
import SplineScene from "./SplineScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Warm gradient background */}
      <div className="absolute inset-0 warm-gradient-bg" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0 w-full h-full hidden sm:block">
        <SplineScene />
      </div>
      <div className="absolute inset-0 block sm:hidden scale-75 origin-center">
        <SplineScene />
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/50 to-dark-950/80 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950/60 via-transparent to-dark-950/60 z-[1]" />

      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-[2]"
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

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Small descriptor */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-xs tracking-[0.2em] uppercase text-brand-400 mb-8"
          >
            AI-Specialist voor het Nederlandse MKB
          </motion.p>

          {/* Main heading — asymmetric weight */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="font-display text-balance"
          >
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-200 text-warm-200 leading-[1.05]">
              Uw bedrijf.
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-800 text-warm-50 leading-[1.05] mt-1">
              Slimmer <span className="text-brand-400">geautomatiseerd.</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-base sm:text-lg text-warm-400 max-w-xl mx-auto text-balance font-light leading-relaxed"
          >
            Op maat gemaakte AI-oplossingen en automatiseringen die uw MKB-bedrijf
            écht vooruit helpen. Meer tijd, minder gedoe.
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
              href="#diensten"
              className="inline-flex items-center gap-2 px-7 py-4 text-warm-300 hover:text-warm-50 border border-warm-800/40 hover:border-brand-700/40 rounded-xl transition-all duration-300 hover:bg-warm-900/20"
            >
              Bekijk Diensten
            </a>
          </motion.div>

          {/* Trust indicators — minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-mono tracking-wider uppercase text-warm-600"
          >
            <span>100% Op Maat</span>
            <span className="text-warm-800">·</span>
            <span>MKB-Specialist</span>
            <span className="text-warm-800">·</span>
            <span>Persoonlijke Aanpak</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  );
}
