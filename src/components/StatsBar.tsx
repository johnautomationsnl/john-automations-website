"use client";

import { NumberTicker } from "./magicui/number-ticker";
import { motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "uur bespaard per klant" },
  { value: 24, suffix: "/7", label: "bereikbaar" },
  { value: 100, suffix: "%", label: "op maat" },
  { value: 48, prefix: "<", suffix: "u", label: "eerste resultaat" },
];

export default function StatsBar() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 warm-gradient-bg opacity-30" />
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-warm-50">
                {stat.prefix && <span>{stat.prefix}</span>}
                <NumberTicker value={stat.value} delay={0.2 * i} className="text-brand-400" />
                <span className="text-brand-400">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-sm text-warm-500 font-light">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
