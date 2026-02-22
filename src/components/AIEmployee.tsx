"use client";

import { motion } from "framer-motion";
import { Mail, Zap, FileCheck, TrendingUp, ArrowRight } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const examples = [
  {
    icon: Mail,
    title: "De inbox die zichzelf opruimt",
    description:
      "Terwijl jij slaapt, leest je AI-medewerker elke binnenkomende mail. Hij herkent een lead, maakt direct een offerte aan in je boekhoudpakket en stuurt de klant een uitnodiging voor een afspraak. Zonder dat jij één toets hebt aangeraakt.",
    color: "text-brand-400",
    bg: "bg-brand-900/20",
  },
  {
    icon: Zap,
    title: "Klantenservice op topsnelheid",
    description:
      "Geen \"we komen er binnen 2 werkdagen op terug\". Je klant krijgt binnen 3 seconden een perfect antwoord, gebaseerd op jouw bedrijfsdata. Of het nu 14:00 uur is of 03:00 uur 's nachts.",
    color: "text-accent-400",
    bg: "bg-accent-900/20",
  },
  {
    icon: FileCheck,
    title: "Foutloze administratie",
    description:
      "Data overtypen van de ene app naar de andere? Dat is werk voor machines. Je AI-medewerker koppelt je CRM, je agenda en je facturatie naadloos aan elkaar. De kans op menselijke fouten? 0%.",
    color: "text-brand-300",
    bg: "bg-brand-900/15",
  },
  {
    icon: TrendingUp,
    title: "Schaalbaarheid zonder hoofdpijn",
    description:
      "Krijg je morgen 10x zoveel werk binnen? Een menselijke afdeling heeft dan 5 nieuwe mensen nodig. Je AI-medewerker schaalt in één seconde mee. Geen extra loonlijst, geen groter kantoor.",
    color: "text-accent-300",
    bg: "bg-accent-900/15",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function AIEmployee() {
  return (
    <SectionWrapper id="ai-medewerker" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent" />

      <div className="relative">
        {/* Intro block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-brand-400 mb-4">
            Wat een AI-medewerker écht doet
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-warm-50 leading-tight mb-6">
            Stop met denken aan AI als een chatbot.{" "}
            <span className="text-brand-400">Zie het als je beste medewerker.</span>
          </h2>
          <p className="text-warm-400 text-base sm:text-lg leading-relaxed font-light">
            De meeste ondernemers horen "AI" en denken aan een domme pop-up op een website. Fout.
            Een AI-medewerker zit diep in je systemen en werkt 24/7 — zonder pauze, zonder fouten,
            zonder salaris.
          </p>
        </motion.div>

        {/* Example cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14"
        >
          {examples.map((example, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group p-7 rounded-2xl warm-card hover:border-brand-700/30 transition-all duration-500 hover:-translate-y-0.5"
            >
              <div className={`w-11 h-11 rounded-xl ${example.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <example.icon className={`w-5 h-5 ${example.color}`} />
              </div>
              <h3 className="font-display text-lg font-700 text-warm-50 mb-3">
                {example.title}
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed font-light">
                {example.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Result block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center p-8 rounded-2xl warm-card border border-brand-800/20"
        >
          <h3 className="font-display text-xl sm:text-2xl font-700 text-warm-50 mb-3">
            Je koopt geen software. Je koopt{" "}
            <span className="text-brand-400">tijd terug.</span>
          </h3>
          <p className="text-warm-400 text-sm sm:text-base leading-relaxed font-light mb-6">
            Je overhead daalt, je snelheid schiet omhoog en je marges worden gezond. Een
            AI-medewerker haalt de ruis uit je bedrijf — zodat alleen het resultaat overblijft.
          </p>
          <a
            href="#contact"
            className="group/btn inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Bekijk wat dit voor jou betekent
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
