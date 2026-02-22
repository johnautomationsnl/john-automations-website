"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Bot, Shield, ArrowRight } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const features = [
  {
    icon: Clock,
    title: "24/7 bereikbaar",
    description: "Je klanten krijgen altijd direct antwoord, ook 's avonds en in het weekend.",
    color: "text-brand-400",
    bg: "bg-brand-900/20",
  },
  {
    icon: Bot,
    title: "Volledig op maat",
    description: "De assistent kent jouw bedrijf, je diensten en hoe jij communiceert.",
    color: "text-accent-400",
    bg: "bg-accent-900/20",
  },
  {
    icon: MessageCircle,
    title: "Binnen 48 uur live",
    description: "Van aanvraag tot werkende assistent in minder dan twee dagen.",
    color: "text-brand-300",
    bg: "bg-brand-900/15",
  },
  {
    icon: Shield,
    title: "Alles inbegrepen",
    description: "Hosting, AI-gebruik en updates zijn allemaal inbegrepen. Geen verborgen kosten.",
    color: "text-accent-300",
    bg: "bg-accent-900/15",
  },
];

export default function WhatsAppAssistant() {
  return (
    <SectionWrapper id="whatsapp-assistent">
      <SectionHeader
        badge="WhatsApp AI Assistent"
        title="Nooit meer een klant missen op WhatsApp"
        description="Een slimme AI-assistent op jouw eigen WhatsApp-nummer. Beantwoordt vragen, kwalificeert leads en plant afspraken — volledig automatisch."
      />

      {/* Feature cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-5 rounded-2xl warm-card"
          >
            <div className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-4`}>
              <feature.icon className={`w-5 h-5 ${feature.color}`} />
            </div>
            <h3 className="font-display text-base font-semibold text-warm-50 mb-2">{feature.title}</h3>
            <p className="text-warm-500 text-sm leading-relaxed font-light">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 px-7 py-4 rounded-xl font-medium bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5"
        >
          Gratis AI-Scan Aanvragen
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <p className="mt-3 text-sm text-warm-600 font-light">Vrijblijvend — geen verplichtingen</p>
      </motion.div>
    </SectionWrapper>
  );
}
