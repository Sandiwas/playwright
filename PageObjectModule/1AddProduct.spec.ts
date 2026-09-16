import { test, expect } from "@playwright/test";
import { LoginPage } from "./LoginPage";
test("Login test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  const loginPage = new LoginPage(page);

  await loginPage.performLogin("pavanol", "test@123");
  await expect(page).toHaveURL("https://www.demoblaze.com/");
  await page.waitForTimeout(5000);
});
