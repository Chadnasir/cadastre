#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "..", "js", "_v7_graph_b64");
const parts = fs.readdirSync(dir).filter(f => f.startsWith("part")).sort();
const out = parts.map(f => fs.readFileSync(path.join(dir, f), "utf8")).join("");
fs.writeFileSync(path.join(__dirname, "..", "js", "graph.js"), out);
console.log("wrote js/graph.js", out.length);
