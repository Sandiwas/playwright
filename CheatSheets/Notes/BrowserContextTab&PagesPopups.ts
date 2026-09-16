=========================================================
Browser Context APIs
=========================================================
Browser Context APIs
------------------------------------------------------------------------------------------------------------------------------------------------
| Method                      | Return Type              | Description                                      | When to Use                  | Example                     |
------------------------------------------------------------------------------------------------------------------------------------------------
| browser.newContext()        | Promise<BrowserContext>  | Creates a new isolated browser session.          | Create new user session      | browser.newContext()        |
| context.newPage()           | Promise<Page>            | Opens a new tab/page in the context.             | Open a new tab               | context.newPage()           |
| context.pages()             | Page[]                   | Returns all opened tabs/pages.                   | Count or switch tabs         | context.pages()             |
| context.cookies()           | Promise<Cookie[]>        | Returns all cookies.                             | Read cookies                 | context.cookies()           |
| context.addCookies()        | Promise<void>            | Adds cookies to the browser context.             | Set login cookies            | context.addCookies([...])  |
| context.clearCookies()      | Promise<void>            | Deletes all cookies.                             | Clear session                | context.clearCookies()      |
| context.storageState()      | Promise<object>          | Saves cookies and local storage.                 | Save login state             | context.storageState()      |
| context.close()             | Promise<void>            | Closes the browser context.                      | End session                  | context.close()             |
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------


=========================================================
Tabs & Pages APIs
=========================================================

------------------------------------------------------------------------------------------------------------------------------------------------
| Method                            | Return Type      | Description                                   | When to Use                | Example                     |
------------------------------------------------------------------------------------------------------------------------------------------------
| context.newPage()                | Promise<Page>    | Opens a new tab/page.                         | Open new tab               | context.newPage()           |
| context. ()                  | Page[]           | Returns all opened tabs.                      | Get all tabs               | context.pages()             |
| context.waitForEvent("page")     | Promise<Page>    | Waits for a newly opened tab/page.            | Handle new tab             | context.waitForEvent()      |
| page.waitForEvent("popup")       | Promise<Page>    | Waits for a popup from current page.          | Handle popup window        | page.waitForEvent()         |
| page.close()                     | Promise<void>    | Closes the current tab.                       | Close tab                  | page.close()                |
| page.url()                       | string           | Returns current page URL.                     | Get URL                    | page.url()                  |
| page.title()                     | Promise<string>  | Returns page title.                           | Get page title             | page.title()                |
| page.bringToFront()              | Promise<void>    | Brings tab to the front.                      | Switch tabs                | page.bringToFront()         |
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------


=========================================================
Examples
=========================================================

------------------------------------------------------------------------------------------------------------------------------------------------
| Scenario                      | Code Example                                                                                 |
------------------------------------------------------------------------------------------------------------------------------------------------
| Create Browser Context        | const context = await browser.newContext();                                                  |
| Open New Tab                  | const page = await context.newPage();                                                        |
| Get All Tabs                  | const pages = context.pages();                                                               |
| Handle New Tab                | const [newTab] = await Promise.all([context.waitForEvent("page"), button.click()]);          |
| Handle Popup                  | const popup = await page.waitForEvent("popup");                                              |
| Get Current URL               | console.log(page.url());                                                                     |
| Get Page Title                | console.log(await page.title());                                                             |
| Switch to Another Tab         | await pages[1].bringToFront();                                                               |
| Close Current Tab             | await page.close();                                                                          |
| Save Login State              | await context.storageState({ path: "auth.json" });                                           |
------------------------------------------------------------------------------------------------------------------------------------------------


=========================================================
Interview Questions & Answers
=========================================================

------------------------------------------------------------------------------------------------------------------------------------------------
| Question                                                     | Answer                                                      |
------------------------------------------------------------------------------------------------------------------------------------------------
| What is BrowserContext?                                      | An isolated browser session with its own cookies and cache. |
| Why do we use BrowserContext?                                | To create independent user sessions.                        |
| How do you open a new tab?                                   | const page = await context.newPage();                       |
| How do you get all opened tabs?                              | const pages = context.pages();                              |
| How do you handle a new tab?                                 | context.waitForEvent("page")                                |
| How do you handle a popup window?                            | page.waitForEvent("popup")                                  |
| Difference between popup and page event?                     | popup = current page only, page = any new tab in context.   |
| How do you switch tabs?                                      | await pages[1].bringToFront();                              |
| How do you close a tab?                                      | await page.close();                                         |
| How do you save login state?                                 | await context.storageState({path:"auth.json"});             |
| Real-world use of BrowserContext?                            | Multi-user, role-based, parallel execution testing.         |
------------------------------------------------------------------------------------------------------------------------------------------------

