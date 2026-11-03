import { test, expect, chromium } from "@playwright/test";

test("authentictaed popup", async () => {
    
  const browser = await chromium.launch();
  const context = await browser.newContext({ httpCredentials: { username: "admin", password: "admin" } });
  const page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/basic_auth");

  //await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth", { waitUntil: "domcontentloaded" });

  await page.waitForLoadState("domcontentloaded");
  await expect(page.getByText("Congratulations! You must have the proper credentials.")).toBeVisible();
  await page.waitForTimeout(5000);
});


