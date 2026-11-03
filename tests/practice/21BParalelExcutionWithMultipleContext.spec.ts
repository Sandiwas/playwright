import { chromium, test } from "@playwright/test";

test("Handle multiple contexts in parallel", async () => {
  const browser = await chromium.launch();

  // User 1 context (standard_user)
  const firstContext = await browser.newContext();
  const pageContextFirst = await firstContext.newPage();

  // User 2 context (visual_user)
  const secondContext = await browser.newContext();
  const pageContextSecond = await secondContext.newPage();

  // Execute both user workflows concurrently
  await Promise.all([
    // User 1 login
    (async () => {
      await pageContextFirst.goto("https://www.saucedemo.com/");

      await pageContextFirst.getByPlaceholder("Username").fill("standard_user");
      await pageContextFirst.getByPlaceholder("Password").fill("secret_sauce");
      await pageContextFirst.locator("input#login-button").click();

      await pageContextFirst.waitForTimeout(5000);
    })(),

    // User 2 login
    (async () => {
      await pageContextSecond.goto("https://www.saucedemo.com/");

      await pageContextSecond.getByPlaceholder("Username").fill("visual_user");
      await pageContextSecond.getByPlaceholder("Password").fill("secret_sauce");
      await pageContextSecond.locator("input#login-button").click();

      await pageContextSecond.waitForTimeout(5000);
    })(),
  ]);

  // Close both contexts
  await Promise.all([firstContext.close(), secondContext.close()]);

  await browser.close();
});