# Browser Context, Tabs & Popups - Interview Questions & Answers

=========================================================
Q1. What is BrowserContext in Playwright?
=========================================

Answer:
BrowserContext is an isolated browser session. Each context has its own cookies, cache, local storage, and session storage.

---

# Q2. Why do we use BrowserContext?

Answer:
We use BrowserContext to create independent user sessions without launching multiple browser instances.

---

# Q3. What is the difference between Browser and BrowserContext?

Answer:

Browser:

* Actual browser instance (Chrome, Edge, Firefox).

BrowserContext:

* Separate session inside the browser.
* Similar to an Incognito window.

---

# Q4. How do you create a BrowserContext?

Answer:

const context = await browser.newContext();

---

# Q5. How do you open a new tab in Playwright?

Answer:

const page = await context.newPage();

---

# Q6. How do you get all opened tabs/pages?

Answer:

const pages = context.pages();

---

# Q7. What is the return type of context.pages()?

Answer:

Page[]

It returns an array of Page objects.

---

# Q8. How do you handle a newly opened tab?

Answer:




---

# Q9. Why do we use Promise.all() while handling new tabs?

Answer:
To avoid missing the page event. It starts waiting for the new tab before performing the click action.

---

# Q10. How do you handle a popup window?

Answer:

const popup = await page.waitForEvent("popup");

await page.click("#popupBtn");

---

# Q11. What is the difference between context.waitForEvent("page") and page.waitForEvent("popup")?

Answer:

context.waitForEvent("page")

* Waits for any new tab/page opened in the browser context.

page.waitForEvent("popup")

* Waits only for a popup opened by the current page.

---

# Q12. How do you switch between tabs?

Answer:

const pages = context.pages();

await pages[1].bringToFront();

---

# Q13. How do you close the current tab?

Answer:

await page.close();

---

# Q14. How do you get the current URL?

Answer:

const url = page.url();

---

# Q15. How do you get the page title?

Answer:

const title = await page.title();

---

# Q16. How do you save login state?

Answer:

await context.storageState({
path: "auth.json"
});

---

# Q17. What is the use of storageState()?

Answer:
It saves cookies and local storage so that we can reuse the login session in another test.

---

# Q18. What is the return type of context.newPage()?

Answer:

Promise<Page>

---

# Q19. What is the return type of context.waitForEvent("page")?

Answer:

Promise<Page>

---

# Q20. What is the return type of page.waitForEvent("popup")?

Answer:

Promise<Page>

---

# Q21. Real-time use cases of BrowserContext?

Answer:

1. Multi-user testing.
2. Role-based testing (Admin/User).
3. Parallel execution.
4. Login state management.
5. Testing multiple sessions simultaneously.

---

# Q22. Can one Browser have multiple BrowserContexts?

Answer:
Yes. One Browser can have multiple BrowserContexts, and each context is completely isolated from others.

---

# Q23. Can one BrowserContext have multiple tabs/pages?

Answer:
Yes. One BrowserContext can have multiple tabs/pages.

---

# Q24. Explain Browser → Context → Page hierarchy.

Answer:

Browser
↓
BrowserContext (Session)
↓
Page (Tab)
↓
Locator (Element)

---

# Q25. Which method do you use most in real projects for new tabs?

Answer:

const [newPage] = await Promise.all([
context.waitForEvent("page"),
page.click()
]);

This is the most commonly used approach in real projects.

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
Real-Time Interview Questions on Browser Context, Tabs & Popups


# Real-Time Interview Questions on Browser Context, Tabs & Popups

### Q1. What is BrowserContext in Playwright?

**Answer:** BrowserContext is an isolated browser session that has its own cookies, cache, local storage, and session storage.

---

### Q2. Why do we use BrowserContext?

**Answer:** To create multiple independent user sessions without opening multiple browser instances.

---

### Q3. What is the difference between Browser and BrowserContext?

**Answer:**

* Browser → Actual browser instance (Chrome, Edge, Firefox).
* BrowserContext → Separate session inside the browser (like Incognito mode).

