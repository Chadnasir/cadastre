/* Cadastre hash router */
(function (global) {
  const routes = [
    { name: "survey", re: /^\/?$/ },
    { name: "survey", re: /^\/survey\/?$/ },
    { name: "knowledge", re: /^\/map\/?$/ },
    { name: "parcels", re: /^\/parcels\/?$/ },
    { name: "parcel", re: /^\/parcel\/([^/]+)\/?$/, params: ["id"] },
    { name: "rites", re: /^\/rites\/?$/ },
    { name: "rite", re: /^\/rite\/([^/]+)\/studio\/?$/, params: ["id"], studio: true },
    { name: "rite", re: /^\/rite\/([^/]+)\/?$/, params: ["id"] },
    { name: "studio", re: /^\/studio\/?$/ },
    { name: "chain", re: /^\/chain\/?$/ },
    { name: "chain", re: /^\/chain\/([^/]+)\/?$/, params: ["objectId"] },
    { name: "deal", re: /^\/deal\/([^/]+)\/?$/, params: ["id"] }
  ];

  function parse(hash) {
    const raw = (hash || "#/survey").replace(/^#/, "") || "/";
    const path = raw.startsWith("/") ? raw : "/" + raw;
    for (const r of routes) {
      const m = path.match(r.re);
      if (m) {
        const params = {};
        (r.params || []).forEach((k, i) => {
          params[k] = decodeURIComponent(m[i + 1]);
        });
        if (r.studio) params.studio = true;
        return { name: r.name, params, path };
      }
    }
    return { name: "survey", params: {}, path: "/survey" };
  }

  function navigate(path) {
    const p = path.startsWith("/") ? path : "/" + path;
    if (location.hash === "#" + p) {
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      location.hash = "#" + p;
    }
  }

  function current() {
    return parse(location.hash);
  }

  function start(onRoute) {
    const go = () => onRoute(current());
    window.addEventListener("hashchange", go);
    if (!location.hash) navigate("/survey");
    else go();
    return () => window.removeEventListener("hashchange", go);
  }

  global.CadastreRouter = { parse, navigate, current, start };
})(window);
