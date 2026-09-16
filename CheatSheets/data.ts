/*
========================================================================================================
Text Assertions

await expect(locator).toHaveText("Sandip");          // Promise<void>
await expect(locator).toContainText("Sandip");       // Promise<void>
await expect(locator).toHaveValue("Admin");          // Promise<void>
await expect(locator).toHaveAttribute("type","text");// Promise<void>
await expect(locator).toHaveClass("active");         // Promise<void>
=====================================================================================================

Visibility Assertions

await expect(locator).toBeVisible();   // Promise<void>
await expect(locator).toBeHidden();    // Promise<void>
await expect(locator).toBeEnabled();   // Promise<void>
await expect(locator).toBeDisabled();  // Promise<void>
await expect(locator).toBeEditable();  // Promise<void>
await expect(locator).toBeEmpty();     // Promise<void>
await expect(locator).toBeFocused();   // Promise<void>

========================================================================================================

Checkbox & Selection Assertions

await expect(locator).toBeChecked();

========================================================================================================
Count Assertions

await expect(locator).toHaveCount(5);

========================================================================================================
Page Assertions

await expect(page).toHaveTitle("Demo Web Shop");
await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
await expect(page).toHaveURL(/demowebshop/);

========================================================================================================

JavaScript Value Assertions

expect(actual).toBe(expected);
expect(actual).toEqual(expected);
expect(actual).toContain("sandip");
expect(actual).toBeTruthy();
expect(actual).toBeFalsy();
expect(actual).toBeNull();
expect(actual).toBeUndefined();
expect(actual).toBeGreaterThan(10);
expect(actual).toBeLessThan(100);
expect(actual).toMatch(/sandip/i);
expect(actual).toHaveLength(5);

| Assertion                                | Return Type                 | Used For                                                             | Example                                      |
| ---------------------------------------- | --------------------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| `expect(actual).toBe(expected)`          | `MatcherResult<void, void>` | Exact comparison of primitive values (`string`, `number`, `boolean`) | `expect(10).toBe(10)`                        |
| `expect(actual).toEqual(expected)`       | `MatcherResult<void, void>` | Deep comparison of objects and arrays                                | `expect([1,2]).toEqual([1,2])`               |
| `expect(actual).toContain(value)`        | `MatcherResult<void, void>` | Checks if a string or array contains a value                         | `expect("Hello Sandip").toContain("Sandip")` |
| `expect(actual).toBeTruthy()`            | `MatcherResult<void, void>` | Checks if value is truthy                                            | `expect(true).toBeTruthy()`                  |
| `expect(actual).toBeFalsy()`             | `MatcherResult<void, void>` | Checks if value is falsy                                             | `expect(false).toBeFalsy()`                  |
| `expect(actual).toBeNull()`              | `MatcherResult<void, void>` | Checks if value is `null`                                            | `expect(null).toBeNull()`                    |
| `expect(actual).toBeUndefined()`         | `MatcherResult<void, void>` | Checks if value is `undefined`                                       | `expect(undefined).toBeUndefined()`          |
| `expect(actual).toBeGreaterThan(number)` | `MatcherResult<void, void>` | Number comparison (`>`)                                              | `expect(20).toBeGreaterThan(10)`             |
| `expect(actual).toBeLessThan(number)`    | `MatcherResult<void, void>` | Number comparison (`<`)                                              | `expect(50).toBeLessThan(100)`               |
| `expect(actual).toMatch(regex)`          | `MatcherResult<void, void>` | Checks if a string matches a regular expression                      | `expect("Sandip").toMatch(/sandip/i)`        |
| `expect(actual).toHaveLength(length)`    | `MatcherResult<void, void>` | Checks the length of a string or array                               | `expect([1,2,3]).toHaveLength(3)`            |


======================================================================================================================================================================================================
Negative Assertions

await expect(locator).not.toBeVisible();
await expect(locator).not.toContainText("Sandip");
await expect(page).not.toHaveURL("https://google.com");
expect(actual).not.toBe(expected);

=====================================================================================================================================================

For Playwright interviews, the most frequently asked assertions are:

toBeVisible()
toHaveText()
toContainText()
toHaveURL()
toHaveTitle()
toBeChecked()
toHaveCount()
toBeEnabled()
toBeDisabled()
not.toBeVisible()
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


console.log("Cell text : ", await parentRow.textContent());

What methods can we write inside console.log() after await?

For a Locator, these are the most commonly used methods:

console.log(await locator.textContent());      // string | null
console.log(await locator.allTextContents());  // string[]
console.log(await locator.count());            // number
console.log(await locator.innerText());        // string
console.log(await locator.innerHTML());        // string
console.log(await locator.getAttribute("href"));// string | null
console.log(await locator.inputValue());       // string
console.log(await locator.isVisible());        // boolean
console.log(await locator.isEnabled());        // boolean
console.log(await locator.isDisabled());       // boolean
console.log(await locator.isChecked());        // boolean
console.log(await locator.allInnerTexts());    // string[]
console.log(await locator.boundingBox());      // {x,y,width,height} | null

| Method              | Return Type                                                          | Used For                                      | Example                                                            |
| ------------------- | -------------------------------------------------------------------- | --------------------------------------------- | ------------------------------------------------------------------ |
| `textContent()`     | `Promise<string \| null>`                                            | Get all text from DOM (including hidden text) | `await locator.textContent()` → `"Register"`                       |
| `allTextContents()` | `Promise<string[]>`                                                  | Get text from multiple matching elements      | `await locator.allTextContents()` → `["Books","Computers"]`        |
| `count()`           | `Promise<number>`                                                    | Get number of matching elements               | `await locator.count()` → `5`                                      |
| `innerText()`       | `Promise<string>`                                                    | Get only visible text                         | `await locator.innerText()` → `"Register"`                         |
| `innerHTML()`       | `Promise<string>`                                                    | Get HTML inside the element                   | `await locator.innerHTML()` → `"<span>Register</span>"`            |
| `getAttribute()`    | `Promise<string \| null>`                                            | Get attribute value                           | `await locator.getAttribute("href")` → `"/register"`               |
| `inputValue()`      | `Promise<string>`                                                    | Get value from input textbox                  | `await locator.inputValue()` → `"Sandip"`                          |
| `isVisible()`       | `Promise<boolean>`                                                   | Check if element is visible                   | `await locator.isVisible()` → `true`                               |
| `isEnabled()`       | `Promise<boolean>`                                                   | Check if element is enabled                   | `await locator.isEnabled()` → `true`                               |
| `isDisabled()`      | `Promise<boolean>`                                                   | Check if element is disabled                  | `await locator.isDisabled()` → `false`                             |
| `isChecked()`       | `Promise<boolean>`                                                   | Check if checkbox/radio is selected           | `await locator.isChecked()` → `true`                               |
| `allInnerTexts()`   | `Promise<string[]>`                                                  | Get visible text from multiple elements       | `await locator.allInnerTexts()` → `["Books","Computers"]`          |
| `boundingBox()`     | `Promise<{x:number; y:number; width:number; height:number} \| null>` | Get element position and size                 | `await locator.boundingBox()` → `{x:100,y:200,width:50,height:20}` |



console.log("Text :", await register.innerText());
console.log("HTML :", await register.innerHTML());
console.log("Href :", await register.getAttribute("href"));
console.log("Visible :", await register.isVisible());
console.log("Enabled :", await register.isEnabled());


For Locator, the most frequently used methods are:
textContent()
innerText()
innerHTML()
getAttribute()
inputValue()
isVisible()
isEnabled()
isChecked()



Best table heading:

| Method              | Return Type                           | Example Output                     |
| ------------------- | ------------------------------------- | ---------------------------------- |
| `textContent()`     | `Promise<string \| null>`             | `"Register"`                       |
| `count()`           | `Promise<number>`                     | `5`                                |
| `isVisible()`       | `Promise<boolean>`                    | `true`                             |
| `allTextContents()` | `Promise<string[]>`                   | `["Books","Computers"]`            |
| `boundingBox()`     | `Promise<{x,y,width,height} \| null>` | `{x:100,y:200,width:50,height:20}` |

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Page Fixture Methods

## Navigation Methods

| Method             | Return Type                 | Description                                        | Example                                 |
| ------------------ | --------------------------- | -------------------------------------------------- | --------------------------------------- |
| `page.goto()`      | `Promise<Response \| null>` | Navigates to a URL.                                | `await page.goto("https://google.com")` |
| `page.goBack()`    | `Promise<Response \| null>` | Goes back to the previous page in browser history. | `await page.goBack()`                   |
| `page.goForward()` | `Promise<Response \| null>` | Goes forward to the next page in browser history.  | `await page.goForward()`                |
| `page.reload()`    | `Promise<Response \| null>` | Reloads the current page.                          | `await page.reload()`                   |



+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { test, expect } from '@playwright/test';

test('Navigation methods example', async ({ page }) => {

  // Open login page
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // Wait for dashboard
  await expect(page).toHaveURL(/dashboard/);

  // Reload dashboard page
  await page.reload();

  // Navigate to Admin page
  await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();

  // Go back to Dashboard
  await page.goBack();

  // Go forward to Admin page again
  await page.goForward();
});
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Interview Answer
page.goto() → Used to open a specific URL.
page.goBack() → Simulates browser Back button.
page.goForward() → Simulates browser Forward button.
page.reload() → Refreshes the current page.

-----------------------------------------------------------------------------------------------------------------------------------------------------

## Page Information Methods

| Method           | Return Type       | Description                                   | Example                |
| ---------------- | ----------------- | --------------------------------------------- | ---------------------- |
| `page.title()`   | `Promise<string>` | Returns the title of the current page.        | `await page.title()`   |
| `page.url()`     | `string`          | Returns the current page URL.                 | `page.url()`           |
| `page.content()` | `Promise<string>` | Returns the complete HTML source of the page. | `await page.content()` |

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import { test, expect } from '@playwright/test';

test('Page Information Methods Example', async ({ page }) => {

  // Open application
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Get page title
  const title = await page.title();
  console.log('Page Title:', title);

  // Get current URL
  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);

  // Get complete HTML source
  const htmlSource = await page.content();
  console.log('Page Source Length:', htmlSource.length);

  // Validate title and URL
  expect(title).toContain('OrangeHRM');
  expect(currentUrl).toContain('orangehrmlive.com');
});
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Real-Time Usage in Automation Projects
1. page.title()
Scenario: After login, verify that the Dashboard page is displayed.
const title = await page.title();
expect(title).toBe('OrangeHRM');

2. page.url()
Scenario: Verify that the application redirected to the Dashboard page.

expect(page.url()).toContain('/dashboard');
3. page.content()
Scenario: Save the HTML source for debugging when a test fails.
const html = await page.content();
console.log(html);


Interview Answer
page.title() → Returns the title of the current page and is used for page validation.
page.url() → Returns the current page URL and is used to verify navigation or redirection.
page.content() → Returns the complete HTML source of the page and is mainly used for debugging

--------------------------------------------------------------------------------------------------------------------------------------------------------

## Mouse Action Methods

| Method            | Return Type     | Description                        | Example                           |
| ----------------- | --------------- | ---------------------------------- | --------------------------------- |
| `page.click()`    | `Promise<void>` | Clicks on an element.              | `await page.click("#login")`      |
| `page.dblclick()` | `Promise<void>` | Double-clicks an element.          | `await page.dblclick("#btn")`     |
| `page.hover()`    | `Promise<void>` | Moves the mouse over an element.   | `await page.hover("#menu")`       |
| `page.check()`    | `Promise<void>` | Checks a checkbox or radio button. | `await page.check("#checkbox")`   |
| `page.uncheck()`  | `Promise<void>` | Unchecks a checkbox.               | `await page.uncheck("#checkbox")` |

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
test('Mouse actions using Locator', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  // Login
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  // Hover on Admin menu
  await page.locator('//span[text()="Admin"]').hover();

  // Double-click on an employee record
  await page.locator('.employee-row').dblclick();

  // Check a checkbox
  await page.locator('#rememberMe').check();

  // Uncheck a checkbox
  await page.locator('#newsletter').uncheck();
});

Real-time project scenarios:
click() → Click Login, Save, Submit, Delete buttons.
dblclick() → Open records in CRM/ERP applications.
hover() → Access hidden menus and dropdowns.
check() → Select Terms & Conditions, Remember Me, Gender radio button.
uncheck() → Deselect Newsletter or optional settings.

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
1. page.click()
 Scenario: Click the Login button.

await page.locator('#username').fill('Admin');
await page.locator('#password').fill('admin123');
await page.click('button[type="submit"]');
page.dblclick()

2. Scenario: Double-click a product row to open details.

await page.dblclick('.product-row');
page.hover()

3. Scenario: Hover over a menu to display sub-menu options.

await page.hover('.dropdown-menu');
await page.click('text=Logout');
page.check()

4. Scenario: Select a "Remember Me" checkbox.
await page.check('#rememberMe');

5. For a radio button:
await page.check('#male');
page.uncheck()

Scenario: Unselect a newsletter subscription checkbox.

await page.uncheck('#newsletter');
Interview Answer
page.click() → Used to click buttons, links, checkboxes, and other clickable elements.
page.dblclick() → Used when the application requires a double-click action to open or edit data.
page.hover() → Used to display hidden menus, tooltips, or dropdown options.
page.check() → Used to select checkboxes and radio buttons.
page.uncheck() → Used to deselect a checkbox.
Important Note

In modern Playwright frameworks, Locator methods are preferred over Page methods:

await page.locator('#login').click();
await page.locator('#menu').hover();
await page.locator('#rememberMe').check();
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Input Methods

| Method         | Return Type     | Description                                 | Example                              |
| -------------- | --------------- | ------------------------------------------- | ------------------------------------ |
| `page.fill()`  | `Promise<void>` | Clears and enters text into an input field. | `await page.fill("#user", "Sandip")` |
| `page.type()`  | `Promise<void>` | Types text character by character.          | `await page.type("#user", "Sandip")` |
| `page.press()` | `Promise<void>` | Presses a keyboard key on an element.       | `await page.press("#user", "Enter")` |


Complete Real-Time Example
test('Input Methods Example', async ({ page }) => {
  await page.goto('https://google.com');

  await page.locator('textarea[name="q"]').fill('Playwright tutorial');
  await page.locator('textarea[name="q"]').press('Enter');
});

1. fill() – Login Form
Scenario: Enter credentials in the login page.

await page.locator('input[name="username"]').fill('Admin');
await page.locator('input[name="password"]').fill('admin123');
await page.locator('button[type="submit"]').click();

Real-time use: Login forms, registration forms, search fields.

2. type() – Search Box
Scenario: User searches for a product on an e-commerce site.

await page.locator('#search-box').type('iPhone 16');

Real-time use: Search suggestions, auto-complete fields, chat applications.
3. press() – Press Enter Key

Scenario: After entering text in the search box, press Enter.

await page.locator('#search-box').fill('iPhone 16');
await page.locator('#search-box').press('Enter');

Real-time use: Search functionality, form submission, keyboard shortcuts.


Interview Answer
fill() → Clears the existing value and enters new text.
type() → Types text character by character like a real user.
press() → Simulates keyboard actions such as Enter, Tab, Escape, etc.
Recommended Approach
await page.locator('#username').fill('Admin');
await page.locator('#search').type('Playwright');
await page.locator('#search').press('Enter');
Which one is mostly used in projects?
✅ fill() → Most commonly used.
✅ press() → Frequently used for Enter, Tab, Escape.
⚠️ type() → Used mainly when testing typing behavior, auto-suggestions, or key-by-key events.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Wait Methods

| Method                    | Return Type                      | Description                                        | Example                                       |
| ------------------------- | -------------------------------- | -------------------------------------------------- | --------------------------------------------- |
| `page.waitForTimeout()`   | `Promise<void>`                  | Waits for a fixed amount of time.                  | `await page.waitForTimeout(2000)`             |
| `page.waitForSelector()`  | `Promise<ElementHandle \| null>` | Waits until an element appears in the DOM.         | `await page.waitForSelector("#login")`        |
| `page.waitForLoadState()` | `Promise<void>`                  | Waits for the page load state.                     | `await page.waitForLoadState()`               |
| `page.waitForURL()`       | `Promise<void>`                  | Waits until the page URL matches the expected URL. | `await page.waitForURL("https://google.com")` |

1. waitForTimeout()

Scenario: Temporary wait for debugging purposes.

test('waitForTimeout Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');

  // Wait for 2 seconds (Not recommended in real projects)
  await page.waitForTimeout(2000);

  await page.locator('button[type="submit"]').click();
});
Real-time use: Mainly for debugging. Avoid using it in automation frameworks.

-------------------------------------------------
2. waitForSelector()

Scenario: Wait for the Dashboard heading to appear after login.

test('waitForSelector Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await page.waitForSelector('h6:has-text("Dashboard")');
});
-------------------------------------------------------
Real-time use: Wait for dynamically loaded elements.

Preferred approach:

await expect(page.locator('h6')).toHaveText('Dashboard');
-----------------------------------------------------------
3. waitForLoadState()

Scenario: Wait until the page is completely loaded after navigation.

test('waitForLoadState Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.waitForLoadState('load');

  console.log(await page.title());
});

Real-time use: After page refresh or navigation.

await page.reload();
await page.waitForLoadState('networkidle');
-----------------------------------------------------------------------------------
4. waitForURL()

Scenario: Verify successful login by waiting for Dashboard URL.

test('waitForURL Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await page.waitForURL('/dashboard/index');
});

Real-time use: Login, payment completion, redirection pages.

Interview Answer
Method	Real-Time Usage
waitForTimeout()	Used only for debugging; avoid in frameworks.
waitForSelector()	Wait for dynamically loaded elements.
waitForLoadState()	Wait for page loading or refresh completion.
waitForURL()	Wait for page redirection after an action like login or payment.
Recommended Modern Approach
await expect(page.locator('h6')).toHaveText('Dashboard');
await expect(page).toHaveURL(/dashboard/);

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Screenshot Methods

| Method              | Return Type       | Description                                  | Example                   |
| ------------------- | ----------------- | -------------------------------------------- | ------------------------- |
| `page.screenshot()` | `Promise<Buffer>` | Takes a screenshot of the page.              | `await page.screenshot()` |
| `page.pdf()`        | `Promise<Buffer>` | Generates a PDF of the page (Chromium only). | `await page.pdf()`        |

1. page.screenshot()
Scenario: Capture a screenshot after successful login.

test('Take Screenshot Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/dashboard/);

  // Capture screenshot
  await page.screenshot({ path: 'dashboard.png' });
});

Real-Time Use Cases
Capture screenshots on test failure.
Save evidence for execution reports.
Verify UI changes.

Full Page Screenshot
await page.screenshot({
  path: 'fullPage.png',
  fullPage: true
});

Capture Specific Element Screenshot (Recommended)
await page.locator('.oxd-topbar-header').screenshot({
  path: 'header.png'
});

---------------------------------------------------------------------------

2. page.pdf()

test('Generate PDF Example', async ({ page }) => {
  await page.goto('https://example.com/invoice');

  await page.pdf({
    path: 'invoice.pdf',
    format: 'A4'
  });
});

Note: page.pdf() works only in Chromium browsers.

Real-Time Use Cases
Download invoices.
Generate reports.
Save order summaries.
Export pages as PDFs.

| Method              | Real-Time Usage                                                             |
| ------------------- | --------------------------------------------------------------------------- |
| `page.screenshot()` | Capture screenshots for reporting, debugging, and failure analysis.         |
| `page.pdf()`        | Generate PDFs of invoices, reports, and confirmation pages (Chromium only). |


Most Common Framework Usage
Screenshot on Failure

test.afterEach(async ({ page }, testInfo) => {
  if (testInfo.status !== testInfo.expectedStatus) {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
      fullPage: true
    });
  }
});

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

## JavaScript Execution Methods

| Method            | Return Type    | Description                                  | Example                                     |
| ----------------- | -------------- | -------------------------------------------- | ------------------------------------------- |
| `page.evaluate()` | `Promise<any>` | Executes JavaScript code inside the browser. | `await page.evaluate(() => document.title)` |

1. Get Page Title using JavaScript
Scenario: Verify the page title after login.

test('Get page title using evaluate', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  const title = await page.evaluate(() => document.title);

  console.log(title);
});

2. Get Current URL
Scenario: Fetch the current URL using JavaScript.
const url = await page.evaluate(() => window.location.href);
console.log(url);

3. Scroll to Bottom of the Page
await page.evaluate(() => {
  window.scrollTo(0, document.body.scrollHeight);
});

4. Get Text from an Element
Scenario: Read the dashboard heading.

const heading = await page.evaluate(() => {
  return document.querySelector('h6')?.textContent;
});

console.log(heading);

5. Highlight an Element (For Debugging)
Scenario: Highlight an element before taking a screenshot.

await page.evaluate(() => {
  document.querySelector('button[type="submit"]')
    .style.border = '3px solid red';
});

6. Remove a Popup Using JavaScript

await page.evaluate(() => {
  document.querySelector('.popup')?.remove();
});


Complete Real-Time Example

test('JavaScript execution example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  const title = await page.evaluate(() => document.title);
  console.log('Title :', title);

  const url = await page.evaluate(() => window.location.href);
  console.log('URL :', url);

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
});

Interview Answer
What is page.evaluate()?
1. page.evaluate() executes JavaScript code directly inside the browser context and returns the result back to the Playwright test.
2. Real-Time Uses
3. Get page title or URL.
4. Scroll the page.
5. Read hidden DOM values.
6. Highlight elements for debugging.
7. Remove popups or banners.
8. Execute custom JavaScript when Playwright APIs are not sufficient.


Syntax
const result = await page.evaluate(() => {
  return document.title;
});

Interview Point

In real-time projects, page.evaluate() is rarely used, but it becomes very useful for:

1. Scrolling pages
2. Getting hidden values
3. Executing custom JavaScript
4. Handling complex DOM scenarios that normal locators cannot handle easily.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Locator Creation Methods

| Method                    | Return Type | Description                                         | Example                           |
| ------------------------- | ----------- | --------------------------------------------------- | --------------------------------- |
| `page.locator()`          | `Locator`   | Creates a locator using CSS or XPath.               | `page.locator("//button")`        |
| `page.getByText()`        | `Locator`   | Finds an element by visible text.                   | `page.getByText("Login")`         |
| `page.getByRole()`        | `Locator`   | Finds an element by ARIA role.                      | `page.getByRole("button")`        |
| `page.getByLabel()`       | `Locator`   | Finds an element associated with a label.           | `page.getByLabel("Email")`        |
| `page.getByPlaceholder()` | `Locator`   | Finds an element by placeholder text.               | `page.getByPlaceholder("Search")` |
| `page.getByTestId()`      | `Locator`   | Finds an element using the `data-testid` attribute. | `page.getByTestId("submit")`      |

| Method                    | Real-Time Scenario                                                        | Example                                       |
| ------------------------- | ------------------------------------------------------------------------- | --------------------------------------------- |
| `page.locator()`          | Locate elements using CSS or XPath when other locators are not available. | `page.locator('//button[@type="submit"]')`    |
| `page.getByText()`        | Click buttons or links using visible text.                                | `page.getByText('Login')`                     |
| `page.getByRole()`        | Locate elements based on ARIA roles (recommended by Playwright).          | `page.getByRole('button', { name: 'Login' })` |
| `page.getByLabel()`       | Find input fields associated with labels.                                 | `page.getByLabel('Username')`                 |
| `page.getByPlaceholder()` | Find input fields using placeholder text.                                 | `page.getByPlaceholder('Search')`             |
| `page.getByTestId()`      | Find elements using `data-testid` attribute.                              | `page.getByTestId('login-button')`            |


1. page.locator()
Scenario: Click Login button using XPath.
test('locator example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('//button[@type="submit"]').click();
});


2. page.getByText()
Scenario: Click the Logout link.

await page.getByText('Logout').click();

Real-Time Use:
Buttons
Links
Menu options

3. page.getByRole()
Scenario: Click the Login button.await page.getByRole('button', {
  name: 'Login'
}).click();

Real-Time Use:
Buttons
Checkboxes
Links
Textboxes

This is the recommended locator strategy by Playwright.

| Role          | HTML Example                      | Playwright Example                                                              | Real-Time Usage                 |
| ------------- | --------------------------------- | ------------------------------------------------------------------------------- | ------------------------------- |
| `button`      | `<button>Login</button>`          | `await page.getByRole('button', { name: 'Login' }).click();`                    | Login, Save, Submit buttons     |
| `link`        | `<a>Forgot Password</a>`          | `await page.getByRole('link', { name: 'Forgot Password' }).click();`            | Hyperlinks                      |
| `textbox`     | `<input type="text">`             | `await page.getByRole('textbox', { name: 'Username' }).fill('Admin');`          | Username, Search box            |
| `searchbox`   | `<input type="search">`           | `await page.getByRole('searchbox').fill('iPhone');`                             | Product search                  |
| `checkbox`    | `<input type="checkbox">`         | `await page.getByRole('checkbox', { name: 'Remember Me' }).check();`            | Remember Me, Terms & Conditions |
| `radio`       | `<input type="radio">`            | `await page.getByRole('radio', { name: 'Male' }).check();`                      | Gender selection                |
| `combobox`    | `<select>`                        | `await page.getByRole('combobox').selectOption('India');`                       | Country dropdown                |
| `heading`     | `<h1>Dashboard</h1>`              | `await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();` | Page title validation           |
| `img`         | `<img alt="Logo">`                | `await expect(page.getByRole('img', { name: 'Logo' })).toBeVisible();`          | Logo verification               |
| `tab`         | `<div role="tab">Admin</div>`     | `await page.getByRole('tab', { name: 'Admin' }).click();`                       | Tab navigation                  |
| `menuitem`    | `<li role="menuitem">Logout</li>` | `await page.getByRole('menuitem', { name: 'Logout' }).click();`                 | Profile menus                   |
| `dialog`      | `<div role="dialog">`             | `await expect(page.getByRole('dialog')).toBeVisible();`                         | Popups, Modals                  |
| `list`        | `<ul>`                            | `await expect(page.getByRole('list')).toBeVisible();`                           | Menu lists                      |
| `listitem`    | `<li>`                            | `await expect(page.getByRole('listitem')).toHaveCount(5);`                      | Product lists                   |
| `table`       | `<table>`                         | `await expect(page.getByRole('table')).toBeVisible();`                          | Reports, Employee tables        |
| `row`         | `<tr>`                            | `await expect(page.getByRole('row')).toHaveCount(10);`                          | Table rows                      |
| `cell`        | `<td>`                            | `await expect(page.getByRole('cell')).toContainText('Admin');`                  | Table data                      |
| `option`      | `<option>India</option>`          | `await page.getByRole('option', { name: 'India' }).click();`                    | Dropdown options                |
| `alert`       | `<div role="alert">`              | `await expect(page.getByRole('alert')).toContainText('Success');`               | Error/Success messages          |
| `progressbar` | `<div role="progressbar">`        | `await expect(page.getByRole('progressbar')).toBeVisible();`                    | Loading indicator               |
| `switch`      | `<button role="switch">`          | `await page.getByRole('switch').click();`                                       | Enable/Disable settings         |
| `tooltip`     | `<div role="tooltip">`            | `await expect(page.getByRole('tooltip')).toBeVisible();`                        | Hover messages                  |


Most Frequently Used Roles in Real-Time Projects
| Role       | Example                                               |
| ---------- | ----------------------------------------------------- |
| `button`   | `page.getByRole('button', { name: 'Login' })`         |
| `textbox`  | `page.getByRole('textbox', { name: 'Username' })`     |
| `link`     | `page.getByRole('link', { name: 'Forgot Password' })` |
| `checkbox` | `page.getByRole('checkbox', { name: 'Remember Me' })` |
| `combobox` | `page.getByRole('combobox')`                          |
| `heading`  | `page.getByRole('heading', { name: 'Dashboard' })`    |
| `menuitem` | `page.getByRole('menuitem', { name: 'Logout' })`      |
| `dialog`   | `page.getByRole('dialog')`                            |

For interviews, focus mainly on these 8 roles, because they are the ones you will use in almost every automation project.

1. button

test('Button Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('button', {
    name: 'Login'
  }).click();
});

2. textbox

test('Textbox Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('textbox', {
    name: 'Username'
  }).fill('Admin');
});

3. link
test('Link Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('link', {
    name: 'Forgot your password?'
  }).click();
});

4. checkbox


test('Checkbox Example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  await page.getByRole('checkbox').first().check();
});
  5. combobox

  test('Combobox Example', async ({ page }) => {
  await page.goto('https://demoqa.com/select-menu');

  await page.getByRole('combobox').nth(0).selectOption('Group 2, option 1');
});

6. heading

test('Heading Example', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await expect(
    page.getByRole('heading', {
      name: 'Login'
    })
  ).toBeVisible();
});

7. menuitem
test('MenuItem Example', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  // Example only
  await page.getByRole('menuitem', {
    name: 'Logout'
  }).click();
});

8. dialog
test('Dialog Example', async ({ page }) => {
  await page.goto('https://demoqa.com/modal-dialogs');

  await page.getByRole('button', {
    name: 'Small modal'
  }).click();

  await expect(
    page.getByRole('dialog')
  ).toBeVisible();
});


Real-Time Login Script Using getByRole()

test('OrangeHRM Login', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com');

  await page.getByRole('textbox', { name: 'Username'}).fill('Admin');

  await page.getByRole('textbox', { name: 'Password'}).fill('admin123');

  await page.getByRole('button', { name: 'Login'}).click();

  await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
});

This is the kind of script interviewers expect when they ask, "How do you use getByRole() in real-time projects?"


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
## Frame Methods

| Method                | Return Type     | Description                                      | Example                       |
| --------------------- | --------------- | ------------------------------------------------ | ----------------------------- |
| `page.frame()`        | `Frame \| null` | Returns a frame by its name or URL.              | `page.frame("frameName")`     |
| `page.frameLocator()` | `FrameLocator`  | Creates a locator for elements inside an iframe. | `page.frameLocator("#frame")` |

| Method                | Real-Time Scenario                                                    | Example                                                    |
| --------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------- |
| `page.frame()`        | Switch to an iframe and interact with its elements.                   | `const frame = page.frame({ name: 'iframeName' });`        |
| `page.frameLocator()` | Interact with elements inside an iframe using Locators (Recommended). | `page.frameLocator('#frame').getByRole('button').click();` |

1. page.frame()
Scenario: Enter text inside an iframe.

import { test } from '@playwright/test';

test('frame example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  const frame = page.frame({name: 'mce_0_ifr'});

  await frame.locator('#tinymce').fill('Hello Playwright');
});

2. page.frameLocator() (Recommended)
Scenario: Enter text inside an iframe.

import { test } from '@playwright/test';

test('frameLocator example', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');

  await page.frameLocator('#mce_0_ifr').locator('#tinymce').fill('Hello Playwright');
});

Real-Time Example: Click Button Inside an iframe

await page
  .frameLocator('#paymentFrame')
  .getByRole('button', {
    name: 'Pay Now'
  })
  .click();


  Real-Time Example: Fill Credit Card Details


await page
  .frameLocator('#card-frame')
  .getByPlaceholder('Card number')
  .fill('4111111111111111');

await page
  .frameLocator('#expiry-frame')
  .getByPlaceholder('MM / YY')
  .fill('12/30');

await page
  .frameLocator('#cvv-frame')
  .getByPlaceholder('CVV')
  .fill('123');

  Interview Answer

  | Method                | Usage                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------ |
| `page.frame()`        | Returns a `Frame` object and then you interact with elements inside it.                                      |
| `page.frameLocator()` | Directly creates locators inside the iframe and is the recommended approach in modern Playwright frameworks. |



Which one should we use in projects?

await page
  .frameLocator('#mce_0_ifr')
  .locator('#tinymce')
  .fill('Hello Playwright');

  ❌ Older approach
  const frame = page.frame({
  name: 'mce_0_ifr'
});

await frame.locator('#tinymce').fill('Hello Playwright');

Interview Point

In real-time Playwright projects, frameLocator() is preferred because it supports auto-waiting, is more readable, and works seamlessly with Locator APIs.
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

## Event Methods

| Method        | Return Type | Description                                | Example                          |
| ------------- | ----------- | ------------------------------------------ | -------------------------------- |
| `page.on()`   | `void`      | Listens for an event every time it occurs. | `page.on("dialog", handler)`     |
| `page.once()` | `void`      | Listens for an event only once.            | `page.once("download", handler)` |


Event Methods (Real-Time Examples)

| Method        | Real-Time Scenario                                                                     | Example                                                                         |
| ------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `page.on()`   | Listen for an event every time it occurs (popup, download, dialog, request, response). | `page.on('dialog', dialog => dialog.accept());`                                 |
| `page.once()` | Listen for an event only once.                                                         | `page.once('download', download => console.log(download.suggestedFilename()));` |


1. page.on()
Scenario: Accept every alert popup.

import { test } from '@playwright/test';

test('page.on dialog example', async ({ page }) => {
  page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  await page.getByRole('button', {
    name: 'Click for JS Alert'
  }).click();
});

Scenario: Capture every API response.

page.on('response', response => {
  console.log(response.url());
  console.log(response.status());
});


Scenario: Listen for every new tab.

page.on('popup', popup => {
  console.log('New tab opened');
});


2. page.once()

Scenario: Download file only once.


import { test } from '@playwright/test';

test('page.once download example', async ({ page }) => {

  page.once('download', async download => {
    console.log(download.suggestedFilename());
  });

  await page.goto('https://the-internet.herokuapp.com/download');

  await page.getByText('some-file.txt').click();
});


Scenario: Handle only the first popup.

page.once('popup', popup => {
  console.log('First popup opened');
});

Real-Time Examples

Handle Alerts
page.on('dialog', async dialog => { await dialog.accept();});

Capture Network Requests
page.on('request', request => {console.log(request.url());});

Capture Network Responses
page.on('response', response => {console.log(response.status());});

Handle Downloads
page.once('download', download => {console.log(download.suggestedFilename());});

Handle New Tabs
page.on('popup', popup => {console.log('New Tab Opened');});



Interview Answer
| Method        | Usage                                                                       |
| ------------- | --------------------------------------------------------------------------- |
| `page.on()`   | Registers an event listener that runs every time the event occurs.          |
| `page.once()` | Registers an event listener that runs only the first time the event occurs. |

Most Commonly Used Events in Projects
page.on('dialog', handler);
page.on('request', handler);
page.on('response', handler);
page.on('popup', handler);
page.once('download', handler);

Real-Time Framework Example


test.beforeEach(async ({ page }) => {
  page.on('dialog', async dialog => {
    await dialog.accept();
  });

  page.on('response', response => {
    console.log(`${response.status()} - ${response.url()}`);
  });
});


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Recommended Study Order for Playwright

| Week | Topic             | What to Learn                                  |
| ---- | ----------------- | ---------------------------------------------- |
| 1    | Playwright Basics | Installation, Project Structure, Test Runner   |
| 1    | Locators          | `locator()`, `getByRole()`, `getByText()`      |
| 1    | Actions           | `click()`, `fill()`, `check()`, `hover()`      |
| 2    | Assertions        | `toBeVisible()`, `toHaveText()`, `toHaveURL()` |
| 2    | Waits             | Auto-waiting, Explicit waits                   |
| 2    | Dropdowns         | `selectOption()`                               |
| 3    | Frames            | `frameLocator()`                               |
| 3    | Windows/Tabs      | `popup`, `context.waitForEvent()`              |
| 3    | Alerts            | `dialog` handling                              |
| 4    | Upload/Download   | File upload and download                       |
| 4    | API Testing       | `request` fixture                              |
| 5    | Page Object Model | Framework design                               |
| 5    | Fixtures          | Custom fixtures                                |
| 6    | Reports           | HTML, Allure Reports                           |
| 6    | CI/CD             | Jenkins Integration                            |


| Week | Topic             | What to Learn                                  |
| ---- | ----------------- | ---------------------------------------------- |
| 1    | Playwright Basics | Installation, Project Structure, Test Runner   |
| 1    | Locators          | `locator()`, `getByRole()`, `getByText()`      |
| 1    | Actions           | `click()`, `fill()`, `check()`, `hover()`      |
| 2    | Assertions        | `toBeVisible()`, `toHaveText()`, `toHaveURL()` |
| 2    | Waits             | Auto-waiting, Explicit waits                   |
| 2    | Dropdowns         | `selectOption()`                               |
| 3    | Frames            | `frameLocator()`                               |
| 3    | Windows/Tabs      | `popup`, `context.waitForEvent()`              |
| 3    | Alerts            | `dialog` handling                              |
| 4    | Upload/Download   | File upload and download                       |
| 4    | API Testing       | `request` fixture                              |
| 5    | Page Object Model | Framework design                               |
| 5    | Fixtures          | Custom fixtures                                |
| 6    | Reports           | HTML, Allure Reports                           |
| 6    | CI/CD             | Jenkins Integration                            |

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
<!-- 🧭 PLAYWRIGHT LOCATOR CHEAT SHEET (WITH HTML DOM) -->

<!-- ================= ROLE ================= -->

<button>Submit</button>

page.getByRole('button', { name: 'Submit' })

<input type="text" aria-label="Username" />
page.getByRole('textbox', { name: 'Username' })


How Playwright decides “name” in getByRole()

| Case               | HTML Example                                           | Accessible Name (Used by Playwright) | Locator Example                                    |
| ------------------ | ------------------------------------------------------ | ------------------------------------ | -------------------------------------------------- |
| Visible text       | `<button>Submit</button>`                              | Submit                               | `getByRole('button', { name: 'Submit' })`          |
| Label              | `<label>Username</label><input>`                       | Username                             | `getByRole('textbox', { name: 'Username' })`       |
| aria-label         | `<input aria-label="Username">`                        | Username                             | `getByRole('textbox', { name: 'Username' })`       |
| Placeholder        | `<input placeholder="Enter username">`                 | Enter username                       | `getByRole('textbox', { name: 'Enter username' })` |
| Nested text        | `<button><span>Login</span></button>`                  | Login                                | `getByRole('button', { name: 'Login' })`           |
| aria-labelledby    | `<span id="l">Email</span><input aria-labelledby="l">` | Email                                | `getByRole('textbox', { name: 'Email' })`          |
| Conflicting labels | label + aria-label both present                        | aria-label wins                      | `getByRole('textbox', { name: 'ID' })`             |

👉 Playwright “name” = what user sees or screen reader reads

Priority order:

aria-label > label > visible text > placeholder

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
<!-- ================= TEXT ================= -->
<h1>Login Page</h1>

page.getByText('Login Page')

<!-- ================= LABEL ================= -->
<label for="user">Username</label>
<input id="user" type="text" />

page.getByLabel('Username')

<!-- ================= PLACEHOLDER ================= -->
<input type="email" placeholder="Enter email" />

page.getByPlaceholder('Enter email')

<!-- ================= ALT TEXT ================= -->
<img src="logo.png" alt="Company Logo" />

page.getByAltText('Company Logo')

<!-- ================= TITLE ================= -->
<span title="Settings">⚙️</span>

page.getByTitle('Settings')

<!-- ================= CSS / ID ================= -->
<input id="username" class="input-box" />

page.locator('#username')
page.locator('.input-box')
page.locator('input[type="text"]')

<!-- ================= XPATH (AVOID) ================= -->
<button>Login</button>

page.locator('//button[text()="Login"]')

<!-- ================= CHAIN LOCATORS ================= -->
<form>
  <input type="text" />
</form>

page.locator('form').locator('input')

<!-- ================= FILTER ================= -->
<button>Save</button>
<button>Cancel</button>

page.locator('button').filter({ hasText: 'Save' })

<!-- ================= FIRST / LAST / NTH ================= -->
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
</ul>

page.locator('li').first()
page.locator('li').last()
page.locator('li').nth(1)

<!-- ================= PRIORITY ORDER ================= -->
<!-- ⭐ BEST PRACTICE ORDER -->
getByRole > getByLabel > getByText > getByPlaceholder > CSS > XPath


Complete ARIA Roles List (Playwright Use)

| Category    | ARIA Role   | Example (HTML idea)                  |
| ----------- | ----------- | ------------------------------------ |
| Interactive | button      | `<button>Click</button>`             |
| Interactive | link        | `<a href="#">Home</a>`               |
| Interactive | textbox     | `<input type="text">`                |
| Interactive | checkbox    | `<input type="checkbox">`            |
| Interactive | radio       | `<input type="radio">`               |
| Interactive | combobox    | `<select><option></option></select>` |
| Interactive | listbox     | `<ul role="listbox"></ul>`           |
| Interactive | option      | `<li role="option"></li>`            |
| Interactive | switch      | `<button role="switch"></button>`    |
| Interactive | menuitem    | `<li role="menuitem"></li>`          |
| Interactive | tab         | `<button role="tab"></button>`       |
| Interactive | tabpanel    | `<div role="tabpanel"></div>`        |
| Interactive | searchbox   | `<input type="search">`              |
| Interactive | spinbutton  | `<input type="number">`              |
| Interactive | slider      | `<input type="range">`               |
| Interactive | progressbar | `<progress></progress>`              |
| Interactive | scrollbar   | custom scroll UI                     |
| Interactive | menu        | `<ul role="menu"></ul>`              |
| Interactive | menubar     | `<div role="menubar"></div>`         |


| Structure | heading | <h1>, <h2> |
| Structure | list | <ul>, <ol> |
| Structure | listitem | <li> |
| Structure | table | <table> |
| Structure | row | <tr> |
| Structure | cell | <td> |
| Structure | columnheader | <th> |
| Structure | rowgroup | <thead>, <tbody> |

| Navigation | navigation | <nav> |
| Navigation | main | <main> |
| Navigation | banner | <header> |
| Navigation | contentinfo | <footer> |
| Navigation | complementary | <aside> |

| Form | form | <form> |
| Form | label | <label> |
| Form | textbox | <input> |
| Form | searchbox | <input type="search"> |
| Form | combobox | <select> |
| Form | button | <button> |
| Form | checkbox | <input type="checkbox"> |

| Landmark | region | <section> |
| Landmark | application | app container |
| Landmark | dialog | <dialog> |
| Landmark | alert | notification popup |
| Landmark | alertdialog | confirmation popup |

⭐ Important Note

👉 Playwright mainly uses accessible roles from HTML + ARIA
👉 Best locator method:

page.getByRole('button')
⚡ Reality Check (Important)

You don’t need to memorize ALL roles.

👉 Only focus on:

button
textbox
checkbox
radio
link
heading
list / listitem
table
combobox
dialog
navigation


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  */