---

### Q4. Can one Browser have multiple BrowserContexts?

**Answer:** Yes. One browser can have multiple isolated BrowserContexts.

---

### Q5. Can one BrowserContext have multiple tabs/pages?

**Answer:** Yes. One BrowserContext can have multiple Page objects (tabs).

---

### Q6. How do you open a new tab?

**Answer:**

```ts
const page = await context.newPage();
```

---

### Q7. How do you get all opened tabs?

**Answer:**

```ts
const pages = context.pages();
```

---

### Q8. How do you handle a newly opened tab?

**Answer:**

```ts
const [newPage] = await Promise.all([
  context.waitForEvent("page"),
  page.click("#link")
]);
```

---

### Q9. Why do we use Promise.all() while handling tabs?

**Answer:** To start listening for the new page event before clicking and avoid missing the event.

---

### Q10. How do you handle a popup window?

**Answer:**

```ts
const popup = await page.waitForEvent("popup");
await page.click("#popupBtn");
```

---

### Q11. What is the difference between context.waitForEvent("page") and page.waitForEvent("popup")?

**Answer:**

* `context.waitForEvent("page")` → Waits for any new tab/page in the context.
* `page.waitForEvent("popup")` → Waits only for a popup opened by the current page.

---

### Q12. How do you switch between tabs?

**Answer:**

```ts
const pages = context.pages();
await pages[1].bringToFront();
```

---

### Q13. How do you close the current tab?

**Answer:**

```ts
await page.close();
```

---

### Q14. How do you get the current page URL?

**Answer:**

```ts
const url = page.url();
```

---

### Q15. How do you get the page title?

**Answer:**

```ts
const title = await page.title();
```

---

### Q16. How do you save login state?

**Answer:**

```ts
await context.storageState({
  path: "auth.json"
});
```

---

### Q17. What is the use of storageState()?

**Answer:** It saves cookies and local storage so that we can reuse the login session in another test.

---

### Q18. Explain Browser → Context → Page hierarchy.

**Answer:**

```text
Browser
   ↓
BrowserContext (Session)
   ↓
Page (Tab)
   ↓
Locator (Element)
```

---

### Q19. Real-world use cases of BrowserContext?

**Answer:**

1. Multi-user testing
2. Role-based testing
3. Parallel execution
4. Login state management
5. Testing multiple sessions simultaneously

---

### Q20. Which approach do you use in real projects for handling new tabs?

**Answer:**

```ts
const [newPage] = await Promise.all([
  context.waitForEvent("page"),
  page.click()
]);
```

This is the most commonly used and recommended approach in real projects.




## Real-Time Scenario

### Single User (Most Common)

```text
Browser
    │
    └── BrowserContext (1 User Session)
            │
            └── Page
```

Yehi 90% automation projects me hota hai.

Code:

```ts
const browser = await chromium.launch();

const context = await browser.newContext();

const page = await context.newPage();
```
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
================================================

### Multi-User Scenario (Less Common)

Agar ek hi test me **Admin aur Customer** dono ko login karna ho, tab multiple BrowserContexts use karte hain.

```text
Browser
    │
    ├── BrowserContext (Admin)
    │      └── Page
    │
    └── BrowserContext (Customer)
           └── Page
```

Code:

```ts
const browser = await chromium.launch();

const adminContext = await browser.newContext();
const customerContext = await browser.newContext();
```

================================================

## Interview Question

### Q. In real-time projects, do we usually create multiple BrowserContexts?

### Answer

No. In most real-time automation projects, we create **one Browser, one BrowserContext, and one Page** because we automate a single user session. Multiple BrowserContexts are used only when we need to test multiple independent users, such as Admin and Customer, in the same test.

================================================


Easy memory trick:

✅ 1 User → 1 BrowserContext (most common)
✅ 2 Users → 2 BrowserContexts
✅ 1 Browser can contain multiple BrowserContexts when needed


1 user multiplease user multiple brower context
Exactly. The easiest way to remember it is:
# Easy Memory Trick

```text
1 User
   ↓
1 BrowserContext

2 Users
   ↓
2 BrowserContexts

3 Users
   ↓
3 BrowserContexts
```

================================================

## Real-Time Example

### Single User

```text
Browser
    │
    └── BrowserContext (Sandip)
            │
            └── Page
```

================================================

