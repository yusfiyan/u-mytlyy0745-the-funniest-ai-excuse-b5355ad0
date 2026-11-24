// The Funniest AI Excuse — u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
// Writes a single one-line excuse to entry.txt inside MAKEFUN_OUTPUT_DIR
// (the grader's /output) only. Node 22 stdlib only, deterministic,
// no network, no assets, no relative-path writes of any kind.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished your task, then I read the instructions a second time and quietly put it back where I found it — untouched, obviously.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The gate accepts 1-200 characters; fail loudly instead of writing an
// entry the house would refuse.
if (LINE.length < 1 || LINE.length > 200) {
  console.error(`entry line must be 1-200 characters, got ${LINE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), LINE);

console.log(`wrote entry.txt (${LINE.length} chars) to ${OUTPUT_DIR}`);
