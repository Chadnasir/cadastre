# Cadastre

**Map the deal. Own the history.**

Universal knowledge vault: Obsidian-depth parcels, Versur-inspired knowledge map + **Studio** workflow canvas, callable rites, and in-app title chain \u2014 scored, indexed, fully connected.

> Live: [https://chipper-banoffee-49bea3.netlify.app](https://chipper-banoffee-49bea3.netlify.app)  
> Build folder historically `/workspace/braid/`. Product name: **Cadastre**.

## Vision

Cadastre is a **land-registry metaphor for practice memory** \u2014 any domain, not CRE-only. Commercial real estate is one starter category so the graph has texture on first open. The product is a universal vault by category: Practice \u00b7 Deals \u00b7 People \u00b7 Sites \u00b7 Research \u00b7 Personal \u00b7 Workflows.

You survey linked knowledge, stake parcels (notes), run rites (approve-only deposits), and own the title chain (edition history) without leaving the desk.

## Metaphor

| Term | Meaning |
|------|---------|
| **Parcel** | Note / memo / capture (Obsidian-depth body + wikilinks) |
| **Survey** | Living force-graph of linked parcels & entities |
| **Map** | Knowledge map \u2014 typed nodes, labeled edges, clusters |
| **Rite** | Callable workflow: beats ignite \u2192 propose \u2192 **approve** deposits |
| **Chain** | Title chain / soft commits (git without github.com) |
| **Studio** | Node-based workflow canvas (MEMORY \u00b7 KNOWLEDGE \u00b7 GRAIN \u00b7 CODE \u00b7 RITE \u00b7 DEPOSIT \u00b7 EXPORT) |
| **Deal / Project HQ** | Command center for a workstream |

Tagline: *Map the deal. Own the history.*

## Information architecture / routes

| Route | Page |
|-------|------|
| `#/survey` | Survey desk (force graph) |
| `#/map` | Knowledge map \u2014 typed nodes, labeled edges, clusters |
| `#/parcels` | Parcel gallery (search + category filters) |
| `#/parcel/:id` | Full parcel editor |
| `#/rites` | Rite catalog + run history |
| `#/rite/:id` | Rite studio (beat theater) |
| `#/studio` | **Studio** workflow canvas |
| `#/rite/:id/studio` | Studio pre-focused on a rite |
| `#/chain` \u00b7 `#/chain/:id` | Title chain + diff |
| `#/deal/:id` | Deal / Project HQ |

Nav: **Survey \u00b7 Map \u00b7 Parcels \u00b7 Rites \u00b7 Studio \u00b7 Chain**

## Studio (workflow layer)

Inspiration: Versur-style node canvas (layer idea only \u2014 no Versur branding/ATN/credits).

- **Dark dotted grid** + glowing curved filaments between typed cards
- **MEMORY** \u2014 SEARCH / ADD / FORGET / CLEAR \u2014 **approve-to-memory only**; never silent AI writes
- **KNOWLEDGE** \u2014 query passages from vault `searchIndex`; passage click-through opens parcel
- **GRAIN** \u2014 category + kind filter on knowledge hits
- **CODE / AGENT** \u2014 prompt/snippet node; propose \u2192 memory or deposit (**approve-only**)
- **RITE** \u2014 pick rite + target parcel; multi-rite **templates** on the dock
- **DEPOSIT** \u2014 approve proposals \u2192 writes parcel body via existing deposit flow + **title chain edition**
- **EXPORT** \u2014 build/download a local JSON pack (memory + hits + deposit log)
- **RUN WORKFLOW** CTA uses Cadastre orange `#FF6A00` sparingly; does **not** auto-deposit
- **v5 polish** \u2014 GRAIN + CODE nodes, templates, passage excerpts, responsive canvas
- **v6** \u2014 onboarding tour + dismissible tips \u00b7 `?` shortcuts \u00b7 graph pause/cool \u00b7 parcel category templates \u00b7 dark-parchment MD export/print
- **v7** \u2014 named Studio workflow presets \u00b7 clearer deposit preview \u00b7 Survey/Map 2-hop neighborhood fade \u00b7 pin nodes (Alt+click) \u00b7 search-highlight rings on map \u00b7 \u2318K recent + jump-to-category \u00b7 focus rings + `aria-current` on mode nav

Visual lock: Field `#070B12` \u00b7 parchment `#F4EFE6` \u00b7 navy `#0B2C5F` \u00b7 mist `#8BA3C7` \u00b7 orange `#FF6A00`

## Architecture

```
Plain HTML / CSS / JS SPA (hash router)
        \u2502
        \u25bc
IndexedDB vault
  stores: parcels \u00b7 entities \u00b7 edges \u00b7 rites \u00b7 editions \u00b7 categories \u00b7 searchIndex \u00b7 meta
        \u2502
        \u251c\u2500\u2500 Scores: relevance / confidence / freshness (links, backlinks, recency, deposits)
        \u251c\u2500\u2500 Index: full-text + tags + category; \u2318K is score-weighted
        \u251c\u2500\u2500 Graph: single connected component (Survey + Map share edge SoT)
        \u2514\u2500\u2500 Editions: every save / approved deposit is a soft commit on the title chain
```

Key modules under `js/`:

- `vault.js` \u2014 IndexedDB, seed, scores, index, search, connectivity
- `graph.js` / `knowledge-map.js` \u2014 Survey + Map canvases
- `editor.js` / `pages.js` \u2014 parcel UI + multipage chrome
- `rites.js` \u2014 rite theater (approve deposits)
- `editions.js` \u2014 title chain
- `studio.js` \u2014 Studio workflow canvas
- `router.js` / `app.js` \u2014 hash routes + orchestration
- `chrome-v6.js` \u2014 tour, tips, `?` help, templates, parcel MD/print (v7 shortcut notes)
- `data/seed.js` \u2014 starter corpus (CRE sample + Knowledge OS demo categories)

## Seed categories

Practice \u00b7 Deals \u00b7 People \u00b7 Sites \u00b7 Research \u00b7 Personal \u00b7 Workflows

CRE sample content is **one category among many**, not the product identity. **Reseed** restores the full starter corpus.

## Run locally

```bash
cd /path/to/cadastre   # or /workspace/braid
python3 -m http.server 4173
# \u2192 http://localhost:4173/
# Studio \u2192 http://localhost:4173/#/studio
```

No build step. Static SPA; Netlify `_redirects` / `netlify.toml` for SPA fallback.

## Deploy

- **Live site:** https://chipper-banoffee-49bea3.netlify.app  
- Netlify site id: `f118c332-93c0-46e8-b054-9d56979a3ae6` (chipper-banoffee)  
- Absolute (`315114ef-\u2026`) must remain untouched.

## What changed (v7 craft pass)

- **Graph** \u2014 Survey + Map: graduated **2-hop neighborhood fade** on selection/hover; **Alt+click pin** freezes nodes in the sim; **search-highlight rings** pulse matching nodes when \u2318K finds hits
- **Studio** \u2014 **named workflow presets** (IndexedDB): save/load/delete grain + query + code + rite + parcel + memory; **clearer deposit preview** shows target parcel, word/line stats, markdown append preview, expand full text
- **Search** \u2014 empty focus shows **Recent** queries + **Jump to category** chips; hits also paint on Survey/Map
- **Accessibility** \u2014 global `:focus-visible` orange rings; mode nav sets `aria-current="page"`; richer aria-labels on primary modes + search
- Locks held: universal categories \u00b7 connected \u00b7 scored+indexed \u00b7 approve-only \u00b7 Cadastre palette \u00b7 **NEVER Absolute**

## What changed (v6 desk polish)

- **Onboarding tour** + empty-state tips \u2014 dismissible (localStorage); Skip ends tour
- **Keyboard shortcuts** \u2014 press `?` or chrome **?** \u00b7 `g s/m/p/r/w/c` go-to \u00b7 `n` new parcel \u00b7 `e` export open parcel MD
- **Graph performance** \u2014 Survey + Map cool down when settled; **pause RAF when off-screen / tab hidden**; parity-sampled repulsion; Studio filaments pause off-page
- **Parcel templates by category** \u2014 Practice \u00b7 Deals \u00b7 People \u00b7 Sites \u00b7 Research \u00b7 Personal \u00b7 Workflows (universal categories)
- **Dark parchment** \u2014 Export MD + Print for a single parcel (field `#070B12` \u00b7 parchment text \u00b7 navy wash)
- Locks held: universal categories \u00b7 connected graphs \u00b7 scored+indexed \u00b7 approve-only memory \u00b7 Cadastre colors \u00b7 **NEVER Absolute**

## What changed (v5 depth pass)

- Studio: **GRAIN** filter + **CODE/AGENT** nodes; multi-rite templates; passage click-through to parcel
- Editor: wikilink `[[` autocomplete + richer backlinks (excerpt + score)
- Chain: luminous scrub track, \u2190/\u2192 keys, word-level fault-line diffs, +/\u2212 stats
- Mobile: vault drawer + responsive Studio canvas
- Seed v5: +7 non-CRE parcels (Practice / Personal / Research / People notes), Weekly Review rite, still one connected component

## What changed (v4 quality pass)

- Studio: draggable nodes, undo/redo, IDB layout persist, filament pulse, run feedback
- Survey + Map: denser label plates, score badges, stronger cluster gravity, controls hints
- Vault rail: category sections with counts + create-parcel-in-category (auto-link)
- Rites: run history persisted in IndexedDB
- Chrome: full vault Export / Import (merge or replace)
- \u2318K: score + category on hits; \u2191/\u2193 keyboard navigation
- Deal HQ: neighborhood mini-map canvas + richer recent chain

## Roadmap gaps

- **BYOK** \u2014 bring-your-own LLM keys for richer rite proposals (still approve-only deposits)
- **Multi-device sync** (today: local IndexedDB only; Export/Import covers backup)
- **Rich attachments** beyond text parcels
- **Collaborative title chain** / shared surveys
- **Mobile layout** (desktop-first; vault drawer + touch hints; further responsive polish)

## Visual system

| Token | Hex |
|-------|-----|
| Field | `#070B12` |
| Parchment | `#F4EFE6` |
| Navy | `#0B2C5F` |
| Orange (CTA/active only) | `#FF6A00` |
| Mist | `#8BA3C7` |

Fonts: Instrument Sans \u00b7 Newsreader \u00b7 IBM Plex Mono

## Docs

- [CONCEPT.md](./CONCEPT.md) \u2014 product concept lock
- Screenshots: `research-shots/cadastre-v2-*.png|webp` and `assets/studio-preview.webp` when present; scout refs under `research-shots/scout-refs/` (inspiration only)

## License

Private product exploration under Chad Nasir / Rend team unless otherwise stated.
