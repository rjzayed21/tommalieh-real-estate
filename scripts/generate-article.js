#!/usr/bin/env node
/**
 * Manually-triggered blog article generator.
 * Reads content/article-queue.json, generates the next "pending" article
 * with the Anthropic API, writes it to content/blog/, marks it "published"
 * in the queue, and commits/pushes the result.
 *
 * Usage: ANTHROPIC_API_KEY=... node scripts/generate-article.js
 */

const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");
const matter = require("gray-matter");
const Anthropic = require("@anthropic-ai/sdk");

const ROOT = path.join(__dirname, "..");
const QUEUE_PATH = path.join(ROOT, "content", "article-queue.json");
const BLOG_DIR = path.join(ROOT, "content", "blog");

const MODEL = "claude-sonnet-4-6";
const MAX_ATTEMPTS = 2; // first try + one retry
const PHONE = "(708) 232-0017";

const PRACTICE_AREAS = {
  "residential-real-estate-lawyer": "Residential Real Estate Lawyer",
  "commercial-real-estate-attorney": "Commercial Real Estate Attorney",
  "real-estate-closing-attorney": "Real Estate Closing Attorney",
  "title-issues-attorney": "Title Issues Attorney",
  "purchase-agreement-lawyer": "Purchase Agreement Lawyer",
  "landlord-tenant-lawyer": "Landlord-Tenant Lawyer",
  "real-estate-litigation-attorney": "Real Estate Litigation Attorney",
  "foreclosure-defense-lawyer": "Foreclosure Defense Lawyer",
  "zoning-land-use-attorney": "Zoning & Land Use Attorney",
  "short-sale-attorney": "Short Sale Attorney",
};

const LOCATIONS = {
  "orland-park": "Orland Park",
  "tinley-park": "Tinley Park",
  joliet: "Joliet",
  naperville: "Naperville",
  aurora: "Aurora",
  chicago: "Chicago",
};

function loadQueue() {
  const raw = fs.readFileSync(QUEUE_PATH, "utf8");
  return JSON.parse(raw);
}

function saveQueue(queue) {
  fs.writeFileSync(QUEUE_PATH, JSON.stringify(queue, null, 2) + "\n");
}

function pickNextPending(queue) {
  return queue.find((item) => item.status === "pending");
}

function pickRelatedCandidates(queue, current) {
  return queue
    .filter((item) => item.status === "published" && item.slug !== current.slug)
    .slice(-8)
    .map((item) => ({ slug: item.slug, title: item.title }));
}

function buildPrompt(item, relatedCandidates) {
  const practiceAreaTitle = PRACTICE_AREAS[item.practiceAreaLink] || item.practiceAreaLink;
  const practiceAreaHref = `/orland-park/${item.practiceAreaLink}`;
  const locationTitle = LOCATIONS[item.locationLink] || item.locationLink;
  const locationHref = `/${item.locationLink}/real-estate-lawyer`;
  const today = new Date().toISOString().slice(0, 10);

  const relatedList = relatedCandidates.length
    ? relatedCandidates
        .map((c) => `- "${c.title}" -> /news/${c.slug}`)
        .join("\n")
    : "(none available yet — omit relatedSlugs and skip related-article links)";

  return `You are writing a blog article for Tommalieh Law, a real estate law firm serving the southern Chicago suburbs (Cook, Will, and DuPage counties). Attorney: Tamir Tommalieh. Phone: ${PHONE}.

Write a complete MDX file for this article:
- Title: "${item.title}"
- Target keyword: "${item.targetKeyword}"
- Category: "${item.category}"

Output format — match this exactly, it will be parsed by gray-matter and rendered by an existing Next.js pipeline:

1. YAML frontmatter block delimited by "---" lines containing exactly these keys:
   - title: "${item.title}"
   - description: a one-sentence meta description (150-160 characters) written for search results
   - date: "${today}"
   - category: "${item.category}"
   - faqs: a list of 3-4 { question, answer } objects, answers 2-4 sentences each
   - relatedSlugs: a YAML list of 2-3 slugs chosen from the candidates below (omit this key entirely if no candidates are available)

2. Below the frontmatter, the article BODY in Markdown/MDX:
   - Do NOT include an H1 or a "Table of Contents" heading — both are rendered automatically by the page template from the frontmatter title and the H2/H3 headings.
   - Do NOT include a "Frequently Asked Questions" section in the body — FAQs are rendered separately from the frontmatter "faqs" field only. Do not duplicate them in the body text.
   - Start with a 2-3 sentence intro paragraph that frames the topic and naturally links to Tommalieh Law's practice area page.
   - Then 1,500-2,000 words of body content broken into H2 (##) sections, with H3 (###) subsections where useful.
   - Weave in 3-5 internal links naturally as inline Markdown links, using EXACTLY these URLs where relevant to the content:
     - Practice area page: [${practiceAreaTitle}](${practiceAreaHref}) — link at least once
     - Location page: [real estate lawyer in ${locationTitle}](${locationHref}) — link at least once
     - Related articles (choose 2-3 that fit naturally):
${relatedList}
   - End with a concluding paragraph that summarizes the topic and includes a sentence like: "Contact Tommalieh Law at ${PHONE} to schedule a free consultation."

Write in a professional, plain-English tone for Illinois homeowners and buyers, not other lawyers. Do not invent statutes, case citations, or specific dollar figures/statistics you cannot support generally — keep legal claims accurate at a general, informational level (this is not legal advice).

Output ONLY the raw MDX file content, starting with the opening "---" of the frontmatter. Do not wrap it in code fences. Do not include any explanation before or after.`;
}

