====================================================================================================================================================
# Playwright `page` Fixture Methods

| Method                    | Return Type                 | What it Does (Easy Meaning)           | When to Use                     | Example                                                     |
| ------------------------- | --------------------------- | ------------------------------------- | ------------------------------- | ----------------------------------------------------------- |
| `page.goto()`             | `Promise<Response \| null>` | Opens a URL in browser                | Navigate to application         | `await page.goto("https://google.com");`                    |
| `page.title()`            | `Promise<string>`           | Returns page title                    | Validate page title             | `await page.title();`                                       |
| `page.url()`              | `string`                    | Returns current page URL              | Validate current URL            | `page.url();`                                               |
| `page.reload()`           | `Promise<Response \| null>` | Refreshes the current page            | Reload application              | `await page.reload();`                                      |
| `page.goBack()`           | `Promise<Response \| null>` | Navigates to previous page            | Browser back navigation         | `await page.goBack();`                                      |
| `page.goForward()`        | `Promise<Response \| null>` | Navigates to next page                | Browser forward navigation      | `await page.goForward();`                                   |
| `page.close()`            | `Promise<void>`             | Closes current tab/page               | Close tab after test            | `await page.close();`                                       |
| `page.locator()`          | `Locator`                   | Creates a locator                     | Find an element                 | `page.locator("#username");`                                |
| `page.getByText()`        | `Locator`                   | Finds element by text                 | Text-based locator              | `page.getByText("Login");`                                  |
| `page.getByRole()`        | `Locator`                   | Finds element by role                 | Accessibility locator           | `page.getByRole("button");`                                 |
| `page.getByLabel()`       | `Locator`                   | Finds element by label                | Form elements                   | `page.getByLabel("Username");`                              |
| `page.getByPlaceholder()` | `Locator`                   | Finds element by placeholder          | Input fields                    | `page.getByPlaceholder("Enter Name");`                      |
| `page.getByTestId()`      | `Locator`                   | Finds element by test id              | Stable locators                 | `page.getByTestId("login-btn");`                            |
| `page.getByAltText()`     | `Locator`                   | Finds image by alt text               | Image validation                | `page.getByAltText("Logo");`                                |
| `page.getByTitle()`       | `Locator`                   | Finds element by title attribute      | Tooltip validation              | `page.getByTitle("Search");`                                |
| `page.getByRole()`        | `Locator`                   | Finds element using ARIA role         | Accessibility testing           | `page.getByRole("textbox");`                                |
| `page.waitForURL()`       | `Promise<void>`             | Waits until URL changes               | Navigation validation           | `await page.waitForURL("**/home");`                         |
| `page.waitForLoadState()` | `Promise<void>`             | Waits for page load state             | Wait for loading                | `await page.waitForLoadState("networkidle");`               |
| `page.waitForResponse()`  | `Promise<Response>`         | Waits for API response                | API synchronization             | `await page.waitForResponse("**/users");`                   |
| `page.waitForRequest()`   | `Promise<Request>`          | Waits for API request                 | Request validation              | `await page.waitForRequest("**/users");`                    |
| `page.waitForEvent()`     | `Promise<any>`              | Waits for page event                  | Popup/download handling         | `await page.waitForEvent("popup");`                         |
| `page.waitForFunction()`  | `Promise<JSHandle>`         | Waits until JS condition becomes true | Custom waiting                  | `await page.waitForFunction(() => window.loaded);`          |
| `page.waitForTimeout()`   | `Promise<void>`             | Hard wait for given milliseconds      | Debugging only                  | `await page.waitForTimeout(2000);`                          |
| `page.screenshot()`       | `Promise<Buffer>`           | Takes screenshot of page              | Failure debugging               | `await page.screenshot();`                                  |
| `page.pdf()`              | `Promise<Buffer>`           | Generates PDF (Chromium only)         | Download reports                | `await page.pdf();`                                         |
| `page.setViewportSize()`  | `Promise<void>`             | Sets browser window size              | Responsive testing              | `await page.setViewportSize({ width: 1280, height: 720 });` |
| `page.frame()`            | `Frame \| null`             | Returns a frame by name/url           | Handle iframe                   | `page.frame({ name: "frame1" });`                           |
| `page.frameLocator()`     | `FrameLocator`              | Creates frame locator                 | Work inside iframe              | `page.frameLocator("#frame");`                              |
| `page.frames()`           | `Frame[]`                   | Returns all frames                    | Count/iterate frames            | `page.frames();`                                            |
| `page.on()`               | `void`                      | Registers event listener              | Alert, popup, download handling | `page.on("dialog", handler);`                               |
| `page.keyboard`           | `Keyboard`                  | Keyboard actions object               | Press keys                      | `page.keyboard.press("Enter");`                             |
| `page.mouse`              | `Mouse`                     | Mouse actions object                  | Hover, drag-drop                | `page.mouse.click(100,100);`                                |

