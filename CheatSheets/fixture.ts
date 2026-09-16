



===================================================================================================================================================================================================================================================================================
Playwright Fixture Lifecycle
| Step                  | Internal Code                                 | What Happens                                           | Interview Explanation                                                                                                             |
| --------------------- | --------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **1. Launch Browser** | `const browser = await chromium.launch();`    | Playwright starts the browser (Chrome, Firefox, Edge). | **First, Playwright launches the browser instance that will execute the tests.**                                                  |
| **2. Create Context** | `const context = await browser.newContext();` | Creates a fresh browser session (like Incognito mode). | **A new browser context is created to ensure test isolation. Cookies, local storage, and sessions are not shared between tests.** |
| **3. Create Page**    | `const page = await context.newPage();`       | Opens a new browser tab.                               | **A new page (tab) is created where the test interacts with the application.**                                                    |
| **4. Execute Test**   | `await page.goto(...);`                       | Your test steps run on the page.                       | **The actual test actions such as navigation, clicking, filling forms, and validations are performed.**                           |
| **5. Close Page**     | `await page.close();`                         | Closes the current tab.                                | **After the test finishes, Playwright closes the page to free resources.**                                                        |
| **6. Close Context**  | `await context.close();`                      | Closes the browser session.                            | **The browser context is closed, clearing cookies, local storage, and session data.**                                             |
| **7. Close Browser**  | `await browser.close();`                      | Closes the browser completely.                         | **Finally, the browser instance is closed and the test execution ends.**                                                          |



=====================================================================================================================================================================================================================================================================================

Visual Flow
Launch Browser
       ↓
Create Context
       ↓
Create Page
       ↓
Execute Test
       ↓
Close Page
       ↓
Close Context
       ↓
Close Browser

Instead of "isolated browser session", you can use these simpler words:

separate browser session ✅ (best for interviews)
independent browser session
new browser session
private browser session

When a Playwright test starts, it first launches the browser, then creates a new browser context,
which is a separate browser session for each test, and then opens a new page (tab).
The test actions are executed on this page. After the test completes, Playwright automatically 
closes the page, the context (session), and finally the browser to clean up resources.

Simple Interview Version

Playwright first launches the browser, then creates a new isolated browser session (context), 
and then opens a new tab (page). After the test execution, it automatically closes the page, the session, and finally the browser.

Simple Definition

| Fixture   | Simple Explanation                                                 |
| --------- | ------------------------------------------------------------------ |
| `browser` | Launches the browser.                                              |
| `context` | Creates a new isolated browser session (like an Incognito window). |
| `page`    | Opens a new tab inside that session.                               |

"Browser context is an isolated browser session. Each context has its own cookies, local storage, and session storage, so tests do not affect each other."
Easy way to remember

Browser  → Entire Chrome window
Context  → One Incognito session
Page     → One tab inside that session

=================================================================================================================================================================
fixture  
"Fixture is a ready-made object or resource that Playwright automatically provides to our test so that we don't have to create it manually every time."

Example

Without fixture:
const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

With fixture:
test('My Test', async ({ page }) => {
  await page.goto('https://google.com');
});

Interview Answer

"A fixture is a reusable setup mechanism that provides ready-to-use resources like browser, context, and page to our tests. It reduces duplicate code and helps maintain test isolation."

Super Simple Version

"Fixture means Playwright gives us ready-made objects like page, browser, and context so we don't have to create and clean them up manually." 👍

Real-Life Example
Hotel Room = Fixture

You don't build the room yourself.
The hotel gives you a ready room to use.

Similarly, Playwright gives you ready objects like page and browser to use in your tests.

Interview Answer
Playwright fixtures are ready-made objects that Playwright creates and manages automatically. Internally, the browser fixture launches the browser, 
the context fixture creates a new browser session, and the page fixture opens a new tab. After the test completes, Playwright automatically cleans up these resources.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Hooks available in Playwright
test.beforeAll()
test.beforeEach()
test.afterEach()
test.afterAll()

Quick Notes
| Hook           | Runs                  |
| -------------- | --------------------- |
| `beforeAll()`  | Once before all tests |
| `beforeEach()` | Before every test     |
| `afterEach()`  | After every test      |
| `afterAll()`   | Once after all tests  |






Detailed Interview Answer for Hooks

Hooks are special methods provided by Playwright that allow us to execute setup and cleanup code before or after test execution. They help us avoid writing the same code repeatedly in every test, making our test scripts cleaner, reusable, and easier to maintain.

