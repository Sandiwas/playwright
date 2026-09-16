

import { test,chromium } from "@playwright/test";

test("retrive cookies with url",async () => {

    const browser = await chromium.launch({
        headless: false
    });

    const context = await browser.newContext();

    const page = await context.newPage();

    // Navigate to application
    await page.goto("https://www.google.com/");

    // Retrieve cookies for this URL
    const cookies = await context.cookies([
        "https://www.google.com/"
    ]);
    console.log("Cookies for URL:");
    console.log(cookies);

    await browser.close();

});