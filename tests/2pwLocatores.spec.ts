/*

Locator - Identifies the element on the page.
DOM - Document Object Model
DOM  is an API Interface provided by browser.

1) page.getByRole() to locate by explicit and implicit accessibility attributes.  //  (element type and accessible name )
2) page.getByText() to locate by text content.(Non interactive elements) // (value)
3) page.getByLabel() to locate a form control by associated label's text. // (tag)
4) page.getByPlaceholder() to locate an input by placeholder. //(attibrute)
5) page.getByAltText() to locate an element, usually image, by its text alternative.(attribute)
6) page.getByTitle() to locate an element by its title attribute. (title attribute)
7) page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).(TestId attribute)

1) page.getByRole() // (element type and accessible name )
2) page.getByText() // (value)
3) page.getByLabel() // (Tag name 'label')
4) page.getByPlaceholder() //(attibrute 'Placeholder')
5) page.getByAltText() // (attribute 'alt')
6) page.getByTitle() // (attribute 'title')
7) page.getByTestId() //('data-testId' attribute)


*/

import { test, expect, Locator } from "@playwright/test";

test("verify locatores", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded",
  });

  // 1. page.getByAltText() - identifies images (and similar elements) based on the alt attribute.
  // Use this locator when your element supports alt text such as img and area elements.

  const logo: Locator = page.getByAltText("Tricentis Demo Web Shop");
  await expect(logo).toBeVisible();

  // 2. page.getByText() - Find an element by the text it contains. You can match by a substring, exact string, or a regular expression

  // Locate by visible text
  // Use this locator to find non interactive elements like div, span, p, etc.
  // For interactive elements like button, a, input, etc. use role locators.
  // <p>welcome</p>
  // <div>hellow</div>

  //const msg=await page.getByText('Welcome to our store').textContent();//get space as well //substring also accept
  const msg = await page.getByText("Welcome to our store").innerText(); //get text only internally space remove
  await expect(page.getByText("our store")).toBeVisible();
  await expect(page.getByText(/Welcome\s+To\s+our\s+Store/i)).toBeVisible(); //make incase sensitive using regular expression with i
  console.log(msg);
  expect(msg).toBe("Welcome to our store");

  //   const registerLink: Locator = page.getByText("Register");
  //   await registerLink.click();
  //   await page.waitForTimeout(3000);
  await page.waitForTimeout(3000);

  // 3. page.getByRole() - Locating by Role   ( role is not an attribute)
  /* Role locators include buttons, checkboxes, headings, links, lists, tables, 
     and many more and follow W3C specifications for ARIA role.
     Prefer for interactive elements like buttons, checkboxes, links, lists, headings, tables, etc.
    */

  await page.getByRole("link", { name: "Log in" }).click();
  await expect(page.getByText("New Customer")).toBeVisible();
  await page.waitForTimeout(3000);

  //4) page.getByLabel() // (Tag name 'label')
  // 4. page.getByLabel() - Locate form control by label's text
  // When to use: Ideal for form fields with visible labels.

  //harrycode9@gmail.com
  //admin@123
  await page.getByLabel("Email:").fill("harrycode9@gmail.com");
  await page.getByLabel("Password:").fill("admin@123");
  await page.getByRole("button").nth(3).click();
  await page.waitForTimeout(3000);

    // 5. page.getByPlaceholder() - Finds element with a given placeholder text.
  // Best for inputs without a label but having a placeholder

  
});
