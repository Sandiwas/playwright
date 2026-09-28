import { test, expect } from "@playwright/test";

test("first test", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  let title: string = await page.title();
  console.log("Title of the page :", title);

  await expect(page).toHaveTitle(title);
  await expect(page).toHaveURL("https://automationexercise.com/");
});
