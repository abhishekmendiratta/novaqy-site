/**
 * check-budgets.js
 * CI guard: checks gzipped sizes of built CSS and JS assets against configured budgets.
 *
 * Usage:
 *  - Run after build: node ./scripts/check-budgets.js
 *  - Exits with non-zero code if budgets are exceeded.
 */

const fs = require('fs')
const path = require('path')
const zlib = require('zlib')

const BUILD_DIR = path.resolve(__dirname, '..', 'dist') // astro default build output
const CSS_BUDGET = parseInt(process.env.CSS_BUDGET_BYTES || String(50 * 1024), 10) // 50KB default
const JS_BUDGET = parseInt(process.env.JS_BUDGET_BYTES || String(20 * 1024), 10) // 20KB default

function gzipSize(buffer) {
  try {
    return zlib.gzipSync(buffer, { level: 9 }).length
  } catch (err) {
    console.error('gzip error', err)
    return Infinity
  }
}

function walkDir(dir) {
  const results = []
  if (!fs.existsSync(dir)) return results
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
      results.push(...walkDir(filePath))
    } else {
      results.push(filePath)
    }
  }
  return results
}

function humanBytes(n) {
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  return `${(n / (1024 * 1024)).toFixed(2)} MB`
}

function run() {
  console.log('Checking built asset gzip budgets in:', BUILD_DIR)
  const allFiles = walkDir(BUILD_DIR)

  // filter for css and js bundles (skip source maps)
  const cssFiles = allFiles.filter((f) => f.endsWith('.css') && !f.endsWith('.css.map'))
  const jsFiles = allFiles.filter((f) => (f.endsWith('.js') || f.endsWith('.mjs') || f.endsWith('.cjs')) && !f.endsWith('.map'))

  let totalCss = 0
  let totalJs = 0

  console.log('\nCSS files:')
  if (cssFiles.length === 0) console.log('  (none found)')
  for (const f of cssFiles) {
    const buf = fs.readFileSync(f)
    const gz = gzipSize(buf)
    totalCss += gz
    console.log(`  ${path.relative(BUILD_DIR, f)} — gzipped: ${humanBytes(gz)}`)
  }

  console.log('\nJS files:')
  if (jsFiles.length === 0) console.log('  (none found)')
  for (const f of jsFiles) {
    const buf = fs.readFileSync(f)
    const gz = gzipSize(buf)
    totalJs += gz
    console.log(`  ${path.relative(BUILD_DIR, f)} — gzipped: ${humanBytes(gz)}`)
  }

  console.log('\nTotals (gzipped):')
  console.log(`  CSS total: ${humanBytes(totalCss)} (budget: ${humanBytes(CSS_BUDGET)})`)
  console.log(`  JS total:  ${humanBytes(totalJs)} (budget: ${humanBytes(JS_BUDGET)})`)

  let failed = false
  if (totalCss > CSS_BUDGET) {
    console.error(`\nERROR: CSS gzipped size exceeded budget by ${humanBytes(totalCss - CSS_BUDGET)}`)
    failed = true
  }
  if (totalJs > JS_BUDGET) {
    console.error(`\nERROR: JS gzipped size exceeded budget by ${humanBytes(totalJs - JS_BUDGET)}`)
    failed = true
  }

  if (failed) {
    console.error('\nBudget check failed. Exiting with code 2.')
    process.exit(2)
  } else {
    console.log('\nBudget check passed.')
    process.exit(0)
  }
}

run()
