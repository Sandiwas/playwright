

import { test, expect, Locator } from "@playwright/test";
test.only("login  demo", async ({ page }) => {

  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  
  await expect(page.getByRole("link", { name: "Welcome pavanol" }),).toBeVisible();
  await page.waitForTimeout(5000);
  await page.getByRole("link", { name: "Log out" }).click();
});

//It will autorun  when it will failed  retries : 3 , defineConfig function 
