import { test, expect } from "@playwright/test";
import fs from "fs";

const jsonPath = "testData/data.json";
const loginData: any = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));

test.describe("Login data driven test", () => {
  for (const { email, password, validity } of loginData) {
    test(`Login test with ${email} and ${password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login", { waitUntil: "domcontentloaded" });
      await page.locator("#Email").fill(email);
      await page.locator("#Password").fill(password);
      await page.locator("input[value='Log in']").click();

      if (validity.toLowerCase() === "valid") {
        const email = page.locator(".header-links-wrapper a[href='/customer/info']");
        console.log(await email.textContent());

        await expect(email).toHaveText("demo134@gmail.com", { timeout: 7000 });
        await expect(page.locator(".header-links-wrapper .ico-logout")).toContainText("Log out", { timeout: 7000 });
      } else {
        const error = page.locator(".validation-summary-errors");
        await expect(error).toContainText("error");
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });
  }
});
