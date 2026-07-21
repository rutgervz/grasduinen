# Grasduinen — Vision

*An AI-native vinyl record shop built on Discogs, driven by White Rabbit's curation.*

---

## The concept in one paragraph

Grasduinen (Dutch for "browsing / crate-digging") is a fully custom, AI-native user interface on top of Discogs: a web shop where you discover records the way you would in a great record store — by taste, with a listening ear and expert advice — instead of searching a database. Sellers on Discogs connect their inventory via OAuth; Grasduinen reads their stock through the API and presents it through a single curated, intelligent layer. The physical foundation is the White Rabbit record store, where music is always playing live and everything on the turntable can be bought instantly through trusted Discogs partners.

## The three pillars

Grasduinen is a curation machine with three faces that feed each other:

### 1. The store (White Rabbit)

- Music is **always playing live**. Every record played is present in the store: the **White Rabbit Selection**.
- The store is a **showroom without inventory risk**: you don't carry your record home — it is shipped to you by trusted Discogs partners. You choose the price (and condition/pressing) yourself from the partners' offers.
- **"Now playing"** becomes a live feed: whatever is on the turntable is visible and buyable online at that same moment — the store as a radio station with a buy button.
- The trade-off we ask of the customer (no record to take home immediately) is compensated loudly: you pick your own condition and price, you buy from a trusted partner, and the store remains a place to *discover*.

### 2. The podcast (White Rabbit Presents)

- Well-known DJs bring a curated selection. Those records go on a list, are present in the store, and are buyable via Discogs.
- Every episode becomes a **shoppable, permanent page**: listenable through the YouTube Matcher, every item buyable through the partners. Content that keeps converting for years.
- Curation by DJs with authority solves the **cold-start problem** of the discovery engine: these are the first nodes in the taste graph.

### 3. The platform (Grasduinen)

- The AI-native shop that scales the curation of the store and the podcast to everyone who can't drop by physically — and learns from every visitor.

## How it works for the user (AI-native)

Discogs is a catalog with a shop bolted on: you have to know what you're looking for. Grasduinen flips that — the shop knows who you are.

- **Intent instead of filters.** "Warm seventies soul with strings, under €25, preferably an original pressing" → a curated stack, not 4,000 search results. The search box is a conversation.
- **The discovery engine as a digital crate-digger.** A taste profile built from collection, wantlist, listening and buying behaviour, plus deliberately engineered serendipity: side-steps via session musicians, labels, producers, cities. Every recommendation comes with a *why* in plain language.
- **Listen before you buy: the YouTube Matcher** (already built). Every listing is a listening station — the turntable in the corner of the shop, but online. Discovery + listening + buying in one flow.
- **The AI as a trusted advisor.** The offer picker shows each record's partner offers and explains: which pressing are you actually buying, what does "VG+ but sleeve has ringwear" really mean, is the price fair against sales history.
- **An agent that keeps digging for you.** "Alert me when this drops below €30 in VG+" — a wantlist with judgement about price and condition, not a dumb notification.

## The partner model

- Sellers on Discogs **connect their inventory via OAuth**; Grasduinen reads their stock through the API.
- Partners form a **selected, trusted circle** — not an open marketplace. That quality mark protects buyers and makes membership worth something.
- Value proposition to partners: the discovery engine sells their **long tail** — stock that on Discogs is only found by someone already searching for it gets *offered* on Grasduinen to someone with the right taste. Plus AI tooling: pricing advice, demand insight from the taste graph, listing enrichment.
- Technical advantage: Discogs' rate limit applies per token; every partner brings their own token, so sync capacity scales with the network.
- **Inventory freshness is sacred**: nothing kills trust faster than clicking through to a record that's already sold. Sync frequently and verify live at the moment of the click.

## The Discogs strategy

Core principle: **be revenue for Discogs, not a leak.**