---

# Most Commonly Used in Real Projects

```ts id="0vx3o4"
await page.goto(url);
await page.title();
page.url();
page.locator();
await page.waitForURL();
await page.waitForLoadState();
await page.screenshot();
page.frameLocator();
page.on();
```

# Interview Question

**Q: What is the `page` fixture in Playwright?**

**Answer:**

```text id="ld3e7m"
The page fixture represents a single browser tab or page.
Using the page object, we can perform navigation, locate elements, handle frames, waits, screenshots, mouse, keyboard, and browser events.
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Page Methods Categorized by Auto-Waiting

## 1. Auto-Waiting Methods (✅ Wait Internally)

These methods automatically wait for the expected condition before proceeding.

| Method                    | Return Type                 | What does it wait for?                | Example                                     |
| ------------------------- | --------------------------- | ------------------------------------- | ------------------------------------------- |
| `page.goto()`             | `Promise<Response \| null>` | Waits for page navigation/load        | `await page.goto(url);`                     |
| `page.waitForURL()`       | `Promise<void>`             | Waits until URL matches               | `await page.waitForURL("**/home");`         |
| `page.waitForLoadState()` | `Promise<void>`             | Waits for load state                  | `await page.waitForLoadState();`            |
| `page.waitForResponse()`  | `Promise<Response>`         | Waits for API response                | `await page.waitForResponse("**/users");`   |
| `page.waitForRequest()`   | `Promise<Request>`          | Waits for API request                 | `await page.waitForRequest("**/users");`    |
| `page.waitForEvent()`     | `Promise<any>`              | Waits for an event                    | `await page.waitForEvent("popup");`         |
| `page.waitForFunction()`  | `Promise<JSHandle>`         | Waits until JS condition becomes true | `await page.waitForFunction(() => loaded);` |
| `page.goBack()`           | `Promise<Response \| null>` | Waits for navigation                  | `await page.goBack();`                      |
| `page.goForward()`        | `Promise<Response \| null>` | Waits for navigation                  | `await page.goForward();`                   |
| `page.reload()`           | `Promise<Response \| null>` | Waits for reload completion           | `await page.reload();`                      |

---

## 2. Non-Auto-Waiting / Getter Methods (❌ Read Current State Only)

These methods read the current state once and return immediately.

| Method                    | Return Type       | What does it return?       | Example                                |
| ------------------------- | ----------------- | -------------------------- | -------------------------------------- |
| `page.title()`            | `Promise<string>` | Current page title         | `await page.title();`                  |
| `page.url()`              | `string`          | Current URL                | `page.url();`                          |
| `page.frame()`            | `Frame \| null`   | Frame object               | `page.frame({ name: "frame1" });`      |
| `page.frameLocator()`     | `FrameLocator`    | Frame locator              | `page.frameLocator("#frame");`         |
| `page.frames()`           | `Frame[]`         | All frames                 | `page.frames();`                       |
| `page.locator()`          | `Locator`         | Locator object             | `page.locator("#user");`               |
| `page.getByText()`        | `Locator`         | Locator by text            | `page.getByText("Login");`             |
| `page.getByRole()`        | `Locator`         | Locator by role            | `page.getByRole("button");`            |
| `page.getByLabel()`       | `Locator`         | Locator by label           | `page.getByLabel("Username");`         |
| `page.getByPlaceholder()` | `Locator`         | Locator by placeholder     | `page.getByPlaceholder("Enter Name");` |
| `page.getByTestId()`      | `Locator`         | Locator by test id         | `page.getByTestId("login-btn");`       |
| `page.getByAltText()`     | `Locator`         | Locator by alt text        | `page.getByAltText("Logo");`           |
| `page.getByTitle()`       | `Locator`         | Locator by title attribute | `page.getByTitle("Search");`           |
| `page.screenshot()`       | `Promise<Buffer>` | Screenshot buffer          | `await page.screenshot();`             |
| `page.pdf()`              | `Promise<Buffer>` | PDF buffer                 | `await page.pdf();`                    |
| `page.setViewportSize()`  | `Promise<void>`   | Sets viewport size         | `await page.setViewportSize({...});`   |
| `page.close()`            | `Promise<void>`   | Closes page                | `await page.close();`                  |
| `page.on()`               | `void`            | Registers event listener   | `page.on("dialog", fn);`               |
| `page.keyboard`           | `Keyboard`        | Keyboard object            | `page.keyboard.press("Enter");`        |
| `page.mouse`              | `Mouse`           | Mouse object               | `page.mouse.click(100,100);`           |

---

# Assertions on Page (Auto-Retry Assertions ✅)

| Assertion                          | Default Timeout |
| ---------------------------------- | --------------- |
| `await expect(page).toHaveURL()`   | 5 sec           |
| `await expect(page).toHaveTitle()` | 5 sec           |

These assertions continuously retry until the condition becomes true or timeout is reached.

---

# Easy Memory Trick

```text
page.waitXXX()       → Auto Waiting ✅
page.goto()          → Auto Waiting ✅
page.reload()        → Auto Waiting ✅

