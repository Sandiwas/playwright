import { test, expect, Locator } from "@playwright/test";

test("multi selected dropdown", async ({ page }) => {
  await page.goto("https://sdetqa.vercel.app/autoplay", { waitUntil: "domcontentloaded" });

  const listBoxOption: Locator = page.locator("#colors");

  await expect(listBoxOption).toBeVisible();
  await expect(listBoxOption).toHaveValue("blue"); //default  blue selelct validating here

  await listBoxOption.selectOption([{ label: "Blue" }, { label: "Green" }, { label: "Red" }]);
  // await listBoxOption.selectOption([{ value: "blue" }, { value: "green" }, { value: "yellow" }]);
  // await listBoxOption.selectOption([{ index: 0 }, { index: 2 }, { index: 3 }]);

  await page.waitForTimeout(5000);

  //2) check number of options in dropdown (count)
  const colorDropdown: Locator = page.locator("#colors>option");
  console.log(colorDropdown); //locator('#colors>option') eske andar 4 ele he

  console.log(await colorDropdown.count());

  await expect(colorDropdown).toHaveCount(4);
  expect(await colorDropdown.count()).toBe(4);

  //  3) check an option present in the dropdown

  // const textOption:string[]=(await colorDropdown.allTextContents()).map((color)=> color.trim());

  const colorArray: string[] = await colorDropdown.allTextContents();

  const newColorArray:string[] = colorArray.map((color) => color.trim());
  console.log(Array.from(newColorArray));

  expect(newColorArray).toContain("Red");
  console.log(newColorArray[3]);
  expect(newColorArray[3].toLowerCase()).toBe("yellow");

  //4) pointing options from dropdown

  for (const color of newColorArray) {
    console.log(color);
  }
});
