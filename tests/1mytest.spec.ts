import { test, expect } from "@playwright/test";

//syntax

/* test("titel", () => {
  //step1;
  //step2;
  //step3;
});
 */
//fixture -global varibale : page browser

test("verify page title", async ({ page }) => {
  await page.goto("https://automationexercise.com/");

  let title: string = await page.title();
  console.log("Title : ",title);
  
  await expect(page).toHaveTitle("Automation Exercise");
});
