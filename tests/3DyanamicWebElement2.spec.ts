import { test, expect, Locator } from "@playwright/test";

test("Handale Dynamics element ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //await page.locator("//button[contains(@name,'st')]").click();

  for (let i = 0; i < 5; i++) {
    //const button: Locator = page.locator("//button[contains(@name,'st')]");
    //button.click();
    //await page.waitForTimeout(2000);

    //usign playwrite specific method
    const btn: Locator = page.getByRole("button", { name: /START|STOP/ });
    await btn.click();
    await page.waitForTimeout(2000);
  }
});
