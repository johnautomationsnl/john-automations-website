import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Werkwijze | Melvin Automations",
  description: "Ontdek hoe wij te werk gaan bij AI-implementatie en automatisering",
};

export default function Werkwijze() {
  return (
    <div className="min-h-screen bg-[#0a0908] text-[#f5f0e8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0908]/90 backdrop-blur-md border-b border-[#363228]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold font-[family-name:var(--font-bricolage)]">
            <span className="text-[#3ba683]">Melvin</span> Automations
          </Link>
          <Link 
            href="/" 
            className="text-[#f5f0e8]/80 hover:text-[#3ba683] transition-colors font-[family-name:var(--font-space-grotesk)]"
          >
            ← Terug naar home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-bricolage)] mb-4 text-center">
            Onze <span className="gradient-text">Werkwijze</span>
          </h1>
          <p className="text-xl text-[#f5f0e8]/70 text-center mb-16 font-[family-name:var(--font-space-grotesk)]">
            Van intake tot implementatie — zo transformeren wij uw bedrijf met AI
          </p>

          {/* Steps */}
          <div className="space-y-8">
            
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-16 h-16 rounded-full bg-[#3ba683] flex items-center justify-center text-2xl font-bold text-[#0a0908]">
                01
              </div>
              <div className="pl-20">
                <h2 className="text-2xl font-bold text-[#3ba683] mb-3 font-[family-name:var(--font-bricolage)]">
                  Stap 1: Gratis AI-Scan
                </h2>
                <div className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
                  <p className="text-[#f5f0e8]/80 mb-4">
                    We beginnen met een vrijblijvend gesprek van 30 minuten. Dit is geen verkoopgesprek — het is een echte analyse.
                  </p>
                  <ul className="space-y-2 text-[#f5f0e8]/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Analyse van uw huidige processen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Identificeren waar AI de meeste impact heeft</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>U ontvangt een concreet rapport met aanbevelingen</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#363228]">
                    <span className="text-[#f59e0b] font-medium">Resultaat:</span>
                    <span className="text-[#f5f0e8]/70 ml-2">30 min gesprek + concreet rapport</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-16 h-16 rounded-full bg-[#3ba683] flex items-center justify-center text-2xl font-bold text-[#0a0908]">
                02
              </div>
              <div className="pl-20">
                <h2 className="text-2xl font-bold text-[#3ba683] mb-3 font-[family-name:var(--font-bricolage)]">
                  Stap 2: Strategie & Ontwerp
                </h2>
                <div className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
                  <p className="text-[#f5f0e8]/80 mb-4">
                    Op basis van de AI-Scan ontwerpen we een oplossing die perfect past bij uw bedrijf.
                  </p>
                  <ul className="space-y-2 text-[#f5f0e8]/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Maatwerk oplossing op basis van uw specifieke uitdagingen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Duidelijk plan met tijdlijn en kosten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Vaste prijs — geen verrassingen achteraf</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#363228]">
                    <span className="text-[#f59e0b] font-medium">Resultaat:</span>
                    <span className="text-[#f5f0e8]/70 ml-2">Helder plan met offerte</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-16 h-16 rounded-full bg-[#3ba683] flex items-center justify-center text-2xl font-bold text-[#0a0908]">
                03
              </div>
              <div className="pl-20">
                <h2 className="text-2xl font-bold text-[#3ba683] mb-3 font-[family-name:var(--font-bricolage)]">
                  Stap 3: Bouwen & Lanceren
                </h2>
                <div className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
                  <p className="text-[#f5f0e8]/80 mb-4">
                    We bouwen uw oplossing, testen grondig en lanceren samen met u.
                  </p>
                  <ul className="space-y-2 text-[#f5f0e8]/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Ontwikkeling van uw AI-oplossing of automatisering</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Uitgebreide testing voor livegang</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#3ba683]">✓</span>
                      <span>Lancering en training van uw team</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#363228]">
                    <span className="text-[#f59e0b] font-medium">Resultaat:</span>
                    <span className="text-[#f5f0e8]/70 ml-2">Volledig operationele oplossing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-16 h-16 rounded-full bg-[#f59e0b] flex items-center justify-center text-2xl font-bold text-[#0a0908]">
                04
              </div>
              <div className="pl-20">
                <h2 className="text-2xl font-bold text-[#f59e0b] mb-3 font-[family-name:var(--font-bricolage)]">
                  Stap 4: Support & Optimalisatie
                </h2>
                <div className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
                  <p className="text-[#f5f0e8]/80 mb-4">
                    Na de lancering zijn we er nog steeds voor u. Uw succes is ons succes.
                  </p>
                  <ul className="space-y-2 text-[#f5f0e8]/70">
                    <li className="flex items-start gap-2">
                      <span className="text-[#f59e0b]">✓</span>
                      <span>Continue support bij vragen of problemen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f59e0b]">✓</span>
                      <span>Optimalisatie op basis van praktijkervaring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#f59e0b]">✓</span>
                      <span>Uitbreiding van functionaliteiten indien gewenst</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-[#363228]">
                    <span className="text-[#f59e0b] font-medium">Resultaat:</span>
                    <span className="text-[#f5f0e8]/70 ml-2">Lange termijn partnership</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#3ba683]/20 to-[#f59e0b]/20 rounded-2xl border border-[#3ba683]/30 text-center">
            <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-bricolage)]">
              Klaar om te starten?
            </h3>
            <p className="text-[#f5f0e8]/70 mb-6">
              Plan je gratis AI-Scan van 30 minuten en ontdek wat AI voor uw bedrijf kan betekenen.
            </p>
            <Link 
              href="/#contact"
              className="inline-block px-8 py-4 bg-[#3ba683] hover:bg-[#2d8a6e] text-[#0a0908] font-bold rounded-lg transition-colors"
            >
              Plan Gratis AI-Scan
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0908] border-t border-[#363228] py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-[#f5f0e8]/60 font-[family-name:var(--font-space-grotesk)]">
          <p>© 2026 Melvin Automations. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
