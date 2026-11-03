import { test, devices } from "@playwright/test";

test.use({ ...devices["iPhone 15"] });

test("Emulator test on iPhone 14 ", async ({ browser }) => {
  const context = await browser.newContext({ ...devices["iPhone 15"] });
  const page = await context.newPage();

  await page.goto("https://www.google.com/");
  await page.waitForTimeout(10000);
});

test.only("Emulator test on iPhone 14 global", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://www.google.com/");
  await page.waitForTimeout(10000);
});
