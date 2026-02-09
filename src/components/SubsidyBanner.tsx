"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeEuro, Sparkles } from "lucide-react";

export default function SubsidyBanner() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-brand-500/20 to-purple-500/20" />
          <div className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm" />

          {/* Animated glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-2xl border border-amber-500/20" />

          <div className="relative p-8 sm:p-10 md:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-500/30 flex items-center justify-center">
                  <BadgeEuro className="w-10 h-10 text-amber-400" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                    <Sparkles className="w-3 h-3" />
                    Subsidie Mogelijkheid
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Tot <span className="text-amber-400">45% subsidie</span> op AI-implementatie
                  </h3>
                  <p className="text-dark-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                    Er komen nieuwe subsidies aan voor digitale transformatie, AI en cybersecurity.
                    Wij helpen u met de aanvraag.
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex-shrink-0"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-dark-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:-translate-y-0.5"
                >
                  Gratis AI-Scan
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
