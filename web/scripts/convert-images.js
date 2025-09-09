#!/usr/bin/env node
/**
 * convert-images.js
 *
 * Usage:
 *  node ./scripts/convert-images.js                 -> converts both webp and avif for found images
 *  node ./scripts/convert-images.js --format=webp  -> converts only webp
 *  node ./scripts/convert-images.js --format=avif  -> converts only avif
 *
 * Behavior:
 *  - Scans these candidate source directories (relative to project web/):
 *      - assets
 *      - public/assets
 *      - src/assets
 *      - dist/assets
 *      - dist
 *  - Finds .png, .jpg, .jpeg files
 *  - Writes optimized outputs under web/public/optimized preserving relative paths:
 *      web/public/optimized/<source_relative_path>.webp
 *      web/public/optimized/<source_relative_path>.avif
 *
 * Notes:
 *  - If no source images are present the script exits gracefully.
 *  - Uses sharp; ensure devDependency "sharp" is installed (it's added to package.json).
 */

const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const os = require('os');

let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('sharp is not installed. Run `npm install` in the web/ folder and try again.');
  process.exit(1);
}

const projectWebDir = path.resolve(__dirname, '..'); // web/
const sourceDirs = [
  path.join(projectWebDir, 'assets'),
  path.join(projectWebDir, 'public', 'assets'),
  path.join(projectWebDir, 'src', 'assets'),
  path.join(projectWebDir, 'dist', 'assets'),
  path.join(projectWebDir, 'dist')
];

const outBase = path.join(projectWebDir, 'public', 'optimized');

const SUPPORTED_EXT = ['.png', '.jpg', '.jpeg'];

function parseArgs() {
  const args = process.argv.slice(2);
  const out = { formats: ['webp', 'avif'] };
  for (const a of args) {
    if (a.startsWith('--format=')) {
      const fmt = a.split('=')[1];
      if (fmt === 'webp' || fmt === 'avif') out.formats = [fmt];
    }
  }
  return out;
}

async function findFiles(dir) {
  const results = [];
  async function recurse(current) {
    let entries;
    try {
      entries = await fsp.readdir(current, { withFileTypes: true });
    } catch (err) {
      return;
    }
    for (const e of entries) {
      const full = path.join(current, e.name);
      if (e.isDirectory()) {
        await recurse(full);
      } else if (e.isFile()) {
        const ext = path.extname(e.name).toLowerCase();
        if (SUPPORTED_EXT.includes(ext)) results.push(full);
      }
    }
  }
  await recurse(dir);
  return results;
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

function relativeFromSource(filePath, sourceRoot) {
  return path.relative(sourceRoot, filePath);
}

async function convertFile(src, target, format) {
  const dir = path.dirname(target);
  await ensureDir(dir);
  try {
    const pipeline = sharp(src);
    if (format === 'webp') {
      await pipeline.webp({ quality: 75 }).toFile(target);
    } else if (format === 'avif') {
      await pipeline.avif({ quality: 50 }).toFile(target);
    }
    return { src, target, format, ok: true };
  } catch (err) {
    return { src, target, format, ok: false, error: err.message };
  }
}

async function main() {
  const { formats } = parseArgs();
  console.log('convert-images: formats=', formats.join(', '));
  const allSources = [];

  for (const d of sourceDirs) {
    try {
      const stat = await fsp.stat(d);
      if (stat && stat.isDirectory()) {
        const files = await findFiles(d);
        if (files.length) {
          // attach source root to each file for preserved structure
          for (const f of files) allSources.push({ file: f, root: d });
        }
      }
    } catch (err) {
      // ignore non-existing dirs
    }
  }

  if (allSources.length === 0) {
    console.log('No source images found in expected locations. Nothing to convert.');
    console.log('Checked folders:', sourceDirs.map(p => path.relative(projectWebDir, p)).join(', '));
    return;
  }

  console.log(`Found ${allSources.length} images to process.`);
  const concurrency = Math.max(1, Math.floor(os.cpus().length / 2));
  const queue = allSources.slice();
  const results = [];

  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      for (const fmt of formats) {
        const rel = relativeFromSource(item.file, item.root);
        const outRel = rel.replace(path.extname(rel), `.${fmt}`);
        const outPath = path.join(outBase, outRel);
        // ensure deterministic directories
        const r = await convertFile(item.file, outPath, fmt);
        results.push(r);
        if (!r.ok) console.error('Failed:', r);
        else console.log(`${fmt} -> ${path.relative(projectWebDir, outPath)}`);
      }
    }
  }

  // start workers
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);

  const succeeded = results.filter(r => r.ok).length;
  const failed = results.filter(r => !r.ok).length;
  console.log(`Done. succeeded=${succeeded}, failed=${failed}`);
  if (failed > 0) process.exitCode = 2;
}

main().catch(err => {
  console.error('convert-images: fatal', err);
  process.exit(1);
});
