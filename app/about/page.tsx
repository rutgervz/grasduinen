import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — The White Rabbit",
};

export default function About() {
  return (
    <div className="wrap about">
      <div className="page-head">
        <h1>A record shop that knows your taste</h1>
        <p>
          The White Rabbit is an AI-native vinyl shop built on Discogs.
          Discover records the way you would in a great record store — by
          taste, with a listening ear and expert advice — and buy them from
          trusted partners.
        </p>
      </div>

      <section>
        <div className="kicker">How it works</div>
        <h2>Digging, without the dust</h2>
        <p className="lede">
          Discogs is a catalog with a shop bolted on: you have to know what
          you&rsquo;re looking for. The White Rabbit flips that — the shop
          knows who you are.
        </p>
        <div className="grid">
          <div className="card">
            <div className="step">01 — Discover</div>
            <h3>Say what you feel, not what you know</h3>
            <p>
              &ldquo;Warm seventies soul with strings, under €25, preferably an
              original pressing.&rdquo; You get a curated stack, not four
              thousand search results — and every recommendation tells you{" "}
              <em>why</em>.
            </p>
          </div>
          <div className="card">
            <div className="step">02 — Listen</div>
            <h3>Hear it before you buy it</h3>
            <p>
              Our YouTube Matcher turns every listing into a listening station
              — the turntable in the corner of the shop, but online.
            </p>
          </div>
          <div className="card">
            <div className="step">03 — Choose</div>
            <h3>Pick your copy, your price</h3>
            <p>
              The same record exists in different pressings, conditions and
              prices across our trusted Discogs partners. We explain the
              differences in plain language; you choose. Your record ships
              straight to your door.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="kicker">Three pillars</div>
        <h2>One curation machine, three faces</h2>
        <div className="grid">
          <div className="card">
            <h3>The store</h3>
            <p>
              At the White Rabbit store, music is always playing live — and
              every record played is present: the White Rabbit Selection.
              Whatever is on the turntable is buyable at that same moment, in
              the store and online.
            </p>
          </div>
          <div className="card">
            <h3>The podcast</h3>
            <p>
              White Rabbit Presents: well-known DJs bring a curated selection.
              Every episode becomes a shoppable, permanent page — listenable
              and buyable, for years.
            </p>
          </div>
          <div className="card">
            <h3>The platform</h3>
            <p>
              This app scales that curation to everyone who can&rsquo;t drop by
              — a discovery engine that learns from every visitor and keeps
              digging for you.
            </p>
          </div>
        </div>
      </section>

      <section className="sellers">
        <div className="kicker">For sellers</div>
        <h2>Your long tail, finally moving</h2>
        <p className="lede">
          Connect your Discogs inventory and join a selected, trusted circle of
          partners. On Discogs, a record is only found by someone already
          searching for it. At The White Rabbit, it gets <em>offered</em> to
          someone with the right taste.
        </p>
        <div className="grid">
          <div className="card">
            <h3>Connect in minutes</h3>
            <p>
              Authorize read-only access to your Discogs inventory. We sync it,
              enrich it, and put it in front of the right ears. Sales still
              happen on Discogs.
            </p>
          </div>
          <div className="card">
            <h3>Only pay for results</h3>
            <p>
              No entry fee. We earn a small commission on sales we demonstrably
              generate — for you it&rsquo;s not a cost, but marketing for
              records that would otherwise gather dust.
            </p>
          </div>
        </div>
      </section>

      <p className="about-cta">
        <Link className="cta" href="/">
          Browse the racks →
        </Link>
      </p>
    </div>
  );
}
