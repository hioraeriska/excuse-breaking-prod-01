import { mkdirSync, writeFileSync } from "node:fs";
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
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
