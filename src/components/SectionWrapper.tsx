"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-14 sm:py-20 lg:py-28 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="text-center mb-10 sm:mb-14"
    >
      <span className="inline-block px-3 py-1 text-[11px] font-mono font-medium tracking-widest uppercase text-brand-400 bg-brand-900/30 border border-brand-800/30 rounded-full mb-5">
        {badge}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-warm-50 text-balance leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-warm-400 max-w-2xl mx-auto text-balance font-light leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
