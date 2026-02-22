"use client";

import { motion } from "framer-motion";
import { PlayCircle, ArrowRight } from "lucide-react";

export default function DemoCTA() {
  return (
    <section className="relative py-12 px-5">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-7 py-6 rounded-2xl warm-card border border-brand-800/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <PlayCircle className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <p className="text-warm-100 font-medium text-sm mb-1">
                Liever eerst zien hoe het werkt?
              </p>
              <p className="text-warm-500 text-sm font-light">
                Plan een gratis demo — we laten je live zien wat er mogelijk is voor jouw situatie.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/31653204361?text=Hallo%2C%20ik%20wil%20graag%20een%20demo%20aanvragen."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Demo Aanvragen
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
