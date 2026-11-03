import { test } from "@playwright/test";
test.use({ viewport: { width: 1920, height: 1080 } });
test.use({ignoreHTTPSErrors : true});
test.only("Browser context option/settings demo", async ({ browser }) => {
  const context = await browser.newContext({
    //Drak theme
    colorScheme: "dark",

    // Viewport Size
    //viewport: { width: 1920, height: 1080 },

    // Ignore HTTPS certificate errors
    //ignoreHTTPSErrors: false,

    // Browser Permissions
    permissions: ["notifications", "geolocation", "microphone"],
    // Time Zone
    timezoneId: "Asia/Kolkata",
    // Language
    locale: "en-IN",
    // Fake GPS Location
    geolocation: { latitude: 17.3843, longitude: 78.4583 },
  });
  const page = await context.newPage();
  //await page.goto("https://www.google.com/");
  await page.goto("https://pinning-test.badssl.com/", { waitUntil: "load" });
  await page.waitForTimeout(5000);

  await context.close();
});

test("Page level setting ", async ({ page }) => {
  await page.setViewportSize({ width: 800, height: 800 });

  // Navigate
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(5000);
});