function stripCodeFences(text) {
  const trimmed = text.trim();
  const fenceMatch = trimmed.match(/^```(?:mdx|markdown|md)?\n([\s\S]*?)\n```$/);
  return fenceMatch ? fenceMatch[1].trim() : trimmed;
}

async function callClaudeWithRetry(client, prompt) {
  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await client.messages.create({
        model: MODEL,
        max_tokens: 8000,
        messages: [{ role: "user", content: prompt }],
      });
      const text = response.content
        .filter((block) => block.type === "text")
        .map((block) => block.text)
        .join("\n");
      if (!text.trim()) throw new Error("Empty response from API");
      return text;
    } catch (err) {
      lastError = err;
      console.error(`Attempt ${attempt}/${MAX_ATTEMPTS} failed: ${err.message}`);
      if (attempt < MAX_ATTEMPTS) {
        console.error("Retrying once...");
      }
    }
  }
  throw lastError;
}

function validateMdx(mdxText) {
  const { data, content } = matter(mdxText);
  if (!data.title || !data.description || !data.date || !data.category) {
    throw new Error("Generated MDX is missing required frontmatter fields");
  }
  if (!content || content.trim().length < 500) {
    throw new Error("Generated MDX body is too short or empty");
  }
  return { data, content };
}

function run(command, args) {
  console.log(`$ ${command} ${args.join(" ")}`);
  execFileSync(command, args, { cwd: ROOT, stdio: "inherit" });
}

async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("ANTHROPIC_API_KEY is not set. Aborting without making changes.");
    process.exit(1);
  }

  const queue = loadQueue();
  const item = pickNextPending(queue);
  if (!item) {
    console.log("No pending articles in the queue. Nothing to do.");
    return;
  }

  console.log(`Generating article: "${item.title}" (${item.slug})`);

  const relatedCandidates = pickRelatedCandidates(queue, item);
  const prompt = buildPrompt(item, relatedCandidates);
  const client = new Anthropic({ apiKey });

  let mdxText;
  try {
    const raw = await callClaudeWithRetry(client, prompt);
    mdxText = stripCodeFences(raw);
    validateMdx(mdxText);
  } catch (err) {
    console.error(`Failed to generate "${item.slug}" after ${MAX_ATTEMPTS} attempts: ${err.message}`);
    console.error("No files were written or committed. Exiting without changes.");
    process.exit(1);
  }

  const outPath = path.join(BLOG_DIR, `${item.slug}.mdx`);
  fs.mkdirSync(BLOG_DIR, { recursive: true });
  fs.writeFileSync(outPath, mdxText.endsWith("\n") ? mdxText : mdxText + "\n");
  console.log(`Wrote ${path.relative(ROOT, outPath)}`);

  item.status = "published";
  saveQueue(queue);
  console.log(`Marked "${item.slug}" as published in article-queue.json`);

  try {
    run("git", ["add", "content/blog", "content/article-queue.json"]);
    const diff = (() => {
      try {
        execFileSync("git", ["diff", "--cached", "--quiet"], { cwd: ROOT });
        return false;
      } catch {
        return true;
      }
    })();
    if (!diff) {
      console.log("No staged changes detected, skipping commit.");
      return;
    }
    run("git", ["commit", "-m", `Add blog article: ${item.title}`]);
    run("git", ["push"]);
    console.log("Committed and pushed the new article.");
  } catch (err) {
    console.error(`Article was generated and saved locally, but git commit/push failed: ${err.message}`);
    console.error("Resolve the git issue and push manually; the queue has already been updated.");
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
