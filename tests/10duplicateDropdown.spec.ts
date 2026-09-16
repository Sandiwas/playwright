import { test, expect, Locator } from "@playwright/test";

test("veriy duplicate contain or not", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const animalDropdown: Locator = page.locator("#colors>option"); //having Duplicate
  //const animalDropdown: Locator = page.locator("#animals>option"); //Not having duplicate

  const animalOptions: string[] = (await animalDropdown.allTextContents()).map(
    (text) => text.trim(),
  );

  const mySet = new Set<string>(); //Set - duplicate not allowed
  const duplicate: string[] = []; //array -duplicate allowed

  for (const text of animalOptions) {
    if (mySet.has(text)) {
      duplicate.push(text);
    } else {
      mySet.add(text);
    }
  }
  console.log("Orignal array :", animalOptions);
  console.log("Duplicate options are  :", duplicate);
  console.log("Duplicate options are  :", mySet);

  if (duplicate.length > 0) {
    console.log("Duplicate options are found ", duplicate);
  } else {
    console.log("No duplicate option found");
  }
});
