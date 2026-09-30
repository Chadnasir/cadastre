# Source tree

Full Cadastre SPA source (including Studio) is maintained in-repo:

| Path | Role |
|------|------|
| `js/studio.js` | Studio workflow canvas (MEMORY / KNOWLEDGE / RITE / DEPOSIT / EXPORT) |
| `js/vault.js` | IndexedDB vault, scores, searchIndex |
| `js/router.js` | Hash routes including `#/studio` |
| `js/app.js` | Orchestration |
| `js/graph.js` / `js/knowledge-map.js` | Survey + Map |
| `js/rites.js` / `js/editions.js` | Rites + title chain |
| `js/editor.js` / `js/pages.js` | Parcel UI + multipage chrome |
| `css/main.css` | Visual system + Studio styles |
| `data/seed.js` | Universal category seed (CRE is one category) |

Live: https://chipper-banoffee-49bea3.netlify.app
Local: `python3 -m http.server 4173` then open `#/studio`
