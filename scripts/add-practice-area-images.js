#!/usr/bin/env node
/**
 * ONE-TIME SCRIPT. Not wired into any automation or workflow.
 *
 * Fetches 3 Pexels images per practice-area page and inserts them directly
 * into the hand-authored content/practice-areas/*.ts files (each section's
 * `html` field), at roughly evenly spaced section indices.
 *
 * This edits source files with targeted line-based text replacement rather
 * than an AST transform, relying on the fact that every section in these
 * files is formatted identically as:
 *   {
 *     id: "...",
 *     heading: "...",
 *     html: `...single line of HTML...`,
 *   },
 * If a file doesn't match that structure, it is skipped with a warning
 * instead of being partially edited.
 *
 * Usage: PEXELS_API_KEY=... node scripts/add-practice-area-images.js
 * Review the diff and commit manually — this script does not touch git.
 */

const fs = require("fs");
const path = require("path");
const { fetchImages } = require("./lib/fetch-images");
const { loadEnvLocal } = require("./lib/load-env");

loadEnvLocal();

const ROOT = path.join(__dirname, "..");
const PRACTICE_AREAS_DIR = path.join(ROOT, "content", "practice-areas");
const IMAGE_COUNT = 3;

const PRACTICE_AREA_QUERIES = {
  "residential-real-estate-lawyer": "family home for sale front yard",
  "commercial-real-estate-attorney": "commercial building office real estate",
  "real-estate-closing-attorney": "real estate closing signing documents",
  "title-issues-attorney": "house keys property title documents",
  "purchase-agreement-lawyer": "contract signing real estate agreement",
  "landlord-tenant-lawyer": "apartment rental lease keys",
  "real-estate-litigation-attorney": "courtroom gavel legal",
  "foreclosure-defense-lawyer": "house for sale foreclosure sign",
  "zoning-land-use-attorney": "city planning zoning blueprint",
  "short-sale-attorney": "for sale sign house distressed property",
};

const HTML_LINE_RE = /^      html: `(.*)`,$/;

function escapeAttr(text) {
  return String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function figureHtml(image) {
  const alt = escapeAttr(image.alt);
  return `<figure class="my-8"><img src="${image.path}" alt="${alt}" loading="lazy" class="w-full rounded-lg" /><figcaption class="mt-2 text-xs text-charcoal-400">Photo by <a href="${image.photographerUrl}" target="_blank" rel="noopener noreferrer">${escapeAttr(image.photographer)}</a> via Pexels</figcaption></figure>`;
}

function pickEvenIndices(n, count) {
  const raw = [];
  for (let i = 1; i <= count; i++) {
    raw.push(Math.min(n - 1, Math.floor((n * i) / (count + 1))));
  }
  return Array.from(new Set(raw));
}

async function processFile(filename) {
  const slug = filename.replace(/\.ts$/, "");
  const query = PRACTICE_AREA_QUERIES[slug];
  if (!query) {
    console.warn(`No image query configured for "${slug}", skipping.`);
    return;
  }

  const filePath = path.join(PRACTICE_AREAS_DIR, filename);
  const original = fs.readFileSync(filePath, "utf8");
  const lines = original.split("\n");

  const htmlLineIndices = [];
  lines.forEach((line, idx) => {
    if (HTML_LINE_RE.test(line)) htmlLineIndices.push(idx);
  });

  if (htmlLineIndices.length === 0) {
    console.warn(`"${filename}" doesn't match the expected section format, skipping.`);
    return;
  }

  const targetPositions = pickEvenIndices(htmlLineIndices.length, IMAGE_COUNT);
  console.log(
    `${filename}: ${htmlLineIndices.length} sections found, inserting images into sections [${targetPositions
      .map((p) => p + 1)
      .join(", ")}]`
  );

  console.log(`  Fetching ${targetPositions.length} Pexels images for query: "${query}"`);
  const images = await fetchImages(query, targetPositions.length, {
    slug,
    baseDir: "practice-areas",
  });

  targetPositions.forEach((sectionPos, i) => {
    const image = images[i];
    if (!image) return;
    const lineIdx = htmlLineIndices[sectionPos];
    const match = lines[lineIdx].match(HTML_LINE_RE);
    const existingHtml = match[1];
    lines[lineIdx] = `      html: \`${figureHtml(image)}${existingHtml}\`,`;
  });

  fs.writeFileSync(filePath, lines.join("\n"));
  console.log(`  Updated ${filename}`);
}

async function main() {
  if (!process.env.PEXELS_API_KEY) {
    console.error("PEXELS_API_KEY is not set. Aborting without making changes.");
    process.exit(1);
  }

  const files = fs
    .readdirSync(PRACTICE_AREAS_DIR)
    .filter((f) => f.endsWith(".ts"));

  console.log(`Found ${files.length} practice-area files.`);

  for (const file of files) {
    try {
      await processFile(file);
    } catch (err) {
      console.error(`Failed to process "${file}": ${err.message}`);
      console.error("Continuing with remaining files.");
    }
  }

  console.log("\nDone. Review the diff (git diff content/practice-areas public/images/practice-areas) and commit manually.");
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
