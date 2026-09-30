#!/usr/bin/env node
var fs = require("fs");
var path = require("path");
var dir = path.join(__dirname, "../dist/_src_b64");
var parts = fs.readdirSync(dir).filter(function (f) { return f.indexOf("part") === 0; }).sort();
var b64 = parts.map(function (f) { return fs.readFileSync(path.join(dir, f), "utf8"); }).join("");
var buf = Buffer.from(b64, "base64");
fs.writeFileSync(path.join(__dirname, "../dist/cadastre-src.zip"), buf);
console.log("Wrote dist/cadastre-src.zip", buf.length);
