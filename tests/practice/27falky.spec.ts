import { test, expect } from "@playwright/test";

test("Flaky test Demo", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#login2")).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
});
