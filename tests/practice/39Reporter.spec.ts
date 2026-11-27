import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "serial" });

test.beforeEach("Launch Application", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/login", { waitUntil: "domcontentloaded" });
});

test("validate logo", async ({ page }) => {
  await expect(page.getByAltText("Tricentis Demo Web Shop")).toBeVisible();
});

test("validate title", async ({ page }) => {
  // console.log(await page.title());

  await expect(page).toHaveTitle("Demo Web Shop. Login");
});

test("Search Product and Validate product", async ({ page }) => {
  await expect(page).toHaveTitle("Demo Web Shop. Login");
  await page.locator(".search-box-text").fill("laptop", { timeout: 6000 });
  await page.locator("input[value='Search']").click();
  await expect(page.locator("h2 a").nth(0)).toContainText("laptop1", { ignoreCase: true });
});

// npx playwright test --headed
// npx playwright test --debug
// npx playwright test --grep "@sanity"
// npx playwright test --project=chromium
// npx playwright test --workers=4
// npx playwright test --retries=2
// npx playwright test --reporter=html
// npx playwright test --trace=on
// npx playwright test --timeout=00

// --browser;
// --config;
// --debug;
// --forbid - only;
// --grep;
// --headed;
// --list;
// --max - failures;
// --project;
// --reporter;
// --repeat - each;
// --retries;
// --shard;
// --timeout;
// --trace;
// --ui;
// --workers;

// playwright.config.ts;

// TypeScript;
// export default defineConfig({
//   reporter: "html",
//   workers: 4,
//   retries: 2,
// });
