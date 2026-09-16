
=========================================================================================================================================================================================
# Playwright Hooks & Fixtures - Real-Time Interview Questions & Answers

=========================================================
Q1. What are Fixtures in Playwright?
=========================================================

Answer:
Fixtures are ready-made resources provided by Playwright, such as browser, context, page, and request. Playwright automatically creates and cleans up these resources.

Real-Time Example:
Instead of writing:


const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();
we simply write:

test('Login Test', async ({ page }) => {
  await page.goto('https://example.com');
});

Playwright automatically provides the page fixture.

=========================================================
Q2. Why do we use Fixtures?
=========================================================

Answer:
We use fixtures to:
1. Reduce boilerplate code.
2. Automatically manage browser resources.
3. Ensure test isolation.
4. Improve code maintainability.

Real-Time Example:
In an E-commerce project, every test needs a browser and page. Fixtures automatically provide them instead of creating them manually.

=========================================================
Q3. What are the built-in fixtures in Playwright?
=========================================================

browser  -> Launches browser
context  -> Creates a separate browser session
page     -> Opens a browser tab
request  -> Used for API testing

=========================================================
Q4. Explain Browser, Context, and Page.
=========================================================

browser
--------
Represents the browser instance.

context
--------
Represents a separate browser session (similar to Incognito).

page
----
Represents a browser tab.

Real-Time Example:

Chrome Browser
     ↓
Incognito Window (Context)
     ↓
Tab (Page)

=========================================================
Q5. Why is Context important?
=========================================================

Answer:
Context provides test isolation.

Each context has its own:
- Cookies
- Local Storage
- Session Storage

Real-Time Example:
If User1 logs in, User2's test should not use User1's session. Therefore, every test gets a separate context.

=========================================================
Q6. What are Hooks in Playwright?
=========================================================

Answer:
Hooks are special methods that execute setup and cleanup code before or after tests.

Hooks:
beforeAll()
beforeEach()
afterEach()
afterAll()

=========================================================
Q7. Why do we use Hooks?
=========================================================

Answer:
To avoid duplicate code and perform common setup and cleanup activities.

Real-Time Example:
Every test requires:
- Open application
- Login

Instead of writing it in every test, we put it inside beforeEach().

=========================================================
Q8. Real-Time Example of Hooks
=========================================================

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await loginPage.login(username, password);
});

test.afterEach(async ({ page }) => {
  await homePage.logout();
});

test('Create User', async ({ page }) => {
});

test('Delete User', async ({ page }) => {
});

=========================================================
Q9. How do Hooks and Fixtures work together?
=========================================================

Answer:
Playwright first creates fixtures and then injects them into hooks and tests.

Execution:

Launch Browser
Create Context
Create Page
beforeEach()
Test Execution
afterEach()
Close Page
Close Context
Close Browser

=========================================================
Q10. How does Playwright automatically run Fixtures?
=========================================================

Answer:
Playwright uses Dependency Injection.

When we ask for:

async ({ page })

Playwright understands:

page depends on context
context depends on browser

Internally:

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

=========================================================
Q11. What are Before Hooks and After Hooks in Playwright Report?
=========================================================

Before Hooks:

Launch Browser
Create Context
Create Page

After Hooks:

Close Page
Close Context
Close Browser

These are fixture setup and cleanup activities.

=========================================================
Q12. Can we use page fixture in beforeAll()?
=========================================================

Answer:
No.

page fixture is test-scoped.

It is only available in:
- beforeEach()
- Test
- afterEach()

=========================================================
Q13. Real-Time Login Framework Example
=========================================================

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await loginPage.login();
});

test('Add Product', async ({ page }) => {
});

test('Delete Product', async ({ page }) => {
});

test.afterEach(async ({ page }) => {
  await homePage.logout();
});

=========================================================
Q14. Why do we use beforeEach() instead of beforeAll() for Login?
=========================================================

Answer:
Because every test should be independent.

If one test modifies data or logs out, other tests should not fail.

Therefore, we login before every test.

=========================================================
Q15. Why do we use afterEach()?
=========================================================

Answer:
For cleanup activities.

Examples:
- Logout
- Delete test data
- Close popups
- Take screenshots on failure

=========================================================
Q16. Most Important Interview Question
=========================================================

Question:
How are Hooks and Fixtures used in real-time projects?

Answer:
In real-time projects, fixtures provide ready-to-use resources such as browser, context, and page, while hooks are used to perform common 
setup and cleanup activities like opening the application, logging in,
logging out, and cleaning test data. This reduces duplicate code, improves maintainability, and ensures proper test isolation.

=========================================================
One-Line Definitions
=========================================================

Fixture:
A fixture is a ready-made resource that Playwright automatically creates and manages for our tests.

Hooks:
Hooks are special methods used to perform setup and cleanup activities before or after test execution.



| Method            | Purpose                                                                | Auto Wait                           | Example                                                   |
| ----------------- | ---------------------------------------------------------------------- | ----------------------------------- | --------------------------------------------------------- |
| `toContainText()` | Checks if the element contains the expected text (partial match).      | ✅ Yes                               | `await expect(locator).toContainText("Congratulations");` |
| `toHaveText()`    | Checks if the element text exactly matches the expected text.          | ✅ Yes                               | `await expect(locator).toHaveText("Login Successful");`   |
| `textContent()`   | Reads the text from the element and returns it.                        | ❌ No (just reads the current value) | `const text = await locator.textContent();`               |
| `includes()`      | JavaScript string method to check if a string contains another string. | ❌ Not a Playwright method           | `text?.includes("Congratulations")`                       |


toHaveText() → Exact match.
toContainText() → Partial match.
textContent() → Read the text.
includes() → Check a string in JavaScript.

Need to VERIFY (Assertion)?
        │
        ├── Exact text → toHaveText()
        │
        └── Partial text → toContainText()

Need to READ the text?
        │
        └── textContent()

Need to CHECK a string?
        │
        └── includes()





javascript command 
        const text = "Welcome to Playwright";

expect(text).toContain("Playwright");