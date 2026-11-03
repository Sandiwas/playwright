import { expect, test } from "@playwright/test";

test("playwrite assertion demo", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  // 1. Auto-retrying assertion (automatically retries until it passes or timesout)

  await expect(page).toHaveURL("https://demowebshop.tricentis.com/"); //wait for correct url

  // Auto-retry: waits for the element to be visible and have the expected text
  await expect(page.locator("text='Welcome to our store'")).toBeVisible();
  await expect(page.locator(':text("Welcome to the new Tricentis store!")')).toHaveText("Welcome to the new Tricentis store!");
  await expect(page.locator(':text-is("Featured products")')).toHaveText("Featured products");

  // 2. Non-retrying assertion (executes immediately, no retry)
  const title = await page.title();
  expect(title.includes("Demo Web")).toBeTruthy(); //no auto retry

  const welcomeText = await page.locator("text='Welcome to our store'").textContent();
  expect(welcomeText).toContain("Welcome");

  //3. Negating matcher
  // await expect(page.locator("text='Welcome to our store'")).not.toBeVisible(); //auto retry //5 sec default 
  // expect(welcomeText).not.toContain("Welcome"); //not auto retry //0ms timeout 

  await page.waitForTimeout(5000);
});
