import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | John Automations",
  description:
    "Algemene voorwaarden van John Automations voor AI-medewerker dienstverlening — geldig voor zowel consumenten als zakelijke klanten.",
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
            Laatst bijgewerkt: 21 februari 2026
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 font-bricolage">
          Algemene Voorwaarden
        </h1>
        <p className="text-warm-400 mb-4 text-lg">John Automations</p>
        <p className="text-warm-500 text-sm mb-12 leading-relaxed">
          Deze voorwaarden zijn van toepassing op alle klanten van John Automations, 
          zowel <strong className="text-warm-300">consumenten</strong> (particulieren) als{" "}
          <strong className="text-warm-300">zakelijke klanten (B2B)</strong>. Waar van toepassing 
          gelden voor consumenten aanvullende wettelijke rechten op grond van het Nederlands consumentenrecht.
        </p>

        {/* Article 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 1 — Definities
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>1.1</strong> <strong>Opdrachtnemer</strong>: John
              Automations, gevestigd te Parkstad, Zuid-Limburg, hierna
              &ldquo;John Automations&rdquo;.
            </p>
            <p>
              <strong>1.2</strong> <strong>Klant</strong>: de natuurlijke persoon 
              of rechtspersoon die een overeenkomst aangaat met John Automations.
            </p>
            <p>
              <strong>1.3</strong> <strong>Consument</strong>: een klant die een 
              natuurlijke persoon is en niet handelt in de uitoefening van een beroep 
              of bedrijf (art. 6:230g BW).
            </p>
            <p>
              <strong>1.4</strong> <strong>Zakelijke klant</strong>: een klant die 
              handelt in de uitoefening van een beroep of bedrijf.
            </p>
            <p>
              <strong>1.5</strong> <strong>Dienst</strong>: het opzetten,
              configureren en onderhouden van een AI-medewerker (geautomatiseerd
              berichtensysteem via WhatsApp of andere kanalen) ten behoeve van
              Klant.
            </p>
            <p>
              <strong>1.6</strong> <strong>AI-medewerker</strong>: de door
              John Automations geconfigureerde digitale assistent die namens
              Klant communiceert.
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
              John Automations.
            </p>
            <p>
              <strong>2.2</strong> Voorafgaand aan het sluiten van de
              overeenkomst worden deze algemene voorwaarden aan Klant ter
              hand gesteld. Bij elektronische dienstverlening worden de
              voorwaarden langs elektronische weg ter beschikking gesteld zodat 
              Klant deze kan opslaan voor latere kennisneming (art. 6:234 lid 2 BW).
            </p>
            <p>
              <strong>2.3</strong> Afwijkingen van deze voorwaarden zijn
              uitsluitend geldig indien schriftelijk overeengekomen.
            </p>
            <p>
              <strong>2.4</strong> De toepasselijkheid van eventuele inkoop- of
              andere voorwaarden van zakelijke klanten wordt uitdrukkelijk van de
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
              <strong>3.1</strong> Alle aanbiedingen en offertes van John
              Automations zijn vrijblijvend en geldig gedurende 14 dagen, tenzij anders
              vermeld.
            </p>
            <p>
              <strong>3.2</strong> Een overeenkomst komt tot stand op het moment
              dat Klant een offerte schriftelijk (inclusief e-mail of
              WhatsApp) accepteert.
            </p>
            <p>
              <strong>3.3</strong> John Automations behoudt zich het recht voor een
              opdracht zonder opgaaf van reden te weigeren.
            </p>
          </div>
        </section>

        {/* Article 4 — Herroepingsrecht (consumers only) */}
        <section className="mb-10 border border-brand/20 rounded-xl p-6 bg-brand/5">
          <h2 className="text-xl font-semibold text-brand mb-1">
            Artikel 4 — Herroepingsrecht <span className="text-sm font-normal text-warm-400">(alleen voor consumenten)</span>
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed mt-4">
            <p>
              <strong>4.1</strong> Als consument heeft u het recht om de overeenkomst 
              binnen <strong>14 dagen</strong> na het sluiten ervan zonder opgaaf van reden 
              te herroepen (het herroepingsrecht), conform art. 6:230o BW.
            </p>
            <p>
              <strong>4.2</strong> Om het herroepingsrecht uit te oefenen, dient u ons 
              via een ondubbelzinnige verklaring (bijv. per e-mail) op de hoogte te stellen 
              van uw beslissing de overeenkomst te herroepen.
            </p>
            <p>
              <strong>4.3</strong> Indien u uitdrukkelijk verzoekt dat de uitvoering van 
              de dienst begint binnen de herroepingstermijn van 14 dagen, en u de dienst 
              volledig heeft ontvangen, vervalt uw herroepingsrecht zodra de dienst volledig 
              is uitgevoerd.
            </p>
            <p>
              <strong>4.4</strong> Bij herroeping ontvangt u eventueel reeds betaalde bedragen 
              zo spoedig mogelijk, uiterlijk binnen 14 dagen, terug — met aftrek van kosten voor 
              diensten die reeds zijn verricht op uw uitdrukkelijk verzoek.
            </p>
          </div>
        </section>

        {/* Article 5 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 5 — Uitvoering van de Dienst
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>5.1</strong> John Automations zal de Dienst naar beste inzicht en
              vermogen uitvoeren, conform de eisen van goed vakmanschap. De
              verplichting betreft een{" "}
              <strong>inspanningsverplichting</strong> en uitdrukkelijk geen
              resultaatsverplichting.
            </p>
            <p>
              <strong>5.2</strong> De AI-medewerker is een geautomatiseerd
              systeem dat op basis van kunstmatige intelligentie antwoorden
              genereert. John Automations garandeert <strong>niet</strong> dat de door de
              AI-medewerker gegeven antwoorden altijd volledig, correct of
              foutloos zijn.
            </p>
            <p>
              <strong>5.3</strong> Klant is zelf verantwoordelijk voor
              het controleren en goedkeuren van de informatie die de
              AI-medewerker verstrekt. Klant dient regelmatig de gesprekken 
              van de AI-medewerker te monitoren.
            </p>
            <p>
              <strong>5.4</strong> John Automations is afhankelijk van diensten van
              derden (waaronder WhatsApp/Meta, AI-modelproviders zoals OpenAI en
              Anthropic, en cloud-infrastructuur). John Automations heeft geen invloed op
              de beschikbaarheid of het beleid van deze diensten en is niet 
              aansprakelijk voor storingen of wijzigingen door derden.
            </p>
          </div>
        </section>

        {/* Article 6 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 6 — Verplichtingen Klant
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>6.1</strong> Klant dient tijdig alle informatie te
              verstrekken die nodig is voor het correct configureren van de
              AI-medewerker.
            </p>
            <p>
              <strong>6.2</strong> Klant is verantwoordelijk voor de
              juistheid, volledigheid en betrouwbaarheid van de aangeleverde
              informatie.
            </p>
            <p>
              <strong>6.3</strong> Zakelijke klanten zijn zelf verantwoordelijk voor
              naleving van de AVG en overige privacywetgeving met betrekking tot 
              persoonsgegevens van hun eigen klanten.
            </p>
          </div>
        </section>

        {/* Article 7 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 7 — Aansprakelijkheid
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>7.1</strong> John Automations is <strong>uitsluitend</strong>{" "}
              aansprakelijk voor directe schade die het rechtstreekse gevolg is
              van een aantoonbare toerekenbare tekortkoming, mits Klant John Automations 
              schriftelijk in gebreke heeft gesteld met een redelijke termijn van ten minste 
              14 dagen, en John Automations ook na die termijn tekortschiet.
            </p>
            <p>
              <strong>7.2</strong> De totale aansprakelijkheid van John Automations richting 
              zakelijke klanten is te allen tijde beperkt tot{" "}
              <strong>het bedrag dat in de drie (3) maanden voorafgaand aan het
              schadeveroorzakende feit is betaald</strong>, met een maximum van €1.000.
            </p>
            <p>
              <strong>7.3</strong> Voor consumenten gelden de wettelijke aansprakelijkheidsregels 
              conform het Nederlands consumentenrecht. Beperkingen als bedoeld in artikel 7.2 
              gelden niet voor consumenten voor zover de wet dit niet toestaat.
            </p>
            <p>
              <strong>7.4</strong> John Automations is <strong>nooit</strong>{" "}
              aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of 
              reputatieschade.
            </p>
          </div>
        </section>

        {/* Article 8 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 8 — Prijzen en Betaling
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>8.1</strong> Prijzen voor consumenten zijn inclusief BTW. 
              Prijzen voor zakelijke klanten zijn exclusief BTW, tenzij uitdrukkelijk 
              anders vermeld.
            </p>
            <p>
              <strong>8.2</strong> John Automations hanteert een eenmalige
              setup-vergoeding en een maandelijkse abonnementsvergoeding, zoals
              vastgelegd in de offerte.
            </p>
            <p>
              <strong>8.3</strong> Betaling dient te geschieden binnen 14 dagen
              na factuurdatum, tenzij anders overeengekomen.
            </p>
            <p>
              <strong>8.4</strong> Bij niet-tijdige betaling is Klant in verzuim. 
              Voor zakelijke klanten is John Automations gerechtigd de wettelijke 
              handelsrente in rekening te brengen. Voor consumenten geldt de wettelijke rente.
            </p>
          </div>
        </section>

        {/* Article 9 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 9 — Duur en Opzegging
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>9.1</strong> De overeenkomst wordt aangegaan voor
              onbepaalde tijd met een minimale looptijd van drie (3) maanden,
              tenzij anders overeengekomen.
            </p>
            <p>
              <strong>9.2</strong> Na de minimale looptijd kan de overeenkomst
              door beide partijen schriftelijk worden opgezegd met inachtneming
              van een opzegtermijn van één (1) kalendermaand.
            </p>
            <p>
              <strong>9.3</strong> Bij opzegging door Klant vindt geen
              restitutie plaats van reeds betaalde bedragen, tenzij Klant een 
              consument is en recht heeft op herroeping conform artikel 4.
            </p>
            <p>
              <strong>9.4</strong> John Automations is gerechtigd de overeenkomst met
              onmiddellijke ingang te ontbinden indien Klant in verzuim is met 
              betaling of in strijd handelt met deze voorwaarden.
            </p>
          </div>
        </section>

        {/* Article 10 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 10 — Intellectueel Eigendom
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>10.1</strong> Alle intellectuele eigendomsrechten op de door
              John Automations ontwikkelde software, configuraties, templates en
              documentatie berusten bij John Automations.
            </p>
            <p>
              <strong>10.2</strong> Klant verkrijgt een niet-exclusief,
              niet-overdraagbaar gebruiksrecht voor de duur van de overeenkomst.
            </p>
            <p>
              <strong>10.3</strong> Het is Klant niet toegestaan de
              AI-medewerker of de onderliggende configuratie te kopiëren, aan te
              passen, of aan derden ter beschikking te stellen.
            </p>
          </div>
        </section>

        {/* Article 11 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 11 — Geheimhouding
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>11.1</strong> Beide partijen verplichten zich tot
              geheimhouding van alle vertrouwelijke informatie die zij in het
              kader van de overeenkomst van elkaar ontvangen.
            </p>
            <p>
              <strong>11.2</strong> Deze geheimhoudingsverplichting geldt ook na
              beëindiging van de overeenkomst.
            </p>
          </div>
        </section>

        {/* Article 12 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 12 — Privacy en Gegevensverwerking
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>12.1</strong> John Automations verwerkt persoonsgegevens in
              overeenstemming met de AVG.
            </p>
            <p>
              <strong>12.2</strong> Voor zover John Automations bij de uitvoering van de
              Dienst persoonsgegevens verwerkt namens een zakelijke klant, treedt
              John Automations op als verwerker in de zin van de AVG. Partijen zullen 
              in dat geval een verwerkersovereenkomst sluiten conform art. 28 AVG.
            </p>
            <p>
              <strong>12.3</strong> John Automations slaat gegevens op binnen de
              Europese Economische Ruimte (EER), tenzij anders overeengekomen.
              Bij gebruik van AI-modelproviders buiten de EER (zoals OpenAI of
              Anthropic) kan gegevensverwerking buiten de EER plaatsvinden.
              Klant stemt hiermee in.
            </p>
          </div>
        </section>

        {/* Article 13 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 13 — Overmacht
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>13.1</strong> John Automations is niet gehouden tot nakoming van
              enige verplichting indien zij daartoe verhinderd is als gevolg van
              overmacht, waaronder storingen bij derden, internetuitval, stroomuitval,
              overheidsmaatregelen en pandemieën.
            </p>
            <p>
              <strong>13.2</strong> Indien de overmacht langer dan 60 dagen
              voortduurt, zijn beide partijen gerechtigd de overeenkomst te
              ontbinden. Consumenten hebben in dat geval recht op terugbetaling 
              van vooruitbetaalde bedragen.
            </p>
          </div>
        </section>

        {/* Article 14 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 14 — Wijzigingen
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>14.1</strong> John Automations behoudt zich het recht voor deze
              algemene voorwaarden te wijzigen. Gewijzigde voorwaarden treden in
              werking 30 dagen na bekendmaking aan Klant.
            </p>
            <p>
              <strong>14.2</strong> Indien Klant niet instemt met de
              gewijzigde voorwaarden, heeft Klant het recht de overeenkomst op te
              zeggen per de datum van inwerkingtreding. Voor consumenten geldt 
              het herroepingsrecht conform artikel 4.
            </p>
          </div>
        </section>

        {/* Article 15 */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-brand mb-4">
            Artikel 15 — Toepasselijk Recht en Geschillen
          </h2>
          <div className="space-y-3 text-warm-200 leading-relaxed">
            <p>
              <strong>15.1</strong> Op alle overeenkomsten is Nederlands recht van toepassing.
            </p>
            <p>
              <strong>15.2</strong> Geschillen met zakelijke klanten worden bij uitsluiting 
              voorgelegd aan de bevoegde rechter in het arrondissement Limburg.
            </p>
            <p>
              <strong>15.3</strong> Consumenten kunnen een geschil ook voorleggen aan de 
              bevoegde rechter van hun woonplaats, of gebruik maken van de Europese 
              ODR-platform voor online geschillenbeslechting:{" "}
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                className="text-brand hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                ec.europa.eu/consumers/odr
              </a>.
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 mt-12">
          <p className="text-warm-400 text-sm leading-relaxed">
            <strong>John Automations</strong> — Parkstad, Zuid-Limburg
          </p>
          <p className="text-warm-400 text-sm mt-1">
            E-mail:{" "}
            <a href="mailto:john.automations.nl@gmail.com" className="text-brand hover:underline">
              john.automations.nl@gmail.com
            </a>
          </p>
          <p className="text-warm-500 text-sm mt-4 italic">
            Deze algemene voorwaarden zijn van toepassing op zowel consumenten als zakelijke klanten. 
            Versie 2.0 — geldig per 21 februari 2026.
          </p>
        </div>
      </main>
    </div>
  );
}
