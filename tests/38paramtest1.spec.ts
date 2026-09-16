import { test, expect, Locator } from "@playwright/test";

const searchItems: string[] = ["laptop", "Gift card", "smartphone", "monitor"];

//using for-of loop
/* for (const item of searchItems) {
  test(`search test for  ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item); // fill teh text in search box
    await page.locator("input[value='Search']").click(); // click on the button
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {
      ignoreCase: true,
    }); //  check if results appear
  });
}
 */

////using forEach function
/* searchItems.find((item)=>{
      test(`search test for  ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item); // fill teh text in search box
    await page.locator("input[value='Search']").click(); // click on the button
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {ignoreCase: true,}); //  check if results appear
  });
}) */



  test.describe('searching item',()=>{

  searchItems.forEach((item)=>{
      test(`search test for  ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item); // fill teh text in search box
    await page.locator("input[value='Search']").click(); // click on the button
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {ignoreCase: true,}); //  check if results appear
         });
    })
})



  test.describe('searching product',()=>{

  searchItems.forEach((item)=>{
      test(`search test for  ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item); // fill teh text in search box
    await page.locator("input[value='Search']").click(); // click on the button
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {ignoreCase: true,}); //  check if results appear
         });
    })
})
