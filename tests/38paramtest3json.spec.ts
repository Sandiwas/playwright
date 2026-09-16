import { test, expect } from "@playwright/test";
import * as fs from "fs";

const jsonPath = "testData/data.json";
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

test.describe("Login data driven test", () => {
  for (const { email, password, validity } of loginData) {
    test(`Login test with ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator('input[value="Log in"]').click();

      if (validity.toLowerCase() === "valid") {
        // Assert logout link is visible - indicates successful login
        const logoutlink = page.locator("a[href='/logout']");
        await expect(logoutlink).toBeVisible({ timeout: 50000 });
      } else {
        // Assert error message is visible
        const errorMsg = page.locator("div.validation-summary-errors span");
        await expect(errorMsg).toBeVisible({ timeout: 50000 });
        // Assert user is still on the login page
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });
  }
});
