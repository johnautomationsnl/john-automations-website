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
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Op maat gebouwde applicaties die perfect passen bij uw bedrijfsprocessen. Van webapplicaties tot interne tools, altijd gebouwd voor schaalbaarheid.",
    features: ["Klantportaal met realtime projectstatus", "Dashboard met live bedrijfsoverzicht", "Koppeling tussen uw boekhoudsoftware en CRM"],
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Workflow,
    title: "Proces Automatisering",
    description:
      "Automatiseer repetitieve bedrijfsprocessen en bespaar uren per week. Van facturatie tot lead-opvolging. Laat technologie het zware werk doen.",
    features: ["Offerte binnen 2 minuten verstuurd", "Leads automatisch opgevolgd na 24 uur", "Klantgegevens direct in uw systeem"],
    gradient: "from-purple-500/10 to-violet-500/10",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description:
      "Intelligente chatbots die 24/7 uw klanten helpen, leads kwalificeren en afspraken inplannen. Getraind op uw bedrijfsinformatie voor relevante antwoorden.",
    features: ["Klant krijgt om 3 uur 's nachts antwoord", "Bot plant bezichtiging zonder tussenkomst", "Afspraak staat direct in uw agenda"],
    gradient: "from-amber-500/10 to-orange-500/10",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
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
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative p-8 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-brand-500/30 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            <div className="relative">
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Title and description */}
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm text-dark-300">
                    <div className={`w-1.5 h-1.5 rounded-full ${service.iconColor.replace("text-", "bg-")}`} />
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`inline-flex items-center gap-1.5 text-sm font-medium ${service.iconColor} hover:gap-3 transition-all`}
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
