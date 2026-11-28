import { chromium, test, expect } from "@playwright/test";

test("multiple context with differnet user", async () => {
  const browser = await chromium.launch();

  const context_admin = await browser.newContext();
  const context_standerd = await browser.newContext();

  const adminPage = await context_admin.newPage();
  const standerdPage = await context_admin.newPage();

  await adminPage.goto("https://www.saucedemo.com/");
  await standerdPage.goto("https://www.saucedemo.com/");

  await adminPage.getByPlaceholder("Username").fill("problem_user");
  await adminPage.getByPlaceholder("Password").fill("secret_sauce");
  await adminPage.locator("#login-button").click();
  await adminPage.waitForLoadState("load"); //we can use without parameter here load id default parameter ('load' {timeout : 7000})

  await standerdPage.getByPlaceholder("Username").fill("standard_user");
  await standerdPage.getByPlaceholder("Password").fill("secret_sauce");
  await standerdPage.locator("#login-button").click();
  await standerdPage.waitForLoadState("load");

  await expect(adminPage.locator("text = Swag Labs")).toBeVisible();
  await expect(standerdPage.locator("text = Swag Labs")).toBeVisible();
  await context_admin.close();
  await context_standerd.close();

  await browser.close();
});
