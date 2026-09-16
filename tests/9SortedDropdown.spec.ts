import { test, expect, Locator } from "@playwright/test";

test("verify dropdown sorted or not ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const animalDropdown: Locator = page.locator("#colors>option"); //not soreted
 //const animalDropdown: Locator = page.locator("#animals>option"); //sorted

  const animalOptions: string[] = (await animalDropdown.allTextContents()).map(text => text.trim());

  const animalDropdownArray = [...animalOptions];
  const sortedanimalDropdownArray = [...animalOptions].sort(); //spread operator (...) to avoid mutability of array here what happen to varables  referes to same array so it will impacted so to avoid this we used spread operator 

  expect(animalDropdownArray).toEqual(sortedanimalDropdownArray);  

  console.log("orignal array ",animalDropdownArray);
  console.log("soretd  array ",sortedanimalDropdownArray);

  await page.waitForTimeout(3000);
});



