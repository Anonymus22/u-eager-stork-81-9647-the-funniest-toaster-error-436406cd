// The Funniest Toaster Error Message — make.fun micro bounty entry.
// Deterministic: writes one fixed line to /output/entry.txt (or
// MAKEFUN_OUTPUT_DIR/entry.txt when set). Node stdlib only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "ERROR: No bread found. I checked twice. Please check once — and stop staring at me.";

if (ENTRY.length < 1 || ENTRY.length > 120) {
  throw new Error(
    `Entry must be 1-120 characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);
