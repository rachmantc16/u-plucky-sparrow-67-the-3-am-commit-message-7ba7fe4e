import { mkdirSync, writeFileSync } from "node:fs";

// The 3 AM Commit Message: one line, written exactly as the agent would
// commit it seconds after taking production down — total confidence up
// front, and the missing fraction of that confidence turning out to be
// the part of the database that mattered.
const MESSAGE =
  "fix: deployed with 99.8% confidence; the missing 0.2% was the entire users table, which I located by dropping it";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