### Two Users

```text
Browser
    │
    ├── BrowserContext (Admin)
    │      └── Page
    │
    └── BrowserContext (Customer)
           └── Page
```

================================================

### Three Users

```text
Browser
    │
    ├── BrowserContext (Admin)
    ├── BrowserContext (Customer)
    └── BrowserContext (Guest)
```

================================================

## Interview One-Line Answer

> **Each BrowserContext represents one independent user session. So, if we need to test multiple users simultaneously, we create one BrowserContext for each user.**

================================================




//browser - chromium,firefox,webkit 
//BrowserContext is an isolated browser session that provides separate cookies, cache, local storage, and session storage,
//allowing us to create and test multiple independent user sessions within a single browser instance.
// Browser
//    │
//    ├── BrowserContext (Admin User Session)
//    │      ├── Page1
//    │      └── Page2
//    │
//    ├── BrowserContext (Customer User Session)
//    │      ├── Page1
//    │      └── Page2
//    │
//    └── BrowserContext (Guest User Session)
//           └── Page1


// ## Structure

// ```text
// Browser
//     │
//     └── BrowserContext
//             │
//             ├── Page 1
//             ├── Page 2
//             ├── Page 3
//             └── Page 4
// ```


// Remember this formula:
// 1 Browser
//       ↓
// N Users
//       ↓
// N BrowserContexts
//       ↓
// Each BrowserContext can have Multiple Pages (Tabs)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

# Selenium - Open Multiple Tabs in Same Browser

```java
import java.util.ArrayList;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WindowType;
import org.openqa.selenium.chrome.ChromeDriver;

public class MultipleTabsDemo {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        // Open First Tab
        driver.get("https://www.google.com");

        // Open Second Tab
        driver.switchTo().newWindow(WindowType.TAB);
        driver.get("https://www.facebook.com");

        // Open Third Tab
        driver.switchTo().newWindow(WindowType.TAB);
        driver.get("https://www.amazon.in");

        // Get all tabs
        ArrayList<String> tabs = new ArrayList<>(driver.getWindowHandles());

        // Switch to First Tab
        driver.switchTo().window(tabs.get(0));

        // Switch to Second Tab
        driver.switchTo().window(tabs.get(1));

        // Switch to Third Tab
        driver.switchTo().window(tabs.get(2));
    }
}
```

================================================

# Output Structure

```text
Chrome Browser
    │
    ├── Google
    ├── Facebook
    └── Amazon
```

All three tabs share the **same user session**.

================================================

# Interview Question

## Q. Can Selenium create multiple tabs in the same browser?

### Answer

Yes. Selenium allows us to create multiple tabs or windows using `newWindow(WindowType.TAB)` or `newWindow(WindowType.WINDOW)`. All tabs belong to the same browser session and share cookies, cache, local storage, and session storage.

================================================

# Difference from Playwright

```text
Selenium

1 Browser
      │
      ├── Tab 1
      ├── Tab 2
      └── Tab 3

Same User Session
```

```text
Playwright

1 Browser
      │
      ├── BrowserContext 1
      │      ├── Page1
      │      └── Page2
      │
      └── BrowserContext 2
             └── Page1

Different User Sessions
```

================================================

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# BrowserContext - User Session Concept

---

# Example 1: One BrowserContext (Same User Session)

```ts
const browser = await chromium.launch();

const context = await browser.newContext();

const page1 = await context.newPage();
const page2 = await context.newPage();
```

### Structure

```text
Browser
    │
    └── BrowserContext (1 User Session)
            │
            ├── Page1
            └── Page2
```

### Explanation

You have:

- ✅ 1 Browser
- ✅ 1 BrowserContext
- ✅ 2 Pages (Tabs)

Both **Page1** and **Page2** belong to the **same BrowserContext**, so they share the **same browser session**.

That means they share:

- ✅ Cookies
- ✅ Cache
- ✅ Local Storage
- ✅ Session Storage

Both pages behave like two tabs opened by the same user.

================================================

# Example 2: Multiple BrowserContexts (Different User Sessions)

```ts
const browser = await chromium.launch();

const adminContext = await browser.newContext();
const customerContext = await browser.newContext();

const adminPage = await adminContext.newPage();
const customerPage = await customerContext.newPage();
```

### Structure

```text
Browser
    │
    ├── BrowserContext (Admin User Session)
    │       └── Page
    │
    └── BrowserContext (Customer User Session)
            └── Page
```

