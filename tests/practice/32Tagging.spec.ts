import { expect, test } from "@playwright/test";

test("check title of the home page", { tag: "@sanity" }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
});

test("Check nevigation to the store page", {tag:"@regression"}, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await expect(page).toHaveTitle("Google");
  //await page.getByRole("link", { name: "Store" }).click();
  //await page.locator('a:has-text("Store")').click();
  //await page.locator('a:text-is("Store")').click();
  await page.locator('a:text("Store")').click();
});



test("check top recommendations", { tag: ["@sanity", "@regression"] }, async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.locator('text="Store"').click();
  await expect(page.locator('text="Popular on the Google Store."')).toHaveText("Popular on the Google Store.");
});




/*
1. Run all sanity tests:
    npx playwright test tests/tagging.spec.ts --grep "@sanity" 


2. Run all regression tests:
    npx pl"@regression"aywright test tests/tagging.spec.ts --grep 

3. Run tests which are belongs to both sanity & regression

npx playwright test tests/tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"

(?=.*@sanity)
(?=.*@regression)

(?=.*@sanity)(?=.*@regression)

4. Run tests belongs to either sanity or regression.
    npx playwright test tests/tagging.spec.ts --grep "@sanity|@regression"

5. Run sanity tests which are not belongs to regression (special case)
    npx playwright test tests/tagging.spec.ts --grep "@sanity" --grep-invert "@regression"

    npx playwright test ./tests/practice/32Tagging.spec.ts --grep '@sanity' --grep-invert "@regression" 


    */