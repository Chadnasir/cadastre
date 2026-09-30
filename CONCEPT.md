# CADASTRE — Product Concept Lock (2026-09-30)

Team: Rend (art) · UX Engineer · Design Scout · CoS
Supersedes earlier "Braid" name — same build folder `/workspace/braid/`.

## One-liner
**Cadastre** — map the deal, own the history. Universal knowledge vault: Obsidian-depth parcels, Versur-style knowledge map + rites, and built-in title-chain (git) as one surveyor's desk. CRE sample is one starter category — not the product identity.

## Metaphor
Land registry for practice memory (any domain):
- **Parcel** = note / memo / capture
- **Survey** = living spatial map of linked parcels & entities
- **Rite** = callable workflow (propose → approve deposits)
- **Title chain** = edition history (git without github.com)
- **Deal / Project HQ** = command center for a workstream
- **Studio** = node-based workflow canvas (MEMORY / KNOWLEDGE / RITE / DEPOSIT / EXPORT) — approve-only writes

Tagline: *Map the deal. Own the history.*

## Categories (first-class)
Practice · Deals · People · Sites · Research · Personal · Workflows

## Graph
Single connected component. Survey + Knowledge Map share the same vault edge SoT. Zero orphans. Typed edge labels: owns / mentions / party_to / site_of / feeds_rite.

## Scores & index
Every object scored (relevance / confidence / freshness) from links, backlinks, recency, rite deposits. Full-text index in IndexedDB; ⌘K is score-weighted.

## Visual
Field `#070B12` · parchment `#F4EFE6` · navy `#0B2C5F` · orange `#FF6A00` (CTA/active only) · mist `#8BA3C7`
Type: Instrument Sans · Newsreader · IBM Plex Mono

## Studio
Route `#/studio` (also `#/rite/:id/studio`). Versur-inspired layer only:
typed cards, dotted field grid, curved filaments, RUN WORKFLOW CTA.
MEMORY never silent-writes; DEPOSIT goes through approve + title chain.
Knowledge node queries vault `searchIndex` and shows passage counts.
