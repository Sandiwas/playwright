/*
Most of the time, Playwright will automatically scroll for you before doing any actions. 
Therefore, you do not need to scroll explicitly (Excluding Infinite Scrolling page).

ways to scrolling the page:

1. Scroll by Pixel Values
    Moves the window by a specified number of pixels relative to its current position.

2. Scroll to a Specific Element
    Brings a target element directly into the browser viewport

3. Scroll to bottom of the document
    Moves the view directly to the top or the very bottom of the document
	
4. Scroll Continuously (Infinite Scroll)
*/

import { expect, test } from "@playwright/test";
import { inflate } from "node:zlib";

test.beforeEach("launch Application", async ({ page }) => {
  await page.goto("https://www.worldometers.info/geography/flags-of-the-world/", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/flags-of-the-world/);
});

test("Automatic Scrolling", async ({ page }) => {
  const InFlag = page.locator("span:has-text('India')");
  await expect(InFlag).toBeVisible();
});

test("Scroll by Pixel Values", async ({ page }) => {
  //await page.evaluate(() => window.scrollBy(0, 2000));
  await page.evaluate(() => window.scrollTo(0, 2000));
  const scrollPosition = await page.evaluate(() => window.scrollY);

  console.log("Pixels scrolled:", scrollPosition);
  expect(scrollPosition).toBeGreaterThanOrEqual(1900);
});

test("Scroll to a Specific Element", async ({ page }) => {
  const flagInd = page.getByAltText("Flag of India");
  await flagInd.scrollIntoViewIfNeeded();
  await expect(flagInd).toBeVisible();
});

test("Scroll to bottom of the document", async ({ page }) => {
  //await page.keyboard.press("End");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const xCoordinates = await page.evaluate(() => window.scrollX);
  const yCoordinates = await page.evaluate(() => window.scrollY);

  console.log(xCoordinates);
  console.log(yCoordinates);

  const endLink = page.locator(':text-is("Flags of other entities")').nth(1);
  expect(endLink).toContainText("Flags");
  await expect(page.locator(".text-zinc-200")).toBeVisible();
});

test.only("Scroll to bottom then top", async ({ page }) => {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  await page.waitForTimeout(3000);

  //  await page.evaluate(() => window.scrollTo(0, 0));
  //await page.evaluate(() => window.scrollTo(0, -document.body.scrollHeight));
  await page.keyboard.press("Home");
});
