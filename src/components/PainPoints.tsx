"use client";

import { motion } from "framer-motion";
import { Clock, TrendingDown, AlertTriangle, Users, FileX, Repeat } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const painPoints = [
  {
    icon: Clock,
    title: "Tijdverspilling",
    description:
      "Je bent uren per dag bezig met dingen die een computer in seconden kan. Dat voelt niet goed, en dat is het ook niet.",
  },
  {
    icon: TrendingDown,
    title: "Omzetverlies",
    description:
      "Potentiële klanten haken af omdat je te laat reageert of iets vergeet op te volgen. Dat kost je gewoon geld.",
  },
  {
    icon: AlertTriangle,
    title: "Menselijke Fouten",
    description:
      "Je typt iets over, vergeet een mail, of stuurt een verkeerd bedrag. Kleine foutjes die grote gevolgen kunnen hebben.",
  },
  {
    icon: Users,
    title: "Te Weinig Personeel",
    description:
      "Je kunt niemand vinden, maar het werk blijft binnenstromen. Je kunt dit niet oplossen door harder te werken.",
  },
  {
    icon: FileX,
    title: "Losse Systemen",
    description:
      "Eén programma hier, een spreadsheet daar, en niks praat met elkaar. Je verliest er je hoofd bij.",
  },
  {
    icon: Repeat,
    title: "Concurrentie Loopt Voor",
    description:
      "Andere bedrijven in jouw branche automatiseren al. Als jij wacht, wordt het gat alleen maar groter.",
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
        title="Herken je dit?"
        description="De meeste ondernemers lopen elke dag tegen precies dezelfde dingen aan. Het goede nieuws: dit is allemaal op te lossen."
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
