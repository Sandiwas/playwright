import { test, expect, Locator } from "@playwright/test";

test("Retrieve cookies by URL", async ({ browser }) => {

    // Create Browser Context
    const context = await browser.newContext();

    // Add cookies
    await context.addCookies([{name: "MyCookie",value: "123456",url: "http://www.automationpractice.pl/index.php"},
                            {name: "UserId",value: "Sandip",url: "http://www.automationpractice.pl/index.php"},
                            {name: "SessionId",value: "ABC123",url: "http://www.automationpractice.pl/index.php"}]);

    // Retrieve cookies only for this URL
    const cookies = await context.cookies([
        "http://www.automationpractice.pl/index.php"
    ]);

    console.log("Cookies for URL:");
    console.log(cookies);

//     // Print each cookie
//     for (const cookie of cookies) {
//         console.log(
//             `Name: ${cookie.name}
// Value: ${cookie.value}
// Domain: ${cookie.domain}
// Path: ${cookie.path}`
//         );
//     }

});