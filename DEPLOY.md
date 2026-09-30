# Deploy notes

## Netlify (chipper-banoffee ONLY)

- Site id: `f118c332-93c0-46e8-b054-9d56979a3ae6`
- URL: https://chipper-banoffee-49bea3.netlify.app
- **Never** deploy to Absolute (`315114ef-\u2026`)

Zip for UI upload: `/tmp/cadastre-v7.zip` (excludes research-shots scout bloat).

If CLI/MCP fail (expired token / site-id undefined \u2192 403):
1. Open Netlify UI for chipper-banoffee
2. Deploys \u2192 drag-drop `/tmp/cadastre-v7.zip` or unpack to a folder and deploy that

## GitHub

Repo: https://github.com/Chadnasir/cadastre

Full SPA source is in `/workspace/braid/`.
