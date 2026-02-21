import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | John Automations",
  description: "Algemene voorwaarden voor consumenten en zakelijke klanten van John Automations",
};

export default function AlgemeneVoorwaarden() {
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-bricolage)] mb-4">
          <span className="gradient-text">Algemene Voorwaarden</span>
        </h1>
        <p className="text-[#f5f0e8]/60 mb-12 font-[family-name:var(--font-space-grotesk)]">
          Versie 1.0 | Gelddig per 20 Februari 2026
        </p>

        <div className="space-y-8 font-[family-name:var(--font-space-grotesk)] text-[#f5f0e8]/90">
          
          {/* Article 1 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              1. Algemeen
            </h2>
            <p className="mb-4">
              Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Melvin Automations (hierna: "wij", "ons") en de consument (hierna: "u") voor de levering van AI-diensten, softwareontwikkeling en automatisering.
            </p>
            <p>
              Melvin Automations is gevestigd te Zuid-Limburg, Nederland en ingeschreven bij de Kamer van Koophandel onder nummer [KVK-nummer]. Onze diensten richt zich uitsluitend aan ondernemingen in Nederland.
            </p>
          </section>

          {/* Article 2 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              2. Diensten
            </h2>
            <p className="mb-4">
              Wij bieden de volgende diensten aan:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-chatbots en WhatsApp-assistenten</li>
              <li>Procesautomatisering</li>
              <li>Website- en softwareontwikkeling</li>
              <li>AI-integraties</li>
              <li>Advies en consultatie</li>
            </ul>
          </section>

          {/* Article 3 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              3. Totstandkoming overeenkomst
            </h2>
            <p className="mb-4">
              Een overeenkomst komt tot stand door uw akkoord op een offerte of door mondelinge of schriftelijke aanvaarding van onze diensten. Wij behouden ons het recht voor om zonder opgaaf van reden een opdracht niet te aanvaarden.
            </p>
            <p>
              Alle offertes zijn vrijblijvend en geldig voor 30 dagen, tenzij anders vermeld.
            </p>
          </section>

          {/* Article 4 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              4. Prijzen en Betaling
            </h2>
            <p className="mb-4">
              Alle prijzen zijn in euro's en inclusief BTW, tenzij anders vermeld. Wij behouden ons het recht voor om prijzen te wijzigen, mits wij u vooraf informeren.
            </p>
            <p className="mb-4">
              Betalingstermijn: 14 dagen na factuurdatum, tenzij anders overeengekomen. Bij niet-tijdige betaling zijn wij gerechtigd om de levering op te schorten.
            </p>
            <p>
              Bij betalingsachterstand wordt er 5% rente per maand in rekening gebracht.
            </p>
          </section>

          {/* Article 5 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              5. Levering en Termijnen
            </h2>
            <p className="mb-4">
              Wij streven er naar om overeengekomen levertijden zo veel mogelijk te halen. Overschrijding van een leveringstermijn geeft u niet het recht op schadevergoeding of ontbinding van de overeenkomst.
            </p>
            <p>
              Levering vindt plaats zodra de dienst of software operationeel is en door u is goedgekeurd, of 5 werkdagen na levering zonder schriftelijke bezwaar.
            </p>
          </section>

          {/* Article 6 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              6. intellectueel Eigendom
            </h2>
            <p className="mb-4">
              Het intellectueel eigendom van alle door ons ontwikkelde software, code en materialen berust bij ons, tenzij anders schriftelijk overeengekomen.
            </p>
            <p>
              U krijgt een niet-exclusieve licentie om de geleverde software te gebruiken voor uw eigen bedrijfsdoeleinden.
            </p>
          </section>

          {/* Article 7 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              7. Aansprakelijkheid
            </h2>
            <p className="mb-4">
              Onze aansprakelijkheid is beperkt tot maximaal het factuurbedrag van de desbetreffende opdracht. Wij zijn niet aansprakelijk voor:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Schade ten gevolge van onjuist gebruik van onze software</li>
              <li>Schade veroorzaakt door derden</li>
              <li>Gevolgschade of gederfde winst</li>
              <li>Schade door storingen in systemen of internet</li>
            </ul>
          </section>

          {/* Article 8 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              8. Vertrouwelijkheid
            </h2>
            <p className="mb-4">
              Wij verplichten ons om alle informatie die wij van u ontvangen vertrouwelijk te behandelen en niet aan derden bekend te maken, behalve voor zover dit noodzakelijk is voor de uitvoering van de overeenkomst.
            </p>
            <p>
              Wij treffen passende technische en organisatorische maatregelen om uw gegevens te beschermen conform de AVG-wetgeving.
            </p>
          </section>

          {/* Article 9 */}
          <section className="p-6 bg-[#141210] rounded-xl border border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              9. Duur en Opzegging
            </h2>
            <p className="mb-4">
              Overeenkomsten kunnen worden aangegaan voor bepaalde of onbepaalde tijd. Bij een overeenkomst voor onbepaalde tijd geldt een opzegtermijn van 30 dagen.
            </p>
            <p>
              Bij tussentijdse opzegging blijft de betalingsverplichting voor reeds geleverde diensten van kracht.
            </p>
          </section>

          {/* Article 10 */}
          <section className="p-6 bg-[#141210] rounded-xl border-[#363228]">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              10. Geschillen en Toepasselijk Recht
            </h2>
            <p className="mb-4">
              Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar wij gevestigd zijn.
            </p>
            <p>
              Wij streven ernaar om geschillen eerst informeel op te lossen door direct contact met ons op te nemen.
            </p>
          </section>

          {/* Contact */}
          <section className="p-6 bg-[#3ba683]/10 rounded-xl border border-[#3ba683]/30 mt-12">
            <h2 className="text-2xl font-bold text-[#3ba683] mb-4 font-[family-name:var(--font-bricolage)]">
              Contact
            </h2>
            <p className="mb-2">
              <strong>Melvin Automations</strong>
            </p>
            <p className="mb-2">
              Email: <a href="mailto:melvinthewebdesigner@gmail.com" className="text-[#3ba683] hover:underline">melvinthewebdesigner@gmail.com</a>
            </p>
            <p>
              Telefoon: <a href="tel:+31653204361" className="text-[#3ba683] hover:underline">+31 6 53204361</a>
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0a0908] border-t border-[#363228] py-8 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center text-[#f5f0e8]/60 font-[family-name:var(--font-space-grotesk)]">
          <p>© 2026 Melvin Automations. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
