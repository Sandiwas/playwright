import { expect, Locator, test } from "@playwright/test";

test("Autosuggesion Dropdown", async ({ page }) => {
  await page.goto("https://www.amazon.in/", { waitUntil: "domcontentloaded" });

  await page.getByRole("searchbox").fill("smartphone");
  await page.waitForTimeout(5000);

  //1. Get all the suggested options -->CTRL+SHIFT on dom ..> emulate focuseed page

  const options = page.locator("div[role='row']");
  const count: number = await options.count();

  await expect(options).toHaveCount(10);
  expect(count).toBe(10);
  expect(count).toBeGreaterThan(5);
  console.log("count of suggetions after search : ", count);

  //2. print all suggestion options in the console
  for (let i = 0; i < count; i++) {
    const suggestion: string = await options.nth(i).innerText();
    console.log(suggestion);
  }

  //3.print single option from dropdowm
  const option: string = await options.nth(0).innerText();
  console.log("5th option is :", option);

  //5. print option from dropdown using Array Map

  const suggesitonArray: string[] = (await options.allTextContents()).map((suggestion) => suggestion.trim());

  for (const suggestion of suggesitonArray) {
    console.log(suggestion);
  }
  console.log("done");

  await page.waitForTimeout(5000);

  //4. Select/click on smart phome iteam
  for (let i = 0; i < count; i++) {
    const suggestion = await options.nth(i).innerText();
    if (suggestion === "smartphone under 20000 5g mobile") {
      await options.nth(i).click();
      break;
    }
  }
});
