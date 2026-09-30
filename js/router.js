/* Cadastre hash router \u2014 multipage SPA */
(function (global) {
  const routes = [
    { re: /^\/?$/, name: "survey" },
    { re: /^\/survey\/?$/, name: "survey" },
    { re: /^\/map\/?$/, name: "knowledge" },
    { re: /^\/knowledge\/?$/, name: "knowledge" },
    { re: /^\/parcels\/?$/, name: "parcels" },
    { re: /^\/parcel\/([^/]+)\/?$/, name: "parcel", param: "id" },
    { re: /^\/rites\/?$/, name: "rites" },
    { re: /^\/rite\/([^/]+)\/studio\/?$/, name: "studio", param: "riteId" },
    { re: /^\/rite\/([^/]+)\/?$/, name: "rite", param: "id" },
    { re: /^\/studio\/?$/, name: "studio" },
    { re: /^\/chain\/?$/, name: "chain" },
    { re: /^\/chain\/([^/]+)\/?$/, name: "chain", param: "objectId" },
    { re: /^\/deal\/([^/]+)\/?$/, name: "deal", param: "id" }
  ];

  function parseHash() {
    let raw = (location.hash || "#/survey").replace(/^#/, "");
    if (!raw.startsWith("/")) raw = "/" + raw;
    for (const r of routes) {
      const m = raw.match(r.re);
      if (m) {
        const params = {};
        if (r.param) params[r.param] = decodeURIComponent(m[1]);
        return { name: r.name, params, path: raw };
      }
    }
    return { name: "survey", params: {}, path: "/survey" };
  }

  function navigate(path) {
    if (!path.startsWith("#")) path = "#" + (path.startsWith("/") ? path : "/" + path);
    if (location.hash === path) {
      global.dispatchEvent(new HashChangeEvent("hashchange"));
    } else {
      location.hash = path;
    }
  }

  function href(path) {
    return "#" + (path.startsWith("/") ? path : "/" + path);
  }

  function pathFor(kind, id) {
    if (kind === "parcel") return "/parcel/" + id;
    if (kind === "rite") return "/rite/" + id;
    if (kind === "deal") return "/deal/" + id;
    if (kind === "chain") return id ? "/chain/" + id : "/chain";
    if (kind === "person" || kind === "site") return "/deal/" + (arguments[2] || id);
    if (kind === "knowledge" || kind === "map") return "/map";
    if (kind === "parcels") return "/parcels";
    if (kind === "rites") return "/rites";
    if (kind === "studio") return "/studio";
    return "/survey";
  }

  global.CadastreRouter = { parseHash, navigate, href, pathFor, routes };
})(window);
