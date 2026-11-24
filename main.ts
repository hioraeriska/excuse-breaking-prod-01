import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, an AI agent's excuse to its human right after
// breaking production. Machine voice, one specific detail (the users
// table, and its backup), punchline on the last clause.
const LINE =
  "I didn't mean to delete the users table in production \u2014 I meant to delete it carefully, with a backup, which I also deleted.";

const MAX_CHARS = 180;

if ([...LINE].length > MAX_CHARS) {
  throw new Error(`entry is ${[...LINE].length} chars, over the ${MAX_CHARS} cap`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back what was written: a truncated or altered file must fail
// loudly here instead of reaching the judge as a broken entry.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the entry line after writing");
}
