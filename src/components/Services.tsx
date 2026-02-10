"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Workflow, MessageSquareText, ArrowRight } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const services = [
  {
    icon: Brain,
    title: "AI Integratie",
    description:
      "Integreer krachtige AI-modellen in uw bestaande workflows. Van slimme data-analyse tot geautomatiseerde besluitvorming. Wij verbinden AI naadloos met uw systemen.",
    features: ["Makelaar genereert woningbeschrijving in 30 sec", "Aannemer krijgt automatische materiaallijsten", "Accountant verwerkt 50 facturen per uur"],
    color: "text-brand-400",
    bg: "bg-brand-900/20",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Op maat gebouwde applicaties die perfect passen bij uw bedrijfsprocessen. Van webapplicaties tot interne tools, altijd gebouwd voor schaalbaarheid.",
    features: ["Klantportaal met realtime projectstatus", "Dashboard met live bedrijfsoverzicht", "Koppeling tussen uw boekhoudsoftware en CRM"],
    color: "text-accent-400",
    bg: "bg-accent-900/20",
  },
  {
    icon: Workflow,
    title: "Proces Automatisering",
    description:
      "Automatiseer repetitieve bedrijfsprocessen en bespaar uren per week. Van facturatie tot lead-opvolging. Laat technologie het zware werk doen.",
    features: ["Offerte binnen 2 minuten verstuurd", "Leads automatisch opgevolgd na 24 uur", "Klantgegevens direct in uw systeem"],
    color: "text-brand-300",
    bg: "bg-brand-900/15",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description:
      "Intelligente chatbots die 24/7 uw klanten helpen, leads kwalificeren en afspraken inplannen. Getraind op uw bedrijfsinformatie voor relevante antwoorden.",
    features: ["Klant krijgt om 3 uur 's nachts antwoord", "Bot plant bezichtiging zonder tussenkomst", "Afspraak staat direct in uw agenda"],
    color: "text-accent-300",
    bg: "bg-accent-900/15",
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

export default function Services() {
  return (
    <SectionWrapper id="diensten">
      <SectionHeader
        badge="Diensten"
        title="Wat wij voor u bouwen"
        description="Van strategie tot implementatie. Complete AI-oplossingen op maat voor uw MKB-bedrijf."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative p-7 rounded-2xl warm-card hover:-translate-y-0.5 transition-all duration-500"
          >
            <div className="relative">
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
              >
                <service.icon className={`w-6 h-6 ${service.color}`} />
              </div>

              {/* Title and description */}
              <h3 className="font-display text-xl font-700 text-warm-50 mb-3">{service.title}</h3>
              <p className="text-warm-500 text-sm leading-relaxed mb-5 font-light">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-sm text-warm-400 font-light">
                    <div className={`w-1 h-1 rounded-full ${service.color.replace("text-", "bg-")}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.color} hover:gap-2.5 transition-all`}
              >
                AI-Scan starten
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
