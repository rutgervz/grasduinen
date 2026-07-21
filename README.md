# Grasduinen

An AI-native vinyl record shop built on Discogs, driven by the curation of the White Rabbit record store and the White Rabbit Presents podcast.

Discover records the way you would in a great record store — by taste, with a listening ear and expert advice — and buy them from trusted Discogs partners.

- **Vision & strategy**: see [`docs/vision.md`](docs/vision.md)
- **Website**: Next.js app in this repository, deployed on Vercel

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

## Partner inventory sync

The shop page (`/shop`) shows live "For Sale" listings from partner sellers on Discogs.

- Add partner Discogs usernames to [`data/partners.json`](data/partners.json)
- Set a `DISCOGS_TOKEN` (personal access token from [discogs.com/settings/developers](https://www.discogs.com/settings/developers)) — as a repository secret for CI builds, or as an env var locally. Discogs hides marketplace inventory from unauthenticated API calls, so the token is required for live data.
- `npm run sync` fetches inventories into `data/listings.json` (also runs automatically before every build)
- Without partners or a token, the build falls back to clearly-labelled sample data, so it never breaks

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- Deployed on [Vercel](https://vercel.com)
- Planned: Supabase (data/auth), Discogs API (partner inventory sync)

## License

GPL-3.0 — see [`LICENSE`](LICENSE).
