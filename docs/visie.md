# Grasduinen — Visie

*Een AI-native vinylwinkel gebouwd op Discogs, gedreven door de curatie van White Rabbit.*

---

## Het concept in één alinea

Grasduinen is een compleet eigen, AI-native gebruikersinterface bovenop Discogs: een webwinkel waar je platen ontdekt zoals in een goede platenzaak — op smaak, met een luisterend oor en een deskundig advies — in plaats van te zoeken in een database. Verkopers op Discogs koppelen hun aanbod via OAuth; Grasduinen leest hun inventory uit via de API en presenteert die door één gecureerde, intelligente laag. De fysieke basis is de White Rabbit platenzaak, waar altijd live gedraaid wordt en waar alles wat draait direct koopbaar is via vertrouwde Discogs-partners.

## De drie pijlers

Grasduinen is een curatiemachine met drie gezichten die elkaar voeden:

### 1. De zaak (White Rabbit)

- Er wordt **altijd live gedraaid**. Alle platen die gedraaid worden zijn aanwezig: de **White Rabbit Selectie**.
- De zaak is een **showroom zonder voorraadrisico**: je neemt je plaat niet fysiek mee naar huis, maar krijgt hem opgestuurd via vertrouwde Discogs-partners. De prijs (en conditie/persing) kies je zelf uit het aanbod van de partners.
- **"Nu draait"** wordt een live feed: wat op de draaitafel ligt is op datzelfde moment online zichtbaar én koopbaar — de zaak als radiostation met een koopknop.
- De ruil die we de klant vragen (geen plaat direct mee) compenseren we uitvergroot: je kiest zelf conditie en prijs, je koopt bij een vertrouwde partner, en de zaak is een plek om te *ontdekken*.

### 2. De podcast (White Rabbit Presents)

- Bekende DJ's brengen een gecureerde selectie. Die platen komen in een lijst, zijn aanwezig in de zaak en koopbaar via Discogs.
- Elke aflevering wordt een **shopbare, permanente pagina**: beluisterbaar via de YouTube Matcher, elk item koopbaar via de partners. Content die jaren blijft converteren.
- De curatie van DJ's met autoriteit lost het **koudestartprobleem** van de discovery engine op: dit zijn de eerste knopen in de smaakgraaf.

### 3. Het platform (Grasduinen)

- De AI-native winkel die de curatie van zaak en podcast schaalt naar iedereen die niet fysiek langs kan komen — en die van elke bezoeker leert.

## Hoe het voor de gebruiker werkt (AI-native)

Discogs is een catalogus met een winkel eraan vastgeplakt: je moet al weten wat je zoekt. Grasduinen draait dat om — de winkel weet wie jij bent.

- **Intentie in plaats van filters.** "Warme jaren-70 soul met strijkers, onder de €25, liefst originele persing" → een gecureerde stapel, geen 4.000 zoekresultaten. Het zoekvak is een gesprek.
- **De discovery engine als digitale crate-digger.** Smaakprofiel uit collectie, wantlist, luister- en koopgedrag, plus bewust ingebouwde serendipiteit: zijstappen via sessiemuzikanten, labels, producers, steden. Elke aanbeveling met een *waarom* in gewone taal.
- **Luisteren vóór kopen: de YouTube Matcher** (reeds gebouwd). Elke listing is een luisterstation — de draaitafel in de hoek van de zaak, maar dan online. Discovery + horen + kopen in één flow.
- **De AI als vertrouwenspersoon.** De offer-kiezer toont per plaat de aanbiedingen van partners en legt uit: welke persing koop je écht, wat betekent "VG+ maar hoes heeft ringwear", is de prijs fair ten opzichte van de verkoophistorie.
- **Een agent die voor je blijft zoeken.** "Waarschuw me als deze onder de €30 in VG+ opduikt" — een wantlist met oordeel over prijs en conditie, geen domme notificatie.

## Het partnermodel

- Verkopers op Discogs **koppelen hun aanbod via OAuth**; Grasduinen leest hun inventory uit via de API.
- De partners vormen een **geselecteerde, vertrouwde club** — geen open marktplaats. Dat kwaliteitsmerk beschermt kopers én maakt lidmaatschap iets waard.
- Waardepropositie richting partners: de discovery engine verkoopt hun **long tail** — voorraad die op Discogs alleen gevonden wordt door wie er al naar zocht, wordt bij Grasduinen áángeboden aan wie de juiste smaak heeft. Plus AI-tooling: prijsadvies, vraaginzicht uit de smaakgraaf, listing-verrijking.
- Technisch voordeel: Discogs' ratelimiet geldt per token; elke partner brengt zijn eigen token mee, dus de synccapaciteit schaalt mee met het netwerk.
- **Voorraadversheid is heilig**: niets is dodelijker voor vertrouwen dan doorklikken naar een verkochte plaat. Frequent syncen én live verifiëren op het moment van klikken.

## De Discogs-strategie

Kernprincipe: **wees voor Discogs omzet, geen lek.**

