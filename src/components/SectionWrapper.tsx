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
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
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
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 text-xs font-medium text-brand-400 bg-brand-500/10 border border-brand-500/20 rounded-full mb-4">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
        {title}
      </h2>
      <p className="mt-4 text-lg text-dark-400 max-w-2xl mx-auto text-balance">
        {description}
      </p>
    </motion.div>
  );
}
