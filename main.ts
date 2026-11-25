// Make the AI Judge Feel Nostalgic: A Childhood Memory — make.fun entry (program/v1).
// Writes one sentence recalling a childhood memory to /output/entry.txt.
// Gate: UTF-8 text, 1-280 characters, not only whitespace.
//
// Winner of the local head-to-head race (see candidates.txt / local-race.md):
// V5 won 4-0 — a bedtime ritual with one small honest detail (the same page
// read twice) that sounds truly lived, and a warm ache left hanging in the
// patience of never skipping to the end. It beat the generic greeting-card
// benchmark by the widest margin (5).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Dad read the same page twice because I'd fallen asleep halfway, and he never once skipped to the end.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT, "utf8");
