import { test, expect } from "@playwright/test";
import fs from "fs";
import XLSX from "xlsx";

const ExcelPath = "testData/data.xlsx";
const Workbook = XLSX.readFile(ExcelPath);
const firstSheet = Workbook.SheetNames[0];
const workSheet = Workbook.Sheets[firstSheet];

//covert excelSheet in json

const loginData: any = XLSX.utils.sheet_to_json(workSheet);

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

        await expect(email).toHaveText("laura.taylor1234@example.com", { timeout: 7000 });
        await expect(page.locator(".header-links-wrapper .ico-logout")).toContainText("Log out", { timeout: 7000 });
      } else {
        const error = page.locator(".validation-summary-errors");
        await expect(error).toContainText("error");
        await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
      }
    });
  }
});
