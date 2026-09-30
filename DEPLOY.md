# Deploy notes

## Netlify (chipper-banoffee ONLY)

- Site id: `f118c332-93c0-46e8-b054-9d56979a3ae6`
- URL: https://chipper-banoffee-49bea3.netlify.app
- **Never** deploy to Absolute (`315114ef-…`)

Zip for UI upload: `/tmp/cadastre-v3.zip` (excludes research-shots scout bloat).

If CLI/MCP fail (expired token / site-id undefined → 403):
1. Open Netlify UI for chipper-banoffee
2. Deploys → drag-drop `/tmp/cadastre-v3.zip` or the `/tmp/cadastre-deploy/` folder

## GitHub
Repo: https://github.com/Chadnasir/cadastre
Full SPA source is in `/workspace/braid/` and `/tmp/cadastre-git/` (local commit).
