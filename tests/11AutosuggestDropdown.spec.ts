import { test, expect, Locator } from "@playwright/test";

test("Autosuggesion Dropdown", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  await page.getByRole("searchbox").fill("smartphone"); //search Test
  await page.waitForTimeout(5000);

  //1. Get all the suggested options -->CTRL+SHIFT on dom ..> emulate focuseed page

  const options: Locator = page.locator("div[role='row']");
  const count: number = await options.count();
  console.log(count);
  expect(count).toBe(10);
  await expect(options).toHaveCount(10);

  console.log(await options.nth(0).innerText());
  console.log(await options.allInnerTexts());

  //2. print all suggestion options in the console
  for (let i = 0; i < count; i++) {
    //const suggestion= await options.nth(i).textContent(); //DOM text
    const suggestion = await options.nth(i).innerText(); //visible test
    console.log(suggestion);
  }

  //3.print single option from dropdowm

  const option5 = await options.nth(5).textContent();
  console.log(option5);

  //4. Select/click on smart phome iteam
  for (let i = 0; i < count; i++) {
    //const suggestion= await options.nth(i).textContent(); //DOM text
    const suggestion = await options.nth(i).innerText(); //visible test
    if (suggestion === "smartphone under 25000") {
      options.nth(i).click();
      break;
    }
  }

//5. print option from dropdown using Array Map
console.log("\n print option from dropdown using Array Map");

const optionall:string[]=(await options.allTextContents()).map(text => text);
  for(const option of optionall){
    console.log(option);
  }
  await page.waitForTimeout(5000);
});
