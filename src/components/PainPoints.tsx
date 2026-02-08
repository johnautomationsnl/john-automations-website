"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, AlertTriangle, Users, FileX, Repeat } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const painPoints = [
  {
    icon: Clock,
    title: "Tijdverspilling",
    description:
      "Uren per dag kwijt aan handmatige, repetitieve taken die eenvoudig geautomatiseerd kunnen worden.",
  },
  {
    icon: TrendingDown,
    title: "Omzetverlies",
    description:
      "Leads en klanten die door de mazen van het net glippen door trage opvolging en handmatige processen.",
  },
  {
    icon: AlertTriangle,
    title: "Menselijke Fouten",
    description:
      "Kostbare fouten in administratie, data-invoer en communicatie die uw reputatie schaden.",
  },
  {
    icon: Users,
    title: "Personeelstekort",
    description:
      "Moeite met het vinden van personeel terwijl het werk zich opstapelt en de druk toeneemt.",
  },
  {
    icon: FileX,
    title: "Verouderde Systemen",
    description:
      "Software die niet met elkaar praat, losse spreadsheets en geen overzicht over uw bedrijfsprocessen.",
  },
  {
    icon: Repeat,
    title: "Concurrentie Loopt Voor",
    description:
      "Terwijl concurrenten AI omarmen, blijft u achter met traditionele werkwijzen en verliest u marktaandeel.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function PainPoints() {
  return (
    <SectionWrapper id="pijnpunten">
      <SectionHeader
        badge="Het Probleem"
        title="Herkent u deze uitdagingen?"
        description="De meeste MKB-bedrijven lopen dagelijks tegen dezelfde problemen aan. Het goede nieuws: ze zijn allemaal op te lossen."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                <point.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-dark-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