- Discogs earns ~9% on every marketplace sale. In the click-through model (discover on Grasduinen, buy on Discogs), Grasduinen is a free demand machine for their platform — exactly the relationship we want. Our own checkout that pulls sales away would turn us from partner into competitor; therefore, no.
- **Catalog via the monthly CC0 data dumps**, not via the API. The API only for what must be live: partner inventories, prices, availability. Note: images are *not* CC0 — check their usage terms separately.
- **Follow the API terms visibly well**: register the app formally, show the "Data provided by Discogs" attribution, no branding that suggests affiliation, respect rate limits.
- **Transparent about OAuth**: request only the scopes we need (read inventory) and explain to partners what we do and don't do.
- **Evidence first, then formal contact.** Discogs has no affiliate programme or partner desk. Approach: run for months, demonstrably send GMV to Discogs, then open the conversation about higher rate limits and a formal relationship — with numbers, not plans.
- **Hedge the dependency**: Discogs has trimmed API functionality before. Our insurance is what we own: the taste graph, the curation, the White Rabbit brand and direct partner relationships.

## The business model

In one sentence: **curation as a demand machine — partners pay for demonstrably generated sales**, with three smaller streams around it.

### Stream 1 — Partner commission on attributed sales (core)

- The buyer discovers on Grasduinen and buys via click-through on Discogs. Discogs simply gets its fee — no conflict.
- The sale is demonstrably generated by Grasduinen: click-through data matched to orders (visible through the OAuth connection).
- The commission agreement (indicatively 5–8%) is **directly with the partner** — for them it's not a cost but marketing: long-tail sales that otherwise would not have happened.
- Back-of-envelope: average order €30 × 6% = €1.80 per sale. 20 partners × 50 attributed sales/month ≈ €1,800/month. Conclusion: scale in partners and conversion is the dial everything turns on.

### Stream 2 — Partner subscription for tooling

- €25–75/month for membership of the trusted network plus AI tooling (pricing advice, demand insight, listing enrichment).
- Introduce once the tooling has proven value; commission first (no entry barrier, we only earn when they earn).

### Stream 3 — Consumer premium (later)

- €5–10/month: the wantlist agent with judgement on price and condition, pressing analysis, early access to Presents selections.
- Phase 3, not earlier: putting up a paywall too soon kills the taste graph the product needs.

### Stream 4 — The White Rabbit brand

- The store: events, listening sessions, experience.
- The podcast: sponsorship once there is an audience.
- Later: curated drops and label collaborations through the Presents line.

### Phasing

| Phase | Focus | Money |
|---|---|---|
| 1 | Prove, don't earn: platform live with a handful of partners, free. One KPI: attributed sales. | — |
| 2 | Switch on partner commission with evidence in hand. Partners who drop out: fine, the network must stay curated. | Commission |
| 3 | Broaden: partner subscription, consumer premium, podcast sponsorship, the formal conversation with Discogs. | All streams |

## The flywheel

Live sets and the podcast produce curation → curation feeds the discovery engine → online users get store-quality recommendations → that generates sales for partners → more partners means a deeper catalog → a better selection to play and curate.

The uncopyable assets: **the White Rabbit brand, the curation, the taste graph and the partner relationships.** No inventory risk, no fulfilment, no payment processing — the capital-intensive parts sit with Discogs and the partners. The flip side: small margin per transaction, so the model works at scale — which is why the store and the podcast weigh so heavily as audience machines.

## Build order

1. **Partner onboarding** with Discogs OAuth (inventory read scope only).
2. **Inventory sync pipeline** into Supabase: periodic polling per partner token, live verification on click-through.
3. **Catalog mirror** from the CC0 data dumps, enriched with pressings and price history.
4. **Integrate the YouTube Matcher** (existing feature) — every listing a listening station.
5. **Selections as a core entity**: the White Rabbit Selection, Presents episodes, "now playing" — with a near-effortless input flow for the store (type a tracklist or scan a sleeve).
6. **Offer picker** with AI explanation (pressing, condition, price fairness) and click-through attribution.
7. **QR flows** in the store: from physical record to online listing.
8. **Discovery engine**: taste profiles (embeddings), serendipity, "why" explanations.
9. **Wantlist agent** with judgement on price and condition.

Intended stack: Next.js + Supabase (data/auth) + Vercel (hosting). Cost discipline: embeddings and classic ranking for the heavy lifting; LLMs only for conversations and explanations.

---

*Every sale starts with a record being played somewhere.*
