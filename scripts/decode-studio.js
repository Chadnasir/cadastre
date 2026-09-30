#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const dir = path.join(__dirname, "../js/_studio_b64");
const parts = fs.readdirSync(dir).filter(function (f) { return f.indexOf("part") === 0; }).sort();
const b64 = parts.map(function (f) { return fs.readFileSync(path.join(dir, f), "utf8"); }).join("");
fs.writeFileSync(path.join(__dirname, "../js/studio.js"), Buffer.from(b64, "base64"));
console.log("Wrote js/studio.js", Buffer.from(b64, "base64").length, "bytes");
