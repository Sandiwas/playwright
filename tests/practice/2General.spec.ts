import { expect, test } from "@playwright/test";

test("test fill() methid", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded", timeout: 10000 });
  await page.getByPlaceholder("Enter Name").fill("Sandip");

  await page.getByLabel("Sunday").check();

  await page.waitForTimeout(3000);
  await page.getByPlaceholder("Enter Name").fill("Wasekar");
  await page.getByLabel("Sunday").check();
   expect(await page.getByLabel("Sunday").isChecked()).toBe(true);
  await page.waitForTimeout(3000);
   expect(await page.getByLabel("Sunday").isEnabled()).toBe(true);
  await expect(page.getByLabel("Sunday")).toBeChecked();
});
