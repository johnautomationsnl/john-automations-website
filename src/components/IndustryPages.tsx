"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  HardHat,
  FileText,
  Share2,
  UserCheck,
  CalendarCheck,
  Clock,
  ClipboardList,
  Bell,
  Send,
  Receipt,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const tabs = [
  {
    id: "makelaars",
    label: "Makelaars",
    icon: Home,
    color: "text-blue-400",
    colorBg: "bg-blue-500/10",
    colorBorder: "border-blue-500/30",
    colorGradient: "from-blue-500/10 to-indigo-500/10",
    stat: "15 uur/week",
    statLabel: "Een makelaar bespaart gemiddeld 15 uur per week",
    features: [
      {
        icon: FileText,
        title: "Woningbeschrijvingen genereren",
        description:
          "Automatisch professionele woningbeschrijvingen in 30 seconden, afgestemd op uw doelgroep.",
      },
      {
        icon: Share2,
        title: "Social media posts",
        description:
          "Automatische social media posts per nieuw object. Altijd zichtbaar op alle kanalen.",
      },
      {
        icon: UserCheck,
        title: "Leads automatisch opvolgen",
        description:
          "Persoonlijke berichten naar leads op het juiste moment, zonder handmatig werk.",
      },
      {
        icon: CalendarCheck,
        title: "Bezichtigingen plannen",
        description:
          "Klanten plannen zelf bezichtigingen in. Geen telefoontjes meer nodig.",
      },
    ],
  },
  {
    id: "bouw",
    label: "Bouw & Aannemers",
    icon: HardHat,
    color: "text-orange-400",
    colorBg: "bg-orange-500/10",
    colorBorder: "border-orange-500/30",
    colorGradient: "from-orange-500/10 to-amber-500/10",
    stat: "10 uur/week",
    statLabel: "Een aannemer bespaart gemiddeld 10 uur per week op administratie",
    features: [
      {
        icon: ClipboardList,
        title: "Projectplanning & materiaallijsten",
        description:
          "Automatische projectplanning met slimme materiaallijsten. Geen spreadsheets meer.",
      },
      {
        icon: Bell,
        title: "Onderaannemers notificeren",
        description:
          "Onderaannemers automatisch op de hoogte houden van planning en wijzigingen.",
      },
      {
        icon: Send,
        title: "Realtime klant-updates",
        description:
          "Klanten ontvangen automatisch realtime project-updates. Geen belletjes meer.",
      },
      {
        icon: Receipt,
        title: "Offertes in 2 minuten",
        description:
          "Professionele offertes genereren in 2 minuten op basis van projectgegevens.",
      },
      {
        icon: GraduationCap,
        title: "AI als digitale mentor",
        description:
          "AI als digitale mentor voor nieuwe medewerkers. Sneller ingewerkt, minder fouten.",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function IndustryPages() {
  const [activeTab, setActiveTab] = useState("makelaars");
  const activeIndustry = tabs.find((t) => t.id === activeTab)!;

  return (
    <SectionWrapper id="branches">
      <SectionHeader
        badge="Branches"
        title="Oplossingen per branche"
        description="Ontdek hoe AI specifiek voor uw branche werkt. Concrete resultaten, geen vage beloftes."
      />

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-xl bg-dark-900/50 border border-dark-800">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-500/25"
                  : "text-dark-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          >
            {activeIndustry.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl bg-dark-900/50 border border-dark-800 hover:border-brand-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${activeIndustry.colorGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl ${activeIndustry.colorBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 ${activeIndustry.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-6 sm:p-8 rounded-2xl bg-dark-900/50 border border-dark-800 overflow-hidden"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-r ${activeIndustry.colorGradient} opacity-50`}
            />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${activeIndustry.colorBg} border ${activeIndustry.colorBorder} flex items-center justify-center`}
                >
                  <Clock className={`w-7 h-7 ${activeIndustry.color}`} />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {activeIndustry.stat}
                  </p>
                  <p className="text-dark-400 text-sm">
                    {activeIndustry.statLabel}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25 hover:-translate-y-0.5"
              >
                Start uw AI-Scan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
