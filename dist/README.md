# Cadastre source package

Full SPA modules (studio, vault, pages, css, seed) are stored as base64 parts under `dist/_src_b64/`.

```bash
node scripts/unpack-src.js   # writes dist/cadastre-src.zip
unzip -o dist/cadastre-src.zip -d .
```

Or copy from the live build / Netlify zip. Studio route: `#/studio`.
