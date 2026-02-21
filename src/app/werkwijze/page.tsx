import type { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  FileText,
  Settings,
  TestTube,
  Rocket,
  RefreshCw,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Werkwijze | Melvin Automations",
  description:
    "Zo krijgt uw bedrijf een AI-medewerker. Van kennismaking tot live gang in 2 weken.",
};

const steps = [
  {
    number: "01",
    title: "Kennismaking & Demo",
    subtitle: "Gratis, 15 minuten",
    icon: MessageSquare,
    timing: "Dag 1",
    description:
      "We laten u live zien hoe een AI-medewerker werkt voor uw branche. U stelt vragen, wij laten de mogelijkheden zien.",
    details: [
      "Live demonstratie via WhatsApp",
      "Voorbeelden specifiek voor uw branche",
      "Direct antwoord op al uw vragen",
      "Geheel vrijblijvend",
    ],
  },
  {
    number: "02",
    title: "Offerte & Akkoord",
    subtitle: "Helder en transparant",
    icon: FileText,
    timing: "Dag 1â€“3",
    description:
      "U ontvangt een offerte op maat. Hierin staat precies wat u krijgt, wat het kost, en wanneer het live gaat.",
    details: [
      "Offerte per e-mail of WhatsApp",
      "Eenmalige setup + maandelijks abonnement",
      "Akkoord geven kan per e-mail of WhatsApp",
      "Geen verborgen kosten",
    ],
  },
  {
    number: "03",
    title: "Intake & Configuratie",
    subtitle: "Wij bouwen, u levert de input",
    icon: Settings,
    timing: "Dag 3â€“7",
    description:
      "Wij bouwen uw AI-medewerker op maat. U levert de informatie, wij doen de rest.",
    details: [
      "Uw diensten, prijzen en openingstijden",
      "Veelgestelde vragen van uw klanten",
      "Gewenste communicatiestijl",
      "WhatsApp koppeling opzetten",
    ],
  },
  {
    number: "04",
    title: "Testen & Goedkeuring",
    subtitle: "U heeft volledige controle",
    icon: TestTube,
    timing: "Dag 7â€“10",
    description:
      "Voordat de AI-medewerker live gaat, test u alles zelf. Pas na uw goedkeuring gaan we live.",
    details: [
      "U test als ware u een klant",
      "Feedback wordt direct verwerkt",
      "Antwoorden worden fijngestemd",
      "Pas live na uw akkoord",
    ],
  },
  {
    number: "05",
    title: "Live Gang",
    subtitle: "Uw AI-medewerker is actief",
    icon: Rocket,
    timing: "Dag 10â€“14",
    description:
      "Uw klanten kunnen nu 24/7 via WhatsApp terecht. Wij monitoren de eerste week actief mee.",
    details: [
      "AI-medewerker actief op uw nummer",
      "Eerste week: wij monitoren mee",
      "Eventuele bijstellingen direct doorgevoerd",
      "U ontvangt een korte handleiding",
    ],
  },
];

const faqs = [
  {
    q: "Moet ik een nieuw telefoonnummer nemen?",
    a: "Nee. De AI-medewerker kan op uw bestaande WhatsApp Business nummer draaien. Een nieuw nummer is ook mogelijk.",
  },
  {
    q: "Wat als de AI-medewerker iets fout zegt?",
    a: "De AI-medewerker is getraind op uw specifieke informatie. Bij complexe of gevoelige vragen wordt de klant automatisch doorverbonden naar u.",
  },
  {
    q: "Kan ik altijd zelf ingrijpen?",
    a: "Ja. U kunt op elk moment zelf een gesprek overnemen. De AI-medewerker is een aanvulling, geen vervanging.",
  },
  {
    q: "Wat als ik mijn prijzen of diensten wijzig?",
    a: "Geef het door en wij passen het dezelfde dag aan. Zonder extra kosten.",
  },
  {
    q: "Wat gebeurt er als ik stop?",
    a: "U kunt maandelijks opzeggen na de eerste 3 maanden. Uw WhatsApp nummer blijft gewoon van u.",
  },
];

export default function Werkwijze() {
  return (
    <div className="min-h-screen bg-dark-950 text-warm-100">
      {/* Header */}
      <header className="border-b border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-brand hover:text-brand-light transition-colors font-semibold"
          >
            &larr; Terug naar homepage
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-brand font-mono text-sm tracking-wider uppercase mb-4">
          Van kennismaking tot live in 2 weken
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-bricolage">
          Zo krijgt uw bedrijf een{" "}
          <span className="text-brand">AI-medewerker</span>
        </h1>
        <p className="text-warm-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Een helder proces in 5 stappen. U levert de input, wij bouwen het.
          Pas live na uw goedkeuring. Geen verrassingen.
        </p>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-10"
            >
              {/* Left: timing badge */}
              <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 md:pt-2">
                <span className="text-brand font-mono text-2xl font-bold">
                  {step.number}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-warm-500 bg-dark-900 border border-white/5 rounded-full px-3 py-1">
                  <Clock className="w-3 h-3" />
                  {step.timing}
                </span>
              </div>

              {/* Right: content card */}
              <div className="bg-dark-900/50 border border-white/5 rounded-2xl p-6 md:p-8 hover:border-brand/20 transition-colors">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-warm-500 text-sm">{step.subtitle}</p>
                  </div>
                </div>
                <p className="text-warm-300 leading-relaxed mb-5">
                  {step.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {step.details.map((detail, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-warm-400"
                    >
                      <CheckCircle className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute left-[70px] top-[72px] bottom-[-32px] w-px bg-gradient-to-b from-brand/30 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* After go-live */}
      <section className="border-t border-white/5 bg-dark-900/30">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center flex-shrink-0">
              <RefreshCw className="w-5 h-5 text-brand" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Na de live gang</h2>
              <p className="text-warm-500">Doorlopend onderhoud, geen zorgen</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-brand">Wat wij doen</h3>
              <ul className="space-y-2.5">
                {[
                  "Maandelijkse check of alles goed draait",
                  "Wijzigingen doorvoeren zonder extra kosten",
                  "Bij vragen: reactie binnen 24 uur op werkdagen",
                  "AI-medewerker wordt steeds slimmer",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-warm-400"
                  >
                    <CheckCircle className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-dark-950/50 border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-3 text-brand">Wat u doet</h3>
              <ul className="space-y-2.5">
                {[
                  "Af en toe gesprekken bekijken",
                  "Wijzigingen doorgeven als er iets verandert",
                  "Genieten van meer tijd en minder gemiste klanten",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-warm-400"
                  >
                    <CheckCircle className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-dark-900/50 border border-white/5 rounded-xl p-6"
              >
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-warm-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/5 bg-dark-900/30">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Klaar om te starten?</h2>
          <p className="text-warm-400 mb-8">
            Plan een gratis demo van 15 minuten en ontdek wat een AI-medewerker
            voor uw bedrijf kan betekenen.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-light text-white font-semibold px-8 py-3 rounded-xl transition-colors"
          >
            Gratis demo aanvragen
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <p className="text-warm-600 text-xs">
            &copy; {new Date().getFullYear()} Melvin Automations
          </p>
          <Link
            href="/voorwaarden"
            className="text-warm-600 hover:text-brand-400 text-xs transition-colors"
          >
            Algemene Voorwaarden
          </Link>
        </div>
      </footer>
    </div>
  );
}
