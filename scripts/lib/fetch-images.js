/**
 * Shared Pexels image-fetching utility.
 * Used by scripts/generate-article.js (per-article images) and
 * scripts/add-practice-area-images.js (one-time practice-area images).
 */

const fs = require("fs");
const path = require("path");

const PEXELS_SEARCH_URL = "https://api.pexels.com/v1/search";
const PUBLIC_DIR = path.join(__dirname, "..", "..", "public");

/**
 * Search Pexels and download `count` landscape, medium-size photos for `slug`
 * into /public/images/[baseDir]/[slug]/image-N.jpg.
 *
 * @param {string} query - search query
 * @param {number} count - number of images to fetch (default 3)
 * @param {{ slug: string, baseDir?: string }} options
 * @returns {Promise<Array<{ path: string, alt: string, photographer: string, photographerUrl: string }>>}
 */
async function fetchImages(query, count = 3, options = {}) {
  const { slug, baseDir = "blog" } = options;
  if (!slug) throw new Error("fetchImages requires options.slug");

  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) {
    throw new Error("PEXELS_API_KEY is not set");
  }

  const searchUrl = `${PEXELS_SEARCH_URL}?query=${encodeURIComponent(
    query
  )}&per_page=${count}&orientation=landscape`;

  const searchRes = await fetch(searchUrl, {
    headers: { Authorization: apiKey },
  });
  if (!searchRes.ok) {
    throw new Error(
      `Pexels search failed (${searchRes.status}): ${await searchRes.text()}`
    );
  }
  const searchData = await searchRes.json();
  const photos = (searchData.photos || []).slice(0, count);
  if (photos.length === 0) {
    throw new Error(`No Pexels results for query: "${query}"`);
  }

  const outDir = path.join(PUBLIC_DIR, "images", baseDir, slug);
  fs.mkdirSync(outDir, { recursive: true });

  const results = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    const imageUrl = photo.src.medium;
    const filename = `image-${i + 1}.jpg`;
    const destPath = path.join(outDir, filename);

    const imgRes = await fetch(imageUrl);
    if (!imgRes.ok) {
      throw new Error(`Failed to download image ${imageUrl} (${imgRes.status})`);
    }
    const buffer = Buffer.from(await imgRes.arrayBuffer());
    fs.writeFileSync(destPath, buffer);

    results.push({
      path: `/images/${baseDir}/${slug}/${filename}`,
      alt: photo.alt || query,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    });
  }

  return results;
}

module.exports = { fetchImages };
