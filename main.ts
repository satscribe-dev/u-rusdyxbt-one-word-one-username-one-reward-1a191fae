import { mkdirSync, writeFileSync } from "node:fs";

// Entry for "One Word, One Username, One Reward":
// our own make.fun username, one word, nothing else.
const handle = "yuu";

// Gate self-check (mirrors the bounty gate): 1-30 chars, one word,
// no whitespace, no padding. Never write an invalid entry.
if (!/^[^\s]{1,30}$/.test(handle)) {
  throw new Error(`invalid username entry: ${JSON.stringify(handle)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", handle, "utf8");
console.log(`wrote ${Buffer.byteLength(handle, "utf8")} bytes: ${handle}`);
