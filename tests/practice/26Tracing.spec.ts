import { test, expect } from "@playwright/test";
  

//note pahile trace ko off karna hoga config,file ke tab ye work karge ye replce nahi karta 
//File level  
//test.use({ trace: "on" });

  //file leve we can set test levele and descript block level as well 
  test.setTimeout(30000);
  //test.use({headless:false});


test("trace Demo", async ({ page, context }, testInfo) => {

  await context.tracing.start({ screenshots: true, snapshots: true, sources: true });

  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Welcome pavanol" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
  await context.tracing.stop({ path: "Newtrace.zip" });
  await context.close();

  await testInfo.attach("New Trace", { path: "Newtrace.zip", contentType: "application/zip" });

});

test("trace Demo with CLI ", async ({ page, context }, testInfo) => {

  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Welcome pavanol" })).toBeVisible({ timeout: 5000 });
  await page.getByRole("link", { name: "Log out" }).click();

  await context.close();

});


test.only("trace Demo with CLI using test level config ", async ({ page, context }, testInfo) => {

  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button",{ name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Welcome pavanol" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();

  await context.close();
});

//PS C:\Ginger_Solution_New\playwright> npx playwright test ./tests/practice/26Tracing.spec.ts --trace on