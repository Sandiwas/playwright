import { test, expect } from "@playwright/test";
test("Test1", async ({ page }) => {
  //console.log("Executing Test1");
  await page.waitForTimeout(5000);
});

test.fail("Test2", async ({ page }) => {
  //console.log("Executing Test2");
  await page.waitForTimeout(5000);
});

test("Test3", async ({ page }) => {
  //console.log("Executing Test3");
  await page.waitForTimeout(5000);
});


//  1) [chromium] › tests\practice\40LineReporter.spec.ts:2:6 › Test1 ────────────────────────────────
//  2) [chromium] › tests\practice\40LineReporter.spec.ts:7:6 › Test2 ──────────────────────────────── this is line reporter
//Summary section 
  // 2 failed
  //   [chromium] › tests\practice\40LineReporter.spec.ts:2:6 › Test1 ─────────────────────────────────
  //   [chromium] › tests\practice\40LineReporter.spec.ts:7:6 › Test2 ─────────────────────────────────
  // 1 skipped  