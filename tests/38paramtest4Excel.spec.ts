import { test, expect } from "@playwright/test";
import * as fs from "fs";
import * as XLSX from "xlsx";

// 1. First, we read the complete Excel file and store it in a Workbook object.
// 2. Then we get the name of the first sheet using workbook.SheetNames[0].
// 3. Next, we access that sheet from the workbook and store it in a Worksheet object.
// 4. Finally, we convert the worksheet into JSON and use it for data-driven testing.


//Loaded excel file
//file--> workbook---sheets--rows & columns

const excelPath = "testdata/data.xlsx";
const workbook = XLSX.readFile(excelPath);
const firstSheet = workbook.SheetNames[0];
const worksheet = workbook.Sheets[firstSheet];

//convert sheet into json
const loginData:any=XLSX.utils.sheet_to_json(worksheet);
console.log(loginData);

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



// 1. Playwright test file ko scan karta hai
//         │
//         ▼
// console.log(loginData)  ← 1st time

// 2. Worker start hota hai aur test execute karta hai
//         │
//         ▼
// console.log(loginData)  ← 2nd time

// 3. Test run hote hain