import { chromium, test } from "@playwright/test";

test("Browser context demo", async () => {
  const browser = await chromium.launch();

  const context1 = await browser.newContext();
  const context2 = await browser.newContext();

  const context1_page = await context1.newPage();
  const context2_page = await context2.newPage();

  await context1_page.goto("https://www.saucedemo.com/");
  await context2_page.goto("https://www.saucedemo.com/");

  await context1.close();
  await context2.close();
  await browser.close();
});