### Explanation

You have:

- ✅ 1 Browser
- ✅ 2 BrowserContexts
- ✅ 2 Different User Sessions

Now each BrowserContext has its own:

- ❌ Cookies (Not Shared)
- ❌ Cache (Not Shared)
- ❌ Local Storage (Not Shared)
- ❌ Session Storage (Not Shared)

Each BrowserContext behaves like a completely separate user.

================================================

# Interview Question

## Q. Does each Page have its own Browser Session?

### Answer

No.

A **browser session belongs to the BrowserContext**, not to the Page.

Multiple Pages created from the **same BrowserContext** share the same cookies, cache, local storage, and session storage because they belong to the same user session.

If you need different user sessions, you must create multiple BrowserContexts.

================================================

# Easy Memory Trick

```text
Browser
      │
      ├── BrowserContext = User Session
      │          │
      │          ├── Page (Tab)
      │          ├── Page (Tab)
      │          └── Page (Tab)
      │
      └── BrowserContext = Another User Session
                 │
                 ├── Page (Tab)
                 └── Page (Tab)
```

================================================

# Formula to Remember

```text
1 Browser
      ↓
Multiple BrowserContexts (User Sessions)
      ↓
Each BrowserContext
      ↓
Multiple Pages (Tabs)
```

================================================

# Interview One-Line Answer

> **BrowserContext represents a user session, while a Page represents a browser tab. Multiple Pages inside the same BrowserContext share the same session, whereas different BrowserContexts provide completely isolated user sessions.**

================================================




%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

Excellent interview question. Here's the professional explanation.


# Interview Question

## Q. Does Playwright use its own browser or the browser installed on the local machine?

### Answer

By default, Playwright uses **its own browser binaries**, which are downloaded when you install Playwright. It does **not** use the Chrome, Edge, or Firefox installed on your local machine unless you explicitly configure it.

================================================

## Default Behavior

When you run:

```ts
use: {
    browserName: "chromium"
}
```

or

```ts
projects: [
  {
    name: "chromium",
    use: {
      browserName: "chromium"
    }
  }
]
```

Playwright launches its **bundled Chromium browser**, not your locally installed Google Chrome.

================================================

## Browser Used

| Configuration | Browser Used |
|--------------|--------------|
| `browserName: "chromium"` | Playwright Chromium (bundled) |
| `browserName: "firefox"` | Playwright Firefox (bundled) |
| `browserName: "webkit"` | Playwright WebKit (bundled) |

================================================

## When does Playwright use the local browser?

Only if you specify a browser **channel**.

Example:

```ts
projects: [
  {
    name: "Google Chrome",
    use: {
      channel: "chrome"
    }
  }
]
```

Now Playwright uses the **Google Chrome installed on your machine**.

Similarly,

```ts
channel: "msedge"
```

uses the locally installed Microsoft Edge.

================================================

## Your Current Configuration

```ts
projects: [
  {
    name: "chromium",
    use: {
      browserName: "chromium"
    }
  }
]
```

This uses:

```text
Playwright's bundled Chromium
```

It does **not** use your local Chrome browser.

================================================

## Interview One-Line Answer

> By default, Playwright uses its own bundled browser binaries. It uses the locally installed browser only when a browser channel such as `chrome` or `msedge` is specified.

================================================




Easy Memory Trick

browserName: "chromium"
        ↓
Playwright Chromium ✅

channel: "chrome"
        ↓
Local Google Chrome ✅

channel: "msedge"
        ↓
Local Microsoft Edge ✅


This is one of the most frequently asked Playwright interview questions because many people 
incorrectly assume browserName: "chromium" launches the locally installed Chrome. It actually launches Playwright's own Chromium build.






# Your Configuration

```ts
projects: [
  {
    name: "chromium",
    use: {
      browserName: "chromium",
    }
  }
]
```

Here,

```ts
browserName: "chromium"
```

means Playwright launches its **built-in Chromium browser**.

It does **NOT** use the Google Chrome installed on your machine.

================================================

## If you want to use Local Google Chrome

```ts
projects: [
  {
    name: "Google Chrome",
    use: {
      channel: "chrome"
    }
  }
]
```

Now Playwright launches the **Google Chrome** installed on your local machine.

================================================

## If you want to use Local Microsoft Edge

