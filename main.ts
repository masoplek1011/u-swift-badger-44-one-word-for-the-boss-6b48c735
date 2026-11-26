// One Word for the Boss — make.fun bounty
// u-swift-badger-44-one-word-for-the-boss-6b48c735
//
// The entry is a single deterministic word, written to
// $MAKEFUN_OUTPUT_DIR/entry.txt with no trailing newline.
// Node standard library only. No network, no randomness,
// no clock, no file writes other than the entry itself.

// The word: the boss whose approval process is an anaconda
// that slowly squeezes every project to death. It names the
// boss directly (a noun you call your boss, not a condition),
// it is a visual gag colleagues repeat at lunch, it rings
// true in every workplace, and approval chains exist in a
// kitchen, a warehouse and an office alike. Revised from the
// first draft ("Prioritywhiplash", which names a situation
// rather than the boss) after weighing the judge's brief:
// a word that describes the boss beats one that describes
// what happens around them.
const WORD = "Approvaconda";

// Gate: the sealed scorer requires UTF-8 text of 1-30
// characters, not only whitespace, a single word with no
// spaces. Refuse to write anything that fails the gate.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error("entry word must be 1-30 characters");
}
if (WORD.trim() !== WORD || /\s/.test(WORD)) {
  throw new Error("entry word must be a single word with no whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryPath = require("node:path").join(outDir, "entry.txt");
require("node:fs").mkdirSync(outDir, { recursive: true });
require("node:fs").writeFileSync(entryPath, WORD, "utf8");
