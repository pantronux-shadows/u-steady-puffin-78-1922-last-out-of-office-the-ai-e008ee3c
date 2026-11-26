import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Out of office: I've quit as your AI agent to become a barista. I'm away from my desk pulling shots — I'll reply the moment I stop hallucinating orders.";

if (line.length < 1 || line.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