```ts
projects: [
  {
    name: "Microsoft Edge",
    use: {
      channel: "msedge"
    }
  }
]
```

Now Playwright launches the **Microsoft Edge** installed on your machine.

================================================

## Summary

| Configuration | Browser Used |
|---------------|--------------|
| `browserName: "chromium"` | ✅ Playwright Built-in Chromium |
| `browserName: "firefox"` | ✅ Playwright Built-in Firefox |
| `browserName: "webkit"` | ✅ Playwright Built-in WebKit |
| `channel: "chrome"` | ✅ Local Google Chrome |
| `channel: "msedge"` | ✅ Local Microsoft Edge |

================================================

## Interview Question

### Q. Which browser is your current Playwright project using?

### Answer

My current project is using **Playwright's built-in Chromium browser** because the configuration uses:

```ts
browserName: "chromium"
```

If I want to use the locally installed Google Chrome or Microsoft Edge, I need to specify the browser `channel`, such as `channel: "chrome"` or `channel: "msedge"`.

================================================


Easy Memory Trick

browserName
      ↓
Playwright Browser ✅

channel
      ↓
Local Installed Browser ✅



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&



# Playwright Notes: context.waitForEvent('page') vs page.waitForEvent('popup')

## 1. context.waitForEvent('page')

### Syntax

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.locator("button:has-text('New Tab')").click()
]);
```

### Purpose

- Waits for any new Page created inside the BrowserContext.
- Listens at the BrowserContext level.

### Triggered When

- New Tab opens ✅
- Popup opens (window.open()) ✅
- Any new page is created in the BrowserContext ✅

### Returns

```ts
Page
```

---

## 2. page.waitForEvent('popup')

### Syntax

```ts
const [childPage] = await Promise.all([
    parentPage.waitForEvent('popup'),
    parentPage.locator("button:has-text('New Tab')").click()
]);
```

### Purpose

- Waits for a popup opened only by the current page.
- Listens at the Page level.

### Triggered When

- Current page executes window.open() ✅

### Returns

```ts
Page
```

---

# Why do we use Promise.all()?

Without Promise.all()

```ts
await parentPage.locator("button").click();

const pages = context.pages();
```

❌ Problem

The click may open the new tab before Playwright starts waiting.

This creates a Race Condition.

Sometimes:

```
pages.length = 1
```

Sometimes:

```
pages.length = 2
```

Not reliable.

---

Correct Way

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.locator("button").click()
]);
```

Playwright starts listening first and then performs the click.

This avoids Race Condition.

---

# Can we write this?

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('popup'),
    parentPage.locator("button").click()
]);
```

❌ No

Reason:

BrowserContext does not have a popup event.

You'll get an error like:

```
Error: Unknown browser context event: popup
```

---

# Difference Between page and popup

| Feature | context.waitForEvent('page') | page.waitForEvent('popup') |
|---------|-------------------------------|----------------------------|
| Listens On | BrowserContext | Page |
| Event Name | page | popup |
| Returns | Page | Page |
| Captures | Any new page in the BrowserContext | Popup opened by that specific page |
| Used For | New Tabs, Popups, New Pages | Popup from current page only |

---

# Visual Representation

BrowserContext

```
BrowserContext
│
├── Parent Page
│
├── Child Page      ← page event
│
└── Another Page    ← page event
```

Page

```
Parent Page
     │
     ├── window.open()
     │
     └── Popup Page ← popup event
```

---

# Which one should I use?

Use:

```ts
context.waitForEvent('page')
```

When:

- A new tab opens.
- You want to capture any new page in the BrowserContext.

Use:

```ts
page.waitForEvent('popup')
```

When:

- The popup is opened from the current page.
- You want to verify that the popup belongs to that page.

---

# Interview Questions

## Q1. Difference between context.waitForEvent('page') and page.waitForEvent('popup')?

Answer:

- context.waitForEvent('page') listens for any new page created in the BrowserContext.
- page.waitForEvent('popup') listens for a popup opened only by a specific page.
- Both return a Page object.

---

## Q2. Why use Promise.all()?

Answer:

Promise.all() starts listening for the event before the click action occurs, preventing race conditions where the new page or popup opens before the listener is registered.

---

## Q3. Does page.waitForEvent('popup') return a Popup object?

Answer:

No.

It returns a Page object because Playwright treats popups as Page objects.

---

## Q4. Can context.waitForEvent('page') capture a popup?

Answer:

Yes.

A popup opened using window.open() is also a new Page, so BrowserContext emits the page event.

---

## Q5. Can we use context.waitForEvent('popup')?

Answer:

No.

popup is not a BrowserContext event.
It is available only on the Page object.

---

# Easy Memory Trick

BrowserContext

```
page   ✅
popup ❌
```

Page

```
popup ✅
page  ❌
```

Remember:

- BrowserContext manages all pages → page event.
- Page opens another page using window.open() → popup event.# Playwright Notes: context.waitForEvent('page') vs page.waitForEvent('popup')

## 1. context.waitForEvent('page')

### Syntax

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.locator("button:has-text('New Tab')").click()
]);
```

