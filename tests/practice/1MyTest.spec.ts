import { test, expect } from "@playwright/test";

test("Validate Page title", async ({ page }) => {
  await page.goto("https://automationexercise.com/");

  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");

  const title: string = await page.title();
  console.log(title);
  const url: string = page.url();
  console.log("Url : ", url);
});
