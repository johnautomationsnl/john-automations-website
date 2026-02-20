import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Melvin Automations",
  description:
    "Algemene voorwaarden van ZeroCode Ventures voor AI-medewerker dienstverlening.",
};

export default function Voorwaarden() {
  return (
    <div className="min-h-screen bg-dark-950 text-warm-100">
      {/* Header */}
      <header className="border-b border-white/10 py-6">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="text-brand hover:text-brand-light transition-colors font-semibold"
          >
            ← Terug naar homepage
          </Link>
          <span className="text-warm-400 text-sm">
            Laatst bijgewerkt: 20 februari 2026
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-bricolage">
          Algemene Voorwaarden
        </h1>
        <p className="text-warm-400 mb-12 text-lg">ZeroCode Ventures</p>

        {/* Article 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 1 — Definities
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>1.1</strong> <strong>Opdrachtnemer</strong>: ZeroCode
              Ventures, gevestigd te Parkstad, Zuid-Limburg, hierna
              &ldquo;ZeroCode&rdquo;.
            </p>
            <p>
              <strong>1.2</strong> <strong>Opdrachtgever</strong>: de
              natuurlijke of rechtspersoon die een overeenkomst aangaat met
              ZeroCode.
            </p>
            <p>
              <strong>1.3</strong> <strong>Dienst</strong>: het opzetten,
              configureren en onderhouden van een AI-medewerker (geautomatiseerd
              berichtensysteem via WhatsApp of andere kanalen) ten behoeve van
              Opdrachtgever.
            </p>
            <p>
              <strong>1.4</strong> <strong>AI-medewerker</strong>: de door
              ZeroCode geconfigureerde digitale assistent die namens
              Opdrachtgever communiceert met diens klanten.
            </p>
          </div>
        </section>

        {/* Article 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 2 — Toepasselijkheid
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>2.1</strong> Deze algemene voorwaarden zijn van toepassing
              op alle aanbiedingen, offertes, overeenkomsten en diensten van
              ZeroCode.
            </p>
            <p>
              <strong>2.2</strong> Voorafgaand aan het sluiten van de
              overeenkomst worden deze algemene voorwaarden aan Opdrachtgever ter
              hand gesteld. Bij elektronische dienstverlening worden de
              voorwaarden langs elektronische weg ter beschikking gesteld op
              zodanige wijze dat deze door Opdrachtgever kunnen worden opgeslagen
              en toegankelijk zijn voor latere kennisneming (art. 6:234 lid 2
              BW).
            </p>
            <p>
              <strong>2.3</strong> Afwijkingen van deze voorwaarden zijn
              uitsluitend geldig indien schriftelijk overeengekomen.
            </p>
            <p>
              <strong>2.4</strong> De toepasselijkheid van eventuele inkoop- of
              andere voorwaarden van Opdrachtgever wordt uitdrukkelijk van de
              hand gewezen.
            </p>
          </div>
        </section>

        {/* Article 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 3 — Aanbod en Overeenkomst
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>3.1</strong> Alle aanbiedingen en offertes van ZeroCode
              zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders
              vermeld.
            </p>
            <p>
              <strong>3.2</strong> Een overeenkomst komt tot stand op het moment
              dat Opdrachtgever een offerte schriftelijk (inclusief e-mail of
              WhatsApp) accepteert.
            </p>
            <p>
              <strong>3.3</strong> ZeroCode behoudt zich het recht voor een
              opdracht zonder opgaaf van reden te weigeren.
            </p>
          </div>
        </section>

        {/* Article 4 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 4 — Uitvoering van de Dienst
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>4.1</strong> ZeroCode zal de Dienst naar beste inzicht en
              vermogen uitvoeren, conform de eisen van goed vakmanschap. De
              verplichting betreft een{" "}
              <strong>inspanningsverplichting</strong> en uitdrukkelijk geen
              resultaatsverplichting.
            </p>
            <p>
              <strong>4.2</strong> De AI-medewerker is een geautomatiseerd
              systeem dat op basis van kunstmatige intelligentie antwoorden
              genereert. ZeroCode garandeert <strong>niet</strong> dat de door de
              AI-medewerker gegeven antwoorden altijd volledig, correct of
              foutloos zijn. De AI-medewerker kan fouten maken, onjuiste
              informatie verstrekken of informatie anders interpreteren dan
              bedoeld.
            </p>
            <p>
              <strong>4.3</strong> Opdrachtgever is zelf verantwoordelijk voor
              het controleren en goedkeuren van de informatie die de
              AI-medewerker verstrekt aan diens klanten. Opdrachtgever dient
              regelmatig de gesprekken van de AI-medewerker te monitoren.
            </p>
            <p>
              <strong>4.4</strong> ZeroCode is niet verantwoordelijk voor de
              inhoud van gesprekken die de AI-medewerker voert, noch voor
              beslissingen die door klanten van Opdrachtgever worden genomen op
              basis van die gesprekken.
            </p>
            <p>
              <strong>4.5</strong> ZeroCode is afhankelijk van diensten van
              derden (waaronder WhatsApp/Meta, AI-modelproviders zoals OpenAI en
              Anthropic, en cloud-infrastructuur). ZeroCode heeft geen invloed op
              de beschikbaarheid, het beleid of de werking van deze diensten en
              is niet aansprakelijk voor wijzigingen, storingen of beëindiging
              van deze diensten door derden.
            </p>
          </div>
        </section>

        {/* Article 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 5 — Verplichtingen Opdrachtgever
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>5.1</strong> Opdrachtgever dient tijdig alle informatie te
              verstrekken die nodig is voor het correct configureren van de
              AI-medewerker.
            </p>
            <p>
              <strong>5.2</strong> Opdrachtgever is verantwoordelijk voor de
              juistheid, volledigheid en betrouwbaarheid van de aangeleverde
              informatie, ook indien deze van derden afkomstig is.
            </p>
            <p>
              <strong>5.3</strong> Opdrachtgever is zelf verantwoordelijk voor
              naleving van de Algemene Verordening Gegevensbescherming (AVG) en
              overige privacywetgeving met betrekking tot de persoonsgegevens van
              diens klanten.
            </p>
            <p>
              <strong>5.4</strong> Opdrachtgever vrijwaart ZeroCode voor alle
              aanspraken van derden die voortvloeien uit het gebruik van de
              AI-medewerker.
            </p>
          </div>
        </section>

        {/* Article 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 6 — Aansprakelijkheid
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>6.1</strong> ZeroCode is <strong>uitsluitend</strong>{" "}
              aansprakelijk voor directe schade die het rechtstreekse gevolg is
              van een aantoonbare toerekenbare tekortkoming in de nakoming van de
              overeenkomst, mits Opdrachtgever ZeroCode schriftelijk in gebreke
              heeft gesteld met een redelijke termijn van ten minste 14 dagen om
              alsnog na te komen, en ZeroCode ook na die termijn tekortschiet.
            </p>
            <p>
              <strong>6.2</strong> De totale aansprakelijkheid van ZeroCode is te
              allen tijde beperkt tot{" "}
              <strong>
                het bedrag dat in de drie (3) maanden voorafgaand aan het
                schadeveroorzakende feit door Opdrachtgever aan ZeroCode is
                betaald
              </strong>
              , met een maximum van €1.000 (duizend euro).
            </p>
            <p>
              <strong>6.3</strong> ZeroCode is <strong>nooit</strong>{" "}
              aansprakelijk voor:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>
                Indirecte schade, waaronder gevolgschade, gederfde winst, gemiste
                besparingen, reputatieschade of schade door bedrijfsstagnatie;
              </li>
              <li>
                Schade veroorzaakt door onjuiste, onvolledige of misleidende
                antwoorden van de AI-medewerker;
              </li>
              <li>
                Schade die het gevolg is van storingen, onderbrekingen of
                onbeschikbaarheid van diensten van derden (waaronder WhatsApp,
                Meta, OpenAI, Anthropic of andere AI-leveranciers);
              </li>
              <li>
                Schade als gevolg van het niet naleven van instructies of
                aanbevelingen door Opdrachtgever;
              </li>
              <li>
                Schade door ongeautoriseerde toegang tot of gebruik van de
                AI-medewerker door derden.
              </li>
            </ul>
            <p>
              <strong>6.4</strong> Opdrachtgever vrijwaart ZeroCode volledig
              tegen alle aanspraken van derden die verband houden met de door
              ZeroCode geleverde Dienst.
            </p>
          </div>
        </section>

        {/* Article 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 7 — Prijzen en Betaling
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>7.1</strong> Alle genoemde prijzen zijn exclusief BTW,
              tenzij uitdrukkelijk anders vermeld.
            </p>
            <p>
              <strong>7.2</strong> ZeroCode hanteert een eenmalige
              setup-vergoeding en een maandelijkse abonnementsvergoeding, zoals
              vastgelegd in de offerte.
            </p>
            <p>
              <strong>7.3</strong> Betaling dient te geschieden binnen 14 dagen
              na factuurdatum, tenzij anders overeengekomen.
            </p>
            <p>
              <strong>7.4</strong> Bij niet-tijdige betaling is Opdrachtgever van
              rechtswege in verzuim en is ZeroCode gerechtigd de wettelijke
              handelsrente in rekening te brengen.
            </p>
            <p>
              <strong>7.5</strong> ZeroCode is gerechtigd de Dienst op te
              schorten bij een betalingsachterstand van meer dan 30 dagen.
            </p>
          </div>
        </section>

        {/* Article 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 8 — Duur en Opzegging
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>8.1</strong> De overeenkomst wordt aangegaan voor
              onbepaalde tijd met een minimale looptijd van drie (3) maanden,
              tenzij anders overeengekomen.
            </p>
            <p>
              <strong>8.2</strong> Na de minimale looptijd kan de overeenkomst
              door beide partijen schriftelijk worden opgezegd met inachtneming
              van een opzegtermijn van één (1) kalendermaand.
            </p>
            <p>
              <strong>8.3</strong> Bij opzegging door Opdrachtgever vindt geen
              restitutie plaats van reeds betaalde bedragen.
            </p>
            <p>
              <strong>8.4</strong> ZeroCode is gerechtigd de overeenkomst met
              onmiddellijke ingang te ontbinden indien Opdrachtgever in verzuim
              is met betaling of in strijd handelt met deze voorwaarden.
            </p>
          </div>
        </section>

        {/* Article 9 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 9 — Intellectueel Eigendom
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>9.1</strong> Alle intellectuele eigendomsrechten op de door
              ZeroCode ontwikkelde software, configuraties, templates en
              documentatie berusten bij ZeroCode.
            </p>
            <p>
              <strong>9.2</strong> Opdrachtgever verkrijgt een niet-exclusief,
              niet-overdraagbaar gebruiksrecht voor de duur van de overeenkomst.
            </p>
            <p>
              <strong>9.3</strong> Het is Opdrachtgever niet toegestaan de
              AI-medewerker of de onderliggende configuratie te kopiëren, aan te
              passen, of aan derden ter beschikking te stellen.
            </p>
          </div>
        </section>

        {/* Article 10 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 10 — Geheimhouding
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>10.1</strong> Beide partijen verplichten zich tot
              geheimhouding van alle vertrouwelijke informatie die zij in het
              kader van de overeenkomst van elkaar ontvangen.
            </p>
            <p>
              <strong>10.2</strong> Deze geheimhoudingsverplichting geldt ook na
              beëindiging van de overeenkomst.
            </p>
          </div>
        </section>

        {/* Article 11 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 11 — Privacy en Gegevensverwerking
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>11.1</strong> ZeroCode verwerkt persoonsgegevens in
              overeenstemming met de AVG.
            </p>
            <p>
              <strong>11.2</strong> Voor zover ZeroCode bij de uitvoering van de
              Dienst persoonsgegevens verwerkt namens Opdrachtgever, treedt
              ZeroCode op als verwerker in de zin van de AVG. Partijen zullen in
              dat geval een verwerkersovereenkomst sluiten conform art. 28 AVG.
            </p>
            <p>
              <strong>11.3</strong> Opdrachtgever is en blijft
              verwerkingsverantwoordelijke in de zin van de AVG voor alle
              persoonsgegevens die via de AI-medewerker worden verwerkt.
              Opdrachtgever is verantwoordelijk voor het informeren van diens
              klanten over de inzet van een AI-medewerker en het verkrijgen van
              eventueel benodigde toestemming.
            </p>
            <p>
              <strong>11.4</strong> ZeroCode slaat chatgegevens op binnen de
              Europese Economische Ruimte (EER), tenzij anders overeengekomen.
              Bij gebruik van AI-modelproviders buiten de EER (zoals OpenAI of
              Anthropic) kan gegevensverwerking buiten de EER plaatsvinden.
              Opdrachtgever stemt hiermee in.
            </p>
          </div>
        </section>

        {/* Article 12 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 12 — Overmacht
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>12.1</strong> ZeroCode is niet gehouden tot nakoming van
              enige verplichting indien zij daartoe verhinderd is als gevolg van
              overmacht.
            </p>
            <p>
              <strong>12.2</strong> Onder overmacht wordt onder meer verstaan:
              storingen bij derden (waaronder WhatsApp, Meta, cloud-providers,
              AI-leveranciers), internetuitval, stroomuitval,
              overheidsmaatregelen, en pandemieën.
            </p>
            <p>
              <strong>12.3</strong> Indien de overmacht langer dan 60 dagen
              voortduurt, zijn beide partijen gerechtigd de overeenkomst te
              ontbinden.
            </p>
          </div>
        </section>

        {/* Article 13 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 13 — Wijzigingen
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>13.1</strong> ZeroCode behoudt zich het recht voor deze
              algemene voorwaarden te wijzigen. Gewijzigde voorwaarden treden in
              werking 30 dagen na bekendmaking aan Opdrachtgever.
            </p>
            <p>
              <strong>13.2</strong> Indien Opdrachtgever niet instemt met de
              gewijzigde voorwaarden, heeft deze het recht de overeenkomst op te
              zeggen per de datum van inwerkingtreding.
            </p>
          </div>
        </section>

        {/* Article 14 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 14 — Toepasselijk Recht en Geschillen
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>14.1</strong> Op alle overeenkomsten tussen ZeroCode en
              Opdrachtgever is Nederlands recht van toepassing.
            </p>
            <p>
              <strong>14.2</strong> Geschillen worden bij uitsluiting voorgelegd
              aan de bevoegde rechter in het arrondissement Limburg.
            </p>
          </div>
        </section>

        {/* Footer note */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="text-warm-400 text-sm leading-relaxed">
            <strong>ZeroCode Ventures</strong> — Parkstad, Zuid-Limburg
          </p>
          <p className="text-warm-500 text-sm mt-4 italic">
            Deze algemene voorwaarden zijn opgesteld ten behoeve van
            B2B-dienstverlening (bedrijf-naar-bedrijf). De Dienst wordt
            uitsluitend aangeboden aan ondernemers in de zin van artikel 6:231
            sub c BW. Deze voorwaarden zijn niet bedoeld voor consumenten.
          </p>
        </div>
      </main>
    </div>
  );
}
