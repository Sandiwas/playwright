import { test, expect } from "@playwright/test";

test("test", async ({ page }, testInfo) => {
  const timestamp = Date.now();
  const filePath = "screenshots/" + "homepage" + timestamp + ".png";

  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Email:" }).fill("wasekarsandip@gmail.com");
  await page.getByRole("textbox", { name: "Password:" }).fill("admin@123");
  const filepath = await page.screenshot({ path: filePath });
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("body")).toContainText("wasekarsandip@gmail.com");
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();

  await testInfo.attach("Homepage ScreenShot", { path: filePath, contentType: "image/png" });
});

test.only("capture screenshot buffer mode", async ({ page }, testInfo) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Email:" }).fill("wasekarsandip@gmail.com");
  await page.getByRole("textbox", { name: "Password:" }).fill("admin@123");

  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("body")).toContainText("wasekarsandip@gmail.com");
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
  const screeshotBuffer = await page.screenshot({ fullPage: true });

  await testInfo.attach("Homepage Buffer ScreenShot", { body: screeshotBuffer, contentType: "image/png" });
});
