/*
All locators in Playwright by default work with elements in Shadow DOM. 
The exceptions are:
Locating by XPath does not pierce shadow roots.
*/

import { test, expect, Locator } from "@playwright/test";

test("shadow dom", async ({ page }) => {
  await page.goto("https://shop.polymer-project.org/");

  const showNow = page.locator('a[aria-label="Men\'s Outerwear Shop Now\"]');
  await showNow.click();
  await page.waitForTimeout(5000);
  console.log(await page.locator(".title").count());
  
  await expect(page.locator(".title")).toHaveCount(16);
  const allProduct: Locator[] = await page.locator(".title").all();

  expect(allProduct).toHaveLength(16);
  expect(allProduct.length).toBe(16);
  expect(await page.locator(".title").allInnerTexts()).toContain("Android Colorblock Hooded Pullover");
  await page.waitForTimeout(3000);
});
