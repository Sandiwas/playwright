import { chromium, test } from "@playwright/test";

test("Hnadle multiple context", async () => {
  //user 1 context (standard_user)

  const browser = await chromium.launch();

  const firtsContext = await browser.newContext();
  const pageContextFirst = await firtsContext.newPage();

  //user 1 context (visual_user)
  const secondContext = await browser.newContext();
  const pageContextSecond = await secondContext.newPage();

  await pageContextFirst.goto("https://www.saucedemo.com/");

  await pageContextFirst.getByPlaceholder("Username").fill("standard_user");
  await pageContextFirst.getByPlaceholder("Password").fill("secret_sauce");
  await pageContextFirst.locator("input#login-button").click();

  await pageContextSecond.goto("https://www.saucedemo.com/");

  await pageContextSecond.getByPlaceholder("Username").fill("visual_user");
  await pageContextSecond.getByPlaceholder("Password").fill("secret_sauce");
  await pageContextSecond.locator("input#login-button").click();

  await pageContextFirst.waitForTimeout(5000);
  await pageContextSecond.waitForTimeout(5000);

  await firtsContext.close();
  await secondContext.close();

  await browser.close();
});
