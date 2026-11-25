import { test, expect } from "@playwright/test";
test.setTimeout(30000);
//test.describe.configure({retries : 2})
test("Flaky test Demo", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#login2")).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole('button',{name : "Log in"}).click();
  await expect(page.getByRole("link", { name: "Welcome pavanol" })).toBeVisible({ timeout: 8000 });
  await page.locator("text = Log out").click();
  const loginLink =  page.getByRole("link", { name: "Log in" });
  console.log(await loginLink.textContent())
  expect(await loginLink.textContent()).toBe("Log in");
});


test.only("Flaky test Demo using global level", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#login2")).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Welcome pavanol" })).toBeVisible({ timeout: 8000 });
  await page.locator("text = Log out").click();
  const loginLink = page.getByRole("link", { name: "Lo in" });
  console.log(await loginLink.textContent());
  expect(await loginLink.textContent()).toBe("Log in");
});


//npx playwright test ./tests/practice/27falky.spec.ts --retries 2    

