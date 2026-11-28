import { expect, test } from "@playwright/test";


test.skip("page fixture test ", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", { waitUntil: "load" });
  await expect(page.locator("text= Register")).toBeVisible();
  await expect(page).toHaveURL(/tricentis/);
});

test.skip("context fixture test ", async ({ context }) => {
  const page1 = await context.newPage();
  await page1.goto("https://demowebshop.tricentis.com/", { waitUntil: "load" });
  await expect(page1.locator("text= Register")).toBeVisible();
  await expect(page1).toHaveURL(/tricentis/);

  const page2 = await context.newPage();
  await page2.goto("https://demowebshop.tricentis.com/", { waitUntil: "load" });
  await expect(page2.locator("text= Register")).toBeVisible();
  await expect(page2).toHaveURL(/tricentis/);
  await context.close();
});

/* browser
    - context 1
        - page1
        -page2

    - context 2
        - page1
        - page2
             */

test("browser fixture test ", async ({ browser }) => {
    test.setTimeout(80000);

  const context1 = await browser.newContext();

  const page1Context1 = await context1.newPage();
  await page1Context1.goto("https://www.google.com/", { waitUntil: "domcontentloaded" });
  await expect(page1Context1).toHaveURL(/google/);


  const page2Context1 = await context1.newPage();
  await page2Context1.goto("https://www.rediff.com/", { waitUntil: "domcontentloaded" });
  await expect(page2Context1).toHaveURL(/rediff/);


  const context2 = await browser.newContext();
  const page1Context2 = await context2.newPage();

  await page1Context2.goto("https://www.google.com/", { waitUntil: "domcontentloaded" });
  await expect(page1Context2).toHaveURL(/google/);




  const page2Context2 = await context2.newPage();
  await page2Context2.goto("https://www.rediff.com/", { waitUntil: "domcontentloaded" });
  await expect(page2Context2).toHaveURL(/rediff/);


  await context1.close();
  await context2.close();
});
