const fs = require("fs");
const path = require("path");

const out = path.join(process.cwd(), "dist");
const src = path.join(out, "index.html");
const dest = path.join(out, "404.html");

if (!fs.existsSync(out)) {
  console.error("dist/ not found. Did expo export:web run?");
  process.exit(1);
}
fs.copyFileSync(src, dest);
console.log("Created dist/404.html as SPA fallback.");
