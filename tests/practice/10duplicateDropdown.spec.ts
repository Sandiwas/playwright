import { test, expect, Locator } from "@playwright/test";

test("veriy duplicate contain or not", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  const colorDropdown = page.locator("#colors>option");

  const colourArray: string[] = (await colorDropdown.allTextContents()).map((color) => color.trim());

  const mySet: Set<string> = new Set<string>();
  const duplicate: string[] = [];

  for (const colour of colourArray) {
    if (!mySet.has(colour)) {
      mySet.add(colour);
    } else {
      duplicate.push(colour);
    }
  }

  console.log("Orignal array : ", colourArray);
  console.log("Duplicate options are : ", duplicate);
  console.log("Without duplicate ", mySet);
    console.log("Without duplicate ", Array.from(mySet));

  if (duplicate.length > 0) {
    console.log("Duplicate options are found ", duplicate);
  } else {
    console.log("No duplicate option found");
  }
});