For example, if every test needs to open the application and log in, instead of writing that code in each test, we can place it inside beforeEach(). Similarly, if we need to log out, take screenshots on failure, or clean up test data, we can use afterEach().

Playwright provides four hooks:

beforeAll() → Runs once before all tests.
beforeEach() → Runs before every test.
afterEach() → Runs after every test.
afterAll() → Runs once after all tests.

Hooks improve code reusability, reduce duplication, and make test maintenance easier.

=======================================
test.beforeAll(async () => {
  console.log('Before All');
});

test.beforeEach(async ({ page }) => {
  await page.goto('https://google.com');
});

test.afterEach(async () => {
  console.log('After Each');
});

test.afterAll(async () => {
  console.log('After All');
});

beforeAll

beforeEach
Test 1
afterEach

beforeEach
Test 2
afterEach

afterAll


Interview One-Liner

Hooks are special methods that execute setup and cleanup code before or after tests, helping us avoid duplicate code and improve test maintenance.

test.beforeEach(async ({ page }) => {
  await page.goto('https://example.com');
  // Login code
});

test.afterEach(async ({ page }) => {
  // Logout code
});

Short Interview Answer

Hooks are special methods used to perform setup and cleanup activities before or after test execution. They help reduce duplicate code and improve the maintainability of test automation scripts.

=================================================================================================================================================================================================
Jab tum likhte ho:
test('My Test', async ({ page }) => {
  await page.goto('https://google.com');
});

Tumne page maanga ({ page }).

Playwright sochta hai:

"User ko page chahiye, lekin page banane ke liye mujhe context chahiye. Aur context banane ke liye browser chahiye."

To internally ye karta hai:

const browser = await chromium.launch();
const context = await browser.newContext();
const page = await context.newPage();

await testFunction(page);

await page.close();
await context.close();
await browser.close();

Ye automatically kaise pata chalta hai?

Because page, context, browser are built-in fixtures registered inside Playwright Test Runner.

Jab tum likhte ho:

async ({ page })

Playwright fixture registry check karta hai:

page
 └── depends on context
          └── depends on browser

Aur phir automatically create kar deta hai.

Dependency Chain
| Fixture   | Depends On |
| --------- | ---------- |
| `browser` | Nothing    |
| `context` | `browser`  |
| `page`    | `context`  |


Execution Flow
You ask for page
        ↓
Playwright sees page needs context
        ↓
Context needs browser
        ↓
Create browser
        ↓
Create context
        ↓
Create page
        ↓
Run your hook/test
        ↓
Cleanup in reverse order

=======================================================================================================================================================================
What you write

test('My Test', async ({ page }) => {
  await page.goto('https://google.com');
});

What Playwright does internally (approximately)

const browser = await chromium.launch();      // Before Hooks
const context = await browser.newContext();   // Before Hooks
const page = await context.newPage();         // Before Hooks

// Your test starts
await page.goto('https://google.com');

// After Hooks
await page.close();
await context.close();
await browser.close();

If you add hooks


Launch Browser
Create Context
Create Page
beforeEach
Test Body
afterEach
Close Page
Close Context
Close Browser
------------------------------------------------------

Before Hooks
-------------
Launch Browser
Create Context
Create Page

Test Execution
--------------
Execute Test Steps

After Hooks
------------
Close Page
Close Context
Close Browser


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Bhai, agar tum Before Hooks aur After Hooks ko code se samajhna chahte ho, to internally Playwright kuch aisa karta hai:

import { chromium } from '@playwright/test';

// ===== Before Hooks =====
console.log('Launch Browser');
const browser = await chromium.launch();

console.log('Create Context');
const context = await browser.newContext();

console.log('Create Page');
const page = await context.newPage();

// ===== Test Execution =====
await page.goto('https://google.com');
console.log('Execute Test');

// ===== After Hooks =====
console.log('Close Page');
await page.close();

console.log('Close Context');
await context.close();

console.log('Close Browser');
await browser.close();

Output

Before Hooks
-------------
Launch Browser
Create Context
Create Page

Test Execution
--------------
Execute Test

After Hooks
------------
Close Page
Close Context
Close Browser

Important: Tum ye code normally Playwright me nahi likhte.

Tum sirf likhte ho:

test('My Test', async ({ page }) => {
  await page.goto('https://google.com');
});


Aur Playwright automatically:

Launch Browser
Create Context
Create Page
↓
Run Test
↓
Close Page
Close Context
Close Browser