import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await page.getByRole("link", { name: "Log in" }).click();
  await page.locator("#loginusername").fill("pavanol");
  await page.locator("#loginpassword").fill("test@123");
  await page.getByRole("button", { name: "Log in" }).click();
  await expect(page.getByRole("link", { name: "Log out" })).toBeVisible();
  await page.getByRole("link", { name: "Log out" }).click();
  await expect(page.locator("#login2")).toContainText("Log in");
});





//npx playwright codegen [options] [url]
//npx playwright codegen
//npx playwright codegen -o tests/24jcodegen.ts
//npx playwright codegen --device "iPhone 15" -o tests/24kcodegen.ts https://www.demoblaze.com/
//npx playwright codegen --browser firefox -o tests/24kcodegen.ts
//npx playwright codegen --browser firefox -o tests/24kcodegen.ts https://www.demoblaze.com/
//npx playwright codegen --viewport-size=1920,1080
//npx playwright codegen --viewport-size=1366,768 -o tests/codegen.ts https://www.demoblaze.com/

// npx playwright codegen --browser chromium
// npx playwright codegen --browser firefox
// npx playwright codegen --browser webkit

// npx playwright codegen \
//   --browser chromium \
//   --device "iPhone 15" \
//   -o tests/24kcodegen.ts \
//   https://www.demoblaze.com/


//npx playwright test ./tests/practice/24Icodegen.spec.ts --debug
