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
    transition: { staggerChildren: 0.08 },
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {painPoints.map((point, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group relative p-6 rounded-2xl warm-card hover:border-accent-700/30 transition-all duration-500 hover:-translate-y-0.5"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-accent-800/20 flex items-center justify-center mb-4 group-hover:bg-accent-700/20 transition-colors">
                <point.icon className="w-5 h-5 text-accent-400" />
              </div>
              <h3 className="font-display text-lg font-700 text-warm-100 mb-2">
                {point.title}
              </h3>
              <p className="text-warm-500 text-sm leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
