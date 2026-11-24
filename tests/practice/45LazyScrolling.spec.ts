import { expect, test } from "@playwright/test";

test("Lazy scrolling", async ({ page }) => {
  await page.goto("https://www.booksbykilo.in/new-books?pricerange=201to500", { waitUntil: "domcontentloaded" });

  let previousHeight = 0;
  let bookFound = false;
  while (true) {
    
    const titles = await page.locator("#productsDiv h3").allTextContents();
    console.log(titles);
    

    if (titles.includes("Medicine News (The History News)")) {
      console.log("Book Found");
      bookFound = true;
      expect(bookFound).toBeTruthy();
      break;
    }

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    await page.waitForTimeout(2000);
    
    const currentHeight = await page.evaluate(() => window.scrollY);

    if (previousHeight === currentHeight) {
      console.log("==============================");
      console.log(`Previous height: ${previousHeight}`);
      console.log(`Current height: ${currentHeight}`);
      break;
    }

    console.log("==============================");

    console.log(`Previous height: ${previousHeight}`);
    console.log(`Current height: ${currentHeight}`);

    previousHeight = currentHeight;
  }
  console.log("You reached End of the page.....");

  if (!bookFound) {
    console.log("Book Not Found!");
  }
});
