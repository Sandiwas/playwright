import { expect, test } from "@playwright/test";

test("Autowating and forcing ", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  test.setTimeout(50000); //50 sec ye timeout text excute kitne time me hogi wo he
  test.slow(); // 90 sec (default is 30 sec); // ye bhi dafault timout ko triple karta he

  //Assertion - auto wait works (default time is 5 sec )
  await expect(page).toHaveURL("https://demowebshop.tricentis.com/", { timeout: 10000 }); //ye timeout accertion timout ko badhata he
  await expect(page.getByRole("heading", { name: "Welcome to our store" })).toHaveText("Welcome to our store", { timeout: 10000 });
  await expect(page.getByRole("heading", { name: "Welcome to our store" })).toBeVisible({ timeout: 10000 });

  //Action - auto wait works (default time is 30 sec )
  await page.locator(".search-box-text").fill("Laptop", { force: true }); //search box - force action (it will not so actionalibily )
  await page.locator(".search-box-button").click({ force: true }); // clicking on search button - force action
});
