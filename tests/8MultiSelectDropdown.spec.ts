import { test, Locator, expect } from "@playwright/test";

test("multi selelcted dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //1) selelct option from the dropdown (4 ways)
  const listBoxOption: Locator = page.locator("#colors:");
  //await listBoxOption.selectOption(['Red', 'Blue', 'Green']); //using visible test
  //await listBoxOption.selectOption(['red', 'blue', 'green']); //using value attribute
  //await listBoxOption.selectOption([{ label: "Red" }, { label: "Blue" },{ label: "Green" },]);// using label
  //await listBoxOption.selectOption([{ index: 0 },{ index: 1 },{ index :2 },]); //using index
  await page.waitForTimeout(3000);

  //2) check number of options in dropdown (count)

  const colorDropdown: Locator = page.locator("#colors>option");
  console.log(await colorDropdown.count());
  await expect(colorDropdown).toHaveCount(7);

  //  3) check an option present in the dropdown

  // const colorDropdownarr:string[]=(await colorDropdown.allTextContents()).map(ele => ele.trim())

  const colourArr: string[] = await colorDropdown.allTextContents();
  const arr: string[] = colourArr.map((text) => text.trim());
  console.log(arr.length);
  expect(arr).toContain("Red");

  //4) peinting options from dropdown

  for (const text of arr) {
    console.log(text);
  }
});
