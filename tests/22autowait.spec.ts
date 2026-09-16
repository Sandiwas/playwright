import { test, expect, Locator } from "@playwright/test";

test("playwright assertion demo", async ({ page }) => {

  await page.goto("https://demowebshop.tricentis.com/");

  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

  const welcomeTexth1:Locator=page.getByText("Welcome to our stor");
  await expect(welcomeTexth1).toBeVisible();
  
  const featureProduct:Locator=page.locator('strong:has-text("Featured products")');
  await expect(featureProduct).toHaveText("Featured products");

  const title=await page.title();
  expect(title.includes("Demo Web Shop")).toBeTruthy();

  const welcomeText:string|null=await page.getByText("Welcome to our stor").textContent();
  expect(welcomeText).toContain("Welcome");

  await  expect(page.locator("strong:has-text('Featured products')")).not.toBeVisible();
   expect(welcomeText).not.toContain("Welcome");
   await page.waitForTimeout(3000);


});