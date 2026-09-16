
//prerquisite is : npm install csv-parse

// email,password,validity
// laura.taylor1234@example.com,test123,valid
// invaliduser@example.com,wrongpassword,invalid
// validuser@example.com,wrongpassword,invalid
// ,,invalid


import {test ,expect } from "@playwright/test";
import * as fs from "fs";
import {parse} from 'csv-parse/sync'


//Reading data from csv
const csvPath="testData/data.csv";
const fileContent =fs.readFileSync(csvPath,'utf-8');
const records:any =parse(fileContent,{columns:true,skip_empty_lines:true})

test.describe("Login data driven test", () => {
  for (const data of records) {
    test(`Login test with email:${data.email} a nd password : ${data.password}`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#Email").fill(data.email);
      await page.locator("#Password").fill(data.password);
      await page.locator('input[value="Log in"]').click();

      if (data.validity.toLowerCase() === "valid") {
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


