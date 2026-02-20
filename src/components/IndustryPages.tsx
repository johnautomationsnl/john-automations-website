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
  UtensilsCrossed,
  ShoppingCart,
  Wrench,
  Calculator,
  Scale,
  Car,
  SprayCan,
  Scissors,
  Star,
  Package,
  MessageSquare,
  BarChart3,
  ShieldCheck,
  BookOpen,
  Users,
  MapPin,
  PhoneCall,
  Mail,
  Repeat,
  Search,
  TrendingUp,
  Image,
  Bot,
} from "lucide-react";
import SectionWrapper, { SectionHeader } from "./SectionWrapper";

const tabs = [
  {
    id: "makelaars",
    label: "Makelaars",
    icon: Home,
    color: "text-brand-400",
    bg: "bg-brand-900/20",
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
    color: "text-accent-400",
    bg: "bg-accent-900/20",
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
  {
    id: "horeca",
    label: "Horeca",
    icon: UtensilsCrossed,
    color: "text-orange-400",
    bg: "bg-orange-900/20",
    stat: "12 uur/week",
    statLabel: "Een horecaondernemer bespaart gemiddeld 12 uur per week",
    features: [
      {
        icon: CalendarCheck,
        title: "Reserveringen beheren",
        description:
          "AI beheert reserveringen via WhatsApp, telefoon en website. Automatische bevestigingen en herinneringen.",
      },
      {
        icon: MessageSquare,
        title: "Reviews beantwoorden",
        description:
          "Automatisch gepersonaliseerde reacties op Google en TripAdvisor reviews. Altijd professioneel.",
      },
      {
        icon: ClipboardList,
        title: "Voorraadbeheer & bestellingen",
        description:
          "Slimme voorraadvoorspelling op basis van reserveringen en seizoenen. Nooit meer te veel of te weinig.",
      },
      {
        icon: Share2,
        title: "Social media & menukaart",
        description:
          "Automatische posts van dagmenu's en acties. Foto's van gerechten direct naar Instagram en Facebook.",
      },
      {
        icon: Users,
        title: "Personeelsplanning",
        description:
          "AI-gestuurde roosters op basis van verwachte drukte. Minder over- of onderbezetting.",
      },
    ],
  },
  {
    id: "webshops",
    label: "Webshops",
    icon: ShoppingCart,
    color: "text-emerald-400",
    bg: "bg-emerald-900/20",
    stat: "20 uur/week",
    statLabel: "Een webshop-eigenaar bespaart gemiddeld 20 uur per week",
    features: [
      {
        icon: FileText,
        title: "Productbeschrijvingen genereren",
        description:
          "Honderden SEO-geoptimaliseerde productbeschrijvingen in minuten. In elke taal en tone-of-voice.",
      },
      {
        icon: Bot,
        title: "24/7 klantenservice chatbot",
        description:
          "AI-chatbot die bestelstatus, retourvragen en productadvies afhandelt. Zonder wachttijden.",
      },
      {
        icon: Mail,
        title: "E-mail automatisering",
        description:
          "Verlaten winkelwagen e-mails, review-verzoeken en gepersonaliseerde aanbiedingen. Volledig automatisch.",
      },
      {
        icon: TrendingUp,
        title: "Prijsoptimalisatie",
        description:
          "AI analyseert concurrenten en vraag, en stelt optimale prijzen voor. Meer marge, meer verkoop.",
      },
      {
        icon: Image,
        title: "Product foto's bewerken",
        description:
          "Achtergronden verwijderen, lifestyle-foto's genereren en A/B-testen van productafbeeldingen met AI.",
      },
    ],
  },
  {
    id: "installateurs",
    label: "Installateurs",
    icon: Wrench,
    color: "text-sky-400",
    bg: "bg-sky-900/20",
    stat: "8 uur/week",
    statLabel: "Een installateur bespaart gemiddeld 8 uur per week op administratie",
    features: [
      {
        icon: CalendarCheck,
        title: "Slimme planning & routeoptimalisatie",
        description:
          "AI plant afspraken efficiënt en berekent de snelste route. Minder rijden, meer klussen.",
      },
      {
        icon: Receipt,
        title: "Offertes en facturen",
        description:
          "Genereer offertes ter plekke op basis van foto's en beschrijvingen. Factuur automatisch na afronding.",
      },
      {
        icon: MessageSquare,
        title: "WhatsApp klantenservice",
        description:
          "Klanten stellen vragen via WhatsApp en krijgen direct antwoord. Afspraken, status en nazorg automatisch.",
      },
      {
        icon: ClipboardList,
        title: "Werkbonnen digitaliseren",
        description:
          "Geen papieren werkbonnen meer. Foto maken, AI vult het formulier in. Klant tekent digitaal.",
      },
      {
        icon: Package,
        title: "Materiaalbeheer",
        description:
          "Automatische melding als voorraad laag is. Bestelsuggesties op basis van geplande klussen.",
      },
    ],
  },
  {
    id: "accountants",
    label: "Accountants",
    icon: Calculator,
    color: "text-violet-400",
    bg: "bg-violet-900/20",
    stat: "18 uur/week",
    statLabel: "Een accountantskantoor bespaart gemiddeld 18 uur per week",
    features: [
      {
        icon: Receipt,
        title: "Factuurherkenning & boeken",
        description:
          "AI herkent facturen, extraheert gegevens en boekt automatisch in. 99% nauwkeurigheid.",
      },
      {
        icon: ShieldCheck,
        title: "BTW & compliance checks",
        description:
          "Automatische controle op BTW-fouten, ontbrekende facturen en compliance-risico's. Voorkom boetes.",
      },
      {
        icon: Mail,
        title: "Klantcommunicatie automatiseren",
        description:
          "Herinneringen voor ontbrekende stukken, kwartaalrapportages en deadlines. Alles automatisch verstuurd.",
      },
      {
        icon: BarChart3,
        title: "Rapportages genereren",
        description:
          "Maand- en kwartaalrapportages automatisch gegenereerd met AI-inzichten en trendanalyse.",
      },
      {
        icon: Search,
        title: "Slimme documentverwerking",
        description:
          "Bankafschriften, bonnetjes en jaarstukken automatisch geclassificeerd en verwerkt. Geen handmatig sorteerwerk.",
      },
    ],
  },
  {
    id: "juridisch",
    label: "Juridisch",
    icon: Scale,
    color: "text-amber-400",
    bg: "bg-amber-900/20",
    stat: "14 uur/week",
    statLabel: "Een juridisch kantoor bespaart gemiddeld 14 uur per week",
    features: [
      {
        icon: FileText,
        title: "Contracten analyseren",
        description:
          "AI scant contracten op risico's, ontbrekende clausules en afwijkingen. In seconden in plaats van uren.",
      },
      {
        icon: Search,
        title: "Juridisch onderzoek",
        description:
          "Doorzoek jurisprudentie en wetgeving met AI. Relevante uitspraken en artikelen direct gevonden.",
      },
      {
        icon: BookOpen,
        title: "Documenten opstellen",
        description:
          "Standaard contracten, brieven en processtukken genereren op basis van templates en casus-informatie.",
      },
      {
        icon: Clock,
        title: "Urenregistratie & facturatie",
        description:
          "Automatische tijdregistratie per dossier en directe factuurgeneratie. Geen uren meer kwijtraken.",
      },
      {
        icon: Bell,
        title: "Deadline monitoring",
        description:
          "AI bewaakt alle termijnen en deadlines. Automatische alerts zodat u nooit een termijn mist.",
      },
    ],
  },
  {
    id: "garages",
    label: "Autobedrijven",
    icon: Car,
    color: "text-red-400",
    bg: "bg-red-900/20",
    stat: "10 uur/week",
    statLabel: "Een autobedrijf bespaart gemiddeld 10 uur per week",
    features: [
      {
        icon: Bell,
        title: "APK & onderhoudsherinneringen",
        description:
          "Automatische herinneringen via WhatsApp of SMS voor APK, onderhoudsbeurten en bandenwissel.",
      },
      {
        icon: Receipt,
        title: "Diagnose naar offerte",
        description:
          "Van diagnose direct naar een duidelijke offerte voor de klant. Inclusief onderdeelprijzen en arbeidstijd.",
      },
      {
        icon: MessageSquare,
        title: "WhatsApp statusupdates",
        description:
          "Klanten automatisch op de hoogte houden van de voortgang. Geen telefoon meer nodig.",
      },
      {
        icon: Star,
        title: "Review management",
        description:
          "Na elke afspraak automatisch een reviewverzoek. Positieve reviews naar Google, negatieve intern afhandelen.",
      },
      {
        icon: CalendarCheck,
        title: "Online afspraken plannen",
        description:
          "Klanten boeken zelf online een afspraak. AI optimaliseert de werkplaatsplanning automatisch.",
      },
    ],
  },
  {
    id: "schoonmaak",
    label: "Schoonmaak",
    icon: SprayCan,
    color: "text-cyan-400",
    bg: "bg-cyan-900/20",
    stat: "8 uur/week",
    statLabel: "Een schoonmaakbedrijf bespaart gemiddeld 8 uur per week",
    features: [
      {
        icon: CalendarCheck,
        title: "Automatische roosters",
        description:
          "AI maakt roosters op basis van contracten, beschikbaarheid en locaties. Inclusief vervanging bij ziekte.",
      },
      {
        icon: MapPin,
        title: "Route & reistijdoptimalisatie",
        description:
          "Slimme routeplanning zodat teams minimaal reizen en maximaal schoonmaken.",
      },
      {
        icon: ClipboardList,
        title: "Digitale checklists",
        description:
          "Medewerkers vinken taken af op hun telefoon. U ziet direct of alles gedaan is.",
      },
      {
        icon: Receipt,
        title: "Uren naar factuur",
        description:
          "Gewerkte uren automatisch omgezet naar facturen. Geen handmatige administratie meer.",
      },
      {
        icon: PhoneCall,
        title: "Offerteaanvragen afhandelen",
        description:
          "AI beantwoordt offerteaanvragen direct via WhatsApp of e-mail met een prijsindicatie op maat.",
      },
    ],
  },
  {
    id: "kapsalons",
    label: "Kapsalons & Beauty",
    icon: Scissors,
    color: "text-pink-400",
    bg: "bg-pink-900/20",
    stat: "6 uur/week",
    statLabel: "Een kapsalon bespaart gemiddeld 6 uur per week",
    features: [
      {
        icon: CalendarCheck,
        title: "Online boeken via WhatsApp",
        description:
          "Klanten boeken 24/7 via WhatsApp of uw website. Automatische bevestiging en herinnering.",
      },
      {
        icon: Repeat,
        title: "No-show preventie",
        description:
          "Automatische herinneringen 24 uur en 1 uur voor de afspraak. Tot 80% minder no-shows.",
      },
      {
        icon: Star,
        title: "Reviews & loyaliteit",
        description:
          "Na elke afspraak een reviewverzoek. Vaste klanten automatisch beloond met kortingen.",
      },
      {
        icon: Share2,
        title: "Instagram & social content",
        description:
          "AI genereert posts van voor/na foto's, nieuwe behandelingen en aanbiedingen. Altijd zichtbaar online.",
      },
      {
        icon: Users,
        title: "Klantprofielen & voorkeur",
        description:
          "AI onthoudt voorkeuren per klant: kleur, stijl, producten. Persoonlijke service zonder het te onthouden.",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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
      <div className="flex justify-center mb-10">
        <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl warm-card max-w-4xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/20"
                  : "text-warm-500 hover:text-warm-200 hover:bg-warm-900/20"
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
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Feature cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {activeIndustry.features.map((feature, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="group relative p-6 rounded-2xl warm-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative">
                  <div
                    className={`w-10 h-10 rounded-xl ${activeIndustry.bg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-5 h-5 ${activeIndustry.color}`} />
                  </div>
                  <h3 className="font-display text-base font-700 text-warm-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-warm-500 text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stat banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 sm:p-8 rounded-2xl warm-card overflow-hidden"
          >
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${activeIndustry.bg} flex items-center justify-center`}
                >
                  <Clock className={`w-6 h-6 ${activeIndustry.color}`} />
                </div>
                <div>
                  <p className="font-display text-2xl sm:text-3xl font-800 text-warm-50">
                    {activeIndustry.stat}
                  </p>
                  <p className="text-warm-500 text-sm font-light">
                    {activeIndustry.statLabel}
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-600/20 hover:-translate-y-0.5"
              >
                Start uw AI-Scan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </SectionWrapper>
  );
}
