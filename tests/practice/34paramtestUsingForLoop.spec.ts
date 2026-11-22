import { test, expect, Locator } from "@playwright/test";

const searchProduct: string[] = ["laptop", "Gift card", "smartphone", "monitor"];

//using for-of loop
/* for (const item of searchProduct) {
  test(`serach test for ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    console.log(await page.locator("h2 a").nth(0).textContent());
    await expect(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true });
    expect.soft((await page.locator("h2 a").nth(0).textContent())?.toLowerCase()).toContain(item.toLowerCase());
  });
}

searchProduct.forEach((item) => {
  test(`serach test for ${item} using`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#small-searchterms").fill(item);
    await page.locator("input[value='Search']").click();
    console.log(await page.locator("h2 a").nth(0).textContent());
    await expect(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true }); //  check if results appear
    expect.soft((await page.locator("h2 a").nth(0).textContent())?.toLowerCase()).toContain(item.toLowerCase()); //  check if results appear
  });
}); */


test.describe("searching item", () => {
    test.describe.configure({mode : 'parallel'})
  searchProduct.forEach((item) => {
    test(`serach test for ${item} using`, async ({ page }) => {
      await page.goto("https://demowebshop.tricentis.com/login");
      await page.locator("#small-searchterms").fill(item);
      await page.locator("input[value='Search']").click();
      console.log(await page.locator("h2 a").nth(0).textContent());
      await expect(page.locator("h2 a").nth(0)).toContainText(item, { ignoreCase: true }); //  check if results appear
      expect.soft((await page.locator("h2 a").nth(0).textContent())?.toLowerCase()).toContain(item.toLowerCase()); //  check if results appear
    });
  });
});
