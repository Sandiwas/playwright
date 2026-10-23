import { test, expect } from "@playwright/test";

test("Validate Page title", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  let url: string = page.url();
  console.log("url ", url);
  await expect(page).toHaveTitle("Automation Exercise");
  await expect(page).toHaveURL("https://automationexercise.com/");

  let title: string = await page.title();
  console.log(title);
console.log(test.info().config.projects[0].use);
console.log(await page.viewportSize());
});


