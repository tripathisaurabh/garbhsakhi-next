import { chromium } from "playwright"; // install this via: npm i -D playwright

const PAGES = ["/", "/About", "/Contact", "/Career", "/privacy", "/terms"];

async function runTests() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const route of PAGES) {
    const url = `http://localhost:3000${route}`;
    console.log(`🧭 Checking ${url} ...`);
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });


    const status = await page.evaluate(() => document.readyState);
    if (status === "interactive" || status === "complete") {
      console.log(`✅ ${route} rendered successfully (${status})`);
    } else {
      console.error(`❌ ${route} not ready (${status})`);
    }


    const title = await page.title();
    if (!title || title.includes("404"))
      console.error(`⚠️ Title missing or 404 on ${route}`);
  }

  await browser.close();
  console.log("✅ All tests finished!");
}

runTests();
