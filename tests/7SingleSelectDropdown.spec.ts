import { test, Locator, expect } from "@playwright/test";

test("single selelct dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const countrydropdown: Locator = page.locator("#country");

  //1) selelct option from the dropdown (4 ways)

  //   await countrydropdown.selectOption({ value: "uk" });
  //   await page.waitForTimeout(3000);
  //   await countrydropdown.selectOption({ label: "United States" });
  //   await page.waitForTimeout(3000);
  //   await countrydropdown.selectOption({ index: 5 });
  //   await page.waitForTimeout(3000);

  //2) check number of options in dropdown (count)

  const dropdownOptions: Locator = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);


  //  3) check an option present in the dropdown
  //const optionsText: string[] = (await dropdownOptions.allTextContents()).map((text) => text.trim());
  const optionsText: string[] = await dropdownOptions.allTextContents();
  const newOptionsText: string[] = optionsText.map((text) => {
    return text.trim();
  });
  console.log(optionsText.length)

  expect(newOptionsText).toHaveLength(10);
  expect(newOptionsText).toContain("Japan"); // check if the array contain japan

  //4) peinting options from dropdown
  for (const name of newOptionsText) {
    console.log(name);
  }
});
