import { test, expect, Locator } from "@playwright/test";

test("Visual Testing", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  //await page.goto("https://demowebshop.tricentis.com/register");
  await page.waitForTimeout(2000);
  
  //1st way 
  //expect(await page.screenshot()).toMatchSnapshot("Homepage.png");
  
  //2nd way 
  await expect(page).toHaveScreenshot();

 const logo=page.locator("img[alt='Tricentis Demo Web Shop']");
 expect(await logo.screenshot()).toMatchSnapshot("logo.png")
});