### Purpose

- Waits for any new Page created inside the BrowserContext.
- Listens at the BrowserContext level.

### Triggered When

- New Tab opens ✅
- Popup opens (window.open()) ✅
- Any new page is created in the BrowserContext ✅

### Returns

```ts
Page
```

---

## 2. page.waitForEvent('popup')

### Syntax

```ts
const [childPage] = await Promise.all([
    parentPage.waitForEvent('popup'),
    parentPage.locator("button:has-text('New Tab')").click()
]);
```

### Purpose

- Waits for a popup opened only by the current page.
- Listens at the Page level.

### Triggered When

- Current page executes window.open() ✅

### Returns

```ts
Page
```

---

# Why do we use Promise.all()?

Without Promise.all()

```ts
await parentPage.locator("button").click();

const pages = context.pages();
```

❌ Problem

The click may open the new tab before Playwright starts waiting.

This creates a Race Condition.

Sometimes:

```
pages.length = 1
```

Sometimes:

```
pages.length = 2
```

Not reliable.

---

Correct Way

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    parentPage.locator("button").click()
]);
```

Playwright starts listening first and then performs the click.

This avoids Race Condition.

---

# Can we write this?

```ts
const [childPage] = await Promise.all([
    context.waitForEvent('popup'),
    parentPage.locator("button").click()
]);
```

❌ No

Reason:

BrowserContext does not have a popup event.

You'll get an error like:

```
Error: Unknown browser context event: popup
```

---

# Difference Between page and popup

| Feature | context.waitForEvent('page') | page.waitForEvent('popup') |
|---------|-------------------------------|----------------------------|
| Listens On | BrowserContext | Page |
| Event Name | page | popup |
| Returns | Page | Page |
| Captures | Any new page in the BrowserContext | Popup opened by that specific page |
| Used For | New Tabs, Popups, New Pages | Popup from current page only |

---

# Visual Representation

BrowserContext

```
BrowserContext
│
├── Parent Page
│
├── Child Page      ← page event
│
└── Another Page    ← page event
```

Page

```
Parent Page
     │
     ├── window.open()
     │
     └── Popup Page ← popup event
```

---

# Which one should I use?

Use:

```ts
context.waitForEvent('page')
```

When:

- A new tab opens.
- You want to capture any new page in the BrowserContext.

Use:

```ts
page.waitForEvent('popup')
```

When:

- The popup is opened from the current page.
- You want to verify that the popup belongs to that page.

---

# Interview Questions

## Q1. Difference between context.waitForEvent('page') and page.waitForEvent('popup')?

Answer:

- context.waitForEvent('page') listens for any new page created in the BrowserContext.
- page.waitForEvent('popup') listens for a popup opened only by a specific page.
- Both return a Page object.

---

## Q2. Why use Promise.all()?

Answer:

Promise.all() starts listening for the event before the click action occurs, preventing race conditions where the new page or popup opens before the listener is registered.

---

## Q3. Does page.waitForEvent('popup') return a Popup object?

Answer:

No.

It returns a Page object because Playwright treats popups as Page objects.

---

## Q4. Can context.waitForEvent('page') capture a popup?

Answer:

Yes.

A popup opened using window.open() is also a new Page, so BrowserContext emits the page event.

---

## Q5. Can we use context.waitForEvent('popup')?

Answer:

No.

popup is not a BrowserContext event.
It is available only on the Page object.

---

# Easy Memory Trick

BrowserContext

```
page   ✅
popup ❌
```

Page

```
popup ✅
page  ❌
```

Remember:

- BrowserContext manages all pages → page event.
- Page opens another page using window.open() → popup event.