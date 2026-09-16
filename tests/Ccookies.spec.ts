import { test, expect, Locator } from "@playwright/test";

test("Handle cookies demo", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  //add all cookies
  await context.addCookies([{name: "MyCookies",value: "123456",url: "http://www.automationpractice.pl/index.php",}]);

  // 1) Open the URL
  await page.goto("http://www.automationpractice.pl/index.php");

  // 2) Retrieve the cookie by name
  const allcookiesAfterAdd = await context.cookies();
  const retriveCookie = allcookiesAfterAdd.find((c) => c.name === "MyCookies");
  console.log("Retrieved cookie details : ", retriveCookie);

  // 3) Retrieve all cookies
  const allCookies = await context.cookies();
  console.log("Total number of cookies cerated", allCookies.length);
  expect(allCookies.length).toBeGreaterThan(0);

 //Retrieve cookies only for this URL
    const cookies = await context.cookies(["http://www.automationpractice.pl/index.php"]);
    console.log("Cookies for URL:");
    console.log(cookies);


  console.log("Printing all the cookies...value like name value and url maens domain");

  for (const cookie of allCookies) {
    console.log(`${cookie.name} ${cookie.value} ${cookie.domain}`);
  }

  // 4) Delete specific cookie by clearing all cookies (as Playwright doesn’t support deleting single cookie directly)
  await context.clearCookies();

  // Verify the number of cookies after deletion
  const allCookies1 = await context.cookies();
  console.log("Number of cookies after delelting ", allCookies.length);
  //expect(allCookies.length).toBe(0);
});
