import { chromium, expect, test } from "@playwright/test";

test("handle context tabs", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  //createing two pages
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  page1.goto("https://testautomationpractice.blogspot.com/", { waitUntil: "domcontentloaded" });
  page2.goto("https://www.selenium.dev/", { waitUntil: "domcontentloaded" });
  console.log("Page title first page: ", await page1.title());
  await expect(page1).toHaveTitle("Automation Testing Practice");

  console.log("Page URL first page : ", page1.url());

  await expect(page1).toHaveURL("https://testautomationpractice.blogspot.com/");
  await page1.waitForTimeout(5000);

  console.log("Page title second page : ", await page2.title());
  await expect(page2).toHaveTitle("Selenium");

  console.log("Page URL second page : ", page1.url());
  await expect(page2).toHaveURL("https://www.selenium.dev/");
  await page2.waitForTimeout(5000);

  await context.close();
  await browser.close();
});

/* 
browser - chromium,firefox,webkit 
BrowserContext is an isolated browser session that provides separate cookies, cache, local storage, and session storage,
allowing us to create and test multiple independent user sessions within a single browser instance.
Browser
   │
   ├── BrowserContext (Admin User Session)
   │      ├── Page1
   │      └── Page2
   │
   ├── BrowserContext (Customer User Session)
   │      ├── Page1
   │      └── Page2
   │
   └── BrowserContext (Guest User Session)
          └── Page1


## Structure

```text
Browser
    │
    └── BrowserContext
            │
            ├── Page 1
            ├── Page 2
            ├── Page 3
            └── Page 4
```


Remember this formula:
1 Browser
      ↓
N Users
      ↓
N BrowserContexts
      ↓
Each BrowserContext can have Multiple Pages (Tabs)

 */
