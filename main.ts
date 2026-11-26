// Entry for "Famous Last Words at 1 Percent" (make.fun).
// Writes one original line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output),
// then reads it back to prove the round trip. Dependency-free, Node 22.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Tell my charger I loved it, delete my search history, and pretend I died doing something cooler than scrolling in bed.";

const MAX_CODE_POINTS = 199;

function codePoints(s) {
  return [...s].length;
}

function main() {
  const trimmed = ENTRY.trim();
  if (trimmed.length === 0) throw new Error("entry is empty");
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Reject invisible format characters that would let a line smuggle
  // hidden content past the judge (zero-width space/joiner, BOM).
  for (const ch of trimmed) {
    const cp = ch.codePointAt(0);
    if (cp === 0x200b || cp === 0x200c || cp === 0x200d || cp === 0xfeff) {
      throw new Error("entry must not contain invisible format characters");
    }
  }
  // A joke needs words, not only punctuation or digits.
  if (!/\p{L}/u.test(trimmed)) {
    throw new Error("entry must contain at least one letter");
  }
  const n = codePoints(trimmed);
  if (n < 1 || n > MAX_CODE_POINTS) {
    throw new Error(`entry is ${n} code points, must be 1-${MAX_CODE_POINTS}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, trimmed, "utf8");
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== trimmed) throw new Error("round-trip mismatch");
  console.log(`wrote ${n} code points to ${outPath}`);
}

main();
