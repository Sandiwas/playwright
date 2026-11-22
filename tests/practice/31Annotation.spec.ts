import { test, expect } from "@playwright/test";

/* ## Interview One-Line Meanings

- **`test.only()`** → Run only this test.
- **`test.skip()`** → Skip this test.
- **`test.fail()`** → This test is expected to fail.
- **`test.fixme()`** → This test is broken or not ready yet.
- **`test.slow()`** → This test is slow, so Playwright increases its timeout.

================================================ */

test.describe.configure({ mode: "serial" }); //serial mode bich me test fail hui to baki test skip hogi 

test("Test 1 only annotaion", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  console.log("Test 1 only annotaion");
});

test.skip("Test2 with only annotioan", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  console.log("Test2 with only annotioan");
});

test("Test3 with skip annotioan with condition", async ({ page, browserName }) => {
  test.skip(browserName === "chromium");
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  console.log("Test3 with skip annotioan with condition");
});


test.fail("Test4 with fail annotioan", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  console.log("Test4 with fail annotioan");
});

test.fixme("Test5 with fixme annotioan", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  console.log("Test5 with fixme annotioan");
});




test("Test6 with slow annotioan", async ({ page }) => {
  test.slow();
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
    console.log("Test5 with fixme annotioan");
});
