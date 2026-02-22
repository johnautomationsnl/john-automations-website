"use client";

import { motion } from "framer-motion";
import { Ear, Wrench, FileText, ArrowRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    icon: Ear,
    number: "01",
    title: "Eerst luisteren",
    description:
      "We beginnen altijd met een gratis gesprek. Jij vertelt hoe je bedrijf werkt, waar je tegenaan loopt en wat je wil verbeteren. Geen verkoopverhaal, gewoon een eerlijk gesprek.",
    color: "text-brand-400",
    bg: "bg-brand-900/20",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Bouwen wat jij nodig hebt",
    description:
      "Op basis van dat gesprek bepalen we wat er gebouwd wordt. Geen standaardpakket dat 80% van je behoeften dekt. Maar iets dat precies past bij hoe jij werkt.",
    color: "text-accent-400",
    bg: "bg-accent-900/20",
  },
  {
    icon: FileText,
    number: "03",
    title: "Dan pas een eerlijke prijs",
    description:
      "Pas als we weten wat jij nodig hebt, geven we een prijs. Zo betaal je nooit te veel voor dingen die je niet gebruikt, en weet je vooraf exact waar je aan toe bent.",
    color: "text-brand-300",
    bg: "bg-brand-900/15",
  },
];

export default function WhyCustom() {
  return (
    <SectionWrapper id="waarom-custom" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/8 to-transparent" />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="inline-block font-mono text-[11px] tracking-[0.2em] uppercase text-accent-400 mb-4">
            Waarom geen vaste prijzen?
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-800 text-warm-50 leading-tight mb-5">
            Elk bedrijf is anders.{" "}
            <span className="text-accent-400">Jouw oplossing ook.</span>
          </h2>
          <p className="text-warm-400 text-base sm:text-lg leading-relaxed font-light">
            Je ziet geen prijzen op deze website, en dat is bewust. Een AI-systeem voor een
            makelaar ziet er compleet anders uit dan eentje voor een loodgietersbedrijf. Vaste
            pakketten passen zelden echt. Wij doen het anders.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="group relative p-7 rounded-2xl warm-card hover:border-accent-700/30 transition-all duration-500 hover:-translate-y-0.5"
            >
              {/* Step number */}
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-warm-700 mb-4 block">
                Stap {step.number}
              </span>

              {/* Icon */}
              <div className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <step.icon className={`w-5 h-5 ${step.color}`} />
              </div>

              <h3 className="font-display text-lg font-700 text-warm-50 mb-3">
                {step.title}
              </h3>
              <p className="text-warm-400 text-sm leading-relaxed font-light">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 px-7 py-6 rounded-2xl warm-card border border-accent-800/20">
            <div>
              <p className="text-warm-100 font-medium mb-1">
                Benieuwd wat het voor jou kost?
              </p>
              <p className="text-warm-500 text-sm font-light">
                Plan een gratis AI-Scan van 30 minuten. Daarna weet je precies wat er mogelijk is en wat het kost.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 group/btn inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm bg-accent-600 hover:bg-accent-500 text-dark-950 hover:shadow-lg hover:shadow-accent-600/20 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Gratis AI-Scan
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
