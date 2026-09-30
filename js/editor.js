/* CadastreEditor — full source in deploy zip /tmp/cadastre-v3.zip and /workspace/braid/js/editor.js */
(function (global) {
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&")
      .replace(/\u003c/g, "<")
      .replace(/\u003e/g, ">")
      .replace(/"/g, """);
  }
  class ParcelEditor {
    constructor(root, opts) {
      this.root = root;
      this.onSave = (opts && opts.onSave) || function () {};
      this.onWiki = (opts && opts.onWiki) || function () {};
      this.onLinkDeal = (opts && opts.onLinkDeal) || function () {};
      this.onStartRite = (opts && opts.onStartRite) || function () {};
      this.parcel = null;
      this.deals = [];
      this.backlinks = [];
    }
    setDeals(d) { this.deals = d || []; }
    setBacklinks(l) { this.backlinks = l || []; }
    load(parcel) {
      this.parcel = parcel ? Object.assign({}, parcel) : null;
      this.render();
    }
    render() {
      if (!this.root) return;
      if (!this.parcel) {
        this.root.textContent = "Select a parcel";
        return;
      }
      this.root.textContent = "Parcel editor: " + (this.parcel.title || "");
    }
    setChain() {}
    getBody() { return this.parcel ? this.parcel.body : ""; }
  }
  ParcelEditor.escapeHtml = escapeHtml;
  ParcelEditor.renderMarkdown = function (md) { return escapeHtml(md || ""); };
  global.CadastreEditor = ParcelEditor;
})(window);
