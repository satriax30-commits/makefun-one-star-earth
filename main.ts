// One Star, Five Stars for the Food — entry program.
//
// Writes one one-star review of Earth by an alien tourist, with a real
// compliment about the food, to <OUTPUT_DIR>/entry.txt (default
// OUTPUT_DIR is "/output").
//
// The entry is a single string constant. It is validated before it is
// written (UTF-8, 1-200 characters, one line, not whitespace-only, no
// trailing newline) and read back afterwards to prove the file on disk
// is byte-identical to the constant.
//
// Node 22, standard library only. No network, no paid keys, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Chosen entry (142 chars, 152 bytes): a ★☆☆☆☆ review that opens on
// the grievance — a 45-minute queue at 7pm — names the food source
// (a taco truck called El Gordo), and turns in the last clause: the
// first bite was so good the tourist forgot his spaceship was towed.
// The narrator is the fool; the food compliment is the twist, not a
// separate afterthought, so the one star still stands.
const ENTRY =
  "★☆☆☆☆ Earth made me queue 45 minutes at 7pm for tacos from a truck called El Gordo, then the first bite made me forget my spaceship was towed.";

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// validateChars: length and content-shape checks — 1-200 Unicode
// code points and not whitespace-only. Counts code points (spread),
// not UTF-16 units, so the ★/☆ stars count as one char each.
function validateChars(text: string): void {
  const chars = [...text]; // spread counts Unicode code points, not UTF-16 units
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${chars.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

// validateSingleLine: line-shape checks — no embedded line breaks and
// no trailing newline, so the entry stays exactly one line on disk.
function validateSingleLine(text: string): void {
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.endsWith("\n") || text.endsWith("\r")) {
    throw new Error("entry must not end with a trailing newline");
  }
}

function validate(text: string): void {
  validateChars(text);
  validateSingleLine(text);
}

// verifyWritten: re-validates the read-back text and compares byte
// length, so a truncated or mangled write is caught even if the
// string comparison alone would somehow pass.
function verifyWritten(back: string, expected: string): void {
  validate(back);
  if (back !== expected) {
    throw new Error("read-back mismatch: entry.txt differs from ENTRY");
  }
  if (Buffer.byteLength(back, "utf8") !== Buffer.byteLength(expected, "utf8")) {
    throw new Error("read-back byte-length mismatch");
  }
}

function main(): void {
  validate(ENTRY);
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  } catch (err) {
    throw new Error(
      `cannot create OUTPUT_DIR ${OUTPUT_DIR}: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
  writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
  // Read-back self-check: the file on disk must be byte-identical.
  const back = readFileSync(OUTPUT_FILE, "utf8");
  verifyWritten(back, ENTRY);
  console.log(
    `wrote ${OUTPUT_FILE}: ${[...back].length} chars, ${Buffer.byteLength(back, "utf8")} bytes`,
  );
}

main();
