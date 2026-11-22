import { test, expect, Locator } from "@playwright/test";

test.describe.configure({mode : 'parallel'})

test("test1", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  console.log("First Test1");
});

test("test2", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  console.log("Seconds Test2");
});

test("test3", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  console.log("Third Test3");
});

test("test4", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  console.log("Forth Test4");
});

test("Test5", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  console.log("Forth Test5");
});

// By default, Playwright creates workers based on the number of logical CPU cores available on the machine.
