"use client";

import { motion } from "framer-motion";
import {
  Home,
  HardHat,
  Calculator,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const caseStudies = [
  {
    icon: Home,
    label: "Voorbeeldscenario",
    title: "Makelaarskantoor",
    color: "text-brand-400",
    bg: "bg-brand-900/20",
    problem:
      "20 uur per week kwijt aan woningbeschrijvingen, social media en lead-opvolging. Medewerkers besteden meer tijd aan administratie dan aan klantcontact.",
    solution:
      "AI-systeem voor automatische woningbeschrijvingen, social media posts per nieuw object en intelligente lead nurturing.",
    results: [
      "15 uur/week bespaard",
      "3x meer leads opgevolgd",
      "40% snellere verkoop",
    ],
  },
  {
    icon: HardHat,
    label: "Voorbeeldscenario",
    title: "Aannemersbedrijf",
    color: "text-accent-400",
    bg: "bg-accent-900/20",
    problem:
      "Chaotische projectplanning, gemiste deadlines en klanten die continu bellen voor updates over de voortgang.",
    solution:
      "AI projectplanning met automatische materiaalbestellingen en realtime klant-updates via een portaal.",
    results: [
      "10 uur/week bespaard",
      "0 gemiste deadlines",
      "Tevreden klanten",
    ],
  },
  {
    icon: Calculator,
    label: "Voorbeeldscenario",
    title: "Accountantskantoor",
    color: "text-brand-300",
    bg: "bg-brand-900/15",
    problem:
      "30 uur per week aan data-invoer, factuurverwerking en klantcommunicatie. Fouten kosten tijd en geld.",
    solution:
      "AI-administratie assistent met automatische factuurverwerking en slimme inbox management.",
    results: [
      "20 uur/week bespaard",
      "99% minder fouten",
      "Sneller antwoord voor klanten",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <SectionWrapper id="casestudies">
      <SectionHeader
        badge="Scenario's"
        title="Zo werkt het in de praktijk"
        description="Realistische voorbeelden van hoe AI uw bedrijf kan transformeren. Van probleem naar concrete resultaten."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
      >
        {caseStudies.map((cs, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative rounded-2xl warm-card hover:-translate-y-0.5 transition-all duration-500 overflow-hidden"
          >
            <div className="relative p-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-11 h-11 rounded-xl ${cs.bg} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                >
                  <cs.icon className={`w-5 h-5 ${cs.color}`} />
                </div>
                <div>
                  <span className="text-[10px] font-mono tracking-[0.15em] uppercase text-warm-600">
                    {cs.label}
                  </span>
                  <h3 className="font-display text-lg font-700 text-warm-50">{cs.title}</h3>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-3.5 h-3.5 text-accent-500" />
                  <span className="text-xs font-mono tracking-wider uppercase text-accent-500">
                    Probleem
                  </span>
                </div>
                <p className="text-warm-500 text-sm leading-relaxed font-light">
                  {cs.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-3.5 h-3.5 text-accent-400" />
                  <span className="text-xs font-mono tracking-wider uppercase text-accent-400">
                    Oplossing
                  </span>
                </div>
                <p className="text-warm-500 text-sm leading-relaxed font-light">
                  {cs.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-400" />
                  <span className="text-xs font-mono tracking-wider uppercase text-brand-400">
                    Resultaat
                  </span>
                </div>
                <div className="space-y-2">
                  {cs.results.map((result, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2.5 text-sm text-warm-300 font-light"
                    >
                      <div className="w-1 h-1 rounded-full bg-brand-400" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${cs.color} hover:gap-2.5 transition-all`}
              >
                Dit wil ik ook
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-xs text-warm-700 mt-8 font-light"
      >
        * Dit zijn voorbeeldscenario&apos;s op basis van realistische situaties.
        Resultaten kunnen variëren per bedrijf.
      </motion.p>
    </SectionWrapper>
  );
}
