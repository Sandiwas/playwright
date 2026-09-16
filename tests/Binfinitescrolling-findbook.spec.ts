import { test, expect } from "@playwright/test";

test("Infinite scrolling on booksbykilo.on", async ({ page }) => {
  test.slow();
  // Set timeout for a single test Easy way to triple the default timeout i.e. 30 secs(30000  ms)
  //test.setTimeout(80000); // 8 secs //Set timeout for a single test
  await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500");

  let previousHeight = 0;
  let bookFound = false;

  while (true) {
    const titles = await page.locator("div.category_page  h3").allTextContents();
    if (titles.includes("Stories For Girls")) {
      console.log("Book found");
      bookFound = true;
      expect(bookFound).toBeTruthy();
      break;
    }

    // Scroll to the bottom
    await page.evaluate(() => {
      return window.scrollTo(0, document.body.scrollHeight);
    });

    //OR
    //await page.keyboard.press('End'); // This will also scroll to the bottom

    // Wait for new content to load
    await page.waitForTimeout(3000);
    // Get current scroll height
    const currentHeight = await page.evaluate(() => {
      return document.body.scrollHeight;
    });

    console.log(`Previous height ${previousHeight}`);
    console.log(`Curret height ${currentHeight}`);

    // Check if end of page is reached
    if (currentHeight === previousHeight) {
      break;
    }
    previousHeight = currentHeight;
  }

  console.log("Reached end of the page");
  
  if (!bookFound) {
    console.log("Book not found");
  }
  await page.waitForTimeout(5000);
});
