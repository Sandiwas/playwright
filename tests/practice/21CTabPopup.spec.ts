import { chromium, expect, test } from "@playwright/test";

test("pop /tab handle", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const parentPage = await context.newPage();
  await parentPage.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  const [newPage] = await Promise.all([parentPage.waitForEvent("popup"), parentPage.locator("button:has-text('Popup Windows')").click()]);

  await parentPage.waitForTimeout(5000);
  const allPages = context.pages();
  console.log("total number of pages ", allPages.length);

  await allPages[1].waitForTimeout(3000);
  await allPages[2].waitForTimeout(3000);

  console.log("Main page title is : ", await allPages[0].title());
  console.log("first page title is : ", await allPages[1].title());
  console.log("Second page title is : ", await allPages[2].title());

  console.log("Main page URL is : ", allPages[0].url());
  console.log("first page URL is : ", allPages[1].url());
  console.log("Second page URL is : ", allPages[2].url());

  for (const pw of allPages) {
    const title = await pw.title();
    if (title.includes("Fast and reliable end-to-end testing for modern web apps")) {
      await pw.locator('a:has-text("Get started")').click();
      await pw.waitForTimeout(3000);
      pw.close();
    }
  }
  await parentPage.waitForTimeout(5000);
});