page.title()         → Read Once ❌
page.url()           → Read Once ❌
page.locator()       → Creates Locator ❌
page.frame()         → Read Once ❌

expect(page)...      → Auto Retry Assertion ✅
```

# Interview Answer

```text
Not all page methods are auto-waiting.

Methods like goto(), waitForURL(), waitForResponse(), and reload() wait internally for a condition.

Methods like title(), url(), frame(), and locator() simply return the current state and do not perform any waiting.
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Playwright Assertions for `page` Fixture

| Assertion Method             | Return Type     | What it Checks (Easy Meaning) | Auto Retry | Default Timeout | Example                                                  |
| ---------------------------- | --------------- | ----------------------------- | ---------- | --------------- | -------------------------------------------------------- |
| `expect(page).toHaveURL()`   | `Promise<void>` | Verifies current page URL     | ✅ Yes      | 5 sec           | `await expect(page).toHaveURL("https://demo.com/home");` |
| `expect(page).toHaveTitle()` | `Promise<void>` | Verifies page title           | ✅ Yes      | 5 sec           | `await expect(page).toHaveTitle("Dashboard");`           |

---

# Internal Working

### `toHaveURL()`

```text id="l5j1uc"
expect(page).toHaveURL("/home")
          ↓
Read current URL
          ↓
URL matched?
     ┌───────────┐
     │           │
    No          Yes
     │           │
Retry again     Pass
     │
Timeout (5 sec)
```

### `toHaveTitle()`

```text id="6z0r5r"
expect(page).toHaveTitle("Dashboard")
          ↓
Read current title
          ↓
Title matched?
     ┌───────────┐
     │           │
    No          Yes
     │           │
Retry again     Pass
     │
Timeout (5 sec)
```

---

# Most Common Usage

```ts id="6q9t0m"
await expect(page).toHaveURL("https://demo.com/home");
await expect(page).toHaveTitle("Dashboard");
```

---

# Interview Question

**Q: Which assertions are available for the `page` fixture?**

**Answer:**

```text id="kqf0i7"
Playwright provides two built-in assertions for the page fixture:

1. expect(page).toHaveURL()
2. expect(page).toHaveTitle()

Both are auto-retrying assertions and keep checking the condition until it becomes true or the timeout is reached.
```
