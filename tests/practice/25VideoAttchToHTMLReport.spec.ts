import { test, expect } from "@playwright/test";

test("test", async ({ browser }, testInfo) => {
  const context = await browser.newContext({ recordVideo: { dir: ".video/", size: { width: 1920, height: 1080 } } });
  const page=await context.newPage();

  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Email:" }).fill("wasekarsandip@gmail.com");
  await page.getByRole("textbox", { name: "Password:" }).fill("admin@123");

  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("body")).toContainText("wasekarsandip@gmail.com");
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();

  await context.close();

  const videoPath = await page.video()?.path();
  await testInfo.attach("Execution Video", { path: videoPath, contentType: "video/webm" });
});
