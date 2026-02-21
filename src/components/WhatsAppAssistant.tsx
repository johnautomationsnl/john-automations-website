"use client";

import { motion } from "framer-motion";
import { MessageCircle, Clock, Bot, Shield, ArrowRight, Check } from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const features = [
  {
    icon: Clock,
    title: "24/7 bereikbaar",
    description: "Uw klanten krijgen altijd direct antwoord, ook buiten kantooruren.",
    color: "text-brand-400",
    bg: "bg-brand-900/20",
  },
  {
    icon: Bot,
    title: "Volledig op maat",
    description: "De assistent kent uw bedrijf, diensten en tone of voice door en door.",
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
    title: "All-in prijs",
    description: "Geen verborgen kosten. Hosting, AI-gebruik en updates zijn allemaal inbegrepen.",
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
        description="Een slimme AI-assistent op uw eigen WhatsApp-nummer. Beantwoordt vragen, kwalificeert leads en plant afspraken — volledig automatisch."
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

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto"
      >
        <div className="relative p-8 rounded-2xl warm-card border-brand-700/30 shadow-lg shadow-brand-900/10 ring-1 ring-brand-800/20">
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-3 py-1 text-[10px] font-mono tracking-[0.15em] uppercase text-warm-50 bg-brand-600 rounded-full shadow-lg shadow-brand-600/20">
              All-in pakket
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            {/* Left: info + features */}
            <div className="flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-900/20 flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-brand-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-warm-50 mb-3">
                WhatsApp AI Assistent
              </h3>
              <p className="text-warm-500 text-sm leading-relaxed font-light mb-5">
                Eenmalige setup, daarna elke maand een vaste all-in prijs. Geen verborgen kosten, geen limieten op gesprekken.
              </p>
              <div className="space-y-2.5">
                {[
                  "Uw eigen WhatsApp-nummer",
                  "Volledig op maat ingericht op uw bedrijf",
                  "Hosting & AI-gebruik inbegrepen",
                  "Onbeperkt gesprekken",
                  "Maandelijks opzegbaar",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-warm-300 font-light">
                    <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: pricing + CTA */}
            <div className="sm:text-right flex-shrink-0 flex flex-col sm:items-end justify-between gap-6">
              <div>
                <div className="mb-1">
                  <span className="text-sm text-warm-600 font-light">Eenmalig </span>
                  <span className="font-display text-2xl font-extrabold text-warm-50">€799</span>
                  <span className="text-warm-600 text-sm font-light"> setup</span>
                </div>
                <div>
                  <span className="text-sm text-warm-600 font-light">Daarna </span>
                  <span className="font-display text-3xl font-extrabold text-warm-50">€299</span>
                  <span className="text-warm-600 text-sm font-light">/maand</span>
                </div>
              </div>
              <a
                href="#contact"
                className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm bg-brand-600 hover:bg-brand-500 text-white hover:shadow-lg hover:shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Direct starten
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
