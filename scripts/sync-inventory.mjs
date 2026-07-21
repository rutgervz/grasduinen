/**
 * Build-time inventory sync.
 *
 * Reads partner Discogs usernames from data/partners.json (or the
 * PARTNER_SELLERS env var, comma-separated) and fetches each partner's
 * public "For Sale" inventory from the Discogs API. Writes the combined
 * result to data/listings.json for the static build to consume.
 *
 * Falls back to data/listings.sample.json when no partners are configured
 * or the API is unavailable, so the build never breaks.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");
const OUT_FILE = path.join(ROOT, "data", "listings.json");
const SAMPLE_FILE = path.join(ROOT, "data", "listings.sample.json");
const PARTNERS_FILE = path.join(ROOT, "data", "partners.json");

const USER_AGENT =
  "TheWhiteRabbit/0.1 +https://rutgervz.github.io/grasduinen (inventory sync)";
const PER_PAGE = 100;
const MAX_PAGES_PER_SELLER = 3;

function splitDescription(description) {
  // Discogs release descriptions look like "Artist - Title (LP, Album)".
  const match = /^(.*?) - (.*)$/.exec(description ?? "");
  if (!match) return { artist: "Unknown artist", title: description ?? "" };
  return { artist: match[1], title: match[2] };
}

function mapListing(raw) {
  const release = raw.release ?? {};
  const fromDescription = splitDescription(release.description);
  return {
    id: String(raw.id),
    artist: release.artist || fromDescription.artist,
    title: release.title || fromDescription.title,
    year: release.year || null,
    format: release.format || "",
    condition: raw.condition || "",
    sleeveCondition: raw.sleeve_condition || "",
    price: raw.price
      ? { value: raw.price.value, currency: raw.price.currency }
      : null,
    seller: raw.seller?.username ?? "",
    uri: raw.uri ? `https://www.discogs.com${raw.uri}` : "",
  };
}

async function fetchSellerInventory(username) {
  const listings = [];
  for (let page = 1; page <= MAX_PAGES_PER_SELLER; page++) {
    const url =
      `https://api.discogs.com/users/${encodeURIComponent(username)}/inventory` +
      `?status=For+Sale&per_page=${PER_PAGE}&page=${page}&sort=listed&sort_order=desc`;
    const headers = { "User-Agent": USER_AGENT, Accept: "application/json" };
    // Discogs hides marketplace inventory from unauthenticated API calls,
    // so a token is effectively required for live data.
    if (process.env.DISCOGS_TOKEN) {
      headers.Authorization = `Discogs token=${process.env.DISCOGS_TOKEN}`;
    }
    const res = await fetch(url, { headers });
    if (!res.ok) {
      throw new Error(`Discogs API ${res.status} for seller ${username}`);
    }
    const body = await res.json();
    listings.push(...(body.listings ?? []).map(mapListing));
    const totalPages = body.pagination?.pages ?? 1;
    if (page >= totalPages) break;
  }
  return listings;
}

async function main() {
  let sellers = (process.env.PARTNER_SELLERS ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  if (sellers.length === 0) {
    try {
      const partners = JSON.parse(await readFile(PARTNERS_FILE, "utf8"));
      sellers = partners.sellers ?? [];
    } catch {
      sellers = [];
    }
  }

  if (sellers.length > 0) {
    try {
      const all = [];
      for (const seller of sellers) {
        const items = await fetchSellerInventory(seller);
        console.log(`Fetched ${items.length} listings from ${seller}`);
        all.push(...items);
      }
      if (all.length === 0) {
        throw new Error("no listings returned for any configured seller");
      }
      const payload = {
        source: "live",
        generatedAt: new Date().toISOString(),
        listings: all,
      };
      await writeFile(OUT_FILE, JSON.stringify(payload, null, 2));
      console.log(`Wrote ${all.length} live listings to data/listings.json`);
      return;
    } catch (err) {
      console.warn(`Live sync failed (${err.message}); falling back to sample data.`);
    }
  } else {
    console.log("No partner sellers configured; using sample data.");
  }

  const sample = await readFile(SAMPLE_FILE, "utf8");
  await writeFile(OUT_FILE, sample);
  console.log("Wrote sample listings to data/listings.json");
}

await main();
