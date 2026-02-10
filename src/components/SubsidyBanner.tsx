"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeEuro } from "lucide-react";

export default function SubsidyBanner() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Warm gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent-900/30 via-brand-900/20 to-accent-900/30" />
          <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm" />

          {/* Subtle glows */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent-500/[0.06] rounded-full blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-brand-500/[0.06] rounded-full blur-[80px]" />

          <div className="absolute inset-0 rounded-2xl border border-accent-700/15" />

          <div className="relative p-7 sm:p-10">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-800/20 border border-accent-700/20 flex items-center justify-center">
                  <BadgeEuro className="w-8 h-8 text-accent-400" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-3">
                  Subsidie Mogelijkheid
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-700 text-warm-50 mb-2">
                  Tot <span className="text-accent-400">45% subsidie</span> op AI-implementatie
                </h3>
                <p className="text-warm-400 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
                  Er komen nieuwe subsidies aan voor digitale transformatie, AI en cybersecurity.
                  Wij helpen u met de aanvraag.
                </p>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex-shrink-0"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent-600 hover:bg-accent-500 text-dark-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-600/20 hover:-translate-y-0.5"
                >
                  Gratis AI-Scan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
