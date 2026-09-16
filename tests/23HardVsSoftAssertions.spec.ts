import { test, expect, Locator } from "@playwright/test";
// hard assertion if assertion failed it will terminate the test means it will not excute nect line of code after failuer assert statemnt
test("Autowaiting and forcing" , async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // await expect(page).toHaveTitle("Demo Web Shop");
  // await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

  // const logo: Locator = page.getByAltText("Tricentis Demo Web Shop");
  // await expect(logo).toBeVisible();

  await expect.soft(page).toHaveTitle("demo Web Shop");
  await expect.soft(page).toHaveURL("https://demowebshop.tricentis.com/");

  const logo1: Locator = page.getByAltText("Tricentis Demo Web Shop");
  await expect.soft(logo1).toBeVisible();
});
