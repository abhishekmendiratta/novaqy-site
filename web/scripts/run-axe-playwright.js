/**
 * Run axe-core accessibility scan with Playwright
 * Usage: node ./scripts/run-axe-playwright.js [URL]
 * Exits with code 0 when no violations, 2 when violations found, 1 on error.
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const axeCorePath = require.resolve('axe-core/axe.min.js');

(async () => {
  const target = process.argv[2] || process.env.URL || 'http://localhost:3000';
  // Write reports into a standard reports/ directory so CI can archive them reliably
  const outPath = path.resolve(process.cwd(), 'reports', 'a11y-axe-report.json');
  // Ensure reports directory exists
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  let browser;
  try {
    browser = await chromium.launch();
    const page = await browser.newPage();
    console.log(`Opening ${target} ...`);
    await page.goto(target, { waitUntil: 'networkidle' });

    console.log('Injecting axe (via axe-core)...');
    await page.addScriptTag({ path: axeCorePath });

    console.log('Running axe.run() ...');
    const results = await page.evaluate(async () => {
      return await window.axe.run();
    });

    fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
    console.log(`Axe JSON report written to ${outPath}`);
    const violations = results.violations || [];

    if (violations.length > 0) {
      console.error(`Accessibility violations found: ${violations.length}`);
      // Print brief summary
      violations.forEach((v, i) => {
        console.error(`${i + 1}) ${v.id} — ${v.help} (${v.impact}) — Nodes: ${v.nodes.length}`);
      });
      process.exitCode = 2;
    } else {
      console.log('No accessibility violations found by axe.');
      process.exitCode = 0;
    }
  } catch (err) {
    console.error('Error running axe-playwright:', err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
