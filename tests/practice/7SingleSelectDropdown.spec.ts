import { test, Locator, expect } from "@playwright/test";

test("single selelct dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  const countryDropdown = page.locator("#country");

  /*   
  await countryDropdown.selectOption({ value: "uk" });
  await page.waitForTimeout(2000);
  await countryDropdown.selectOption({ label: "Australia" });
  await page.waitForTimeout(2000);
  await countryDropdown.selectOption({ index: 9 });
  await page.waitForTimeout(2000);
 */

  //2) check number of options in dropdown (count)

  const dropdownOptions: Locator = page.locator("#country>option");
  await expect(dropdownOptions).toHaveCount(10);

  //  3) check an option present in the dropdown
  //const optionsText: string[] = (await dropdownOptions.allTextContents()).map((country) => country.trim());

  const textOptions: string[] = await dropdownOptions.allTextContents();
  const newOptionsText: string[] = textOptions.map((country) => country.trim());

  await expect(dropdownOptions).toHaveCount(10);
  expect(textOptions).toHaveLength(10);

  console.log(Array.from(newOptionsText));
  console.log("length of array is : ", newOptionsText.length);

  expect(newOptionsText).toContain("Japan");
  expect(newOptionsText[4]).toEqual("France");
  expect(newOptionsText[9]).toBe("India");

  //4) pinting options from dropdown

  for (const nameofCountry of newOptionsText) {
    console.log(nameofCountry);
  }
});
