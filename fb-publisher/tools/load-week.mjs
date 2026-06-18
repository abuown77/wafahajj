// Usage: node tools/load-week.mjs week.json
// week.json: [{ "date":"2026-06-20", "caption":"...", "media":"D:/.../post2.mp4", "type":"video" }, ...]
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { execFileSync } from "node:child_process";

const items = JSON.parse(readFileSync(process.argv[2], "utf8"));
const R2_PUBLIC = process.env.R2_PUBLIC_BASE; // e.g. https://pub-xxx.r2.dev
if (!R2_PUBLIC) throw new Error("Set R2_PUBLIC_BASE");

for (const it of items) {
  let mediaUrl = "";
  if (it.type !== "text") {
    const key = `${it.date}-${basename(it.media)}`;
    execFileSync("npx", ["wrangler", "r2", "object", "put", `wafa-fb-media/${key}`, "--file", it.media], { stdio: "inherit", shell: true });
    mediaUrl = `${R2_PUBLIC}/${encodeURIComponent(key)}`;
  }
  const sql = `INSERT INTO posts (scheduled_date, caption, media_url, media_type) VALUES ('${it.date}', '${it.caption.replace(/'/g, "''")}', '${mediaUrl}', '${it.type}');`;
  execFileSync("npx", ["wrangler", "d1", "execute", "wafa-fb-publisher", "--remote", "--command", sql], { stdio: "inherit", shell: true });
  console.log(`Queued ${it.date}: ${it.caption.slice(0, 40)}...`);
}
