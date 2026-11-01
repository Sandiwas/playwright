import { test, expect } from "@playwright/test";

test("verify dropdown sorted or not ", async ({ page }) => {
 await page.goto("https://sdetqa.vercel.app/autoplay", { waitUntil: "domcontentloaded" });

  const fruitDropdown = page.locator("#sorted>option");
  const optionArray: string[] = (await fruitDropdown.allTextContents()).map((fruit) => fruit.trim());
  const sortedFruitArray: string[] = [...optionArray].sort();
  expect(optionArray).toEqual(sortedFruitArray);
  console.log("orignal array : ", optionArray);
  console.log("Sorted array : ",sortedFruitArray);
  await page.waitForTimeout(3000);
});
