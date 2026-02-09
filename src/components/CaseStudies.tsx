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
    color: "text-blue-400",
    colorBg: "bg-blue-500/10",
    colorBorder: "border-blue-500/20",
    gradient: "from-blue-500/10 to-indigo-500/10",
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
    color: "text-orange-400",
    colorBg: "bg-orange-500/10",
    colorBorder: "border-orange-500/20",
    gradient: "from-orange-500/10 to-amber-500/10",
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
    color: "text-emerald-400",
    colorBg: "bg-emerald-500/10",
    colorBorder: "border-emerald-500/20",
    gradient: "from-emerald-500/10 to-teal-500/10",
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
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
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
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {caseStudies.map((cs, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${cs.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative p-7">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${cs.colorBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <cs.icon className={`w-6 h-6 ${cs.color}`} />
                </div>
                <div>
                  <span className="text-xs text-dark-500 font-medium uppercase tracking-wider">
                    {cs.label}
                  </span>
                  <h3 className="text-lg font-bold text-white">{cs.title}</h3>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-semibold text-red-400">
                    Probleem
                  </span>
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {cs.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-semibold text-amber-400">
                    Oplossing
                  </span>
                </div>
                <p className="text-dark-400 text-sm leading-relaxed">
                  {cs.solution}
                </p>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400">
                    Resultaat
                  </span>
                </div>
                <div className="space-y-2">
                  {cs.results.map((result, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-2 text-sm text-dark-200"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {result}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-medium ${cs.color} hover:gap-3 transition-all`}
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
        className="text-center text-xs text-dark-500 mt-8"
      >
        * Dit zijn voorbeeldscenario&apos;s op basis van realistische situaties.
        Resultaten kunnen variëren per bedrijf.
      </motion.p>
    </SectionWrapper>
  );
}
