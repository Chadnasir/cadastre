# Cadastre

**Map the deal. Own the history.**

Universal knowledge vault: Obsidian-depth parcels, Versur-inspired knowledge map + **Studio** workflow canvas, callable rites, and in-app title chain — scored, indexed, fully connected.

> Live: [https://chipper-banoffee-49bea3.netlify.app](https://chipper-banoffee-49bea3.netlify.app)  
> Build folder historically `/workspace/braid/`. Product name: **Cadastre**.

## Vision

Cadastre is a **land-registry metaphor for practice memory** — any domain, not CRE-only. Commercial real estate is one starter category so the graph has texture on first open. The product is a universal vault by category: Practice · Deals · People · Sites · Research · Personal · Workflows.

You survey linked knowledge, stake parcels (notes), run rites (approve-only deposits), and own the title chain (edition history) without leaving the desk.

## Metaphor

| Term | Meaning |
|------|---------|
| **Parcel** | Note / memo / capture (Obsidian-depth body + wikilinks) |
| **Survey** | Living force-graph of linked parcels & entities |
| **Map** | Knowledge map — typed nodes, labeled edges, clusters |
| **Rite** | Callable workflow: beats ignite → propose → **approve** deposits |
| **Chain** | Title chain / soft commits (git without github.com) |
| **Studio** | Node-based workflow canvas (MEMORY · KNOWLEDGE · RITE · DEPOSIT · EXPORT) |
| **Deal / Project HQ** | Command center for a workstream |

Tagline: *Map the deal. Own the history.*

## Information architecture / routes

| Route | Page |
|-------|------|
| `#/survey` | Survey desk (force graph) |
| `#/map` | Knowledge map — typed nodes, labeled edges, clusters |
| `#/parcels` | Parcel gallery (search + category filters) |
| `#/parcel/:id` | Full parcel editor |
| `#/rites` | Rite catalog + run history |
| `#/rite/:id` | Rite studio (beat theater) |
| `#/studio` | **Studio** workflow canvas |
| `#/rite/:id/studio` | Studio pre-focused on a rite |
| `#/chain` · `#/chain/:id` | Title chain + diff |
| `#/deal/:id` | Deal / Project HQ |

Nav: **Survey · Map · Parcels · Rites · Studio · Chain**

## Studio (workflow layer)

Inspiration: Versur-style node canvas (layer idea only — no Versur branding/ATN/credits).

- **Dark dotted grid** + glowing curved filaments between typed cards
- **MEMORY** — SEARCH / ADD / FORGET / CLEAR — **approve-to-memory only**; never silent AI writes
- **KNOWLEDGE** — query passages from vault `searchIndex`; shows passage/document counts
- **RITE** — pick rite + target parcel; ignite beats → raise deposit proposals
- **DEPOSIT** — approve proposals → writes parcel body via existing deposit flow + **title chain edition**
- **EXPORT** — build/download a local JSON pack (memory + hits + deposit log)
- **RUN WORKFLOW** CTA uses Cadastre orange `#FF6A00` sparingly; does **not** auto-deposit

Visual lock: Field `#070B12` · parchment `#F4EFE6` · navy `#0B2C5F` · mist `#8BA3C7` · orange `#FF6A00`

## Architecture

```
Plain HTML / CSS / JS SPA (hash router)
        │
        ▼
IndexedDB vault
  stores: parcels · entities · edges · rites · editions · categories · searchIndex · meta
        │
        ├── Scores: relevance / confidence / freshness (links, backlinks, recency, deposits)
        ├── Index: full-text + tags + category; ⌘K is score-weighted
        ├── Graph: single connected component (Survey + Map share edge SoT)
        └── Editions: every save / approved deposit is a soft commit on the title chain
```

Key modules under `js/`:

- `vault.js` — IndexedDB, seed, scores, index, search, connectivity
- `graph.js` / `knowledge-map.js` — Survey + Map canvases
- `editor.js` / `pages.js` — parcel UI + multipage chrome
- `rites.js` — rite theater (approve deposits)
- `editions.js` — title chain
- `studio.js` — Studio workflow canvas
- `router.js` / `app.js` — hash routes + orchestration
- `data/seed.js` — starter corpus (CRE sample + Knowledge OS demo categories)

## Seed categories

Practice · Deals · People · Sites · Research · Personal · Workflows

CRE sample content is **one category among many**, not the product identity. **Reseed** restores the full starter corpus.

## Run locally

```bash
cd /path/to/cadastre   # or /workspace/braid
python3 -m http.server 4173
# → http://localhost:4173/
# Studio → http://localhost:4173/#/studio
```

No build step. Static SPA; Netlify `_redirects` / `netlify.toml` for SPA fallback.

## Deploy

- **Live site:** https://chipper-banoffee-49bea3.netlify.app  
- Netlify site id: `f118c332-93c0-46e8-b054-9d56979a3ae6` (chipper-banoffee)  
- Absolute (`315114ef-…`) must remain untouched.

## Roadmap gaps

- **BYOK** — bring-your-own LLM keys for richer rite proposals (still approve-only deposits)
- **Export / import** vault dump (beyond Studio pack) for backup & migration
- **Multi-device sync** (today: local IndexedDB only)
- **Rich attachments** beyond text parcels
- **Collaborative title chain** / shared surveys
- **Mobile layout** (desktop-first ≥1280px today)

## Visual system

| Token | Hex |
|-------|-----|
| Field | `#070B12` |
| Parchment | `#F4EFE6` |
| Navy | `#0B2C5F` |
| Orange (CTA/active only) | `#FF6A00` |
| Mist | `#8BA3C7` |

Fonts: Instrument Sans · Newsreader · IBM Plex Mono

## Docs

- [CONCEPT.md](./CONCEPT.md) — product concept lock
- Screenshots: `research-shots/cadastre-v2-*.png|webp` (product), scout refs under `research-shots/scout-refs/` (inspiration only)

## License

Private product exploration under Chad Nasir / Rend team unless otherwise stated.
