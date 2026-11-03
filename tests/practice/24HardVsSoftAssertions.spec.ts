import { expect, test } from "@playwright/test";

test("soft and hard assertion", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", { waitUntil: "domcontentloaded" });

  //Hard assertion
 
  await expect(page).toHaveTitle("Demo Web Shop2");
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

  const logo =  page.locator("img[alt='Tricentis Demo Web Shop']");
  await expect(logo).toBeVisible();

  //Soft assertion

/*    await expect.soft(page).toHaveTitle("Demo Web Shop2"); //fail
   await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

   const logo =  page.locator("img[alt='Tricentis Demo Web Shop']");
   await expect(logo).toBeVisible(); */

  
});
