# Source tree

## Canonical full source

The complete Cadastre SPA (including Studio) lives in:

- Build folder / deploy zip: all of `js/`, `css/`, `data/`, `index.html`
- Local git commit ready to push: `/tmp/cadastre-git` (needs `gh auth` / token for `git push`)
- Deploy zip: `/tmp/cadastre-v3.zip`

## Already in this repo

| Path | Status |
|------|--------|
| README.md / CONCEPT.md / DEPLOY.md | Full docs |
| index.html | With Studio nav + `#/studio` host |
| js/router.js | `#/studio` + `#/rite/:id/studio` |
| js/editor.js | Stub — full editor in zip |
| scripts/decode-studio.js | Reconstruct studio.js from b64 parts |
| scripts/unpack-src.js | Reconstruct source zip from dist/_src_b64 |

## Studio

Route: `#/studio` (also `#/rite/:id/studio`)

Nodes: MEMORY (approve-only) · KNOWLEDGE (searchIndex) · RITE · DEPOSIT (title chain) · EXPORT

Screenshot: `research-shots/cadastre-studio.png` (in zip)

Live: https://chipper-banoffee-49bea3.netlify.app/#/studio
