import { test, expect, Locator, chromium } from "@playwright/test";

test("browser Setting", async () => {
  const browser = await chromium.launch({headless: true});

  const context = await browser.newContext({
    viewport: { width: 1000, height: 500 },
    locale: "en-US",
    ignoreHTTPSErrors:true,
    //proxy:{server:'http://myproxy.com:3245'}
  });
  
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  
  //await page.goto("https://self-signed.badssl.com/");
await page.waitForTimeout(7000);
  console.log("title of the page is ", await page.title());
  
});


// test.use({
//   viewport: { width: 1000, height: 500 },
//   headless:true,
// });

// test.only("Google Test", async ({ page }) => {
//   await page.goto("https://www.google.com/");
//   await page.waitForTimeout(7000);
//   console.log(await page.title());
// });



// chromium.launch()
//         |
//         |-- headless
//         |-- slowMo
//         |-- args
//         |-- channel
//         |-- executablePath
//         |
//         ↓
// browser.newContext()
//         |
//         |-- viewport: null
//         |-- locale: "en-US"
//         |-- timezoneId: "Asia/Kolkata"
//         |-- userAgent: "Custom User Agent"
//         |-- geolocation: { latitude, longitude }
//         |-- permissions: ["geolocation"]
//         |-- ignoreHTTPSErrors: true
//         |-- acceptDownloads: true
//         |-- proxy: { server, username, password }
//         |-- storageState: "auth.json"
//         |-- baseURL: "https://application.com"
//         |-- extraHTTPHeaders: { Authorization: "Bearer token" }
//         |
//         ↓
// context.newPage()
//         |
//         |-- page.goto()
//         |-- page.locator()
//         |-- page.click()
//         |-- page.fill()
//         |-- page.waitFor()
//         |-- page.screenshot()
//         |
//         ↓
// Test Execution

// chromium.launch() → Controls browser startup configuration
// browser.newContext() → Controls isolated browser session configuration
// context.newPage() → Creates browser tab/page
// page actions → Performs automation operations