- Discogs verdient ~9% aan elke marketplace-verkoop. In het doorklik-model (ontdekken bij Grasduinen, kopen op Discogs) is Grasduinen een gratis vraagmachine voor hun platform — precies de gewenste relatie. Een eigen checkout die verkopen weghaalt zou ons van partner tot concurrent maken; daarom niet.
- **Catalogus via de maandelijkse CC0-data-dumps**, niet via de API. De API alleen voor wat live moet: partner-inventories, prijzen, beschikbaarheid. Let op: afbeeldingen vallen níet onder CC0 — gebruiksvoorwaarden apart checken.
- **API-voorwaarden zichtbaar netjes volgen**: app formeel registreren, bronvermelding "Data provided by Discogs", geen branding die affiliatie suggereert, ratelimieten respecteren.
- **Transparant over OAuth**: alleen de scopes vragen die nodig zijn (inventory lezen) en partners uitleggen wat we wel en niet doen.
- **Eerst bewijslast, dan formeel contact.** Discogs heeft geen affiliate-programma of partnerloket. Werkwijze: maanden draaien, aantoonbaar GMV naar Discogs sturen, en dán het gesprek openen over hogere ratelimieten en een formele relatie — met cijfers, niet met plannen.
- **Afhankelijkheid afdekken**: Discogs heeft eerder API-functionaliteit versoberd. De verzekering is wat van ons is: smaakgraaf, curatie, het merk White Rabbit en directe partnerrelaties.

## Het verdienmodel

In één zin: **curatie als vraagmachine — partners betalen voor aantoonbaar gegenereerde verkopen**, met drie kleinere stromen eromheen.

### Stroom 1 — Partnercommissie op geattribueerde verkopen (kern)

- Koper ontdekt bij Grasduinen, koopt via doorklik op Discogs. Discogs krijgt gewoon zijn fee — geen conflict.
- De verkoop is aantoonbaar door Grasduinen gegenereerd: doorklik-data gematcht met orders (zichtbaar via de OAuth-koppeling).
- De commissieafspraak (indicatief 5–8%) is **rechtstreeks met de partner** — voor hem geen kostenpost maar marketing: long-tail-verkopen die anders niet gebeurd waren.
- Rekenvoorbeeld: gemiddelde order €30 × 6% = €1,80 per verkoop. 20 partners × 50 geattribueerde verkopen/maand ≈ €1.800/maand. Conclusie: schaal in partners en conversie is de knop waar alles om draait.

### Stroom 2 — Partnerabonnement voor tooling

- €25–75/maand voor lidmaatschap van het vertrouwde netwerk plus AI-tooling (prijsadvies, vraaginzicht, listing-verrijking).
- Introduceren zodra de tooling bewezen waarde heeft; commissie eerst (geen toetredingsdrempel, verdienen alleen als zij verdienen).

### Stroom 3 — Consumenten-premium (later)

- €5–10/maand: wantlist-agent op prijs én conditie, persing-analyse, vroege toegang tot Presents-selecties.
- Pas in fase 3: te vroeg een betaalmuur opwerpen doodt de smaakgraaf die het product juist nodig heeft.

### Stroom 4 — Het merk White Rabbit

- De zaak: events, listening sessions, ervaring.
- De podcast: sponsoring zodra er publiek is.
- Later: gecureerde drops en samenwerkingen met labels via de Presents-lijn.

### Fasering

| Fase | Focus | Geld |
|---|---|---|
| 1 | Bewijzen, niet verdienen: platform live met handvol partners, gratis. Eén KPI: geattribueerde verkopen. | — |
| 2 | Partnercommissie aanzetten met bewijs in de hand. Partners die afvallen: prima, het netwerk moet gecureerd blijven. | Commissie |
| 3 | Verbreden: partnerabonnement, consumenten-premium, podcast-sponsoring, formeel gesprek met Discogs. | Alle stromen |

## De flywheel

Live sets en podcast leveren curatie → curatie voedt de discovery engine → online gebruikers krijgen winkelkwaliteit-aanbevelingen → dat genereert verkopen voor partners → meer partners betekent diepere catalogus → betere selectie om te draaien en te cureren.

Het onkopieerbare bezit: **het merk White Rabbit, de curatie, de smaakgraaf en de partnerrelaties.** Geen voorraadrisico, geen fulfilment, geen betalingsverkeer — de kapitaalintensieve delen liggen bij Discogs en de partners. De keerzijde: kleine marge per transactie, dus het model werkt bij schaal — vandaar dat zaak en podcast als publieksmachines zo zwaar wegen.

## Bouwvolgorde

1. **Partner-onboarding** met Discogs OAuth (alleen inventory-leesrechten).
2. **Inventory-sync-pipeline** naar Supabase: periodiek pollen per partner-token, live verificatie bij doorklik.
3. **Catalogusspiegel** uit de CC0-data-dumps, verrijkt met persingen en prijshistorie.
4. **YouTube Matcher integreren** (bestaande functie) — elke listing een luisterstation.
5. **Selecties als kernentiteit**: White Rabbit Selectie, Presents-afleveringen, "nu draait" — met een bijna moeiteloze invoerflow voor de zaak (tracklijstje of hoes scannen).
6. **Offer-kiezer** met AI-uitleg (persing, conditie, prijs-fairness) en doorklik-attributie.
7. **QR-flows** in de zaak: van fysieke plaat naar online listing.
8. **Discovery engine**: smaakprofielen (embeddings), serendipiteit, "waarom"-uitleg.
9. **Wantlist-agent** met oordeel over prijs en conditie.

Beoogde stack: Next.js + Supabase (data/auth) + Vercel (hosting). Kostendiscipline: embeddings en klassieke ranking voor het zware werk; LLM's alleen voor gesprekken en uitleg.

---

*Elke verkoop begint met een plaat die ergens gedraaid wordt.*
