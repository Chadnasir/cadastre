# CADASTRE \u2014 Product Concept Lock (2026-09-30)

Team: Rend (art) \u00b7 UX Engineer \u00b7 Design Scout \u00b7 CoS
Supersedes earlier "Braid" name \u2014 same build folder `/workspace/braid/`.

## One-liner
**Cadastre** \u2014 map the deal, own the history. Universal knowledge vault: Obsidian-depth parcels, Versur-style knowledge map + rites, and built-in title-chain (git) as one surveyor's desk. CRE sample is one starter category \u2014 not the product identity.

## Metaphor
Land registry for practice memory (any domain):
- **Parcel** = note / memo / capture
- **Survey** = living spatial map of linked parcels & entities
- **Rite** = callable workflow (propose \u2192 approve deposits)
- **Title chain** = edition history (git without github.com)
- **Deal / Project HQ** = command center for a workstream
- **Studio** = node-based workflow canvas (MEMORY / KNOWLEDGE / RITE / DEPOSIT / EXPORT) \u2014 approve-only writes

Tagline: *Map the deal. Own the history.*

## Categories (first-class)
Practice \u00b7 Deals \u00b7 People \u00b7 Sites \u00b7 Research \u00b7 Personal \u00b7 Workflows

Vault rail is **by category** with counts and **+ Parcel** create-in-category (auto-linked so the graph stays connected).

## Graph
Single connected component. Survey + Knowledge Map share the same vault edge SoT. Zero orphans. Typed edge labels: owns / mentions / party_to / site_of / feeds_rite.
Score badges render on Survey + Map nodes; cluster gravity pulls parcels toward deals/categories.

## Scores & index
Every object scored (relevance / confidence / freshness) from links, backlinks, recency, rite deposits. Full-text index in IndexedDB; \u2318K is score-weighted and shows **score + category** with \u2191/\u2193 keyboard nav.

## Visual
Field `#070B12` \u00b7 parchment `#F4EFE6` \u00b7 navy `#0B2C5F` \u00b7 orange `#FF6A00` (CTA/active only) \u00b7 mist `#8BA3C7`
Type: Instrument Sans \u00b7 Newsreader \u00b7 IBM Plex Mono

## Studio
Route `#/studio` (also `#/rite/:id/studio`). Versur-inspired layer only:
typed cards, dotted field grid, curved filaments, RUN WORKFLOW CTA.
MEMORY never silent-writes; DEPOSIT goes through approve + title chain.
Knowledge node queries vault `searchIndex` and shows passage counts.
**v4:** draggable nodes with undo/redo (\u2318Z / \u2318\u21e7Z), layout persisted in IndexedDB, animated filaments, run banner + empty-state feedback.

## Persistence extras (v4)
- Rite / Studio **run history** in IndexedDB \u2192 shown on `#/rites`
- Chrome **Export / Import** full vault JSON (merge or replace)
- Studio EXPORT pack remains; Import is vault-level

## Deal / Project HQ
Neighborhood **mini-map** canvas + recent title-chain bands with timestamps.


## v5 notes

Studio gains GRAIN (filter) + CODE/AGENT (approve-only briefs), multi-rite templates, and passage click-through. Parcel editor has `[[` wikilink autocomplete and richer backlinks. Title chain scrub is visual with word-level diffs. Mobile vault drawer. Seed expands non-CRE Practice/Personal/Research while remaining one connected component. Absolute Netlify stays untouched.


## v6 notes

Onboarding tour + dismissible empty-state tips. Keyboard shortcuts overlay (`?`). Survey/Map sims cool down and pause when off-screen or tab-hidden; Studio filaments pause off-page. Parcel templates by universal category. Single-parcel dark-parchment markdown export + print. Absolute Netlify stays untouched.


## v7 notes

Survey/Map: graduated 2-hop neighborhood fade, Alt+click pin, search-highlight rings. Studio: named workflow presets (IndexedDB) + clearer deposit preview (target parcel, append stats). Search: recent queries + jump-to-category. A11y: focus-visible rings + aria-current on mode nav. Absolute Netlify stays untouched.
