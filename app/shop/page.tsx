import type { Metadata } from "next";
import Link from "next/link";
import inventory from "@/data/listings.json";

export const metadata: Metadata = {
  title: "Shop — The White Rabbit",
  description:
    "Browse records from trusted Discogs partners. Every listing links straight to the seller on Discogs.",
};

type Listing = {
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

export default function Shop() {
  const listings = inventory.listings as Listing[];
  const isSample = inventory.source === "sample";

  return (
    <>
      <header>
        <div className="wrap header-inner">
          <Link href="/" className="wordmark">
            The White <span>Rabbit</span>
          </Link>
          <nav className="nav">
            <Link href="/shop/">Shop</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="shop-intro">
          <div className="wrap">
            <div className="kicker">The racks</div>
            <h2>Records from trusted partners</h2>
            <p className="lede">
              Everything below is for sale right now by Discogs sellers in our
              network. Click through to buy directly from the seller on
              Discogs — you pick the copy, the condition and the price.
            </p>
            {isSample && (
              <p className="notice">
                Demo inventory — sample data shown until the first partner
                connects their Discogs account.
              </p>
            )}
          </div>
        </section>

        <section className="shop">
          <div className="wrap">
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
                    <a
                      href={listing.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Discogs →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>
            The White Rabbit — an independent, AI-native record shop. Not
            affiliated with Discogs.
          </p>
          <p>
            Data provided by{" "}
            <a
              href="https://www.discogs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discogs
            </a>
            . Open source under GPL-3.0.
          </p>
        </div>
      </footer>
    </>
  );
}
