"use client";

import { motion } from "framer-motion";
import { Brain, Code2, Workflow, MessageSquareText } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";
import { BentoGrid, BentoCard } from "./magicui/bento-grid";

const services = [
  {
    icon: Brain,
    title: "AI Integratie",
    description:
      "We koppelen slimme AI direct aan hoe jij al werkt. Denk aan automatische analyses, slimme beslissingen, of content die zichzelf genereert.",
    features: ["Woningbeschrijving in 30 sec", "Automatische materiaallijsten", "50 facturen per uur verwerkt"],
    color: "text-brand-400",
    bg: "bg-brand-900/20",
    gridClass: "md:col-span-2 md:row-span-1",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Heb je iets nodig dat nergens te koop is? Dan bouwen we het gewoon. Precies zoals jij het wil.",
    features: ["Klantportaal met realtime status", "Live bedrijfsoverzicht", "Boekhouding-CRM koppeling"],
    color: "text-accent-400",
    bg: "bg-accent-900/20",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Workflow,
    title: "Proces Automatisering",
    description:
      "Alles wat je nu nog handmatig doet, kan waarschijnlijk automatisch. We besparen je uren per week.",
    features: ["Offerte in 2 minuten", "Leads auto-opgevolgd", "Klantgegevens direct in systeem"],
    color: "text-brand-300",
    bg: "bg-brand-900/15",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbots",
    description:
      "Een slimme assistent die jouw klanten helpt, vragen beantwoordt en afspraken inplant — ook als jij slaapt.",
    features: ["Antwoord om 3 uur 's nachts", "Bot plant bezichtiging", "Afspraak direct in agenda"],
    color: "text-accent-300",
    bg: "bg-accent-900/15",
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="diensten">
      <SectionHeader
        badge="Diensten"
        title="Wat wij voor jou bouwen"
        description="Van gesprek tot live systeem. Alles op maat, specifiek voor jouw bedrijf."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <BentoGrid className="auto-rows-[20rem]">
          {services.map((service, i) => (
            <BentoCard
              key={i}
              name={service.title}
              description={service.description}
              Icon={service.icon}
              iconClassName={service.color}
              href="#contact"
              cta="AI-Scan starten"
              className={service.gridClass}
            >
              <div className="space-y-1.5">
                {service.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-2.5 text-sm text-warm-400 font-light">
                    <div className={`w-1 h-1 rounded-full ${service.color.replace("text-", "bg-")}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </motion.div>
    </SectionWrapper>
  );
}
