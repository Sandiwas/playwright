import { test, expect } from "@playwright/test";

test("test", async ({ page ,context}, testInfo) => {
  page.context().tracing.start({screenshots:true,snapshots:true,sources:true});

  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page.getByRole("link", { name: "Log in" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Email:" }).fill("wasekarsandip@gmail.com");
  await page.getByRole("textbox", { name: "Password:" }).fill("admin@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.locator("body")).toContainText("wasekarsandip@gmail.com");
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
   await context.tracing.stop({ path: "./trace.zip" });

  await testInfo.attach("Homepage Trace", { path: "./trace.zip", contentType: "application/zip" });
});
