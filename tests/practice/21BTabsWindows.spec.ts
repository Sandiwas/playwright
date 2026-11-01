import { expect, test } from "@playwright/test";

test("Handal New Page/Tab", async ({ context }) => {
  const parentPage = await context.newPage();

  await parentPage.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  await parentPage.waitForTimeout(5000);

  const [newPage] = await Promise.all([context.waitForEvent("page"), parentPage.locator("button:has-text('New Tab')").click()]);

  const pages = context.pages();
  console.log("Number of pages : ", pages.length);

  //Appraoch 1: switch between pages and get titles ( using context)

  await expect(pages[0]).toHaveTitle("Automation Testing Practice");
  console.log("first page title is : ", await pages[0].title());
  await expect(pages[0]).toHaveURL("https://testautomationpractice.blogspot.com/");
  console.log("first page url  is : ", pages[0].url());

  await expect(pages[1]).toHaveTitle("SDET-QA Blog");
  console.log("second page title is : ", await pages[0].title());
  await expect(pages[1]).toHaveURL("https://www.pavantestingtools.com/");
  console.log("second page url  is : ", pages[0].url());

  //Appraoch 2: alternate

  console.log("title of parent page", await parentPage.title());
  console.log("Url of parent page", parentPage.url());
  console.log("title of newPage ", await newPage.title());
  console.log("title of newPage ", newPage.url());

  await expect(parentPage).toHaveTitle("Automation Testing Practice");
  await expect(parentPage).toHaveURL("https://testautomationpractice.blogspot.com/");
  await expect(newPage).toHaveTitle("SDET-QA Blog");
  await expect(newPage).toHaveURL("https://www.pavantestingtools.com/");

  await context.close();

});
