"use client";

import { useMemo, useState } from "react";

export type Listing = {
  id: string;
  artist: string;
  title: string;
  year: number | null;
  format: string;
  condition: string;
  sleeveCondition: string;
  price: { value: number; currency: string } | null;
  seller: string;
  uri: string;
};

export type Inventory = {
  source: string;
  generatedAt: string | null;
  listings: Listing[];
};

const PRICE_BUCKETS = [
  { key: "all", label: "Any price" },
  { key: "lt25", label: "Under €25" },
  { key: "25to40", label: "€25–40" },
  { key: "gt40", label: "Over €40" },
] as const;

function formatPrice(price: Listing["price"]) {
  if (!price) return "—";
  const symbol =
    price.currency === "EUR" ? "€" : price.currency === "USD" ? "$" : `${price.currency} `;
  return `${symbol}${price.value.toFixed(2)}`;
}

function shortCondition(condition: string) {
  const match = /\(([^)]+)\)/.exec(condition);
  return match ? match[1] : condition;
}

export default function Racks({ inventory }: { inventory: Inventory }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");
  const [bucket, setBucket] = useState<string>("all");

  const listings = useMemo(() => {
    const q = query.trim().toLowerCase();
    let items = inventory.listings.filter((l) => {
      if (q) {
        const haystack = `${l.artist} ${l.title} ${l.seller} ${l.format}`.toLowerCase();
        if (!q.split(/\s+/).every((word) => haystack.includes(word))) return false;
      }
      const value = l.price?.value ?? null;
      if (bucket === "lt25") return value !== null && value < 25;
      if (bucket === "25to40") return value !== null && value >= 25 && value <= 40;
      if (bucket === "gt40") return value !== null && value > 40;
      return true;
    });
    if (sort === "price-asc") {
      items = [...items].sort(
        (a, b) => (a.price?.value ?? Infinity) - (b.price?.value ?? Infinity)
      );
    } else if (sort === "price-desc") {
      items = [...items].sort(
        (a, b) => (b.price?.value ?? -Infinity) - (a.price?.value ?? -Infinity)
      );
    } else if (sort === "artist") {
      items = [...items].sort((a, b) => a.artist.localeCompare(b.artist));
    }
    return items;
  }, [inventory.listings, query, sort, bucket]);

  return (
    <div className="wrap racks">
      <div className="toolbar">
        <input
          type="search"
          className="search"
          placeholder="Search the racks — artist, title, seller…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search the racks"
        />
        <select
          className="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          aria-label="Sort listings"
        >
          <option value="latest">Latest arrivals</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="artist">Artist A–Z</option>
        </select>
      </div>

      <div className="chips" role="group" aria-label="Filter by price">
        {PRICE_BUCKETS.map((b) => (
          <button
            key={b.key}
            type="button"
            className={bucket === b.key ? "chip active" : "chip"}
            onClick={() => setBucket(b.key)}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div className="racks-status">
        <span>
          {listings.length} record{listings.length === 1 ? "" : "s"} in the racks
        </span>
        {inventory.source === "sample" && (
          <span className="badge">demo inventory</span>
        )}
      </div>

      {listings.length === 0 ? (
        <p className="empty">
          Nothing in the racks matches that. Try fewer words, or clear the
          filters.
        </p>
      ) : (
        <div className="grid">
          {listings.map((listing) => (
            <article className="card listing" key={listing.id}>
              <h3>
                {listing.artist} — {listing.title}
              </h3>
              <p className="meta">
                {[listing.year, listing.format].filter(Boolean).join(" · ")}
              </p>
              <p className="meta">
                Media {shortCondition(listing.condition)} · Sleeve{" "}
                {shortCondition(listing.sleeveCondition)}
              </p>
              <div className="listing-footer">
                <span className="price">{formatPrice(listing.price)}</span>
                <a href={listing.uri} target="_blank" rel="noopener noreferrer">
                  Buy on Discogs →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
