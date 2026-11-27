import { test, expect } from "@playwright/test";
import fs from "fs";
import { parse } from "csv-parse/sync";

const csvPath = "testData/data.csv";
const fileContent = fs.readFileSync(csvPath, "utf-8");
const records: any = parse(fileContent, { columns: true, skip_empty_lines: true });

test.describe("Login data driven test", () => {
  for (const data of records) {
    test(`Login test with ${data.email} and ${data.password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login", { waitUntil: "domcontentloaded" });
      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator("input[value='Log in']").click();

      if (data.validity.toLowerCase() === "valid") {
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
