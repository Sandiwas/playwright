import { test, Locator, expect, chromium } from "@playwright/test";

test("handle tabs", async () => {
  const browser = await chromium.launch(); //create browser
  const context = await browser.newContext(); //create context

  //createing two pages
  const page1 = await context.newPage(); //create page 1
  const page2 = await context.newPage();

  await page1.goto("https://testautomationpractice.blogspot.com/");
  await expect(page1).toHaveTitle("Automation Testing Practice");

  await page2.goto("https://www.selenium.dev/");
  await expect(page2).toHaveTitle("Selenium");

  await page1.waitForTimeout(3000);
  await page2.waitForTimeout(3000);

  await browser.close();
});



//browser - chromium,firefox,webkit 
//BrowserContext is an isolated browser session that provides separate cookies, cache, local storage, and session storage,
//allowing us to create and test multiple independent user sessions within a single browser instance.
// Browser
//    │
//    ├── BrowserContext (Admin User Session)
//    │      ├── Page1
//    │      └── Page2
//    │
//    ├── BrowserContext (Customer User Session)
//    │      ├── Page1
//    │      └── Page2
//    │
//    └── BrowserContext (Guest User Session)
//           └── Page1


// ## Structure

// ```text
// Browser
//     │
//     └── BrowserContext
//             │
//             ├── Page 1
//             ├── Page 2
//             ├── Page 3
//             └── Page 4
// ```


// Remember this formula:
// 1 Browser
//       ↓
// N Users
//       ↓
// N BrowserContexts
//       ↓
// Each BrowserContext can have Multiple Pages (Tabs)



